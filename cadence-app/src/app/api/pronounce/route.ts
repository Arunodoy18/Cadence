import { NextRequest, NextResponse } from 'next/server';
import { requirePlus } from '@/lib/auth';
import { rateLimit } from '@/lib/rateLimit';
import { localeMap } from '@/lib/speechLocales';

export async function POST(req: NextRequest) {
  try {
    const auth = await requirePlus();
    if (auth.error) return auth.error;

    if (!rateLimit(`pronounce:${auth.user!.id}`, 30, 60_000)) {
      return NextResponse.json({ error: 'Too many requests — please slow down.' }, { status: 429 });
    }

    const formData = await req.formData();
    const audioFile = formData.get('file') as File;
    const refText = formData.get('refText') as string;
    const lang = formData.get('lang') as string;

    if (!audioFile || !refText || !lang) {
      return NextResponse.json({ error: 'Audio file, reference text, and language are required' }, { status: 400 });
    }

    const locale = localeMap[lang] || 'en-US';
    const azureKey = process.env.AZURE_API_KEY;
    const azureRegion = process.env.AZURE_REGION || 'southeastasia';

    if (!azureKey) {
      return NextResponse.json({ error: 'Azure API key is not configured' }, { status: 500 });
    }

    // Prepare JSON config for Pronunciation Assessment
    const pronConfigJson = JSON.stringify({
      ReferenceText: refText,
      GradingSystem: 'HundredMark',
      Granularity: 'Word',
      Dimension: 'Comprehensive',
    });

    const pronConfigBase64 = Buffer.from(pronConfigJson).toString('base64');
    const audioBuffer = Buffer.from(await audioFile.arrayBuffer());

    // Azure Speech to Text REST API endpoint for short audio
    const url = `https://${azureRegion}.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1?language=${locale}&format=detailed`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Ocp-Apim-Subscription-Key': azureKey,
        'Content-Type': 'audio/wav; codecs=audio/pcm; samplerate=16000',
        'Pronunciation-Assessment': pronConfigBase64,
        'Accept': 'application/json',
      },
      body: audioBuffer,
    });

    // Azure's phoneme-level scoring only exists for some locales (e.g. not
    // Malayalam, Kannada or Assamese). For those, fall back to a simpler but
    // honest score: how many of the reference words were recognised, in order.
    let data: any = null;
    if (response.ok) data = await response.json();
    const nBest0 = data?.NBest?.[0];
    if (!response.ok || (data?.RecognitionStatus === 'Success' && typeof nBest0?.PronScore === 'undefined')) {
      return NextResponse.json(await recognitionMatchScore(audioBuffer, locale, refText, azureKey, azureRegion));
    }

    if (data.RecognitionStatus !== 'Success') {
      return NextResponse.json({
        error: `Speech recognition status: ${data.RecognitionStatus}`,
        score: 0,
        words: [],
      });
    }

    const nBest = nBest0;

    // Map response to clean structure matching the spec
    const result = {
      score: nBest.PronScore || 0,
      accuracyScore: nBest.AccuracyScore || 0,
      fluencyScore: nBest.FluencyScore || 0,
      completenessScore: nBest.CompletenessScore || 0,
      words: (nBest.Words || []).map((w: any) => ({
        word: w.Word,
        accuracyScore: w.AccuracyScore || 0,
        errorType: w.ErrorType || 'None',
        phonemes: (w.Phonemes || []).map((p: any) => ({
          phoneme: p.Phoneme,
          accuracyScore: p.AccuracyScore || 0,
        })),
      })),
    };

    return NextResponse.json(result);
  } catch (error) {
    const e = error as Error;
    console.error('Pronounce API error:', e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

const normalize = (t: string) =>
  t.toLowerCase().replace(/[^\p{L}\p{M}\p{N}\s]/gu, ' ').split(/\s+/).filter(Boolean);

async function recognitionMatchScore(audio: Buffer, locale: string, refText: string, key: string, region: string) {
  const res = await fetch(
    `https://${region}.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1?language=${locale}&format=simple`,
    {
      method: 'POST',
      headers: {
        'Ocp-Apim-Subscription-Key': key,
        'Content-Type': 'audio/wav; codecs=audio/pcm; samplerate=16000',
        Accept: 'application/json',
      },
      body: new Uint8Array(audio),
    }
  );
  if (!res.ok) throw new Error(`Speech recognition failed (${res.status})`);
  const data = await res.json();
  if (data.RecognitionStatus !== 'Success') {
    return { error: `Speech recognition status: ${data.RecognitionStatus}`, score: 0, words: [] };
  }

  const ref = normalize(refText);
  const hyp = normalize(data.DisplayText || '');
  // Longest common subsequence: words said in the right order.
  const dp = Array.from({ length: ref.length + 1 }, () => new Array(hyp.length + 1).fill(0));
  for (let i = 1; i <= ref.length; i++)
    for (let j = 1; j <= hyp.length; j++)
      dp[i][j] = ref[i - 1] === hyp[j - 1] ? dp[i - 1][j - 1] + 1 : Math.max(dp[i - 1][j], dp[i][j - 1]);
  const matched = new Set<number>();
  for (let i = ref.length, j = hyp.length; i > 0 && j > 0; ) {
    if (ref[i - 1] === hyp[j - 1]) { matched.add(i - 1); i--; j--; }
    else if (dp[i - 1][j] >= dp[i][j - 1]) i--;
    else j--;
  }
  const score = ref.length ? Math.round((matched.size / ref.length) * 100) : 0;
  return {
    score,
    accuracyScore: score,
    fluencyScore: score,
    completenessScore: score,
    basic: true,
    words: ref.map((w, i) => ({
      word: w,
      accuracyScore: matched.has(i) ? 100 : 0,
      errorType: matched.has(i) ? 'None' : 'Omission',
      phonemes: [],
    })),
  };
}
