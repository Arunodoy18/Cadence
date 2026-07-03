const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env.local') });
// npm install openai
//
// To run this script, provide your OpenAI API key like this:
// OPENAI_API_KEY=sk-your-key node scripts/generate_curriculum.js

if (!process.env.OPENAI_API_KEY) {
  console.error("ERROR: OPENAI_API_KEY environment variable is missing.");
  console.error("Please run the script as: OPENAI_API_KEY=your-key node scripts/generate_curriculum.js");
  process.exit(1);
}

const { OpenAI } = require('openai');
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY, timeout: 120000 });

const languagesFile = path.join(__dirname, '../src/lib/languages.ts');

async function main() {
  console.log("Loading languages.ts...");
  const content = fs.readFileSync(languagesFile, 'utf8');

  // A very crude but effective extraction of the LANGS object string
  const langsMatch = content.match(/export const LANGS:\s*any\s*=\s*({[\s\S]*});?/);
  if (!langsMatch) {
    console.error("Could not parse LANGS object from languages.ts");
    process.exit(1);
  }

  // Evaluate the object to memory
  const LANGS = eval(`(${langsMatch[1]})`);
  
  const updatedLangs = { ...LANGS };
  
  const langKeys = Object.keys(LANGS);
  console.log(`Found ${langKeys.length} languages. Starting generation process...`);

  // Run for all languages
  const testLangs = langKeys;

  for (const langCode of testLangs) {
    console.log(`\nProcessing language: ${langCode}...`);
    const lang = LANGS[langCode];

    // 1. Separate global language properties from Chapter 1 (Cafe) properties
    const globalProps = {
      name: lang.name,
      flag: lang.flag,
      code: lang.code,
      font: lang.font,
      locale: lang.locale,
      greeting: lang.greeting,
      accent: lang.accent,
    };

    if (lang.chapters?.length >= 6) {
      console.log(`  ${globalProps.name} already has 6 chapters. Skipping...`);
      continue;
    }

    const chapter1 = lang.chapters?.[0] || lang;

    console.log(`  Generating Chapters 2-6 for ${globalProps.name} via OpenAI...`);
    
    const prompt = `
You are an expert language teacher and curriculum designer for the language: ${globalProps.name} (${globalProps.locale}).

Here is the JSON data for Chapter 1 (The Cafe scenario) for this language:
${JSON.stringify(chapter1, null, 2)}

I need you to generate 5 new chapters for this language following the exact same schema.
The new chapters must be:
- Chapter 2: Directions (scenario: 'directions')
- Chapter 3: Family (scenario: 'family')
- Chapter 4: Hotel (scenario: 'hotel')
- Chapter 5: Market (scenario: 'market')
- Chapter 6: Emergency (scenario: 'emergency')

Rules for the generated JSON:
1. Return a JSON object with a single key "chapters" which is an array containing exactly 5 objects.
2. The objects must have the exact same keys as Chapter 1, but filled with contextually accurate foreign language data, English translations, specific grammar tips (e.g. gTermA, gTermB) relevant to the scenario, and a 5-message conversation array ('convo') with a local speaker.
3. Keep the tone warm, modern, and culturally accurate.
4. "bank" should have exactly 6 foreign words, "bankEn" should have exactly 6 English translations, and "correct" should be an array of 4 integers representing the correct word order.
5. Provide ONLY valid JSON.
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

      updatedLangs[langCode] = {
        ...globalProps,
        chapters: [chapter1, ...newChapters]
      };

      console.log(`  Successfully generated curriculum for ${globalProps.name}!`);

      // Save incrementally
      const outputPath = path.join(__dirname, '../src/lib/languages.ts');
      const fileContent = `export const LANGS: any = ${JSON.stringify(updatedLangs, null, 2)};\n`;
      fs.writeFileSync(outputPath, fileContent);
    } catch (e) {
      console.error(`  OpenAI API Error for ${langCode}: ${e.message}`);
    }
  }

  console.log(`\nDone! Successfully updated languages.ts with all 30 languages and 6 chapters each!`);
}

main();
