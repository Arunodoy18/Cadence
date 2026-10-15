'use client';
import { useState } from 'react';
import { GREETINGS } from './data';
import { speak } from './hooks';

const ROW_A = GREETINGS.filter((_, i) => i % 2 === 0);
const ROW_B = GREETINGS.filter((_, i) => i % 2 === 1);

// Two drifting rows of every language. Tap one to hear its hello.
export function Languages() {
  const [active, setActive] = useState<string | null>(null);
  const [heard, setHeard] = useState<boolean | null>(null);
  const hit = (g: (typeof GREETINGS)[number]) => {
    setActive(g.name); setHeard(speak(g.text, g.loc));
    setTimeout(() => setActive((a) => (a === g.name ? null : a)), 2400);
  };
  const row = (items: typeof GREETINGS, cls: string) => (
    <div className={`ld-marquee ${cls}`}>
      <div className="ld-marquee-track">
        {[...items, ...items].map((g, i) => (
          <button key={g.name + i} className={`ld-lang${g.indian ? ' in' : ''}${active === g.name ? ' live' : ''}`} onClick={() => hit(g)} aria-label={`Hear hello in ${g.name}`}>
            <span className="ld-lang-t">{g.text}</span>
            <span className="ld-lang-n">{g.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
  return (
    <div className="ld-langs">
      {row(ROW_A, 'a')}
      {row(ROW_B, 'b')}
      <p className="ld-langs-hint" role="status">
        {active ? (heard === false ? `${active} — hello! (your browser can’t speak this one)` : `Saying hello in ${active}…`) : 'Tap any language to hear hello.'}
      </p>
    </div>
  );
}
