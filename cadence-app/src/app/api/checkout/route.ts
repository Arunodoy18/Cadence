import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/auth';
import Stripe from 'stripe';
import Razorpay from 'razorpay';

export async function POST(req: NextRequest) {
  try {
    const auth = await requireAuth();
    if (auth.error) return auth.error;
    const user = auth.user!;

    const { provider } = await req.json();

    if (!provider || (provider !== 'stripe' && provider !== 'razorpay')) {
      return NextResponse.json({ error: 'Valid provider (stripe or razorpay) is required' }, { status: 400 });
    }

    const origin = req.nextUrl.origin;

    if (provider === 'stripe') {
      const stripeKey = process.env.STRIPE_SECRET_KEY;
      if (!stripeKey) {
        // Fallback mock checkout URL for development/demo when Stripe key is missing
        console.warn('STRIPE_SECRET_KEY is missing. Falling back to mock checkout.');
        return NextResponse.json({ 
          mock: true, 
          url: `${origin}/checkout/mock?provider=stripe&userId=${user.id}` 
        });
      }

      const stripe = new Stripe(stripeKey, { apiVersion: '2023-10-16' as any });
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [{
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Cadence Plus Subscription',
              description: 'Full access to all 30 languages, real voice AI, and pronunciation lab.',
            },
            unit_amount: 999, // $9.99
            recurring: { interval: 'month' },
          },
          quantity: 1,
        }],
        subscription_data: {
          trial_period_days: 7,
        },
        mode: 'subscription',
        success_url: `${origin}/paid?provider=stripe&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${origin}/plans`,
        customer_email: user.email,
        metadata: { userId: user.id },
      });

      return NextResponse.json({ url: session.url });
    } else {
      // Razorpay
      const keyId = process.env.RAZORPAY_KEY_ID;
      const keySecret = process.env.RAZORPAY_KEY_SECRET;

      if (!keyId || !keySecret) {
        console.warn('RAZORPAY keys are missing. Falling back to mock checkout.');
        return NextResponse.json({ 
          mock: true, 
          url: `${origin}/checkout/mock?provider=razorpay&userId=${user.id}` 
        });
      }

      const razorpay = new Razorpay({
        key_id: keyId,
        key_secret: keySecret,
      });

      // Create a Razorpay subscription (requires a Razorpay Plan ID, fallback to mock if none)
      const planId = process.env.RAZORPAY_PLAN_ID;
      if (!planId) {
        return NextResponse.json({ 
          mock: true, 
          url: `${origin}/checkout/mock?provider=razorpay&userId=${user.id}&error=missing_plan_id` 
        });
      }

      const subscription = await razorpay.subscriptions.create({
        plan_id: planId,
        customer_notify: 1,
        total_count: 12,
        quantity: 1,
        addons: [],
        notes: { userId: user.id },
      });

      return NextResponse.json({ 
        subscriptionId: subscription.id, 
        keyId: keyId 
      });
    }
  } catch (error: any) {
    console.error('Checkout API error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
