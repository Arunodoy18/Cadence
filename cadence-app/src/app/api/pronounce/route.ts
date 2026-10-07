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

  // Per-word credit: 1 for an exact match, partial for a close one (the
  // recogniser often swaps a letter or two in languages it knows less well).
  const similarity = (a: string, b: string) => {
    if (a === b) return 1;
    const m = a.length, n = b.length;
    if (!m || !n) return 0;
    const d = Array.from({ length: m + 1 }, (_, i) => [i, ...new Array(n).fill(0)]);
    for (let j = 1; j <= n; j++) d[0][j] = j;
    for (let i = 1; i <= m; i++)
      for (let j = 1; j <= n; j++)
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    const sim = 1 - d[m][n] / Math.max(m, n);
    return sim >= 0.5 ? sim : 0;
  };
  // Align in order: each reference word takes the best unused later hypothesis word.
  let cursor = 0;
  const credits = ref.map((w) => {
    let best = 0, at = -1;
    for (let j = cursor; j < hyp.length; j++) {
      const sc = similarity(w, hyp[j]);
      if (sc > best) { best = sc; at = j; }
    }
    if (at >= 0) cursor = at + 1;
    return best;
  });
  const score = ref.length ? Math.round((credits.reduce((x, y) => x + y, 0) / ref.length) * 100) : 0;
  return {
    score,
    accuracyScore: score,
    fluencyScore: score,
    completenessScore: score,
    basic: true,
    words: ref.map((w, i) => ({
      word: w,
      accuracyScore: Math.round(credits[i] * 100),
      errorType: credits[i] >= 0.8 ? 'None' : credits[i] > 0 ? 'Mispronunciation' : 'Omission',
      phonemes: [],
    })),
  };
}
