import React from 'react';
import Link from 'next/link';
import { PrivacyContent } from '@/components/PrivacyContent';

export default function PrivacyNotice() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px 80px', fontFamily: 'system-ui, -apple-system, sans-serif', lineHeight: 1.6, color: '#333', background: '#FBF6EE', position: 'fixed', inset: 0, overflowY: 'auto' }}>
      <Link href="/" style={{ color: '#C44738', textDecoration: 'none', fontWeight: 'bold', display: 'inline-block', marginBottom: '20px' }}>← Back</Link>
      <PrivacyContent />
    </div>
  );
}
