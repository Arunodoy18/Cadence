import React from 'react';
import { FIDUCIARY_NAME, GRIEVANCE_OFFICER, GRIEVANCE_EMAIL, NOTICE_EFFECTIVE_DATE } from '@/lib/legal';

const h2 = { fontSize: '1.5rem', marginTop: '36px', marginBottom: '14px', borderBottom: '2px solid #E8DEC9', paddingBottom: '8px' } as const;
const li = { marginBottom: '10px' } as const;

export function PrivacyContent() {
  return (
    <>
      <h1 style={{ fontSize: '2.2rem', marginBottom: '10px' }}>Privacy Notice</h1>
      <p style={{ color: '#666', marginBottom: '28px' }}>
        <strong>Effective:</strong> {NOTICE_EFFECTIVE_DATE}{' '}· Prepared under India&apos;s Digital Personal Data Protection Act, 2023 (DPDP Act)
      </p>

      <p>
        <strong>{FIDUCIARY_NAME}</strong>{' '}(&quot;Cadence&quot;, &quot;we&quot;) is the Data Fiduciary for your personal data.
        This notice tells you what we collect, why, who we share it with, and how you can exercise your rights.
        We ask for your consent to this notice when you create an account.
      </p>

      <h2 style={h2}>1. What we collect and why</h2>
      <ul style={{ paddingLeft: '20px' }}>
        <li style={li}><strong>Account data</strong> — name, email address and a hashed password. <em>Purpose:</em> to create and secure your account and keep your progress across devices.</li>
        <li style={li}><strong>Learning data</strong> — chosen language, level, goals, lesson and milestone progress, vocabulary you save, and your practice attempts. <em>Purpose:</em> to personalise lessons and spaced-repetition reviews.</li>
        <li style={li}><strong>Voice recordings</strong> — only while you hold the microphone button in a conversation or pronunciation exercise, and only after you grant microphone permission. <em>Purpose:</em> to turn your speech into text, reply conversationally and score pronunciation. We do not record in the background.</li>
        <li style={li}><strong>Reminders</strong> — if you switch on the daily reminder, it is scheduled on your phone. Nothing about it is sent to us.</li>
      </ul>
      <p>We collect only what these purposes need. We do not use your data for advertising and we do not sell it.</p>

      <h2 style={h2}>2. Who processes your data on our behalf</h2>
      <ul style={{ paddingLeft: '20px' }}>
        <li style={li}><strong>OpenAI</strong> — your speech audio (speech-to-text) and conversation text (AI replies).</li>
        <li style={li}><strong>Microsoft Azure Speech</strong> — your speech audio, for pronunciation scoring.</li>
        <li style={li}><strong>ElevenLabs</strong> — text of the replies, to generate the voice you hear.</li>
        <li style={li}><strong>Neon (PostgreSQL) and Netlify</strong> — secure database and hosting for your account and progress.</li>
      </ul>
      <p>These providers may process data on servers outside India. They act only on our instructions to deliver the feature you asked for.</p>

      <h2 style={h2}>3. How long we keep it</h2>
      <p>We keep your data while your account is active. When you delete your account, your profile, progress, vocabulary, attempts and credentials are erased from our database immediately. Voice recordings are not stored by us; they are sent to the processors above only to produce the result you requested.</p>

      <h2 style={h2}>4. Your rights under the DPDP Act</h2>
      <ul style={{ paddingLeft: '20px' }}>
        <li style={li}><strong>Access</strong> — Settings → Data charter → <em>Export my data</em> gives you a copy of what we hold.</li>
        <li style={li}><strong>Correction</strong> — edit your name in Settings → Data charter.</li>
        <li style={li}><strong>Erasure</strong> — Settings → Data charter → <em>Delete account &amp; data</em>.</li>
        <li style={li}><strong>Withdraw consent</strong> — as easy as giving it: deleting your account withdraws consent and ends all processing. You can also revoke microphone and notification permissions in your phone&apos;s settings at any time.</li>
        <li style={li}><strong>Grievance redressal</strong> — write to our Grievance Officer below. We respond within 30 days. If you are not satisfied you may complain to the Data Protection Board of India.</li>
        <li style={li}><strong>Nominate</strong> — you may nominate another person to exercise these rights if you die or become incapacitated; email us to record a nomination.</li>
      </ul>

      <h2 style={h2}>5. Children</h2>
      <p>Cadence is intended for people aged 18 and over. If you are under 18, you may use it only with the verifiable consent of your parent or guardian, who must make the choices on this notice for you. We do not track, profile or target advertising at children. If we learn that a child&apos;s data was provided without parental consent, we will delete it.</p>

      <h2 style={h2}>6. Security</h2>
      <p>Passwords are stored hashed (bcrypt). All traffic uses HTTPS. Access to your data requires your signed-in session. No system is perfectly secure; if a breach affecting your data occurs we will notify you and the Data Protection Board as the law requires.</p>

      <h2 style={h2}>7. Grievance Officer</h2>
      <p>
        {GRIEVANCE_OFFICER}<br />
        Email: <a href={`mailto:${GRIEVANCE_EMAIL}`} style={{ color: '#C44738' }}>{GRIEVANCE_EMAIL}</a>
      </p>

      <h2 style={h2}>8. Changes</h2>
      <p>If we change this notice in a way that matters, we will ask for your consent again before continuing to process your data under the new terms.</p>
    </>
  );
}
