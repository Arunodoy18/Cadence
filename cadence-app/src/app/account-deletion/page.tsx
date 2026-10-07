import React from 'react';
import Link from 'next/link';
import { GRIEVANCE_EMAIL } from '@/lib/legal';

// Public page required by Google Play ("Data safety → account deletion URL").
export default function AccountDeletion() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px 80px', fontFamily: 'system-ui, -apple-system, sans-serif', lineHeight: 1.6, color: '#333', background: '#FBF6EE', position: 'fixed', inset: 0, overflowY: 'auto' }}>
      <Link href="/" style={{ color: '#C44738', textDecoration: 'none', fontWeight: 'bold', display: 'inline-block', marginBottom: '20px' }}>← Back</Link>
      <h1 style={{ fontSize: '2rem', marginBottom: '10px' }}>Delete your Cadence account</h1>
      <p>You can delete your Cadence account and all data linked to it at any time.</p>
      <h2 style={{ fontSize: '1.3rem', marginTop: '28px' }}>In the app (instant)</h2>
      <ol style={{ paddingLeft: '20px' }}>
        <li>Open Cadence and go to the <strong>You</strong> tab.</li>
        <li>Tap the gear icon, then <strong>Data charter</strong>.</li>
        <li>Tap <strong>Delete account &amp; data</strong> and confirm.</li>
      </ol>
      <p>Your account is erased immediately.</p>
      <h2 style={{ fontSize: '1.3rem', marginTop: '28px' }}>By email</h2>
      <p>
        If you no longer have the app, email <a href={`mailto:${GRIEVANCE_EMAIL}?subject=Delete%20my%20Cadence%20account`} style={{ color: '#C44738' }}>{GRIEVANCE_EMAIL}</a> from the address you registered with. We will delete the account within 30 days and confirm by reply.
      </p>
      <h2 style={{ fontSize: '1.3rem', marginTop: '28px' }}>What is deleted</h2>
      <p>Your profile (name, email, hashed password), learning progress, milestones, saved vocabulary and practice attempts. Voice recordings are not stored by us.</p>
      <p><Link href="/privacy" style={{ color: '#C44738' }}>Read the full Privacy Notice</Link></p>
    </div>
  );
}
