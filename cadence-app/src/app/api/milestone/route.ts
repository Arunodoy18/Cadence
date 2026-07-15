import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { requireAuth } from '@/lib/auth';
import { rateLimit } from '@/lib/rateLimit';
import { v4 as uuidv4 } from 'uuid';

export async function POST(req: NextRequest) {
  try {
    const auth = await requireAuth();
    if (auth.error) return auth.error;
    const user = auth.user!;

    if (!rateLimit(`milestone:${user.id}`, 30, 60_000)) {
      return NextResponse.json({ error: 'Too many requests — please slow down.' }, { status: 429 });
    }

    const { lang, milestone } = await req.json();

    if (!lang || !milestone) {
      return NextResponse.json({ error: 'Language and milestone key are required' }, { status: 400 });
    }

    // 1. Get or create enrollment
    let enrollments = await sql`
      SELECT id FROM enrollments WHERE user_id = ${user.id} AND lang = ${lang}
    `;
    let enrollmentId;
    if (enrollments.length === 0) {
      const newId = uuidv4();
      await sql`
        INSERT INTO enrollments (id, user_id, lang, cefr_level, goal)
        VALUES (${newId}, ${user.id}, ${lang}, 'A1', 'travel')
      `;
      enrollmentId = newId;
    } else {
      enrollmentId = enrollments[0].id;
    }

    // 2. Check if milestone already exists
    const existing = await sql`
      SELECT id FROM milestones WHERE enrollment_id = ${enrollmentId} AND key = ${milestone}
    `;

    if (existing.length === 0) {
      await sql`
        INSERT INTO milestones (id, enrollment_id, key)
        VALUES (${uuidv4()}, ${enrollmentId}, ${milestone})
      `;
      return NextResponse.json({ success: true, newMilestone: milestone });
    }

    return NextResponse.json({ success: true, newMilestone: null });
  } catch (error: any) {
    console.error('Milestone saving error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
