# Publishing Cadence to the Apple App Store — status and checklist

**Status: NOT ready. iOS has never been built or run.** The Xcode project exists (`cadence-app/ios`), but the
development Mac does not have Xcode installed (only Command Line Tools), so nothing could be compiled or tested.

## What is already in place
- Bundle ID `tech.buildc3.cadence`, deployment target iOS 15, version 1.0 (1).
- `NSMicrophoneUsageDescription` in Info.plist.
- Push entitlement removed (no push is used). Daily reminder uses local notifications.
- `PrivacyInfo.xcprivacy` written (data types + required-reason APIs) — see step 3 below.
- Account deletion exists in-app (Settings → Data charter) — required by Apple 5.1.1(v).
- Privacy policy URL: https://cadence.buildc3.tech/privacy · Support: arunodoy630@gmail.com
- No third-party login, so *Sign in with Apple* is not required.

## What YOU / a Mac must do
1. **Apple Developer Program** membership (US$99/year) and an App Store Connect record for `tech.buildc3.cadence`.
2. Install **Xcode** on a Mac. Then: `cd cadence-app && npm run build:native && npx cap sync ios && npx cap open ios`.
3. In Xcode: add `ios/App/App/PrivacyInfo.xcprivacy` to the App target (drag in, tick *Copy if needed* and the App target).
   Set your Team under *Signing & Capabilities*.
4. **Run on a real iPhone and test everything** (I could not): sign-up, lessons, conversation, microphone permission,
   speech playback, reminder permission, rotation, safe areas/notch, offline launch. Expect iOS-specific fixes.
5. App icon (1024×1024, no transparency) and launch screen check; 6.9" and 6.5" iPhone screenshots (and iPad if enabled).
6. Product → Archive → upload to App Store Connect → TestFlight → submit.
7. App Review notes: provide a demo account (create one), explain microphone use, note that AI conversation is generated.
8. Fill the **App Privacy** questionnaire: Contact info (email, name) – linked, app functionality; Audio data –
   not linked, not stored; User content – linked, app functionality; no tracking.
9. Age rating questionnaire (expect 4+; AI-generated text may raise it — answer honestly).

## Known iOS risks to check
- The WebView text-to-speech fallback plugin and `Intl.Segmenter` behave differently on iOS Safari/WKWebView.
- Safe-area insets differ from Android (the app relied on a non-overlay status bar on Android).
- Mic recording uses the Web Audio API; confirm it works under WKWebView permission prompts.
