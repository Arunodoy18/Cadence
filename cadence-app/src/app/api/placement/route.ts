import { NextRequest, NextResponse } from 'next/server';
import { chatJSON } from '@/lib/llm';
import { requireAuth } from '@/lib/auth';
import { rateLimit } from '@/lib/rateLimit';
import { sql } from '@/lib/db';
import { v4 as uuidv4 } from 'uuid';

export async function POST(req: NextRequest) {
  try {
    const auth = await requireAuth();
    if (auth.error) return auth.error;

    if (!rateLimit(`placement:${auth.user!.id}`, 20, 60_000)) {
      return NextResponse.json({ error: 'Too many requests — please slow down.' }, { status: 429 });
    }

    const { messages, lang, langCode, finish } = await req.json();

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

    const data = (await chatJSON(chatMessages, { maxTokens: 250, temperature: 0.7 })) ?? { reply: '', english: '', level: 'A2' };
    if (finish && !['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].includes(data.level)) data.level = 'A2';

    // Save CEFR level to database if this is the final turn. Enrollments are
    // keyed by the short language code everywhere else (attempts, plan) — use
    // that here too, not the full display name used in the AI prompt above.
    if (finish && data.level) {
      const enrollmentLang = langCode || lang;
      const enrollments = await sql`
        SELECT id FROM enrollments WHERE user_id = ${auth.user!.id} AND lang = ${enrollmentLang}
      `;
      if (enrollments.length > 0) {
        await sql`
          UPDATE enrollments SET cefr_level = ${data.level} WHERE id = ${enrollments[0].id}
        `;
      } else {
        await sql`
          INSERT INTO enrollments (id, user_id, lang, cefr_level, goal)
          VALUES (${uuidv4()}, ${auth.user!.id}, ${enrollmentLang}, ${data.level}, 'travel')
        `;
      }
    }

    return NextResponse.json(data);
  } catch (error: any) {
    console.error('Placement API error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
