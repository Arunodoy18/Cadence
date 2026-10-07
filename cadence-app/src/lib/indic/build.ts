import type { LanguageData } from '../languages';

// Compact authoring format for a course chapter. The builder expands it into the
// full chapter object the app screens read (same shape as the generated courses
// in languages.ts), so each language file only has to contain what is genuinely
// language-specific: the words, sentences, and culture notes.

// A reader segment is either plain text, or [word, English definition] — the
// words are tappable in the Immerse reader.
export type Seg = string | [string, string];
// Conversation line: who speaks, the native text, and either the English
// translation (partner lines) or short feedback on the learner's line.
export type Line = ['p' | 'u', string, string];

export interface ChapterInput {
  ct: string; // chapter title suffix: native word + English, e.g. "चहा Chai culture"
  // who you talk to
  partner: string; // native + Latin, e.g. "विजय Vijay"
  role: string;
  place: string;
  scenarioTitle: string;
  // the build-the-sentence lesson
  prompt: string;
  hint: string;
  bank: string[];
  bankEn: string[];
  correct: number[];
  okTitle: string;
  okBody: string;
  noBody: string;
  // culture
  cultureCaption: string;
  cultureTitle: string;
  cultureBody: string;
  culturePhrase: string;
  milestone: string;
  // live conversation + feedback
  convo: Line[];
  debrief: [string, string][];
  // grammar card
  grammarMini: string;
  grammarTitle: string;
  grammarIntro: string;
  A: [string, string, string];
  B: [string, string, string];
  // immerse + review
  clip: string;
  podcast: string;
  article: string;
  reader: Seg[];
  reviewWord: string;
  reviewSource: string;
  reviewMeaning: string;
  // optional overrides of the shared English scaffolding
  goalTitle?: string;
  goalLine?: string;
  goalShort?: string;
  scenarioSub?: string;
}

// English scaffolding that is identical across languages for a given chapter.
const SHARED: Record<number, { lesson: string; goalTitle: string; goalLine: string; goalShort: string; scenario: string; sub: string }> = {
  1: { lesson: 'Greetings & warmth', goalTitle: 'Build it: order a drink', goalLine: 'Order a drink and make small talk.', goalShort: 'order a drink', scenario: 'cafe', sub: 'Roleplay · order a drink & chat' },
  2: { lesson: 'Asking the way', goalTitle: 'Find it: ask for directions', goalLine: 'Ask for directions to a place.', goalShort: 'ask directions', scenario: 'directions', sub: 'Roleplay · ask for directions & proceed' },
  3: { lesson: 'Meet the family', goalTitle: 'Share it: describe family', goalLine: 'Talk about your family.', goalShort: 'describe family', scenario: 'family', sub: 'Roleplay · introduce your family' },
  4: { lesson: 'Checking in', goalTitle: 'Check it: book a room', goalLine: 'Book a hotel room and ask for amenities.', goalShort: 'book room', scenario: 'hotel', sub: 'Roleplay · check in & query services' },
  5: { lesson: 'Shopping & prices', goalTitle: 'Buy it: negotiate price', goalLine: 'Shop and haggle for a good price.', goalShort: 'shop & haggle', scenario: 'market', sub: 'Roleplay · negotiate prices & purchase' },
  6: { lesson: 'Getting help', goalTitle: 'Act it: call for help', goalLine: 'Make an emergency call and seek help.', goalShort: 'call for help', scenario: 'emergency', sub: 'Roleplay · seek urgent assistance' },
};

export function chapter(n: number, langName: string, o: ChapterInput): any {
  const s = SHARED[n];
  const latin = (o.partner.match(/[A-Za-z][A-Za-z ]*$/)?.[0] || o.partner).trim();
  return {
    chapterTitle: `Chapter ${n} · ${o.ct}`,
    lessonTitle: s.lesson,
    goalTitle: o.goalTitle ?? s.goalTitle,
    goalLine: o.goalLine ?? (n === 3 ? `Talk about your family in ${langName}.` : s.goalLine),
    goalShort: o.goalShort ?? s.goalShort,
    scenario: s.scenario,
    partnerName: o.partner,
    partnerInitial: latin[0].toUpperCase(),
    partnerRole: o.role,
    partnerPlace: o.place,
    scenarioTitle: o.scenarioTitle,
    scenarioSub: o.scenarioSub ?? s.sub,
    lessonPromptEn: o.prompt,
    lessonHint: o.hint,
    bank: o.bank,
    bankEn: o.bankEn,
    correct: o.correct,
    lessonCorrectTitle: o.okTitle,
    lessonCorrectBody: o.okBody,
    lessonWrongBody: o.noBody,
    cultureCaption: o.cultureCaption,
    cultureTitle: o.cultureTitle,
    cultureBody: o.cultureBody,
    culturePhrase: o.culturePhrase,
    milestoneTitle: o.milestone,
    convo: o.convo.map(([who, native, x]) => (who === 'p' ? { who, n: native, en: x } : { who, n: native, fb: x })),
    debrief: o.debrief.map(([title, body]) => ({ title, body })),
    grammarMini: o.grammarMini,
    grammarTitle: o.grammarTitle,
    grammarIntro: o.grammarIntro,
    gTermA: o.A[0],
    gDescA: o.A[1],
    gExA: o.A[2],
    gTermB: o.B[0],
    gDescB: o.B[1],
    gExB: o.B[2],
    clip: o.clip,
    podcast: o.podcast,
    article: o.article,
    reader: o.reader.map((seg) => (typeof seg === 'string' ? { t: seg } : { w: seg[0], d: seg[1] })),
    reviewWord: o.reviewWord,
    reviewSource: o.reviewSource,
    reviewMeaning: o.reviewMeaning,
  };
}

export interface LangMeta {
  name: string;
  code: string;
  font: string;
  locale: string;
  greeting: string;
  accent: string;
}

export function course(meta: LangMeta, chapters: ChapterInput[]): LanguageData {
  return {
    name: meta.name,
    flag: '🇮🇳',
    code: meta.code,
    font: meta.font,
    locale: meta.locale,
    greeting: meta.greeting,
    accent: meta.accent,
    chapters: chapters.map((c, i) => chapter(i + 1, meta.name, c)),
  };
}
