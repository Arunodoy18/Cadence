# Publishing Cadence to the Apple App Store — status and checklist

**Status: builds successfully for the iOS Simulator (Xcode 27.1, iOS 27.1 SDK); NOT yet run, signed or submitted.**
Still needed: signing with your Apple team, a run on a simulator/real iPhone, and the App Store Connect steps below.

## What is already in place
- Bundle ID `tech.buildc3.cadence`, deployment target iOS 15, version 1.0 (1).
- `NSMicrophoneUsageDescription` in Info.plist.
- iPhone is portrait-only (matches Android); `ITSAppUsesNonExemptEncryption=false` set (HTTPS only) so no export-compliance prompt.
- Push entitlement removed (no push is used). Daily reminder uses local notifications.
- `PrivacyInfo.xcprivacy` written and registered in the Xcode project (bundled in the app — verified).
- Account deletion exists in-app (Settings → Data charter) — required by Apple 5.1.1(v).
- Privacy policy URL: https://cadence.buildc3.tech/privacy · Support: arunodoy630@gmail.com
- No third-party login, so *Sign in with Apple* is not required.

## What YOU / a Mac must do
1. **Apple Developer Program** membership (US$99/year) and an App Store Connect record for `tech.buildc3.cadence`.
2. Install **Xcode** on a Mac. Then: `cd cadence-app && npm run build:native && npx cap sync ios && npx cap open ios`.
3. In Xcode: set your Team under *Signing & Capabilities* (the privacy manifest is already included).
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

## Pre-submission checklist (tick before Submit for Review)
- [ ] Team ID set in Xcode; Archive validates with no errors; TestFlight build installed and tested on a real iPhone.
- [ ] App Store Connect: name *Cadence*, subtitle, description, keywords, support URL, **privacy policy URL** (https://cadence.buildc3.tech/privacy), category Education.
- [ ] App Privacy answers match the Privacy Notice; age rating done.
- [ ] Screenshots for 6.9" and 6.5" iPhones; 1024x1024 icon without alpha (verified).
- [ ] Review notes + demo account; mention microphone use and AI-generated replies.
- [ ] No payments exist yet, so no in-app-purchase setup is needed for v1.0. When Plus launches it MUST use Apple IAP (guideline 3.1.1).
- [ ] Account deletion works in-app (5.1.1(v)) — verified.
