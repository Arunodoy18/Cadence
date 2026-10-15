// Real course content (Chapter 1 of each language) used by the interactive demo,
// plus a native greeting for every language the app teaches.
export type Demo = {
  code: string; name: string; native: string; loc: string; rtl?: boolean;
  partner: string; open: string; openEn: string;
  prompt: string; bank: string[]; bankEn: string[]; correct: number[];
  reply: string; replyEn: string; phrase: string;
};

export const DEMOS: Demo[] = [
  { code: 'hi', name: 'Hindi', native: 'हिन्दी', loc: 'hi-IN', partner: 'Ravi · chai wala', open: 'नमस्ते! क्या लेंगे आप?', openEn: 'Hello! What will you have?',
    prompt: "I'd like one tea, please.", bank: ['मुझे', 'एक', 'चाय', 'चाहिए', 'पानी', 'दो'], bankEn: ['I need', 'a', 'tea', 'please', 'water', 'two'], correct: [0, 1, 2, 3],
    reply: 'अदरक वाली या साधारण?', replyEn: 'Ginger or plain?', phrase: '“कितने का है?” — how much is it?' },
  { code: 'es', name: 'Spanish', native: 'Español', loc: 'es-ES', partner: 'Lucía · barista', open: '¿Qué te pongo, guapa?', openEn: 'What can I get you, dear?',
    prompt: "I'd like a coffee with milk, please.", bank: ['Quería', 'un café', 'con leche', 'por favor', 'la cuenta', 'sin'], bankEn: ['I wanted', 'a coffee', 'with milk', 'please', 'the bill', 'without'], correct: [0, 1, 2, 3],
    reply: '¡Marchando! ¿Algo más?', replyEn: 'Coming right up! Anything else?', phrase: '“¿Me cobras?” — how locals ask for the bill' },
  { code: 'ja', name: 'Japanese', native: '日本語', loc: 'ja-JP', partner: 'Haruka · café', open: 'いらっしゃいませ。ご注文は？', openEn: 'Welcome! What would you like to order?',
    prompt: 'A coffee, please.', bank: ['コーヒー', 'を', 'ください', 'お願いします', '一つ', 'は'], bankEn: ['coffee', 'object marker', 'please give', 'thank you', 'one', 'topic marker'], correct: [0, 1, 2],
    reply: 'かしこまりました。以上ですか？', replyEn: 'Certainly. Is that all?', phrase: '“お願いします” — the all-purpose polite please' },
  { code: 'ml', name: 'Malayalam', native: 'മലയാളം', loc: 'ml-IN', partner: 'Mohan · chayakada', open: 'നമസ്കാരം! എന്താ വേണ്ടത്?', openEn: 'Hello! What would you like?',
    prompt: "I'd like one tea.", bank: ['എനിക്ക്', 'ഒരു', 'ചായ', 'വേണം', 'വെള്ളം', 'രണ്ട്'], bankEn: ['to me', 'one', 'tea', 'is wanted', 'water', 'two'], correct: [0, 1, 2, 3],
    reply: 'ഇഞ്ചി ചായയാണോ സാധാരണ ചായയാണോ?', replyEn: 'Ginger tea or plain tea?', phrase: '“എത്രയാണ്?” — how much is it?' },
  { code: 'ar', name: 'Arabic', native: 'العربية', loc: 'ar-SA', rtl: true, partner: 'Layla · café', open: 'مرحباً! ماذا تريد؟', openEn: 'Hello! What would you like?',
    prompt: 'I would like a coffee, please.', bank: ['أريد', 'قهوة', 'من فضلك', 'الحساب', 'ماء', 'شاي'], bankEn: ['I want', 'coffee', 'please', 'the bill', 'water', 'tea'], correct: [0, 1, 2],
    reply: 'حاضر. أي شيء آخر؟', replyEn: 'Right away. Anything else?', phrase: '“شكراً” — thank you' },
  { code: 'kn', name: 'Kannada', native: 'ಕನ್ನಡ', loc: 'kn-IN', partner: 'Ramesh · darshini', open: 'ನಮಸ್ಕಾರ! ಏನು ಕೊಡಲಿ?', openEn: 'Hello! What shall I give you?',
    prompt: "I'd like one coffee.", bank: ['ನನಗೆ', 'ಒಂದು', 'ಕಾಫಿ', 'ಬೇಕು', 'ನೀರು', 'ಎರಡು'], bankEn: ['to me', 'one', 'coffee', 'is wanted', 'water', 'two'], correct: [0, 1, 2, 3],
    reply: 'ಸಕ್ಕರೆ ಹಾಕಿ ಅಥವಾ ಬೇಡವೇ?', replyEn: 'With sugar or without?', phrase: '“ಎಷ್ಟು?” — how much?' },
];

