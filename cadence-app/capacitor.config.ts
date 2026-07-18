import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'tech.buildc3.cadence',
  appName: 'Cadence',
  // Cadence is a server-backed app (NextAuth sessions, Stripe/Razorpay
  // checkout, OpenAI/Azure/ElevenLabs calls, Neon Postgres) — it can't be
  // exported as a static bundle. The native shell loads the live production
  // site directly, the same way Safari/Chrome would, and gets full native
  // API access (mic, share sheet, push) layered on top via Capacitor plugins.
  server: {
    url: 'https://cadence.buildc3.tech',
    cleartext: false,
  },
  ios: {
    contentInset: 'always',
  },
  android: {
    allowMixedContent: false,
  },
};

export default config;
