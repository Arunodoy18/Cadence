import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { sql } from '@/lib/db';
import { sendPushNotification } from '@/lib/push';
import { v4 as uuidv4 } from 'uuid';

// RevenueCat webhooks aren't signed like Stripe's — instead you set a fixed
// "Authorization header" value when configuring the webhook URL in the
// RevenueCat dashboard, and it's sent back verbatim on every call. This is
// the source of truth for renewals/cancellations; the client-triggered
// /api/revenuecat/verify call handles the "unlock immediately after purchase"
// case so the user isn't stuck waiting on a webhook to unlock the UI.
function isAuthorized(req: NextRequest): boolean {
  const expected = process.env.REVENUECAT_WEBHOOK_AUTH_HEADER;
  if (!expected) return false;

  const actual = req.headers.get('authorization') || '';
  const expectedBuf = Buffer.from(expected, 'utf8');
  const actualBuf = Buffer.from(actual, 'utf8');
  return expectedBuf.length === actualBuf.length && crypto.timingSafeEqual(expectedBuf, actualBuf);
}

export async function POST(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await req.json();
  const event = body.event;
  const userId = event?.app_user_id;
  const type = event?.type as string | undefined;

  if (!userId || !type) {
    return NextResponse.json({ error: 'Malformed event' }, { status: 400 });
  }

  try {
    switch (type) {
      case 'INITIAL_PURCHASE':
      case 'RENEWAL':
      case 'UNCANCELLATION':
      case 'PRODUCT_CHANGE':
      case 'NON_RENEWING_PURCHASE': {
        await sql`UPDATE users SET plan = 'plus' WHERE id = ${userId}`;
        await sql`
          INSERT INTO subscriptions (id, user_id, provider, status, trial_ends_at, current_period_end)
          VALUES (
            ${uuidv4()},
            ${userId},
            'revenuecat',
            'active',
            NULL,
            ${event.expiration_at_ms ? new Date(event.expiration_at_ms).toISOString() : null}
          )
          ON CONFLICT DO NOTHING
        `;
        if (type === 'INITIAL_PURCHASE') {
          sendPushNotification(userId, 'Welcome to Cadence Plus 🎉', 'Real voice AI and pronunciation scoring are now unlocked.')
            .catch((e) => console.error('Failed to send Plus-activated push', e));
        }
        break;
      }
      // CANCELLATION means auto-renew was turned off — the user keeps access
      // until the period actually ends, so plan stays 'plus' until EXPIRATION
      // fires. Same convention the Stripe webhook uses.
      case 'CANCELLATION':
        await sql`UPDATE subscriptions SET status = 'cancelling' WHERE user_id = ${userId} AND provider = 'revenuecat'`;
        break;
      case 'EXPIRATION':
        await sql`UPDATE users SET plan = 'free' WHERE id = ${userId}`;
        await sql`UPDATE subscriptions SET status = 'cancelled' WHERE user_id = ${userId} AND provider = 'revenuecat'`;
        break;
      case 'BILLING_ISSUE':
        console.warn(`RevenueCat billing issue for user ${userId}`);
        break;
      default:
        // TRANSFER, SUBSCRIPTION_PAUSED, INVOICE_ISSUANCE, etc. — no plan change needed.
        break;
    }

    return NextResponse.json({ received: true });
  } catch (err: any) {
    console.error('Error processing RevenueCat webhook:', err);
    return NextResponse.json({ error: 'Processing failed' }, { status: 500 });
  }
}
