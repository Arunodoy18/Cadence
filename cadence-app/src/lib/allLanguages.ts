import { LANGS as BASE, type LanguageData } from './languages';
import { marathi } from './indic/marathi';
import { gujarati } from './indic/gujarati';
import { assamese } from './indic/assamese';
import { malayalam } from './indic/malayalam';
import { kannada } from './indic/kannada';

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

export const LANGS: Record<string, LanguageData> = (() => {
  const out: Record<string, LanguageData> = {};
  for (const [code, data] of Object.entries(BASE)) {
    out[code] = data;
    if (code === 'hi') Object.assign(out, ADDED);
  }
  // Safety: if 'hi' were ever removed, still expose the new languages.
  for (const [code, data] of Object.entries(ADDED)) if (!out[code]) out[code] = data;
  return out;
})();
