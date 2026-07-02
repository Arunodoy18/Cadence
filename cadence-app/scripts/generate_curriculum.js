const fs = require('fs');
const path = require('path');

// NOTE: Before running this script, you must install the openai package:
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
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

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
  
  const updatedLangs = {};
  
  const langKeys = Object.keys(LANGS);
  console.log(`Found ${langKeys.length} languages. Starting generation process...`);

  // We will process just ONE language for now (es) to verify everything works perfectly.
  // Change this to langKeys to do all languages.
  const testLangs = ['es'];

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

    const chapter1 = {
      chapterTitle: "Chapter 1 · The Basics",
      lessonTitle: "Greetings & warmth",
      goalTitle: "Build it: order a coffee",
      goalLine: lang.goalLine,
      goalShort: lang.goalShort,
      scenario: 'cafe',
      partnerName: lang.partnerName,
      partnerInitial: lang.partnerInitial,
      partnerRole: lang.partnerRole,
      partnerPlace: lang.partnerPlace,
      scenarioTitle: lang.scenarioTitle,
      scenarioSub: lang.scenarioSub,
      lessonPromptEn: lang.lessonPromptEn,
      lessonHint: lang.lessonHint,
      bank: lang.bank,
      bankEn: lang.bankEn,
      correct: lang.correct,
      lessonCorrectTitle: lang.lessonCorrectTitle,
      lessonCorrectBody: lang.lessonCorrectBody,
      lessonWrongBody: lang.lessonWrongBody,
      cultureCaption: lang.cultureCaption,
      cultureTitle: lang.cultureTitle,
      cultureBody: lang.cultureBody,
      culturePhrase: lang.culturePhrase,
      milestoneTitle: lang.milestoneTitle,
      convo: lang.convo,
      debrief: lang.debrief,
      grammarMini: lang.grammarMini,
      grammarTitle: lang.grammarTitle,
      grammarIntro: lang.grammarIntro,
      gTermA: lang.gTermA,
      gDescA: lang.gDescA,
      gExA: lang.gExA,
      gTermB: lang.gTermB,
      gDescB: lang.gDescB,
      gExB: lang.gExB,
    };

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

    } catch (e) {
      console.error(`  OpenAI API Error for ${langCode}: ${e.message}`);
    }
  }

  const outputPath = path.join(__dirname, '../src/lib/languages_test.json');
  fs.writeFileSync(outputPath, JSON.stringify(updatedLangs, null, 2));
  console.log(`\nDone! Wrote test data to ${outputPath}.`);
}

main();
