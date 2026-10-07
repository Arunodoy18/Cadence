import { NextRequest, NextResponse } from 'next/server';
import { chatJSON } from '@/lib/llm';
import { requirePlus } from '@/lib/auth';
import { rateLimit } from '@/lib/rateLimit';

export async function POST(req: NextRequest) {
  try {
    const auth = await requirePlus();
    if (auth.error) return auth.error;

    if (!rateLimit(`conversation:${auth.user!.id}`, 20, 60_000)) {
      return NextResponse.json({ error: 'Too many requests — please slow down.' }, { status: 429 });
    }

    const { messages, lang, scenario, partnerName, persona, level } = await req.json();

    // Build the system prompt exactly like the prototype's aiReply()
    const systemPrompt = `You are ${partnerName}, ${persona}. You are role-playing a short conversation with a learner of ${lang} in the scenario: ${scenario}. Rules: reply ONLY in ${lang}, ONE short natural sentence (max ~14 words) at ${level} level; stay in character and in the scene; when natural, end with a simple question to keep the chat going. Also give a one-line English translation, and a short, encouraging tip about the learner's LAST message (grammar, word choice or politeness) — or an empty string if it was already good. You must return your response in a JSON object with properties 'reply', 'english', and 'tip'.
${messages.length === 0 ? "IMPORTANT: The user has just entered the scenario. You MUST speak first to initiate the scene naturally." : ""}
`;

    const chatMessages = [
      { role: 'system' as const, content: systemPrompt },
      ...messages.map((m: { who: string; n: string }) => ({
        role: m.who === 'p' ? 'assistant' as const : 'user' as const,
        content: m.n,
      })),
    ];

    const data = (await chatJSON(chatMessages, { maxTokens: 200, temperature: 0.8 })) ?? {};

    return NextResponse.json({
      reply: data.reply || '',
      english: data.english || '',
      tip: data.tip || '',
    });
  } catch (error) {
    const e = error as Error;
    console.error('Conversation API error:', e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
