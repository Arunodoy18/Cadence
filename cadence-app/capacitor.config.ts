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
      // Not overlaid: the WebView starts below the status bar. Android's
      // WebView reports env(safe-area-inset-top) as 0, so with an overlay the
      // top ~32dp of every screen (the HUD bar, headers) sat hidden under the
      // status bar and could never be scrolled into view.
      overlaysWebView: false,
      backgroundColor: '#FBF6EE',
    },
  },
};

export default config;
