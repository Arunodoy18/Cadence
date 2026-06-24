import { NextRequest, NextResponse } from 'next/server';

const localeMap: { [key: string]: string } = {
  en: 'en-US',
  es: 'es-ES',
  fr: 'fr-FR',
  de: 'de-DE',
  it: 'it-IT',
  ja: 'ja-JP',
  ko: 'ko-KR',
  zh: 'zh-CN',
  hi: 'hi-IN',
  ar: 'ar-EG',
  he: 'he-IL',
  ru: 'ru-RU',
  pt: 'pt-BR',
  tr: 'tr-TR',
  vi: 'vi-VN',
  pl: 'pl-PL',
  nl: 'nl-NL',
  sv: 'sv-SE',
  no: 'no-NO',
  da: 'da-DK',
  fi: 'fi-FI',
  el: 'el-GR',
  th: 'th-TH',
  id: 'id-ID',
  ms: 'ms-MY',
  uk: 'uk-UA',
  cs: 'cs-CZ',
  ro: 'ro-RO',
  hu: 'hu-HU',
  bn: 'bn-IN',
};

export async function POST(req: NextRequest) {
  try {
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
    const url = `https://${azureRegion}.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1?language=${locale}`;

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

    if (!response.ok) {
      const errText = await response.text();
      console.error('Azure API response error:', errText);
      throw new Error(`Azure Speech API returned ${response.status}: ${errText}`);
    }

    const data = await response.json();

    if (data.RecognitionStatus !== 'Success') {
      return NextResponse.json({
        error: `Speech recognition status: ${data.RecognitionStatus}`,
        score: 0,
        words: [],
      });
    }

    const nBest = data.NBest?.[0];
    const pronAssessment = nBest?.PronunciationAssessment;

    if (!pronAssessment) {
      return NextResponse.json({ error: 'Pronunciation assessment data missing in response' }, { status: 500 });
    }

    // Map response to clean structure matching the spec
    const result = {
      score: pronAssessment.PronScore || 0,
      accuracyScore: pronAssessment.AccuracyScore || 0,
      fluencyScore: pronAssessment.FluencyScore || 0,
      completenessScore: pronAssessment.CompletenessScore || 0,
      words: (nBest.Words || []).map((w: any) => ({
        word: w.Word,
        accuracyScore: w.PronunciationAssessment?.AccuracyScore || 0,
        errorType: w.PronunciationAssessment?.ErrorType || 'None',
        phonemes: (w.Phonemes || []).map((p: any) => ({
          phoneme: p.Phoneme,
          accuracyScore: p.PronunciationAssessment?.AccuracyScore || 0,
        })),
      })),
    };

    return NextResponse.json(result);
  } catch (error: any) {
    console.error('Pronounce API error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
