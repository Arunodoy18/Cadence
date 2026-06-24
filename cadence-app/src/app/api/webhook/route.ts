import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import Stripe from 'stripe';
import crypto from 'crypto';
import { v4 as uuidv4 } from 'uuid';

export async function POST(req: NextRequest) {
  const bodyText = await req.text();
  const signature = req.headers.get('stripe-signature') || req.headers.get('x-razorpay-signature');

  // 1. Check if it's a test/mock webhook (no signatures, or explicitly marked mock)
  // This allows the mock checkout flow to upgrade the user
  try {
    const jsonBody = JSON.parse(bodyText);
    if (jsonBody.isMock && jsonBody.userId) {
      console.log(`Mock webhook received for user: ${jsonBody.userId}, action: ${jsonBody.action}`);
      const plan = jsonBody.action === 'upgrade' ? 'plus' : 'free';
      
      await sql`
        UPDATE users 
        SET plan = ${plan} 
        WHERE id = ${jsonBody.userId}
      `;

      await sql`
        INSERT INTO subscriptions (id, user_id, provider, status, trial_ends_at, current_period_end)
        VALUES (
          ${uuidv4()}, 
          ${jsonBody.userId}, 
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
        // Search subscription in DB to find userId
        const subs = await sql`
          SELECT user_id FROM subscriptions 
          WHERE id = ${subscription.id} OR user_id IN (
            SELECT id FROM users WHERE email = ${subscription.customer as string}
          )
        `;
        if (subs.length > 0) {
          const userId = subs[0].user_id;
          await sql`UPDATE users SET plan = 'free' WHERE id = ${userId}`;
          await sql`UPDATE subscriptions SET status = 'cancelled' WHERE user_id = ${userId}`;
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

    if (expectedSig !== signature) {
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
