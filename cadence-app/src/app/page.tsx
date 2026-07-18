'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useSession, signIn, signOut, getProviders } from 'next-auth/react';
import { LANGS } from '@/lib/languages';
import immerseDataRaw from '@/lib/immerse.json';
import { scenarioMeta } from '@/lib/scenarios';
import { useRouter } from 'next/navigation';

const immerseData: Record<string, any[]> = immerseDataRaw;
import { WavRecorder } from '@/lib/WavRecorder';
import { AudioVisualizer } from '@/components/AudioVisualizer';

export default function App() {
  const { data: session, status: authStatus } = useSession();
  const router = useRouter();
  const userPlan = (session?.user as any)?.plan || 'free';

  // Core navigation state.
  // Every screen change also pushes a history entry, so the Android hardware/
  // gesture back button (and desktop browser back) steps through in-app
  // screens instead of just exiting — without this, wrapping the app for the
  // Play Store means the back button quits the app from any screen, which
  // reads as a crash to users on the very first back-press.
  const [view, setViewRaw] = useState('welcome');
  const setView = useCallback((v: string) => {
    setViewRaw(v);
    if (typeof window !== 'undefined') {
      window.history.pushState({ cadenceView: v }, '', '');
    }
  }, []);

  useEffect(() => {
    // Tag the entry that was already here on load with the starting screen —
    // otherwise the very first setView() push has nothing valid to go back
    // to, and the back button does nothing on the first press instead of
    // returning to the welcome screen.
    window.history.replaceState({ cadenceView: 'welcome' }, '', '');

    const onPopState = (e: PopStateEvent) => {
      if (e.state?.cadenceView) {
        setViewRaw(e.state.cadenceView);
      }
      // If there's no recorded view (back past our own history), leave the
      // current screen as-is rather than guessing — the next back-press will
      // exit the app/WebView normally, which is the correct behavior there.
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);
  const [lang, setLang] = useState('es');
  const [earnedMilestones, setEarnedMilestones] = useState<string[]>([]);
  const [scenario, setScenario] = useState('cafe');
  const [picker, setPicker] = useState(false);
  const [pickerNext, setPickerNext] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3500);
  };

  // Google sign-in only works if GOOGLE_CLIENT_ID/SECRET are configured server-side —
  // check via NextAuth's own providers list instead of hardcoding that assumption here.
  const [googleEnabled, setGoogleEnabled] = useState(false);
  useEffect(() => {
    getProviders()
      .then((providers) => setGoogleEnabled(!!providers?.google))
      .catch(() => setGoogleEnabled(false));
  }, []);

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
  const [placeLevel, setPlaceLevel] = useState('A1');
  const [placeDraft, setPlaceDraft] = useState('');
  const [placeThinking, setPlaceThinking] = useState(false);

  // Lesson state
  const [answer, setAnswer] = useState<number[]>([]);
  const [lessonResult, setLessonResult] = useState<string>(''); // 'correct', 'wrong', or ''
  const [showHints, setShowHints] = useState<boolean>(false);
  const [activeChapter, setActiveChapter] = useState<number | null>(null);
  const [playingChapter, setPlayingChapter] = useState<number>(0);
  const [lockedToast, setLockedToast] = useState<string>('');

  // Pronunciation Lab state
  const [pronResult, setPronResult] = useState<any>(null);
  const [recordingPron, setRecordingPron] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [pronAnalyser, setPronAnalyser] = useState<AnalyserNode | null>(null);
  const [pronScore, setPronScore] = useState<number | null>(null);

  // Smart Plan state
  const [planItems, setPlanItems] = useState<any[]>([]);

  // Live Conversation state
  const [convo, setConvo] = useState({
    msgs: [] as any[],
    draft: '',
    thinking: false,
    listening: false,
    live: false
  });
  const [convoAnalyser, setConvoAnalyser] = useState<AnalyserNode | null>(null);
  const [isAiSpeaking, setIsAiSpeaking] = useState(false);

  // Reader state
  const [activeImmerseItem, setActiveImmerseItem] = useState<any>(null);
  const [pop, setPop] = useState<{ term: string; def: string } | null>(null);

  // Settings / Profile states
  const [dailyGoal, setDailyGoal] = useState(10);
  const [notif, setNotif] = useState<{ [key: string]: boolean }>({
    daily: true,
    friends: true,
    feedback: true,
    corrections: false,
    content: true,
  });
  const [charter, setCharter] = useState<{ [key: string]: boolean }>({
    usage: true,
    ai: false,
    voice: false,
  });
  const [level, setLevel] = useState('A1');
  const [backTo, setBackTo] = useState('you');
  
  // Vocabulary tracking state
  const [knownWords, setKnownWords] = useState<Set<string>>(new Set());

  // Auth states
  const [authMode, setAuthMode] = useState<'signup' | 'login'>('signup');
  const [authEmail, setAuthEmail] = useState('');
  const [authPassword, setAuthPassword] = useState('');
  const [authName, setAuthName] = useState('');
  const [authError, setAuthError] = useState('');

  // Audio shadowing states
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [payMethod, setPayMethod] = useState<'card' | 'upi'>('card');
  // MediaRecorder for STT
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const wavRecorderRef = useRef<WavRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  // PWA Install Prompt state
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [isIosStandalone, setIsIosStandalone] = useState(true);

  useEffect(() => {
    const hasDismissed = localStorage.getItem('cadence_install_dismissed');
    
    // Check iOS standalone status
    const isIos = /iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase());
    const isStandalone = ('standalone' in window.navigator) && (window.navigator as any).standalone;
    
    if (isIos && !isStandalone) {
      setIsIosStandalone(false);
      if (!hasDismissed) setShowInstallPrompt(true);
    }

    const handleBeforeInstallPrompt = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      if (!hasDismissed) {
        setShowInstallPrompt(true);
      }
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const calculateKnownPercentage = (text: string) => {
    if (!text) return '0%';
    const words = text.toLowerCase().match(/\b[\wáéíóúüñàâçèéêëîïôùûü]+\b/g) || [];
    if (words.length === 0) return '0%';
    const knownCount = words.filter(w => knownWords.has(w)).length;
    return Math.round((knownCount / words.length) * 100) + '%';
  };

  const markAsKnown = (term: string) => {
    setKnownWords(prev => {
      const next = new Set(prev);
      next.add(term.toLowerCase());
      return next;
    });
    setPop(null);
  };

  // Greet timer
  useEffect(() => {
    const timer = setInterval(() => {
      setGreetIdx((s) => (s + 1) % 5);
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  // Persist state across refreshes
  useEffect(() => {
    // A checkout redirect (real Stripe, or the mock sandbox) lands here via
    // /paid or /plans, which forward to /?view=... — honor that over whatever
    // was previously saved in localStorage, then scrub it from the URL.
    const params = new URLSearchParams(window.location.search);
    const redirectView = params.get('view');
    if (redirectView === 'paid' || redirectView === 'plans') {
      setView(redirectView);
      // Keep the cadenceView tag on this entry (just clean the URL) — an
      // empty state object here would erase the back-button target we just
      // pushed via setView above.
      window.history.replaceState({ cadenceView: redirectView }, '', window.location.pathname);
    } else {
      const savedView = localStorage.getItem('cadence_view');
      if (savedView && savedView !== 'auth' && savedView !== 'welcome') setView('home');
    }

    const savedLang = localStorage.getItem('cadence_lang');
    const savedKnownWords = localStorage.getItem('cadence_known_words');
    if (savedLang) setLang(savedLang);
    if (savedKnownWords) {
      try {
        setKnownWords(new Set(JSON.parse(savedKnownWords)));
      } catch (e) {}
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cadence_view', view);
    localStorage.setItem('cadence_lang', lang);
  }, [view, lang]);

  useEffect(() => {
    localStorage.setItem('cadence_known_words', JSON.stringify(Array.from(knownWords)));
  }, [knownWords]);

  // Fetch smart plan when language changes or home loads
  useEffect(() => {
    if (authStatus === 'authenticated' && (view === 'home' || view === 'smartplan')) {
      fetchPlan();
    }
  }, [lang, view, authStatus]);

  // Auto-redirect authenticated users & bounce unauthenticated
  useEffect(() => {
    if (authStatus === 'authenticated' && (view === 'welcome' || view === 'auth')) {
      setView('home');
    } else if (authStatus === 'unauthenticated' && view !== 'welcome' && view !== 'auth') {
      setView('welcome');
    }
  }, [authStatus, view]);

  // Premium Gating Interception
  useEffect(() => {
    const premiumViews = ['convo', 'pronounce', 'immerse', 'reader'];
    const isPro = (session?.user as any)?.plan === 'plus';
    if (premiumViews.includes(view) && !isPro) {
      setView('plans'); // Redirect free users to the upsell screen
    }
  }, [view, session]);

  // Fetch milestones when visiting gamification screens
  useEffect(() => {
    if (authStatus === 'authenticated' && (view === 'you' || view === 'achievements')) {
      fetchMilestones();
    }
  }, [authStatus, view, lang]);

  const fetchMilestones = async () => {
    try {
      const res = await fetch('/api/milestones', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lang }),
      });
      if (!res.ok) throw new Error(`API Error: ${res.status}`);
      const data = await res.json();
      setEarnedMilestones(data.milestones.map((m: any) => m.key));
    } catch (e) {
      console.error('Milestones fetch error:', e);
      showToast('Failed to load progress. Please check your connection.');
    }
  };

  const fetchPlan = async () => {
    try {
      const res = await fetch('/api/plan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lang }),
      });
      if (!res.ok) throw new Error(`API Error: ${res.status}`);
      const data = await res.json();
      if (data.plan) {
        setPlanItems(data.plan);
      }
    } catch (e) {
      console.error('Failed to load plan', e);
      showToast('Failed to load personalized plan.');
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
      audio.onplay = () => setIsAiSpeaking(true);
      audio.onended = () => setIsAiSpeaking(false);
      audio.play();
    } catch (e) {
      console.error('TTS error:', e);
      showToast('Audio generation failed. Falling back to device speech.');
      // Fallback to local browser SpeechSynthesis
      try {
        if (!window.speechSynthesis) return;
        const u = new SpeechSynthesisUtterance(text);
        u.lang = locale;
        u.rate = 0.9;
        u.onstart = () => setIsAiSpeaking(true);
        u.onend = () => setIsAiSpeaking(false);
        speechSynthesis.speak(u);
      } catch (fallbackErr) {
        console.error('Local TTS also failed:', fallbackErr);
      }
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
        const _L = LANGS[lang] || LANGS.es;
        formData.append('lang', _L.locale);

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
  const handleLogout = () => {
    setView('welcome');
  };
  const startPlacement = () => {
    const _L = LANGS[lang] || LANGS.es;
    const L = { ..._L, ...(_L.chapters?.[playingChapter || 0] || {}) };
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

    const _L = LANGS[lang] || LANGS.es;
    const L = { ..._L, ...(_L.chapters?.[playingChapter || 0] || {}) };
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
          langCode: lang,
          finish,
        }),
      });
      const data = await res.json();

      setPlaceThinking(false);
      
      if (finish) {
        setPlaceMsgs([...updatedMsgs, { who: 'p', n: data.reply, en: data.english || '' }]);
        setPlaceDone(true);
        setPlaceLevel(data.level || 'A1');
      } else {
        setPlaceMsgs([...updatedMsgs, { who: 'p', n: data.reply, en: data.english || '' }]);
      }
      speak(data.reply, L.locale);
    } catch (e) {
      console.error(e);
      setPlaceThinking(false);
      if (finish) {
        setPlaceDone(true);
        setPlaceLevel('A1');
      }
    }
  };

  // Lesson actions
  const handleCheckLesson = async () => {
    const _L = LANGS[lang] || LANGS.es;
    const L = { ..._L, ...(_L.chapters?.[playingChapter || 0] || {}) };
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
  const handleStartPronounceMic = async () => {
    if (recordingPron) return;
    try {
      const recorder = new WavRecorder();
      wavRecorderRef.current = recorder;
      await recorder.start();
      setPronAnalyser(recorder.analyser);
      setRecordingPron(true);
    } catch (e) {
      console.error('Failed to start WavRecorder', e);
    }
  };

  const handleStopPronounceMic = async () => {
    if (!recordingPron || !wavRecorderRef.current) return;
    setRecordingPron(false);
    
    const _L = LANGS[lang] || LANGS.es;
    const L = { ..._L, ...(_L.chapters?.[playingChapter || 0] || {}) };
    const refText = L.correct ? L.correct.map((i: number) => L.bank[i]).join(' ') : 'Hello';

    try {
      const audioBlob = await wavRecorderRef.current.stop();
      wavRecorderRef.current = null;
      setPronAnalyser(null);

      const formData = new FormData();
      formData.append('file', audioBlob);
      formData.append('refText', refText);
      formData.append('lang', lang);

      const res = await fetch('/api/pronounce', {
        method: 'POST',
        body: formData,
      });
      if (!res.ok) {
        showToast('API Error: Failed to analyze pronunciation.');
        setPronScore(0);
        return;
      }
      const data = await res.json();
      if (data.score !== undefined) {
        setPronScore(Math.round(data.score));
        setPronResult(data);
      } else {
        setPronScore(0);
        console.error("Pronunciation API Error:", data.error);
        showToast(data.error || "Failed to analyze pronunciation.");
      }

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
    } catch (e) {
      console.error('Pronunciation API error', e);
      showToast('Network error while assessing pronunciation.');
    }
  };

  // Conversation live chat
  const handleStartConvoMic = async () => {
    if (convo.listening) return;
    try {
      const recorder = new WavRecorder();
      wavRecorderRef.current = recorder;
      await recorder.start();
      setConvoAnalyser(recorder.analyser);
      setConvo((prev) => ({ ...prev, listening: true }));
    } catch (e) {
      console.error('Failed to start WavRecorder for Convo', e);
    }
  };

  const handleStopConvoMic = async () => {
    if (!convo.listening || !wavRecorderRef.current) return;
    setConvo((prev) => ({ ...prev, listening: false }));

    try {
      const audioBlob = await wavRecorderRef.current.stop();
      wavRecorderRef.current = null;
      setConvoAnalyser(null);

      // Call /api/stt
      const formData = new FormData();
      formData.append('file', audioBlob);
      const _L = LANGS[lang] || LANGS.es;
      formData.append('lang', _L.locale);

      const res = await fetch('/api/stt', {
        method: 'POST',
        body: formData,
      });
      if (!res.ok) {
        showToast('API Error: Failed to convert speech to text.');
        setConvo((prev) => ({ ...prev, listening: false }));
        return;
      }
      const data = await res.json();

      if (data.error) {
        showToast(data.error || "Failed to convert speech to text. Please try again.");
        setConvo((prev) => ({ ...prev, listening: false }));
        return;
      }

      const transcript = data.transcript || '';
      
      if (transcript) {
        setConvo((prev) => ({ ...prev, draft: transcript }));
        submitConvo(transcript);
      }
    } catch (e) {
      console.error('Convo STT API error', e);
    }
  };

  const startScenario = async (scKey: string, customFirstMsg?: any) => {
    handleReset();
    setScenario(scKey);
    setView('convo');
    
    const _L = LANGS[lang] || LANGS.es;
    const L = { ..._L, ...(_L.chapters?.[playingChapter || 0] || {}) };
    const meta = scenarioMeta(L, scKey);

    if (customFirstMsg) {
      setConvo({ msgs: [customFirstMsg], draft: '', thinking: false, listening: false, live: false });
      speak(customFirstMsg.n, L.locale);
      return;
    }

    setConvo({ msgs: [], draft: '', thinking: true, listening: false, live: false });

    try {
      const res = await fetch('/api/conversation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [],
          lang: L.name,
          scenario: scKey,
          partnerName: meta.partnerName,
          persona: meta.persona,
          level: meta.level,
        }),
      });

      const data = await res.json();
      if (!res.ok || data.error) {
        showToast("Error starting conversation.");
        setConvo((prev) => ({ ...prev, thinking: false, msgs: [{ who: 'p', n: "Error starting conversation.", en: "Error" }] }));
        return;
      }
      
      setConvo((prev) => ({
        ...prev,
        thinking: false,
        msgs: [{ who: 'p', n: data.reply, en: data.english || '' }]
      }));
      speak(data.reply, L.locale);
    } catch (e) {
      showToast("Error connecting to conversation AI.");
      setConvo((prev) => ({ ...prev, thinking: false, msgs: [{ who: 'p', n: "Error starting conversation.", en: "Error" }] }));
    }
  };

  const submitConvo = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const _L = LANGS[lang] || LANGS.es;
    const L = { ..._L, ...(_L.chapters?.[playingChapter || 0] || {}) };
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

      if (!res.ok) {
        showToast("API Error: Failed to connect to the conversation AI.");
        setConvo((prev) => ({ ...prev, thinking: false }));
        return;
      }
      
      const data = await res.json();
      
      if (data.error) {
        showToast(data.error || "Failed to connect to the conversation AI. Please try again.");
        setConvo((prev) => ({ ...prev, thinking: false }));
        return;
      }
      
      // Update with feedback tip
      const msgs2 = updatedMsgs.map((m, i) =>
        i === updatedMsgs.length - 1 && data.tip ? { ...m, fb: data.tip } : m
      );
      if (data.reply) {
        msgs2.push({ who: 'p', n: data.reply, en: data.english || '' });
      }

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
      console.error('Conversation submission error:', e);
      showToast("Network error. Could not send message.");
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
        // New account — send them through goal-setting + the placement chat
        // instead of dropping them straight on home with zero onboarding.
        setView('goals');
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
      if (!res.ok) throw new Error('Checkout API failed');
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (e) {
      console.error('Checkout failed', e);
      showToast('Failed to start checkout process.');
    }
  };

  // Invite a friend — real Web Share API where available, clipboard-copy fallback otherwise
  const handleInvite = async () => {
    const shareData = {
      title: 'Cadence',
      text: `I'm learning ${L.name} on Cadence — come practice with me.`,
      url: typeof window !== 'undefined' ? window.location.origin : 'https://cadence.buildc3.tech',
    };
    try {
      if (typeof navigator !== 'undefined' && navigator.share) {
        await navigator.share(shareData);
      } else if (typeof navigator !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`);
        showToast('Invite link copied to clipboard.');
      }
    } catch (e) {
      // User cancelled the native share sheet — not an error
    }
  };

  // Data charter: export a copy of everything stored for this account
  const handleExportData = async () => {
    try {
      const res = await fetch('/api/account');
      if (!res.ok) throw new Error('Export failed');
      const data = await res.json();
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'cadence-data-export.json';
      a.click();
      URL.revokeObjectURL(url);
    } catch (e) {
      console.error('Data export failed', e);
      showToast('Failed to export your data. Please try again.');
    }
  };

  // Data charter: permanently delete the account and all associated data
  const handleDeleteAccount = async () => {
    if (!window.confirm('Delete your account and all associated data? This cannot be undone.')) return;
    try {
      const res = await fetch('/api/account', { method: 'DELETE' });
      if (!res.ok) throw new Error('Delete failed');
      localStorage.removeItem('cadence_view');
      localStorage.removeItem('cadence_lang');
      localStorage.removeItem('cadence_known_words');
      await signOut({ redirect: false });
      setView('welcome');
    } catch (e) {
      console.error('Account deletion failed', e);
      showToast('Failed to delete your account. Please try again.');
    }
  };

  // Reset helper
  const handleReset = () => {
    setAnswer([]);
    setLessonResult('');
    setPop(null);
    setShowHints(false);
    setConvo({ msgs: [], draft: '', thinking: false, listening: false, live: false });
  };

  const completeMilestone = async (milestoneKey: string) => {
    // Show the culture note + celebration screen on the way back — these were
    // fully built (culture facts, milestone stats, share flow) but nothing
    // was routing into them, so every chapter finish silently dumped straight
    // back to home with no payoff.
    try {
      await fetch('/api/milestone', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lang, milestone: milestoneKey }),
      });
      await fetchMilestones();
    } catch (e) {
      console.error('Failed to save milestone', e);
    }
    handleReset();
    setView('culture');
  };

  const _L = LANGS[lang] || LANGS.es;
  const L = { ..._L, ...(_L.chapters?.[playingChapter || 0] || {}) };
  const sMeta = scenarioMeta(L, scenario);

  const rotateGreetings = [
    { t: 'Hola', c: '' },
    { t: 'Bonjour', c: '' },
    { t: 'नमस्ते', c: 'hi' },
    { t: 'こんにちは', c: 'jp' },
    { t: '안녕하세요', c: 'kr' },
  ];

  const dynamicBadges = (L.chapters || []).map((ch: any, i: number) => ({
    key: `ch${i}_regular`,
    icon: ch.icon || "✨",
    title: ch.chapterTitle ? ch.chapterTitle.split('·')[1]?.trim() || ch.chapterTitle : `Chapter ${i + 1}`,
    sub: "Chapter complete",
    iconBg: i === 0 ? "#DB5338" : i % 2 === 0 ? "#2F8F83" : "#E1A23A",
    iconStyle: "color:#fff;"
  }));

  const baseBadges = [
    ...dynamicBadges,
    { key: "12_day_rhythm", icon: "🌱", title: "12-day rhythm", sub: "Kept it up", iconBg: "#2A2320", iconStyle: "color:#46C46E;" },
    { key: "100_words", icon: "✦", title: "100 words", sub: "Vocabulary", iconBg: "#F0E7D8", iconStyle: "color:#E1A23A;" },
    { key: "eavesdropper", icon: "🎧", title: "Eavesdropper", sub: "Understood audio", iconBg: "#5B3A56", iconStyle: "color:#FBF6EE;" },
    { key: "past_tense", icon: "🕐", title: "Past tense", sub: "Tell a story", iconBg: "#F0E7D8", iconStyle: "opacity:0.6;filter:grayscale(1);" },
    { key: "first_debate", icon: "⚖", title: "First debate", sub: "B2 skill", iconBg: "#EBE3D5", iconStyle: "opacity:0.3;filter:grayscale(1);" },
    { key: "no_subtitles", icon: "🎬", title: "No subtitles", sub: "Watch a film", iconBg: "#EBE3D5", iconStyle: "opacity:0.3;filter:grayscale(1);" },
    { key: "reached_b1", icon: "🏔", title: "Reached B1", sub: "Level up", iconBg: "#F0E7D8", iconStyle: "opacity:0.6;filter:grayscale(1);" }
  ];

  const badges = baseBadges.map((b, idx) => {
    const isEarned = earnedMilestones.includes(b.key);
    const isNext = idx === earnedMilestones.length;
    if (isEarned) {
      return { ...b, state: "earned", bg: "#FBF6EE", border: "1px solid #EDE4D6", titleColor: "#2A2320" };
    } else if (isNext) {
      return { ...b, state: "progress", bg: "#fff", border: "1px dashed #D8CDBB", iconBg: "#F0E7D8", iconStyle: "opacity:0.6;filter:grayscale(1);", titleColor: "#8A7E73" };
    } else {
      return { ...b, state: "locked", bg: "transparent", border: "none", iconBg: "#EBE3D5", iconStyle: "opacity:0.3;filter:grayscale(1);", titleColor: "#B5A99E" };
    }
  });

  // Score data
  const scoreSkills = [
    { label: "Vocabulary", val: "A1", pct: "15%" },
    { label: "Grammar", val: "A1", pct: "10%" },
    { label: "Pronunciation", val: "A1+", pct: "20%" },
    { label: "Fluency", val: "B1", pct: "80%" }
  ];
  // Share data — real per-platform share links, no dead buttons
  const shareMessage = `I just reached ${level} in ${L.name} on Cadence!`;
  const shareUrl = typeof window !== 'undefined' ? window.location.origin : 'https://cadence.buildc3.tech';
  const shareTargets = [
    { bg: "#25D366", icon: "💬", label: "WhatsApp", href: `https://wa.me/?text=${encodeURIComponent(`${shareMessage} ${shareUrl}`)}` },
    { bg: "#000000", icon: "𝕏", label: "X (Twitter)", href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareMessage)}&url=${encodeURIComponent(shareUrl)}` },
    { bg: "#E1306C", icon: "📷", label: "Instagram", href: null }, // no web share-intent for Instagram; falls back to clipboard copy
    { bg: "#0077B5", icon: "in", label: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}` },
    { bg: "#0A7CFF", icon: "✉", label: "Messages", href: `sms:?body=${encodeURIComponent(`${shareMessage} ${shareUrl}`)}` }
  ];

  // Social data — no friends system yet, so this only ever shows the
  // signed-in user themselves. No fabricated names/activity/rankings.
  const circle = [
    { bg: "#2A2320", bd: "1px solid #433833", avatar: "#DB5338", initial: (session?.user?.name || "Y")[0].toUpperCase(), name: `${session?.user?.name || "You"} (You)` },
  ];

  // Notifications data
  const notifList = [
    { label: "Daily study reminder", caption: "A gentle nudge at your preferred time", track: notif.daily ? "#46C46E" : "#E1D6C4", justify: notif.daily ? "flex-end" : "flex-start", toggle: () => setNotif({ ...notif, daily: !notif.daily }) },
    { label: "Friend updates", caption: "When someone in your circle levels up", track: notif.friends ? "#46C46E" : "#E1D6C4", justify: notif.friends ? "flex-end" : "flex-start", toggle: () => setNotif({ ...notif, friends: !notif.friends }) },
    { label: "AI feedback ready", caption: "When an assessment completes in background", track: notif.feedback ? "#46C46E" : "#E1D6C4", justify: notif.feedback ? "flex-end" : "flex-start", toggle: () => setNotif({ ...notif, feedback: !notif.feedback }) },
    { label: "Native corrections", caption: "When a human tutor reviews your audio", track: notif.corrections ? "#46C46E" : "#E1D6C4", justify: notif.corrections ? "flex-end" : "flex-start", toggle: () => setNotif({ ...notif, corrections: !notif.corrections }) },
    { label: "New content", caption: "New podcast episodes or stories added", track: notif.content ? "#46C46E" : "#E1D6C4", justify: notif.content ? "flex-end" : "flex-start", toggle: () => setNotif({ ...notif, content: !notif.content }) }
  ];

  // Charter data
  const charterToggles = [
    { label: "Share usage data", caption: "Help us improve Cadence anonymously", track: charter.usage ? "#2F8F83" : "#E1D6C4", justify: charter.usage ? "flex-end" : "flex-start", toggle: () => setCharter({ ...charter, usage: !charter.usage }) },
    { label: "Personalize AI with my history", caption: "Let the AI reference past chats", track: charter.ai ? "#2F8F83" : "#E1D6C4", justify: charter.ai ? "flex-end" : "flex-start", toggle: () => setCharter({ ...charter, ai: !charter.ai }) },
    { label: "Opt-in to voice model training", caption: "Use my clips to improve speech recognition", track: charter.voice ? "#2F8F83" : "#E1D6C4", justify: charter.voice ? "flex-end" : "flex-start", toggle: () => setCharter({ ...charter, voice: !charter.voice }) }
  ];

  // LevelDetail data
  const levelChapters = [
    { title: "Chapter 1", meta: "3 items", lessons: [
      { title: "Ordering food", kind: "Scenario", icon: "☕", iconBg: "#F0E7D8", iconColor: "#2A2320", bg: "#fff", bd: "1px solid #EDE4D6", right: "›", chevron: "#C9AE97", go: () => setView('speakHub') },
      { title: "Present tense verbs", kind: "Grammar sheet", icon: "Aa", iconBg: "#FBF1E9", iconColor: "#DB5338", bg: "#fff", bd: "1px solid #EDE4D6", right: "›", chevron: "#C9AE97", go: () => setView('grammar') },
      { title: "At the market", kind: "Immersive audio", icon: "🎧", iconBg: "#EBE3D5", iconColor: "#2F8F83", bg: "#fff", bd: "1px solid #EDE4D6", right: "›", chevron: "#C9AE97", go: () => setView('audio') }
    ]}
  ];

  // Audio lines data
  const audioLines = [
    { native: "¿Qué vas a pedir?", en: "What are you going to order?", isPartner: "#DB5338", say: () => {} },
    { native: "Creo que quiero un café.", en: "I think I want a coffee.", isPartner: "rgba(255,255,255,.15)", say: () => {} },
    { native: "¿Y para comer?", en: "And to eat?", isPartner: "#DB5338", say: () => {} },
    { native: "Un cruasán, por favor.", en: "A croissant, please.", isPartner: "rgba(255,255,255,.15)", say: () => {} }
  ];

  // Curriculum Chapters Array
  const defaultIcons = ['☕', '🗺', '❤', '🏨', '🛒', '🚨'];
  const chapters = (_L.chapters || []).map((ch: any, i: number) => ({
    title: ch.chapterTitle,
    lessonTitle: ch.lessonTitle,
    goalTitle: ch.goalTitle,
    goalLine: ch.goalLine,
    scenario: ch.scenario,
    partnerLabel: `Talk to ${ch.partnerName || ch.partnerRole}`,
    firstMsg: ch.convo?.[0] ? { who: 'p', n: ch.convo[0].n, en: ch.convo[0].en } : null,
    icon: defaultIcons[i] || '✨'
  }));

  // Derived Gamification State
  const activeLevelIndex = chapters.findIndex((_: any, idx: number) => !earnedMilestones.includes(`ch${idx}_regular`));
  const currentLevel = activeLevelIndex === -1 ? Math.max(0, chapters.length - 1) : activeLevelIndex;
  
  const userLevel = currentLevel + 1;
  const userStreak = earnedMilestones.length > 0 ? 1 : 0;
  const userDiamonds = earnedMilestones.length * 20;

  const currentChapter = chapters[currentLevel] || { title: '' };
  const chapterMilestones = [`ch${currentLevel}_build`, `ch${currentLevel}_pronounce`, `ch${currentLevel}_regular`];
  const completedInCurrentChapter = chapterMilestones.filter(m => earnedMilestones.includes(m)).length;
  const chapterProgressPct = Math.max(0, Math.min(100, (completedInCurrentChapter / 3) * 100));

  return (
    <div className="cd-outer" style={{ background: '#E7E1D5', minHeight: '100vh', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '18px', padding: '36px 20px', boxSizing: 'border-box' }}>
      
      <div className="cd-demo-label" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: '#DB5338', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '11px', height: '11px', border: '2.2px solid #FBF6EE', borderRadius: '50%', borderRightColor: 'transparent', transform: 'rotate(-45deg)' }}></div>
        </div>
        <span style={{ fontSize: '17px', fontWeight: 600 }}>Cadence</span>
        <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: '16px', color: '#8A7E73' }}>
          — live prototype · talk to it for real
        </span>
      </div>

      {/* PHONE FRAME */}
      <div style={{ position: 'relative', width: '330px', height: '710px', flex: 'none' }}>
        <div className="cd-phone-shell" style={{ position: 'absolute', inset: 0, background: '#1c1714', borderRadius: '46px', padding: '12px', boxShadow: '0 36px 70px -24px rgba(40,30,20,.55)' }}></div>
        <div className="cd-phone-inner" style={{ position: 'absolute', top: '12px', left: '12px', right: '12px', bottom: '12px', background: view === 'complete' ? '#2F8F83' : (view === 'convo' || view === 'review' ? '#241C2A' : '#FBF6EE'), borderRadius: '34px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>

          {/* PWA Install Prompt */}
          {showInstallPrompt && (
            <div style={{ position: 'absolute', bottom: (view === 'welcome' || view === 'auth' || view === 'plans' || view === 'lesson' || view === 'convo') ? '24px' : '90px', left: '12px', right: '12px', zIndex: 9999, background: '#fff', borderRadius: '20px', padding: '16px', boxShadow: '0 12px 40px rgba(42,35,32,0.18)', display: 'flex', alignItems: 'center', gap: '12px', border: '1px solid #EDE4D6' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'linear-gradient(140deg,#DB5338,#B23E27)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '24px', flexShrink: 0, fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', paddingRight: '2px' }}>C</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '14.5px', fontWeight: 600, color: '#2A2320' }}>Install Cadence</div>
                <div style={{ fontSize: '11px', color: '#8A7E73', marginTop: '2px', lineHeight: 1.25 }}>Get the full, fast native experience on your home screen.</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div onClick={async () => {
                  if (deferredPrompt) {
                    deferredPrompt.prompt();
                    const { outcome } = await deferredPrompt.userChoice;
                    if (outcome === 'accepted') {
                      setDeferredPrompt(null);
                      setShowInstallPrompt(false);
                    }
                  } else if (!isIosStandalone) {
                    alert('To install on iOS: Tap the Share button below, then select "Add to Home Screen".');
                  }
                }} style={{ background: '#2F8F83', color: '#fff', padding: '6px 14px', borderRadius: '99px', fontSize: '12px', fontWeight: 600, cursor: 'pointer', textAlign: 'center' }}>Install</div>
                <div onClick={() => {
                  localStorage.setItem('cadence_install_dismissed', 'true');
                  setShowInstallPrompt(false);
                }} style={{ color: '#9A8E84', padding: '4px 14px', fontSize: '11px', cursor: 'pointer', textAlign: 'center' }}>Not now</div>
              </div>
            </div>
          )}

          {/* STATUS BAR */}
          <div className="cd-status-bar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 24px 0', fontSize: '12px', fontWeight: 600, flex: 'none', zIndex: 5, color: (view === 'complete' || view === 'convo' || view === 'review') ? '#F3ECE2' : '#2A2320' }}>
            <span>9:41</span><span>●●● ◔</span>
          </div>


          {/* ===== WELCOME SCREEN ===== */}
          {view === 'welcome' && (
            <div className="cd-screen" style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0, overflowY: 'auto' }}>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '20px 30px', minHeight: 0 }}>
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
              <div className="cd-welcome-footer" style={{ padding: '0 28px 38px', flex: 'none' }}>
                <div onClick={() => { setPickerNext('auth'); setAuthMode('signup'); setPicker(true); }} style={{ background: '#DB5338', color: '#FBF6EE', borderRadius: '16px', padding: '16px', textAlign: 'center', fontSize: '16px', fontWeight: 600, boxShadow: '0 8px 20px -6px rgba(219,83,56,.5)', marginBottom: '11px', cursor: 'pointer' }}>
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
            <div className="cd-screen cd-scroll" style={{ flex: 1, minHeight: 0, overflowY: 'auto', paddingBottom: '74px', backgroundImage: "url('/bg-watercolor.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
              
              {/* ===== NEW HUD BAR ===== */}
              <div style={{ position: 'sticky', top: '16px', zIndex: 100, margin: '0 16px', display: 'flex', justifyContent: 'center', pointerEvents: 'none' }}>
                <div style={{ background: '#FAF1E4', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 16px', width: '100%', maxWidth: '380px', boxShadow: '0 4px 10px rgba(0,0,0,0.15)', pointerEvents: 'auto', border: '2px solid #F3E5D0' }}>
                  
                  {/* Left: Hearts */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div style={{ background: '#C44738', borderRadius: '50%', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '14px', fontWeight: 'bold' }}>{userLevel}</div>
                    <span style={{ color: '#C44738', fontSize: '18px', fontWeight: 'bold', fontFamily: "'Instrument Serif', serif" }}>Full</span>
                  </div>

                  {/* Center: Avatar */}
                  <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: '-10px', background: '#F5B899', borderRadius: '50%', width: '60px', height: '60px', border: '4px solid #FAF1E4', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                    🙋‍♀️
                  </div>

                  {/* Right: Streak & Gems */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <span style={{ fontSize: '18px' }}>🔥</span>
                      <span style={{ color: '#A06E50', fontWeight: 'bold', fontSize: '14px' }}>{userStreak}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <span style={{ fontSize: '18px' }}>💎</span>
                      <span style={{ color: '#A06E50', fontWeight: 'bold', fontSize: '14px' }}>{userDiamonds}</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* ===== FLOATING CHAPTER CARD ===== */}
              <div onClick={() => setView('smartplan')} style={{ position: 'sticky', top: '90px', zIndex: 90, margin: '16px', background: '#FAF1E4', borderRadius: '16px', padding: '16px', boxShadow: '0 6px 16px rgba(0,0,0,0.15)', border: '2px solid #F3E5D0', width: '220px', cursor: 'pointer' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                  <span style={{ fontSize: '12px', color: '#8A7A66', fontWeight: 600 }}>Chapter {userLevel} · Today's plan</span>
                  <span style={{ color: '#8A7A66' }}>›</span>
                </div>
                <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: '24px', color: '#3A3229', lineHeight: 1.1, marginBottom: '12px' }}>
                  {currentChapter.title}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ fontSize: '10px', color: '#8A7A66', fontWeight: 'bold' }}>{completedInCurrentChapter}/3</div>
                  <div style={{ flex: 1, height: '6px', background: '#E8DEC9', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{ width: `${chapterProgressPct}%`, height: '100%', background: '#C44738', borderRadius: '3px', transition: 'width 0.3s ease' }}></div>
                  </div>
                </div>
              </div>

              <div style={{ position: 'relative', marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '50px', paddingBottom: '120px' }}>
                
                {/* Scenery Props (Pseudo-randomly placed emojis) */}
                {[...Array(chapters.length * 2)].map((_, idx) => {
                  const isLeft = idx % 2 === 0;
                  const rand1 = (idx * 13) % 100 / 100; // deterministic pseudo-random 0-0.99
                  const rand2 = (idx * 27) % 100 / 100;
                  const y = 40 + rand1 * 60 + (idx * 67); // vertical distribution
                  const xOffset = isLeft ? `calc(50% - ${110 + rand2 * 50}px)` : `calc(50% + ${110 + rand2 * 50}px)`;
                  const emojis = ['☕', '🥐', '🏛️', '🎨', '🕊️', '🚲', '🥖', '🍷', '🖼️', '🎭'];
                  const emoji = emojis[(idx * 7) % emojis.length];
                  const scale = 0.8 + rand1 * 0.6;
                  
                  return (
                    <div key={`prop-${idx}`} style={{ position: 'absolute', top: `${y}px`, left: xOffset, fontSize: '30px', filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.15))', zIndex: 0, transform: `scale(${scale})`, opacity: 0.8 }}>
                      {emoji}
                    </div>
                  );
                })}

                {/* Dynamic Winding Path */}
                <svg width="200px" height="100%" style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', zIndex: 0, pointerEvents: 'none' }}>
                  {(() => {
                    const activeLevelIndex = chapters.findIndex((_: any, idx: number) => !earnedMilestones.includes(`ch${idx}_regular`));
                    const currentLevel = activeLevelIndex === -1 ? chapters.length - 1 : activeLevelIndex;
                    let fullPath = "";
                    let completedPath = "";
                    chapters.forEach((ch: any, i: number) => {
                      const isLeft = i % 2 === 0;
                      const x = isLeft ? 50 : 150; // SVG center is 100
                      const y = 42 + i * 134; // Node center Y
                      if (i === 0) {
                        fullPath += `M ${x} ${y} `;
                        if (i <= currentLevel) completedPath += `M ${x} ${y} `;
                      } else {
                        const pX = (i - 1) % 2 === 0 ? 50 : 150;
                        const pY = 42 + (i - 1) * 134;
                        const cpY = pY + 67;
                        const curve = `C ${pX} ${cpY}, ${x} ${cpY}, ${x} ${y} `;
                        fullPath += curve;
                        if (i <= currentLevel) completedPath += curve;
                      }
                    });
                    return (
                      <>
                        {/* The Path */}
                        <path d={fullPath} fill="none" stroke="#F6EED4" strokeWidth="46" strokeLinecap="round" strokeLinejoin="round" />
                        <path d={fullPath} fill="none" stroke="#A58D76" strokeWidth="4" strokeDasharray="12 12" strokeLinecap="round" strokeLinejoin="round" opacity={0.6} />
                      </>
                    );
                  })()}
                </svg>

                {/* Nodes */}
                {chapters.map((ch: any, i: number) => {
                  const activeLevelIndex = chapters.findIndex((_: any, idx: number) => !earnedMilestones.includes(`ch${idx}_regular`));
                  const currentLevel = activeLevelIndex === -1 ? chapters.length - 1 : activeLevelIndex;
                  const isUnlocked = i <= currentLevel; 
                  const isCurrent = i === currentLevel;
                  const isPast = i < currentLevel;
                  const offset = i % 2 === 0 ? '-50px' : '50px'; // 50px offset to align with x=50/150 in SVG

                  return (
                    <div key={i} style={{ position: 'relative', zIndex: 1, transform: `translateX(${offset})` }}>
                      {/* Pulsing Aura for Current Level */}
                      {isCurrent && (
                        <div style={{ position: 'absolute', top: '50%', left: '50%', width: '94px', height: '94px', background: '#DB5338', borderRadius: '50%', marginTop: '-47px', marginLeft: '-47px', animation: 'pulseRing 2.5s infinite cubic-bezier(0.215, 0.61, 0.355, 1)', zIndex: 0 }}></div>
                      )}

                      <div 
                        className="saga-node"
                        onClick={() => {
                          if (isUnlocked) {
                            setActiveChapter(i);
                          } else {
                            setLockedToast('Complete the previous chapter first!');
                            setTimeout(() => setLockedToast(''), 3000);
                          }
                        }}
                        style={{ 
                          width: '74px', height: '74px', borderRadius: '50%', 
                          background: isUnlocked ? '#C44738' : '#B5A99B',
                          border: '5px solid #FFF',
                          boxShadow: isUnlocked 
                            ? '0 6px 0 #9E372A, inset 0 6px 8px rgba(255,255,255,0.4), 0 8px 12px rgba(0,0,0,0.2)' 
                            : '0 6px 0 #948879, inset 0 6px 8px rgba(255,255,255,0.4), 0 8px 12px rgba(0,0,0,0.1)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: '32px', cursor: isUnlocked ? 'pointer' : 'default',
                          position: 'relative', zIndex: 1,
                          color: '#FFF', fontWeight: 'bold', fontFamily: "'Instrument Serif', serif"
                        }}
                      >
                        <span style={{ transform: 'translateY(-2px)' }}>
                          {isUnlocked ? (i + 1) : '🔒'}
                        </span>
                      </div>

                      {/* Dynamic Golden Stars */}
                      {isUnlocked && (
                        <div style={{ position: 'absolute', bottom: '-15px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '2px', zIndex: 2 }}>
                          {earnedMilestones.includes(`ch${i}_build`) && <span style={{ fontSize: '18px', filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.3))', transform: 'rotate(-15deg)' }}>⭐</span>}
                          {earnedMilestones.includes(`ch${i}_pronounce`) && <span style={{ fontSize: '22px', filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.3))', transform: 'translateY(-4px)' }}>⭐</span>}
                          {earnedMilestones.includes(`ch${i}_regular`) && <span style={{ fontSize: '18px', filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.3))', transform: 'rotate(15deg)' }}>⭐</span>}
                        </div>
                      )}

                      {/* Floating Speech Bubble Tooltips */}
                      {i % 2 === 0 && (
                        <div style={{ position: 'absolute', top: '10px', [i % 4 === 0 ? 'left' : 'right']: '-80px', background: '#FFF', padding: '6px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold', color: '#C44738', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', zIndex: 3, whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '4px' }}>
                          {i === 0 && <>📖 Learn</>}
                          {i === 2 && <>🎧 Listen</>}
                          {i === 4 && <>💬 Speak</>}
                          {i === 6 && <>🎧 Practice</>}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>

              {lockedToast && (
                <div style={{ position: 'fixed', bottom: '100px', left: '50%', transform: 'translateX(-50%)', background: '#2A2320', color: '#FBF6EE', padding: '12px 24px', borderRadius: '99px', fontSize: '14px', fontWeight: 600, zIndex: 200, boxShadow: '0 4px 14px rgba(0,0,0,0.2)', whiteSpace: 'nowrap', animation: 'floatUp 0.3s ease-out' }}>
                  🔒 {lockedToast}
                </div>
              )}

              {/* Bottom Sheet Drawer */}
              {activeChapter !== null && (
                <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 100, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                  <div onClick={() => setActiveChapter(null)} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(42,35,32,0.6)', backdropFilter: 'blur(4px)', animation: 'cdIn 0.3s ease-out' }}></div>
                  <div className="cd-scroll" style={{ background: '#FBF6EE', borderTopLeftRadius: '32px', borderTopRightRadius: '32px', padding: '16px 0 32px', position: 'relative', zIndex: 1, boxShadow: '0 -10px 40px rgba(0,0,0,0.15)', maxHeight: '85vh', overflowY: 'auto', animation: 'slideUpDrawer 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)' }}>
                    <div style={{ width: '48px', height: '6px', background: '#E0D5C1', borderRadius: '99px', margin: '0 auto 16px' }}></div>
                    {(() => {
                      const i = activeChapter;
                      const chaptersTyped: any[] = chapters;
                      const ch = chaptersTyped[i];
                      const ch1BuildDone = earnedMilestones.includes(`ch${i}_build`);
                      const ch1PronDone = earnedMilestones.includes(`ch${i}_pronounce`);
                      const ch1LiveDone = earnedMilestones.includes(`ch${i}_regular`);
                      const ch1SkillsDone = (ch1BuildDone ? 1 : 0) + (ch1PronDone ? 1 : 0) + (ch1LiveDone ? 1 : 0);
                      const ch1Width = ch1SkillsDone === 0 ? '0%' : ch1SkillsDone === 1 ? '33%' : ch1SkillsDone === 2 ? '66%' : '100%';

                      return (
                        <div style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
                          <div style={{ padding: '0 24px 16px', textAlign: 'center' }}>
                            <div style={{ fontSize: '12px', fontWeight: 700, color: '#A8927C', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: '4px' }}>Chapter {i + 1}</div>
                            <div style={{ fontSize: '26px', fontWeight: 600, fontFamily: "'Instrument Serif', serif", color: '#2A2320', lineHeight: 1.1 }}>
                              {ch.chapterTitle ? ch.chapterTitle.split('·')[1]?.trim() || ch.chapterTitle : `Chapter ${i + 1}`}
                            </div>
                          </div>
                          
                          <div onClick={() => { if (!ch1BuildDone) { setPlayingChapter(i); setActiveChapter(null); handleReset(); setView('lesson'); } }} style={{ margin: '0 20px 24px', background: 'linear-gradient(135deg, #E85D41, #B23E27)', borderRadius: '24px', padding: '24px', color: '#FBF6EE', cursor: 'pointer', boxShadow: '0 12px 24px rgba(219,83,56,0.25), inset 0 2px 0 rgba(255,255,255,0.15)', position: 'relative', overflow: 'hidden' }}>
                            <div style={{ position: 'absolute', top: '-20px', right: '-20px', fontSize: '100px', opacity: 0.05, pointerEvents: 'none' }}>✨</div>
                            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '10px' }}>Real-world goal</div>
                            <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: '28px', lineHeight: 1.15, marginBottom: '20px', textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>“{ch.goalLine}”</div>
                            <div style={{ height: '8px', background: 'rgba(255,255,255,.2)', borderRadius: '99px', overflow: 'hidden', marginTop: '12px' }}>
                              <div style={{ width: ch1Width, height: '100%', background: '#fff', borderRadius: '99px', transition: 'width 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)', boxShadow: '0 0 10px rgba(255,255,255,0.5)' }}></div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
                              <span style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>{ch1SkillsDone} of 3 skills done</span>
                              <span style={{ fontSize: '13.5px', fontWeight: 700, background: 'rgba(0,0,0,0.15)', padding: '6px 12px', borderRadius: '99px' }}>{ch1LiveDone ? 'Complete ✓' : 'Continue →'}</span>
                            </div>
                          </div>

                          <div style={{ padding: '0 24px' }}>
                            {/* Step 1: Build it */}
                            <div onClick={() => { setPlayingChapter(i); setActiveChapter(null); handleReset(); setView('lesson'); }} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', cursor: 'pointer', opacity: 1 }}>
                              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <div style={{ width: '44px', height: '44px', borderRadius: '16px', background: ch1BuildDone ? '#2F8F83' : '#fff', border: ch1BuildDone ? 'none' : '2px solid #DB5338', display: 'flex', alignItems: 'center', justifyContent: 'center', color: ch1BuildDone ? '#fff' : '#DB5338', fontSize: '16px', flexShrink: 0, zIndex: 2, boxShadow: ch1BuildDone ? '0 4px 12px rgba(47,143,131,0.2)' : '0 4px 12px rgba(219,83,56,0.1)' }}>
                                  {ch1BuildDone ? '✓' : '▶'}
                                </div>
                                <div style={{ width: '2px', height: '36px', background: ch1BuildDone ? '#2F8F83' : '#E0D5C1', margin: '4px 0' }}></div>
                              </div>
                              <div style={{ flex: 1, padding: '4px 0 20px' }}>
                                <div style={{ fontSize: '16px', fontWeight: 700, color: '#2A2320', marginBottom: '2px' }}>{ch.goalTitle}</div>
                                <div style={{ fontSize: '13px', color: ch1BuildDone ? '#A8927C' : '#DB5338', fontWeight: 500 }}>
                                  {ch1BuildDone ? 'Lesson · done' : 'Lesson · 3 min'}
                                </div>
                              </div>
                            </div>

                            {/* Step 2: Pronunciation */}
                            <div onClick={() => { if (ch1BuildDone) { setPlayingChapter(i); setActiveChapter(null); handleReset(); setView('pronounce'); } }} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', cursor: ch1BuildDone ? 'pointer' : 'default', opacity: ch1BuildDone ? 1 : 0.5 }}>
                              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <div style={{ width: '44px', height: '44px', borderRadius: '16px', background: ch1PronDone ? '#2F8F83' : '#fff', border: (!ch1PronDone && ch1BuildDone) ? '2px solid #DB5338' : ch1PronDone ? 'none' : '2px solid #D1C8BB', display: 'flex', alignItems: 'center', justifyContent: 'center', color: ch1PronDone ? '#fff' : ch1BuildDone ? '#DB5338' : '#D1C8BB', fontSize: '16px', flexShrink: 0, zIndex: 2, boxShadow: ch1PronDone ? '0 4px 12px rgba(47,143,131,0.2)' : (!ch1PronDone && ch1BuildDone) ? '0 4px 12px rgba(219,83,56,0.1)' : 'none' }}>
                                  {ch1PronDone ? '✓' : ch1BuildDone ? '🎙' : '🔒'}
                                </div>
                                <div style={{ width: '2px', height: '36px', background: ch1PronDone ? '#2F8F83' : '#E0D5C1', margin: '4px 0' }}></div>
                              </div>
                              <div style={{ flex: 1, padding: '4px 0 20px' }}>
                                <div style={{ fontSize: '16px', fontWeight: 700, color: '#2A2320', marginBottom: '2px' }}>Pronunciation Lab</div>
                                <div style={{ fontSize: '13px', color: ch1PronDone ? '#A8927C' : ch1BuildDone ? '#DB5338' : '#A8927C', fontWeight: 500 }}>
                                  {ch1PronDone ? 'Practice · done' : 'Practice · 2 min'}
                                </div>
                              </div>
                            </div>

                            {/* Step 3: Live Conversation */}
                            <div onClick={() => { 
                              if (ch1PronDone) {
                                setPlayingChapter(i);
                                setActiveChapter(null);
                                startScenario(ch.scenario, ch.firstMsg);
                              }
                            }} style={{ display: 'flex', gap: '16px', alignItems: 'center', cursor: ch1PronDone ? 'pointer' : 'default', opacity: ch1PronDone ? 1 : 0.5 }}>
                              <div style={{ width: '44px', height: '44px', borderRadius: '16px', background: ch1LiveDone ? '#2F8F83' : '#fff', border: (!ch1LiveDone && ch1PronDone) ? '2px solid #2F8F83' : ch1LiveDone ? 'none' : '2px solid #D1C8BB', display: 'flex', alignItems: 'center', justifyContent: 'center', color: ch1LiveDone ? '#fff' : ch1PronDone ? '#2F8F83' : '#D1C8BB', fontSize: '16px', flexShrink: 0, zIndex: 2, boxShadow: ch1LiveDone ? '0 4px 12px rgba(47,143,131,0.2)' : (!ch1LiveDone && ch1PronDone) ? '0 4px 12px rgba(47,143,131,0.1)' : 'none' }}>
                                {ch1LiveDone ? '✓' : ch1PronDone ? '💬' : '🔒'}
                              </div>
                              <div style={{ flex: 1 }}>
                                <div style={{ fontSize: '16px', fontWeight: 700, color: '#2A2320', marginBottom: '2px' }}>{ch.partnerLabel}</div>
                                <div style={{ fontSize: '13px', color: (ch1PronDone && !ch1LiveDone) ? '#2F8F83' : '#A8927C', fontWeight: 500 }}>
                                  {ch1LiveDone ? 'Live conversation · done' : 'Live conversation · premium'}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                </div>
              )}
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
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <div style={{ fontSize: '11px', letterSpacing: '.1em', textTransform: 'uppercase', color: '#BFA38C' }}>Build the sentence — tap the words</div>
                  <div onClick={() => setShowHints(!showHints)} style={{ fontSize: '11px', color: showHints ? '#DB5338' : '#8A7E73', cursor: 'pointer', background: showHints ? '#FBF1E9' : '#EDE4D6', padding: '3px 8px', borderRadius: '6px', fontWeight: 600 }}>{showHints ? 'Hide hints' : 'Need a hint?'}</div>
                </div>
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
                    <div 
                      key={id}
                      onClick={() => !used && setAnswer(prev => [...prev, id])}
                      className={L.font} 
                      style={{ 
                        background: used ? '#F0E7D8' : '#fff', 
                        color: used ? '#C2B6A6' : '#2A2320', 
                        border: '1px solid #E1D6C4', 
                        borderRadius: '11px', 
                        padding: showHints ? '7px 11px' : '9px 13px', 
                        cursor: used ? 'default' : 'pointer',
                        opacity: used ? 0.55 : 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '2px'
                      }}
                    >
                      <span style={{ fontSize: '15px', fontWeight: 600 }}>{word}</span>
                      {showHints && L.bankEn?.[id] && (
                        <span style={{ fontSize: '10px', color: '#9A8E84', fontWeight: 500, letterSpacing: '0.02em', textTransform: 'uppercase' }}>{L.bankEn[id]}</span>
                      )}
                    </div>
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
                  <div onClick={() => completeMilestone(`ch${playingChapter}_build`)} style={{ flex: 1, background: '#2F8F83', color: '#FBF6EE', borderRadius: '14px', padding: '14px', textAlign: 'center', fontSize: '15px', fontWeight: 600, cursor: 'pointer' }}>
                    Continue →
                  </div>
                )}
                <div onClick={() => setView('pronounce')} className="mic-btn" style={{ width: '50px', height: '50px', borderRadius: '14px', background: '#2F8F83', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', flex: 'none', cursor: 'pointer', zIndex: 10 }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                    <line x1="12" y1="19" x2="12" y2="22"></line>
                  </svg>
                </div>
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
                
                {/* Animated Score Ring */}
                <div style={{ position: 'relative', width: '130px', height: '130px', marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="130" height="130" viewBox="0 0 36 36" style={{ position: 'absolute', inset: 0, transform: 'rotate(-90deg)' }}>
                    {/* Background Ring */}
                    <circle cx="18" cy="18" r="15.915" fill="none" stroke="#EDE4D6" strokeWidth="3" />
                    {/* Foreground Animated Ring */}
                    {pronScore !== null && (
                      <circle cx="18" cy="18" r="15.915" fill="none" stroke="#DB5338" strokeWidth="3" strokeLinecap="round" 
                        style={{ 
                          '--score': pronScore, 
                          animation: 'fillRing 1s ease-out forwards' 
                        } as React.CSSProperties} 
                      />
                    )}
                  </svg>
                  <div style={{ textAlign: 'center', zIndex: 1, animation: pronScore !== null ? 'popIn 0.5s ease-out forwards' : 'none' }}>
                    <div style={{ fontSize: '11px', color: '#9A8E84', textTransform: 'uppercase', letterSpacing: '.05em' }}>Accuracy</div>
                    <div style={{ fontSize: '38px', fontWeight: 700, color: '#DB5338', lineHeight: 1 }}>{pronScore !== null ? `${pronScore}%` : '--'}</div>
                  </div>
                </div>

                <div style={{ fontSize: '12px', color: '#8A7E73', marginBottom: '8px', textTransform: 'uppercase' }}>Target phrase</div>
                <div style={{ fontSize: '22px', fontWeight: 600, marginBottom: '20px', lineHeight: 1.3 }} className={L.font}>
                  {L.correct ? L.correct.map((i: number) => L.bank[i]).join(' ') : 'Hello'}
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
                            padding: '6px 12px',
                            fontSize: '14.5px',
                            fontWeight: 600,
                            opacity: 0,
                            animation: `popIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards ${0.2 + idx * 0.08}s`
                          }}
                        >
                          {w.word} ({w.accuracyScore}%)
                        </span>
                      );
                    })}
                  </div>
                )}

                <div onClick={() => speak(L.correct ? L.correct.map((i: number) => L.bank[i]).join(' ') : 'Hello', L.locale)} style={{ fontSize: '13px', color: '#DB5338', cursor: 'pointer', marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', opacity: 0, animation: 'popIn 0.5s ease forwards 1s' }}>
                  <span style={{ fontSize: '16px' }}>🔊</span> Hear correct native speed
                </div>
                
                {pronResult && pronScore !== null && pronScore >= 60 && (
                  <div onClick={() => completeMilestone(`ch${playingChapter}_pronounce`)} style={{ width: '100%', background: '#2F8F83', color: '#FBF6EE', borderRadius: '16px', padding: '16px', textAlign: 'center', fontSize: '16px', fontWeight: 600, cursor: 'pointer', opacity: 0, animation: 'popIn 0.4s ease-out forwards 1.2s' }}>
                    Continue to Dashboard →
                  </div>
                )}
              </div>

              <div style={{ padding: '16px 24px 26px', flex: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <AudioVisualizer analyser={pronAnalyser} isRecording={recordingPron} />
                <button 
                  onMouseDown={handleStartPronounceMic}
                  onMouseUp={handleStopPronounceMic}
                  onTouchStart={(e) => { e.preventDefault(); handleStartPronounceMic(); }}
                  onTouchEnd={(e) => { e.preventDefault(); handleStopPronounceMic(); }}
                  className={recordingPron ? 'cd-listening' : ''}
                  style={{ 
                    width: '100%', 
                    background: recordingPron ? '#DB5338' : '#2F8F83', 
                    color: '#FBF6EE', 
                    border: 'none', 
                    borderRadius: '16px', 
                    padding: '16px', 
                    fontSize: '16px', 
                    fontWeight: 600, 
                    cursor: 'pointer', 
                    boxShadow: recordingPron ? '0 8px 20px -6px rgba(219,83,56,.5)' : 'none',
                    userSelect: 'none',
                    WebkitUserSelect: 'none'
                  }}
                >
                  {recordingPron ? '🎙 Recording... (Release to Stop)' : '🎙 Hold to Record & Assess'}
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
              <div className="cd-status-bar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 24px 0', fontSize: '12px', fontWeight: 600 }}>
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
                <div onClick={() => startScenario('cafe')} style={{ background: 'linear-gradient(140deg,#DB5338,#B23E27)', borderRadius: '18px', padding: '16px', color: '#FBF6EE', marginBottom: '14px', cursor: 'pointer' }}>
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
                      onClick={() => startScenario(sc.key)}
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
                <div 
                  className={convo.thinking ? 'ai-thinking' : isAiSpeaking ? 'ai-speaking' : ''}
                  style={{ 
                    width: '58px', height: '58px', borderRadius: '50%', margin: '0 auto 7px', 
                    background: 'linear-gradient(140deg,#E1A23A,#DB5338)', 
                    display: 'flex', alignItems: 'center', justifyContent: 'center', 
                    fontSize: '22px', fontWeight: 600, color: '#fff',
                    transition: 'box-shadow 0.3s ease, transform 0.3s ease'
                  }}
                >
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
                      <div style={{ display: 'flex', gap: '7px', alignItems: 'center', background: 'rgba(225,162,58,0.15)', border: '1px solid rgba(225,162,58,0.4)', color: '#F3ECE2', borderRadius: '12px', padding: '8px 12px', width: 'fit-content', maxWidth: '85%', marginBottom: '10px', marginLeft: 'auto', alignSelf: 'flex-end' }}>
                        <span style={{ fontSize: '14px', flex: 'none' }}>💡</span>
                        <span style={{ fontSize: '11.5px', fontWeight: 500, lineHeight: 1.3 }}>{m.fb}</span>
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
              <div style={{ padding: '12px 16px 26px', flex: 'none', background: 'linear-gradient(180deg,rgba(36,28,42,0),#241C2A 30%)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <AudioVisualizer analyser={convoAnalyser} isRecording={convo.listening} color="#DB5338" />
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (!chatInput.trim() || convo.thinking) return;
                    submitConvo(chatInput);
                    setChatInput('');
                  }}
                  style={{ display: 'flex', gap: '8px', alignItems: 'center' }}
                >
                  <input 
                    type="text"
                    value={chatInput}
                    onChange={e => setChatInput(e.target.value)}
                    placeholder="Type a message..."
                    disabled={convo.thinking || convo.listening}
                    style={{
                      flex: 1,
                      background: '#352B3D',
                      color: '#FBF6EE',
                      border: '1px solid #4D4155',
                      borderRadius: '24px',
                      padding: '16px 20px',
                      fontSize: '16px',
                      outline: 'none',
                      boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)'
                    }}
                  />
                  <button 
                    type="button"
                    onMouseDown={handleStartConvoMic}
                    onMouseUp={handleStopConvoMic}
                    onTouchStart={(e) => { e.preventDefault(); handleStartConvoMic(); }}
                    onTouchEnd={(e) => { e.preventDefault(); handleStopConvoMic(); }}
                    className={convo.listening ? 'cd-listening' : ''}
                    style={{ 
                      width: '56px', 
                      height: '56px',
                      flex: 'none',
                      background: convo.listening ? '#DB5338' : '#2F8F83', 
                      color: '#FBF6EE', 
                      border: 'none', 
                      borderRadius: '50%', 
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '24px', 
                      cursor: 'pointer', 
                      boxShadow: convo.listening ? '0 8px 24px -6px rgba(219,83,56,.6)' : 'none',
                      userSelect: 'none',
                      WebkitUserSelect: 'none',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    🎙
                  </button>
                </form>
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
                <div onClick={() => completeMilestone(`ch${playingChapter}_regular`)} style={{ background: '#DB5338', color: '#FBF6EE', borderRadius: '14px', padding: '14px', textAlign: 'center', fontSize: '15px', fontWeight: 600, cursor: 'pointer' }}>Save words & finish</div>
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
                {(immerseData[lang] || []).map((it, idx) => {
                  const bg = it.type === 'Article' ? '#E1A23A' : it.type === 'Podcast' ? '#241C2A' : '#5B3A56';
                  const icon = it.type === 'Article' ? '❖' : it.type === 'Podcast' ? '🎧' : '☕';
                  const knownPerc = calculateKnownPercentage(it.text);
                  return (
                    <div key={idx} onClick={() => { setActiveImmerseItem(it); setView('reader'); }} style={{ background: '#fff', border: '1px solid #EDE4D6', borderRadius: '16px', padding: '13px 14px', display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '11px', cursor: 'pointer' }}>
                      <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: bg, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '19px', color: '#fff' }}>{icon}</div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '2px' }}>
                          <span style={{ fontSize: '9.5px', letterSpacing: '.05em', textTransform: 'uppercase', color: '#BFA38C' }}>{it.type} · {it.duration}</span>
                          <span style={{ fontSize: '9px', fontWeight: 700, color: '#2F8F83', border: '1px solid #BFE0DA', borderRadius: '99px', padding: '1px 6px' }}>{it.level}</span>
                        </div>
                        <div style={{ fontSize: '14px', fontWeight: 600, lineHeight: 1.25 }} className={L.font}>{it.title}</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginTop: '5px' }}>
                          <div style={{ flex: 1, height: '4px', background: '#EDE4D6', borderRadius: '99px', overflow: 'hidden' }}>
                            <div style={{ width: knownPerc, height: '100%', background: '#2F8F83' }}></div>
                          </div>
                          <span style={{ fontSize: '10px', color: '#2F8F83', fontWeight: 600 }}>{knownPerc} known</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ===== READER SCREEN ===== */}
          {view === 'reader' && activeImmerseItem && (
            <div className="cd-screen" style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 20px 12px', borderBottom: '1px solid #EDE4D6', flex: 'none' }}>
                <span onClick={() => { setView('immerse'); setActiveImmerseItem(null); setPop(null); }} style={{ fontSize: '18px', color: '#B5A99E', cursor: 'pointer' }}>‹</span>
                <span style={{ fontSize: '12.5px', fontWeight: 600, color: '#8A7E73' }}>{activeImmerseItem.type} · {activeImmerseItem.duration} · {activeImmerseItem.level}</span>
                <span onClick={() => speak(activeImmerseItem.text, L.locale)} style={{ fontSize: '15px', color: '#B5A99E', cursor: 'pointer' }}>🔊 Play</span>
              </div>
              <div className="cd-scroll" style={{ flex: 1, overflowY: 'auto', padding: '18px 24px 0' }}>
                <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: '25px', lineHeight: 1.12, marginBottom: '4px' }} className={L.font}>{activeImmerseItem.title}</div>
                <div style={{ fontSize: '14px', color: '#B5A99E', marginBottom: '16px' }}>{activeImmerseItem.englishTitle}</div>
                <div style={{ fontSize: '16.5px', lineHeight: 1.85, color: '#33291F', whiteSpace: 'pre-wrap' }} className={L.font}>
                  {activeImmerseItem.text.split(/([ \n,.]+)/).map((seg: string, idx: number) => {
                    const isWord = /^[\\p{L}]+$/u.test(seg);
                    const isKnown = knownWords.has(seg.toLowerCase());
                    return isWord ? (
                      <span key={idx} onClick={() => setPop({ term: seg, def: 'Translate or mark known' })} style={{ background: isKnown ? 'transparent' : '#FBE3D9', borderBottom: isKnown ? 'none' : '2px solid #DB5338', borderRadius: '3px', padding: '0 2px', cursor: 'pointer' }}>
                        {seg}
                      </span>
                    ) : (
                      <span key={idx}>{seg}</span>
                    )
                  })}
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
                    <div onClick={() => markAsKnown(pop.term)} style={{ flex: 1, background: '#DB5338', borderRadius: '9px', padding: '8px', textAlign: 'center', fontSize: '12.5px', fontWeight: 600, cursor: 'pointer' }}>+ Save word</div>
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
                    <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: '34px', lineHeight: 1 }}>{placeLevel}<span style={{ fontSize: '16px', color: '#A99C90' }}> → {placeLevel === 'A1' ? 'A2' : 'B1'}</span></div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '11px', color: '#A99C90' }}>progress snapshot ›</div>
                    <div style={{ fontSize: '18px', fontWeight: 700, color: '#E1A23A' }}>12%</div>
                  </div>
                </div>
                <div style={{ height: '7px', background: 'rgba(255,255,255,.14)', borderRadius: '99px', overflow: 'hidden' }}>
                  <div style={{ width: '12%', height: '100%', background: 'linear-gradient(90deg,#E1A23A,#DB5338)', borderRadius: '99px' }}></div>
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

                <div style={{ marginBottom: '24px' }}>
                  <div style={{ fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: '#BFA38C', marginBottom: '12px' }}>Notifications</div>
                  <div onClick={() => setView('notifications')} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fff', border: '1px solid #EDE4D6', borderRadius: '14px', padding: '14px 16px', cursor: 'pointer' }}>
                    <div>
                      <div style={{ fontSize: '13.5px', fontWeight: 600 }}>What alerts you</div>
                      <div style={{ fontSize: '11px', color: '#9A8E84', marginTop: '2px' }}>Reminders, friend updates, feedback alerts</div>
                    </div>
                    <span style={{ fontSize: '16px', color: '#C9AE97' }}>›</span>
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: '#BFA38C', marginBottom: '12px' }}>Data privacy</div>
                  <div onClick={() => setView('charter')} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fff', border: '1px solid #EDE4D6', borderRadius: '14px', padding: '14px 16px', cursor: 'pointer' }}>
                    <div>
                      <div style={{ fontSize: '13.5px', fontWeight: 600 }}>Data charter</div>
                      <div style={{ fontSize: '11px', color: '#9A8E84', marginTop: '2px' }}>Privacy toggles, export your data, delete your account</div>
                    </div>
                    <span style={{ fontSize: '16px', color: '#C9AE97' }}>›</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ===== AUTHENTICATION SCREEN ===== */}
          {view === 'auth' && (
            <div className="cd-screen" style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
              {/* Back arrow */}
              <div style={{ display: 'flex', alignItems: 'center', padding: '12px 22px 0', flex: 'none' }}>
                <span onClick={() => setView('welcome')} style={{ fontSize: '18px', color: '#B5A99E', cursor: 'pointer' }}>‹</span>
              </div>

              {/* Scrollable body */}
              <div className="cd-scroll" style={{ flex: 1, overflowY: 'auto', padding: '8px 28px 0' }}>
                {/* Cadence logo icon */}
                <div style={{ width: '40px', height: '40px', borderRadius: '11px', background: '#DB5338', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                  <div style={{ width: '15px', height: '15px', border: '2.6px solid #FBF6EE', borderRadius: '50%', borderRightColor: 'transparent', transform: 'rotate(-45deg)' }}></div>
                </div>

                {/* Title & subtitle */}
                <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: '32px', lineHeight: 1.05, marginBottom: '6px' }}>
                  {authMode === 'signup' ? 'Create your account' : 'Welcome back'}
                </div>
                <div style={{ fontSize: '13.5px', color: '#8A7E73', marginBottom: '22px' }}>
                  {authMode === 'signup' ? 'Save your progress across every device.' : 'Pick up right where you left off.'}
                </div>

                {/* OAuth buttons */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '18px' }}>
                  <div onClick={() => googleEnabled ? signIn('google') : showToast('Google sign-in is not configured yet.')} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', background: '#fff', border: '1px solid #E1D6C4', borderRadius: '13px', padding: '13px', fontSize: '14px', fontWeight: 600, cursor: 'pointer', opacity: googleEnabled ? 1 : 0.6 }}>
                    <span style={{ fontSize: '16px' }}>🇬</span> Continue with Google
                  </div>
                  <div onClick={() => showToast('Apple Sign-In is coming soon.')} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', background: '#2A2320', color: '#FBF6EE', borderRadius: '13px', padding: '13px', fontSize: '14px', fontWeight: 600, cursor: 'pointer', opacity: 0.6 }}>
                    <span style={{ fontSize: '15px' }}></span> Continue with Apple
                  </div>
                </div>

                {/* Divider */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
                  <div style={{ flex: 1, height: '1px', background: '#E7DECF' }}></div>
                  <span style={{ fontSize: '11.5px', color: '#A8927C' }}>or with email</span>
                  <div style={{ flex: 1, height: '1px', background: '#E7DECF' }}></div>
                </div>

                {/* Email form fields */}
                <form onSubmit={handleAuthSubmit} id="auth-form" style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
                  {authMode === 'signup' && (
                    <div style={{ background: '#fff', border: '1px solid #E1D6C4', borderRadius: '13px', padding: '13px 15px' }}>
                      <div style={{ fontSize: '10.5px', color: '#A8927C', marginBottom: '2px' }}>Name</div>
                      <input
                        className="cd-input-l"
                        type="text"
                        placeholder="Maya"
                        value={authName}
                        onChange={(e) => setAuthName(e.target.value)}
                        required
                        style={{ fontSize: '14px', width: '100%' }}
                      />
                    </div>
                  )}
                  <div style={{ background: '#fff', border: '1px solid #E1D6C4', borderRadius: '13px', padding: '13px 15px' }}>
                    <div style={{ fontSize: '10.5px', color: '#A8927C', marginBottom: '2px' }}>Email</div>
                    <input
                      className="cd-input-l"
                      type="email"
                      placeholder="you@email.com"
                      value={authEmail}
                      onChange={(e) => setAuthEmail(e.target.value)}
                      required
                      style={{ fontSize: '14px', width: '100%' }}
                    />
                  </div>
                  <div style={{ background: '#fff', border: '1px solid #E1D6C4', borderRadius: '13px', padding: '13px 15px' }}>
                    <div style={{ fontSize: '10.5px', color: '#A8927C', marginBottom: '2px' }}>Password</div>
                    <input
                      className="cd-input-l"
                      type="password"
                      placeholder="••••••••"
                      value={authPassword}
                      onChange={(e) => setAuthPassword(e.target.value)}
                      required
                      style={{ fontSize: '14px', width: '100%' }}
                    />
                  </div>

                  {authError && <div style={{ color: '#B23E27', fontSize: '12.5px' }}>{authError}</div>}
                </form>
              </div>

              {/* Fixed bottom CTA area */}
              <div style={{ padding: '16px 28px 22px', flex: 'none' }}>
                <button type="submit" form="auth-form" style={{ width: '100%', background: '#DB5338', color: '#FBF6EE', border: 'none', borderRadius: '14px', padding: '15px', textAlign: 'center', fontSize: '15px', fontWeight: 600, cursor: 'pointer', marginBottom: '12px' }}>
                  {authMode === 'signup' ? 'Create account' : 'Log in'}
                </button>
                <div style={{ textAlign: 'center', fontSize: '13px', color: '#8A7E73' }}>
                  {authMode === 'signup' ? 'Already learning with us? ' : 'New to Cadence? '}
                  <span onClick={() => setAuthMode(authMode === 'signup' ? 'login' : 'signup')} style={{ color: '#DB5338', fontWeight: 600, cursor: 'pointer' }}>
                    {authMode === 'signup' ? 'Log in' : 'Sign up'}
                  </span>
                </div>
                <div style={{ textAlign: 'center', fontSize: '10.5px', color: '#B5A99E', marginTop: '14px', lineHeight: 1.5 }}>
                  By continuing you agree to our <a href="/terms" target="_blank" style={{ color: '#DB5338', textDecoration: 'none' }}>Terms</a> & <a href="/privacy" target="_blank" style={{ color: '#DB5338', textDecoration: 'none' }}>Privacy</a>. We never sell your data.
                </div>
              </div>
            </div>
          )}

          {/* ===== FLUENCY SCORE ===== */}
          {view === 'score' && (
            <div className="cd-screen" style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 22px 6px', flex: 'none' }}>
                <span onClick={() => setView('you')} style={{ fontSize: '18px', color: '#B5A99E', cursor: 'pointer' }}>‹</span>
                <span style={{ fontSize: '12.5px', fontWeight: 600, color: '#8A7E73' }}>Fluency proof</span>
                <span style={{ width: '18px' }}></span>
              </div>
              <div className="cd-scroll" style={{ flex: 1, overflowY: 'auto', padding: '8px 20px 24px' }}>
                <div style={{ fontSize: '12.5px', color: '#8A7E73', marginBottom: '14px', lineHeight: 1.45 }}>Real, verifiable proof of what you can do — earned by conversation, not a vanity badge. Share it with schools or employers.</div>
                
                <div style={{ background: '#2A2320', borderRadius: '20px', padding: '20px', color: '#F3ECE2', position: 'relative', overflow: 'hidden', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '22px', height: '22px', borderRadius: '6px', background: '#DB5338', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ width: '9px', height: '9px', border: '2px solid #FBF6EE', borderRadius: '50%', borderRightColor: 'transparent', transform: 'rotate(-45deg)' }}></div>
                      </div>
                      <span style={{ fontSize: '13px', fontWeight: 600 }}>Cadence</span>
                    </div>
                    <span style={{ fontSize: '10px', color: '#A99C90', letterSpacing: '.08em' }}>PROGRESS SNAPSHOT</span>
                  </div>
                  <div style={{ fontSize: '11px', color: '#A99C90', letterSpacing: '.06em', textTransform: 'uppercase', marginBottom: '4px' }}>{L.name} fluency</div>
                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: '10px', marginBottom: '18px' }}>
                    <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: '54px', lineHeight: 0.9 }}>{level}</div>
                    <div style={{ fontSize: '13px', color: '#C9BFB4', paddingBottom: '10px' }}>CEFR · estimated from your placement chat</div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '9px', marginBottom: '18px' }}>
                    {scoreSkills.map((sk, i) => (
                      <div key={i}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '4px' }}>
                          <span>{sk.label}</span>
                          <span style={{ color: '#E1A23A', fontWeight: 600 }}>{sk.val}</span>
                        </div>
                        <div style={{ height: '5px', background: 'rgba(255,255,255,.14)', borderRadius: '99px', overflow: 'hidden' }}>
                          <div style={{ width: sk.pct, height: '100%', background: 'linear-gradient(90deg,#E1A23A,#DB5338)', borderRadius: '99px' }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                  <div onClick={() => setView('share')} style={{ flex: 1, background: '#DB5338', color: '#FBF6EE', borderRadius: '13px', padding: '13px', textAlign: 'center', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}>Share proof</div>
                  <div onClick={() => window.print()} style={{ flex: 1, background: '#fff', border: '1px solid #EDE4D6', borderRadius: '13px', padding: '13px', textAlign: 'center', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}>Export PDF</div>
                </div>
                <div style={{ textAlign: 'center', fontSize: '11.5px', color: '#9A8E84', lineHeight: 1.5 }}>A personal snapshot of your progress — not a third-party certification.</div>
              </div>
            </div>
          )}

          {/* ===== SHARE CARD ===== */}
          {view === 'share' && (
            <div className="cd-screen" style={{ position: 'absolute', inset: 0, background: '#1C1714', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 22px 6px', flex: 'none' }}>
                <span onClick={() => setView('score')} style={{ fontSize: '18px', color: '#9A8E84', cursor: 'pointer' }}>✕</span>
                <span style={{ fontSize: '12.5px', fontWeight: 600, color: '#C9BFB4' }}>Share your win</span>
                <span style={{ width: '18px' }}></span>
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 26px' }}>
                <div style={{ background: 'linear-gradient(155deg,#DB5338,#B23E27)', borderRadius: '24px', padding: '26px 24px', color: '#FBF6EE', boxShadow: '0 20px 50px -16px rgba(0,0,0,.6)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
                    <div style={{ width: '24px', height: '24px', borderRadius: '7px', background: 'rgba(255,255,255,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <div style={{ width: '10px', height: '10px', border: '2px solid #FBF6EE', borderRadius: '50%', borderRightColor: 'transparent', transform: 'rotate(-45deg)' }}></div>
                    </div>
                    <span style={{ fontSize: '14px', fontWeight: 600 }}>Cadence</span>
                  </div>
                  <div style={{ fontSize: '11px', letterSpacing: '.1em', textTransform: 'uppercase', opacity: .8, marginBottom: '12px' }}>New milestone · {L.name}</div>
                  <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: '32px', lineHeight: 1.08, marginBottom: '20px' }}>Reached B1 Fluency</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', opacity: .9 }}><span style={{ fontSize: '16px' }}>☕</span><span>A real thing I can do now — not a streak number.</span></div>
                  <div style={{ marginTop: '22px', display: 'flex', gap: '14px', fontSize: '12px', opacity: .85 }}><span>🌱 12-day rhythm</span><span>◇ 14 conversations</span></div>
                </div>
                <div style={{ textAlign: 'center', fontSize: '12px', color: '#9A8E84', marginTop: '14px' }}>Brag about a <em style={{ fontFamily: "'Instrument Serif', serif", color: '#E1A23A' }}>skill</em>, not a streak.</div>
              </div>
              <div style={{ padding: '8px 26px 30px', flex: 'none' }}>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', marginBottom: '18px' }}>
                  {shareTargets.map((t, i) => (
                    <div
                      key={i}
                      onClick={async () => {
                        if (t.href) {
                          window.open(t.href, '_blank', 'noopener,noreferrer');
                        } else if (navigator.clipboard) {
                          await navigator.clipboard.writeText(`${shareMessage} ${shareUrl}`);
                          showToast(`Copied — paste it into ${t.label}.`);
                        }
                      }}
                      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', cursor: 'pointer' }}
                    >
                      <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: t.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', color: '#fff' }}>{t.icon}</div>
                      <span style={{ fontSize: '10.5px', color: '#9A8E84' }}>{t.label}</span>
                    </div>
                  ))}
                </div>
                <div onClick={() => setView('you')} style={{ background: '#FBF6EE', color: '#2A2320', borderRadius: '14px', padding: '14px', textAlign: 'center', fontSize: '15px', fontWeight: 600, cursor: 'pointer' }}>Save image to share later</div>
              </div>
            </div>
          )}

          {/* ===== ACHIEVEMENTS ===== */}
          {view === 'achievements' && (
            <div className="cd-screen" style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 22px 6px', flex: 'none' }}>
                <span onClick={() => setView('you')} style={{ fontSize: '18px', color: '#B5A99E', cursor: 'pointer' }}>‹</span>
                <span style={{ fontSize: '12.5px', fontWeight: 600, color: '#8A7E73' }}>Achievements</span>
                <span style={{ width: '18px' }}></span>
              </div>
              <div className="cd-scroll" style={{ flex: 1, overflowY: 'auto', padding: '10px 20px 24px' }}>
                <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: '26px', lineHeight: 1.08, marginBottom: '4px' }}>Things you can actually do</div>
                <div style={{ fontSize: '12.5px', color: '#8A7E73', marginBottom: '18px' }}>Every badge is a real-world skill — not a points total. <strong style={{ color: '#2F8F83' }}>8 earned</strong> · 4 in progress</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '11px' }}>
                  {badges.map((b, i) => (
                    <div key={i} style={{ background: b.bg, border: b.border, borderRadius: '16px', padding: '13px 8px', textAlign: 'center' }}>
                      <div style={{ width: '42px', height: '42px', borderRadius: '50%', margin: '0 auto 8px', background: b.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '19px' }}>
                        <span style={{ ...(b.state === 'progress' || b.state === 'locked' ? { opacity: 0.5, filter: 'grayscale(1)' } : { color: '#fff' }) }}>{b.icon}</span>
                      </div>
                      <div style={{ fontSize: '11.5px', fontWeight: 600, lineHeight: 1.2, color: b.titleColor, marginBottom: '3px' }}>{b.title}</div>
                      <div style={{ fontSize: '9.5px', color: '#9A8E84', lineHeight: 1.2 }}>{b.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ===== LEVEL DETAIL ===== */}
          {view === 'levelDetail' && (
            <div className="cd-screen" style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 22px 6px', flex: 'none' }}>
                <span onClick={() => setView('journey')} style={{ fontSize: '18px', color: '#B5A99E', cursor: 'pointer' }}>‹</span>
                <span style={{ fontSize: '12.5px', fontWeight: 600, color: '#8A7E73' }}>A1 · Everyday life</span>
                <span style={{ width: '18px' }}></span>
              </div>
              <div className="cd-scroll" style={{ flex: 1, overflowY: 'auto', padding: '8px 20px 24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: '#DB5338', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Instrument Serif', serif", fontSize: '22px', color: '#fff', flex: 'none' }}>A1</div>
                  <div>
                    <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: '24px', lineHeight: 1.05 }}>Everyday life</div>
                    <div style={{ fontSize: '12px', color: '#8A7E73' }}>Can introduce yourself and others</div>
                  </div>
                </div>
                <div style={{ background: '#F4ECDF', borderRadius: '12px', padding: '11px 14px', margin: '12px 0 18px', fontSize: '12.5px', color: '#6B5F58', lineHeight: 1.45 }}>Can understand and use familiar everyday expressions and very basic phrases.</div>
                {levelChapters.map((ch, i) => (
                  <div key={i} style={{ marginBottom: '18px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                      <span style={{ fontSize: '13.5px', fontWeight: 700 }}>{ch.title}</span>
                      <span style={{ fontSize: '11px', color: '#9A8E84' }}>{ch.meta}</span>
                    </div>
                    {ch.lessons.map((ls, j) => (
                      <div key={j} onClick={ls.go} style={{ display: 'flex', gap: '12px', alignItems: 'center', background: ls.bg, border: ls.bd, borderRadius: '13px', padding: '11px 13px', marginBottom: '8px', cursor: 'pointer' }}>
                        <div style={{ width: '34px', height: '34px', borderRadius: '10px', background: ls.iconBg, color: ls.iconColor, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', flex: 'none' }}>{ls.icon}</div>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: '14px', fontWeight: 600, color: '#2A2320' }}>{ls.title}</div>
                          <div style={{ fontSize: '11.5px', color: '#9A8E84' }}>{ls.kind}</div>
                        </div>
                        <span style={{ fontSize: '13px', color: ls.chevron }}>{ls.right}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ===== PLANS ===== */}
          {view === 'plans' && (
            <div className="cd-screen" style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 22px 0', flex: 'none' }}>
                <span onClick={() => setView('you')} style={{ fontSize: '18px', color: '#B5A99E', cursor: 'pointer' }}>✕</span>
              </div>
              <div className="cd-scroll" style={{ flex: 1, overflowY: 'auto', padding: '8px 18px 0' }}>
                <div style={{ textAlign: 'center', padding: '6px 6px 0' }}>
                  <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: '28px', lineHeight: 1.05 }}>Conversation is free.<br /><span style={{ fontStyle: 'italic', color: '#DB5338' }}>Always.</span></div>
                  <div style={{ fontSize: '13px', color: '#8A7E73', marginTop: '6px' }}>Plus adds depth — never the basics.</div>
                </div>
                <div style={{ padding: '18px 0 0' }}>
                  <div style={{ background: '#fff', border: '1px solid #EDE4D6', borderRadius: '16px', padding: '15px 16px', marginBottom: '12px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                      <div style={{ fontSize: '15px', fontWeight: 700 }}>Free</div>
                      <div style={{ fontSize: '12px', color: '#2F8F83', fontWeight: 600 }}>Your plan</div>
                    </div>
                    <div style={{ fontSize: '13px', lineHeight: 1.9, color: '#5C5048' }}>✓ Daily lessons & culture<br />✓ AI conversation, any scenario<br />✓ Placement & milestones</div>
                  </div>
                  <div style={{ background: '#2A2320', borderRadius: '16px', padding: '15px 16px', color: '#F3ECE2', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', right: '-20px', top: '14px', background: '#E1A23A', color: '#3A2417', fontSize: '10px', fontWeight: 700, letterSpacing: '.05em', padding: '3px 26px', transform: 'rotate(38deg)' }}>DEPTH</div>
                    <div style={{ fontSize: '15px', fontWeight: 700, marginBottom: '2px' }}>Cadence Plus</div>
                    <div style={{ fontSize: '12px', color: '#A99C90', marginBottom: '10px' }}>$9 / mo · 7-day free trial</div>
                    <div style={{ fontSize: '13px', lineHeight: 1.9, color: '#E8DFD4' }}>✦ Unlimited immersion library<br />✦ Offline & download<br />✦ Personalized exam prep<br />✦ Deep grammar deep-dives</div>
                  </div>
                </div>
              </div>
              <div style={{ padding: '14px 22px 26px', flex: 'none' }}>
                <div onClick={() => setView('checkout')} style={{ background: '#DB5338', color: '#FBF6EE', borderRadius: '14px', padding: '15px', textAlign: 'center', fontSize: '15px', fontWeight: 600, cursor: 'pointer' }}>Try Plus free for 7 days</div>
              </div>
            </div>
          )}

          {/* ===== CHECKOUT ===== */}
          {view === 'checkout' && (
            <div className="cd-screen" style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 22px 6px', flex: 'none' }}>
                <span onClick={() => setView('plans')} style={{ fontSize: '18px', color: '#B5A99E', cursor: 'pointer' }}>‹</span>
                <span style={{ fontSize: '12.5px', fontWeight: 600, color: '#8A7E73' }}>Checkout</span>
                <span style={{ fontSize: '11px', color: '#9A8E84' }}>🔒 Secure</span>
              </div>
              <div className="cd-scroll" style={{ flex: 1, overflowY: 'auto', padding: '8px 22px 0' }}>
                <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: '27px', lineHeight: 1.05, marginBottom: '4px' }}>Start your free week</div>
                <div style={{ fontSize: '13px', color: '#8A7E73', marginBottom: '16px' }}>Free for 7 days, then $9/mo. Cancel anytime — we'll remind you 2 days before.</div>
                
                <div style={{ background: '#2A2320', borderRadius: '16px', padding: '16px', color: '#F3ECE2', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <div style={{ fontSize: '15px', fontWeight: 700 }}>Cadence Plus</div>
                    <div style={{ fontSize: '13px', color: '#A99C90' }}>$9 / mo</div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12.5px', color: '#C9BFB4', padding: '6px 0', borderTop: '1px solid rgba(255,255,255,.12)' }}>
                    <span>Today</span>
                    <span style={{ color: '#46C46E', fontWeight: 600 }}>$0.00 — trial</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12.5px', color: '#C9BFB4', padding: '6px 0' }}>
                    <span>On {new Date(Date.now() + 7 * 86400000).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                    <span>$9.00</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '8px', marginBottom: '14px' }}>
                  <div onClick={() => setPayMethod('card')} style={{ flex: 1, textAlign: 'center', fontSize: '12.5px', fontWeight: 600, borderRadius: '11px', padding: '11px', background: payMethod === 'card' ? '#E6F0EE' : '#fff', color: payMethod === 'card' ? '#2F8F83' : '#8A7E73', border: payMethod === 'card' ? '1px solid #BFE0DA' : '1px solid #EDE4D6', cursor: 'pointer' }}>💳 Card</div>
                  <div onClick={() => setPayMethod('upi')} style={{ flex: 1, textAlign: 'center', fontSize: '12.5px', fontWeight: 600, borderRadius: '11px', padding: '11px', background: payMethod === 'upi' ? '#E6F0EE' : '#fff', color: payMethod === 'upi' ? '#2F8F83' : '#8A7E73', border: payMethod === 'upi' ? '1px solid #BFE0DA' : '1px solid #EDE4D6', cursor: 'pointer' }}>UPI / Razorpay</div>
                </div>

                {payMethod === 'card' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
                    <div style={{ background: '#fff', border: '1px solid #E1D6C4', borderRadius: '13px', padding: '13px 15px' }}>
                      <div style={{ fontSize: '10.5px', color: '#A8927C', marginBottom: '2px' }}>Card number</div>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <input className="cd-input-l" style={{ fontSize: '14px', flex: 1, border: 'none', outline: 'none' }} placeholder="1234 5678 9012 3456" />
                        <span style={{ fontSize: '13px' }}>💳</span>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '11px' }}>
                      <div style={{ flex: 1, background: '#fff', border: '1px solid #E1D6C4', borderRadius: '13px', padding: '13px 15px' }}>
                        <div style={{ fontSize: '10.5px', color: '#A8927C', marginBottom: '2px' }}>Expiry</div>
                        <input className="cd-input-l" style={{ fontSize: '14px', width: '100%', border: 'none', outline: 'none' }} placeholder="MM / YY" />
                      </div>
                      <div style={{ flex: 1, background: '#fff', border: '1px solid #E1D6C4', borderRadius: '13px', padding: '13px 15px' }}>
                        <div style={{ fontSize: '10.5px', color: '#A8927C', marginBottom: '2px' }}>CVC</div>
                        <input className="cd-input-l" style={{ fontSize: '14px', width: '100%', border: 'none', outline: 'none' }} placeholder="123" />
                      </div>
                    </div>
                  </div>
                )}
                {payMethod === 'upi' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
                    <div style={{ background: '#fff', border: '1px solid #E1D6C4', borderRadius: '13px', padding: '13px 15px' }}>
                      <div style={{ fontSize: '10.5px', color: '#A8927C', marginBottom: '2px' }}>UPI ID</div>
                      <input className="cd-input-l" style={{ fontSize: '14px', width: '100%', border: 'none', outline: 'none' }} placeholder="name@bank" />
                    </div>
                    <div style={{ fontSize: '12px', color: '#8A7E73', marginTop: '10px', textAlign: 'center' }}>You'll approve the payment in your UPI app.</div>
                  </div>
                )}
              </div>
              <div style={{ padding: '14px 22px 22px', flex: 'none' }}>
                <div onClick={handleGoCheckout} style={{ background: '#DB5338', color: '#FBF6EE', borderRadius: '14px', padding: '15px', textAlign: 'center', fontSize: '15px', fontWeight: 600, cursor: 'pointer' }}>Start free trial</div>
                <div style={{ textAlign: 'center', fontSize: '10.5px', color: '#B5A99E', marginTop: '10px' }}>Powered by Stripe · 256-bit encrypted · no charge today</div>
              </div>
            </div>
          )}

          {/* ===== TOGETHER (SOCIAL) ===== */}
          {view === 'social' && (
            <div className="cd-screen" style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 22px 6px', flex: 'none' }}>
                <span style={{ fontSize: '18px', color: 'transparent' }}>‹</span>
                <span style={{ fontSize: '12.5px', fontWeight: 600, color: '#8A7E73' }}>Together</span>
                <span onClick={() => setView('correct')} style={{ fontSize: '16px', color: '#DB5338', cursor: 'pointer' }}>＋</span>
              </div>
              <div className="cd-scroll" style={{ flex: 1, overflowY: 'auto', padding: '8px 20px 120px' }}>
                <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: '26px', lineHeight: 1.05, marginBottom: '22px' }}>Your circle</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {circle.map((c, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', background: c.bg, border: c.bd, borderRadius: '14px', padding: '12px 14px' }}>
                      <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: c.avatar, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '16px', fontWeight: 600, margin: '0 12px 0 8px', flex: 'none' }}>{c.initial}</div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '14px', fontWeight: 600, color: '#F3ECE2' }}>{c.name}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: '10px', background: '#fff', border: '1px dashed #D8CDBB', borderRadius: '14px', padding: '18px', textAlign: 'center' }}>
                  <div style={{ fontSize: '13px', color: '#5C5048', marginBottom: '12px', lineHeight: 1.4 }}>No one here yet — invite friends to compare progress and keep each other honest.</div>
                  <div onClick={handleInvite} style={{ background: '#DB5338', color: '#FBF6EE', borderRadius: '12px', padding: '10px 20px', textAlign: 'center', fontSize: '13.5px', fontWeight: 600, cursor: 'pointer', display: 'inline-block' }}>
                    Invite friends →
                  </div>
                </div>
                <div style={{ marginTop: '22px', borderTop: '1px solid #EDE4D6', paddingTop: '22px' }}>
                  <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: '22px', marginBottom: '14px' }}>Native corrections</div>
                  <div style={{ background: '#fff', border: '1px solid #EDE4D6', borderRadius: '16px', padding: '18px', textAlign: 'center' }}>
                    <div style={{ fontSize: '13px', color: '#8A7E73', lineHeight: 1.4 }}>No corrections yet. When a native speaker reviews one of your recordings, it'll show up here.</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ===== NATIVE CORRECT / FEEDBACK ===== */}
          {view === 'correct' && (
            <div className="cd-screen" style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 22px 6px', flex: 'none' }}>
                <span onClick={() => setView('social')} style={{ fontSize: '18px', color: '#B5A99E', cursor: 'pointer' }}>‹</span>
                <span style={{ fontSize: '12.5px', fontWeight: 600, color: '#8A7E73' }}>Help a learner</span>
                <span style={{ width: '18px' }}></span>
              </div>
              <div className="cd-scroll" style={{ flex: 1, overflowY: 'auto', padding: '8px 20px 24px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: '26px', lineHeight: 1.05, marginBottom: '6px' }}>Listen & correct</div>
                <div style={{ fontSize: '13px', color: '#8A7E73', marginBottom: '20px' }}>Help someone learning your native language (English). They'll help you in return.</div>

                <div style={{ background: '#fff', border: '1px dashed #D8CDBB', borderRadius: '20px', padding: '28px 20px', textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ fontSize: '32px', marginBottom: '12px' }}>🎧</div>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: '#2A2320', marginBottom: '6px' }}>No one needs help right now</div>
                  <div style={{ fontSize: '12.5px', color: '#8A7E73', lineHeight: 1.4 }}>Check back soon — learners asking for a native-speaker correction will show up here.</div>
                </div>
              </div>
            </div>
          )}

          {/* ===== NOTIFICATIONS ===== */}
          {view === 'notifications' && (
            <div className="cd-screen" style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 22px 6px', flex: 'none' }}>
                <span onClick={() => setView('settings')} style={{ fontSize: '18px', color: '#B5A99E', cursor: 'pointer' }}>‹</span>
                <span style={{ fontSize: '12.5px', fontWeight: 600, color: '#8A7E73' }}>Notifications</span>
                <span style={{ width: '18px' }}></span>
              </div>
              <div className="cd-scroll" style={{ flex: 1, overflowY: 'auto', padding: '8px 20px 24px' }}>
                <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: '27px', lineHeight: 1.05, marginBottom: '20px' }}>What alerts you</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {notifList.map((n, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ paddingRight: '16px' }}>
                        <div style={{ fontSize: '14px', fontWeight: 600, color: '#2A2320' }}>{n.label}</div>
                        <div style={{ fontSize: '12px', color: '#8A7E73', marginTop: '2px', lineHeight: 1.4 }}>{n.caption}</div>
                      </div>
                      <div onClick={n.toggle} style={{ width: '46px', height: '26px', borderRadius: '13px', background: n.track, display: 'flex', alignItems: 'center', padding: '3px', flex: 'none', justifyContent: n.justify, transition: 'all .2s ease', cursor: 'pointer' }}>
                        <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,.1)' }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ===== DATA CHARTER ===== */}
          {view === 'charter' && (
            <div className="cd-screen" style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 22px 6px', flex: 'none' }}>
                <span onClick={() => setView('settings')} style={{ fontSize: '18px', color: '#B5A99E', cursor: 'pointer' }}>‹</span>
                <span style={{ fontSize: '12.5px', fontWeight: 600, color: '#8A7E73' }}>Data charter</span>
                <span style={{ width: '18px' }}></span>
              </div>
              <div className="cd-scroll" style={{ flex: 1, overflowY: 'auto', padding: '8px 20px 24px' }}>
                <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: '27px', lineHeight: 1.05, marginBottom: '12px' }}>Your data is yours</div>
                <div style={{ fontSize: '13px', color: '#5C5048', lineHeight: 1.5, marginBottom: '24px' }}>We don&apos;t sell your data to brokers, and we don&apos;t train underlying LLMs on your personal chats without explicit opt-in. You can delete your account and all associated data at any time.</div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '30px' }}>
                  {charterToggles.map((c, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ paddingRight: '16px' }}>
                        <div style={{ fontSize: '14px', fontWeight: 600, color: '#2A2320' }}>{c.label}</div>
                        <div style={{ fontSize: '12px', color: '#8A7E73', marginTop: '2px', lineHeight: 1.4 }}>{c.caption}</div>
                      </div>
                      <div onClick={c.toggle} style={{ width: '46px', height: '26px', borderRadius: '13px', background: c.track, display: 'flex', alignItems: 'center', padding: '3px', flex: 'none', justifyContent: c.justify, transition: 'all .2s ease', cursor: 'pointer' }}>
                        <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,.1)' }}></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ borderTop: '1px solid #EDE4D6', paddingTop: '20px' }}>
                  <div onClick={handleExportData} style={{ color: '#DB5338', fontSize: '14px', fontWeight: 600, marginBottom: '8px', cursor: 'pointer' }}>Export my data (JSON)</div>
                  <div onClick={handleDeleteAccount} style={{ color: '#B23E27', fontSize: '14px', fontWeight: 600, cursor: 'pointer', marginBottom: '20px' }}>Delete account & data</div>
                  <div style={{ borderTop: '1px solid #EDE4D6', paddingTop: '20px', display: 'flex', gap: '15px' }}>
                    <a href="/privacy" style={{ color: '#8A7E73', fontSize: '12px', textDecoration: 'none' }}>Privacy Policy</a>
                    <a href="/terms" style={{ color: '#8A7E73', fontSize: '12px', textDecoration: 'none' }}>Terms of Service</a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ===== AUDIO IMMERSION ===== */}
          {view === 'audio' && (
            <div className="cd-screen" style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0, background: '#1C1714', color: '#FBF6EE' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 22px 6px', flex: 'none' }}>
                <span onClick={() => setView('levelDetail')} style={{ fontSize: '18px', color: '#9A8E84', cursor: 'pointer' }}>‹</span>
                <span style={{ fontSize: '12.5px', fontWeight: 600, color: '#C9BFB4' }}>At the market</span>
                <span style={{ width: '18px' }}></span>
              </div>
              
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '20px 24px' }}>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '16px', overflowY: 'auto', marginBottom: '20px' }}>
                  {audioLines.map((line, i) => (
                    <div key={i} style={{ display: 'flex', gap: '12px', opacity: audioPlaying ? 1 : 0.6 }}>
                      <div style={{ width: '4px', background: line.isPartner, borderRadius: '2px', flex: 'none' }}></div>
                      <div>
                        <div style={{ fontSize: '16px', fontWeight: 600, lineHeight: 1.3, marginBottom: '2px' }}>{line.native}</div>
                        <div style={{ fontSize: '13px', color: '#A99C90' }}>{line.en}</div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div style={{ background: '#2A2320', borderRadius: '20px', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', flex: 'none' }}>
                  <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,.1)', borderRadius: '2px' }}>
                    <div style={{ width: '30%', height: '100%', background: '#DB5338', borderRadius: '2px' }}></div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
                    <span style={{ fontSize: '20px', color: '#9A8E84' }}>⏮</span>
                    <div onClick={() => setAudioPlaying(!audioPlaying)} style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#FBF6EE', color: '#2A2320', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', cursor: 'pointer' }}>
                      {audioPlaying ? '⏸' : '▶'}
                    </div>
                    <span style={{ fontSize: '20px', color: '#9A8E84' }}>⏭</span>
                  </div>
                  <div style={{ fontSize: '12px', color: '#9A8E84', letterSpacing: '.05em', textTransform: 'uppercase' }}>Shadowing enabled</div>
                </div>
              </div>
            </div>
          )}

          {/* ===== REVIEW ===== */}
          {view === 'review' && (
            <div className="cd-screen" style={{ position: 'absolute', inset: 0, background: '#5B3A56', color: '#F3ECE2', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 24px 0', fontSize: '12px', fontWeight: 600 }}>
                <span onClick={() => setView('you')} style={{ cursor: 'pointer', fontSize: '18px', color: '#B5A99E' }}>✕</span>
                <span style={{ letterSpacing: '1px' }}>●●● ◔</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 24px 0' }}>
                <div style={{ flex: 1, height: '6px', background: 'rgba(255,255,255,.18)', borderRadius: '99px', overflow: 'hidden' }}>
                  <div style={{ width: '30%', height: '100%', background: '#E1A23A', borderRadius: '99px' }}></div>
                </div>
                <span style={{ fontSize: '12px', color: 'rgba(255,255,255,.7)' }}>3/10</span>
              </div>
              <div style={{ textAlign: 'center', padding: '16px 24px 0' }}>
                <div style={{ fontSize: '11px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,.6)' }}>Words about to fade — let&apos;s refresh</div>
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '0 30px', textAlign: 'center' }}>
                <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: '46px', lineHeight: 1, marginBottom: '14px' }}>el mercado</div>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,.7)', marginBottom: '20px' }}>From: At the market</div>
                <div onClick={() => {}} style={{ border: '1px dashed rgba(255,255,255,.35)', borderRadius: '14px', padding: '14px 20px', fontSize: '14px', color: 'rgba(255,255,255,.85)', cursor: 'pointer' }}>Tap to reveal meaning</div>
              </div>
              <div style={{ padding: '0 24px 30px' }}>
                <div style={{ fontSize: '11px', textAlign: 'center', color: 'rgba(255,255,255,.55)', marginBottom: '12px' }}>How well did you know it?</div>
                <div style={{ display: 'flex', gap: '9px' }}>
                  <div onClick={() => setView('you')} style={{ flex: 1, background: 'rgba(255,255,255,.12)', borderRadius: '12px', padding: '12px', textAlign: 'center', fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}>Forgot</div>
                  <div onClick={() => setView('you')} style={{ flex: 1, background: 'rgba(255,255,255,.12)', borderRadius: '12px', padding: '12px', textAlign: 'center', fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}>Hard</div>
                  <div onClick={() => setView('you')} style={{ flex: 1, background: '#E1A23A', color: '#3A2417', borderRadius: '12px', padding: '12px', textAlign: 'center', fontSize: '13px', fontWeight: 700, cursor: 'pointer' }}>Easy</div>
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
          {!picker && ['home', 'speakHub', 'immerse', 'social', 'you'].includes(view) && (
            <div style={{ height: '70px', background: '#FAF1E4', display: 'flex', position: 'absolute', bottom: '16px', left: '16px', right: '16px', zIndex: 10, padding: '0 10px', borderRadius: '35px', boxShadow: '0 8px 24px rgba(0,0,0,0.15)', border: '2px solid #F3E5D0' }}>
              <div onClick={() => setView('home')} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: view === 'home' ? '#C44738' : '#B5A99E', position: 'relative' }}>
                {view === 'home' && <div style={{ position: 'absolute', top: '10px', width: '40px', height: '3px', background: '#C44738', borderRadius: '2px' }}></div>}
                <span style={{ fontSize: '24px', marginTop: '6px' }}>🗺️</span>
                <span style={{ fontSize: '11px', marginTop: '4px', fontWeight: 600 }}>Story</span>
              </div>
              <div onClick={() => setView('speakHub')} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: view === 'speakHub' ? '#DB5338' : '#B5A99E' }}>
                <span style={{ fontSize: '20px' }}>◇</span>
                <span style={{ fontSize: '10px', marginTop: '2px', fontWeight: 600 }}>Speak</span>
              </div>
              <div onClick={() => setView('immerse')} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: view === 'immerse' ? '#DB5338' : '#B5A99E' }}>
                <span style={{ fontSize: '20px' }}>❖</span>
                <span style={{ fontSize: '10px', marginTop: '2px', fontWeight: 600 }}>Immerse</span>
              </div>
              <div onClick={() => setView('social')} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: view === 'social' ? '#DB5338' : '#B5A99E' }}>
                <span style={{ fontSize: '20px' }}>⚇</span>
                <span style={{ fontSize: '10px', marginTop: '2px', fontWeight: 600 }}>Together</span>
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

          {/* Toast Notification UI */}
          {toast && (
            <div style={{ position: 'absolute', bottom: '80px', left: '50%', transform: 'translateX(-50%)', background: '#DB5338', color: '#fff', padding: '12px 20px', borderRadius: '12px', fontSize: '14px', fontWeight: 600, zIndex: 9999, boxShadow: '0 8px 16px rgba(219,83,56,0.3)', animation: 'popIn 0.3s ease-out forwards', whiteSpace: 'nowrap', maxWidth: '90%' }}>
              {toast}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
