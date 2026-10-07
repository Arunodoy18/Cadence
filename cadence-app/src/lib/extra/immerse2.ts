import type { ImmItem } from './immerse1';

const A = (title: string, englishTitle: string, text: string): ImmItem => ({ type: 'Article', title, duration: '3 min', level: 'A2', text, englishTitle });
const P = (title: string, englishTitle: string, text: string): ImmItem => ({ type: 'Podcast', title, duration: '5 min', level: 'A2', text, englishTitle });
const C = (title: string, englishTitle: string, text: string): ImmItem => ({ type: 'Culture', title, duration: '2 min', level: 'A2', text, englishTitle });

export const IMMERSE_2: Record<string, ImmItem[]> = {
  pt: [
    A('Um dia em São Paulo', 'A Day in São Paulo', 'São Paulo é a maior cidade do Brasil. No domingo passado, visitei o Parque Ibirapuera e o Museu de Arte. Estava muito sol, então andei bastante. No almoço, comi feijoada num restaurante pequeno. Estava deliciosa. À noite, passeei com amigos pela Avenida Paulista. Foi uma viagem maravilhosa!'),
    P('Comprar roupa na feira', 'Buying Clothes at the Market', 'A: Bom dia! Quanto custa esta camisa azul?\nB: Bom dia. Custa cinquenta reais.\nA: Está um pouco cara. Tem desconto?\nB: Se levar também esta calça, faço as duas por setenta reais.\nA: Combinado. Onde fica o provador?\nB: Lá no fundo, à direita. Que tamanho procura?\nA: Preciso do tamanho M.\nB: Aqui está. Espero que goste!'),
    C('O jeitinho brasileiro', 'The Brazilian Warmth', 'No Brasil, as pessoas se cumprimentam com beijo no rosto ou abraço, mesmo quando se conhecem há pouco tempo. Chegar com atraso a uma festa é normal. Os brasileiros gostam de conversar, de rir e de receber visitas. “Fique à vontade” é uma frase que se ouve em todas as casas.'),
  ],
  he: [
    A('יום בירושלים', 'A Day in Jerusalem', 'ירושלים היא עיר עתיקה ויפה. ביום ראשון האחרון הלכתי לכותל המערבי ולעיר העתיקה. היה חם מאוד, אז שתיתי הרבה מים. בצהריים אכלתי חומוס במסעדה קטנה. הוא היה טעים מאוד. בערב טיילתי עם חברים בשוק מחנה יהודה. היה טיול נהדר!'),
    P('קניית בגדים בשוק', 'Buying Clothes at the Market', 'א: שלום! כמה עולה החולצה הכחולה הזאת?\nב: שלום. היא עולה מאה שקל.\nא: זה קצת יקר. אפשר הנחה?\nב: אם תיקח גם את המכנסיים האלה, אתן לך שניים בעוד מאה וחמישים.\nא: בסדר. איפה חדר ההלבשה?\nב: מאחור, מימין. איזו מידה אתה צריך?\nא: אני צריך מידה בינונית.\nב: בבקשה. אני מקווה שתאהב!'),
    C('ארוחת שישי', 'Friday Dinner', 'בישראל, ארוחת ערב שבת היא זמן מיוחד למשפחה. מדליקים נרות, אומרים ברכה על היין ואוכלים חלה. כולם יושבים יחד ומדברים לאט. גם חברים וחיילים ללא משפחה מוזמנים לבוא. השולחן מלא באוכל והבית מלא בצחוק.'),
  ],
  sv: [
    A('En dag i Stockholm', 'A Day in Stockholm', 'Stockholm är Sveriges huvudstad. Förra söndagen besökte jag Vasamuseet och Gamla stan. Vädret var fint, så jag gick mycket. Till lunch åt jag köttbullar på ett litet café. De var jättegoda. På kvällen promenerade jag med vänner vid vattnet. Det var en underbar resa!'),
    P('Köpa kläder på marknaden', 'Buying Clothes at the Market', 'A: God dag! Vad kostar den här blå skjortan?\nB: God dag. Den kostar tvåhundra kronor.\nA: Det är lite dyrt. Finns det rabatt?\nB: Om du tar byxorna också får du båda för trehundra kronor.\nA: Bra. Var finns provrummet?\nB: Där bak till höger. Vilken storlek behöver du?\nA: Jag behöver storlek M.\nB: Varsågod. Jag hoppas att den passar!'),
    C('Fika', 'Fika', 'Fika är en svensk tradition. Man tar en paus med kaffe och något sött, ofta en kanelbulle. Kollegor och vänner sitter ner och pratar. Det handlar inte om att bara dricka kaffe, utan om att ta sig tid för varandra. Många arbetsplatser har fika två gånger om dagen.'),
  ],
  ro: [
    A('O zi la București', 'A Day in Bucharest', 'București este capitala României. Duminica trecută am vizitat Palatul Parlamentului și Parcul Herăstrău. Era foarte cald, așa că am băut multă apă. La prânz am mâncat sarmale într-un restaurant mic. Erau delicioase. Seara m-am plimbat cu prietenii prin Centrul Vechi. A fost o excursie minunată!'),
    P('Cumpărând haine la piață', 'Buying Clothes at the Market', 'A: Bună ziua! Cât costă această cămașă albastră?\nB: Bună ziua. Costă o sută de lei.\nA: Este puțin scumpă. Se poate o reducere?\nB: Dacă luați și pantalonii aceștia, vi le dau pe amândouă cu o sută cincizeci de lei.\nA: Bine. Unde este cabina de probă?\nB: În spate, în dreapta. Ce mărime căutați?\nA: Am nevoie de mărimea M.\nB: Poftiți. Sper să vă placă!'),
    C('Mărțișorul', 'The Mărțișor', 'Pe 1 martie, românii își dăruiesc mărțișoare: un șnur alb și roșu cu un mic obiect. Bărbații le oferă femeilor ca semn de primăvară și de sănătate. Șnurul se poartă la piept timp de câteva zile. Este una dintre cele mai vechi tradiții din România.'),
  ],
  cs: [
    A('Den v Praze', 'A Day in Prague', 'Praha je hlavní město České republiky. Minulou neděli jsem navštívil Pražský hrad a Karlův most. Bylo hezky, a tak jsem hodně chodil. Na oběd jsem si dal svíčkovou v malé restauraci. Byla výborná. Večer jsem se s přáteli procházel podél Vltavy. Byl to nádherný výlet!'),
    P('Nákup oblečení na trhu', 'Buying Clothes at the Market', 'A: Dobrý den! Kolik stojí tahle modrá košile?\nB: Dobrý den. Stojí pět set korun.\nA: Je trochu drahá. Dá se slevit?\nB: Když si vezmete i tyhle kalhoty, dám vám obojí za sedm set.\nA: Dobře. Kde je zkušební kabinka?\nB: Vzadu vpravo. Jakou velikost hledáte?\nA: Potřebuji velikost M.\nB: Tady máte. Doufám, že se vám bude líbit!'),
    C('Pivo a hospoda', 'Beer and the Pub', 'V České republice je pivo součástí života. V hospodě se lidé scházejí po práci, povídají si a dávají si pivo s jídlem. Pivo se platí nakonec a číšník ho nosí, dokud ho nechcete přestat. Česká hospoda je místo, kde se setkávají přátelé i sousedé.'),
  ],
  hu: [
    A('Egy nap Budapesten', 'A Day in Budapest', 'Budapest Magyarország fővárosa. Múlt vasárnap meglátogattam a Parlamentet és a Halászbástyát. Nagyon szép idő volt, ezért sokat sétáltam. Ebédre gulyást ettem egy kis étteremben. Nagyon finom volt. Este a barátaimmal a Duna-parton sétáltam. Csodálatos kirándulás volt!'),
    P('Ruhavásárlás a piacon', 'Buying Clothes at the Market', 'A: Jó napot! Mennyibe kerül ez a kék ing?\nB: Jó napot. Ötezer forintba kerül.\nA: Egy kicsit drága. Lehet kedvezményt kapni?\nB: Ha ezt a nadrágot is megveszi, mindkettőt hétezerért adom.\nA: Rendben. Hol van a próbafülke?\nB: Hátul, jobbra. Milyen méretet keres?\nA: M méretre van szükségem.\nB: Tessék. Remélem, tetszeni fog!'),
    C('A fürdőkultúra', 'Thermal Bath Culture', 'Magyarországon sok termálfürdő van. Az emberek télen is szívesen mennek a meleg vízbe. A fürdőben beszélgetnek, sakkoznak és pihennek. A budapesti Széchenyi fürdő az egyik leghíresebb. A fürdőzés a hétköznapi élet fontos része.'),
  ],
  fi: [
    A('Päivä Helsingissä', 'A Day in Helsinki', 'Helsinki on Suomen pääkaupunki. Viime sunnuntaina kävin Suomenlinnassa ja Tuomiokirkolla. Sää oli kaunis, joten kävelin paljon. Lounaaksi söin lohikeittoa pienessä kahvilassa. Se oli todella hyvää. Illalla kävelin ystävien kanssa meren rannalla. Se oli ihana retki!'),
    P('Vaatteiden osto torilla', 'Buying Clothes at the Market', 'A: Hyvää päivää! Paljonko tämä sininen paita maksaa?\nB: Hyvää päivää. Se maksaa kaksikymmentä euroa.\nA: Se on vähän kallis. Saisinko alennusta?\nB: Jos otatte nämä housut myös, saatte molemmat kolmellakymmenellä eurolla.\nA: Hyvä. Missä on sovituskoppi?\nB: Takana oikealla. Mitä kokoa etsitte?\nA: Tarvitsen koon M.\nB: Olkaa hyvä. Toivottavasti pidätte siitä!'),
    C('Sauna', 'The Sauna', 'Suomessa sauna on osa jokaista kotia. Saunassa rentoudutaan, puhdistaudutaan ja puhutaan rauhassa. Saunassa ei käytetä kiirettä eikä puhelimia. Perheet käyvät saunassa yhdessä, ja se on tärkeä viikoittainen tapa. Löylyä heitetään kiukaalle kauhalla.'),
  ],
  no: [
    A('En dag i Oslo', 'A Day in Oslo', 'Oslo er hovedstaden i Norge. Forrige søndag besøkte jeg Vigelandsparken og Operahuset. Været var fint, så jeg gikk mye. Til lunsj spiste jeg laks på en liten kafé. Den var veldig god. På kvelden gikk jeg en tur med venner langs fjorden. Det var en fantastisk tur!'),
    P('Kjøpe klær på markedet', 'Buying Clothes at the Market', 'A: God dag! Hva koster denne blå skjorten?\nB: God dag. Den koster to hundre kroner.\nA: Den er litt dyr. Får jeg rabatt?\nB: Hvis du tar buksen også, får du begge for tre hundre kroner.\nA: Bra. Hvor er prøverommet?\nB: Bak til høyre. Hvilken størrelse trenger du?\nA: Jeg trenger størrelse M.\nB: Vær så god. Jeg håper den passer!'),
    C('Friluftsliv', 'Outdoor Life', 'Nordmenn elsker friluftsliv. Mange går på tur i skogen eller fjellet hver helg, uansett vær. Man sier: «Det finnes ikke dårlig vær, bare dårlige klær.» På turen tar man med niste og kaffe på termos. Å være ute i naturen gir ro og energi.'),
  ],
  da: [
    A('En dag i København', 'A Day in Copenhagen', 'København er Danmarks hovedstad. Sidste søndag besøgte jeg Tivoli og Nyhavn. Vejret var flot, så jeg gik meget. Til frokost spiste jeg smørrebrød på en lille café. Det var rigtig lækkert. Om aftenen gik jeg en tur med venner langs havnen. Det var en vidunderlig tur!'),
    P('At købe tøj på markedet', 'Buying Clothes at the Market', 'A: Goddag! Hvad koster den her blå skjorte?\nB: Goddag. Den koster to hundrede kroner.\nA: Den er lidt dyr. Kan jeg få rabat?\nB: Hvis du også tager bukserne, får du begge for tre hundrede.\nA: Fint. Hvor er prøverummet?\nB: Bagved til højre. Hvilken størrelse skal du bruge?\nA: Jeg skal bruge størrelse M.\nB: Værsgo. Jeg håber, den passer!'),
    C('Hygge', 'Hygge', 'Hygge er et dansk ord for hyggelig stemning. Man tænder stearinlys, drikker kakao eller te og er sammen med dem, man holder af. Især om vinteren er hygge vigtigt. Man behøver ikke noget dyrt: et tæppe, en god samtale og et godt lys er nok.'),
  ],
  tl: [
    A('Isang Araw sa Maynila', 'A Day in Manila', 'Ang Maynila ang kabisera ng Pilipinas. Noong nakaraang Linggo, pumunta ako sa Intramuros at Rizal Park. Mainit ang panahon, kaya uminom ako ng maraming tubig. Sa tanghalian, kumain ako ng adobo sa maliit na karinderya. Napakasarap nito. Sa gabi, naglakad kami ng mga kaibigan ko sa tabi ng dagat. Napakagandang paglalakbay!'),
    P('Pamimili ng Damit sa Palengke', 'Buying Clothes at the Market', 'A: Magandang umaga po! Magkano po ang asul na kamisetang ito?\nB: Magandang umaga. Limang daang piso po.\nA: Medyo mahal po. Puwede po bang magpababa?\nB: Kung bibili po kayo ng pantalon na ito, ibibigay ko ang dalawa sa pitong daan.\nA: Sige po. Nasaan po ang fitting room?\nB: Sa likod po, sa kanan. Anong sukat po ang kailangan ninyo?\nA: Katamtamang sukat po.\nB: Heto po. Sana po magustuhan ninyo!'),
    C('Ang Pagmamano', 'Pagmamano', 'Sa Pilipinas, ang pagmamano ay paraan ng paggalang sa matatanda. Kinukuha mo ang kamay ng nakatatanda at idinidikit sa iyong noo, sabay sabing "Mano po." Ginagawa ito sa lolo, lola, magulang at tito o tita. Ipinapakita nito ang respeto at pagmamahal sa pamilya.'),
  ],
  bn: [
    A('ঢাকায় একদিন', 'A Day in Dhaka', 'ঢাকা বাংলাদেশের রাজধানী। গত রবিবার আমি লালবাগ কেল্লা আর আহসান মঞ্জিল দেখতে গিয়েছিলাম। খুব গরম ছিল, তাই আমি অনেক পানি খেয়েছি। দুপুরে একটি ছোট দোকানে ভর্তা আর ভাত খেয়েছি। খাবার খুব সুস্বাদু ছিল। সন্ধ্যায় বন্ধুদের সঙ্গে নদীর ধারে হেঁটেছি। কী সুন্দর ভ্রমণ ছিল!'),
    P('বাজারে জামা কেনা', 'Buying Clothes at the Market', 'ক: নমস্কার! এই নীল শার্টটির দাম কত?\nখ: নমস্কার। পাঁচশো টাকা।\nক: একটু বেশি। কিছু কমানো যায়?\nখ: এই প্যান্টটাও নিলে দুটো সাতশো টাকায় দেব।\nক: ঠিক আছে। ট্রায়াল রুম কোথায়?\nখ: পেছনে, ডান দিকে। কোন সাইজ লাগবে?\nক: মাঝারি সাইজ লাগবে।\nখ: এই নিন। আশা করি পছন্দ হবে!'),
    C('বাংলা নববর্ষ', 'Bengali New Year', 'পহেলা বৈশাখ হলো বাংলা নববর্ষ। এই দিনে মানুষ নতুন জামা পরে, মেলায় যায় এবং পান্তা-ইলিশ খায়। ব্যবসায়ীরা নতুন হিসাবের খাতা খোলেন, যাকে বলে হালখাতা। সবাই একে অপরকে বলে "শুভ নববর্ষ"। এটি আনন্দ আর নতুন শুরুর দিন।'),
  ],
};
