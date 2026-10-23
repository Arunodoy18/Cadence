'use client';
import { useEffect, useRef, useState } from 'react';
import { GREETINGS } from './data';
import { prefersReducedMotion, speak } from './hooks';
import { DownloadButton } from './DownloadButton';

// Cycles through every language's hello, in its own script. Tap to hear it.
function GreetingRotator() {
  const [i, setI] = useState(0);
  const [heard, setHeard] = useState(false);
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const id = setInterval(() => setI((x) => (x + 1) % GREETINGS.length), 2100);
    return () => clearInterval(id);
  }, []);
  const g = GREETINGS[i];
  return (
    <button className="ld-greet" aria-live="polite" onClick={() => { setHeard(speak(g.text, g.loc)); }} title="Tap to hear it">
      <span key={g.name + i} className="ld-greet-word">{g.text}</span>
      <span className="ld-greet-meta"><b>{g.name}</b> · {heard ? 'speaking…' : 'tap to hear'}</span>
    </button>
  );
}

type Line = { who: 'p' | 'u' | 'tip'; text: string; en?: string };
const SCRIPT: Line[] = [
  { who: 'p', text: 'नमस्ते! क्या लेंगे आप?', en: 'Hello! What will you have?' },
  { who: 'u', text: 'मुझे एक चाय चाहिए।' },
  { who: 'tip', text: 'Nice — “मुझे … चाहिए” is exactly how locals say “I’d like”.' },
  { who: 'p', text: 'अदरक वाली या साधारण?', en: 'Ginger or plain?' },
  { who: 'u', text: 'अदरक वाली, धन्यवाद।' },
  { who: 'p', text: 'बस दस रुपये।', en: 'Just ten rupees.' },
];

// A phone that tilts toward your finger/cursor and plays a conversation on loop.
function TiltPhone() {
  const wrap = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(2);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) { setShown(SCRIPT.length); return; }
    let cancelled = false; let t: ReturnType<typeof setTimeout>;
    const run = (n: number) => {
      if (cancelled) return;
      if (n > SCRIPT.length) { t = setTimeout(() => { setShown(2); run(3); }, 3200); return; }
      const next = SCRIPT[n - 1];
      setTyping(next.who === 'p');
      t = setTimeout(() => { if (cancelled) return; setTyping(false); setShown(n); run(n + 1); }, next.who === 'p' ? 1500 : next.who === 'tip' ? 1100 : 1300);
    };
    run(3);
    return () => { cancelled = true; clearTimeout(t); };
  }, []);

  const onMove = (e: React.PointerEvent) => {
    const el = wrap.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty('--ry', `${x * 22}deg`); el.style.setProperty('--rx', `${-y * 18}deg`);
    el.style.setProperty('--gx', `${(x + 0.5) * 100}%`); el.style.setProperty('--gy', `${(y + 0.5) * 100}%`);
  };
  const onLeave = () => { const el = wrap.current; if (!el) return; el.style.setProperty('--ry', '0deg'); el.style.setProperty('--rx', '0deg'); };

  return (
    <div className="ld-tilt" ref={wrap} onPointerMove={onMove} onPointerLeave={onLeave} onPointerUp={onLeave}>
      <div className="ld-device">
        <div className="ld-glare" />
        <div className="ld-screen">
          <div className="ld-chat-head"><span className="ld-avatar">R</span><div><b>रवि Ravi</b><small>chai wala · Delhi tea stall</small></div></div>
          <div className="ld-chat">
            {SCRIPT.slice(0, shown).map((l, k) =>
              l.who === 'tip' ? (
                <div key={k} className="ld-bub ld-tip">{l.text}</div>
              ) : (
                <div key={k} className={`ld-bub ${l.who === 'p' ? 'ld-bub-p' : 'ld-bub-u'}`}>
                  <span lang="hi">{l.text}</span>
                  {l.en && <small>{l.en}</small>}
                </div>
              ),
            )}
            {typing && <div className="ld-bub ld-bub-p ld-dots"><i /><i /><i /></div>}
          </div>
          <div className="ld-chat-foot"><span>Type a message…</span><i>🎙</i></div>
        </div>
      </div>
      {['नमस्ते', 'Hola', 'こんにちは', 'مرحباً', 'Bonjour', 'നമസ്കാരം', '你好'].map((w, k) => (
        <span key={w} className={`ld-float ld-float-${k}`} aria-hidden="true">{w}</span>
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section className="ld-hero">
      <div className="ld-aurora" aria-hidden="true"><i /><i /><i /></div>
      <div className="ld-hero-copy">
        <div className="ld-eyebrow"><span className="ld-pulse" /> Free · Android · 35 languages</div>
        <h1>
          <span className="ld-h1-a">Say</span>
          <GreetingRotator />
          <span className="ld-h1-b">and mean it<em>.</em></span>
        </h1>
        <p className="ld-sub">Cadence builds a speaker, not a streak. Talk with an AI partner from your very first lesson, get kind corrections on every sentence, and learn the culture behind the words.</p>
        <DownloadButton large id="download" />
        <ul className="ld-ticks">
          <li>No ads. Lessons, reading and your word deck are free forever</li>
          <li>Hindi, Marathi, Gujarati, Assamese, Malayalam, Kannada &amp; more</li>
          <li>Your data stays yours — export or delete anytime</li>
        </ul>
      </div>
      <div className="ld-hero-art"><TiltPhone /></div>
    </section>
  );
}
