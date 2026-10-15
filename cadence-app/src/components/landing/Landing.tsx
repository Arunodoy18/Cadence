import './landing.css';
import { DownloadButton } from './DownloadButton';
import { APK_URL, GITHUB_URL, GRIEVANCE_EMAIL, RELEASE_PAGE_URL } from '@/lib/legal';

const LANGUAGES: { n: string; native: string; indian?: boolean }[] = [
  { n: 'Hindi', native: 'हिन्दी', indian: true }, { n: 'Marathi', native: 'मराठी', indian: true },
  { n: 'Gujarati', native: 'ગુજરાતી', indian: true }, { n: 'Assamese', native: 'অসমীয়া', indian: true },
  { n: 'Malayalam', native: 'മലയാളം', indian: true }, { n: 'Kannada', native: 'ಕನ್ನಡ', indian: true },
  { n: 'Bengali', native: 'বাংলা', indian: true },
  { n: 'Spanish', native: 'Español' }, { n: 'French', native: 'Français' }, { n: 'German', native: 'Deutsch' },
  { n: 'Italian', native: 'Italiano' }, { n: 'Portuguese', native: 'Português' }, { n: 'Japanese', native: '日本語' },
  { n: 'Korean', native: '한국어' }, { n: 'Mandarin', native: '中文' }, { n: 'Arabic', native: 'العربية' },
  { n: 'Russian', native: 'Русский' }, { n: 'Turkish', native: 'Türkçe' }, { n: 'Vietnamese', native: 'Tiếng Việt' },
  { n: 'Dutch', native: 'Nederlands' }, { n: 'Polish', native: 'Polski' }, { n: 'Indonesian', native: 'Bahasa Indonesia' },
  { n: 'Thai', native: 'ไทย' }, { n: 'Greek', native: 'Ελληνικά' }, { n: 'Hebrew', native: 'עברית' },
  { n: 'Ukrainian', native: 'Українська' }, { n: 'Swahili', native: 'Kiswahili' }, { n: 'Swedish', native: 'Svenska' },
  { n: 'Romanian', native: 'Română' }, { n: 'Czech', native: 'Čeština' }, { n: 'Hungarian', native: 'Magyar' },
  { n: 'Finnish', native: 'Suomi' }, { n: 'Norwegian', native: 'Norsk' }, { n: 'Danish', native: 'Dansk' },
  { n: 'Filipino', native: 'Tagalog' },
];

const FEATURES = [
  { icon: '💬', t: 'Talk from day one', d: 'Chat with an AI partner — a barista, a hotel receptionist, an emergency operator — in the language you are learning. It answers like a patient local and gently corrects you after every message.' },
  { icon: '🎙', t: 'Pronunciation lab', d: 'Hold the mic, say the phrase, and get a score for each word. Hear the native voice first, then try again.' },
  { icon: '🗺', t: 'Built around real goals', d: 'Every chapter ends with something you can actually do: order a coffee, ask the way, meet a family, check in, bargain, call for help.' },
  { icon: '📖', t: 'Tap-to-save reading', d: 'Short articles, dialogues and culture notes at your level. Tap any word to hear it and save it to your deck.' },
  { icon: '🧠', t: 'Remembers for you', d: 'A spaced-repetition deck brings a word back right before you would forget it, so what you learn stays learned.' },
  { icon: '🔒', t: 'Private by design', d: 'No ads, no selling data. Export or delete everything from inside the app. The daily reminder lives on your phone, not on our servers.' },
];

const SHOTS = [
  { src: '/landing/s-home.webp', cap: 'Your path, chapter by chapter' },
  { src: '/landing/s-lesson.webp', cap: 'Build the sentence' },
  { src: '/landing/s-convo.webp', cap: 'Live AI conversation' },
  { src: '/landing/s-reader.webp', cap: 'Tap a word to save it' },
  { src: '/landing/s-langs.webp', cap: '35 languages' },
];

const FAQ = [
  { q: 'Is Cadence free?', a: 'Yes. Every feature is free, with no ads and no paywall.' },
  { q: 'Why does Android say “unknown apps”?', a: 'Cadence is installed straight from this page, not from the Play Store yet, so Android asks you to allow your browser to install it. The file is signed with our release key and the whole source code is public on GitHub. A Play Store version is on the way.' },
  { q: 'Is there an iPhone version?', a: 'Not yet. Android comes first; iOS is planned.' },
  { q: 'Which Android versions work?', a: 'Android 7.0 and newer. It needs an internet connection for conversation, voice and saving progress.' },
  { q: 'Do I need an account?', a: 'Yes — a free account keeps your progress and your word deck safe. You can export or delete all of it any time.' },
  { q: 'How do I update?', a: 'Download the APK again from this page and open it; it installs over the old version and keeps your progress.' },
];

