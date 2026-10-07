import { NextRequest, NextResponse } from 'next/server';
import OpenAI, { toFile } from 'openai';
import { requirePlus } from '@/lib/auth';
import { rateLimit } from '@/lib/rateLimit';
import { localeMap } from '@/lib/speechLocales';

export async function POST(req: NextRequest) {
  try {
    const auth = await requirePlus();
    if (auth.error) return auth.error;

    if (!rateLimit(`stt:${auth.user!.id}`, 30, 60_000)) {
      return NextResponse.json({ error: 'Too many requests — please slow down.' }, { status: 429 });
    }

    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || process.env.OPEN_AI_API || 'dummy-key' });

    const formData = await req.formData();
    const audioFile = formData.get('file') as File;
    const lang = formData.get('lang') as string;
    if (!audioFile) {
      return NextResponse.json({ error: 'No audio file provided' }, { status: 400 });
    }

    const buffer = Buffer.from(await audioFile.arrayBuffer());
    const file = await toFile(buffer, 'audio.wav', { type: 'audio/wav' });

    const requestParams: any = {
      file: file,
      model: 'whisper-1',
    };

    if (lang) {
      // Whisper expects ISO-639-1 format (e.g. 'en', 'es', 'fr')
      requestParams.language = lang.split('-')[0];
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
    const e = error as Error;
    console.error('STT API error:', e);
    return NextResponse.json({ error: e.message }, { status: 500 });
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
