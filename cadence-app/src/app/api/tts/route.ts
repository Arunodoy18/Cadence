import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/auth';
import { rateLimit } from '@/lib/rateLimit';

export async function POST(req: NextRequest) {
  try {
    const auth = await requireAuth();
    if (auth.error) return auth.error;

    if (!rateLimit(`tts:${auth.user!.id}`, 40, 60_000)) {
      return NextResponse.json({ error: 'Too many requests — please slow down.' }, { status: 429 });
    }

    const { text, lang } = await req.json();
    if (!text || !lang) {
      return NextResponse.json({ error: 'Text and language are required' }, { status: 400 });
    }

    // ElevenLabs TTS API call
    const elevenLabsApiKey = process.env.ELEVEN_LABS_API || '';
    if (!elevenLabsApiKey) {
      throw new Error('ELEVEN_LABS_API key is missing');
    }

    // Default to a highly realistic female voice (e.g., 'Rachel' or similar standard ElevenLabs voice ID)
    // You can replace this Voice ID with a specific one from your ElevenLabs account.
    const voiceId = '21m00Tcm4TlvDq8ikWAM'; // Rachel (default English/Multilingual)

    const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}?optimize_streaming_latency=1`, {
      method: 'POST',
      headers: {
        'Accept': 'audio/mpeg',
        'xi-api-key': elevenLabsApiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: text,
        model_id: 'eleven_multilingual_v2', // Great for accents and foreign languages
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.75,
        }
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('ElevenLabs TTS response error:', errText);
      throw new Error(`ElevenLabs TTS API returned ${response.status}: ${errText}`);
    }

    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    return new NextResponse(buffer, {
      headers: {
        'Content-Type': 'audio/mpeg',
        'Content-Length': buffer.length.toString(),
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (error) {
    const e = error as Error;
    console.error('TTS API error:', e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
