import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

export async function POST(req: NextRequest) {
  try {
    const { text, lang } = await req.json();
    if (!text || !lang) {
      return NextResponse.json({ error: 'Text and language are required' }, { status: 400 });
    }

    // Generate MD5 hash for caching
    const hash = crypto.createHash('md5').update(`${text}_${lang}`).digest('hex');
    const cacheDir = path.join(process.cwd(), 'public', 'tts-cache');
    
    // Ensure cache directory exists
    if (!fs.existsSync(cacheDir)) {
      fs.mkdirSync(cacheDir, { recursive: true });
    }
    
    const cachePath = path.join(cacheDir, `${hash}.mp3`);

    // Check cache
    if (fs.existsSync(cachePath)) {
      const audioBuffer = fs.readFileSync(cachePath);
      return new NextResponse(audioBuffer, {
        headers: {
          'Content-Type': 'audio/mpeg',
          'Content-Length': audioBuffer.length.toString(),
        },
      });
    }

    // ElevenLabs API call
    // Map languages to some default voices or use Rachel (21m00Tcm4TlvDq8ikWAM)
    const voiceMap: { [key: string]: string } = {
      es: 'EXAVITQu4vr4xnSDxMaL', // Bella (Spanish)
      fr: 'AZnzlk1XvdvUeBnXmlld', // Domi (French)
      ja: '21m00Tcm4TlvDq8ikWAM', // Rachel (supports Japanese well via multilingual model)
      ko: '21m00Tcm4TlvDq8ikWAM',
      zh: '21m00Tcm4TlvDq8ikWAM',
      hi: '21m00Tcm4TlvDq8ikWAM',
    };

    const voiceId = voiceMap[lang] || '21m00Tcm4TlvDq8ikWAM';
    const xiApiKey = process.env.ELEVEN_LABS_API || '';

    const elResponse = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
      method: 'POST',
      headers: {
        'xi-api-key': xiApiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: text,
        model_id: 'eleven_multilingual_v2',
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.75,
        },
      }),
    });

    if (!elResponse.ok) {
      const errText = await elResponse.text();
      console.error('ElevenLabs response error:', errText);
      throw new Error(`ElevenLabs API returned ${elResponse.status}: ${errText}`);
    }

    const arrayBuffer = await elResponse.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Save to cache
    fs.writeFileSync(cachePath, buffer);

    return new NextResponse(buffer, {
      headers: {
        'Content-Type': 'audio/mpeg',
        'Content-Length': buffer.length.toString(),
      },
    });
  } catch (error: any) {
    console.error('TTS API error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
