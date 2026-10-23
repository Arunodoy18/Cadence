import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { requireAuth } from '@/lib/auth';
import { ensureBillingTables } from '@/lib/usage';
import { rateLimit } from '@/lib/rateLimit';

// Cadence Plus is not purchasable yet — let people register interest.
export async function GET() {
  const auth = await requireAuth();
  if (auth.error) return auth.error;
  await ensureBillingTables();
  const rows = await sql`SELECT 1 FROM plus_waitlist WHERE user_id = ${auth.user!.id}`;
  return NextResponse.json({ joined: rows.length > 0 });
}

export async function POST() {
  const auth = await requireAuth();
  if (auth.error) return auth.error;
  if (!rateLimit(`waitlist:${auth.user!.id}`, 5, 60_000)) {
    return NextResponse.json({ error: 'Too many requests — please slow down.' }, { status: 429 });
  }
  await ensureBillingTables();
  await sql`INSERT INTO plus_waitlist (user_id) VALUES (${auth.user!.id}) ON CONFLICT (user_id) DO NOTHING`;
  return NextResponse.json({ joined: true });
}
