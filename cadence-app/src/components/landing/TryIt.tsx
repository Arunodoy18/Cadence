'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import { DEMOS } from './data';
import { prefersReducedMotion, speak } from './hooks';

const joiner = (code: string) => (code === 'ja' || code === 'zh' ? '' : ' ');

// A playable slice of the real app: partner speaks, you build the reply from tiles,
// it is checked, the partner answers, and your pronunciation gets a score.
export function TryIt() {
  const [di, setDi] = useState(0);
  const d = DEMOS[di];
  const [answer, setAnswer] = useState<number[]>([]);
  const [status, setStatus] = useState<'idle' | 'wrong' | 'right'>('idle');
  const [wrongs, setWrongs] = useState(0);
  const [typing, setTyping] = useState(true);
  const [replyTyping, setReplyTyping] = useState(false);
  const [replyShown, setReplyShown] = useState(false);
  const [showEn, setShowEn] = useState(false);
  const [hints, setHints] = useState(false);
  const [canSpeak, setCanSpeak] = useState(false);
  const [bursts, setBursts] = useState(0);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => { setCanSpeak('speechSynthesis' in window); }, []);

  // reset whenever the language changes
  useEffect(() => {
    setAnswer([]); setStatus('idle'); setWrongs(0); setReplyShown(false); setReplyTyping(false); setShowEn(false); setHints(false);
    setTyping(true);
    const t = setTimeout(() => setTyping(false), prefersReducedMotion() ? 0 : 1000);
    return () => clearTimeout(t);
  }, [di]);

  useEffect(() => { const el = chatRef.current; if (el) el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' }); }, [typing, status, replyShown, replyTyping]);

  const sentence = useMemo(() => d.correct.map((i) => d.bank[i]).join(joiner(d.code)), [d]);
  const mine = answer.map((i) => d.bank[i]).join(joiner(d.code));
  const nextHint = status !== 'right' && wrongs >= 2 ? d.correct[answer.length] : -1;
  const score = useMemo(() => 90 + ((d.code.charCodeAt(0) + d.code.charCodeAt(1)) % 8), [d]);

  const tap = (idx: number) => {
    if (status === 'right' || answer.includes(idx)) return;
    setStatus('idle');
    setAnswer((a) => [...a, idx]);
  };
  const check = () => {
    const ok = answer.length === d.correct.length && answer.every((v, i) => v === d.correct[i]);
    if (ok) {
      setStatus('right'); setBursts((b) => b + 1);
      setReplyTyping(true);
      setTimeout(() => { setReplyTyping(false); setReplyShown(true); }, prefersReducedMotion() ? 0 : 1500);
    } else { setStatus('wrong'); setWrongs((w) => w + 1); setTimeout(() => setStatus((s) => (s === 'wrong' ? 'idle' : s)), 700); }
  };
  const reset = () => { setAnswer([]); setStatus('idle'); setReplyShown(false); setReplyTyping(false); setWrongs(0); };

  return (
    <div className="ld-try">
      <div className="ld-try-copy">
        <div className="ld-eyebrow ld-eyebrow-coral">Try it. Right here.</div>
        <h2>You already know<br />how this works.</h2>
        <p className="ld-lead">This is a real slice of Chapter 1 from the app. A local speaks to you — build your reply, tap Check, and hear what happens. Switch language any time.</p>
        <div className="ld-tabs" role="tablist" aria-label="Choose a language to try">
          {DEMOS.map((x, k) => (
            <button key={x.code} role="tab" aria-selected={k === di} className={k === di ? 'on' : ''} onClick={() => setDi(k)}>
              {x.name} <small lang={x.code}>{x.native}</small>
            </button>
          ))}
        </div>
        <p className="ld-note">Every one of the 35 languages works like this — with a native voice, a live AI partner and a pronunciation lab.</p>
      </div>

      <div className="ld-try-stage">
        <div className="ld-device ld-device-flat">
          <div className="ld-screen ld-screen-try">
            <div className="ld-chat-head">
              <span className="ld-avatar">{d.partner[0]}</span>
              <div><b>{d.partner.split(' · ')[0]}</b><small>{d.partner.split(' · ')[1]} · live AI</small></div>
            </div>

            <div className="ld-chat ld-chat-try" ref={chatRef}>
              {typing ? (
                <div className="ld-bub ld-bub-p ld-dots"><i /><i /><i /></div>
              ) : (
                <div className="ld-bub ld-bub-p" dir={d.rtl ? 'rtl' : undefined}>
                  <span lang={d.code}>{d.open}</span>
                  {showEn && <small>{d.openEn}</small>}
                  <div className="ld-bub-tools">
                    {canSpeak && <button onClick={() => speak(d.open, d.loc)} aria-label="Hear it">🔊</button>}
                    <button onClick={() => setShowEn((v) => !v)} aria-label="Show translation">{showEn ? 'hide' : 'EN'}</button>
                  </div>
                </div>
              )}

              {status === 'right' && (
                <div className="ld-bub ld-bub-u ld-pop" dir={d.rtl ? 'rtl' : undefined}>
                  <span lang={d.code}>{sentence}</span>
                  {canSpeak && <div className="ld-bub-tools"><button onClick={() => speak(sentence, d.loc)} aria-label="Hear your sentence">🔊</button></div>}
                </div>
              )}
              {replyTyping && <div className="ld-bub ld-bub-p ld-dots"><i /><i /><i /></div>}
              {replyShown && (
                <>
                  <div className="ld-bub ld-bub-p ld-pop" dir={d.rtl ? 'rtl' : undefined}>
                    <span lang={d.code}>{d.reply}</span><small>{d.replyEn}</small>
                  </div>
                  <div className="ld-result ld-pop">
                    <svg viewBox="0 0 44 44" width="64" height="64" aria-hidden="true">
                      <circle cx="22" cy="22" r="18" className="ld-ring-bg" />
                      <circle cx="22" cy="22" r="18" className="ld-ring" style={{ strokeDasharray: `${(score / 100) * 113} 113` }} />
                    </svg>
                    <div>
                      <b>{score}% <em>example score</em></b>
                      <span>In the app, hold the mic and every word you say gets its own score.</span>
                    </div>
                  </div>
                  <div className="ld-phrase ld-pop"><b>Culture note</b><span lang={d.code}>{d.phrase}</span></div>
                </>
              )}
            </div>

            <div className="ld-build">
              {status !== 'right' ? (
                <>
                  <div className="ld-build-top">
                    <span>Build your reply</span>
                    <button className="ld-link" onClick={() => setHints((h) => !h)}>{hints ? 'Hide hints' : 'Need a hint?'}</button>
                  </div>
                  <div className="ld-prompt">“{d.prompt}”</div>
                  <div className={`ld-slot${status === 'wrong' ? ' shake' : ''}`} dir={d.rtl ? 'rtl' : undefined} lang={d.code}>
                    {answer.length === 0 && <i>Tap the words below…</i>}
                    {answer.map((idx, k) => (
                      <button key={k} className="ld-tile on" onClick={() => setAnswer((a) => a.filter((_, j) => j !== k))}>{d.bank[idx]}</button>
                    ))}
                  </div>
                  <div className="ld-bank" dir={d.rtl ? 'rtl' : undefined} lang={d.code}>
                    {d.bank.map((w, idx) => (
                      <button key={idx} className={`ld-tile${answer.includes(idx) ? ' used' : ''}${nextHint === idx ? ' hint' : ''}`} onClick={() => tap(idx)} disabled={answer.includes(idx)}>
                        {w}{hints && <small>{d.bankEn[idx]}</small>}
                      </button>
                    ))}
                  </div>
                  <div className="ld-build-foot">
                    <button className="ld-check" onClick={check} disabled={answer.length === 0}>Check</button>
                    <span className="ld-msg" role="status">{status === 'wrong' ? (wrongs >= 2 ? 'Almost — follow the glowing word.' : 'Almost — check the order.') : ''}</span>
                  </div>
                </>
              ) : (
                <div className="ld-build-foot ld-done">
                  <button className="ld-check" onClick={reset}>Play again</button>
                  <a className="ld-check ld-check-alt" href="#download">Keep going in the app →</a>
                </div>
              )}
            </div>
            {status === 'right' && <Confetti key={bursts} />}
          </div>
        </div>
      </div>
    </div>
  );
}

function Confetti() {
  const bits = useMemo(() => Array.from({ length: 34 }, (_, i) => ({
    x: (Math.random() - 0.5) * 340, y: -(120 + Math.random() * 240), r: Math.random() * 720 - 360,
    c: ['#DB5338', '#E1A23A', '#2F8F83', '#5B3A56', '#FBF6EE'][i % 5], d: Math.random() * 120,
  })), []);
  return (
    <div className="ld-confetti" aria-hidden="true">
      {bits.map((b, i) => (
        <i key={i} style={{ background: b.c, ['--x' as any]: `${b.x}px`, ['--y' as any]: `${b.y}px`, ['--r' as any]: `${b.r}deg`, animationDelay: `${b.d}ms` }} />
      ))}
    </div>
  );
}
