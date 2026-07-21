import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { requireAuth } from '@/lib/auth';
import { rateLimit } from '@/lib/rateLimit';
import { v4 as uuidv4 } from 'uuid';

const ENTITLEMENT_ID = 'plus';

// Called by the client right after a native Purchases.purchasePackage() call
// resolves, so Plus unlocks immediately instead of waiting on the RevenueCat
// webhook (which is the eventual-consistency path for renewals/cancellations —
// see /api/revenuecat/webhook). We don't trust the client's purchase result
// directly; we re-check the subscriber's entitlements against RevenueCat's own
// API using the secret key, server to server, before touching the DB.
export async function POST() {
  const auth = await requireAuth();
  if (auth.error) return auth.error;
  const user = auth.user!;

  if (!rateLimit(`revenuecat-verify:${user.id}`, 10, 60_000)) {
    return NextResponse.json({ error: 'Too many requests — please slow down.' }, { status: 429 });
  }

  const secretKey = process.env.REVENUECAT_SECRET_KEY;
  if (!secretKey) {
    return NextResponse.json({ error: 'RevenueCat is not configured on the server' }, { status: 500 });
  }

  const res = await fetch(`https://api.revenuecat.com/v1/subscribers/${encodeURIComponent(user.id)}`, {
    headers: { Authorization: `Bearer ${secretKey}` },
  });

  if (!res.ok) {
    console.error('RevenueCat subscriber lookup failed', res.status, await res.text());
    return NextResponse.json({ error: 'Could not verify purchase' }, { status: 502 });
  }

  const body = await res.json();
  const entitlement = body.subscriber?.entitlements?.[ENTITLEMENT_ID];
  const isActive = Boolean(entitlement && (!entitlement.expires_date || new Date(entitlement.expires_date) > new Date()));

  const plan = isActive ? 'plus' : 'free';
  await sql`UPDATE users SET plan = ${plan} WHERE id = ${user.id}`;

  if (isActive) {
    await sql`
      INSERT INTO subscriptions (id, user_id, provider, status, trial_ends_at, current_period_end)
      VALUES (
        ${uuidv4()},
        ${user.id},
        'revenuecat',
        'active',
        NULL,
        ${entitlement.expires_date ? new Date(entitlement.expires_date).toISOString() : null}
      )
      ON CONFLICT DO NOTHING
    `;
  }

  return NextResponse.json({ plan });
}