export type Greeting = { text: string; name: string; loc: string; indian?: boolean };
export const GREETINGS: Greeting[] = [
  { text: 'नमस्ते', name: 'Hindi', loc: 'hi-IN', indian: true }, { text: 'नमस्कार', name: 'Marathi', loc: 'mr-IN', indian: true },
  { text: 'નમસ્તે', name: 'Gujarati', loc: 'gu-IN', indian: true }, { text: 'নমস্কাৰ', name: 'Assamese', loc: 'as-IN', indian: true },
  { text: 'നമസ്കാരം', name: 'Malayalam', loc: 'ml-IN', indian: true }, { text: 'ನಮಸ್ಕಾರ', name: 'Kannada', loc: 'kn-IN', indian: true },
  { text: 'নমস্কার', name: 'Bengali', loc: 'bn-IN', indian: true },
  { text: 'Hola', name: 'Spanish', loc: 'es-ES' }, { text: 'Bonjour', name: 'French', loc: 'fr-FR' }, { text: 'Hallo', name: 'German', loc: 'de-DE' },
  { text: 'Ciao', name: 'Italian', loc: 'it-IT' }, { text: 'Olá', name: 'Portuguese', loc: 'pt-BR' }, { text: 'こんにちは', name: 'Japanese', loc: 'ja-JP' },
  { text: '안녕하세요', name: 'Korean', loc: 'ko-KR' }, { text: '你好', name: 'Mandarin', loc: 'zh-CN' }, { text: 'مرحباً', name: 'Arabic', loc: 'ar-SA' },
  { text: 'Здравствуйте', name: 'Russian', loc: 'ru-RU' }, { text: 'Merhaba', name: 'Turkish', loc: 'tr-TR' }, { text: 'Xin chào', name: 'Vietnamese', loc: 'vi-VN' },
  { text: 'Hallo', name: 'Dutch', loc: 'nl-NL' }, { text: 'Cześć', name: 'Polish', loc: 'pl-PL' }, { text: 'Halo', name: 'Indonesian', loc: 'id-ID' },
  { text: 'สวัสดี', name: 'Thai', loc: 'th-TH' }, { text: 'Γεια σου', name: 'Greek', loc: 'el-GR' }, { text: 'שלום', name: 'Hebrew', loc: 'he-IL' },
  { text: 'Привіт', name: 'Ukrainian', loc: 'uk-UA' }, { text: 'Habari', name: 'Swahili', loc: 'sw-KE' }, { text: 'Hej', name: 'Swedish', loc: 'sv-SE' },
  { text: 'Bună', name: 'Romanian', loc: 'ro-RO' }, { text: 'Ahoj', name: 'Czech', loc: 'cs-CZ' }, { text: 'Szia', name: 'Hungarian', loc: 'hu-HU' },
  { text: 'Moi', name: 'Finnish', loc: 'fi-FI' }, { text: 'Hei', name: 'Norwegian', loc: 'nb-NO' }, { text: 'Hej', name: 'Danish', loc: 'da-DK' },
  { text: 'Kumusta', name: 'Filipino', loc: 'fil-PH' },
];
