# Publishing Cadence to Google Play

## What is ready
- **App bundle:** `Cadence-play-store.aab` is attached to the rolling GitHub release
  (https://github.com/Arunodoy18/Cadence/releases/tag/latest-apk) once the signing secrets are set.
  It is signed with your upload key (`android/cadence-release.jks`).
- **Package name:** `tech.buildc3.cadence` · **Target SDK:** 36 · **Min SDK:** 24 (Android 7+)
- **versionCode** increases automatically on every CI build; **versionName** is 1.0.0.
- **Privacy policy URL:** https://cadence.buildc3.tech/privacy
- **Account-deletion URL:** https://cadence.buildc3.tech/account-deletion
- **Contact email:** doifodeyash961@gmail.com

## Your steps in Play Console
1. Create the app (name *Cadence*, default language English, App, Free).
2. **Play App Signing:** accept it; upload the `.aab` as the first release (Internal testing first).
3. **Store listing** — paste the text below; upload the 512×512 icon (`cadence-app/resources/icon.png`),
   a 1024×500 feature graphic, and at least 2 phone screenshots (`/screenshots`).
4. **App content** forms (answers below).
5. Add testers to *Internal testing*, install via the opt-in link, then promote to Production.

## Store listing text
**Short description (80):** Learn to speak 35 languages with a friendly AI partner. Free.

**Full description:**
Duolingo builds a habit. Cadence builds a speaker.

Talk with an AI conversation partner from day one, in 35 languages — including Hindi, Marathi, Gujarati,
Assamese, Malayalam, Kannada and Bengali. Every chapter is built around a real-world goal: order a drink,
ask the way, meet a family, check into a hotel, shop at a market, call for help.

• Live AI conversation with instant, kind corrections
• Pronunciation lab with word-by-word scoring
• Lessons, culture notes and graded reading with tap-to-save words
• Spaced-repetition word deck that reminds you right before you forget
• A daily reminder that stays on your phone
• No ads. No selling data. Export or delete your data any time.

## Data safety form
| Question | Answer |
|---|---|
| Collects data? | Yes |
| Shares data with third parties? | Yes — speech/AI processors (service providers), no advertising |
| Encrypted in transit? | Yes (HTTPS) |
| Users can request deletion? | Yes — in app and at the account-deletion URL |
| Personal info → Name, Email | Collected, required for account, not shared for ads |
| Audio → Voice recordings | Collected only while the user holds the mic; processed to give the result; **not stored** |
| App activity → in-app progress | Collected, for app functionality |
| Device IDs / location / contacts / photos | Not collected |

## Other forms
- **Content rating:** answer the questionnaire — no violence, no user-generated content shared between users,
  no gambling. Expect *Everyone*. (Conversations use generative AI: say so when asked.)
- **Target audience:** 13+ / 18+ (the app asks users to confirm they are 18+ or have parental consent).
- **Ads:** none. **Government app:** no. **Financial features:** none.
- **Permissions to justify:** `RECORD_AUDIO` (speak to the AI partner / pronunciation),
  `POST_NOTIFICATIONS` (optional daily reminder), `INTERNET`.
- **Generative AI disclosure:** the app uses AI to generate conversation replies and corrections.

## Before going to Production
- Replace or confirm the support email above.
- Have native speakers review the Hindi-family, Dravidian and Assamese courses.
- Run through Play's *pre-launch report* (automatic after the first upload).
