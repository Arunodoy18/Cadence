'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { LANGS } from '@/lib/languages';
import { scenarioMeta } from '@/lib/scenarios';
import { useRouter } from 'next/navigation';

export default function App() {
  const { data: session, status: authStatus } = useSession();
  const router = useRouter();
  const userPlan = (session?.user as any)?.plan || 'free';

  // Core navigation state
  const [view, setView] = useState('welcome');
  const [lang, setLang] = useState('es');
  const [scenario, setScenario] = useState('cafe');
  const [picker, setPicker] = useState(false);
  const [pickerNext, setPickerNext] = useState<string | null>(null);

  // Rotating greeting state
  const [greetIdx, setGreetIdx] = useState(0);

  // Onboarding / Goals state
  const [goals, setGoals] = useState<{ [key: string]: boolean }>({
    travel: false,
    family: false,
    work: false,
    culture: false,
    exam: false,
    joy: false,
  });

  // Placement state
  const [placeMsgs, setPlaceMsgs] = useState<any[]>([]);
  const [placeDone, setPlaceDone] = useState(false);
  const [placeLevel, setPlaceLevel] = useState('A2');
  const [placeDraft, setPlaceDraft] = useState('');
  const [placeThinking, setPlaceThinking] = useState(false);

  // Lesson state
  const [answer, setAnswer] = useState<number[]>([]);
  const [lessonResult, setLessonResult] = useState<string>(''); // 'correct', 'wrong', or ''

  // Pronunciation Lab state
  const [pronResult, setPronResult] = useState<any | null>(null);
  const [recordingPron, setRecordingPron] = useState(false);
  const [pronScore, setPronScore] = useState<number | null>(null);

  // Smart Plan state
  const [planItems, setPlanItems] = useState<any[]>([]);

  // Live Conversation state
  const [convo, setConvo] = useState({
    msgs: [] as any[],
    draft: '',
    thinking: false,
    listening: false,
    live: false,
  });

  // Reader state
  const [pop, setPop] = useState<{ term: string; def: string } | null>(null);

  // Settings / Profile states
  const [dailyGoal, setDailyGoal] = useState(10);
  const [notif, setNotif] = useState<{ [key: string]: boolean }>({
    daily: true,
    quiet: true,
    streak: true,
    picks: false,
    friends: true,
  });
  const [charter, setCharter] = useState<{ [key: string]: boolean }>({
    improve: true,
    aiTrain: false,
    share: true,
  });
  const [level, setLevel] = useState('A2');
  const [backTo, setBackTo] = useState('you');

  // Auth states
  const [authMode, setAuthMode] = useState<'signup' | 'login'>('signup');
  const [authEmail, setAuthEmail] = useState('');
  const [authPassword, setAuthPassword] = useState('');
  const [authName, setAuthName] = useState('');
  const [authError, setAuthError] = useState('');

  // Audio shadowing states
  const [audioPlaying, setAudioPlaying] = useState(false);

  // MediaRecorder for STT
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  // Greet timer
  useEffect(() => {
    const timer = setInterval(() => {
      setGreetIdx((s) => (s + 1) % 5);
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  // Fetch smart plan when language changes or home loads
  useEffect(() => {
    if (authStatus === 'authenticated' && (view === 'home' || view === 'smartplan')) {
      fetchPlan();
    }
  }, [lang, view, authStatus]);

  const fetchPlan = async () => {
    try {
      const res = await fetch('/api/plan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lang }),
      });
      const data = await res.json();
      if (data.plan) {
        setPlanItems(data.plan);
      }
    } catch (e) {
      console.error('Failed to load plan', e);
    }
  };

  // Text-To-Speech function
  const speak = async (text: string, locale: string) => {
    try {
      const res = await fetch('/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, lang }),
      });
      if (!res.ok) throw new Error('TTS API failed');
      const audioBlob = await res.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
      const audio = new Audio(audioUrl);
      audio.play();
    } catch (e) {
      // Fallback to local browser SpeechSynthesis
      try {
        if (!window.speechSynthesis) return;
        const u = new SpeechSynthesisUtterance(text);
        u.lang = locale;
        u.rate = 0.92;
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(u);
      } catch (err) {}
    }
  };

  // Start Mic Recording
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream, { mimeType: 'audio/webm' });
      mediaRecorderRef.current = recorder;
      audioChunksRef.current = [];

      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          audioChunksRef.current.push(e.data);
        }
      };

      recorder.start();
      return true;
    } catch (e) {
      console.error('Microphone access denied', e);
      return false;
    }
  };

  // Stop Mic Recording and return transcription
  const stopRecording = (): Promise<string> => {
    return new Promise((resolve) => {
      const recorder = mediaRecorderRef.current;
      if (!recorder) {
        resolve('');
        return;
      }

      recorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        
        // Call /api/stt
        const formData = new FormData();
        formData.append('file', audioBlob);

        try {
          const res = await fetch('/api/stt', {
            method: 'POST',
            body: formData,
          });
          const data = await res.json();
          resolve(data.transcript || '');
        } catch (e) {
          console.error('STT API error', e);
          resolve('');
        }
      };

      recorder.stop();
      // Stop all tracks in stream
      recorder.stream.getTracks().forEach((track) => track.stop());
    });
  };

  // Onboarding placement check
  const startPlacement = () => {
    const L = LANGS[lang];
    setView('placement');
    setPlaceDone(false);
    setPlaceLevel('A1');
    const introMsg = { who: 'p', n: L.convo[0].n, en: L.convo[0].en };
    setPlaceMsgs([introMsg]);
    speak(L.convo[0].n, L.locale);
  };

  const submitPlacement = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const L = LANGS[lang];
    const userMsg = { who: 'u', n: trimmed };
    const updatedMsgs = [...placeMsgs, userMsg];
    
    setPlaceMsgs(updatedMsgs);
    setPlaceDraft('');
    setPlaceThinking(true);

    const userTurns = updatedMsgs.filter((m) => m.who === 'u').length;
    const finish = userTurns >= 3;

    try {
      const res = await fetch('/api/placement', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: updatedMsgs,
          lang: L.name,
          finish,
        }),
      });
      const data = await res.json();

      setPlaceThinking(false);
      
      if (finish) {
        setPlaceMsgs([...updatedMsgs, { who: 'p', n: data.reply, en: data.english || '' }]);
        setPlaceDone(true);
        setPlaceLevel(data.level || 'A2');
      } else {
        setPlaceMsgs([...updatedMsgs, { who: 'p', n: data.reply, en: data.english || '' }]);
      }
      speak(data.reply, L.locale);
    } catch (e) {
      console.error(e);
      setPlaceThinking(false);
      if (finish) {
        setPlaceDone(true);
        setPlaceLevel('A2');
      }
    }
  };

  // Lesson actions
  const handleCheckLesson = async () => {
    const L = LANGS[lang];
    const ok = answer.length === L.correct.length && answer.every((id, i) => id === L.correct[i]);
    setLessonResult(ok ? 'correct' : 'wrong');

    if (ok && authStatus === 'authenticated') {
      const term = L.reviewWord || L.bank[L.correct[0]];
      const definition = L.reviewMeaning || 'Lesson term';
      
      await fetch('/api/attempt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          lang,
          term,
          definition,
          activity: 'lesson',
          correct: true,
        }),
      });
    }
  };

  // Pronunciation Lab recording
  const handleTogglePronounceMic = async () => {
    const L = LANGS[lang];
    const refText = L.bank.filter((_: any, i: number) => L.correct.includes(i)).join(' ');

    if (recordingPron) {
      setRecordingPron(false);
      // Stop and assess
      const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
      const recorder = mediaRecorderRef.current;
      if (recorder) {
        recorder.onstop = async () => {
          const formData = new FormData();
          formData.append('file', audioBlob);
          formData.append('refText', refText);
          formData.append('lang', lang);

          try {
            const res = await fetch('/api/pronounce', {
              method: 'POST',
              body: formData,
            });
            const data = await res.json();
            if (data.score !== undefined) {
              setPronScore(Math.round(data.score));
              setPronResult(data);

              // Log to database
              if (authStatus === 'authenticated') {
                await fetch('/api/attempt', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    lang,
                    term: refText,
                    activity: 'pronounce',
                    correct: data.score >= 80,
                    score: data.score,
                  }),
                });
              }
            }
          } catch (e) {
            console.error('Pronunciation API error', e);
          }
        };
        recorder.stop();
        recorder.stream.getTracks().forEach((track) => track.stop());
      }
    } else {
      // Start recording
      const ok = await startRecording();
      if (ok) {
        setRecordingPron(true);
      }
    }
  };

  // Conversation live chat
  const handleToggleConvoMic = async () => {
    if (convo.listening) {
      setConvo((prev) => ({ ...prev, listening: false }));
      const transcript = await stopRecording();
      if (transcript) {
        setConvo((prev) => ({ ...prev, draft: transcript }));
        submitConvo(transcript);
      }
    } else {
      const ok = await startRecording();
      if (ok) {
        setConvo((prev) => ({ ...prev, listening: true }));
      }
    }
  };

  const submitConvo = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const L = LANGS[lang];
    const meta = scenarioMeta(L, scenario);

    const userMsg = { who: 'u', n: trimmed };
    const updatedMsgs = [...convo.msgs, userMsg];

    setConvo((prev) => ({
      ...prev,
      msgs: updatedMsgs,
      draft: '',
      thinking: true,
    }));

    try {
      const res = await fetch('/api/conversation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: updatedMsgs,
          lang: L.name,
          scenario,
          partnerName: meta.partnerName,
          persona: meta.persona,
          level: meta.level,
        }),
      });

      const data = await res.json();
      
      // Update with feedback tip
      const msgs2 = updatedMsgs.map((m, i) =>
        i === updatedMsgs.length - 1 && data.tip ? { ...m, fb: data.tip } : m
      );
      msgs2.push({ who: 'p', n: data.reply, en: data.english || '' });

      setConvo((prev) => ({
        ...prev,
        msgs: msgs2,
        thinking: false,
        live: true,
      }));

      speak(data.reply, L.locale);

      // Log attempt to database
      if (authStatus === 'authenticated') {
        await fetch('/api/attempt', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            lang,
            term: trimmed,
            activity: 'convo',
            correct: true,
            score: data.tip ? 75 : 95, // deduct if a grammatic tip was provided
          }),
        });
      }
    } catch (e) {
      console.error(e);
      setConvo((prev) => ({ ...prev, thinking: false }));
    }
  };

  // Auth Submit
  const handleAuthSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');

    if (authMode === 'signup') {
      const res = await signIn('credentials', {
        email: authEmail,
        password: authPassword,
        name: authName,
        action: 'signup',
        redirect: false,
      });
      if (res?.error) {
        setAuthError(res.error);
      } else {
        setView('home');
      }
    } else {
      const res = await signIn('credentials', {
        email: authEmail,
        password: authPassword,
        action: 'login',
        redirect: false,
      });
      if (res?.error) {
        setAuthError(res.error);
      } else {
        setView('home');
      }
    }
  };

  // Checkout Upgrade
  const handleGoCheckout = async () => {
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ provider: 'stripe' }), // default to Stripe
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (e) {
      console.error('Checkout failed', e);
    }
  };

  // Reset helper
  const handleReset = () => {
    setAnswer([]);
    setLessonResult('');
    setPop(null);
    setConvo({ msgs: [], draft: '', thinking: false, listening: false, live: false });
  };

  const L = LANGS[lang];
  const sMeta = scenarioMeta(L, scenario);

  const rotateGreetings = [
    { t: 'Hola', c: '' },
    { t: 'Bonjour', c: '' },
    { t: 'नमस्ते', c: 'hi' },
    { t: 'こんにちは', c: 'jp' },
    { t: '안녕하세요', c: 'kr' },
  ];

  return (
    <div style={{ background: '#E7E1D5', minHeight: '100vh', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '18px', padding: '36px 20px', boxSizing: 'border-box' }}>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: '#DB5338', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '11px', height: '11px', border: '2.2px solid #FBF6EE', borderRadius: '50%', borderRightColor: 'transparent', transform: 'rotate(-45deg)' }}></div>
        </div>
        <span style={{ fontSize: '17px', fontWeight: 600 }}>Cadence</span>
        <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: '16px', color: '#8A7E73' }}>
          — live prototype · talk to it for real
        </span>
      </div>

      {/* PHONE FRAME */}
      <div style={{ width: '330px', height: '710px', background: '#1c1714', borderRadius: '46px', padding: '12px', boxShadow: '0 36px 70px -24px rgba(40,30,20,.55)', flex: 'none' }}>
        <div style={{ width: '100%', height: '100%', background: view === 'complete' ? '#2F8F83' : (view === 'convo' || view === 'review' ? '#241C2A' : '#FBF6EE'), borderRadius: '34px', overflow: 'hidden', position: 'relative', display: 'flex', flexDirection: 'column' }}>

          {/* STATUS BAR */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 24px 0', fontSize: '12px', fontWeight: 600, flex: 'none', zIndex: 5, color: (view === 'complete' || view === 'convo' || view === 'review') ? '#F3ECE2' : '#2A2320' }}>
            <span>9:41</span><span>●●● ◔</span>
          </div>

          {/* ===== WELCOME SCREEN ===== */}
          {view === 'welcome' && (
            <div className="cd-screen" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 30px' }}>
                <div style={{ fontSize: '13px', letterSpacing: '.04em', color: '#A8927C', marginBottom: '18px', height: '20px', overflow: 'hidden' }}>
                  <span className={rotateGreetings[greetIdx].c} style={{ fontWeight: 600, color: '#5C5048' }}>
                    {rotateGreetings[greetIdx].t}
                  </span>
                </div>
                <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: '54px', lineHeight: 0.96, letterSpacing: '-.015em', marginBottom: '18px' }}>
                  Speak any language<br /><span style={{ color: '#DB5338', fontStyle: 'italic' }}>for real.</span>
                </div>
                <div style={{ fontSize: '15px', lineHeight: 1.5, color: '#5C5048' }}>
                  Real conversation from day one, culture in every lesson, and a path that doesn't stop at “tourist.” Pick a language and we'll shape everything around it.
                </div>
              </div>
              <div style={{ padding: '0 28px 38px' }}>
                <div onClick={() => setPicker(true)} style={{ background: '#DB5338', color: '#FBF6EE', borderRadius: '16px', padding: '16px', textAlign: 'center', fontSize: '16px', fontWeight: 600, boxShadow: '0 8px 20px -6px rgba(219,83,56,.5)', marginBottom: '11px', cursor: 'pointer' }}>
                  Choose your language
                </div>
                <div onClick={() => { setView('auth'); setAuthMode('login'); }} style={{ textAlign: 'center', fontSize: '14px', color: '#8A7E73', cursor: 'pointer' }}>
                  I already have an account {session ? '(Welcome back!)' : ''}
                </div>
              </div>
            </div>
          )}

          {/* ===== GOALS SCREEN ===== */}
          {view === 'goals' && (
            <div className="cd-screen" style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
              <div style={{ padding: '14px 26px 0' }}>
                <div style={{ display: 'flex', gap: '6px', marginBottom: '20px' }}>
                  <div style={{ height: '4px', flex: 1, background: '#DB5338', borderRadius: '99px' }}></div>
                  <div style={{ height: '4px', flex: 1, background: '#EDE4D6', borderRadius: '99px' }}></div>
                  <div style={{ height: '4px', flex: 1, background: '#EDE4D6', borderRadius: '99px' }}></div>
                </div>
                <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: '30px', lineHeight: 1.08, marginBottom: '6px' }}>
                  What's pulling you to {L.name}?
                </div>
                <div style={{ fontSize: '13px', color: '#8A7E73', marginBottom: '16px' }}>Tap any. We'll shape your path around it.</div>
              </div>
              <div className="cd-scroll" style={{ flex: 1, overflowY: 'auto', padding: '0 26px' }}>
                {[
                  { key: 'travel', icon: '✈', label: 'Travel & adventure' },
                  { key: 'family', icon: '❤', label: 'Family & roots' },
                  { key: 'work', icon: '💼', label: 'Work & career' },
                  { key: 'culture', icon: '❖', label: 'Culture, film & music' },
                  { key: 'exam', icon: '✦', label: 'Exam / certification' },
                  { key: 'joy', icon: '◔', label: 'Just for the joy of it' }
                ].map((g) => {
                  const on = goals[g.key];
                  return (
                    <div
                      key={g.key}
                      onClick={() => setGoals(prev => ({ ...prev, [g.key]: !on }))}
                      style={{ display: 'flex', alignItems: 'center', gap: '13px', background: on ? '#FBF1E9' : '#fff', border: on ? '1.5px solid #DB5338' : '1px solid #EDE4D6', borderRadius: '14px', padding: '13px 15px', marginBottom: '9px', cursor: 'pointer' }}
                    >
                      <span style={{ fontSize: '19px', width: '22px', textAlign: 'center' }}>{g.icon}</span>
                      <span style={{ fontSize: '15px', fontWeight: on ? 600 : 500, flex: 1 }}>{g.label}</span>
                      <span style={{ fontSize: '15px', color: on ? '#DB5338' : '#C9AE97' }}>{on ? '✓' : '+'}</span>
                    </div>
                  );
                })}
              </div>
              <div style={{ padding: '14px 26px 26px', flex: 'none' }}>
                <div onClick={startPlacement} style={{ background: '#DB5338', color: '#FBF6EE', borderRadius: '16px', padding: '15px', textAlign: 'center', fontSize: '16px', fontWeight: 600, cursor: 'pointer' }}>
                  Continue
                </div>
                <div onClick={() => setView('home')} style={{ textAlign: 'center', fontSize: '13px', color: '#9A8E84', marginTop: '11px', cursor: 'pointer' }}>
                  Skip — I'm a beginner
                </div>
              </div>
            </div>
          )}

          {/* ===== PLACEMENT SCREEN ===== */}
          {view === 'placement' && (
            <div className="cd-screen" style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
              <div style={{ padding: '12px 22px 12px', borderBottom: '1px solid #EDE4D6', flex: 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontSize: '11.5px', color: '#9A8E84' }}>No quiz — just a quick chat</div>
                    <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: '21px', lineHeight: 1.1 }}>Let's find your level</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '9.5px', letterSpacing: '.08em', color: '#BFA38C', textTransform: 'uppercase' }}>Estimating</div>
                    <div style={{ fontSize: '18px', fontWeight: 700, color: '#2F8F83' }}>{placeLevel}</div>
                  </div>
                </div>
              </div>
              <div className="cd-scroll" style={{ flex: 1, overflowY: 'auto', padding: '16px 18px', display: 'flex', flexDirection: 'column' }}>
                {placeMsgs.map((m, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', marginBottom: '11px', maxWidth: '88%', marginLeft: m.who === 'u' ? 'auto' : '0' }}>
                    {m.who === 'p' && (
                      <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'linear-gradient(140deg,#E1A23A,#DB5338)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '13px', fontWeight: 600 }}>
                        M
                      </div>
                    )}
                    <div 
                      onClick={() => m.who === 'p' && speak(m.n, L.locale)} 
                      style={{ 
                        background: m.who === 'u' ? '#DB5338' : '#fff', 
                        color: m.who === 'u' ? '#FBF6EE' : '#2A2320', 
                        border: m.who === 'u' ? 'none' : '1px solid #EDE4D6', 
                        borderRadius: m.who === 'u' ? '14px 14px 4px 14px' : '14px 14px 14px 4px', 
                        padding: '11px 13px', 
                        cursor: m.who === 'p' ? 'pointer' : 'default' 
                      }}
                    >
                      <div style={{ fontSize: '14px', lineHeight: 1.4 }} className={L.font}>{m.n}</div>
                      {m.who === 'p' && m.en && (
                        <div style={{ fontSize: '11.5px', color: '#9A8E84', marginTop: '5px', borderTop: '1px dashed #EDE4D6', paddingTop: '5px' }}>{m.en}</div>
                      )}
                    </div>
                  </div>
                ))}
                {placeThinking && (
                  <div style={{ display: 'flex', gap: '5px', background: '#fff', border: '1px solid #EDE4D6', borderRadius: '14px', padding: '12px 15px', width: 'max-content' }}>
                    <span className="cd-dot" style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#C9AE97' }}></span>
                    <span className="cd-dot" style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#C9AE97', animationDelay: '.2s' }}></span>
                    <span className="cd-dot" style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#C9AE97', animationDelay: '.4s' }}></span>
                  </div>
                )}
              </div>
              {placeDone && (
                <div style={{ margin: '0 18px 0', background: '#E6F0EE', border: '1px solid #BFE0DA', borderRadius: '14px', padding: '14px 16px', flex: 'none', display: 'flex', alignItems: 'center', gap: '13px' }}>
                  <div style={{ textAlign: 'center', flex: 'none' }}>
                    <div style={{ fontSize: '9.5px', letterSpacing: '.08em', color: '#5C7C76', textTransform: 'uppercase' }}>You're at</div>
                    <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: '30px', lineHeight: 1, color: '#2F8F83' }}>{placeLevel}</div>
                  </div>
                  <div style={{ flex: 1, fontSize: '12.5px', lineHeight: 1.45, color: '#3F6B64' }}>
                    We'll start you right where you are — no boring repeats, no scary jumps.
                  </div>
                </div>
              )}
              <div style={{ padding: '12px 16px 22px', flex: 'none' }}>
                {placeDone ? (
                  <div onClick={() => setView('home')} style={{ background: '#DB5338', color: '#FBF6EE', borderRadius: '14px', padding: '14px', textAlign: 'center', fontSize: '15px', fontWeight: 600, cursor: 'pointer' }}>
                    Start learning →
                  </div>
                ) : (
                  <>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '9px', background: '#fff', border: '1px solid #EDE4D6', borderRadius: '99px', padding: '7px 7px 7px 16px' }}>
                      <input 
                        className="cd-input-l" 
                        style={{ flex: 1, fontSize: '14px', minWidth: 0 }} 
                        value={placeDraft} 
                        onChange={(e) => setPlaceDraft(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && submitPlacement(placeDraft)}
                        placeholder={`Reply in ${L.name} — try your best`} 
                      />
                      <div onClick={() => submitPlacement(placeDraft)} style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#2F8F83', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '17px', cursor: 'pointer', flex: 'none', color: '#fff' }}>↑</div>
                    </div>
                    <div style={{ textAlign: 'center', fontSize: '11px', color: '#A8927C', marginTop: '8px' }}>
                      Answer in any way you can — even a few words helps us place you.
                    </div>
                  </>
                )}
              </div>
            </div>
          )}

          {/* ===== HOME SCREEN ===== */}
          {view === 'home' && (
            <div className="cd-screen cd-scroll" style={{ flex: 1, overflowY: 'auto', paddingBottom: '74px' }}>
              <div style={{ padding: '6px 24px 4px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <div style={{ fontSize: '12px', color: '#9A8E84' }} className={L.font}>{L.greeting}</div>
                  <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: '26px', lineHeight: 1.05 }}>
                    Chapter 3 · <span style={{ fontStyle: 'italic' }} className={L.font}>{L.chapter}</span>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                  <div onClick={() => setPicker(true)} style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#fff', border: '1px solid #EDE4D6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', cursor: 'pointer' }}>{L.flag}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', background: '#fff', border: '1px solid #EDE4D6', borderRadius: '99px', padding: '5px 10px' }}>
                    <span style={{ color: '#2F8F83', fontSize: '13px' }}>◇</span>
                    <span style={{ fontSize: '13px', fontWeight: 600 }}>14</span>
                  </div>
                </div>
              </div>
              <div onClick={() => setView('smartplan')} style={{ margin: '12px 18px 0', background: '#fff', border: '1px solid #EDE4D6', borderRadius: '14px', padding: '12px 15px', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
                <span style={{ fontSize: '18px' }}>✦</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '13.5px', fontWeight: 600 }}>Today's plan — built for you</div>
                  <div style={{ fontSize: '11.5px', color: '#9A8E84' }}>4 steps · ~12 min · adapts to what you know</div>
                </div>
                <span style={{ color: '#C9AE97' }}>›</span>
              </div>
              <div onClick={() => { handleReset(); setView('lesson'); }} style={{ margin: '12px 18px 0', background: 'linear-gradient(140deg,#DB5338,#B23E27)', borderRadius: '20px', padding: '18px', color: '#FBF6EE', cursor: 'pointer' }}>
                <div style={{ fontSize: '10.5px', letterSpacing: '.08em', textTransform: 'uppercase', opacity: .85, marginBottom: '7px' }}>Today's real-world goal</div>
                <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: '23px', lineHeight: 1.1, marginBottom: '14px' }}>“{L.goalLine}”</div>
                <div style={{ height: '6px', background: 'rgba(255,255,255,.25)', borderRadius: '99px', overflow: 'hidden' }}>
                  <div style={{ width: '62%', height: '100%', background: '#FBF6EE', borderRadius: '99px' }}></div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }}>
                  <span style={{ fontSize: '11px', opacity: .85 }}>3 of 5 skills ready</span>
                  <span style={{ fontSize: '12px', fontWeight: 600 }}>Continue →</span>
                </div>
              </div>
              <div style={{ padding: '18px 20px 0' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '13px' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '12px', background: '#2F8F83', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '16px', flexShrink: 0 }}>✓</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '14px', fontWeight: 600 }}>Greetings & warmth</div>
                    <div style={{ fontSize: '11.5px', color: '#9A8E84' }}>Lesson · done</div>
                  </div>
                </div>
                <div onClick={() => { handleReset(); setView('lesson'); }} style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '13px', cursor: 'pointer' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '12px', background: '#fff', border: '2px solid #DB5338', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#DB5338', fontSize: '14px', flexShrink: 0 }}>▶</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '14px', fontWeight: 600 }}>Build it: {L.goalShort}</div>
                    <div style={{ fontSize: '11.5px', color: '#DB5338' }}>Lesson · 4 min</div>
                  </div>
                </div>
                <div onClick={() => { handleReset(); setView('convo'); setScenario('cafe'); setConvo({ msgs: [{ who: 'p', n: L.convo[0].n, en: L.convo[0].en }], draft: '', thinking: false, listening: false, live: false }); speak(L.convo[0].n, L.locale); }} style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '13px', cursor: 'pointer' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '12px', background: '#fff', border: '2px solid #2F8F83', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2F8F83', fontSize: '14px', flexShrink: 0 }}>◇</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '14px', fontWeight: 600 }}>Talk to the {L.partnerRole}</div>
                    <div style={{ fontSize: '11.5px', color: '#2F8F83' }}>Live conversation · free</div>
                  </div>
                </div>
                <div onClick={() => setView('culture')} style={{ display: 'flex', gap: '12px', alignItems: 'center', cursor: 'pointer' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '12px', background: '#F0E7D8', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#A8927C', fontSize: '14px', flexShrink: 0 }}>❖</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '14px', fontWeight: 600 }} className={L.font}>{L.chapter} note</div>
                    <div style={{ fontSize: '11.5px', color: '#9A8E84' }}>{L.cultureTeaser}</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ===== LESSON SCREEN ===== */}
          {view === 'lesson' && (
            <div className="cd-screen" style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 22px 0', flex: 'none' }}>
                <span onClick={() => setView('home')} style={{ fontSize: '18px', color: '#B5A99E', cursor: 'pointer' }}>✕</span>
                <div style={{ flex: 1, height: '7px', background: '#EDE4D6', borderRadius: '99px', overflow: 'hidden' }}>
                  <div style={{ width: '45%', height: '100%', background: '#2F8F83', borderRadius: '99px' }}></div>
                </div>
              </div>
              <div style={{ padding: '22px 24px 0', flex: 'none' }}>
                <div style={{ fontSize: '11px', letterSpacing: '.1em', textTransform: 'uppercase', color: '#BFA38C', marginBottom: '8px' }}>Build the sentence — tap the words</div>
                <div style={{ fontSize: '19px', fontWeight: 600, lineHeight: 1.3, marginBottom: '8px' }}>“{L.lessonPromptEn}”</div>
                <div onClick={() => { setBackTo('lesson'); setView('grammar'); }} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12.5px', color: '#DB5338', border: '1px solid #F2D9CF', background: '#FBF1E9', borderRadius: '99px', padding: '4px 11px', cursor: 'pointer' }}>
                  <span className={L.font}>{L.lessonHint}</span> <span style={{ opacity: .6 }}>tap for grammar</span>
                </div>
              </div>
              <div style={{ margin: '20px 22px 0', minHeight: '88px', borderBottom: '2px dashed #DDD2C0', display: 'flex', flexWrap: 'wrap', gap: '8px', alignContent: 'flex-start', paddingBottom: '14px', flex: 'none' }}>
                {answer.map((id, idx) => (
                  <span 
                    key={idx}
                    onClick={() => { setAnswer(prev => prev.filter((_: any, i: number) => i !== idx)); setLessonResult(''); }} 
                    className={L.font} 
                    style={{ background: '#fff', border: '1px solid #E1D6C4', borderRadius: '11px', padding: '9px 13px', fontSize: '15px', fontWeight: 600, boxShadow: '0 1px 0 #E1D6C4', cursor: 'pointer' }}
                  >
                    {L.bank[id]}
                  </span>
                ))}
                {answer.length === 0 && <span style={{ color: '#C2B6A6', fontSize: '14px', alignSelf: 'center' }}>Tap words below to build your answer…</span>}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', padding: '18px 22px 0', flex: 'none' }}>
                {L.bank.map((word: string, id: number) => {
                  const used = answer.includes(id);
                  return (
                    <span 
                      key={id}
                      onClick={() => !used && setAnswer(prev => [...prev, id])}
                      className={L.font} 
                      style={{ 
                        background: used ? '#F0E7D8' : '#fff', 
                        color: used ? '#C2B6A6' : '#2A2320', 
                        border: '1px solid #E1D6C4', 
                        borderRadius: '11px', 
                        padding: '9px 13px', 
                        fontSize: '15px', 
                        fontWeight: 600, 
                        cursor: used ? 'default' : 'pointer',
                        opacity: used ? 0.55 : 1
                      }}
                    >
                      {word}
                    </span>
                  );
                })}
              </div>
              <div style={{ flex: 1 }}></div>
              {lessonResult === 'correct' && (
                <div style={{ margin: '0 22px 0', background: '#E6F0EE', border: '1px solid #BFE0DA', borderRadius: '13px', padding: '13px 15px', flex: 'none' }}>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#2F8F83', marginBottom: '2px' }} className={L.font}>{L.lessonCorrectTitle}</div>
                  <div style={{ fontSize: '12.5px', color: '#3F6B64' }}>{L.lessonCorrectBody}</div>
                </div>
              )}
              {lessonResult === 'wrong' && (
                <div style={{ margin: '0 22px 0', background: '#FBF1E9', border: '1px solid #F2D9CF', borderRadius: '13px', padding: '13px 15px', flex: 'none' }}>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#B23E27', marginBottom: '2px' }}>Almost — check the order</div>
                  <div style={{ fontSize: '12.5px', color: '#8A5A4A' }}>{L.lessonWrongBody}</div>
                </div>
              )}
              <div style={{ padding: '14px 22px 26px', flex: 'none', display: 'flex', gap: '11px', alignItems: 'center' }}>
                {lessonResult !== 'correct' ? (
                  <div onClick={handleCheckLesson} style={{ flex: 1, background: answer.length ? '#DB5338' : '#D9B7AC', color: '#FBF6EE', borderRadius: '14px', padding: '14px', textAlign: 'center', fontSize: '15px', fontWeight: 600, cursor: 'pointer' }}>
                    Check
                  </div>
                ) : (
                  <div onClick={() => setView('culture')} style={{ flex: 1, background: '#2F8F83', color: '#FBF6EE', borderRadius: '14px', padding: '14px', textAlign: 'center', fontSize: '15px', fontWeight: 600, cursor: 'pointer' }}>
                    Continue →
                  </div>
                )}
                <div onClick={() => setView('pronounce')} style={{ width: '50px', height: '50px', borderRadius: '14px', background: '#2F8F83', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '18px', flex: 'none', cursor: 'pointer' }}>🎙</div>
              </div>
            </div>
          )}

          {/* ===== PRONUNCIATION LAB ===== */}
          {view === 'pronounce' && (
            <div className="cd-screen" style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 22px 0', flex: 'none' }}>
                <span onClick={() => setView('lesson')} style={{ fontSize: '18px', color: '#B5A99E', cursor: 'pointer' }}>✕</span>
                <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: '20px' }}>Pronunciation Lab</div>
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '0 24px', textAlign: 'center' }}>
                
                {/* Score Ring */}
                <div style={{ width: '130px', height: '130px', borderRadius: '50%', border: '6px solid #EDE4D6', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '11px', color: '#9A8E84', textTransform: 'uppercase' }}>Accuracy</div>
                    <div style={{ fontSize: '36px', fontWeight: 700, color: '#DB5338' }}>{pronScore !== null ? `${pronScore}%` : '--'}</div>
                  </div>
                </div>

                <div style={{ fontSize: '12px', color: '#8A7E73', marginBottom: '8px', textTransform: 'uppercase' }}>Target phrase</div>
                <div style={{ fontSize: '22px', fontWeight: 600, marginBottom: '20px', lineHeight: 1.3 }} className={L.font}>
                  {L.bank.filter((_: any, i: number) => L.correct.includes(i)).join(' ')}
                </div>

                {/* Word assessing chips */}
                {pronResult && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center', marginBottom: '20px' }}>
                    {pronResult.words.map((w: any, idx: number) => {
                      const isGood = w.accuracyScore >= 80;
                      return (
                        <span 
                          key={idx}
                          className={L.font}
                          style={{
                            background: isGood ? '#E6F0EE' : '#FBF1E9',
                            color: isGood ? '#2F8F83' : '#C2703A',
                            border: isGood ? '1px solid #BFE0DA' : '1px solid #F2D9CF',
                            borderRadius: '9px',
                            padding: '6px 10px',
                            fontSize: '14px',
                            fontWeight: 600
                          }}
                        >
                          {w.word} ({w.accuracyScore}%)
                        </span>
                      );
                    })}
                  </div>
                )}

                <div onClick={() => speak(L.bank.filter((_: any, i: number) => L.correct.includes(i)).join(' '), L.locale)} style={{ fontSize: '13px', color: '#DB5338', cursor: 'pointer', marginBottom: '24px' }}>
                  🔊 Hear correct native speed
                </div>
              </div>

              <div style={{ padding: '16px 24px 26px', flex: 'none' }}>
                <button 
                  onClick={handleTogglePronounceMic}
                  className={recordingPron ? 'cd-listening' : ''}
                  style={{ 
                    width: '100%', 
                    background: recordingPron ? '#2F8F83' : '#DB5338', 
                    color: '#FBF6EE', 
                    border: 'none', 
                    borderRadius: '16px', 
                    padding: '16px', 
                    fontSize: '16px', 
                    fontWeight: 600, 
                    cursor: 'pointer', 
                    boxShadow: '0 8px 20px -6px rgba(219,83,56,.5)' 
                  }}
                >
                  {recordingPron ? '⏹ Stop recording...' : '🎙 Hold to Record & Assess'}
                </button>
              </div>
            </div>
          )}

          {/* ===== CULTURE NOTE SCREEN ===== */}
          {view === 'culture' && (
            <div className="cd-screen" style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 22px 0', flex: 'none' }}>
                <span onClick={() => setView('home')} style={{ fontSize: '18px', color: '#B5A99E', cursor: 'pointer' }}>✕</span>
                <div style={{ flex: 1, height: '7px', background: '#EDE4D6', borderRadius: '99px', overflow: 'hidden' }}>
                  <div style={{ width: '75%', height: '100%', background: '#2F8F83', borderRadius: '99px' }}></div>
                </div>
              </div>
              <div className="cd-scroll" style={{ flex: 1, overflowY: 'auto', padding: '18px 24px 0' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', background: '#5B3A56', color: '#F3ECE2', borderRadius: '99px', padding: '5px 12px', fontSize: '11px', letterSpacing: '.06em', textTransform: 'uppercase', marginBottom: '14px' }}>❖ Culture note</div>
                <div style={{ height: '130px', borderRadius: '16px', background: 'linear-gradient(150deg,#E1A23A,#DB5338)', marginBottom: '16px', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-end', padding: '12px' }}>
                    <span style={{ color: 'rgba(255,255,255,.92)', fontSize: '12px', fontWeight: 600 }}>{L.cultureCaption}</span>
                  </div>
                </div>
                <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: '26px', lineHeight: 1.12, marginBottom: '10px' }}>{L.cultureTitle}</div>
                <div style={{ fontSize: '14px', lineHeight: 1.55, color: '#5C5048', marginBottom: '14px' }}>{L.cultureBody}</div>
                <div style={{ background: '#fff', border: '1px solid #EDE4D6', borderRadius: '13px', padding: '12px 14px', display: 'flex', gap: '11px', alignItems: 'center' }}>
                  <span style={{ fontSize: '18px' }}>💬</span>
                  <div style={{ fontSize: '13px', lineHeight: 1.4 }} className={L.font}>{L.culturePhrase}</div>
                </div>
              </div>
              <div style={{ padding: '16px 24px 26px', flex: 'none' }}>
                <div onClick={() => setView('complete')} style={{ background: '#DB5338', color: '#FBF6EE', borderRadius: '14px', padding: '14px', textAlign: 'center', fontSize: '15px', fontWeight: 600, cursor: 'pointer' }}>Got it — keep going</div>
              </div>
            </div>
          )}

          {/* ===== COMPLETE SCREEN ===== */}
          {view === 'complete' && (
            <div className="cd-screen" style={{ position: 'absolute', inset: 0, background: '#2F8F83', color: '#F2F7F5', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 24px 0', fontSize: '12px', fontWeight: 600 }}>
                <span>9:41</span><span>●●● ◔</span>
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '0 30px', textAlign: 'center' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(255,255,255,.16)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '36px', marginBottom: '22px' }}>☕</div>
                <div style={{ fontSize: '11px', letterSpacing: '.14em', textTransform: 'uppercase', opacity: .8, marginBottom: '10px' }}>New milestone unlocked</div>
                <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: '35px', lineHeight: 1.05, marginBottom: '14px' }}>{L.milestoneTitle}</div>
                <div style={{ fontSize: '14px', opacity: .85, lineHeight: 1.5 }}>A real thing you can do now. Not a streak number — a skill.</div>
              </div>
              <div style={{ padding: '0 26px', display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <div style={{ flex: 1, background: 'rgba(255,255,255,.13)', borderRadius: '14px', padding: '13px', textAlign: 'center' }}>
                  <div style={{ fontSize: '21px', fontWeight: 700 }}>8</div>
                  <div style={{ fontSize: '11px', opacity: .8 }}>new words</div>
                </div>
                <div style={{ flex: 1, background: 'rgba(255,255,255,.13)', borderRadius: '14px', padding: '13px', textAlign: 'center' }}>
                  <div style={{ fontSize: '21px', fontWeight: 700 }}>92%</div>
                  <div style={{ fontSize: '11px', opacity: .8 }}>pronunciation</div>
                </div>
                <div style={{ flex: 1, background: 'rgba(255,255,255,.13)', borderRadius: '14px', padding: '13px', textAlign: 'center' }}>
                  <div style={{ fontSize: '21px', fontWeight: 700 }}>4m</div>
                  <div style={{ fontSize: '11px', opacity: .8 }}>today</div>
                </div>
              </div>
              <div style={{ padding: '0 26px 30px' }}>
                <div 
                  onClick={() => {
                    handleReset();
                    setView('convo');
                    setScenario('cafe');
                    setConvo({ msgs: [{ who: 'p', n: L.convo[0].n, en: L.convo[0].en }], draft: '', thinking: false, listening: false, live: false });
                    speak(L.convo[0].n, L.locale);
                  }} 
                  style={{ background: '#FBF6EE', color: '#B23E27', borderRadius: '14px', padding: '15px', textAlign: 'center', fontSize: '15px', fontWeight: 600, marginBottom: '10px', cursor: 'pointer' }}
                >
                  Try it for real → talk to the {L.partnerRole}
                </div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'center' }}>
                  <div onClick={() => setView('share')} style={{ flex: 1, border: '1px solid rgba(255,255,255,.45)', borderRadius: '14px', padding: '13px', textAlign: 'center', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}>↗ Share this win</div>
                  <div onClick={() => setView('home')} style={{ fontSize: '13.5px', opacity: .85, cursor: 'pointer', padding: '0 8px' }}>Back home</div>
                </div>
              </div>
            </div>
          )}

          {/* ===== SPEAK HUB SCREEN ===== */}
          {view === 'speakHub' && (
            <div className="cd-screen cd-scroll" style={{ flex: 1, overflowY: 'auto', paddingBottom: '74px' }}>
              <div style={{ padding: '8px 24px 0' }}>
                <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: '27px', lineHeight: 1.05 }}>Who do you want to talk to?</div>
                <div style={{ fontSize: '12.5px', color: '#8A7E73', marginTop: '3px' }}>Real scenarios · speaks at your level · always free</div>
              </div>
              <div style={{ padding: '16px 18px 0' }}>
                <div onClick={() => { handleReset(); setView('convo'); setScenario('cafe'); setConvo({ msgs: [{ who: 'p', n: L.convo[0].n, en: L.convo[0].en }], draft: '', thinking: false, listening: false, live: false }); speak(L.convo[0].n, L.locale); }} style={{ background: 'linear-gradient(140deg,#DB5338,#B23E27)', borderRadius: '18px', padding: '16px', color: '#FBF6EE', marginBottom: '14px', cursor: 'pointer' }}>
                  <div style={{ fontSize: '10.5px', letterSpacing: '.08em', textTransform: 'uppercase', opacity: .85, marginBottom: '6px' }}>Recommended for your goal</div>
                  <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: '21px', lineHeight: 1.1, marginBottom: '4px' }} className={L.font}>{L.scenarioTitle}</div>
                  <div style={{ fontSize: '12.5px', opacity: .9 }}>{L.scenarioSub}</div>
                </div>

                <div style={{ fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: '#BFA38C', margin: '4px 2px 9px' }}>Scenarios</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '11px', marginBottom: '16px' }}>
                  {[
                    { key: 'freetalk', icon: '☺', title: 'Free Talk', sub: 'Relaxed small talk', level: 'A2' },
                    { key: 'doctor', icon: '✚', title: 'Doctor Visit', sub: 'Explain symptoms', level: 'A2' },
                    { key: 'family', icon: '❤', title: 'Meet Parents', sub: 'Dinner chat', level: 'A2' },
                    { key: 'debate', icon: '⚖', title: 'Debate', sub: 'Defend opinions', level: 'B2' },
                    { key: 'airport', icon: '✈', title: 'Airport', sub: 'Agent check-in', level: 'A2' },
                    { key: 'hotel', icon: '🛎', title: 'Hotel', sub: 'Front desk check-in', level: 'A2' },
                    { key: 'market', icon: '🧺', title: 'Market', sub: 'Haggle with vendor', level: 'A2' },
                    { key: 'dinner', icon: '🍽', title: 'Restaurant', sub: 'Order food & pay', level: 'A2' },
                  ].map((sc) => (
                    <div 
                      key={sc.key} 
                      onClick={() => {
                        handleReset();
                        setScenario(sc.key);
                        setView('convo');
                        const meta = scenarioMeta(L, sc.key);
                        setConvo({ msgs: [{ who: 'p', n: L.convo[0].n, en: L.convo[0].en }], draft: '', thinking: false, listening: false, live: false });
                        speak(L.convo[0].n, L.locale);
                      }}
                      style={{ width: 'calc(50% - 6px)', background: '#fff', border: '1px solid #EDE4D6', borderRadius: '15px', padding: '13px', cursor: 'pointer', boxSizing: 'border-box' }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                        <span style={{ fontSize: '22px' }}>{sc.icon}</span>
                        <span style={{ fontSize: '9.5px', fontWeight: 700, letterSpacing: '.06em', color: '#DB5338', border: '1px solid #F2D9CF', borderRadius: '99px', padding: '2px 7px' }}>{sc.level}</span>
                      </div>
                      <div style={{ fontSize: '13.5px', fontWeight: 600, lineHeight: 1.2 }}>{sc.title}</div>
                      <div style={{ fontSize: '11px', color: '#9A8E84' }}>{sc.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ===== CONVERSATION (LIVE AI) ===== */}
          {view === 'convo' && (
            <div className="cd-screen" style={{ position: 'absolute', inset: 0, background: '#241C2A', color: '#F3ECE2', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 24px 6px', fontSize: '12px', fontWeight: 600 }}>
                <span onClick={() => setView('speakHub')} style={{ cursor: 'pointer' }}>‹ Leave</span>
                <span onClick={() => setView('debrief')} style={{ cursor: 'pointer', color: '#E1A23A' }}>End ›</span>
              </div>
              <div style={{ textAlign: 'center', padding: '6px 0 6px', flex: 'none' }}>
                <div style={{ width: '58px', height: '58px', borderRadius: '50%', margin: '0 auto 7px', background: 'linear-gradient(140deg,#E1A23A,#DB5338)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', fontWeight: 600, color: '#fff' }}>
                  {sMeta.partnerInitial}
                </div>
                <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: '18px' }} className={L.font}>
                  {sMeta.partnerName} · {sMeta.partnerRole}
                </div>
                <div style={{ fontSize: '11px', color: '#A99FB0' }}>{sMeta.partnerPlace} · {convo.live ? 'live AI · speaking slowly' : 'speaking slowly'}</div>
              </div>
              <div className="cd-scroll" style={{ flex: 1, overflowY: 'auto', padding: '10px 18px', display: 'flex', flexDirection: 'column' }}>
                {convo.msgs.map((m, idx) => (
                  <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignSelf: m.who === 'u' ? 'flex-end' : 'flex-start', maxWidth: '86%' }}>
                    <div style={{ display: 'flex', gap: '7px', alignItems: 'flex-end', marginBottom: '10px' }}>
                      <div 
                        onClick={() => m.who === 'p' && speak(m.n, L.locale)}
                        style={{ 
                          background: m.who === 'u' ? '#DB5338' : '#352B3D', 
                          color: '#F3ECE2', 
                          borderRadius: m.who === 'u' ? '16px 16px 4px 16px' : '16px 16px 16px 4px', 
                          padding: '12px 14px',
                          cursor: m.who === 'p' ? 'pointer' : 'default'
                        }}
                      >
                        <div style={{ fontSize: '14px', lineHeight: 1.4 }} className={L.font}>{m.n}</div>
                        {m.who === 'p' && m.en && <div style={{ fontSize: '11.5px', color: '#A99FB0', marginTop: '4px' }}>{m.en}</div>}
                      </div>
                      {m.who === 'p' && <span style={{ fontSize: '13px', color: '#7E7488', paddingBottom: '6px' }}>🔊</span>}
                    </div>
                    {m.who === 'u' && m.fb && (
                      <div style={{ display: 'flex', gap: '7px', alignItems: 'center', background: '#2F8F83', borderRadius: '99px', padding: '6px 11px', width: 'max-content', marginBottom: '10px', marginLeft: 'auto' }}>
                        <span style={{ fontSize: '11px' }}>✦</span>
                        <span style={{ fontSize: '11.5px', fontWeight: 600 }}>{m.fb}</span>
                      </div>
                    )}
                  </div>
                ))}
                {convo.thinking && (
                  <div style={{ background: '#352B3D', borderRadius: '16px 16px 16px 4px', padding: '13px 16px', width: 'max-content', marginBottom: '10px', display: 'flex', gap: '5px' }}>
                    <span className="cd-dot" style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#A99FB0' }}></span>
                    <span className="cd-dot" style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#A99FB0', animationDelay: '.2s' }}></span>
                    <span className="cd-dot" style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#A99FB0', animationDelay: '.4s' }}></span>
                  </div>
                )}
              </div>
              <div style={{ padding: '12px 16px 22px', flex: 'none', background: 'linear-gradient(180deg,rgba(36,28,42,0),#241C2A 30%)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '9px', background: '#352B3D', borderRadius: '99px', padding: '7px 7px 7px 16px' }}>
                  <input 
                    className="cd-input" 
                    style={{ flex: 1, fontSize: '14px', minWidth: 0 }} 
                    value={convo.draft} 
                    onChange={(e) => setConvo(prev => ({ ...prev, draft: e.target.value }))}
                    onKeyDown={(e) => e.key === 'Enter' && submitConvo(convo.draft)}
                    placeholder={convo.thinking ? '…' : 'Your reply'} 
                  />
                  <div onClick={handleToggleConvoMic} className={convo.listening ? 'cd-listening' : ''} style={{ width: '40px', height: '40px', borderRadius: '50%', background: convo.listening ? '#2F8F83' : '#4A3E54', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', cursor: 'pointer', flex: 'none' }}>🎙</div>
                  <div onClick={() => submitConvo(convo.draft)} style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#DB5338', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '17px', cursor: 'pointer', flex: 'none', color: '#fff' }}>↑</div>
                </div>
                <div style={{ textAlign: 'center', fontSize: '11px', color: '#7E7488', marginTop: '8px' }}>
                  {convo.listening ? 'Listening… speak now' : 'Type, or tap 🎙 to speak'}
                </div>
              </div>
            </div>
          )}

          {/* ===== DEBRIEF SCREEN ===== */}
          {view === 'debrief' && (
            <div className="cd-screen" style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
              <div style={{ padding: '14px 24px 0', flex: 'none' }}>
                <div style={{ fontSize: '11px', letterSpacing: '.1em', textTransform: 'uppercase', color: '#BFA38C', marginBottom: '6px' }}>Conversation debrief</div>
                <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: '26px', lineHeight: 1.05, marginBottom: '4px' }}>You held a real chat 🎉</div>
                <div style={{ fontSize: '13px', color: '#5C5048' }}>...and <span className={L.font}>{sMeta.partnerName.split(' ')[0]}</span> understood you.</div>
              </div>
              <div className="cd-scroll" style={{ flex: 1, overflowY: 'auto', padding: '16px 20px 0' }}>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '16px' }}>
                  <div style={{ flex: 1, background: '#fff', border: '1px solid #EDE4D6', borderRadius: '13px', padding: '12px', textAlign: 'center' }}>
                    <div style={{ fontSize: '19px', fontWeight: 700, color: '#2F8F83' }}>{convo.msgs.filter(m => m.who === 'u').length || 2}</div>
                    <div style={{ fontSize: '10.5px', color: '#9A8E84' }}>your turns</div>
                  </div>
                  <div style={{ flex: 1, background: '#fff', border: '1px solid #EDE4D6', borderRadius: '13px', padding: '12px', textAlign: 'center' }}>
                    <div style={{ fontSize: '19px', fontWeight: 700, color: '#2F8F83' }}>88%</div>
                    <div style={{ fontSize: '10.5px', color: '#9A8E84' }}>understood</div>
                  </div>
                  <div style={{ flex: 1, background: '#fff', border: '1px solid #EDE4D6', borderRadius: '13px', padding: '12px', textAlign: 'center' }}>
                    <div style={{ fontSize: '19px', fontWeight: 700, color: '#E1A23A' }}>{L.debrief.length}</div>
                    <div style={{ fontSize: '10.5px', color: '#9A8E84' }}>to polish</div>
                  </div>
                </div>
                <div style={{ fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: '#BFA38C', marginBottom: '9px' }}>Worth a second look</div>
                {L.debrief.map((d: any, idx: number) => (
                  <div key={idx} style={{ background: '#fff', border: '1px solid #EDE4D6', borderRadius: '13px', padding: '12px 14px', marginBottom: '9px' }}>
                    <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '3px' }} className={L.font}>{d.title}</div>
                    <div style={{ fontSize: '12px', color: '#6B5F58', lineHeight: 1.4 }}>{d.body}</div>
                  </div>
                ))}
              </div>
              <div style={{ padding: '14px 20px 26px', flex: 'none' }}>
                <div onClick={() => setView('home')} style={{ background: '#DB5338', color: '#FBF6EE', borderRadius: '14px', padding: '14px', textAlign: 'center', fontSize: '15px', fontWeight: 600, cursor: 'pointer' }}>Save words & finish</div>
              </div>
            </div>
          )}

          {/* ===== IMMERSE SCREEN ===== */}
          {view === 'immerse' && (
            <div className="cd-screen cd-scroll" style={{ flex: 1, overflowY: 'auto', paddingBottom: '74px' }}>
              <div style={{ padding: '8px 24px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: '27px' }}>Immerse</div>
                <div style={{ fontSize: '12px', fontWeight: 600, color: '#2F8F83', border: '1px solid #BFE0DA', background: '#E6F0EE', borderRadius: '99px', padding: '4px 11px' }}>Matched to A2</div>
              </div>
              <div style={{ padding: '12px 18px 0' }}>
                {[
                  { icon: '❖', kind: 'Article', dur: '3 min', title: L.article, lvl: 'A2', known: '91%', bg: '#E1A23A' },
                  { icon: '🎧', kind: 'Podcast', dur: '8 min', title: L.podcast, lvl: 'A2', known: '88%', bg: '#241C2A' },
                  { icon: '☕', kind: 'Culture', dur: '2 min', title: L.cultureTitle, lvl: 'A1', known: '97%', bg: '#5B3A56' },
                ].map((it, idx) => (
                  <div key={idx} onClick={() => setView('reader')} style={{ background: '#fff', border: '1px solid #EDE4D6', borderRadius: '16px', padding: '13px 14px', display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '11px', cursor: 'pointer' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: it.bg, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '19px', color: '#fff' }}>{it.icon}</div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '2px' }}>
                        <span style={{ fontSize: '9.5px', letterSpacing: '.05em', textTransform: 'uppercase', color: '#BFA38C' }}>{it.kind} · {it.dur}</span>
                        <span style={{ fontSize: '9px', fontWeight: 700, color: '#2F8F83', border: '1px solid #BFE0DA', borderRadius: '99px', padding: '1px 6px' }}>{it.lvl}</span>
                      </div>
                      <div style={{ fontSize: '14px', fontWeight: 600, lineHeight: 1.25 }} className={L.font}>{it.title}</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginTop: '5px' }}>
                        <div style={{ flex: 1, height: '4px', background: '#EDE4D6', borderRadius: '99px', overflow: 'hidden' }}>
                          <div style={{ width: it.known, height: '100%', background: '#2F8F83' }}></div>
                        </div>
                        <span style={{ fontSize: '10px', color: '#2F8F83', fontWeight: 600 }}>{it.known} known</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ===== READER SCREEN ===== */}
          {view === 'reader' && (
            <div className="cd-screen" style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 20px 12px', borderBottom: '1px solid #EDE4D6', flex: 'none' }}>
                <span onClick={() => setView('immerse')} style={{ fontSize: '18px', color: '#B5A99E', cursor: 'pointer' }}>‹</span>
                <span style={{ fontSize: '12.5px', fontWeight: 600, color: '#8A7E73' }}>Article · 3 min · A2</span>
                <span style={{ fontSize: '15px', color: '#B5A99E' }}>Aa</span>
              </div>
              <div className="cd-scroll" style={{ flex: 1, overflowY: 'auto', padding: '18px 24px 0' }}>
                <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: '25px', lineHeight: 1.12, marginBottom: '14px' }} className={L.font}>{L.article}</div>
                <div style={{ fontSize: '15.5px', lineHeight: 1.85, color: '#33291F' }} className={L.font}>
                  {L.reader.map((seg: any, idx: number) => seg.w ? (
                    <span key={idx} onClick={() => setPop({ term: seg.w, def: seg.d })} style={{ background: '#FBE3D9', borderBottom: '2px solid #DB5338', borderRadius: '3px', padding: '0 2px', cursor: 'pointer' }}>
                      {seg.w}
                    </span>
                  ) : (
                    <span key={idx}>{seg.t}</span>
                  ))}
                </div>
              </div>
              {pop && (
                <div style={{ margin: '0 24px', background: '#2A2320', color: '#F3ECE2', borderRadius: '14px', padding: '13px 15px', flex: 'none' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '5px' }}>
                    <div style={{ fontSize: '16px', fontWeight: 700 }} className={L.font}>{pop.term}</div>
                    <span onClick={() => speak(pop.term, L.locale)} style={{ fontSize: '12px', color: '#E1A23A', cursor: 'pointer' }}>🔊 hear it</span>
                  </div>
                  <div style={{ fontSize: '13px', color: '#C9BFB4', marginBottom: '9px' }}>{pop.def}</div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <div onClick={async () => {
                      if (authStatus === 'authenticated') {
                        await fetch('/api/attempt', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({ lang, term: pop.term, definition: pop.def, activity: 'review', correct: true }),
                        });
                      }
                      setPop(null);
                    }} style={{ flex: 1, background: '#DB5338', borderRadius: '9px', padding: '8px', textAlign: 'center', fontSize: '12.5px', fontWeight: 600, cursor: 'pointer' }}>+ Save word</div>
                    <div onClick={() => setPop(null)} style={{ background: 'rgba(255,255,255,.12)', borderRadius: '9px', padding: '8px 12px', fontSize: '12.5px', cursor: 'pointer' }}>Close</div>
                  </div>
                </div>
              )}
              <div style={{ padding: '14px 22px 24px', flex: 'none', display: 'flex', alignItems: 'center', gap: '11px' }}>
                <div style={{ width: '46px', height: '46px', borderRadius: '50%', background: '#2F8F83', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '16px', flexShrink: 0 }}>▶</div>
                <div style={{ flex: 1 }}>
                  <div style={{ height: '5px', background: '#EDE4D6', borderRadius: '99px', overflow: 'hidden' }}>
                    <div style={{ width: '38%', height: '100%', background: '#2F8F83' }}></div>
                  </div>
                  <div style={{ fontSize: '11px', color: '#9A8E84', marginTop: '5px' }}>Listen along · 0:42 / 1:50</div>
                </div>
              </div>
            </div>
          )}

          {/* ===== SMART PLAN / SPACE REPETITION SCREEN ===== */}
          {view === 'smartplan' && (
            <div className="cd-screen" style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 20px', borderBottom: '1px solid #EDE4D6', flex: 'none' }}>
                <span onClick={() => setView('home')} style={{ fontSize: '18px', color: '#B5A99E', cursor: 'pointer' }}>‹</span>
                <span style={{ fontSize: '14px', fontWeight: 600 }}>Adaptive Smart Plan</span>
                <span style={{ fontSize: '15px', color: 'transparent' }}>Aa</span>
              </div>
              <div className="cd-scroll" style={{ flex: 1, overflowY: 'auto', padding: '18px 24px' }}>
                <div style={{ fontSize: '13px', color: '#8A7E73', marginBottom: '16px' }}>Your tasks for today, dynamically scheduled based on memory strength:</div>
                
                {planItems.map((item, idx) => (
                  <div 
                    key={idx}
                    onClick={() => {
                      if (item.tag === 'REVIEW') {
                        handleReset();
                        setView('deck');
                      } else if (item.tag === 'NEW') {
                        handleReset();
                        setView('lesson');
                      } else if (item.tag === 'SOUND') {
                        handleReset();
                        setView('pronounce');
                      } else if (item.tag === 'SPEAK') {
                        handleReset();
                        setView('speakHub');
                      }
                    }}
                    style={{ 
                      background: '#fff', 
                      border: '1px solid #EDE4D6', 
                      borderRadius: '16px', 
                      padding: '16px', 
                      marginBottom: '12px', 
                      cursor: 'pointer',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                      <span style={{ 
                        fontSize: '10px', 
                        fontWeight: 700, 
                        color: '#fff', 
                        background: item.color, 
                        padding: '3px 8px', 
                        borderRadius: '99px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}>
                        {item.icon} {item.tag}
                      </span>
                    </div>
                    <div style={{ fontSize: '15px', fontWeight: 600, color: '#2A2320', marginBottom: '4px' }}>{item.title}</div>
                    <div style={{ fontSize: '12.5px', color: '#8A7E73', lineHeight: 1.4 }}>{item.why}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ===== YOU / PROFILE SCREEN ===== */}
          {view === 'you' && (
            <div className="cd-screen cd-scroll" style={{ flex: 1, overflowY: 'auto', paddingBottom: '74px' }}>
              <div style={{ padding: '8px 24px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: '27px' }}>Your {L.name}</div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <div onClick={() => setPicker(true)} style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#fff', border: '1px solid #EDE4D6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '15px', cursor: 'pointer' }}>{L.flag}</div>
                  <div onClick={() => setView('settings')} style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#fff', border: '1px solid #EDE4D6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '15px', cursor: 'pointer', color: '#8A7E73' }}>⚙</div>
                </div>
              </div>

              {/* CEFRverified Proof badge */}
              <div onClick={() => setView('score')} style={{ margin: '12px 18px 0', background: '#2A2320', borderRadius: '20px', padding: '18px', color: '#F3ECE2', cursor: 'pointer' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '12px' }}>
                  <div>
                    <div style={{ fontSize: '11px', color: '#A99C90', letterSpacing: '.06em', textTransform: 'uppercase' }}>Now</div>
                    <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: '34px', lineHeight: 1 }}>{placeLevel}<span style={{ fontSize: '16px', color: '#A99C90' }}> → B1</span></div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '11px', color: '#A99C90' }}>verified proof ›</div>
                    <div style={{ fontSize: '18px', fontWeight: 700, color: '#E1A23A' }}>71%</div>
                  </div>
                </div>
                <div style={{ height: '7px', background: 'rgba(255,255,255,.14)', borderRadius: '99px', overflow: 'hidden' }}>
                  <div style={{ width: '71%', height: '100%', background: 'linear-gradient(90deg,#E1A23A,#DB5338)', borderRadius: '99px' }}></div>
                </div>
              </div>

              {/* Journey details climb */}
              <div onClick={() => setView('journey')} style={{ margin: '14px 18px 0', background: 'linear-gradient(140deg,#2F8F83,#256B61)', borderRadius: '18px', padding: '16px', color: '#F2F7F5', cursor: 'pointer' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <div style={{ fontSize: '10.5px', letterSpacing: '.08em', textTransform: 'uppercase', opacity: .85 }}>Your journey · A1 → C2</div>
                  <span style={{ fontSize: '12px', fontWeight: 600 }}>See the climb →</span>
                </div>
                <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                  <div style={{ flex: 1, height: '8px', background: 'rgba(255,255,255,.2)', borderRadius: '99px', overflow: 'hidden' }}>
                    <div style={{ width: '38%', height: '100%', background: '#FBF6EE', borderRadius: '99px' }}></div>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '7px', fontSize: '10px', opacity: .8 }}>
                  <span>A1</span><span style={{ fontWeight: 700 }}>▲ you're at {placeLevel}</span><span>C2</span>
                </div>
              </div>

              <div style={{ padding: '16px 20px 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <div style={{ fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: '#BFA38C' }}>Real-world milestones</div>
                  <span onClick={() => setView('achievements')} style={{ fontSize: '12px', fontWeight: 600, color: '#DB5338', cursor: 'pointer' }}>All badges →</span>
                </div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '10px' }}>
                  <div style={{ width: '30px', height: '30px', borderRadius: '9px', background: '#2F8F83', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', flexShrink: 0 }}>✓</div>
                  <div style={{ fontSize: '13.5px', fontWeight: 600 }}>Order food & coffee</div>
                </div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '10px' }}>
                  <div style={{ width: '30px', height: '30px', borderRadius: '9px', background: '#2F8F83', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', flexShrink: 0 }}>✓</div>
                  <div style={{ fontSize: '13.5px', fontWeight: 600 }}>Small talk with strangers</div>
                </div>
              </div>

              <div style={{ padding: '14px 20px 0', display: 'flex', gap: '10px' }}>
                <div onClick={() => setView('deck')} style={{ flex: 1, background: '#5B3A56', color: '#F3ECE2', borderRadius: '14px', padding: '13px 14px', cursor: 'pointer' }}>
                  <div style={{ fontSize: '20px', marginBottom: '6px' }}>▦</div>
                  <div style={{ fontSize: '13px', fontWeight: 600 }}>My words</div>
                  <div style={{ fontSize: '11px', opacity: 0.7 }}>SRS card deck</div>
                </div>
                <div onClick={handleGoCheckout} style={{ flex: 1, background: userPlan === 'plus' ? '#2F8F83' : '#DB5338', color: '#FBF6EE', borderRadius: '14px', padding: '13px 14px', cursor: 'pointer' }}>
                  <div style={{ fontSize: '20px', marginBottom: '6px' }}>★</div>
                  <div style={{ fontSize: '13px', fontWeight: 600 }}>{userPlan === 'plus' ? 'Plus Active' : 'Get Plus'}</div>
                  <div style={{ fontSize: '11px', opacity: 0.7 }}>{userPlan === 'plus' ? 'All features unlocked' : 'Real voice AI & scoring'}</div>
                </div>
              </div>
            </div>
          )}

          {/* ===== VOCAB SRS DECK SCREEN ===== */}
          {view === 'deck' && (
            <div className="cd-screen" style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 20px', borderBottom: '1px solid #EDE4D6', flex: 'none' }}>
                <span onClick={() => setView('you')} style={{ fontSize: '18px', color: '#B5A99E', cursor: 'pointer' }}>‹</span>
                <span style={{ fontSize: '14px', fontWeight: 600 }}>Vocabulary Deck (FSRS)</span>
                <span style={{ fontSize: '15px', color: 'transparent' }}>Aa</span>
              </div>
              <div className="cd-scroll" style={{ flex: 1, overflowY: 'auto', padding: '18px 24px' }}>
                <div style={{ fontSize: '13px', color: '#8A7E73', marginBottom: '16px' }}>Words you have encountered, scheduled for review:</div>
                {[
                  { w: L.reviewWord, def: L.reviewMeaning, due: 'Due now', dueColor: '#DB5338', strength: '20%' },
                  { w: L.bank[L.correct[0]], def: 'from your café lesson', due: 'Due in 2d', dueColor: '#E1A23A', strength: '55%' },
                  { w: L.bank[L.correct[1]], def: 'from your word bank', due: 'Strong', dueColor: '#2F8F83', strength: '88%' }
                ].map((wd, idx) => (
                  <div key={idx} style={{ background: '#fff', border: '1px solid #EDE4D6', borderRadius: '14px', padding: '14px', marginBottom: '9px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontSize: '16px', fontWeight: 600 }} className={L.font}>{wd.w}</div>
                      <div style={{ fontSize: '12px', color: '#8A7E73' }}>{wd.def}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{ fontSize: '11px', color: wd.dueColor, fontWeight: 600, border: `1px solid ${wd.dueColor}40`, padding: '2px 8px', borderRadius: '99px' }}>{wd.due}</span>
                      <div style={{ fontSize: '10.5px', color: '#9A8E84', marginTop: '4px' }}>Strength: {wd.strength}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ===== JOURNEY CLIMB SCREEN ===== */}
          {view === 'journey' && (
            <div className="cd-screen" style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 20px', borderBottom: '1px solid #EDE4D6', flex: 'none' }}>
                <span onClick={() => setView('you')} style={{ fontSize: '18px', color: '#B5A99E', cursor: 'pointer' }}>‹</span>
                <span style={{ fontSize: '14px', fontWeight: 600 }}>CEFR Fluency Climb</span>
                <span style={{ fontSize: '15px', color: 'transparent' }}>Aa</span>
              </div>
              <div className="cd-scroll" style={{ flex: 1, overflowY: 'auto', padding: '18px 24px' }}>
                {[
                  { level: 'A1', title: 'First words', can: 'Greet, order, ask prices, introduce yourself.', state: 'done' },
                  { level: 'A2', title: 'Everyday life', can: 'Small talk, get around, handle a café or shop alone.', state: 'current' },
                  { level: 'B1', title: 'Holding your own', can: 'Tell stories in the past, explain opinions.', state: 'next' },
                  { level: 'B2', title: 'Real conversations', can: 'Debate, follow films without subtitles.', state: 'locked' },
                  { level: 'C1', title: 'Fluent & nuanced', can: 'Catch humor, read novels, present at work.', state: 'locked' },
                  { level: 'C2', title: 'Like a native', can: 'Effortless in any setting — idioms, slang, the lot.', state: 'locked' }
                ].map((j, idx) => {
                  const isActive = j.state === 'current';
                  const isDone = j.state === 'done';
                  return (
                    <div key={idx} style={{ display: 'flex', gap: '16px', marginBottom: '16px', opacity: j.state === 'locked' ? 0.6 : 1 }}>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ 
                          width: '32px', 
                          height: '32px', 
                          borderRadius: '50%', 
                          background: isDone ? '#2F8F83' : (isActive ? '#DB5338' : '#fff'), 
                          border: isActive ? 'none' : '2px solid #DB5338', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center', 
                          color: isDone || isActive ? '#fff' : '#DB5338', 
                          fontWeight: 600,
                          fontSize: '13px'
                        }}>
                          {j.level}
                        </div>
                        {idx !== 5 && <div style={{ width: '2px', height: '40px', background: isDone ? '#2F8F83' : '#E1D6C4' }}></div>}
                      </div>
                      <div style={{ flex: 1, paddingBottom: '16px' }}>
                        <div style={{ fontSize: '16px', fontWeight: 600, color: isActive ? '#DB5338' : '#2A2320' }}>{j.title}</div>
                        <div style={{ fontSize: '13px', color: '#5C5048', marginTop: '4px', lineHeight: 1.4 }}>{j.can}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ===== SETTINGS SCREEN ===== */}
          {view === 'settings' && (
            <div className="cd-screen" style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 20px', borderBottom: '1px solid #EDE4D6', flex: 'none' }}>
                <span onClick={() => setView('you')} style={{ fontSize: '18px', color: '#B5A99E', cursor: 'pointer' }}>‹</span>
                <span style={{ fontSize: '14px', fontWeight: 600 }}>Settings</span>
                <span style={{ fontSize: '15px', color: 'transparent' }}>Aa</span>
              </div>
              <div className="cd-scroll" style={{ flex: 1, overflowY: 'auto', padding: '18px 24px' }}>
                <div style={{ marginBottom: '24px' }}>
                  <div style={{ fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: '#BFA38C', marginBottom: '12px' }}>Profile</div>
                  {session ? (
                    <div style={{ background: '#fff', border: '1px solid #EDE4D6', borderRadius: '14px', padding: '16px' }}>
                      <div style={{ fontSize: '15px', fontWeight: 600 }}>{session.user?.name}</div>
                      <div style={{ fontSize: '12.5px', color: '#8A7E73' }}>{session.user?.email}</div>
                      <div onClick={() => signOut()} style={{ color: '#DB5338', fontSize: '13px', marginTop: '12px', cursor: 'pointer', fontWeight: 600 }}>Log out</div>
                    </div>
                  ) : (
                    <div onClick={() => setView('auth')} style={{ background: '#DB5338', color: '#FBF6EE', borderRadius: '12px', padding: '12px', textAlign: 'center', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}>
                      Sign In / Register
                    </div>
                  )}
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <div style={{ fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: '#BFA38C', marginBottom: '12px' }}>Daily Target</div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    {[5, 10, 15].map((m) => (
                      <div 
                        key={m} 
                        onClick={() => setDailyGoal(m)} 
                        style={{ 
                          flex: 1, 
                          background: dailyGoal === m ? '#2A2320' : '#F4ECDF', 
                          color: dailyGoal === m ? '#FBF6EE' : '#7C7066', 
                          borderRadius: '12px', 
                          padding: '12px', 
                          textAlign: 'center', 
                          fontSize: '13px', 
                          fontWeight: 600, 
                          cursor: 'pointer' 
                        }}
                      >
                        {m} min
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: '#BFA38C', marginBottom: '12px' }}>Data privacy</div>
                  {[
                    { key: 'improve', label: 'Use progress to improve lessons', caption: 'Stays securely on our Neon database.' },
                    { key: 'aiTrain', label: 'Help improve Cadence\'s AI models', caption: 'Anonymized context, off by default.' }
                  ].map((c) => (
                    <div key={c.key} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                      <div style={{ flex: 1, marginRight: '16px' }}>
                        <div style={{ fontSize: '13.5px', fontWeight: 600 }}>{c.label}</div>
                        <div style={{ fontSize: '11px', color: '#9A8E84', marginTop: '2px' }}>{c.caption}</div>
                      </div>
                      <div 
                        onClick={() => setCharter(prev => ({ ...prev, [c.key]: !charter[c.key] }))}
                        style={{ 
                          width: '40px', 
                          height: '24px', 
                          borderRadius: '99px', 
                          background: charter[c.key] ? '#2F8F83' : '#D8CDBB', 
                          display: 'flex', 
                          alignItems: 'center', 
                          padding: '2px', 
                          cursor: 'pointer',
                          justifyContent: charter[c.key] ? 'flex-end' : 'flex-start'
                        }}
                      >
                        <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#fff' }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ===== AUTHENTICATION SCREEN ===== */}
          {view === 'auth' && (
            <div className="cd-screen" style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
              <div style={{ padding: '14px 22px 0', flex: 'none' }}>
                <span onClick={() => setView('welcome')} style={{ fontSize: '18px', color: '#B5A99E', cursor: 'pointer' }}>✕</span>
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 28px' }}>
                <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: '32px', marginBottom: '8px', fontWeight: 400 }}>
                  {authMode === 'signup' ? 'Create your account' : 'Welcome back'}
                </h1>
                <p style={{ fontSize: '13.5px', color: '#8A7E73', marginBottom: '24px' }}>
                  {authMode === 'signup' ? 'Save your progress across every device.' : 'Pick up right where you left off.'}
                </p>

                <form onSubmit={handleAuthSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {authMode === 'signup' && (
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      value={authName} 
                      onChange={(e) => setAuthName(e.target.value)}
                      required
                      style={{ background: '#fff', border: '1px solid #EDE4D6', borderRadius: '12px', padding: '14px', fontSize: '14px', outline: 'none' }}
                    />
                  )}
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    value={authEmail} 
                    onChange={(e) => setAuthEmail(e.target.value)}
                    required
                    style={{ background: '#fff', border: '1px solid #EDE4D6', borderRadius: '12px', padding: '14px', fontSize: '14px', outline: 'none' }}
                  />
                  <input 
                    type="password" 
                    placeholder="Password" 
                    value={authPassword} 
                    onChange={(e) => setAuthPassword(e.target.value)}
                    required
                    style={{ background: '#fff', border: '1px solid #EDE4D6', borderRadius: '12px', padding: '14px', fontSize: '14px', outline: 'none' }}
                  />

                  {authError && <div style={{ color: '#B23E27', fontSize: '12.5px' }}>{authError}</div>}

                  <button type="submit" style={{ background: '#DB5338', color: '#FBF6EE', border: 'none', borderRadius: '14px', padding: '15px', fontSize: '15px', fontWeight: 600, cursor: 'pointer', boxShadow: '0 8px 20px -6px rgba(219,83,56,.5)', marginTop: '8px' }}>
                    {authMode === 'signup' ? 'Create account' : 'Log in'}
                  </button>
                </form>

                <div onClick={() => setAuthMode(authMode === 'signup' ? 'login' : 'signup')} style={{ textAlign: 'center', fontSize: '13px', color: '#8A7E73', marginTop: '20px', cursor: 'pointer' }}>
                  {authMode === 'signup' ? 'Already learning with us? Log in' : 'New to Cadence? Sign up'}
                </div>
              </div>
            </div>
          )}

          {/* ===== GRAMMAR / REFERENCE SHEET SCREEN ===== */}
          {view === 'grammar' && (
            <div className="cd-screen" style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 20px', borderBottom: '1px solid #EDE4D6', flex: 'none' }}>
                <span onClick={() => setView(backTo)} style={{ fontSize: '18px', color: '#B5A99E', cursor: 'pointer' }}>‹ Back</span>
                <span style={{ fontSize: '14px', fontWeight: 600 }}>Grammar Hub</span>
                <span style={{ fontSize: '15px', color: 'transparent' }}>Aa</span>
              </div>
              <div className="cd-scroll" style={{ flex: 1, overflowY: 'auto', padding: '18px 24px' }}>
                <div style={{ fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: '#BFA38C', marginBottom: '8px' }}>Topic focus</div>
                <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: '26px', marginBottom: '10px', color: '#DB5338' }}>
                  {L.grammarTitle}
                </div>
                <p style={{ fontSize: '14px', lineHeight: 1.5, color: '#5C5048', marginBottom: '20px' }}>
                  {L.grammarIntro}
                </p>

                <div style={{ background: '#fff', border: '1px solid #EDE4D6', borderRadius: '16px', padding: '16px', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontWeight: 700, fontSize: '15px' }} className={L.font}>{L.gTermA}</span>
                    <span style={{ fontSize: '12px', color: '#8A7E73' }}>Category A</span>
                  </div>
                  <div style={{ fontSize: '13px', color: '#5C5048', marginBottom: '8px' }}>{L.gDescA}</div>
                  <div style={{ fontSize: '13.5px', fontFamily: 'monospace', background: '#FBF1E9', padding: '6px 10px', borderRadius: '8px', color: '#8A5A4A' }} className={L.font}>
                    Example: {L.gExA}
                  </div>
                </div>

                <div style={{ background: '#fff', border: '1px solid #EDE4D6', borderRadius: '16px', padding: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontWeight: 700, fontSize: '15px' }} className={L.font}>{L.gTermB}</span>
                    <span style={{ fontSize: '12px', color: '#8A7E73' }}>Category B</span>
                  </div>
                  <div style={{ fontSize: '13px', color: '#5C5048', marginBottom: '8px' }}>{L.gDescB}</div>
                  <div style={{ fontSize: '13.5px', fontFamily: 'monospace', background: '#FBF1E9', padding: '6px 10px', borderRadius: '8px', color: '#8A5A4A' }} className={L.font}>
                    Example: {L.gExB}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ===== PAID CONFIRMATION SCREEN ===== */}
          {view === 'paid' && (
            <div className="cd-screen" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 30px', textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#E6F0EE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '36px', margin: '0 auto 22px' }}>★</div>
              <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: '36px', marginBottom: '12px', fontWeight: 400 }}>
                Welcome to Plus!
              </h1>
              <p style={{ fontSize: '15px', color: '#5C5048', lineHeight: 1.5, marginBottom: '32px' }}>
                Your subscription has been successfully activated. Real voice assessments and pronunciation assessments are now fully enabled.
              </p>
              <div onClick={() => setView('home')} style={{ background: '#2F8F83', color: '#FBF6EE', borderRadius: '14px', padding: '15px', textAlign: 'center', fontSize: '15px', fontWeight: 600, cursor: 'pointer' }}>
                Start Learning
              </div>
            </div>
          )}

          {/* ===== BOTTOM NAVIGATION TABS ===== */}
          {!picker && ['home', 'speakHub', 'immerse', 'you'].includes(view) && (
            <div style={{ height: '62px', borderTop: '1px solid #EDE4D6', background: '#fff', display: 'flex', position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 10, padding: '0 10px' }}>
              <div onClick={() => setView('home')} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: view === 'home' ? '#DB5338' : '#B5A99E' }}>
                <span style={{ fontSize: '20px' }}>▶</span>
                <span style={{ fontSize: '10px', marginTop: '2px', fontWeight: 600 }}>Learn</span>
              </div>
              <div onClick={() => setView('speakHub')} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: view === 'speakHub' ? '#DB5338' : '#B5A99E' }}>
                <span style={{ fontSize: '20px' }}>◇</span>
                <span style={{ fontSize: '10px', marginTop: '2px', fontWeight: 600 }}>Speak</span>
              </div>
              <div onClick={() => setView('immerse')} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: view === 'immerse' ? '#DB5338' : '#B5A99E' }}>
                <span style={{ fontSize: '20px' }}>❖</span>
                <span style={{ fontSize: '10px', marginTop: '2px', fontWeight: 600 }}>Immerse</span>
              </div>
              <div onClick={() => setView('you')} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: view === 'you' ? '#DB5338' : '#B5A99E' }}>
                <span style={{ fontSize: '20px' }}>☺</span>
                <span style={{ fontSize: '10px', marginTop: '2px', fontWeight: 600 }}>You</span>
              </div>
            </div>
          )}

          {/* ===== LANGUAGE SELECTOR OVERLAY ===== */}
          {picker && (
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(42,35,32,0.4)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'flex-end', zIndex: 100 }}>
              <div style={{ background: '#fff', borderTopLeftRadius: '32px', borderTopRightRadius: '32px', width: '100%', maxHeight: '85%', display: 'flex', flexDirection: 'column', padding: '24px 20px 20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: '24px', fontWeight: 400 }}>
                    {pickerNext ? 'Which language?' : 'Switch language'}
                  </h2>
                  <span onClick={() => setPicker(false)} style={{ fontSize: '18px', color: '#B5A99E', cursor: 'pointer', padding: '4px' }}>✕</span>
                </div>
                <p style={{ fontSize: '12px', color: '#8A7E73', marginBottom: '16px', lineHeight: 1.4 }}>
                  {pickerNext ? 'Pick one to start — everything from here on is built around it. Switch any time.' : 'Everything adapts instantly — lessons, conversation, culture and grammar.'}
                </p>
                <div className="cd-scroll" style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {Object.keys(LANGS).map((code) => {
                    const lg = LANGS[code];
                    const sel = code === lang;
                    const tags: { [key: string]: string } = { es: 'Romance · the easiest start', fr: 'Romance · greet first, always', it: 'Romance · coffee, standing up', pt: 'Romance · Brazilian warmth', ro: 'Romance · Latin warmth, Slavic home', de: 'Germanic · three genders', sv: 'Germanic · the art of fika', no: 'Germanic · kos & equality', da: 'Germanic · hygge by candlelight', ru: 'Cyrillic · cases & warmth', uk: 'Cyrillic · Lviv coffee culture', el: 'Greek script · linger for hours', hu: 'Uralic · vowel harmony', fi: 'Uralic · top coffee drinkers', hi: 'Devanagari · 600M+ speakers', bn: 'Bengali script · cha & adda', ar: 'Right-to-left · hospitality', he: 'Hebrew script · direct & warm', tr: 'Vowel harmony · verb-last', th: 'Thai script · politeness particles', vi: 'Tonal · slow & sweet', id: 'Austronesian · warm & simple', tl: 'Austronesian · respectful “po”', sw: 'Bantu · greet, always greet', zh: 'Tonal · measure words', ja: 'Non-Latin script · deep course', ko: 'Hangul · politeness built in' };
                    return (
                      <div 
                        key={code}
                        onClick={() => {
                          setLang(code);
                          setPicker(false);
                          handleReset();
                          if (pickerNext) {
                            setView(pickerNext);
                            setPickerNext(null);
                          } else {
                            setView('home');
                          }
                        }}
                        style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 14px', borderRadius: '12px', border: sel ? '1.5px solid #DB5338' : '1px solid #EDE4D6', background: sel ? '#FBF1E9' : '#fff', cursor: 'pointer' }}
                      >
                        <span style={{ fontSize: '20px' }}>{lg.flag}</span>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: '14px', fontWeight: 600 }}>{lg.name}</div>
                          <div style={{ fontSize: '11px', color: '#9A8E84' }}>{tags[code] || 'Comprehensive course'}</div>
                        </div>
                        {sel && <span style={{ color: '#DB5338', fontSize: '14px' }}>●</span>}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
