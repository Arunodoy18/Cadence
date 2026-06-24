import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { requireAuth } from '@/lib/auth';

export async function POST(req: NextRequest) {
  try {
    const auth = await requireAuth();
    if (auth.error) return auth.error;
    const user = auth.user!;

    const { lang } = await req.json();
    if (!lang) {
      return NextResponse.json({ error: 'Language is required' }, { status: 400 });
    }

    // Get enrollment for this user and language
    const enrollments = await sql`
      SELECT id, goal, cefr_level FROM enrollments 
      WHERE user_id = ${user.id} AND lang = ${lang}
    `;

    if (enrollments.length === 0) {
      return NextResponse.json({ error: 'Not enrolled in this language' }, { status: 400 });
    }

    const enrollment = enrollments[0];
    const planItems = [];

    // 1. Check for due review items (SRS)
    const dueItems = await sql`
      SELECT id, term, definition, stability, difficulty, reps, due_at 
      FROM review_items 
      WHERE enrollment_id = ${enrollment.id} AND due_at <= NOW()
      ORDER BY due_at ASC
      LIMIT 1
    `;

    if (dueItems.length > 0) {
      const item = dueItems[0];
      planItems.push({
        tag: 'REVIEW',
        color: '#5B3A56',
        icon: '↻',
        title: `Refresh “${item.term}”`,
        why: `You learned it recently — it's about to fade.`,
        metadata: {
          item_id: item.id,
          term: item.term,
          definition: item.definition,
        },
      });
    } else {
      // If no items are due, we can suggest a general review of any item
      const anyItems = await sql`
        SELECT id, term, definition 
        FROM review_items 
        WHERE enrollment_id = ${enrollment.id}
        ORDER BY random()
        LIMIT 1
      `;
      if (anyItems.length > 0) {
        const item = anyItems[0];
        planItems.push({
          tag: 'REVIEW',
          color: '#5B3A56',
          icon: '↻',
          title: `Refresh “${item.term}”`,
          why: `Keep it fresh in your memory.`,
          metadata: {
            item_id: item.id,
            term: item.term,
            definition: item.definition,
          },
        });
      }
    }

    // 2. Suggest a new lesson (NEW)
    const goalText = enrollment.goal || 'General';
    planItems.push({
      tag: 'NEW',
      color: '#2F8F83',
      icon: '▶',
      title: `Build it: ${goalText}`,
      why: `You nailed your last section — you're ready for this next.`,
      metadata: {
        goal: goalText,
        level: enrollment.cefr_level || 'A1',
      },
    });

    // 3. Check for pronunciation dips (SOUND)
    const recentDips = await sql`
      SELECT a.score, r.term 
      FROM attempts a
      JOIN review_items r ON a.item_id = r.id
      WHERE a.user_id = ${user.id} AND a.lang = ${lang} AND a.activity = 'pronounce' AND a.score < 80
      ORDER BY a.created_at DESC
      LIMIT 1
    `;

    if (recentDips.length > 0) {
      planItems.push({
        tag: 'SOUND',
        color: '#E1A23A',
        icon: '🔊',
        title: `Polish “${recentDips[0].term}”`,
        why: `Your pronunciation score dipped to ${Math.round(recentDips[0].score)}% — let's review.`,
        metadata: {
          term: recentDips[0].term,
        },
      });
    } else {
      // Default sound task if no dip is found
      planItems.push({
        tag: 'SOUND',
        color: '#E1A23A',
        icon: '🔊',
        title: `Polish your weakest sound`,
        why: `Keep your accent crisp with 3 quick reps.`,
        metadata: {},
      });
    }

    // 4. Suggest a speaking challenge (SPEAK)
    planItems.push({
      tag: 'SPEAK',
      color: '#DB5338',
      icon: '◇',
      title: `2-min conversation challenge`,
      why: `Speaking is the fastest path to fluency. Let's practice.`,
      metadata: {
        scenario: 'cafe',
      },
    });

    return NextResponse.json({ plan: planItems });
  } catch (error: any) {
    console.error('Plan API error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
