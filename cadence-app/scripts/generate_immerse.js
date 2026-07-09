const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
require('dotenv').config({ path: path.join(__dirname, '../.env.local') });

if (!process.env.OPENAI_API_KEY && !process.env.OPEN_AI_API) {
  console.error("ERROR: OPENAI_API_KEY environment variable is missing.");
  process.exit(1);
}

const { OpenAI } = require('openai');
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || process.env.OPEN_AI_API, timeout: 300000 });

// The list of languages
const languages = [
  { code: 'es', name: 'Spanish' },
  { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' },
  { code: 'it', name: 'Italian' },
  { code: 'ja', name: 'Japanese' },
  { code: 'ko', name: 'Korean' },
  { code: 'zh', name: 'Mandarin Chinese' },
  { code: 'hi', name: 'Hindi' },
  { code: 'ar', name: 'Arabic' },
  { code: 'he', name: 'Hebrew' },
  { code: 'ru', name: 'Russian' },
  { code: 'pt', name: 'Portuguese' },
  { code: 'tr', name: 'Turkish' },
  { code: 'vi', name: 'Vietnamese' },
  { code: 'pl', name: 'Polish' },
  { code: 'nl', name: 'Dutch' },
  { code: 'sv', name: 'Swedish' },
  { code: 'no', name: 'Norwegian' },
  { code: 'da', name: 'Danish' },
  { code: 'fi', name: 'Finnish' },
  { code: 'el', name: 'Greek' },
  { code: 'th', name: 'Thai' },
  { code: 'id', name: 'Indonesian' },
  { code: 'ms', name: 'Malay' },
  { code: 'uk', name: 'Ukrainian' },
  { code: 'cs', name: 'Czech' },
  { code: 'ro', name: 'Romanian' },
  { code: 'hu', name: 'Hungarian' },
  { code: 'bn', name: 'Bengali' },
];

// Target file
const outFile = path.join(__dirname, '../src/lib/immerse.json');

async function generateImmerseForLanguage(langName) {
  const prompt = `You are a curriculum designer for a language learning app.
Generate exactly 3 items for the "Immerse" tab for learners of ${langName}.
The items should be at the A2 (Upper Beginner) CEFR level.

Item 1: Article (Short informative text about a common topic like food, travel, or daily life)
Item 2: Podcast (A short dialogue between two people on an everyday topic)
Item 3: Culture (A short snippet explaining a cultural nuance or tradition specific to this language/region)

Return ONLY valid JSON matching this schema:
[
  {
    "type": "Article",
    "title": "[Title of article in ${langName}]",
    "duration": "3 min",
    "level": "A2",
    "text": "[The full text in ${langName}]. Ensure it's roughly 50-70 words long.",
    "englishTitle": "[English translation of title]"
  },
  {
    "type": "Podcast",
    "title": "[Title of podcast episode in ${langName}]",
    "duration": "5 min",
    "level": "A2",
    "text": "[The full dialogue text in ${langName}, e.g. 'A: Hello. B: Hi!']. Ensure it's roughly 50-70 words long.",
    "englishTitle": "[English translation of title]"
  },
  {
    "type": "Culture",
    "title": "[Title of culture snippet in ${langName}]",
    "duration": "2 min",
    "level": "A2",
    "text": "[The full snippet in ${langName}]. Ensure it's roughly 40-50 words long.",
    "englishTitle": "[English translation of title]"
  }
]
`;

  const response = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [{ role: 'user', content: prompt }],
    response_format: { type: 'json_object' } // Wait, JSON object needs an object wrapper
  });

  let raw = response.choices[0].message.content.trim();
  // We requested an array, but if we used json_object we should have requested an object. Let's fix the prompt or parse carefully.
  return JSON.parse(raw);
}

async function main() {
  let existingData = {};
  if (fs.existsSync(outFile)) {
    try {
      existingData = JSON.parse(fs.readFileSync(outFile, 'utf8'));
    } catch(e) {}
  }

  for (const lang of languages) {
    if (existingData[lang.code] && existingData[lang.code].length === 3) {
      console.log(`Skipping ${lang.name}, already exists.`);
      continue;
    }
    
    console.log(`Generating Immerse data for ${lang.name}...`);
    try {
      // Because we use json_object, let's wrap the prompt
      const prompt = `You are a curriculum designer for a language learning app.
Generate exactly 3 items for the "Immerse" tab for learners of ${lang.name}.
The items should be at the A2 CEFR level.

Return ONLY a JSON object with a single key "items" containing an array of 3 objects matching this schema:
{
  "items": [
    {
      "type": "Article",
      "title": "[Title of article in ${lang.name}]",
      "duration": "3 min",
      "level": "A2",
      "text": "[The full text in ${lang.name}]. Ensure it's roughly 50-70 words long.",
      "englishTitle": "[English translation of title]"
    },
    {
      "type": "Podcast",
      "title": "[Title of podcast episode in ${lang.name}]",
      "duration": "5 min",
      "level": "A2",
      "text": "[The full dialogue text in ${lang.name}, e.g. 'A: Hello. B: Hi!']. Ensure it's roughly 50-70 words long.",
      "englishTitle": "[English translation of title]"
    },
    {
      "type": "Culture",
      "title": "[Title of culture snippet in ${lang.name}]",
      "duration": "2 min",
      "level": "A2",
      "text": "[The full snippet in ${lang.name}]. Ensure it's roughly 40-50 words long.",
      "englishTitle": "[English translation of title]"
    }
  ]
}`;

      const response = await openai.chat.completions.create({
        model: 'gpt-4o',
        messages: [{ role: 'user', content: prompt }],
        response_format: { type: 'json_object' }
      });

      const parsed = JSON.parse(response.choices[0].message.content);
      existingData[lang.code] = parsed.items;
      
      fs.writeFileSync(outFile, JSON.stringify(existingData, null, 2));
      console.log(`Saved ${lang.name} successfully.`);
    } catch (e) {
      console.error(`Failed ${lang.name}:`, e.message);
    }
  }
  
  console.log("All done!");
}

main();
