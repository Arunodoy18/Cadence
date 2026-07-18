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
  plugins: {
    SplashScreen: {
      // Hidden manually (see NativeChrome) once the remote page has actually
      // rendered — this app loads over the network, so the plugin's own
      // auto-hide timer can easily fire before that, leaving a blank flash
      // between the splash disappearing and content appearing.
      launchAutoHide: false,
      backgroundColor: '#FBF6EEFF',
      showSpinner: false,
    },
    StatusBar: {
      // Translucent, drawn over the WebView rather than pushing it down —
      // the app's CSS already reserves space for it via env(safe-area-inset-top).
      overlaysWebView: true,
    },
  },
};

export default config;
