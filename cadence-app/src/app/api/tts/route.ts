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

    // OpenAI TTS API call
    const openaiApiKey = process.env.OPENAI_API_KEY || '';
    if (!openaiApiKey) {
      throw new Error('OPENAI_API_KEY is missing');
    }

    const response = await fetch('https://api.openai.com/v1/audio/speech', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openaiApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'tts-1',
        input: text,
        voice: 'nova', // 'alloy', 'echo', 'fable', 'onyx', 'nova', 'shimmer'
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('OpenAI TTS response error:', errText);
      throw new Error(`OpenAI TTS API returned ${response.status}: ${errText}`);
    }

    const arrayBuffer = await response.arrayBuffer();
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
