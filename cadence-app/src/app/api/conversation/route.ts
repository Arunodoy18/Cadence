import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: NextRequest) {
  try {
    const { messages, lang, scenario, partnerName, persona, level } = await req.json();

    // Build the system prompt exactly like the prototype's aiReply()
    const systemPrompt = `You are ${partnerName}, ${persona}. You are role-playing a short conversation with a learner of ${lang}. Rules: reply ONLY in ${lang}, ONE short natural sentence (max ~14 words) at ${level} level; stay in character and in the scene; when natural, end with a simple question to keep the chat going. Also give a one-line English translation, and a short, encouraging tip about the learner's LAST message (grammar, word choice or politeness) — or an empty string if it was already good. You must return your response in a JSON object with properties 'reply', 'english', and 'tip'.`;

    const chatMessages = [
      { role: 'system' as const, content: systemPrompt },
      ...messages.map((m: any) => ({
        role: m.who === 'p' ? 'assistant' as const : 'user' as const,
        content: m.n,
      })),
    ];

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: chatMessages,
      max_tokens: 200,
      temperature: 0.8,
      response_format: { type: 'json_object' },
    });

    const raw = completion.choices[0]?.message?.content || '{}';
    let data;
    try {
      data = JSON.parse(raw);
    } catch {
      // Try to extract JSON from response
      const a = raw.indexOf('{'), b = raw.lastIndexOf('}');
      if (a >= 0 && b >= 0) {
        data = JSON.parse(raw.slice(a, b + 1));
      } else {
        data = { reply: raw, english: '', tip: '' };
      }
    }

    return NextResponse.json({
      reply: data.reply || '',
      english: data.english || '',
      tip: data.tip || '',
    });
  } catch (error: any) {
    console.error('Conversation API error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
