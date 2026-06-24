import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

export async function POST(req: NextRequest) {
  try {
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || 'dummy-key' });

    const { messages, lang, finish } = await req.json();

    // Mateo persona prompts from the prototype
    const history = messages
      .map((m: any) => (m.who === 'p' ? 'Mateo: ' : 'Learner: ') + m.n)
      .join('\n');

    const systemPrompt = finish
      ? `You are Mateo, a warm language tutor running a spoken placement check in ${lang}. Based on the conversation, estimate the learner's CEFR level. Conversation:\n${history}\n\nReturn your response in a JSON object with properties 'reply' (a short warm closing line in ${lang}), 'english' (English translation of the reply), and 'level' (one of: A1, A2, B1, B2).`
      : `You are Mateo, a warm tutor running a short spoken placement check in ${lang}. Ask ONE next question, ONLY in ${lang}, slightly harder than the last, max ~14 words. Conversation:\n${history}\n\nReturn your response in a JSON object with properties 'reply' (your question in ${lang}) and 'english' (English translation).`;

    const chatMessages = [
      { role: 'system' as const, content: systemPrompt },
    ];

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: chatMessages,
      max_tokens: 250,
      temperature: 0.7,
      response_format: { type: 'json_object' },
    });

    const raw = completion.choices[0]?.message?.content || '{}';
    let data;
    try {
      data = JSON.parse(raw);
    } catch {
      const a = raw.indexOf('{'), b = raw.lastIndexOf('}');
      if (a >= 0 && b >= 0) {
        data = JSON.parse(raw.slice(a, b + 1));
      } else {
        data = { reply: raw, english: '', level: 'A2' };
      }
    }

    return NextResponse.json(data);
  } catch (error: any) {
    console.error('Placement API error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
