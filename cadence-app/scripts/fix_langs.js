const fs = require('fs');
const path = require('path');

const languagesFile = path.join(__dirname, '../src/lib/languages.ts');

function main() {
  const content = fs.readFileSync(languagesFile, 'utf8');
  const langsMatch = content.match(/export const LANGS:\s*(?:any|Record<[^>]+>)\s*=\s*({[\s\S]*});?/);
  if (!langsMatch) {
    console.error("Could not parse LANGS");
    return;
  }

  const LANGS = eval(`(${langsMatch[1]})`);

  for (const langCode in LANGS) {
    const lang = LANGS[langCode];
    if (lang.chapters) {
      let validChapters = [];
      for (const ch of lang.chapters) {
        if (typeof ch === 'object' && ch !== null && !Array.isArray(ch) && ch.chapterTitle) {
          validChapters.push(ch);
        } else {
          console.log(`Bad chapter found in ${langCode}, truncating back to 6 chapters.`);
          validChapters = lang.chapters.slice(0, 6);
          break;
        }
      }
      
      // If it still has bad data or generated weird counts, just truncate to 6
      if (validChapters.length > 15) {
         validChapters = validChapters.slice(0, 15);
      }
      
      lang.chapters = validChapters;
    }
  }

  const fileContent = `export interface LanguageData {
  name: string;
  flag: string;
  code: string;
  font: string;
  locale: string;
  greeting: string;
  accent: string;
  chapters: Record<string, any>[];
  [key: string]: any;
}

export const LANGS: Record<string, LanguageData> = ${JSON.stringify(LANGS, null, 2)};
`;

  fs.writeFileSync(languagesFile, fileContent);
  console.log("languages.ts cleaned up successfully.");
}

main();
