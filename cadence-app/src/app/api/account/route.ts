import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { requireAuth } from '@/lib/auth';
import { rateLimit } from '@/lib/rateLimit';
import { ensureConsentColumns } from '@/lib/credentials';

// Backs the "Data charter" screen's "Export my data" / "Delete account & data"
// promises — those buttons must do something real, not just look like they do.

export async function GET(req: NextRequest) {
  const auth = await requireAuth();
  if (auth.error) return auth.error;
  const user = auth.user!;

  if (!rateLimit(`account-export:${user.id}`, 5, 60_000)) {
    return NextResponse.json({ error: 'Too many requests — please slow down.' }, { status: 429 });
  }

  await ensureConsentColumns();

  const [users, enrollments, attempts] = await Promise.all([
    sql`SELECT id, email, name, auth_provider, native_lang, created_at, consent_at, consent_version, age_confirmed FROM users WHERE id = ${user.id}`,
    sql`SELECT id, lang, cefr_level, goal, created_at FROM enrollments WHERE user_id = ${user.id}`,
    sql`SELECT id, item_id, lang, activity, correct, score, latency_ms, hints_used, created_at FROM attempts WHERE user_id = ${user.id}`,
  ]);

  const enrollmentIds = enrollments.map((e: any) => e.id);
  const [reviewItems, milestones, subscriptions] = await Promise.all([
    enrollmentIds.length > 0
      ? sql`SELECT id, enrollment_id, term, definition, stability, difficulty, due_at, reps FROM review_items WHERE enrollment_id = ANY(${enrollmentIds})`
      : Promise.resolve([]),
    enrollmentIds.length > 0
      ? sql`SELECT id, enrollment_id, key, earned_at FROM milestones WHERE enrollment_id = ANY(${enrollmentIds})`
      : Promise.resolve([]),
    sql`SELECT id, provider, status, trial_ends_at, current_period_end FROM subscriptions WHERE user_id = ${user.id}`,
  ]);

  return NextResponse.json({
    exported_at: new Date().toISOString(),
    user: users[0] || null,
    enrollments,
    review_items: reviewItems,
    attempts,
    milestones,
    subscriptions,
  });
}

export async function DELETE(req: NextRequest) {
  const auth = await requireAuth();
  if (auth.error) return auth.error;
  const user = auth.user!;

  if (!rateLimit(`account-delete:${user.id}`, 3, 60_000)) {
    return NextResponse.json({ error: 'Too many requests — please slow down.' }, { status: 429 });
  }

  // enrollments/attempts/subscriptions all cascade from users via ON DELETE CASCADE,
  // and review_items/milestones cascade from enrollments in turn.
  await sql`DELETE FROM users WHERE id = ${user.id}`;

  return NextResponse.json({ success: true });
}

// DPDP Act right to correction: let the user fix the personal data we hold.
export async function PATCH(req: NextRequest) {
  const auth = await requireAuth();
  if (auth.error) return auth.error;
  const user = auth.user!;

  if (!rateLimit(`account-update:${user.id}`, 10, 60_000)) {
    return NextResponse.json({ error: 'Too many requests — please slow down.' }, { status: 429 });
  }

  const { name } = await req.json();
  const trimmed = typeof name === 'string' ? name.trim() : '';
  if (trimmed.length < 1 || trimmed.length > 80) {
    return NextResponse.json({ error: 'Name must be between 1 and 80 characters' }, { status: 400 });
  }
  await sql`UPDATE users SET name = ${trimmed} WHERE id = ${user.id}`;
  return NextResponse.json({ success: true, name: trimmed });
}
