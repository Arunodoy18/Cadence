import React from 'react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px', fontFamily: 'system-ui, -apple-system, sans-serif', lineHeight: '1.6', color: '#333' }}>
      <Link href="/" style={{ color: '#C44738', textDecoration: 'none', fontWeight: 'bold', display: 'inline-block', marginBottom: '20px' }}>
        ← Back to App
      </Link>
      
      <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Privacy Policy for Cadence</h1>
      <p style={{ color: '#666', marginBottom: '40px' }}><strong>Effective Date:</strong> July 6, 2026</p>

      <p>Welcome to Cadence. Your privacy is critically important to us. This Privacy Policy explains how we collect, use, and share your personal information when you use our mobile application (the "App") and related services.</p>
      
      <p>By using Cadence, you agree to the collection and use of information in accordance with this policy.</p>

      <h2 style={{ fontSize: '1.8rem', marginTop: '40px', marginBottom: '20px', borderBottom: '2px solid #E8DEC9', paddingBottom: '10px' }}>1. Information We Collect</h2>
      <h3 style={{ fontSize: '1.3rem', marginTop: '20px' }}>A. Information You Provide to Us</h3>
      <ul style={{ paddingLeft: '20px' }}>
        <li style={{ marginBottom: '10px' }}><strong>Account Data:</strong> When you create an account, we collect your email address, name, and encrypted password.</li>
        <li style={{ marginBottom: '10px' }}><strong>Profile Data:</strong> We track your in-app progress, including your language learning milestones, streaks, and diamond balance.</li>
        <li style={{ marginBottom: '10px' }}><strong>Audio Data (Microphone):</strong> Because Cadence is a voice-first language learning app, we request access to your device’s microphone. We collect audio recordings of your voice when you interact with our AI conversational features.</li>
      </ul>

      <h3 style={{ fontSize: '1.3rem', marginTop: '20px' }}>B. Automatically Collected Data</h3>
      <ul style={{ paddingLeft: '20px' }}>
        <li style={{ marginBottom: '10px' }}><strong>Device Information:</strong> We may collect information about your device, including the operating system, device model, and unique device identifiers to ensure the App functions correctly.</li>
        <li style={{ marginBottom: '10px' }}><strong>Usage Data:</strong> We track how you interact with the App (e.g., which chapters you complete, time spent in scenarios) to improve our curriculum.</li>
      </ul>

      <h2 style={{ fontSize: '1.8rem', marginTop: '40px', marginBottom: '20px', borderBottom: '2px solid #E8DEC9', paddingBottom: '10px' }}>2. How We Use Your Information</h2>
      <ul style={{ paddingLeft: '20px' }}>
        <li style={{ marginBottom: '10px' }}>To provide, maintain, and improve the Cadence language learning experience.</li>
        <li style={{ marginBottom: '10px' }}>To process your spoken input into text and generate conversational AI responses.</li>
        <li style={{ marginBottom: '10px' }}>To assess your pronunciation accuracy at the phoneme level.</li>
        <li style={{ marginBottom: '10px' }}>To manage your account, subscription, and gamification progress.</li>
      </ul>

      <h2 style={{ fontSize: '1.8rem', marginTop: '40px', marginBottom: '20px', borderBottom: '2px solid #E8DEC9', paddingBottom: '10px' }}>3. How We Share Your Information (Third-Party Services)</h2>
      <p>To provide our advanced AI features, we transmit specific data off your device to trusted third-party service providers. <strong>We do not sell your personal data.</strong></p>
      <ul style={{ paddingLeft: '20px' }}>
        <li style={{ marginBottom: '10px' }}><strong>OpenAI:</strong> Audio recordings and text transcripts are sent to OpenAI (Whisper and GPT-4 APIs) for speech-to-text conversion and generation of conversational responses.</li>
        <li style={{ marginBottom: '10px' }}><strong>Microsoft Azure:</strong> Audio recordings may be sent to Azure Cognitive Services specifically for pronunciation assessment.</li>
        <li style={{ marginBottom: '10px' }}><strong>ElevenLabs:</strong> Text transcripts are sent to ElevenLabs to generate the high-quality text-to-speech voices you hear in the App.</li>
      </ul>

      <h2 style={{ fontSize: '1.8rem', marginTop: '40px', marginBottom: '20px', borderBottom: '2px solid #E8DEC9', paddingBottom: '10px' }}>4. Data Retention and Your Rights</h2>
      <p>We retain your account data and learning progress for as long as your account is active. Audio recordings processed by third-party APIs are typically processed ephemerally or retained for the minimum duration required to provide the service.</p>
      <h3 style={{ fontSize: '1.3rem', marginTop: '20px' }}>Right to Deletion (Data Charter)</h3>
      <p>You have complete control over your data. You can permanently delete your account at any time by navigating to the <strong>Account Tab</strong> in the App and clicking <strong>Delete Account</strong>. This will immediately wipe your user profile, learning milestones, and credentials from our active database.</p>
    </div>
  );
}
