const fs = require('fs');
const path = require('path');

const languagesFile = path.join(__dirname, '../src/lib/languages.ts');

function main() {
  const content = fs.readFileSync(languagesFile, 'utf8');

  const langsMatch = content.match(/export const LANGS:\s*any\s*=\s*({[\s\S]*});?/);
  if (!langsMatch) {
    console.error("Could not parse LANGS object.");
    process.exit(1);
  }

  const LANGS = eval(`(${langsMatch[1]})`);
  const updatedLangs = {};
  
  for (const langCode in LANGS) {
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

    const chapter1 = {
      chapterTitle: `Chapter 1 · ${lang.chapter || 'The Basics'}`,
      lessonTitle: "Greetings & warmth",
      goalTitle: `Build it: ${lang.goalShort}`,
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
      clip: lang.clip,
      podcast: lang.podcast,
      article: lang.article,
      reader: lang.reader,
      reviewWord: lang.reviewWord,
      reviewSource: lang.reviewSource,
      reviewMeaning: lang.reviewMeaning,
    };

    updatedLangs[langCode] = {
      ...globalProps,
      chapters: [chapter1]
    };
  }

  const newContent = `// Auto-extracted from prototype and refactored\nexport const LANGS: any = ${JSON.stringify(updatedLangs, null, 2)};\n`;
  fs.writeFileSync(languagesFile, newContent);
  console.log("Refactored languages.ts successfully.");
}

main();
