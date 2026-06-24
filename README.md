# Cadence — language learning app

> "Duolingo builds a habit. Cadence builds a speaker."
> Free AI conversation from day one, real immersion, culture in every lesson,
> calm motivation, and a path to actual fluency across 30 languages.

This repo contains the **complete, designed front-end prototype** plus the
**engineering build spec**. The prototype is the source of truth for all UI and
flows — match it screen-for-screen. The spec describes the backend/brain to build.

---

## What's in this repo

| File | What it is |
|------|------------|
| `index.html` | **Standalone, self-contained build** of the prototype. Drag into Netlify to deploy the early-access demo. No build step, works offline. |
| `Cadence - Prototype.dc.html` | The **editable source** of the prototype (all 30 languages, every screen & flow). |
| `Cadence — Build Spec.dc.html` | The **engineering spec**: architecture, API integration map, Neon Postgres schema, auth & payments, and the adaptive-engine ML plan in 3 stages. Open in a browser to read. |
| `Cadence — Design Direction.dc.html` | The original thesis, brand system, and product map. |
| `Cadence - App.dc.html` | Static screen gallery (all screens laid out side by side). |

> The `.dc.html` files are "Design Component" files — open them directly in a
> browser to view. `index.html` is the compiled standalone build.

---

## The product (what's already designed & working)

- **30 languages**, 8 writing systems (Latin, Cyrillic, Greek, Devanagari, Bengali, Arabic, Hebrew, Thai, CJK/Hangul/Kana)
- Neutral multilingual onboarding → goal intake → **placement by conversation**
- **Lesson loop** (build-a-sentence, culture note, real-world milestone)
- **Live AI conversation** — 11 scenario personas, mic + voice (browser STT/TTS now)
- **Full CEFR climb A1→C2** — tappable levels → chapters → lessons
- **Immerse** library (graded articles / clips / podcasts / culture)
- **Pronunciation Lab**, **Smart Plan**, **audio shadowing**, **native corrections**, **vocab deck (SRS)**
- **Together** (tutors + community), **Settings**, **Data charter**
- **Auth** (Google / Apple / email) and **Checkout** (Card + UPI/Razorpay, trial)
- Gamification reimagined: real-skill milestones, fluency proof, shareable wins — no streak guilt / dark patterns

---

## The stack to build (see Build Spec for detail)

```
React Native / Expo app  (port the prototype screens 1:1)
        │  HTTPS + session JWT
Your backend  (Node/Express or serverless) — holds ALL secret keys
        ├──▶ OpenAI GPT          conversation, placement, debrief
        ├──▶ OpenAI Whisper      speech → text
        ├──▶ ElevenLabs          text → native voice
        ├──▶ Azure Pronunciation per-phoneme scoring
        ├──▶ Neon Postgres       users, progress, decks, attempts log
        └──▶ Stripe / Razorpay   subscriptions + trial + webhooks
```

**Golden rule:** every third-party key lives only on the backend. The app calls
*your* endpoints; your server attaches the key and proxies.

---

## Build order (for Google Antigravity)

1. **Backend + Neon + auth** — API skeleton, connect Neon, wire Google/Apple/email + JWT, persist progress. Port prototype screens to React Native/Expo.
2. **Real voice** — `/api/stt` (Whisper) + `/api/tts` (ElevenLabs); swap into the mic handler and `speak()`.
3. **Real conversation** — move GPT calls behind `/api/conversation` (streaming + guardrails); per-scenario prompts already exist in the prototype.
4. **Pronunciation + FSRS engine** — Azure scoring into the Lab; FSRS + rules into the Smart Plan / review. ← *shippable product here.*
5. **Payments** — Stripe/Razorpay subscription + trial + webhook → `users.plan`; gate Plus features.
6. **Adaptive ML** — once the `attempts` log has data, train the predictive model (logistic regression / GBM at ~0.8 target success) and graduate the engine. A/B test against retention.

> Steps 1–4 give a genuinely shippable app. Step 6 (true ML) needs real user
> data first — that's correct and expected.

---

## Deploy (Netlify)

- **Early-access demo (now):** drag `index.html` into Netlify → add custom domain `Cadence.buildc3.tech`.
- **Production:** Netlify hosts the front-end; deploy the backend to Vercel/Render with keys as environment secrets; point the app's API base URL at it.

---

## Key handling ⚠️

Never commit API keys. Use a `.env` (gitignored) locally and environment
secrets in your host. The prototype's `speak()`, mic handler, `aiReply()`, and
the Pronunciation Lab's score fields are the exact swap-in points — see the
Build Spec's integration map.
