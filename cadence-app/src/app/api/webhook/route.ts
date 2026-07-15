import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { requireAuth } from '@/lib/auth';
import Stripe from 'stripe';
import crypto from 'crypto';
import { v4 as uuidv4 } from 'uuid';

export async function POST(req: NextRequest) {
  const bodyText = await req.text();
  const signature = req.headers.get('stripe-signature') || req.headers.get('x-razorpay-signature');

  // 1. Mock checkout flow (only used as a fallback when no real Stripe/Razorpay
  // keys are configured — see /api/checkout). Requires a real session and can only
  // ever act on the caller's own account, so it can't be used to upgrade other users.
  const realProviderConfigured = Boolean(process.env.STRIPE_SECRET_KEY || process.env.RAZORPAY_KEY_ID);
  try {
    const jsonBody = JSON.parse(bodyText);
    if (jsonBody.isMock) {
      if (realProviderConfigured) {
        return NextResponse.json({ error: 'Mock checkout is disabled once a real payment provider is configured' }, { status: 403 });
      }

      const auth = await requireAuth();
      if (auth.error) return auth.error;
      const user = auth.user!;

      const plan = jsonBody.action === 'upgrade' ? 'plus' : 'free';

      await sql`
        UPDATE users
        SET plan = ${plan}
        WHERE id = ${user.id}
      `;

      await sql`
        INSERT INTO subscriptions (id, user_id, provider, status, trial_ends_at, current_period_end)
        VALUES (
          ${uuidv4()},
          ${user.id},
          ${jsonBody.provider || 'mock'},
          ${plan === 'plus' ? 'active' : 'cancelled'},
          ${new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()},
          ${new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()}
        )
        ON CONFLICT DO NOTHING
      `;

      return NextResponse.json({ success: true, mock: true });
    }
  } catch (e) {
    // Not a mock JSON payload, proceed to real signature check
  }

  // 2. Real Stripe Webhook
  const stripeKey = process.env.STRIPE_SECRET_KEY;
  const stripeWebhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (stripeKey && stripeWebhookSecret && req.headers.get('stripe-signature')) {
    const stripe = new Stripe(stripeKey, { apiVersion: '2023-10-16' as any });
    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(
        bodyText,
        signature!,
        stripeWebhookSecret
      );
    } catch (err: any) {
      console.error(`Stripe signature verification failed: ${err.message}`);
      return NextResponse.json({ error: 'Signature verification failed' }, { status: 400 });
    }

    try {
      if (event.type === 'checkout.session.completed') {
        const session = event.data.object as Stripe.Checkout.Session;
        const userId = session.metadata?.userId;
        
        if (userId) {
          await sql`UPDATE users SET plan = 'plus' WHERE id = ${userId}`;
          await sql`
            INSERT INTO subscriptions (id, user_id, provider, status, trial_ends_at, current_period_end)
            VALUES (
              ${uuidv4()}, 
              ${userId}, 
              'stripe', 
              'active', 
              ${new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()}, 
              ${new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()}
            )
          `;
        }
      } else if (event.type === 'customer.subscription.deleted') {
        const subscription = event.data.object as Stripe.Subscription;
        // The subscription itself carries userId in its metadata (set at creation
        // time in /api/checkout) — subscriptions.id in our DB is a locally-generated
        // uuid, not the Stripe subscription id, so it can never be matched directly.
        const userId = subscription.metadata?.userId;
        if (userId) {
          await sql`UPDATE users SET plan = 'free' WHERE id = ${userId}`;
          await sql`UPDATE subscriptions SET status = 'cancelled' WHERE user_id = ${userId}`;
        } else {
          console.error('Stripe subscription.deleted event missing metadata.userId', subscription.id);
        }
      }
      
      return NextResponse.json({ received: true });
    } catch (dbErr: any) {
      console.error('DB error during Stripe webhook:', dbErr);
      return NextResponse.json({ error: 'Database update failed' }, { status: 500 });
    }
  }

  // 3. Real Razorpay Webhook
  const razorpaySecret = process.env.RAZORPAY_WEBHOOK_SECRET;
  if (razorpaySecret && req.headers.get('x-razorpay-signature')) {
    const expectedSig = crypto
      .createHmac('sha256', razorpaySecret)
      .update(bodyText)
      .digest('hex');

    const expectedBuf = Buffer.from(expectedSig, 'utf8');
    const actualBuf = Buffer.from(signature || '', 'utf8');
    const signatureValid = expectedBuf.length === actualBuf.length && crypto.timingSafeEqual(expectedBuf, actualBuf);

    if (!signatureValid) {
      console.error('Razorpay signature verification failed');
      return NextResponse.json({ error: 'Signature verification failed' }, { status: 400 });
    }

    try {
      const payload = JSON.parse(bodyText);
      const event = payload.event;

      if (event === 'subscription.charged') {
        const subscription = payload.payload.subscription.entity;
        const userId = subscription.notes?.userId;

        if (userId) {
          await sql`UPDATE users SET plan = 'plus' WHERE id = ${userId}`;
          await sql`
            INSERT INTO subscriptions (id, user_id, provider, status, trial_ends_at, current_period_end)
            VALUES (
              ${uuidv4()}, 
              ${userId}, 
              'razorpay', 
              'active', 
              ${subscription.charge_at ? new Date(subscription.charge_at * 1000).toISOString() : null}, 
              ${subscription.current_end ? new Date(subscription.current_end * 1000).toISOString() : null}
            )
          `;
        }
      } else if (event === 'subscription.cancelled' || event === 'subscription.halted') {
        const subscription = payload.payload.subscription.entity;
        const userId = subscription.notes?.userId;

        if (userId) {
          await sql`UPDATE users SET plan = 'free' WHERE id = ${userId}`;
          await sql`UPDATE subscriptions SET status = 'cancelled' WHERE user_id = ${userId}`;
        }
      }

      return NextResponse.json({ received: true });
    } catch (err: any) {
      console.error('Error processing Razorpay webhook:', err);
      return NextResponse.json({ error: 'Processing failed' }, { status: 500 });
    }
  }

  // Webhook configuration incomplete/missing keys, or signature absent
  return NextResponse.json({ error: 'Webhook signature missing or configuration incomplete' }, { status: 400 });
}