export default function Landing() {
  return (
    <div className="ld">
      <header className="ld-nav">
        <a className="ld-brand" href="#top" aria-label="Cadence home">
          <span className="ld-logo"><i /></span> Cadence
        </a>
        <nav className="ld-links">
          <a href="#features">Features</a>
          <a href="#languages">Languages</a>
          <a href="#install">Install</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="ld-btn ld-btn-small" href="#download">Download</a>
      </header>

      <main id="top">
        <section className="ld-hero">
          <div className="ld-hero-copy">
            <div className="ld-eyebrow">Free · Android · 35 languages</div>
            <h1>Speak any language <em>for real.</em></h1>
            <p className="ld-sub">Cadence builds a speaker, not a streak. Talk with an AI partner from your very first lesson, get kind corrections on every sentence, and learn the culture behind the words.</p>
            <DownloadButton large id="download" />
            <ul className="ld-ticks">
              <li>No ads, no paywall</li>
              <li>Hindi, Marathi, Gujarati, Assamese, Malayalam, Kannada &amp; more</li>
              <li>Your data stays yours — export or delete anytime</li>
            </ul>
          </div>
          <div className="ld-hero-art" aria-hidden="true">
            <div className="ld-phone ld-phone-a"><img src="/landing/s-convo.webp" alt="" loading="eager" /></div>
            <div className="ld-phone ld-phone-b"><img src="/landing/s-home.webp" alt="" loading="eager" /></div>
          </div>
        </section>

        <section className="ld-strip">
          <div><b>35</b><span>languages</span></div>
          <div><b>355</b><span>chapters</span></div>
          <div><b>0</b><span>ads</span></div>
          <div><b>₹0</b><span>to learn</span></div>
        </section>

        <section id="features" className="ld-section">
          <h2>Learn by doing the thing</h2>
          <p className="ld-lead">Most apps teach you to tap tiles. Cadence gets you talking.</p>
          <div className="ld-grid">
            {FEATURES.map((f) => (
              <article key={f.t} className="ld-card">
                <div className="ld-ico">{f.icon}</div>
                <h3>{f.t}</h3>
                <p>{f.d}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="ld-section ld-shots-wrap">
          <h2>See it in action</h2>
          <div className="ld-shots">
            {SHOTS.map((s) => (
              <figure key={s.src}>
                <div className="ld-phone ld-phone-shot"><img src={s.src} alt={s.cap} loading="lazy" /></div>
                <figcaption>{s.cap}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="languages" className="ld-section">
          <h2>35 languages, one app</h2>
          <p className="ld-lead">Including six Indian languages with full courses — and every one speaks back in a native voice.</p>
          <div className="ld-chips">
            {LANGUAGES.map((l) => (
              <span key={l.n} className={`ld-chip${l.indian ? ' ld-chip-in' : ''}`}>
                {l.n} <small>{l.native}</small>
              </span>
            ))}
          </div>
        </section>

        <section className="ld-section ld-steps">
          <h2>How it works</h2>
          <ol>
            <li><b>1</b><div><h3>Pick a language and a goal</h3><p>Tell Cadence why you are learning. A short chat finds your level — no quiz.</p></div></li>
            <li><b>2</b><div><h3>Learn, then talk</h3><p>Each chapter has a lesson, a culture note, pronunciation practice and a live conversation.</p></div></li>
            <li><b>3</b><div><h3>Watch real progress</h3><p>Milestones are things you can do, not points. Your word deck brings words back at the right time.</p></div></li>
          </ol>
        </section>

        <section id="install" className="ld-section ld-install">
          <h2>Install on your Android phone</h2>
          <ol className="ld-install-steps">
            <li><b>Download</b> — tap the button below on your phone (about 9 MB).</li>
            <li><b>Open the file</b> — when your browser finishes, tap <em>Open</em>.</li>
            <li><b>Allow once</b> — if Android asks, allow your browser to <em>install unknown apps</em>, then tap Install.</li>
            <li><b>Start talking</b> — open Cadence, create a free account, pick a language.</li>
          </ol>
          <DownloadButton large />
          <p className="ld-fine">Prefer to check first? The app is signed with our release key and the code is open at <a href={GITHUB_URL}>GitHub</a>. <a href={RELEASE_PAGE_URL}>All builds</a>.</p>
        </section>

        <section id="faq" className="ld-section ld-faq">
          <h2>Questions</h2>
          {FAQ.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </section>

        <section className="ld-cta">
          <h2>Ready to speak?</h2>
          <p>Free for Android. No ads. Start your first conversation in minutes.</p>
          <a className="ld-btn ld-btn-primary ld-btn-lg ld-btn-light" href={APK_URL} rel="noopener">Download Cadence</a>
        </section>
      </main>

      <footer className="ld-foot">
        <div className="ld-brand"><span className="ld-logo"><i /></span> Cadence</div>
        <div className="ld-foot-links">
          <a href="/privacy">Privacy Notice</a>
          <a href="/terms">Terms</a>
          <a href="/account-deletion">Delete your account</a>
          <a href={GITHUB_URL}>GitHub</a>
          <a href={`mailto:${GRIEVANCE_EMAIL}`}>Contact</a>
        </div>
        <p>© {new Date().getFullYear()} Cadence. Built under India&apos;s Digital Personal Data Protection Act, 2023.</p>
      </footer>
    </div>
  );
}
