import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { requireAuth } from '@/lib/auth';
import { rateLimit } from '@/lib/rateLimit';

// The learner's real spaced-repetition deck for one language: every word they
// have practised, with when it is next due and how well it is remembered.
export async function POST(req: NextRequest) {
  try {
    const auth = await requireAuth();
    if (auth.error) return auth.error;
    const user = auth.user!;

    if (!rateLimit(`deck:${user.id}`, 30, 60_000)) {
      return NextResponse.json({ error: 'Too many requests — please slow down.' }, { status: 429 });
    }

    const { lang } = await req.json();
    if (!lang) return NextResponse.json({ error: 'Language is required' }, { status: 400 });

    const rows = await sql`
      SELECT r.term, r.definition, r.stability, r.reps, r.due_at
      FROM review_items r
      JOIN enrollments e ON e.id = r.enrollment_id
      WHERE e.user_id = ${user.id} AND e.lang = ${lang}
      ORDER BY r.due_at ASC
      LIMIT 200
    `;

    const now = Date.now();
    const cards = rows.map((r: any) => {
      const due = new Date(r.due_at).getTime();
      const stability = Math.max(Number(r.stability) || 0, 0.1); // days
      // Time since the card was last scheduled to start; FSRS power-law forgetting curve.
      const elapsedDays = Math.max(0, (now - (due - stability * 86_400_000)) / 86_400_000);
      const retrievability = Math.pow(1 + elapsedDays / (9 * stability), -1);
      return {
        term: r.term,
        definition: r.definition,
        reps: r.reps,
        due_at: r.due_at,
        due_in_days: Math.ceil((due - now) / 86_400_000),
        strength: Math.round(Math.min(1, Math.max(0, retrievability)) * 100),
      };
    });

    return NextResponse.json({ cards });
  } catch (error: any) {
    console.error('Deck API error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
