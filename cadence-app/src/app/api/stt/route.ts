import { NextRequest, NextResponse } from 'next/server';
import OpenAI, { toFile } from 'openai';
import { requirePlus } from '@/lib/auth';
import { rateLimit } from '@/lib/rateLimit';

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

    const response = await openai.audio.transcriptions.create(requestParams);

    return NextResponse.json({ transcript: response.text });
  } catch (error) {
    const e = error as Error;
    console.error('STT API error:', e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
