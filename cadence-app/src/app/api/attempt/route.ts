import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { requireAuth } from '@/lib/auth';
import { createEmptyCard, fsrs, Rating, Card } from 'ts-fsrs';
import { v4 as uuidv4 } from 'uuid';

export async function POST(req: NextRequest) {
  try {
    const auth = await requireAuth();
    if (auth.error) return auth.error;
    const user = auth.user!;

    const { lang, term, definition, activity, correct, score, latency_ms, hints_used } = await req.json();

    if (!lang || !term || activity === undefined || correct === undefined) {
      return NextResponse.json({ error: 'Missing required parameters' }, { status: 400 });
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

    // 2. Get or create review item
    let items = await sql`
      SELECT id, stability, difficulty, reps, due_at 
      FROM review_items 
      WHERE enrollment_id = ${enrollmentId} AND term = ${term}
    `;

    let itemId;
    let card: Card;
    const scheduler = fsrs();

    if (items.length === 0) {
      itemId = uuidv4();
      card = createEmptyCard();
      
      await sql`
        INSERT INTO review_items (id, enrollment_id, term, definition, stability, difficulty, due_at, reps)
        VALUES (${itemId}, ${enrollmentId}, ${term}, ${definition || ''}, ${card.stability}, ${card.difficulty}, ${card.due.toISOString()}, ${card.reps})
      `;
    } else {
      const item = items[0];
      itemId = item.id;
      
      // Reconstruct FSRS Card object
      card = createEmptyCard();
      card.stability = parseFloat(item.stability) || 0.1;
      card.difficulty = parseFloat(item.difficulty) || 1.0;
      card.reps = parseInt(item.reps) || 0;
      card.due = new Date(item.due_at || Date.now());
      card.state = (parseInt(item.reps) || 0) > 0 ? 2 : 0; // Review state if reviewed, else New
    }

    // 3. Determine Rating based on correctness and score
    let rating = Rating.Good;
    if (!correct) {
      rating = Rating.Again;
    } else if (score !== undefined && score !== null) {
      if (score < 60) rating = Rating.Again;
      else if (score < 80) rating = Rating.Hard;
      else if (score < 95) rating = Rating.Good;
      else rating = Rating.Easy;
    }

    // 4. Calculate next review state
    const result = scheduler.next(card, new Date(), rating);

    // 5. Update review items table
    await sql`
      UPDATE review_items 
      SET stability = ${result.card.stability}, 
          difficulty = ${result.card.difficulty}, 
          due_at = ${result.card.due.toISOString()}, 
          reps = ${result.card.reps} 
      WHERE id = ${itemId}
    `;

    // 6. Log attempt in attempts table
    const attemptId = uuidv4();
    await sql`
      INSERT INTO attempts (id, user_id, item_id, lang, activity, correct, score, latency_ms, hints_used)
      VALUES (${attemptId}, ${user.id}, ${itemId}, ${lang}, ${activity}, ${correct}, ${score !== undefined ? score : null}, ${latency_ms !== undefined ? latency_ms : null}, ${hints_used !== undefined ? hints_used : null})
    `;

    // 7. Check milestones (e.g. completed first lesson, did 5 words, etc.)
    const milestoneCount = await sql`
      SELECT COUNT(id) FROM attempts WHERE user_id = ${user.id} AND lang = ${lang}
    `;
    const count = parseInt(milestoneCount[0].count) || 0;

    let newMilestone = null;
    if (count === 1) {
      newMilestone = 'first_step';
    } else if (count === 10) {
      newMilestone = 'vocab_starter';
    } else if (count === 50) {
      newMilestone = 'fluency_builder';
    }

    if (newMilestone) {
      const milestoneExists = await sql`
        SELECT id FROM milestones WHERE enrollment_id = ${enrollmentId} AND key = ${newMilestone}
      `;
      if (milestoneExists.length === 0) {
        await sql`
          INSERT INTO milestones (id, enrollment_id, key)
          VALUES (${uuidv4()}, ${enrollmentId}, ${newMilestone})
        `;
      } else {
        newMilestone = null; // Already earned
      }
    }

    return NextResponse.json({
      success: true,
      card: {
        stability: result.card.stability,
        difficulty: result.card.difficulty,
        due: result.card.due,
        reps: result.card.reps,
      },
      newMilestone,
    });
  } catch (error: any) {
    console.error('Attempt API error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
