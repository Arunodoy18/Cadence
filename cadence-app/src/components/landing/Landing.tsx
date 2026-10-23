import './landing.css';
import { DownloadButton } from './DownloadButton';
import { Hero } from './Hero';
import { TryIt } from './TryIt';
import { Story } from './Story';
import { Languages } from './Languages';
import { Numbers } from './Numbers';
import { QrCard } from './QrCard';
import { Reveal } from './hooks';
import { APK_URL, GITHUB_URL, GRIEVANCE_EMAIL, RELEASE_PAGE_URL } from '@/lib/legal';

const FEATURES = [
  { icon: '💬', t: 'Talk from day one', d: 'A patient AI partner — barista, receptionist, emergency operator — answers like a local and corrects you kindly.' },
  { icon: '🎙', t: 'Pronunciation lab', d: 'Hold the mic and see a score for every word. Hear the native voice first, then try again.' },
  { icon: '🗺', t: 'Real-world goals', d: 'Each chapter ends with something you can actually do: order, ask the way, bargain, call for help.' },
  { icon: '📖', t: 'Tap-to-save reading', d: 'Graded stories and culture notes. Tap a word to hear it and save it to your deck.' },
  { icon: '🧠', t: 'Remembers for you', d: 'Spaced repetition brings each word back right before you would forget it.' },
  { icon: '🔒', t: 'Private by design', d: 'No ads, no data selling. Export or delete everything inside the app. Reminders stay on your phone.' },
];

const FAQ = [
  { q: 'Is Cadence free?', a: 'Free to download, with no ads. Lessons, reading, culture notes and your word deck are free forever. Daily AI conversation and pronunciation practice are free up to a daily limit; Cadence Plus (coming soon) makes them unlimited.' },
  { q: 'Why does Android say “unknown apps”?', a: 'Cadence installs straight from this page, not the Play Store yet, so Android asks you to allow your browser to install it once. The file is signed with our release key and the full source code is public on GitHub. A Play Store version is on the way.' },
  { q: 'Is there an iPhone version?', a: 'Not yet. Android comes first; iOS is planned.' },
  { q: 'Which Android versions work?', a: 'Android 7.0 and newer. It needs internet for conversation, voice and saving progress.' },
  { q: 'Do I need an account?', a: 'Yes — a free account keeps your progress and word deck safe. You can export or delete all of it any time.' },
  { q: 'How do I update?', a: 'Download the APK again from this page and open it; it installs over the old version and keeps your progress.' },
];

export default function Landing() {
  return (
    <div className="ld">
      <header className="ld-nav">
        <a className="ld-brand" href="#top" aria-label="Cadence home"><span className="ld-logo"><i /></span> Cadence</a>
        <nav className="ld-links">
          <a href="#try">Try it</a><a href="#languages">Languages</a><a href="#install">Install</a><a href="#faq">FAQ</a>
        </nav>
        <a className="ld-btn ld-btn-small" href="#download">Download</a>
      </header>

      <main id="top">
        <Hero />

        <Reveal><section className="ld-strip-wrap"><Numbers /></section></Reveal>

        <section id="try" className="ld-section ld-try-section"><TryIt /></section>

        <section className="ld-story-wrap"><Story /></section>

        <section id="languages" className="ld-dark">
          <div className="ld-section ld-langs-head">
            <Reveal>
              <div className="ld-eyebrow ld-eyebrow-dark">35 languages · one app</div>
              <h2>Say hello to<br />the whole world.</h2>
              <p className="ld-lead">Seven Indian languages with full courses — Hindi, Marathi, Gujarati, Assamese, Malayalam, Kannada and Bengali — and a native voice for every one.</p>
            </Reveal>
          </div>
          <Languages />
        </section>

        <section id="features" className="ld-section">
          <Reveal><h2>Learn by doing the thing</h2><p className="ld-lead">Most apps teach you to tap tiles. Cadence gets you talking.</p></Reveal>
          <div className="ld-grid">
            {FEATURES.map((f, i) => (
              <Reveal key={f.t} delay={i * 70}>
                <article className="ld-card"><div className="ld-ico">{f.icon}</div><h3>{f.t}</h3><p>{f.d}</p></article>
              </Reveal>
            ))}
          </div>
        </section>

        <Reveal>
          <section id="install" className="ld-section ld-install">
            <div className="ld-install-grid">
              <div>
                <div className="ld-eyebrow ld-eyebrow-dark">Free · 9 MB · Android 7+</div>
                <h2>Put it on your phone.<br />Start talking in a minute.</h2>
                <ol className="ld-install-steps">
                  <li><b>Download</b> — tap the button on your phone.</li>
                  <li><b>Open the file</b> — when it finishes, tap <em>Open</em>.</li>
                  <li><b>Allow once</b> — if asked, let your browser <em>install unknown apps</em>, then Install.</li>
                  <li><b>Say hello</b> — create a free account and pick a language.</li>
                </ol>
                <DownloadButton large />
                <p className="ld-fine">Signed with our release key · open source on <a href={GITHUB_URL}>GitHub</a> · <a href={RELEASE_PAGE_URL}>all builds</a></p>
              </div>
              <QrCard />
            </div>
          </section>
        </Reveal>

        <section id="faq" className="ld-section ld-faq">
          <Reveal><h2>Questions</h2></Reveal>
          {FAQ.map((f) => (
            <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>
          ))}
        </section>

        <section className="ld-cta">
          <div className="ld-aurora ld-aurora-cta" aria-hidden="true"><i /><i /><i /></div>
          <Reveal>
            <h2>Ready to speak?</h2>
            <p>Free for Android. No ads. Your first real conversation is a minute away.</p>
            <a className="ld-btn ld-btn-lg ld-btn-light" href={APK_URL} rel="noopener">Download Cadence</a>
          </Reveal>
        </section>
      </main>

      <footer className="ld-foot">
        <div className="ld-brand"><span className="ld-logo"><i /></span> Cadence</div>
        <div className="ld-foot-links">
          <a href="/privacy">Privacy Notice</a><a href="/terms">Terms</a><a href="/account-deletion">Delete your account</a>
          <a href={GITHUB_URL}>GitHub</a><a href={`mailto:${GRIEVANCE_EMAIL}`}>Contact</a>
        </div>
        <p>© {new Date().getFullYear()} Cadence. Built under India&apos;s Digital Personal Data Protection Act, 2023.</p>
      </footer>
    </div>
  );
}
