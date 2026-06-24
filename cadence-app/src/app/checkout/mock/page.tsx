'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useState, Suspense } from 'react';

function MockCheckoutForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const provider = searchParams.get('provider') || 'stripe';
  const userId = searchParams.get('userId');

  const handlePay = async () => {
    if (!userId) return;
    setLoading(true);

    try {
      // Call mock webhook to upgrade plan
      const res = await fetch('/api/webhook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          isMock: true,
          userId: userId,
          action: 'upgrade',
          provider: provider,
        }),
      });

      if (res.ok) {
        router.push(`/paid?provider=${provider}&mock=true`);
      } else {
        alert('Mock payment failed');
      }
    } catch (e) {
      console.error(e);
      alert('Mock payment error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ background: '#FBF6EE', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Hanken Grotesk', sans-serif", padding: '20px' }}>
      <div style={{ background: '#fff', border: '1px solid #EDE4D6', borderRadius: '24px', padding: '36px', maxWidth: '400px', width: '100%', boxShadow: '0 20px 40px -10px rgba(40,30,20,.15)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
          <div style={{ width: '24px', height: '24px', borderRadius: '6px', background: '#DB5338', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '9px', height: '9px', border: '2px solid #FBF6EE', borderRadius: '50%', borderRightColor: 'transparent', transform: 'rotate(-45deg)' }}></div>
          </div>
          <span style={{ fontSize: '15px', fontWeight: 600 }}>Cadence Sandbox</span>
        </div>

        <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: '32px', marginBottom: '10px', color: '#2A2320', fontWeight: 400 }}>
          Mock {provider === 'stripe' ? 'Stripe' : 'Razorpay'} Checkout
        </h1>
        <p style={{ fontSize: '14px', color: '#5C5048', lineHeight: 1.5, marginBottom: '24px' }}>
          You are in developer sandbox mode. No real payment details are required. Click below to simulate a successful 7-day trial subscription.
        </p>

        <div style={{ background: '#FBF1E9', borderRadius: '12px', padding: '16px', marginBottom: '24px', border: '1px solid #F2D9CF' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', marginBottom: '6px', color: '#8A5A4A', fontWeight: 600 }}>
            <span>Cadence Plus</span>
            <span>$9.99/mo</span>
          </div>
          <div style={{ fontSize: '12px', color: '#A8927C' }}>
            7-day free trial. You will not be charged.
          </div>
        </div>

        <button 
          onClick={handlePay} 
          disabled={loading}
          style={{ 
            width: '100%', 
            background: '#DB5338', 
            color: '#FBF6EE', 
            border: 'none', 
            borderRadius: '14px', 
            padding: '16px', 
            fontSize: '16px', 
            fontWeight: 600, 
            cursor: 'pointer', 
            boxShadow: '0 8px 20px -6px rgba(219,83,56,.5)',
            opacity: loading ? 0.7 : 1
          }}
        >
          {loading ? 'Processing...' : 'Simulate Successful Payment'}
        </button>
      </div>
    </div>
  );
}

export default function MockCheckout() {
  return (
    <Suspense fallback={<div>Loading sandbox...</div>}>
      <MockCheckoutForm />
    </Suspense>
  );
}
