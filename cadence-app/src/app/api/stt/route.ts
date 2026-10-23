import { NextRequest, NextResponse } from 'next/server';
import OpenAI, { toFile } from 'openai';
import { requirePlus } from '@/lib/auth';
import { rateLimit } from '@/lib/rateLimit';
import { consume, refund, limitResponse } from '@/lib/usage';
import { localeMap } from '@/lib/speechLocales';

export async function POST(req: NextRequest) {
  let charged: { userId: string; kind: any; units: number } | null = null;
  try {
    const auth = await requirePlus();
    if (auth.error) return auth.error;

    if (!rateLimit(`stt:${auth.user!.id}`, 30, 60_000)) {
      return NextResponse.json({ error: 'Too many requests — please slow down.' }, { status: 429 });
    }

    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || process.env.OPEN_AI_API || 'dummy-key' });

    let formData: FormData;
    try { formData = await req.formData(); } catch { return NextResponse.json({ error: 'Invalid request' }, { status: 400 }); }
    const audioFile = formData.get('file') as File | null;
    const lang = formData.get('lang');
    if (!audioFile || typeof audioFile === 'string') {
      return NextResponse.json({ error: 'No audio file provided' }, { status: 400 });
    }
    // A voice clip is a few seconds; refuse anything big before it reaches the paid speech API.
    if (audioFile.size > 5 * 1024 * 1024) {
      return NextResponse.json({ error: 'Recording is too large' }, { status: 413 });
    }
    if (lang !== null && (typeof lang !== 'string' || lang.length > 20)) {
      return NextResponse.json({ error: 'Invalid language' }, { status: 400 });
    }

    // Charge only for requests that are valid.
    const c = await consume(auth.user!.id, 'stt', 1);
    if (!c.ok) return limitResponse('stt', c);
    charged = { userId: auth.user!.id, kind: 'stt', units: 1 };

    const buffer = Buffer.from(await audioFile.arrayBuffer());
    const file = await toFile(buffer, 'audio.wav', { type: 'audio/wav' });

    const requestParams: any = {
      file: file,
      model: 'whisper-1',
    };

    if (lang) {
      // Whisper expects ISO-639-1 format (e.g. 'en', 'es', 'fr')
      requestParams.language = (lang as string).split('-')[0];
    }

    try {
      const response = await openai.audio.transcriptions.create(requestParams);
      return NextResponse.json({ transcript: response.text });
    } catch (openaiError) {
      // OpenAI unavailable (billing, outage, quota) — fall back to Azure Speech
      // so the mic keeps working instead of the whole feature going dark.
      console.error('Whisper failed, falling back to Azure STT:', (openaiError as Error).message);
      const transcript = await azureTranscribe(buffer, lang);
      return NextResponse.json({ transcript });
    }
  } catch (error) {
    if (charged) await refund(charged.userId, charged.kind, charged.units);
    const e = error as Error;
    console.error('STT API error:', e);
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}

async function azureTranscribe(audio: Buffer, lang: string | null): Promise<string> {
  const key = process.env.AZURE_API_KEY;
  const region = process.env.AZURE_REGION || 'southeastasia';
  if (!key) throw new Error('Speech recognition is unavailable right now');
  const locale = (lang && localeMap[lang.split('-')[0]]) || 'en-US';
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
  if (data.RecognitionStatus !== 'Success') return '';
  return data.DisplayText || '';
}
