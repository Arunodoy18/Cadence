const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env.local') });

if (!process.env.OPENAI_API_KEY) {
  console.error("ERROR: OPENAI_API_KEY environment variable is missing.");
  process.exit(1);
}

const { OpenAI } = require('openai');
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY, timeout: 300000 });

const languagesFile = path.join(__dirname, '../src/lib/languages.ts');

async function main() {
  console.log("Loading languages.ts...");
  const content = fs.readFileSync(languagesFile, 'utf8');

  // A very crude but effective extraction of the LANGS object string
  const langsMatch = content.match(/export const LANGS:\s*(?:any|Record<[^>]+>)\s*=\s*({[\s\S]*});?/);
  if (!langsMatch) {
    console.error("Could not parse LANGS object from languages.ts");
    process.exit(1);
  }

  // Evaluate the object to memory
  const LANGS = eval(`(${langsMatch[1]})`);
  const updatedLangs = { ...LANGS };
  
  const langKeys = Object.keys(LANGS);
  console.log(`Found ${langKeys.length} languages. Starting generation process for Chapters 7-15...`);

  for (const langCode of langKeys) {
    console.log(`\nProcessing language: ${langCode}...`);
    const lang = LANGS[langCode];

    const globalProps = {
      name: lang.name,
      flag: lang.flag,
      code: lang.code,
      font: lang.font,
      locale: lang.locale,
      greeting: lang.greeting,
      accent: lang.accent,
    };

    if (!lang.chapters || lang.chapters.length < 6) {
      console.log(`  ${globalProps.name} does not have the base 6 chapters. Skipping...`);
      continue;
    }
    if (lang.chapters.length >= 15) {
      console.log(`  ${globalProps.name} already has 15 chapters. Skipping...`);
      continue;
    }

    const chapter1 = lang.chapters[0];

    console.log(`  Generating Chapters 7-15 for ${globalProps.name} via OpenAI...`);
    
    const prompt = `
You are an expert language teacher and curriculum designer for the language: ${globalProps.name} (${globalProps.locale}).

Here is the JSON data structure for a chapter (Chapter 1) for this language:
${JSON.stringify(chapter1, null, 2)}

I need you to generate 9 completely new, high-quality, authentic chapters (Chapters 7 through 15) for this language following the exact same schema.
The new chapters must be:
- Chapter 7: Airport (scenario: 'airport')
- Chapter 8: Restaurant Dinner (scenario: 'dinner')
- Chapter 9: Job Interview (scenario: 'interview')
- Chapter 10: Pharmacy (scenario: 'pharmacy')
- Chapter 11: Debate (scenario: 'debate')
- Chapter 12: Free Talk (scenario: 'freetalk')
- Chapter 13: Placement Check (scenario: 'placement')
- Chapter 14: At the Bank (scenario: 'bank')
- Chapter 15: Taking the Train (scenario: 'train')

Rules for the generated JSON:
1. Return a JSON object with a single key "chapters" which is an array containing exactly 9 objects.
2. The objects must have the exact same keys as the provided Chapter 1 example, but filled with contextually accurate foreign language data, English translations, specific grammar tips (e.g. gTermA, gTermB) relevant to the scenario, and a 5-message conversation array ('convo') with a local speaker.
3. Keep the tone warm, modern, and culturally accurate.
4. "bank" should have exactly 6 foreign words, "bankEn" should have exactly 6 English translations, and "correct" should be an array of 4 integers representing the correct word order.
5. Make sure the chapter titles are culturally appropriate and accurately numbered (7 to 15).
6. Provide ONLY valid JSON.
`;

    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [{ role: "user", content: prompt }],
        response_format: { type: "json_object" }
      });

      const responseContent = completion.choices[0].message.content;
      
      let newChapters = [];
      try {
        const parsed = JSON.parse(responseContent);
        newChapters = parsed.chapters || parsed;
      } catch (e) {
        console.error(`  Failed to parse JSON for ${langCode}: ${e.message}`);
        continue;
      }

      if (newChapters.length !== 9) {
         console.warn(`  Warning: Generated ${newChapters.length} chapters instead of 9 for ${langCode}`);
      }

      updatedLangs[langCode] = {
        ...globalProps,
        chapters: [...lang.chapters, ...newChapters]
      };

      console.log(`  Successfully generated curriculum for ${globalProps.name}!`);

      // Save incrementally so we don't lose progress if it crashes
      const outputPath = path.join(__dirname, '../src/lib/languages.ts');
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

export const LANGS: Record<string, LanguageData> = ${JSON.stringify(updatedLangs, null, 2)};
`;
      fs.writeFileSync(outputPath, fileContent);
    } catch (e) {
      console.error(`  OpenAI API Error for ${langCode}: ${e.message}`);
    }
  }

  console.log(`\nDone! Successfully updated languages.ts with all 15 chapters for 30 languages!`);
}

main();
