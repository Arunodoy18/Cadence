import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/auth';
import { rateLimit } from '@/lib/rateLimit';
import { azureVoices } from '@/lib/azureVoices';

const escapeXml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');

// Primary: Azure neural voices (free tier, same key already used for
// pronunciation scoring). Fallback: ElevenLabs if a paid key is configured.
// If neither works the app speaks with the phone's own text-to-speech.
async function azureSpeak(text: string, lang: string): Promise<Buffer | null> {
  const key = process.env.AZURE_API_KEY;
  const entry = azureVoices[lang.split('-')[0]];
  if (!key || !entry) return null;
  const region = process.env.AZURE_REGION || 'southeastasia';

  const ssml = `<speak version="1.0" xml:lang="${entry.locale}"><voice name="${entry.voice}"><prosody rate="-8%">${escapeXml(text)}</prosody></voice></speak>`;
  const res = await fetch(`https://${region}.tts.speech.microsoft.com/cognitiveservices/v1`, {
    method: 'POST',
    headers: {
      'Ocp-Apim-Subscription-Key': key,
      'Content-Type': 'application/ssml+xml',
      'X-Microsoft-OutputFormat': 'audio-24khz-48kbitrate-mono-mp3',
      'User-Agent': 'cadence',
    },
    body: ssml,
  });
  if (!res.ok) {
    console.error('Azure TTS error:', res.status, (await res.text()).slice(0, 200));
    return null;
  }
  return Buffer.from(await res.arrayBuffer());
}

async function elevenLabsSpeak(text: string): Promise<Buffer | null> {
  const key = process.env.ELEVEN_LABS_API;
  if (!key) return null;
  const voiceId = process.env.ELEVEN_LABS_VOICE_ID || '21m00Tcm4TlvDq8ikWAM';
  const res = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}?optimize_streaming_latency=1`, {
    method: 'POST',
    headers: { Accept: 'audio/mpeg', 'xi-api-key': key, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      text,
      model_id: 'eleven_multilingual_v2',
      voice_settings: { stability: 0.5, similarity_boost: 0.75 },
    }),
  });
  if (!res.ok) {
    console.error('ElevenLabs TTS error:', res.status);
    return null;
  }
  return Buffer.from(await res.arrayBuffer());
}

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
    // Keep a single request bounded (cost + latency).
    const clipped = String(text).slice(0, 3000);

    const audio = (await azureSpeak(clipped, lang)) ?? (await elevenLabsSpeak(clipped));
    if (!audio) {
      return NextResponse.json({ error: 'Voice synthesis is unavailable right now' }, { status: 502 });
    }

    return new NextResponse(new Uint8Array(audio), {
      headers: {
        'Content-Type': 'audio/mpeg',
        'Content-Length': audio.length.toString(),
        'Cache-Control': 'private, max-age=3600',
      },
    });
  } catch (error) {
    const e = error as Error;
    console.error('TTS API error:', e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
