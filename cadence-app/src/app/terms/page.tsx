import React from 'react';
import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px', fontFamily: 'system-ui, -apple-system, sans-serif', lineHeight: '1.6', color: '#333' }}>
      <Link href="/" style={{ color: '#C44738', textDecoration: 'none', fontWeight: 'bold', display: 'inline-block', marginBottom: '20px' }}>
        ← Back to App
      </Link>
      
      <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Terms of Service</h1>
      <p style={{ color: '#666', marginBottom: '40px' }}><strong>Effective Date:</strong> July 6, 2026</p>

      <p>Welcome to Cadence. These Terms of Service ("Terms") govern your use of the Cadence mobile application (the "App") and related services. By accessing or using the App, you agree to be bound by these Terms.</p>

      <h2 style={{ fontSize: '1.8rem', marginTop: '40px', marginBottom: '20px', borderBottom: '2px solid #E8DEC9', paddingBottom: '10px' }}>1. Acceptable Use Policy</h2>
      <p>By using Cadence, you agree that you will <strong>not</strong>:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li style={{ marginBottom: '10px' }}>Use the App to generate, transmit, or promote illegal, harmful, threatening, abusive, harassing, defamatory, vulgar, or obscene content.</li>
        <li style={{ marginBottom: '10px' }}>Attempt to bypass, exploit, or reverse-engineer the AI systems or the App's architecture.</li>
        <li style={{ marginBottom: '10px' }}>Use the App for any commercial purpose without our explicit written consent.</li>
        <li style={{ marginBottom: '10px' }}>Share your account credentials with third parties.</li>
      </ul>

      <h2 style={{ fontSize: '1.8rem', marginTop: '40px', marginBottom: '20px', borderBottom: '2px solid #E8DEC9', paddingBottom: '10px' }}>2. Generative AI Disclaimer</h2>
      <p>Cadence heavily utilizes generative Artificial Intelligence to dynamically create conversational responses, grammar hints, and dialogue scenarios.</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li style={{ marginBottom: '10px' }}><strong>Accuracy:</strong> While we strive for high-quality educational content, AI-generated responses may occasionally be inaccurate, contextually inappropriate, or culturally imprecise. You agree not to rely solely on the AI as an absolute source of truth.</li>
        <li style={{ marginBottom: '10px' }}><strong>Medical Disclaimer:</strong> The App features specific roleplay scenarios, including a "Doctor / Clinic" scenario. <strong>The AI does not provide real medical advice, diagnosis, or treatment.</strong> These scenarios are strictly designed for language practice and vocabulary acquisition. Always seek the advice of a qualified health provider.</li>
        <li style={{ marginBottom: '10px' }}><strong>No Liability:</strong> We are not liable for any damages or misunderstandings arising from the use of AI-generated content within the App.</li>
      </ul>

      <h2 style={{ fontSize: '1.8rem', marginTop: '40px', marginBottom: '20px', borderBottom: '2px solid #E8DEC9', paddingBottom: '10px' }}>3. User Content and Audio</h2>
      <p>You grant us permission to process the audio recordings (your voice) that you transmit through the App solely for the purpose of providing the speech-to-text and pronunciation assessment services. We do not claim ownership of your voice data.</p>

      <h2 style={{ fontSize: '1.8rem', marginTop: '40px', marginBottom: '20px', borderBottom: '2px solid #E8DEC9', paddingBottom: '10px' }}>4. Termination</h2>
      <p>You may terminate these Terms at any time by deleting your account via the "Delete Account" button in the App. We may terminate or suspend your access to the App immediately if you breach these Terms.</p>
    </div>
  );
}
