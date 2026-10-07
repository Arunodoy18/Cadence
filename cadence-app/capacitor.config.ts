import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'tech.buildc3.cadence',
  appName: 'Cadence',
  // The UI is a static bundle (built by `npm run build:native` into ./out) that
  // is packed inside the APK and served from the device — the app opens
  // instantly and its screens work offline. Only data calls (sign-in, AI
  // conversation, speech, progress) go to the Cadence API over HTTPS.
  webDir: 'out',
  android: {
    // Only for local testing against a dev API over `adb reverse` (plain http).
    // Release/CI builds never set CADENCE_DEV_API, so this stays false.
    allowMixedContent: !!process.env.CADENCE_DEV_API,
  },
  ios: {
    contentInset: 'always',
  },
  plugins: {
    SplashScreen: {
      // Hidden manually once the first screen has rendered, so there's no
      // blank flash between the splash disappearing and content appearing.
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
