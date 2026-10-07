import { LANGS as BASE, type LanguageData } from './languages';
import { marathi } from './indic/marathi';
import { gujarati } from './indic/gujarati';
import { assamese } from './indic/assamese';
import { malayalam } from './indic/malayalam';
import { kannada } from './indic/kannada';
import { chapter } from './indic/build';
import { portugueseExtra } from './extra/portuguese';
import { dutchExtra } from './extra/dutch';
import { hebrewExtra } from './extra/hebrew';

// The generated courses live in languages.ts; the hand-authored Indian-language
// courses live in ./indic. This merges them and keeps the Indian languages
// together, right after Hindi, in the language picker.
const ADDED: Record<string, LanguageData> = {
  mr: marathi,
  gu: gujarati,
  as: assamese,
  ml: malayalam,
  kn: kannada,
};

const merged: Record<string, LanguageData> = (() => {
  const out: Record<string, LanguageData> = {};
  for (const [code, data] of Object.entries(BASE)) {
    out[code] = data;
    if (code === 'hi') Object.assign(out, ADDED);
  }
  // Safety: if 'hi' were ever removed, still expose the new languages.
  for (const [code, data] of Object.entries(ADDED)) if (!out[code]) out[code] = data;
  return out;
})();

// ---------------------------------------------------------------------------
// Course hygiene. The generated courses in languages.ts have gaps (empty shell
// chapters, missing optional fields, lessons that can't be completed). Rather
// than let any of that crash a screen or strand a learner, every chapter is
// repaired or — if there is nothing to teach — left out of the course.
// ---------------------------------------------------------------------------
const hasItems = (v: any) => Array.isArray(v) && v.length > 0;

function repairChapter(c: any): any | null {
  // Essentials: without these a lesson cannot be played at all.
  if (!c || !hasItems(c.bank) || !hasItems(c.correct) || !hasItems(c.convo) || !c.lessonPromptEn || !c.scenario) return null;

  // Hints that don't line up one-to-one with the words would show the wrong
  // translation under a tile — better to show none.
  const aligned = Array.isArray(c.bankEn) && c.bankEn.length === c.bank.length;
  const ch = { ...c, bank: [...c.bank], bankEn: aligned ? [...c.bankEn] : undefined, correct: [...c.correct] };

  // A tile can only be placed once, so an answer that needs the same word twice
  // would be impossible. Give each repeat its own tile.
  const seen = new Set<number>();
  ch.correct = ch.correct.map((idx: number) => {
    if (!seen.has(idx)) { seen.add(idx); return idx; }
    ch.bank.push(ch.bank[idx]);
    if (ch.bankEn) ch.bankEn.push(ch.bankEn[idx] ?? '');
    return ch.bank.length - 1;
  });
  ch.correct = ch.correct.filter((i: number) => i >= 0 && i < ch.bank.length);
  if (!ch.correct.length) return null;

  // Conversation: speakers are 'u' (the learner) or the partner (some generated
  // courses label the partner with an initial instead of 'p'). Always open with the partner.
  let convo = ch.convo.filter((m: any) => m && m.n).map((m: any) => ({ ...m, who: m.who === 'u' ? 'u' : 'p' }));
  while (convo.length && convo[0].who !== 'p') convo.shift();
  if (!convo.length) return null;
  ch.convo = convo;

  ch.debrief = (ch.debrief || []).filter((d: any) => d && d.title && d.body);
  ch.reader = hasItems(ch.reader) ? ch.reader : ch.cultureBody ? [{ t: ch.cultureBody }] : [{ t: ch.lessonPromptEn }];
  const firstWord = ch.bank[ch.correct[0]];
  ch.reviewWord = ch.reviewWord || firstWord;
  ch.reviewMeaning = ch.reviewMeaning || ch.bankEn?.[ch.correct[0]] || 'Lesson term';
  ch.reviewSource = ch.reviewSource || 'from your lesson';
  ch.milestoneTitle = ch.milestoneTitle || `You can now ${ch.goalShort || 'finish this chapter'}.`;
  ch.clip = ch.clip || ch.cultureCaption || ch.scenarioTitle;
  ch.podcast = ch.podcast || ch.lessonTitle;
  ch.article = ch.article || ch.cultureTitle || ch.lessonTitle;
  ch.lessonCorrectTitle = ch.lessonCorrectTitle || 'Well done! 🎉';
  ch.gTermA = ch.gTermA || '';
  ch.gTermB = ch.gTermB || '';
  return ch;
}

// Languages whose generated course only had working chapters 1–2: the rest are
// hand-written (chapters 3–6) and appended after the repaired base chapters.
const EXTRA_CHAPTERS: Record<string, any[]> = { pt: portugueseExtra, nl: dutchExtra, he: hebrewExtra };

export const LANGS: Record<string, LanguageData> = Object.fromEntries(
  Object.entries(merged).map(([code, lang]) => {
    const base = (lang.chapters || []).map(repairChapter).filter(Boolean);
    const extra = (EXTRA_CHAPTERS[code] || []).map((input: any, i: number) => repairChapter(chapter(base.length + i + 1, lang.name, input)));
    const chapters = [...base, ...extra]
      .filter(Boolean)
      // Keep the numbering in the title honest if shells in the middle were dropped.
      .map((c: any, i: number) => ({ ...c, chapterTitle: String(c.chapterTitle).replace(/^Chapter \d+/, `Chapter ${i + 1}`) }));
    return [code, { ...lang, chapters }];
  })
);
