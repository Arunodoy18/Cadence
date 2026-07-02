const fs = require('fs');
const path = require('path');

async function main() {
  const file = path.join(__dirname, '../src/lib/languages.ts');
  let content = fs.readFileSync(file, 'utf8');
  
  // We'll just do a quick regex replacement for bank: [...] 
  // Wait, writing a script that calls OpenAI requires installing openai package 
  // or using fetch directly.
  
  const API_KEY = process.env.OPEN_AI_API || process.env.OPENAI_API_KEY;
  if (!API_KEY) {
    console.error("No OPEN_AI_API key found.");
    return;
  }

  const bankRegex = /([a-z]+): \{\s*name: "([^"]+)",[\s\S]*?bank: (\[.*?\])/g;
  let match;
  let matches = [];
  while ((match = bankRegex.exec(content)) !== null) {
    matches.push({ langCode: match[1], langName: match[2], bankStr: match[3], index: match.index, length: match[0].length });
  }

  for (const m of matches) {
    // Only process if bankEn is missing
    const blockStart = content.substring(m.index, m.index + m.length + 100);
    if (blockStart.includes('bankEn:')) continue;

    const bankArr = JSON.parse(m.bankStr);
    
    console.log(`Translating ${m.langName}... ${m.bankStr}`);
    
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [{
          role: 'system',
          content: `You are a translator. Given a language name and an array of words/phrases, return a JSON array of English translations of the exact same length. Keep translations brief (1-3 words max). Return ONLY a valid JSON array of strings, nothing else. Example output: ["I would like", "a coffee", "with milk"]`
        }, {
          role: 'user',
          content: `Language: ${m.langName}. Array: ${m.bankStr}`
        }],
        temperature: 0.1
      })
    });
    
    const data = await response.json();
    let translatedArrStr = data.choices[0].message.content.trim();
    // clean up if markdown
    if (translatedArrStr.startsWith('```json')) {
      translatedArrStr = translatedArrStr.replace(/```json/g, '').replace(/```/g, '').trim();
    }
    
    console.log(`  -> ${translatedArrStr}`);
    
    // Replace in content
    const searchStr = `bank: ${m.bankStr}`;
    const replaceStr = `bank: ${m.bankStr}, bankEn: ${translatedArrStr}`;
    content = content.replace(searchStr, replaceStr);
  }

  fs.writeFileSync(file, content);
  console.log("Done translating banks!");
}

main().catch(console.error);
