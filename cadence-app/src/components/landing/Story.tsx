'use client';
import { useEffect, useRef, useState } from 'react';

const STEPS = [
  { img: '/landing/s-home.webp', k: '01', t: 'Pick a real-world goal', d: 'Every chapter is something you will actually do: order a coffee, ask the way, meet a family, call for help.' },
  { img: '/landing/s-lesson.webp', k: '02', t: 'Build the sentence', d: 'Assemble it from tiles. Stuck? Tap for a hint. No hearts, no streak guilt — just progress.' },
  { img: '/landing/s-convo.webp', k: '03', t: 'Then say it to someone', d: 'A live AI partner answers like a local and corrects you kindly after every message. Type or speak.' },
  { img: '/landing/s-reader.webp', k: '04', t: 'Keep what you learn', d: 'Read graded stories, tap any word to hear and save it. A smart deck brings it back right before you forget.' },
];

// Scroll-driven story: the phone stays put while the screen and the words change.
export function Story() {
  const box = useRef<HTMLDivElement>(null);
  const [p, setP] = useState(0);

  useEffect(() => {
    const scroller = document.querySelector('.ld') as HTMLElement | null;
    if (!scroller) return;
    let raf = 0;
    const calc = () => {
      raf = 0;
      const el = box.current; if (!el) return;
      const r = el.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      setP(Math.min(1, Math.max(0, -r.top / Math.max(1, total))));
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(calc); };
    scroller.addEventListener('scroll', on, { passive: true });
    window.addEventListener('resize', on);
    calc();
    return () => { scroller.removeEventListener('scroll', on); window.removeEventListener('resize', on); if (raf) cancelAnimationFrame(raf); };
  }, []);

  const active = Math.min(STEPS.length - 1, Math.floor(p * STEPS.length * 0.999));
  const go = (i: number) => {
    const el = box.current, sc = document.querySelector('.ld') as HTMLElement | null;
    if (!el || !sc) return;
    const top = el.offsetTop + ((el.offsetHeight - window.innerHeight) * (i + 0.5)) / STEPS.length;
    sc.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <div className="ld-story" ref={box}>
      <div className="ld-story-pin">
        <div className="ld-story-phone">
          <div className="ld-device ld-device-flat">
            <div className="ld-screen ld-screen-img">
              {STEPS.map((s, i) => (
                <img key={s.img} src={s.img} alt={s.t} className={i === active ? 'on' : i < active ? 'past' : ''} loading="lazy" />
              ))}
            </div>
          </div>
        </div>
        <div className="ld-story-text">
          <div className="ld-eyebrow ld-eyebrow-coral">How it feels</div>
          <div className="ld-story-steps">
            {STEPS.map((s, i) => (
              <div key={s.k} className={`ld-story-step${i === active ? ' on' : ''}`} aria-hidden={i !== active}>
                <span className="ld-story-k">{s.k}</span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
          <div className="ld-story-dots" role="tablist" aria-label="Story steps">
            {STEPS.map((s, i) => (
              <button key={s.k} role="tab" aria-selected={i === active} className={i === active ? 'on' : ''} onClick={() => go(i)} aria-label={s.t} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
