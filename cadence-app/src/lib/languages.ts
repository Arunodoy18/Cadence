export interface LanguageData {
  name: string;
  flag: string;
  code: string;
  font: string;
  locale: string;
  greeting: string;
  accent: string;
  chapters: Record<string, unknown>[];
}

export const LANGS: Record<string, LanguageData> = {
  "es": {
    "name": "Spanish",
    "flag": "🇪🇸",
    "code": "ES",
    "font": "",
    "locale": "es-ES",
    "greeting": "Buenos días, Maya",
    "accent": "Spain (Castilian)",
    "chapters": [
      {
        "chapterTitle": "Chapter 1 · Café culture",
        "lessonTitle": "Greetings & warmth",
        "goalTitle": "Build it: order a coffee",
        "goalLine": "Order a coffee and make small talk.",
        "goalShort": "order a coffee",
        "scenario": "cafe",
        "partnerName": "Lucía",
        "partnerInitial": "L",
        "partnerRole": "barista",
        "partnerPlace": "Madrid café",
        "scenarioTitle": "At the café · Madrid",
        "scenarioSub": "Roleplay · order a coffee & small talk",
        "lessonPromptEn": "I'd like a coffee with milk, please.",
        "lessonHint": "Why “con”?",
        "bank": [
          "Quería",
          "un café",
          "con leche",
          "por favor",
          "la cuenta",
          "sin"
        ],
        "bankEn": [
          "I wanted",
          "a coffee",
          "with milk",
          "please",
          "the bill",
          "without"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "¡Perfecto! 🎉",
        "lessonCorrectBody": "“Quería” is the polite, softened way to order — literally “I wanted.”",
        "lessonWrongBody": "Start with the polite verb, then what you want.",
        "cultureCaption": "A café in Sevilla · 11am",
        "cultureTitle": "A coffee is never just a coffee",
        "cultureBody": "In Spain, ordering “para llevar” (to go) is rare — coffee is a moment to sit, not fuel to grab. Lingering is the point, and no waiter will rush you.",
        "culturePhrase": "“¿Me cobras?” — how locals ask for the bill, instead of waving.",
        "milestoneTitle": "You can now order a coffee — and chat while you do.",
        "convo": [
          {
            "who": "p",
            "n": "¿Qué te pongo, guapa?",
            "en": "What can I get you, dear?"
          },
          {
            "who": "u",
            "n": "Un café con leche, por favor.",
            "fb": "Nice — try adding “para llevar”"
          },
          {
            "who": "p",
            "n": "¡Marchando! ¿Algo más?",
            "en": "Coming right up! Anything else?"
          },
          {
            "who": "u",
            "n": "No, gracias. ¿Me cobras?",
            "fb": "Perfect — locals ask for the bill this way"
          },
          {
            "who": "p",
            "n": "Claro, son dos euros.",
            "en": "Of course — that's two euros."
          }
        ],
        "debrief": [
          {
            "title": "“para yevar” → “para llevar”",
            "body": "Your “ll” sounded like a soft y — in Spain it's a firmer “ly.”"
          },
          {
            "title": "More natural: “¿Me cobras?”",
            "body": "“la cuenta” works, but locals shorten it in a café."
          }
        ],
        "grammarMini": "por vs para",
        "grammarTitle": "“por” vs “para” — the 10-second rule",
        "grammarIntro": "Both become “for” in English. The split is simpler than it looks:",
        "gTermA": "por",
        "gDescA": "cause / reason — “because of”",
        "gExA": "Gracias por el café.",
        "gTermB": "para",
        "gDescB": "goal / destination — “in order to”",
        "gExB": "Un café para llevar.",
        "clip": "La Tomatina, explicada por los locales",
        "podcast": "Café con Mateo — ep. 4",
        "article": "El secreto del café con hielo",
        "reader": [
          {
            "t": "En el sur de España, cuando hace calor, mucha gente pide un "
          },
          {
            "w": "café con hielo",
            "d": "iced coffee — hot coffee served with a glass of ice on the side"
          },
          {
            "t": ". El camarero trae un café caliente y un vaso "
          },
          {
            "w": "aparte",
            "d": "adv. · separate, on the side"
          },
          {
            "t": " lleno de hielo. Tú mismo lo "
          },
          {
            "w": "mezclas",
            "d": "you mix (from mezclar — to mix)"
          },
          {
            "t": ". Es un pequeño ritual del verano andaluz."
          }
        ],
        "reviewWord": "llevar",
        "reviewSource": "from your café conversation, 4 days ago",
        "reviewMeaning": "to carry / to take (away)"
      },
      {
        "chapterTitle": "Chapter 2 · Finding Your Way",
        "lessonTitle": "Asking for Directions",
        "goalTitle": "Build it: ask for directions",
        "goalLine": "Ask for directions to a famous landmark.",
        "goalShort": "ask for directions",
        "scenario": "directions",
        "partnerName": "Carlos",
        "partnerInitial": "C",
        "partnerRole": "local",
        "partnerPlace": "Madrid streets",
        "scenarioTitle": "On the Streets · Madrid",
        "scenarioSub": "Roleplay · ask for directions to a landmark",
        "lessonPromptEn": "Excuse me, how do I get to the Prado Museum?",
        "lessonHint": "Using 'a' with places.",
        "bank": [
          "Perdona",
          "¿cómo llego",
          "al",
          "Museo del Prado",
          "sigue recto",
          "la izquierda"
        ],
        "bankEn": [
          "Excuse me",
          "how do I get",
          "to the",
          "Prado Museum",
          "go straight",
          "the left"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "¡Muy bien! 🎉",
        "lessonCorrectBody": "Use 'a' plus 'el' to say 'to the' in directional phrases.",
        "lessonWrongBody": "Start with a polite phrase, followed by your destination.",
        "cultureCaption": "A plaza in Madrid · 1pm",
        "cultureTitle": "Navigating by Landmarks",
        "cultureBody": "In Spain, directions often include landmarks rather than street names.",
        "culturePhrase": "“¿Dónde está...?” — a straightforward way to ask where something is.",
        "milestoneTitle": "You can now ask for directions — and navigate smoothly.",
        "convo": [
          {
            "who": "p",
            "n": "¿Te ayudo en algo?",
            "en": "Can I help you with something?"
          },
          {
            "who": "u",
            "n": "¿Cómo llego al Museo del Prado?",
            "fb": "Clear — you're using the 'a + el' contraction correctly."
          },
          {
            "who": "p",
            "n": "Sigue recto y gira a la izquierda.",
            "en": "Go straight and turn left."
          },
          {
            "who": "u",
            "n": "Gracias. ¿Está lejos?",
            "fb": "Great follow-up question."
          },
          {
            "who": "p",
            "n": "No, está a unos diez minutos.",
            "en": "No, it's about ten minutes away."
          }
        ],
        "debrief": [
          {
            "title": "Using 'a' in directions",
            "body": "'a' signals direction — like 'to' in English."
          },
          {
            "title": "Landmarks over street names",
            "body": "Remember to ask about landmarks for precise directions."
          }
        ],
        "grammarMini": "a vs en",
        "grammarTitle": "“a” vs “en” — the directional duo",
        "grammarIntro": "Essential for giving directions in Spanish.",
        "gTermA": "a",
        "gDescA": "motion / direction — “to”",
        "gExA": "Voy a la plaza.",
        "gTermB": "en",
        "gDescB": "location / position — “in”",
        "gExB": "Estoy en la plaza.",
        "clip": "Exploring Madrid on Foot",
        "podcast": "Nomadic Voices — ep. 7",
        "article": "Hiking in Madrid — A Local's Guide",
        "reader": [
          {
            "t": "En Madrid, muchas personas prefieren caminar por la ciudad. Las "
          },
          {
            "w": "calles",
            "d": "streets — public roads in a city"
          },
          {
            "t": " son cómodas para pasear y cuentan con "
          },
          {
            "w": "señalización",
            "d": "signage — the use of signs"
          },
          {
            "t": " clara. Es fácil "
          },
          {
            "w": "orientarse",
            "d": "to get one's bearings — to find one's way"
          },
          {
            "t": " con un mapa."
          }
        ],
        "reviewWord": "girar",
        "reviewSource": "from your street interaction, 3 days ago",
        "reviewMeaning": "to turn"
      },
      {
        "chapterTitle": "Chapter 3 · Family Ties",
        "lessonTitle": "Introducing Your Family",
        "goalTitle": "Build it: introduce your family",
        "goalLine": "Introduce your family members to someone.",
        "goalShort": "introduce your family",
        "scenario": "family",
        "partnerName": "María",
        "partnerInitial": "M",
        "partnerRole": "neighbor",
        "partnerPlace": "Spanish family gathering",
        "scenarioTitle": "At the Family Gathering",
        "scenarioSub": "Roleplay · introduce your family members",
        "lessonPromptEn": "This is my sister, Ana.",
        "lessonHint": "Pay attention to 'mi' usage.",
        "bank": [
          "Esta es",
          "mi hermana",
          "Ana",
          "mi madre",
          "mi hermano",
          "mi padre"
        ],
        "bankEn": [
          "This is",
          "my sister",
          "Ana",
          "my mother",
          "my brother",
          "my father"
        ],
        "correct": [
          0,
          1,
          2,
          4
        ],
        "lessonCorrectTitle": "¡Bien hecho! 🎉",
        "lessonCorrectBody": "Preface family member introductions with 'mi' for 'my.'",
        "lessonWrongBody": "Start with introductions and use 'mi' appropriately.",
        "cultureCaption": "A family's dining room · 1pm",
        "cultureTitle": "Family is Everything",
        "cultureBody": "Spanish families are typically very close-knit, and gatherings are frequent.",
        "culturePhrase": "“¿Cómo está la familia?” — a common greeting showing interest in one's family.",
        "milestoneTitle": "You can now introduce family members naturally.",
        "convo": [
          {
            "who": "p",
            "n": "¿Quiénes son estos?",
            "en": "Who are these?"
          },
          {
            "who": "u",
            "n": "Esta es mi hermana, Ana.",
            "fb": "Nice introduction — 'mi' noted!"
          },
          {
            "who": "p",
            "n": "Encantada, Ana. ¿Y esta señora?",
            "en": "Pleased to meet you, Ana. And this lady?"
          },
          {
            "who": "u",
            "n": "Es mi madre, Lucía.",
            "fb": "Perfect — clear and concise."
          },
          {
            "who": "p",
            "n": "Un placer, Lucía.",
            "en": "A pleasure, Lucía."
          }
        ],
        "debrief": [
          {
            "title": "Using 'mi' for family",
            "body": "In Spanish, use 'mi' for 'my' to introduce family."
          },
          {
            "title": "Warmth in Introductions",
            "body": "Introductions are a way to show respect and care."
          }
        ],
        "grammarMini": "mi vs mis",
        "grammarTitle": "“mi” vs “mis” — singular vs plural",
        "grammarIntro": "Understanding the difference in introducing family.",
        "gTermA": "mi",
        "gDescA": "used for a single family member",
        "gExA": "Mi hermana es alta.",
        "gTermB": "mis",
        "gDescB": "used for multiple family members",
        "gExB": "Mis hermanos son altos.",
        "clip": "Family Festivities in Spain",
        "podcast": "The Spanish Family — ep. 5",
        "article": "Spanish Family Traditions Through the Ages",
        "reader": [
          {
            "t": "Las familias en España son conocidas por su "
          },
          {
            "w": "unidad",
            "d": "unity — being together as one"
          },
          {
            "t": " y su sentido de "
          },
          {
            "w": "comunidad",
            "d": "community — a feeling of fellowship"
          },
          {
            "t": ". Los "
          },
          {
            "w": "abuelos",
            "d": "grandparents — parents of one's parents"
          },
          {
            "t": " juegan un papel clave."
          }
        ],
        "reviewWord": "familia",
        "reviewSource": "from your family gathering, 2 days ago",
        "reviewMeaning": "family"
      },
      {
        "chapterTitle": "Chapter 4 · Staying at the Hotel",
        "lessonTitle": "Checking Into Your Room",
        "goalTitle": "Build it: check in at a hotel",
        "goalLine": "Check into a hotel and confirm your reservation.",
        "goalShort": "check in at a hotel",
        "scenario": "hotel",
        "partnerName": "Javier",
        "partnerInitial": "J",
        "partnerRole": "hotel receptionist",
        "partnerPlace": "Seville hotel",
        "scenarioTitle": "At the Hotel Front Desk",
        "scenarioSub": "Roleplay · check-in and confirm reservation",
        "lessonPromptEn": "I have a reservation under the name Pérez.",
        "lessonHint": "Focus on 'una' usage.",
        "bank": [
          "Tengo",
          "una reserva",
          "a nombre de",
          "Pérez",
          "una habitación",
          "doble"
        ],
        "bankEn": [
          "I have",
          "a reservation",
          "under the name",
          "Pérez",
          "a room",
          "double"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "¡Exacto! 🎉",
        "lessonCorrectBody": "For reservations, use 'una reserva' — it's gendered, like all nouns.",
        "lessonWrongBody": "Begin with your assertion, follow with the reservation details.",
        "cultureCaption": "A hotel lobby in Seville · 3pm",
        "cultureTitle": "Hotels and Reservations",
        "cultureBody": "Confirming your booking with a name is standard in Spain.",
        "culturePhrase": "“¿A qué nombre está la reserva?” — the standard query at check-in.",
        "milestoneTitle": "You can check into a hotel — with confidence.",
        "convo": [
          {
            "who": "p",
            "n": "Bienvenido, ¿en qué puedo ayudarle?",
            "en": "Welcome, how can I assist you?"
          },
          {
            "who": "u",
            "n": "Tengo una reserva a nombre de Pérez.",
            "fb": "Good job — stated clearly!"
          },
          {
            "who": "p",
            "n": "Perfecto, aquí está su llave.",
            "en": "Perfect, here is your key."
          },
          {
            "who": "u",
            "n": "Gracias, ¿el desayuno está incluido?",
            "fb": "Great question to include in check-in!"
          },
          {
            "who": "p",
            "n": "Sí, el desayuno es de 7 a 10.",
            "en": "Yes, breakfast is from 7 to 10."
          }
        ],
        "debrief": [
          {
            "title": "Using 'una' for reservations",
            "body": "Reserve rooms and services using 'una' — a must in formal settings."
          },
          {
            "title": "Checking hotel amenities",
            "body": "Always ask about included services at check-in."
          }
        ],
        "grammarMini": "ser vs estar",
        "grammarTitle": "“ser” vs “estar” — the 'to be' twins",
        "grammarIntro": "A crucial split for expressing different states and conditions.",
        "gTermA": "ser",
        "gDescA": "identity / essence — permanent state",
        "gExA": "La habitación es grande.",
        "gTermB": "estar",
        "gDescB": "state / location — temporary condition",
        "gExB": "La habitación está limpia.",
        "clip": "Hotels of Spain — Behind the Scenes",
        "podcast": "Travel Tips España — ep. 3",
        "article": "Understanding Spanish Hotel Culture",
        "reader": [
          {
            "t": "El proceso de registro en un hotel en España es bastante "
          },
          {
            "w": "sencillo",
            "d": "simple — easy to do or understand"
          },
          {
            "t": ". Solo necesitas mostrar tu "
          },
          {
            "w": "identificación",
            "d": "identification — proof of identity"
          },
          {
            "t": " y confirmar tu "
          },
          {
            "w": "reserva",
            "d": "reservation — an arrangement to secure a place"
          },
          {
            "t": ". Todo está preparado para ti."
          }
        ],
        "reviewWord": "reserva",
        "reviewSource": "from your hotel check-in, a day ago",
        "reviewMeaning": "reservation"
      },
      {
        "chapterTitle": "Chapter 5 · Market Scenes",
        "lessonTitle": "Buying at the Market",
        "goalTitle": "Build it: buy food at a market",
        "goalLine": "Engage with vendors and purchase goods.",
        "goalShort": "buy at a market",
        "scenario": "market",
        "partnerName": "Elena",
        "partnerInitial": "E",
        "partnerRole": "vendor",
        "partnerPlace": "Valencia market",
        "scenarioTitle": "At the Market Stall",
        "scenarioSub": "Roleplay · interact and purchase at a stall",
        "lessonPromptEn": "How much for a kilo of tomatoes?",
        "lessonHint": "Consider using '¿cuánto cuesta?'",
        "bank": [
          "¿Cuánto",
          "cuesta",
          "el kilo",
          "de tomates",
          "más barato",
          "un euro"
        ],
        "bankEn": [
          "How much",
          "does it cost",
          "per kilo",
          "of tomatoes",
          "cheaper",
          "one euro"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "¡Muy bien! 🎉",
        "lessonCorrectBody": "Use '¿cuánto cuesta?' for asking prices distinctly.",
        "lessonWrongBody": "Begin with the cost inquiry, then specify the item.",
        "cultureCaption": "A bustling market in the morning",
        "cultureTitle": "Bartering with a Smile",
        "cultureBody": "Bartering is a friendly exchange, always done with respect.",
        "culturePhrase": "“¿Me haces un descuento?” — how to ask for a little price cut, politely.",
        "milestoneTitle": "You can now purchase and barter at the local market.",
        "convo": [
          {
            "who": "p",
            "n": "¿Qué desea comprar?",
            "en": "What would you like to buy?"
          },
          {
            "who": "u",
            "n": "¿Cuánto cuesta el kilo de tomates?",
            "fb": "Good start — clearly asking about price!"
          },
          {
            "who": "p",
            "n": "Son dos euros.",
            "en": "They are two euros."
          },
          {
            "who": "u",
            "n": "¿Me haces un descuento?",
            "fb": "Excellent way to politely request a discount."
          },
          {
            "who": "p",
            "n": "Bueno, uno cincuenta para ti.",
            "en": "Okay, one fifty for you."
          }
        ],
        "debrief": [
          {
            "title": "Using '¿cuánto cuesta?' with vendors",
            "body": "A respectful opener in market transactions."
          },
          {
            "title": "Successful Bartering",
            "body": "Smile, ask politely, and appreciate the offer."
          }
        ],
        "grammarMini": "cuánto vs cuántos",
        "grammarTitle": "“cuánto” vs “cuántos” — asking about quantities",
        "grammarIntro": "Know the difference when asking about price and quantity.",
        "gTermA": "cuánto",
        "gDescA": "indicates a price — singular",
        "gExA": "¿Cuánto cuesta?",
        "gTermB": "cuántos",
        "gDescB": "refers to quantity — plural",
        "gExB": "¿Cuántos tomates quieres?",
        "clip": "Market Stalls in Valencia",
        "podcast": "Foodie Adventures — ep. 10",
        "article": "The History of Spanish Markets",
        "reader": [
          {
            "t": "Los mercados en España son vibrantes y llenos de "
          },
          {
            "w": "productos",
            "d": "products — things for sale"
          },
          {
            "t": " frescos. Puedes encontrar "
          },
          {
            "w": "frutas",
            "d": "fruits — edible sweet products of some trees"
          },
          {
            "t": ", "
          },
          {
            "w": "verduras",
            "d": "vegetables — edible plants"
          },
          {
            "t": " y mucho más."
          }
        ],
        "reviewWord": "comprar",
        "reviewSource": "from your market trip, yesterday",
        "reviewMeaning": "to buy"
      },
      {
        "chapterTitle": "Chapter 6 · In Case of Emergency",
        "lessonTitle": "Handling Emergencies",
        "goalTitle": "Build it: report an emergency",
        "goalLine": "Report an emergency and seek help.",
        "goalShort": "report an emergency",
        "scenario": "emergency",
        "partnerName": "Roberto",
        "partnerInitial": "R",
        "partnerRole": "emergency operator",
        "partnerPlace": "Spanish call center",
        "scenarioTitle": "On the Emergency Call",
        "scenarioSub": "Roleplay · report and describe an emergency",
        "lessonPromptEn": "I need an ambulance right away.",
        "lessonHint": "Quick verbs like 'necesitar' are crucial.",
        "bank": [
          "Necesito",
          "una ambulancia",
          "ahora mismo",
          "urgente",
          "un médico",
          "un accidente"
        ],
        "bankEn": [
          "I need",
          "an ambulance",
          "right away",
          "urgent",
          "a doctor",
          "an accident"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "¡Buena acción! 🎉",
        "lessonCorrectBody": "Act quickly in emergencies using 'necesito.'",
        "lessonWrongBody": "Start with an urgent need, follow with the necessary action.",
        "cultureCaption": "Emergency services in Barcelona · 24/7",
        "cultureTitle": "React Immediately, Speak Clearly",
        "cultureBody": "Spanish emergency services are efficient; clarity saves time.",
        "culturePhrase": "“¡Es una emergencia!” — declare the urgency immediately.",
        "milestoneTitle": "You can now report emergencies effectively.",
        "convo": [
          {
            "who": "p",
            "n": "Buenos días, ¿cuál es su emergencia?",
            "en": "Good morning, what's your emergency?"
          },
          {
            "who": "u",
            "n": "Necesito una ambulancia ahora mismo.",
            "fb": "Urgency clear — well stated!"
          },
          {
            "who": "p",
            "n": "¿Cuál es su ubicación?",
            "en": "What is your location?"
          },
          {
            "who": "u",
            "n": "En la calle Mayor, número doce.",
            "fb": "Location precise — essential for quick response."
          },
          {
            "who": "p",
            "n": "La ayuda está en camino.",
            "en": "Help is on the way."
          }
        ],
        "debrief": [
          {
            "title": "Word Choice in Emergencies",
            "body": "Use imperative verbs like 'necesito' to signal urgency."
          },
          {
            "title": "Efficient Communication",
            "body": "Be concise and clear about the location and type of emergency."
          }
        ],
        "grammarMini": "hacer vs necesitar",
        "grammarTitle": "“hacer” vs “necesitar” — action verbs for urgency",
        "grammarIntro": "Use these key verbs to get help quickly.",
        "gTermA": "hacer",
        "gDescA": "to execute an action",
        "gExA": "¿Qué puedo hacer?",
        "gTermB": "necesitar",
        "gDescB": "to express a vital need",
        "gExB": "Necesito ayuda.",
        "clip": "Inside the Emergency Response",
        "podcast": "Safeguard Stories — ep. 12",
        "article": "Emergency Services in Spain: What to Know",
        "reader": [
          {
            "t": "En caso de emergencia en España, lo primero que debes hacer es "
          },
          {
            "w": "mantener",
            "d": "to maintain — keep steady"
          },
          {
            "t": " la calma. Luego, "
          },
          {
            "w": "comunicar",
            "d": "to communicate — share information"
          },
          {
            "t": " claramente tu "
          },
          {
            "w": "ubicación",
            "d": "location — a place or position"
          },
          {
            "t": " al operador."
          }
        ],
        "reviewWord": "ambulancia",
        "reviewSource": "from your emergency practice, today",
        "reviewMeaning": "ambulance"
      }
    
      ,{
        "chapterTitle": "Chapter 7 · Public Transport",
        "lessonTitle": "Catching the Train",
        "goalTitle": "Build it: buy a train ticket",
        "goalLine": "Purchase a ticket and ask for the platform.",
        "goalShort": "buy a train ticket",
        "scenario": "transport",
        "partnerName": "Andrés",
        "partnerInitial": "A",
        "partnerRole": "ticket agent",
        "partnerPlace": "Atocha station",
        "scenarioTitle": "At the Ticket Counter",
        "scenarioSub": "Roleplay · buy a ticket & ask for platform",
        "lessonPromptEn": "One ticket to Barcelona, please.",
        "lessonHint": "Use 'un billete' for ticket.",
        "bank": [
          "Un billete",
          "a Barcelona",
          "por favor",
          "¿cuál andén?",
          "ida y vuelta",
          "el tren"
        ],
        "bankEn": [
          "A ticket",
          "to Barcelona",
          "please",
          "which platform?",
          "round trip",
          "the train"
        ],
        "correct": [0, 1, 2],
        "lessonCorrectTitle": "¡Vámonos! 🎉",
        "lessonCorrectBody": "In Spain, 'billete' is used for transport tickets, while 'entrada' is for movies or concerts.",
        "lessonWrongBody": "Start with what you want, then the destination.",
        "cultureCaption": "Atocha Station, Madrid",
        "cultureTitle": "High-Speed Travel",
        "cultureBody": "Spain's AVE trains are among the fastest in the world. Always arrive early to pass through security.",
        "culturePhrase": "“¿De qué vía sale?” — asking which track the train departs from.",
        "milestoneTitle": "You can navigate public transport with ease.",
        "convo": [
          { "who": "p", "n": "Buenos días. ¿Adónde viaja?", "en": "Good morning. Where are you traveling to?" },
          { "who": "u", "n": "Un billete a Barcelona, por favor.", "fb": "Great! Clear destination." },
          { "who": "p", "n": "¿Solo ida o ida y vuelta?", "en": "One way or round trip?" },
          { "who": "u", "n": "Ida y vuelta. ¿De qué vía sale?", "fb": "Excellent follow up question." },
          { "who": "p", "n": "Sale de la vía tres en diez minutos.", "en": "It leaves from track three in ten minutes." }
        ],
        "debrief": [
          { "title": "Ida y vuelta", "body": "Literally means 'going and returning' — essential for round trips." },
          { "title": "Vía vs Andén", "body": "Both can mean track/platform, but 'vía' is heavily used in train stations." }
        ],
        "grammarMini": "ir vs venir",
        "grammarTitle": "“ir” (to go) vs “venir” (to come)",
        "grammarIntro": "Direction matters!",
        "gTermA": "ir",
        "gDescA": "moving away from the speaker",
        "gExA": "Voy a la estación.",
        "gTermB": "venir",
        "gDescB": "moving towards the speaker",
        "gExB": "El tren viene ahora.",
        "clip": "Riding the AVE",
        "podcast": "Transit Tales — ep. 2",
        "article": "Mastering the Renfe Network",
        "reader": [
          { "t": "Para viajar por España, el " },
          { "w": "tren", "d": "train" },
          { "t": " de alta velocidad es muy " },
          { "w": "cómodo", "d": "comfortable" },
          { "t": ". Compras el " },
          { "w": "billete", "d": "ticket" },
          { "t": " y vas al andén." }
        ],
        "reviewWord": "billete",
        "reviewSource": "from your station visit, just now",
        "reviewMeaning": "ticket"
      },
      {
        "chapterTitle": "Chapter 8 · Dining Out",
        "lessonTitle": "Ordering a Meal",
        "goalTitle": "Build it: order dinner",
        "goalLine": "Order a full meal at a restaurant.",
        "goalShort": "order dinner",
        "scenario": "restaurant",
        "partnerName": "Sofía",
        "partnerInitial": "S",
        "partnerRole": "waiter",
        "partnerPlace": "Tapas bar",
        "scenarioTitle": "At the Tapas Bar",
        "scenarioSub": "Roleplay · ordering food & drinks",
        "lessonPromptEn": "I would like the paella and a water.",
        "lessonHint": "Try using 'Me pone' for a casual order.",
        "bank": [
          "Me pone",
          "la paella",
          "y un agua",
          "para mí",
          "de primero",
          "la carta"
        ],
        "bankEn": [
          "I'll have (put for me)",
          "the paella",
          "and a water",
          "for me",
          "for starter",
          "the menu"
        ],
        "correct": [0, 1, 2],
        "lessonCorrectTitle": "¡Buen provecho! 🎉",
        "lessonCorrectBody": "'Me pone' (put for me) is the most natural way to order in a casual Spanish restaurant.",
        "lessonWrongBody": "Combine the ordering phrase with your items.",
        "cultureCaption": "Outdoor dining in Valencia",
        "cultureTitle": "Late Dinners",
        "cultureBody": "Spaniards eat dinner late, usually starting around 9 PM or 10 PM. Don't be surprised if restaurants are empty at 7 PM!",
        "culturePhrase": "“¿Qué lleva esto?” — asking what ingredients are in a dish.",
        "milestoneTitle": "You can confidently order meals.",
        "convo": [
          { "who": "p", "n": "¿Ya saben qué van a tomar?", "en": "Do you know what you are going to have?" },
          { "who": "u", "n": "Para mí, la paella, por favor.", "fb": "Great use of 'Para mí'." },
          { "who": "p", "n": "Muy bien. ¿Y para beber?", "en": "Very good. And to drink?" },
          { "who": "u", "n": "Me pone un agua con gas.", "fb": "Perfect ordering technique!" },
          { "who": "p", "n": "Enseguida se lo traigo.", "en": "I'll bring it right away." }
        ],
        "debrief": [
          { "title": "Me pone", "body": "Sounds demanding in English, but it's very standard and polite in Spain." },
          { "title": "Para mí", "body": "Useful when ordering in a group to specify what is yours." }
        ],
        "grammarMini": "saber vs conocer",
        "grammarTitle": "“saber” vs “conocer” — to know",
        "grammarIntro": "Both mean 'to know', but are used differently.",
        "gTermA": "saber",
        "gDescA": "facts, information, how to do something",
        "gExA": "Sé cocinar.",
        "gTermB": "conocer",
        "gDescB": "people, places, being familiar with",
        "gExB": "Conozco este restaurante.",
        "clip": "Tapas Etiquette",
        "podcast": "Foodie Español — ep. 4",
        "article": "The Art of the Sobremesa",
        "reader": [
          { "t": "En los restaurantes, la " },
          { "w": "sobremesa", "d": "table talk after a meal" },
          { "t": " es muy importante. La gente se queda " },
          { "w": "charlando", "d": "chatting" },
          { "t": " mucho tiempo." }
        ],
        "reviewWord": "paella",
        "reviewSource": "from your dinner, yesterday",
        "reviewMeaning": "traditional rice dish"
      },
      {
        "chapterTitle": "Chapter 9 · Hobbies & Free Time",
        "lessonTitle": "Talking About Interests",
        "goalTitle": "Build it: discuss hobbies",
        "goalLine": "Explain what you like to do in your free time.",
        "goalShort": "discuss hobbies",
        "scenario": "freetalk",
        "partnerName": "Diego",
        "partnerInitial": "D",
        "partnerRole": "new friend",
        "partnerPlace": "a park bench",
        "scenarioTitle": "Relaxing in the Park",
        "scenarioSub": "Roleplay · chatting about weekends",
        "lessonPromptEn": "I like reading and playing tennis.",
        "lessonHint": "Remember 'Me gusta' + infinitive verbs.",
        "bank": [
          "Me gusta",
          "leer",
          "y jugar al tenis",
          "el fin de semana",
          "siempre",
          "a veces"
        ],
        "bankEn": [
          "I like",
          "to read",
          "and to play tennis",
          "the weekend",
          "always",
          "sometimes"
        ],
        "correct": [0, 1, 2],
        "lessonCorrectTitle": "¡Fantástico! 🎉",
        "lessonCorrectBody": "When using multiple verbs with 'me gusta', leave them all in the infinitive.",
        "lessonWrongBody": "Start with 'Me gusta' followed by your activities.",
        "cultureCaption": "Retiro Park, Madrid",
        "cultureTitle": "Weekend Strolls",
        "cultureBody": "Sundays in Spain are for family and 'paseos' (strolls) through the city or park.",
        "culturePhrase": "“¿Qué planes tienes?” — asking about someone's plans.",
        "milestoneTitle": "You can discuss your hobbies fluently.",
        "convo": [
          { "who": "p", "n": "¿Qué sueles hacer los fines de semana?", "en": "What do you usually do on weekends?" },
          { "who": "u", "n": "Me gusta leer y salir con amigos.", "fb": "Great use of multiple infinitives!" },
          { "who": "p", "n": "¡Qué bien! Yo prefiero ir al cine.", "en": "How nice! I prefer going to the movies." },
          { "who": "u", "n": "¿Qué tipo de películas te gustan?", "fb": "Excellent conversational pivot." },
          { "who": "p", "n": "Me encantan las comedias.", "en": "I love comedies." }
        ],
        "debrief": [
          { "title": "Sueles", "body": "From 'soler' (to usually do). Very common for asking about habits." },
          { "title": "Me gustan vs Me gusta", "body": "Use 'gustan' for plural nouns, 'gusta' for singular nouns or verbs." }
        ],
        "grammarMini": "gustar",
        "grammarTitle": "How to use “gustar”",
        "grammarIntro": "It works backwards: things are pleasing to you.",
        "gTermA": "Me gusta",
        "gDescA": "for singular things or verbs",
        "gExA": "Me gusta correr.",
        "gTermB": "Me gustan",
        "gDescB": "for plural things",
        "gExB": "Me gustan los libros.",
        "clip": "Sunday in El Retiro",
        "podcast": "Hobby Chat — ep. 1",
        "article": "The Culture of El Paseo",
        "reader": [
          { "t": "El domingo es para el " },
          { "w": "ocio", "d": "leisure" },
          { "t": ". Las familias dan un " },
          { "w": "paseo", "d": "walk/stroll" },
          { "t": " por el parque y disfrutan del " },
          { "w": "sol", "d": "sun" },
          { "t": "." }
        ],
        "reviewWord": "ocio",
        "reviewSource": "from your park chat, today",
        "reviewMeaning": "leisure/free time"
      },
      {
        "chapterTitle": "Chapter 10 · Shopping for Clothes",
        "lessonTitle": "Finding the Right Fit",
        "goalTitle": "Build it: ask for a size",
        "goalLine": "Ask a store clerk for a different size.",
        "goalShort": "ask for a size",
        "scenario": "shopping",
        "partnerName": "Laura",
        "partnerInitial": "L",
        "partnerRole": "clerk",
        "partnerPlace": "Clothing store",
        "scenarioTitle": "At the Boutique",
        "scenarioSub": "Roleplay · asking for sizes & colors",
        "lessonPromptEn": "Do you have this in a larger size?",
        "lessonHint": "Use 'talla' for clothing size.",
        "bank": [
          "¿Tiene esto",
          "en una talla",
          "más grande?",
          "probar",
          "el probador",
          "pequeño"
        ],
        "bankEn": [
          "Do you have this",
          "in a size",
          "larger?",
          "to try on",
          "fitting room",
          "small"
        ],
        "correct": [0, 1, 2],
        "lessonCorrectTitle": "¡A la moda! 🎉",
        "lessonCorrectBody": "'Talla' is used for clothing sizes, while 'número' is used for shoe sizes.",
        "lessonWrongBody": "Ask if they have it, specify 'talla', then the size.",
        "cultureCaption": "Shopping street in Barcelona",
        "cultureTitle": "Rebajas Season",
        "cultureBody": "Spain has massive sales twice a year called 'Las Rebajas'—in January and July.",
        "culturePhrase": "“Me queda pequeño” — saying something is too small for you.",
        "milestoneTitle": "You can successfully shop for clothes.",
        "convo": [
          { "who": "p", "n": "¿Te puedo ayudar con algo?", "en": "Can I help you with something?" },
          { "who": "u", "n": "¿Tiene esto en una talla más grande?", "fb": "Perfectly polite and clear." },
          { "who": "p", "n": "Creo que sí. ¿Qué talla usas?", "en": "I think so. What size do you wear?" },
          { "who": "u", "n": "Uso la talla mediana. ¿Dónde están los probadores?", "fb": "Great follow-up question." },
          { "who": "p", "n": "Al fondo a la derecha.", "en": "At the back on the right." }
        ],
        "debrief": [
          { "title": "Me queda...", "body": "Use the verb 'quedar' to describe how clothes fit (e.g. me queda bien, me queda grande)." },
          { "title": "Usar vs Llevar", "body": "You 'use' (usar) a size, but you 'wear' (llevar) the clothing." }
        ],
        "grammarMini": "comparatives",
        "grammarTitle": "Making Comparisons",
        "grammarIntro": "How to say 'more' or 'less'.",
        "gTermA": "más... que",
        "gDescA": "more than",
        "gExA": "Es más grande que el otro.",
        "gTermB": "menos... que",
        "gDescB": "less than",
        "gExB": "Es menos caro.",
        "clip": "Las Rebajas",
        "podcast": "Moda Española — ep. 3",
        "article": "A Guide to Spanish Sizes",
        "reader": [
          { "t": "En enero empiezan las " },
          { "w": "rebajas", "d": "sales" },
          { "t": ". Las tiendas ofrecen grandes " },
          { "w": "descuentos", "d": "discounts" },
          { "t": " y la gente compra " },
          { "w": "ropa", "d": "clothes" },
          { "t": " nueva." }
        ],
        "reviewWord": "talla",
        "reviewSource": "from your shopping trip, yesterday",
        "reviewMeaning": "clothing size"
      },
      {
        "chapterTitle": "Chapter 11 · At the Clinic",
        "lessonTitle": "Describing Symptoms",
        "goalTitle": "Build it: tell a doctor your symptoms",
        "goalLine": "Explain where it hurts and how long you've felt ill.",
        "goalShort": "describe symptoms",
        "scenario": "doctor",
        "partnerName": "Dr. Gómez",
        "partnerInitial": "G",
        "partnerRole": "doctor",
        "partnerPlace": "local clinic",
        "scenarioTitle": "At the Doctor's Office",
        "scenarioSub": "Roleplay · discussing health issues",
        "lessonPromptEn": "My head hurts and I have a fever.",
        "lessonHint": "Use 'Me duele' for things that hurt.",
        "bank": [
          "Me duele",
          "la cabeza",
          "y tengo fiebre",
          "la garganta",
          "toser",
          "cansado"
        ],
        "bankEn": [
          "It hurts (me)",
          "the head",
          "and I have a fever",
          "the throat",
          "to cough",
          "tired"
        ],
        "correct": [0, 1, 2],
        "lessonCorrectTitle": "¡Mejórate! 🎉",
        "lessonCorrectBody": "Just like 'gustar', 'doler' works backwards: the head causes pain to you.",
        "lessonWrongBody": "Combine the pain phrase with the body part and symptoms.",
        "cultureCaption": "A modern health center",
        "cultureTitle": "Public Healthcare",
        "cultureBody": "Spain has an excellent public healthcare system (Sanidad Pública). Pharmacies (indicated by a green cross) can also advise on minor ailments.",
        "culturePhrase": "“No me encuentro bien” — I don't feel well.",
        "milestoneTitle": "You can describe basic medical symptoms.",
        "convo": [
          { "who": "p", "n": "Dígame, ¿qué le pasa?", "en": "Tell me, what's wrong?" },
          { "who": "u", "n": "Me duele la cabeza y tengo fiebre.", "fb": "Very clear symptom description." },
          { "who": "p", "n": "¿Desde cuándo le duele?", "en": "Since when does it hurt?" },
          { "who": "u", "n": "Desde hace tres días.", "fb": "Good use of 'desde hace' for duration." },
          { "who": "p", "n": "Voy a tomarle la temperatura.", "en": "I'm going to take your temperature." }
        ],
        "debrief": [
          { "title": "Desde hace", "body": "Used to say 'for' when referring to an amount of time that has passed (e.g. for 3 days)." },
          { "title": "Tener vs Estar", "body": "You 'have' a fever or a cough, but you 'are' tired (estoy cansado)." }
        ],
        "grammarMini": "doler",
        "grammarTitle": "How to use “doler” (to hurt)",
        "grammarIntro": "It works exactly like 'gustar'.",
        "gTermA": "Me duele",
        "gDescA": "for singular body parts",
        "gExA": "Me duele el brazo.",
        "gTermB": "Me duelen",
        "gDescB": "for plural body parts",
        "gExB": "Me duelen las piernas.",
        "clip": "Visiting the Farmacia",
        "podcast": "Salud Total — ep. 5",
        "article": "Navigating the Spanish Healthcare System",
        "reader": [
          { "t": "Si te sientes " },
          { "w": "enfermo", "d": "sick" },
          { "t": ", puedes ir a la " },
          { "w": "farmacia", "d": "pharmacy" },
          { "t": ". Ellos te pueden dar " },
          { "w": "pastillas", "d": "pills" },
          { "t": " para el dolor." }
        ],
        "reviewWord": "fiebre",
        "reviewSource": "from your clinic visit, today",
        "reviewMeaning": "fever"
      },
      {
        "chapterTitle": "Chapter 12 · Making Plans",
        "lessonTitle": "Inviting a Friend",
        "goalTitle": "Build it: make dinner plans",
        "goalLine": "Invite someone to dinner and agree on a time.",
        "goalShort": "make plans",
        "scenario": "freetalk",
        "partnerName": "Carmen",
        "partnerInitial": "C",
        "partnerRole": "colleague",
        "partnerPlace": "the office",
        "scenarioTitle": "Coffee Break Chat",
        "scenarioSub": "Roleplay · setting up a dinner date",
        "lessonPromptEn": "Do you want to have dinner tomorrow at eight?",
        "lessonHint": "Use '¿Quieres...?' to ask 'Do you want...?'",
        "bank": [
          "¿Quieres",
          "cenar",
          "mañana a las ocho?",
          "tomar algo",
          "dónde",
          "nos vemos"
        ],
        "bankEn": [
          "Do you want",
          "to have dinner",
          "tomorrow at eight?",
          "to have a drink",
          "where",
          "we'll see each other"
        ],
        "correct": [0, 1, 2],
        "lessonCorrectTitle": "¡Planazo! 🎉",
        "lessonCorrectBody": "'Planazo' is a great slang word in Spain for an awesome plan.",
        "lessonWrongBody": "Ask 'Do you want', add the verb, then the time.",
        "cultureCaption": "Friends meeting up in a plaza",
        "cultureTitle": "La Quedada",
        "cultureBody": "When Spaniards make plans to meet, they call it a 'quedada'. The verb is 'quedar' (to meet up).",
        "culturePhrase": "“¿Quedamos a las ocho?” — Shall we meet at eight?",
        "milestoneTitle": "You can now organize social events.",
        "convo": [
          { "who": "p", "n": "Tengo muchas ganas de salir este fin de semana.", "en": "I really feel like going out this weekend." },
          { "who": "u", "n": "¿Quieres cenar mañana a las ocho?", "fb": "Great invitation!" },
          { "who": "p", "n": "¡Me encantaría! ¿A qué restaurante vamos?", "en": "I'd love to! What restaurant are we going to?" },
          { "who": "u", "n": "Podemos ir al mexicano nuevo.", "fb": "Perfect suggestion." },
          { "who": "p", "n": "Genial. Nos vemos allí.", "en": "Great. See you there." }
        ],
        "debrief": [
          { "title": "Tener ganas de", "body": "A very common expression meaning 'to feel like (doing something)'." },
          { "title": "Quedar", "body": "One of the most versatile verbs in Spain. '¿Dónde quedamos?' means 'Where are we meeting?'" }
        ],
        "grammarMini": "querer / poder",
        "grammarTitle": "Boot Verbs (Stem-Changing)",
        "grammarIntro": "Some verbs change vowels in the middle.",
        "gTermA": "querer (e ➔ ie)",
        "gDescA": "to want",
        "gExA": "Yo quiero, tú quieres.",
        "gTermB": "poder (o ➔ ue)",
        "gDescB": "to be able to (can)",
        "gExB": "Yo puedo, tú puedes.",
        "clip": "La Noche Madrileña",
        "podcast": "Socialising in Spain — ep. 8",
        "article": "How to Quedar Like a Local",
        "reader": [
          { "t": "El viernes por la tarde, mis amigos y yo solemos " },
          { "w": "quedar", "d": "meet up" },
          { "t": " en la plaza. Tomamos algo y decidimos dónde " },
          { "w": "cenar", "d": "have dinner" },
          { "t": "." }
        ],
        "reviewWord": "quedar",
        "reviewSource": "from your plan making, today",
        "reviewMeaning": "to meet up"
      }
]
  },
  "fr": {
    "name": "French",
    "flag": "🇫🇷",
    "code": "FR",
    "font": "",
    "locale": "fr-FR",
    "greeting": "Bonjour, Maya",
    "accent": "France (Parisian)",
    "chapters": [
      {
        "chapterTitle": "Chapter 1 · Au café",
        "lessonTitle": "Greetings & warmth",
        "goalTitle": "Build it: order a coffee",
        "goalLine": "Order a coffee — the polite, French way.",
        "goalShort": "order a coffee",
        "scenario": "cafe",
        "partnerName": "Camille",
        "partnerInitial": "C",
        "partnerRole": "serveur",
        "partnerPlace": "Paris café",
        "scenarioTitle": "Au café · Paris",
        "scenarioSub": "Roleplay · order & a little small talk",
        "lessonPromptEn": "I'd like a coffee with milk, please.",
        "lessonHint": "Why “au lait”?",
        "bank": [
          "Je voudrais",
          "un café",
          "au lait",
          "s'il vous plaît",
          "l'addition",
          "sans"
        ],
        "bankEn": [
          "I would like",
          "a coffee",
          "with milk",
          "please",
          "the bill",
          "without"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "Parfait ! 🎉",
        "lessonCorrectBody": "“Je voudrais” (I would like) is the polite order — softer than “Je veux” (I want).",
        "lessonWrongBody": "Start with the polite “I would like,” then what you want.",
        "cultureCaption": "A café in Paris · 10am",
        "cultureTitle": "The café is the living room of France",
        "cultureBody": "In France you greet before you order — a quick “Bonjour” is non-negotiable. Skip it and you'll feel the chill. One coffee buys you the table for as long as you like.",
        "culturePhrase": "“L'addition, s'il vous plaît” — catch the waiter's eye; never snap or wave.",
        "milestoneTitle": "You can now order a coffee — politely, the French way.",
        "convo": [
          {
            "who": "p",
            "n": "Bonjour ! Qu'est-ce que je vous sers ?",
            "en": "Hello! What can I get you?"
          },
          {
            "who": "u",
            "n": "Un café au lait, s'il vous plaît.",
            "fb": "Great — you greeted first, very French"
          },
          {
            "who": "p",
            "n": "Très bien. Ce sera tout ?",
            "en": "Very good. Will that be all?"
          },
          {
            "who": "u",
            "n": "Oui. L'addition, s'il vous plaît.",
            "fb": "Perfect — polite and natural"
          },
          {
            "who": "p",
            "n": "Bien sûr, deux euros cinquante.",
            "en": "Of course — two fifty."
          }
        ],
        "debrief": [
          {
            "title": "“Bonjour” comes first",
            "body": "Greet before ordering — in France it's never optional."
          },
          {
            "title": "Use formal “vous”",
            "body": "With a waiter you don't know, use “vous,” not “tu.”"
          }
        ],
        "grammarMini": "tu vs vous",
        "grammarTitle": "“tu” vs “vous” — who gets which",
        "grammarIntro": "French has two words for “you.” Pick wrong and you sound too familiar — or too cold:",
        "gTermA": "tu",
        "gDescA": "informal — friends, family, kids",
        "gExA": "Tu veux un café ?",
        "gTermB": "vous",
        "gDescB": "formal / plural — strangers, elders",
        "gExB": "Vous voulez un café ?",
        "clip": "Le marché de Bastille, en vrai",
        "podcast": "Un café avec Camille — ép. 4",
        "article": "Le petit rituel du café parisien",
        "reader": [
          {
            "t": "À Paris, beaucoup de gens prennent leur café debout, "
          },
          {
            "w": "au comptoir",
            "d": "at the counter — cheaper than sitting at a table"
          },
          {
            "t": ". Le serveur vous dit "
          },
          {
            "w": "bonjour",
            "d": "hello / good day — always say it first"
          },
          {
            "t": " avant tout. On reste, on observe, on "
          },
          {
            "w": "discute",
            "d": "chats (from discuter — to chat / discuss)"
          },
          {
            "t": ". Le café, c'est une pause, pas une course."
          }
        ],
        "reviewWord": "comptoir",
        "reviewSource": "from your café article, 2 days ago",
        "reviewMeaning": "counter / bar (where you stand to drink)"
      },
      {
        "chapterTitle": "Chapter 2 · Demander son chemin",
        "lessonTitle": "Asking for directions",
        "goalTitle": "Build it: ask for directions",
        "goalLine": "Ask where the nearest metro is, politely.",
        "goalShort": "ask for directions",
        "scenario": "directions",
        "partnerName": "Luc",
        "partnerInitial": "L",
        "partnerRole": "passant",
        "partnerPlace": "Rue de Rivoli",
        "scenarioTitle": "Dans la rue · Paris",
        "scenarioSub": "Roleplay · politeness in the chaos",
        "lessonPromptEn": "Excuse me, where is the nearest metro station?",
        "lessonHint": "Use “le plus proche” for nearest.",
        "bank": [
          "Excusez-moi",
          "où est",
          "la station de métro",
          "la plus proche",
          "l'arrêt",
          "près de"
        ],
        "bankEn": [
          "Excuse me",
          "where is",
          "the metro station",
          "the nearest",
          "the stop",
          "near"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "Bien fait ! 🎉",
        "lessonCorrectBody": "“Excusez-moi” is polite and common when needing help.",
        "lessonWrongBody": "Begin with “Excuse me” to catch attention.",
        "cultureCaption": "Asking for directions in bustling Paris",
        "cultureTitle": "Politeness paves the streets",
        "cultureBody": "In France, it’s essential to start with a polite “Excusez-moi” when asking for directions. The French appreciate politeness and consideration.",
        "culturePhrase": "“S'il vous plaît” — add to any request as a sign of respect.",
        "milestoneTitle": "You can now ask for directions quickly and politely.",
        "convo": [
          {
            "who": "p",
            "n": "Bonjour ! Excusez-moi, vous cherchez quelque chose ?",
            "en": "Hello! Are you looking for something?"
          },
          {
            "who": "u",
            "n": "Oui, où est la station de métro la plus proche ?",
            "fb": "Perfect — right away with the polite form"
          },
          {
            "who": "p",
            "n": "Elle est à deux coins de rue d'ici.",
            "en": "It’s two blocks from here."
          },
          {
            "who": "u",
            "n": "Merci beaucoup !",
            "fb": "Thankfulness is always appreciated."
          },
          {
            "who": "p",
            "n": "De rien, bonne journée !",
            "en": "You're welcome, have a nice day!"
          }
        ],
        "debrief": [
          {
            "title": "Begin with “Excusez-moi”",
            "body": "A polite way to get attention."
          },
          {
            "title": "“Vous” for strangers",
            "body": "Use “vous” with anyone you don’t know well."
          }
        ],
        "grammarMini": "dire vs. demander",
        "grammarTitle": "“dire” vs “demander” — when to use",
        "grammarIntro": "Use the right verb to sound polite and articulate when asking:",
        "gTermA": "dire",
        "gDescA": "to tell — use when sharing information",
        "gExA": "Pouvez-vous me dire où c'est ?",
        "gTermB": "demander",
        "gDescB": "to ask — use when requesting something",
        "gExB": "Je voudrais demander un renseignement.",
        "clip": "Paris à pied",
        "podcast": "Les rues de Paris — ép. 9",
        "article": "Orientez-vous dans Paris comme un local",
        "reader": [
          {
            "t": "Quand on est à Paris, on ",
            "w": "demande",
            "d": "asks (from demander — to ask)"
          },
          {
            "t": " souvent son chemin. Le ",
            "w": "plus proche",
            "d": "nearest / closest"
          },
          {
            "t": " métro est parfois caché. Les Parisiens sont ",
            "w": "sympathiques",
            "d": "friendly / nice"
          },
          {
            "t": ", n’hésitez pas à ",
            "w": "demander",
            "d": "ask (from demander — to ask)"
          },
          {
            "t": "."
          }
        ],
        "reviewWord": "demander",
        "reviewSource": "from your directions article, 3 days ago",
        "reviewMeaning": "to ask"
      },
      {
        "chapterTitle": "Chapter 3 · La famille",
        "lessonTitle": "Introducing family",
        "goalTitle": "Build it: introduce your family",
        "goalLine": "Introduce your family members — French style.",
        "goalShort": "introduce family",
        "scenario": "family",
        "partnerName": "Sophie",
        "partnerInitial": "S",
        "partnerRole": "amie",
        "partnerPlace": "chez vous",
        "scenarioTitle": "À la maison · Rencontre",
        "scenarioSub": "Roleplay · introducing loved ones",
        "lessonPromptEn": "This is my mother. She is a teacher.",
        "lessonHint": "Use “C’est” for introductions.",
        "bank": [
          "C'est",
          "ma mère",
          "elle est",
          "professeur",
          "mon père",
          "ils sont"
        ],
        "bankEn": [
          "This is",
          "my mother",
          "she is",
          "a teacher",
          "my father",
          "they are"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "Magnifique ! 🎉",
        "lessonCorrectBody": "“C’est” is used to introduce people or state something.",
        "lessonWrongBody": "Start with “C’est” when introducing a single family member.",
        "cultureCaption": "Family introductions in France",
        "cultureTitle": "Family is the heart",
        "cultureBody": "In France, family gatherings are warm and welcoming. Introductions are often followed by a handshake or a kiss on the cheek, depending on the formality and closeness of the relationship.",
        "culturePhrase": "“Enchanté” or “Enchantée” — a polite way to say you’re pleased to meet someone.",
        "milestoneTitle": "You can now introduce your family the French way.",
        "convo": [
          {
            "who": "p",
            "n": "Salut, qui est-ce ?",
            "en": "Hi, who is this?"
          },
          {
            "who": "u",
            "n": "C'est ma mère. Elle est professeur.",
            "fb": "Great introduction, well done!"
          },
          {
            "who": "p",
            "n": "Enchantée, Madame !",
            "en": "Nice to meet you, Madam!"
          },
          {
            "who": "u",
            "n": "Et voici mon père.",
            "fb": "Nice flow of introductions."
          },
          {
            "who": "p",
            "n": "Ravi de vous rencontrer !",
            "en": "Delighted to meet you!"
          }
        ],
        "debrief": [
          {
            "title": "Start with “C’est”",
            "body": "It sets the tone for introductions."
          },
          {
            "title": "“Elle est” or “il est”",
            "body": "Use for describing their roles or jobs."
          }
        ],
        "grammarMini": "possessive adjectives",
        "grammarTitle": "Possessive adjectives in French",
        "grammarIntro": "Master possessive adjectives to describe relationships and ownership:",
        "gTermA": "ma / mon",
        "gDescA": "my — used for feminine / masculine singular ",
        "gExA": "C'est ma mère.",
        "gTermB": "mes",
        "gDescB": "my — used for plural",
        "gExB": "Ce sont mes parents.",
        "clip": "Les réunions familiales en France",
        "podcast": "Une famille française — ép. 12",
        "article": "Les traditions familiales en France",
        "reader": [
          {
            "t": "En France, ",
            "w": "la famille",
            "d": "the family"
          },
          {
            "t": " joue un rôle important. On se dit souvent ",
            "w": "bonjour",
            "d": "hello"
          },
          {
            "t": " avec une ",
            "w": "bise",
            "d": "kiss on both cheeks"
          },
          {
            "t": " au début. Chacun ",
            "w": "présente",
            "d": "introduces (from présenter — to introduce)"
          },
          {
            "t": " ses proches."
          }
        ],
        "reviewWord": "bise",
        "reviewSource": "from your family article, 5 days ago",
        "reviewMeaning": "kiss on both cheeks"
      },
      {
        "chapterTitle": "Chapter 4 · À l’hôtel",
        "lessonTitle": "Hotel essentials",
        "goalTitle": "Build it: check into a hotel",
        "goalLine": "Check into a hotel room smoothly and politely.",
        "goalShort": "check into hotel",
        "scenario": "hotel",
        "partnerName": "Nicolas",
        "partnerInitial": "N",
        "partnerRole": "réceptionniste",
        "partnerPlace": "Hôtel de la Tour",
        "scenarioTitle": "À l'hôtel · Arrivée",
        "scenarioSub": "Roleplay · smart check-in",
        "lessonPromptEn": "I have a reservation under the name Smith.",
        "lessonHint": "“au nom de” is key.",
        "bank": [
          "J'ai",
          "une réservation",
          "au nom de",
          "Smith",
          "chambre",
          "pour deux"
        ],
        "bankEn": [
          "I have",
          "a reservation",
          "under the name",
          "Smith",
          "room",
          "for two"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "Parfait ! 🎉",
        "lessonCorrectBody": "“J'ai” starts your statement — clear and simple.",
        "lessonWrongBody": "Begin with “J'ai” to indicate what you possess.",
        "cultureCaption": "Checking into a French hotel",
        "cultureTitle": "Form and sophistication",
        "cultureBody": "Formality and politeness are key when checking into a French hotel. Always greet before proceeding with your request.",
        "culturePhrase": "“Je voudrais ma clé, s’il vous plaît” — remember to be polite when requesting items or services.",
        "milestoneTitle": "You can now check into a hotel efficiently.",
        "convo": [
          {
            "who": "p",
            "n": "Bienvenue ! Avez-vous une réservation ?",
            "en": "Welcome! Do you have a reservation?"
          },
          {
            "who": "u",
            "n": "Oui, j'ai une réservation au nom de Smith.",
            "fb": "Good job keeping it concise yet polite."
          },
          {
            "who": "p",
            "n": "Très bien, votre chambre est prête.",
            "en": "Very well, your room is ready."
          },
          {
            "who": "u",
            "n": "Merci beaucoup.",
            "fb": "Politeness goes a long way."
          },
          {
            "who": "p",
            "n": "Profitez de votre séjour !",
            "en": "Enjoy your stay!"
          }
        ],
        "debrief": [
          {
            "title": "Start with a reservation",
            "body": "It helps streamline the check-in process."
          },
          {
            "title": "Be sure to say “merci”",
            "body": "Showing gratitude is part of polite interaction."
          }
        ],
        "grammarMini": "avoir — to have",
        "grammarTitle": "The verb “avoir” — possession and beyond",
        "grammarIntro": "“Avoir” is crucial for expressing possession and more:",
        "gTermA": "j'ai",
        "gDescA": "I have — indicates possession or presence",
        "gExA": "J'ai une réservation.",
        "gTermB": "tu as",
        "gDescB": "you have — informal second person singular",
        "gExB": "Tu as ma clé ?",
        "clip": "Les hôtels parisiens",
        "podcast": "Séjour dans un hôtel — ép. 2",
        "article": "Les coutumes des hôtels français",
        "reader": [
          {
            "t": "À l'hôtel, ",
            "w": "saluez",
            "d": "greet (from saluer — to greet)"
          },
          {
            "t": " toujours d'abord. Dites ",
            "w": "bonjour",
            "d": "hello / good day"
          },
          {
            "t": " avant de ",
            "w": "demander",
            "d": "ask (from demander — to ask)"
          },
          {
            "t": " votre clé. La ",
            "w": "politesse",
            "d": "politeness"
          },
          {
            "t": " est essentielle."
          }
        ],
        "reviewWord": "réservation",
        "reviewSource": "from your hotel article, 4 days ago",
        "reviewMeaning": "reservation"
      },
      {
        "chapterTitle": "Chapter 5 · Au marché",
        "lessonTitle": "Shopping for produce",
        "goalTitle": "Build it: buy fresh produce",
        "goalLine": "Buy fruits at a market — in French.",
        "goalShort": "buy produce",
        "scenario": "market",
        "partnerName": "Isabelle",
        "partnerInitial": "I",
        "partnerRole": "vendeuse",
        "partnerPlace": "Marché Bastille",
        "scenarioTitle": "Au marché · Paris",
        "scenarioSub": "Roleplay · bartering and buying",
        "lessonPromptEn": "I would like two apples and a bunch of bananas, please.",
        "lessonHint": "Quantities and asking are key.",
        "bank": [
          "Je voudrais",
          "deux pommes",
          "et",
          "un régime de bananes",
          "s'il vous plaît",
          "combien"
        ],
        "bankEn": [
          "I would like",
          "two apples",
          "and",
          "a bunch of bananas",
          "please",
          "how much"
        ],
        "correct": [
          0,
          1,
          2,
          3,
          4
        ],
        "lessonCorrectTitle": "Bien joué ! 🎉",
        "lessonCorrectBody": "“Je voudrais” is a polite way to express what you want.",
        "lessonWrongBody": "Start your sentence with what you would like.",
        "cultureCaption": "Experiencing a French market",
        "cultureTitle": "The charm of local markets",
        "cultureBody": "Market etiquette in France involves politeness and closeness. Don’t touch the produce—let the vendor handle it for you.",
        "culturePhrase": "“Combien ça coûte ?” — essential for understanding prices.",
        "milestoneTitle": "You can now shop for produce like a local.",
        "convo": [
          {
            "who": "p",
            "n": "Bonjour ! Que voulez-vous ?",
            "en": "Hello! What would you like?"
          },
          {
            "who": "u",
            "n": "Je voudrais deux pommes et un régime de bananes, s'il vous plaît.",
            "fb": "Excellent ordering skills!"
          },
          {
            "who": "p",
            "n": "Voilà, ce sera cinq euros.",
            "en": "Here you go, that will be five euros."
          },
          {
            "who": "u",
            "n": "Merci beaucoup.",
            "fb": "Politeness is key."
          },
          {
            "who": "p",
            "n": "Bonne journée !",
            "en": "Have a nice day!"
          }
        ],
        "debrief": [
          {
            "title": "Begin with “Je voudrais”",
            "body": "A polite way to indicate your wishes."
          },
          {
            "title": "Don’t touch produce",
            "body": "It’s the vendor’s job to serve you — respect their role."
          }
        ],
        "grammarMini": "units and quantities",
        "grammarTitle": "Expressing amounts and units",
        "grammarIntro": "Understanding quantities helps in efficient communication during shopping:",
        "gTermA": "un kilo",
        "gDescA": "a kilo — common unit for vegetables and fruits",
        "gExA": "Un kilo de pommes, s’il vous plaît.",
        "gTermB": "une douzaine",
        "gDescB": "a dozen — often used for eggs",
        "gExB": "Une douzaine d'œufs, s’il vous plaît.",
        "clip": "Le marché aux puces",
        "podcast": "Marché Bastille — ép. 7",
        "article": "Le marché traditionnel français",
        "reader": [
          {
            "t": "Au marché, on ",
            "w": "choisit",
            "d": "chooses (from choisir — to choose)"
          },
          {
            "t": " ses produits. Le ",
            "w": "vendeur",
            "d": "vendor / seller"
          },
          {
            "t": " vous sert avec ",
            "w": "soin",
            "d": "care / attention"
          },
          {
            "t": ". On dit toujours ",
            "w": "merci",
            "d": "thank you"
          },
          {
            "t": " à la fin."
          }
        ],
        "reviewWord": "régime",
        "reviewSource": "from your market article, 1 day ago",
        "reviewMeaning": "bunch (as in bananas)"
      },
      {
        "chapterTitle": "Chapter 6 · En cas d'urgence",
        "lessonTitle": "Handling emergencies",
        "goalTitle": "Build it: call for help",
        "goalLine": "Call for emergency services effectively in French.",
        "goalShort": "call for help",
        "scenario": "emergency",
        "partnerName": "Pierre",
        "partnerInitial": "P",
        "partnerRole": "opérateur d'urgence",
        "partnerPlace": "Centre d'appel",
        "scenarioTitle": "En cas d'urgence · Appel",
        "scenarioSub": "Roleplay · focus and clarity needed",
        "lessonPromptEn": "There is an emergency. We need help immediately.",
        "lessonHint": "Use “immédiatement” for urgency.",
        "bank": [
          "Il y a",
          "une urgence",
          "nous avons besoin de",
          "aide",
          "immédiatement",
          "la police"
        ],
        "bankEn": [
          "There is",
          "an emergency",
          "we need",
          "help",
          "immediately",
          "the police"
        ],
        "correct": [
          0,
          1,
          2,
          3,
          4
        ],
        "lessonCorrectTitle": "Exactement ! 🎉",
        "lessonCorrectBody": "“Il y a une urgence” sets the tone with clarity.",
        "lessonWrongBody": "Start with stating the emergency clearly.",
        "cultureCaption": "Handling high-pressure situations",
        "cultureTitle": "Stay calm and clear",
        "cultureBody": "In emergencies, maintaining calm and clarity is vital. Using precise and direct language facilitates the quickest response.",
        "culturePhrase": "“Appeler une ambulance” — key phrase if medical attention is needed.",
        "milestoneTitle": "You can now call for help in French.",
        "convo": [
          {
            "who": "p",
            "n": "Bonjour, quelle est votre urgence ?",
            "en": "Hello, what is your emergency?"
          },
          {
            "who": "u",
            "n": "Il y a une urgence. Nous avons besoin d'aide immédiatement.",
            "fb": "Your clarity helps in fast action."
          },
          {
            "who": "p",
            "n": "Que s'est-il passé exactement ?",
            "en": "What exactly happened?"
          },
          {
            "who": "u",
            "n": "Quelqu'un est blessé.",
            "fb": "Direct and to the point."
          },
          {
            "who": "p",
            "n": "Les secours arrivent.",
            "en": "Help is on the way."
          }
        ],
        "debrief": [
          {
            "title": "Begin with “Il y a une urgence”",
            "body": "Clearly identify the situation."
          },
          {
            "title": "Use precise words",
            "body": "Helps ensure fast and accurate assistance."
          }
        ],
        "grammarMini": "present tense",
        "grammarTitle": "The present tense — express urgency",
        "grammarIntro": "Use present tense to state facts and needs during emergencies:",
        "gTermA": "il y a",
        "gDescA": "there is — starts your sentence in situations",
        "gExA": "Il y a une urgence.",
        "gTermB": "nous avons",
        "gDescB": "we have — shows possession or need",
        "gExB": "Nous avons besoin d'aide.",
        "clip": "Sécurité et prévention",
        "podcast": "Les urgences en France — ép. 10",
        "article": "Réagir en cas d'urgence",
        "reader": [
          {
            "t": "Quand on est face à une urgence, on doit rester ",
            "w": "calme",
            "d": "calm"
          },
          {
            "t": " et parler avec ",
            "w": "clarté",
            "d": "clarity"
          },
          {
            "t": ". Utilisez une ",
            "w": "langue",
            "d": "language"
          },
          {
            "t": " directe pour décrire ",
            "w": "l'urgence",
            "d": "emergency"
          },
          {
            "t": "."
          }
        ],
        "reviewWord": "urgence",
        "reviewSource": "from your emergency article, 6 days ago",
        "reviewMeaning": "emergency"
      }
    ]
  },
  "hi": {
    "name": "Hindi",
    "flag": "🇮🇳",
    "code": "HI",
    "font": "hi",
    "locale": "hi-IN",
    "greeting": "नमस्ते, Maya",
    "accent": "India (Delhi)",
    "chapters": [
      {
        "chapterTitle": "Chapter 1 · चाय Chai culture",
        "lessonTitle": "Greetings & warmth",
        "goalTitle": "Build it: order chai",
        "goalLine": "Order chai and make small talk.",
        "goalShort": "order chai",
        "scenario": "cafe",
        "partnerName": "रवि Ravi",
        "partnerInitial": "R",
        "partnerRole": "chai wala",
        "partnerPlace": "Delhi tea stall",
        "scenarioTitle": "चाय की दुकान · Delhi",
        "scenarioSub": "Roleplay · order chai & chat",
        "lessonPromptEn": "I'd like one tea, please.",
        "lessonHint": "Why “मुझे … चाहिए”?",
        "bank": [
          "मुझे",
          "एक",
          "चाय",
          "चाहिए",
          "पानी",
          "दो"
        ],
        "bankEn": [
          "I need",
          "a",
          "tea",
          "please",
          "water",
          "two"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "बहुत बढ़िया! 🎉",
        "lessonCorrectBody": "“मुझे … चाहिए” is the natural “I'd like” — literally “to me … is wanted.”",
        "lessonWrongBody": "Start with “मुझे” (to me), then how many, then the item, then “चाहिए.”",
        "cultureCaption": "A chai stall in Old Delhi · morning",
        "cultureTitle": "Chai is a pause, and an invitation",
        "cultureBody": "Across India, chai isn't just a drink — it's how you make a friend, close a deal, or take a breath. At a roadside stall you stand, sip from a small glass, and chat with strangers. Refusing an offered chai can feel like refusing the friendship.",
        "culturePhrase": "“कितने का है?” (kitne ka hai?) — “how much is it?”, the phrase you'll use everywhere.",
        "milestoneTitle": "You can now order chai — and chat while it brews.",
        "convo": [
          {
            "who": "p",
            "n": "नमस्ते! क्या लेंगे आप?",
            "en": "Hello! What will you have?"
          },
          {
            "who": "u",
            "n": "मुझे एक चाय चाहिए।",
            "fb": "Nice — “मुझे … चाहिए” is very natural"
          },
          {
            "who": "p",
            "n": "अदरक वाली या साधारण?",
            "en": "Ginger or plain?"
          },
          {
            "who": "u",
            "n": "अदरक वाली, धन्यवाद।",
            "fb": "Perfect — “अदरक वाली” = the ginger one"
          },
          {
            "who": "p",
            "n": "बस दस रुपये।",
            "en": "Just ten rupees."
          }
        ],
        "debrief": [
          {
            "title": "“धन्यवाद” vs “शुक्रिया”",
            "body": "Both mean thanks — “शुक्रिया” sounds warmer and more everyday."
          },
          {
            "title": "Retroflex “ट”",
            "body": "Your “t” was soft — Hindi “ट” curls the tongue back a touch."
          }
        ],
        "grammarMini": "मुझे … चाहिए",
        "grammarTitle": "“मुझे … चाहिए” — how to say “I want”",
        "grammarIntro": "Hindi doesn't say “I want” directly. It says “to me, X is wanted”:",
        "gTermA": "मुझे (mujhe)",
        "gDescA": "“to me” — the experiencer",
        "gExA": "मुझे चाय चाहिए।",
        "gTermB": "चाहिए (chahiye)",
        "gDescB": "“is wanted / needed” — stays the same",
        "gExB": "मुझे पानी चाहिए।",
        "clip": "पुरानी दिल्ली की चाय, लोगों के साथ",
        "podcast": "रवि के साथ चाय — एपिसोड 4",
        "article": "चाय का छोटा सा रिवाज़",
        "reader": [
          {
            "t": "भारत में, सुबह की शुरुआत अक्सर एक गरम "
          },
          {
            "w": "चाय",
            "d": "chai — spiced milk tea"
          },
          {
            "t": " से होती है। लोग सड़क किनारे खड़े होकर, छोटे गिलास में चाय "
          },
          {
            "w": "पीते हैं",
            "d": "drink (they drink — from पीना, to drink)"
          },
          {
            "t": " और एक-दूसरे से "
          },
          {
            "w": "बातें करते हैं",
            "d": "chat / talk to each other"
          },
          {
            "t": "। यह दिन का सबसे प्यारा पल है।"
          }
        ],
        "reviewWord": "चाहिए",
        "reviewSource": "from your chai order, 3 days ago",
        "reviewMeaning": "is wanted / needed (used for “I'd like”)"
      },
      {
        "chapterTitle": "Chapter 2 · दिशा Directions",
        "lessonTitle": "Asking for directions",
        "goalTitle": "Find it: ask for directions",
        "goalLine": "Ask for directions to a place.",
        "goalShort": "ask directions",
        "scenario": "directions",
        "partnerName": "नेहा Neha",
        "partnerInitial": "N",
        "partnerRole": "local resident",
        "partnerPlace": "Delhi street",
        "scenarioTitle": "सड़क पर · Delhi",
        "scenarioSub": "Roleplay · ask for directions & proceed",
        "lessonPromptEn": "How do I get to the market?",
        "lessonHint": "Start with “बाज़ार … कहाँ है?”",
        "bank": [
          "बाज़ार",
          "कहाँ",
          "है",
          "मुझे",
          "जाना",
          "चाहिए"
        ],
        "bankEn": [
          "market",
          "where",
          "is",
          "I",
          "go",
          "should"
        ],
        "correct": [
          0,
          1,
          2
        ],
        "lessonCorrectTitle": "शानदार! 🌟",
        "lessonCorrectBody": "“बाज़ार कहाँ है?” is a straightforward way to ask for location.",
        "lessonWrongBody": "Begin with the place name, then “कहाँ है” to ask location.",
        "cultureCaption": "A bustling street in Delhi · midday",
        "cultureTitle": "Asking for directions is part of the journey",
        "cultureBody": "In India, people often rely on community wisdom for navigation. Asking for directions is common and even expected, with many ready to guide you warmly.",
        "culturePhrase": "“वहाँ कैसे जाएँ?” (vahaa kaise jaayin?) — “how to get there?”",
        "milestoneTitle": "You can now navigate the streets — and make friendly exchanges.",
        "convo": [
          {
            "who": "p",
            "n": "नमस्ते! कहाँ जाना चाहते हैं?",
            "en": "Hello! Where do you want to go?"
          },
          {
            "who": "u",
            "n": "बाज़ार कहाँ है?",
            "fb": "Good — direct queries work well in Hindi."
          },
          {
            "who": "p",
            "n": "सीधे जाइए, फिर बाएँ मुड़िए।",
            "en": "Go straight, then turn left."
          },
          {
            "who": "u",
            "n": "धन्यवाद, नेहा!",
            "fb": "Great! Thank them with a smile."
          },
          {
            "who": "p",
            "n": "कोई बात नहीं! सफ़र का मज़ा लें।",
            "en": "No worries! Enjoy the journey."
          }
        ],
        "debrief": [
          {
            "title": "Direction nuances",
            "body": "Remember that left is “बाएँ” and right is “दाएँ” — crucial for following directions accurately."
          },
          {
            "title": "The formal “आप”",
            "body": "Unlike English, Hindi uses “आप” for formality, similar to \"vous\" in French."
          }
        ],
        "grammarMini": "बाज़ार ... कहाँ है",
        "grammarTitle": "“बाज़ार ... कहाँ है” — asking where something is",
        "grammarIntro": "In Hindi, start with the noun and follow with “कहाँ है”:",
        "gTermA": "बाज़ार (bazaar)",
        "gDescA": "Any location or place",
        "gExA": "बाज़ार कहाँ है?",
        "gTermB": "कहाँ है (kahan hai)",
        "gDescB": "Where is",
        "gExB": "स्टेशन कहाँ है?",
        "clip": "दिशाओं की जानकारी बिना",
        "podcast": "नेहा के साथ यात्रा — एपिसोड 3",
        "article": "यात्रा के मज़े",
        "reader": [
          {
            "t": "भारत में, गंतव्य तक पहुँचने का सफ़र भी उतना ही "
          },
          {
            "w": "महत्वपूर्ण",
            "d": "important"
          },
          {
            "t": " है जितना कि गंतव्य। लोग अक्सर स्थानीय लोगों से "
          },
          {
            "w": "पूछते",
            "d": "ask"
          },
          {
            "t": " हैं और रास्ता "
          },
          {
            "w": "खोजते हैं",
            "d": "find (discover the path)"
          }
        ],
        "reviewWord": "बाएँ",
        "reviewSource": "from your last direction request, 3 days ago",
        "reviewMeaning": "left (direction)"
      },
      {
        "chapterTitle": "Chapter 3 · परिवार Family",
        "lessonTitle": "Talking about family",
        "goalTitle": "Share it: describe family",
        "goalLine": "Talk about your family in Hindi.",
        "goalShort": "describe family",
        "scenario": "family",
        "partnerName": "अनामिका Anamika",
        "partnerInitial": "A",
        "partnerRole": "friend",
        "partnerPlace": "home",
        "scenarioTitle": "घर पर · Family",
        "scenarioSub": "Roleplay · introduce your family",
        "lessonPromptEn": "This is my father.",
        "lessonHint": "Use “यह मेरे ... हैं” for introductions.",
        "bank": [
          "यह",
          "मेरे",
          "पिता",
          "हैं",
          "माँ",
          "बहन"
        ],
        "bankEn": [
          "this",
          "my",
          "father",
          "is/are",
          "mother",
          "sister"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "सही कहा! 👪",
        "lessonCorrectBody": "“यह मेरे ... हैं” is how you introduce someone in Hindi.",
        "lessonWrongBody": "Start with “यह मेरे” followed by the relation, then “हैं.”",
        "cultureCaption": "Family time in India · evening",
        "cultureTitle": "Family is the heart of Indian society",
        "cultureBody": "Family plays a central role in Indian life, with joint families often living together. Respect for elders and familial bonds are paramount.",
        "culturePhrase": "“आपका परिवार कैसा है?” — “How is your family?”",
        "milestoneTitle": "You can now introduce family — and share stories.",
        "convo": [
          {
            "who": "p",
            "n": "नमस्ते! परिवार में कौन-कौन है?",
            "en": "Hello! Who’s in your family?"
          },
          {
            "who": "u",
            "n": "यह मेरे पिता हैं।",
            "fb": "Excellent! “यह मेरे” is the correct phrase."
          },
          {
            "who": "p",
            "n": "आपकी माँ क्या करती हैं?",
            "en": "What does your mother do?"
          },
          {
            "who": "u",
            "n": "मेरी माँ शिक्षक हैं।",
            "fb": "Well done! Using “मेरी माँ” correctly."
          },
          {
            "who": "p",
            "n": "वाह! शिक्षकों का काम बहुत अच्छा है।",
            "en": "Wow! Teaching is a great job."
          }
        ],
        "debrief": [
          {
            "title": "Use of honorifics",
            "body": "In Hindi, verbs and nouns often change form based on respect, especially for elders."
          },
          {
            "title": "Relation terms",
            "body": "Remember the difference between ‘पिता’ (father) and ‘माँ’ (mother) for clarity."
          }
        ],
        "grammarMini": "यह ... हैं",
        "grammarTitle": "“यह … हैं” — introducing people",
        "grammarIntro": "Use ‘यह’ for this/these and always add respect with ‘हैं’:",
        "gTermA": "यह (yeh)",
        "gDescA": "This/these for introductions",
        "gExA": "यह मेरी माँ हैं।",
        "gTermB": "हैं (hain)",
        "gDescB": "Is/are with respect",
        "gExB": "वे मेरे चाचा हैं।",
        "clip": "परिवार के साथ बिताया समय",
        "podcast": "अनामिका के परिवार के किस्से",
        "article": "भारत की संयुक्त परिवार प्रणाली",
        "reader": [
          {
            "t": "भारतीय परिवार अक्सर संयुक्त होते हैं जहां "
          },
          {
            "w": "दादी",
            "d": "grandmother"
          },
          {
            "t": " वकील "
          },
          {
            "w": "रहती हैं",
            "d": "live"
          },
          {
            "t": " पर क़रीबी संबंध और ऊँच नीतियाँ सिखाने में महत्वपूर्ण भूमिका निभाते हैं।"
          }
        ],
        "reviewWord": "पिता",
        "reviewSource": "from your family introduction, 2 days ago",
        "reviewMeaning": "father"
      },
      {
        "chapterTitle": "Chapter 4 · होटल Hotel",
        "lessonTitle": "Checking into a hotel",
        "goalTitle": "Check it: book a room",
        "goalLine": "Book a hotel room and ask for amenities.",
        "goalShort": "book room",
        "scenario": "hotel",
        "partnerName": "मनीष Manish",
        "partnerInitial": "M",
        "partnerRole": "hotel receptionist",
        "partnerPlace": "Delhi hotel",
        "scenarioTitle": "होटल रिसेप्शन · Delhi",
        "scenarioSub": "Roleplay · check in & query services",
        "lessonPromptEn": "I would like a room for two nights.",
        "lessonHint": "Use “मुझे दो रात के लिए कमरा चाहिए।”",
        "bank": [
          "मुझे",
          "दो",
          "रात",
          "के लिए",
          "कमरा",
          "चाहिए"
        ],
        "bankEn": [
          "I need",
          "two",
          "nights",
          "for",
          "room",
          "want"
        ],
        "correct": [
          0,
          1,
          2,
          3,
          4
        ],
        "lessonCorrectTitle": "बेहतरीन! 🏨",
        "lessonCorrectBody": "“मुझे दो रात के लिए कमरा चाहिए” is perfect for booking.",
        "lessonWrongBody": "Begin with “मुझे” followed by duration and item, then “चाहिए.”",
        "cultureCaption": "Hotel lobby in India · welcoming",
        "cultureTitle": "Hospitality at Indian hotels",
        "cultureBody": "From budget stays to luxury hotels, Indian hospitality is warm and attentive, with a focus on guest comfort and convenience.",
        "culturePhrase": "“क्या कोई विशेष सुविधा है?” — “Are there any special amenities?”",
        "milestoneTitle": "You're ready to book a stay — and enjoy your time.",
        "convo": [
          {
            "who": "p",
            "n": "नमस्ते! कैसे मदद कर सकते हैं?",
            "en": "Hello! How can I assist?"
          },
          {
            "who": "u",
            "n": "मुझे दो रात के लिए कमरा चाहिए।",
            "fb": "Perfect! Clearly expressed in Hindi."
          },
          {
            "who": "p",
            "n": "किस प्रकार का कमरा चाहिए?",
            "en": "What type of room do you need?"
          },
          {
            "who": "u",
            "n": "डबल बेड वाले कमरे का।",
            "fb": "Well done! Specifying the room."
          },
          {
            "who": "p",
            "n": "ठीक है, आपका कमरा तैयार है।",
            "en": "Alright, your room is ready."
          }
        ],
        "debrief": [
          {
            "title": "Types of needs",
            "body": "Learn to distinguish between “कमरा चाहिए” (need a room) and “सुविधा चाहिए” (need amenities)."
          },
          {
            "title": "Specification clarity",
            "body": "Always specify number and type in a hotel to avoid confusion."
          }
        ],
        "grammarMini": "मुझे ... चाहिए",
        "grammarTitle": "“मुझे … चाहिए” — expressing need",
        "grammarIntro": "Use ‘मुझे’ (I need) followed by item and ‘चाहिए’:",
        "gTermA": "कमरा (kamra)",
        "gDescA": "Room or space required",
        "gExA": "मुझे कमरा चाहिए।",
        "gTermB": "रात (raat)",
        "gDescB": "Number of nights",
        "gExB": "तीन रात के लिए",
        "clip": "होटल में चेक इन",
        "podcast": "रूम बुकिंग के नुस्खे",
        "article": "होटल के रहस्य",
        "reader": [
          {
            "t": "भारत में होटल में चेक-इन करना एक सरल "
          },
          {
            "w": "प्रक्रिया",
            "d": "process"
          },
          {
            "t": " है। बस अपनी "
          },
          {
            "w": "पहचान",
            "d": "ID (identification)"
          },
          {
            "t": " दिखाएँ और आवश्यक "
          },
          {
            "w": "जानकारी",
            "d": "information"
          },
          {
            "t": " दें।"
          }
        ],
        "reviewWord": "कमरा",
        "reviewSource": "from your hotel booking, 5 days ago",
        "reviewMeaning": "room"
      },
      {
        "chapterTitle": "Chapter 5 · बाज़ार Market",
        "lessonTitle": "Shopping at the market",
        "goalTitle": "Buy it: negotiate price",
        "goalLine": "Shop and haggle for a good price.",
        "goalShort": "shop & haggle",
        "scenario": "market",
        "partnerName": "शुभम Shubham",
        "partnerInitial": "S",
        "partnerRole": "shopkeeper",
        "partnerPlace": "Delhi market",
        "scenarioTitle": "बाज़ार में · Delhi",
        "scenarioSub": "Roleplay · negotiate prices & purchase",
        "lessonPromptEn": "Can you give me a discount?",
        "lessonHint": "Use “क्या इसमें छूट मिल सकती है?”",
        "bank": [
          "क्या",
          "इसमें",
          "छूट",
          "मिल",
          "सकती",
          "है"
        ],
        "bankEn": [
          "can",
          "on this",
          "discount",
          "get",
          "can",
          "is"
        ],
        "correct": [
          0,
          1,
          2,
          3,
          4,
          5
        ],
        "lessonCorrectTitle": "शानदार खरीदारी! 🛒",
        "lessonCorrectBody": "“क्या इसमें छूट मिल सकती है” is perfect for haggling.",
        "lessonWrongBody": "Start with your request (“क्या”) then item, “छूट मिल सकती है?”",
        "cultureCaption": "A vibrant Indian market · lively",
        "cultureTitle": "Shopping is an experience, haggling a skill",
        "cultureBody": "Markets in India are vibrant and full of life, where bargaining isn’t just allowed but expected. It’s part of the shopping ritual.",
        "culturePhrase": "“कितने का है?” — “How much is it?” The start to every deal.",
        "milestoneTitle": "You can now shop confidently — and haggle like a local.",
        "convo": [
          {
            "who": "p",
            "n": "नमस्ते! क्या खरीदना है?",
            "en": "Hello! What would you like to buy?"
          },
          {
            "who": "u",
            "n": "यह शॉल कितने का है?",
            "fb": "Good — ‘कितने का’ is the right phrase to ask price."
          },
          {
            "who": "p",
            "n": "यह पचास रुपये का है।",
            "en": "It is fifty rupees."
          },
          {
            "who": "u",
            "n": "क्या इसमें छूट मिल सकती है?",
            "fb": "Perfect haggling phrase!"
          },
          {
            "who": "p",
            "n": "ठीक है, चालीस में ले लीजिए।",
            "en": "Alright, take it for forty."
          }
        ],
        "debrief": [
          {
            "title": "The art of bargaining",
            "body": "Bargaining can involve humor and charm; building rapport with vendors often leads to better deals."
          },
          {
            "title": "Common terms",
            "body": "‘छूट’ means discount — important for negotiating."
          }
        ],
        "grammarMini": "क्या ... में छूट",
        "grammarTitle": "“क्या ... में छूट” — asking for discounts",
        "grammarIntro": "Use ‘क्या’ to ask if something is possible, followed by ‘में छूट’ to specify discount:",
        "gTermA": "छूट (chhoot)",
        "gDescA": "Discount or concession",
        "gExA": "इसमें छूट मिल सकती है?",
        "gTermB": "कितने का (kitne ka)",
        "gDescB": "How much is it?",
        "gExB": "यह अंगूठी कितने की है?",
        "clip": "बाज़ार में मोलभाव करना",
        "podcast": "शुभम के साथ हाट-बाज़ार",
        "article": "बाज़ार की रौनक",
        "reader": [
          {
            "t": "भारतीय बाज़ार जीवन से "
          },
          {
            "w": "भरपूर",
            "d": "full of",
            "t": " होते हैं, जहाँ हर नुक्कड़ पर"
          },
          {
            "w": "व्यापारी",
            "d": "vendor / merchant"
          },
          {
            "t": " अपनी अदाएं दिखा रहे होते हैं।"
          }
        ],
        "reviewWord": "छूट",
        "reviewSource": "from your haggling session, 1 day ago",
        "reviewMeaning": "discount"
      },
      {
        "chapterTitle": "Chapter 6 · आपातकालीन Emergency",
        "lessonTitle": "Handling emergencies",
        "goalTitle": "Act it: call for help",
        "goalLine": "Make an emergency call and seek help.",
        "goalShort": "call for help",
        "scenario": "emergency",
        "partnerName": "अजय Ajay",
        "partnerInitial": "A",
        "partnerRole": "emergency responder",
        "partnerPlace": "helpline",
        "scenarioTitle": "आपातकाल · Delhi",
        "scenarioSub": "Roleplay · seek urgent assistance",
        "lessonPromptEn": "Call the ambulance.",
        "lessonHint": "Use “ऐम्बुलेंस बुलाइए।”",
        "bank": [
          "कृपया",
          "ऐम्बुलेंस",
          "बुलाइए",
          "मेरी",
          "मदद",
          "करें"
        ],
        "bankEn": [
          "please",
          "ambulance",
          "call",
          "my",
          "help",
          "do"
        ],
        "correct": [
          0,
          1,
          2
        ],
        "lessonCorrectTitle": "सुरक्षित रहें! 🚑",
        "lessonCorrectBody": "“ऐम्बुलेंस बुलाइए” is straightforward to call for an ambulance.",
        "lessonWrongBody": "Direct the task with “बुलाइए” — to call, after specifying ambulance.",
        "cultureCaption": "Emergency response in India · alert",
        "cultureTitle": "Quick responses in emergencies",
        "cultureBody": "Emergencies in India are taken seriously, and services like police and ambulances are prompt and trained to assist effectively.",
        "culturePhrase": "“मदद चाहिए” — A universal phrase that simply means “Help needed.”",
        "milestoneTitle": "You can confidently call for help — in urgent moments.",
        "convo": [
          {
            "who": "p",
            "n": "हेलो, आपातकालीन सेवा।",
            "en": "Hello, emergency services."
          },
          {
            "who": "u",
            "n": "कृपया ऐम्बुलेंस बुलाइए।",
            "fb": "Perfect! Clear and necessary."
          },
          {
            "who": "p",
            "n": "क्या हालत गंभीर है?",
            "en": "Is the condition serious?"
          },
          {
            "who": "u",
            "n": "हाँ, जल्दी भेजिए।",
            "fb": "Express urgency appropriately."
          },
          {
            "who": "p",
            "n": "ऐम्बुलेंस रास्ते में है। अनुरोधित स्थान पर रुकें।",
            "en": "Ambulance is on the way. Please stay at the location."
          }
        ],
        "debrief": [
          {
            "title": "Calm and clear",
            "body": "Always keep your request direct and stay as calm as possible during emergencies."
          },
          {
            "title": "Command form",
            "body": "‘बुलाइए’ is a polite command form — crucial for making requests."
          }
        ],
        "grammarMini": "बुलाइए",
        "grammarTitle": "“बुलाइए” — polite imperatives",
        "grammarIntro": "Commands in Hindi can be softened with ‘बुलाइए’ for polite requests:",
        "gTermA": "कृपया (kripya)",
        "gDescA": "Please — adds politeness",
        "gExA": "कृपया मेरी मदद करें।",
        "gTermB": "बुलाइए (bulaiye)",
        "gDescB": "Call (polite imperative)",
        "gExB": "डॉक्टर बुलाइए।",
        "clip": "आपात स्थितियों में",
        "podcast": "अजय के साथ सुरक्षा",
        "article": "आपातकालीन सेवाओं का महत्व",
        "reader": [
          {
            "t": "आपातकालीन स्थिति में, स्थिति को विवेकपूर्ण "
          },
          {
            "w": "नियंत्रित",
            "d": "control"
          },
          {
            "t": " करना और तुरंत "
          },
          {
            "w": "मदद",
            "d": "help"
          },
          {
            "t": " बुलाना ज़रूरी होता है।"
          }
        ],
        "reviewWord": "ऐम्बुलेंस",
        "reviewSource": "from your emergency call, 6 days ago",
        "reviewMeaning": "ambulance"
      }
    ]
  },
  "ja": {
    "name": "Japanese",
    "flag": "🇯🇵",
    "code": "JA",
    "font": "jp",
    "locale": "ja-JP",
    "greeting": "おはよう, Maya",
    "accent": "Japan (Tokyo)",
    "chapters": [
      {
        "chapterTitle": "Chapter 1 · 喫茶店 Kissaten",
        "lessonTitle": "Greetings & warmth",
        "goalTitle": "Build it: order a coffee",
        "goalLine": "Order a coffee — politely, in Japanese.",
        "goalShort": "order a coffee",
        "scenario": "cafe",
        "partnerName": "ハルカ Haruka",
        "partnerInitial": "H",
        "partnerRole": "staff",
        "partnerPlace": "Kyoto kissaten",
        "scenarioTitle": "喫茶店 · Kyoto",
        "scenarioSub": "Roleplay · order & a polite exchange",
        "lessonPromptEn": "A coffee, please. (Please give me a coffee.)",
        "lessonHint": "Why “を”?",
        "bank": [
          "コーヒー",
          "を",
          "ください",
          "お願いします",
          "一つ",
          "は"
        ],
        "bankEn": [
          "coffee",
          "to",
          "please",
          "thank you",
          "one",
          "is"
        ],
        "correct": [
          0,
          1,
          2
        ],
        "lessonCorrectTitle": "完璧！ (Perfect!) 🎉",
        "lessonCorrectBody": "“を” marks the thing you want; “ください” is the polite “please give me.”",
        "lessonWrongBody": "Name the item, mark it with “を,” then “ください.”",
        "cultureCaption": "A kissaten in Kyoto · morning",
        "cultureTitle": "Silence is service, not rudeness",
        "cultureBody": "In a Japanese kissaten the staff won't chat or rush you — quiet, attentive service is the height of politeness. A small bow and “どうも” does the thanking.",
        "culturePhrase": "“お願いします (onegaishimasu)” — the all-purpose polite “please” when you hand over your order.",
        "milestoneTitle": "You can now order a coffee — politely, in Japanese.",
        "convo": [
          {
            "who": "p",
            "n": "いらっしゃいませ。ご注文は？",
            "en": "Welcome! What would you like to order?"
          },
          {
            "who": "u",
            "n": "コーヒーを一つ、お願いします。",
            "fb": "Great — “一つ (one)” makes it natural"
          },
          {
            "who": "p",
            "n": "かしこまりました。以上ですか？",
            "en": "Certainly. Is that all?"
          },
          {
            "who": "u",
            "n": "はい、それで大丈夫です。",
            "fb": "Perfect — “大丈夫です” is a natural “that's fine”"
          },
          {
            "who": "p",
            "n": "ありがとうございます。",
            "en": "Thank you very much."
          }
        ],
        "debrief": [
          {
            "title": "“一つ” counter",
            "body": "You added “one (一つ)” — counters make Japanese sound fluent, not robotic."
          },
          {
            "title": "Pitch on “コーヒー”",
            "body": "Stress stayed flat — try a slight drop on “ko-,” closer to native pitch-accent."
          }
        ],
        "grammarMini": "は vs を",
        "grammarTitle": "“は” vs “を” — topic vs object",
        "grammarIntro": "Two little particles that trip up every beginner. The trick:",
        "gTermA": "は (wa)",
        "gDescA": "marks the topic — “as for…”",
        "gExA": "コーヒーは好きです。",
        "gTermB": "を (o)",
        "gDescB": "marks the object — what the verb acts on",
        "gExB": "コーヒーをください。",
        "clip": "京都の朝、地元の人と",
        "podcast": "ハルカの喫茶店ラジオ #4",
        "article": "喫茶店の静かな時間",
        "reader": [
          {
            "t": "日本の"
          },
          {
            "w": "喫茶店",
            "d": "kissaten — a traditional coffee house"
          },
          {
            "t": "では、お客さんは"
          },
          {
            "w": "静かに",
            "d": "quietly (from 静か — quiet / calm)"
          },
          {
            "t": "コーヒーを楽しみます。店員さんはあまり"
          },
          {
            "w": "話しません",
            "d": "doesn't talk much (polite negative of 話す — to talk)"
          },
          {
            "t": "。それがおもてなしです。"
          }
        ],
        "reviewWord": "ください",
        "reviewSource": "from your kissaten order, 3 days ago",
        "reviewMeaning": "please give me (polite request)"
      },
      {
        "chapterTitle": "Chapter 2 · 道案内 Michi Annai",
        "lessonTitle": "Finding your way",
        "goalTitle": "Build it: ask for directions",
        "goalLine": "Politely ask for directions in Japanese.",
        "goalShort": "ask for directions",
        "scenario": "directions",
        "partnerName": "ケンジ Kenji",
        "partnerInitial": "K",
        "partnerRole": "local",
        "partnerPlace": "Tokyo street",
        "scenarioTitle": "道案内 · Tokyo",
        "scenarioSub": "Roleplay · ask & receive directions",
        "lessonPromptEn": "Excuse me, where is the station?",
        "lessonHint": "Why “は”?",
        "bank": [
          "すみません",
          "駅",
          "は",
          "どこ",
          "ですか",
          "の"
        ],
        "bankEn": [
          "excuse me",
          "station",
          "is",
          "where",
          "is it?",
          "of"
        ],
        "correct": [
          0,
          1,
          2,
          3,
          4
        ],
        "lessonCorrectTitle": "完璧！ (Perfect!) 🎉",
        "lessonCorrectBody": "“は” marks the topic; “どこですか” is the polite way to ask “where is it?”",
        "lessonWrongBody": "Start with an apology, then the place, marked with “は,” and ask politely.",
        "cultureCaption": "A Tokyo street · afternoon",
        "cultureTitle": "Polite patience on the streets",
        "cultureBody": "In Japan, it's common to offer directions with utmost politeness. A slight bow and polite language convey respect.",
        "culturePhrase": "“すみません” — use this to politely get someone's attention.",
        "milestoneTitle": "You can now ask for directions — politely, in Japanese.",
        "convo": [
          {
            "who": "p",
            "n": "こんにちは。何をお探しですか？",
            "en": "Hello. What are you looking for?"
          },
          {
            "who": "u",
            "n": "すみません、駅はどこですか？",
            "fb": "Perfect — polite and concise."
          },
          {
            "who": "p",
            "n": "駅はあちらですよ。",
            "en": "The station is over there."
          },
          {
            "who": "u",
            "n": "ありがとうございます。",
            "fb": "Great — gratitude is key in communication."
          },
          {
            "who": "p",
            "n": "どういたしまして。気をつけてね。",
            "en": "You're welcome. Take care."
          }
        ],
        "debrief": [
          {
            "title": "“すみません” as a preface",
            "body": "Always begin with an apology to be polite when stopping someone."
          },
          {
            "title": "Topic marker “は”",
            "body": "Remember: “は” indicates the topic you are speaking about — it's not always the subject!"
          }
        ],
        "grammarMini": "は vs が",
        "grammarTitle": "“は” vs “が” — topic vs subject",
        "grammarIntro": "These particles often confuse learners. Remember:",
        "gTermA": "は (wa)",
        "gDescA": "marks the topic — setting the scene",
        "gExA": "駅はどこですか。",
        "gTermB": "が (ga)",
        "gDescB": "marks the subject — specifying what's acted upon",
        "gExB": "駅が見えます。",
        "clip": "東京の通り、地元の人と",
        "podcast": "ケンジの道案内ラジオ #12",
        "article": "東京の地図と街歩き",
        "reader": [
          {
            "t": "東京の"
          },
          {
            "w": "道案内",
            "d": "michi annai — giving directions"
          },
          {
            "t": "では、"
          },
          {
            "w": "人々",
            "d": "people"
          },
          {
            "t": "は親切で"
          },
          {
            "w": "丁寧",
            "d": "polite / courteous"
          },
          {
            "t": "です。"
          }
        ],
        "reviewWord": "すみません",
        "reviewSource": "from your directions request, 3 days ago",
        "reviewMeaning": "excuse me / I'm sorry"
      },
      {
        "chapterTitle": "Chapter 3 · 家族 Kazoku",
        "lessonTitle": "Meeting family",
        "goalTitle": "Build it: introduce your family",
        "goalLine": "Introduce your family politely, in Japanese.",
        "goalShort": "introduce family",
        "scenario": "family",
        "partnerName": "アヤカ Ayaka",
        "partnerInitial": "A",
        "partnerRole": "friend",
        "partnerPlace": "Hokkaido garden",
        "scenarioTitle": "家族 · Hokkaido",
        "scenarioSub": "Roleplay · introduce & describe family",
        "lessonPromptEn": "This is my mother.",
        "lessonHint": "Why “が”?",
        "bank": [
          "こちら",
          "は",
          "私",
          "の",
          "母",
          "です"
        ],
        "bankEn": [
          "this",
          "is",
          "I",
          "of",
          "mother",
          "is"
        ],
        "correct": [
          0,
          2,
          3,
          4,
          5
        ],
        "lessonCorrectTitle": "完璧！ (Perfect!) 🎉",
        "lessonCorrectBody": "“の” shows possession, translating to “of” or “'s” in English.",
        "lessonWrongBody": "Start with the topic word, indicate possession with “の,” then state the subject.",
        "cultureCaption": "A garden in Hokkaido · afternoon",
        "cultureTitle": "Family ties and respect",
        "cultureBody": "In Japan, introducing family carries formality and warmth. Bow slightly and use respectful language.",
        "culturePhrase": "“こちらは私の母です” — point politely when introducing family.",
        "milestoneTitle": "You can now introduce your family — politely, in Japanese.",
        "convo": [
          {
            "who": "p",
            "n": "こんにちは。ご家族を紹介しますか？",
            "en": "Hello. Would you like to introduce your family?"
          },
          {
            "who": "u",
            "n": "はい、こちらは私の母です。",
            "fb": "Nicely done — clear and polite."
          },
          {
            "who": "p",
            "n": "お母さんは優しそうですね。",
            "en": "Your mother seems kind."
          },
          {
            "who": "u",
            "n": "ありがとうございます。そう言ってくれて嬉しいです。",
            "fb": "Excellent — expressing gratitude shows respect."
          },
          {
            "who": "p",
            "n": "どういたしまして。よい日を。",
            "en": "You're welcome. Have a good day."
          }
        ],
        "debrief": [
          {
            "title": "Possessive “の”",
            "body": "Remember: “の” connects nouns, showing possession or relationship."
          },
          {
            "title": "Respectful introductions",
            "body": "Introduce family members with polite intonation and respectful language."
          }
        ],
        "grammarMini": "の vs が",
        "grammarTitle": "“の” vs “が” — possession vs subject",
        "grammarIntro": "Common particles with distinct roles.",
        "gTermA": "の (no)",
        "gDescA": "indicates possession or belongs to",
        "gExA": "私の母",
        "gTermB": "が (ga)",
        "gDescB": "marks the subject in a sentence",
        "gExB": "母がいます。",
        "clip": "北海道の庭、家族と",
        "podcast": "アヤカの家庭ラジオ #8",
        "article": "家族のつながりと話し方",
        "reader": [
          {
            "t": "日本では"
          },
          {
            "w": "家族",
            "d": "kazoku — family"
          },
          {
            "t": "は大切に"
          },
          {
            "w": "されています",
            "d": "is valued (polite passive form of suru — to do)"
          },
          {
            "t": "。"
          }
        ],
        "reviewWord": "の",
        "reviewSource": "from your family introduction, 3 days ago",
        "reviewMeaning": "of / 's (possessive marker)"
      },
      {
        "chapterTitle": "Chapter 4 · ホテル Hoteru",
        "lessonTitle": "Staying over",
        "goalTitle": "Build it: check into a hotel",
        "goalLine": "Check into a hotel politely, in Japanese.",
        "goalShort": "check into hotel",
        "scenario": "hotel",
        "partnerName": "サトシ Satoshi",
        "partnerInitial": "S",
        "partnerRole": "receptionist",
        "partnerPlace": "Osaka hotel",
        "scenarioTitle": "ホテル · Osaka",
        "scenarioSub": "Roleplay · check-in & make requests",
        "lessonPromptEn": "My name is [Your Name]. I have a reservation.",
        "lessonHint": "Why “が”?",
        "bank": [
          "予約",
          "が",
          "あります",
          "名前",
          "は",
          "です"
        ],
        "bankEn": [
          "reservation",
          "exists",
          "is",
          "name",
          "is",
          "is"
        ],
        "correct": [
          3,
          4,
          5,
          0,
          1,
          2
        ],
        "lessonCorrectTitle": "完璧！ (Perfect!) 🎉",
        "lessonCorrectBody": "“が” emphasizes the subject, stating existence of a reservation.",
        "lessonWrongBody": "Introduce yourself, then state your reservation situation.",
        "cultureCaption": "An Osaka hotel · evening",
        "cultureTitle": "Politeness at the counter",
        "cultureBody": "When checking into a hotel in Japan, politeness and clarity are crucial. A soft voice and bow demonstrate respect.",
        "culturePhrase": "“予約があります” — confirm your reservation politely.",
        "milestoneTitle": "You can now check into a hotel — politely, in Japanese.",
        "convo": [
          {
            "who": "p",
            "n": "いらっしゃいませ。ご予約はされていますか？",
            "en": "Welcome. Do you have a reservation?"
          },
          {
            "who": "u",
            "n": "はい、名前は[あなたの名前]です。予約があります。",
            "fb": "Perfect — clear, with your name first."
          },
          {
            "who": "p",
            "n": "確認いたします。少々お待ちください。",
            "en": "Let me confirm. Please wait a moment."
          },
          {
            "who": "u",
            "n": "ありがとうございます。",
            "fb": "Good — expressing gratitude appropriately."
          },
          {
            "who": "p",
            "n": "確認できました。こちらが鍵です。",
            "en": "It is confirmed. Here is your key."
          }
        ],
        "debrief": [
          {
            "title": "Presenting a reservation",
            "body": "State name first, then confirm presence of reservation politely."
          },
          {
            "title": "Subject marker “が”",
            "body": "“が” often emphasizes the existence or possession within polite/formal contexts."
          }
        ],
        "grammarMini": "が vs は",
        "grammarTitle": "“が” vs “は” — subject vs topic",
        "grammarIntro": "Differentiating subject and topic markers.",
        "gTermA": "が (ga)",
        "gDescA": "emphasizes the subject",
        "gExA": "予約があります。",
        "gTermB": "は (wa)",
        "gDescB": "indicates the topic or contrast",
        "gExB": "名前は…です。",
        "clip": "大阪のホテル、チェックイン中",
        "podcast": "サトシのホテルラジオ #23",
        "article": "ホテル予約とチェックインのコツ",
        "reader": [
          {
            "t": "大阪の"
          },
          {
            "w": "ホテル",
            "d": "hoteru — hotel"
          },
          {
            "t": "にチェックインする際に"
          },
          {
            "w": "礼儀",
            "d": "reigi — courtesy/manners"
          },
          {
            "t": "を大切に"
          },
          {
            "w": "します",
            "d": "(to) do / carry out"
          },
          {
            "t": "。"
          }
        ],
        "reviewWord": "予約",
        "reviewSource": "from your hotel check-in, 3 days ago",
        "reviewMeaning": "reservation"
      },
      {
        "chapterTitle": "Chapter 5 · 市場 Ichiba",
        "lessonTitle": "Shopping smart",
        "goalTitle": "Build it: make a purchase",
        "goalLine": "Buy something politely, in Japanese.",
        "goalShort": "make a purchase",
        "scenario": "market",
        "partnerName": "ナオト Naoto",
        "partnerInitial": "N",
        "partnerRole": "vendor",
        "partnerPlace": "Sapporo market",
        "scenarioTitle": "市場 · Sapporo",
        "scenarioSub": "Roleplay · purchase & polite bargaining",
        "lessonPromptEn": "How much is this?",
        "lessonHint": "Why “いくら”?",
        "bank": [
          "これは",
          "いくら",
          "ですか",
          "買います",
          "欲しい",
          "おいしい"
        ],
        "bankEn": [
          "this",
          "how much",
          "is it?",
          "buy",
          "want",
          "delicious"
        ],
        "correct": [
          0,
          1,
          2
        ],
        "lessonCorrectTitle": "完璧！ (Perfect!) 🎉",
        "lessonCorrectBody": "“いくら” is the standard interrogative pronoun to ask “how much?”",
        "lessonWrongBody": "Start with the item in question, then ask its price using “いくらですか?”",
        "cultureCaption": "A Sapporo market · morning",
        "cultureTitle": "Market manners",
        "cultureBody": "In Japanese markets, politeness in interaction and transaction is key. A respectful tone enhances the shopping experience.",
        "culturePhrase": "“いくらですか” — ask respectfully for prices to maintain polite discourse.",
        "milestoneTitle": "You can now buy items in a market — politely, in Japanese.",
        "convo": [
          {
            "who": "p",
            "n": "いらっしゃいませ。何を探していますか？",
            "en": "Welcome. What are you looking for?"
          },
          {
            "who": "u",
            "n": "これはいくらですか？",
            "fb": "Great — concise and to the point."
          },
          {
            "who": "p",
            "n": "それは500円です。",
            "en": "That is 500 yen."
          },
          {
            "who": "u",
            "n": "それをください。",
            "fb": "Perfect — clear transaction request."
          },
          {
            "who": "p",
            "n": "ありがとうございます。またどうぞ。",
            "en": "Thank you. Please come again."
          }
        ],
        "debrief": [
          {
            "title": "“いくら” phrases",
            "body": "Always pair with “ですか” for a polite inquiry about price."
          },
          {
            "title": "Customer-vendor etiquette",
            "body": "Maintain a polite tone to foster a pleasant shopping experience."
          }
        ],
        "grammarMini": "これ vs それ",
        "grammarTitle": "“これ” vs “それ” — this vs that",
        "grammarIntro": "Clarifying demonstratives for proximity.",
        "gTermA": "これ (kore)",
        "gDescA": "refers to an item near the speaker",
        "gExA": "これは…",
        "gTermB": "それ (sore)",
        "gDescB": "refers to an item near the listener",
        "gExB": "それは…",
        "clip": "札幌の市場、お買い物中",
        "podcast": "ナオトの市場ラジオ #7",
        "article": "市場での賢い買い物",
        "reader": [
          {
            "t": "札幌の"
          },
          {
            "w": "市場",
            "d": "ichiba — market"
          },
          {
            "t": "では"
          },
          {
            "w": "新鮮な",
            "d": "shinsen na — fresh"
          },
          {
            "t": "商品を"
          },
          {
            "w": "見つけます",
            "d": "find (polite form of 見つける — to find)"
          },
          {
            "t": "。"
          }
        ],
        "reviewWord": "いくら",
        "reviewSource": "from your market interaction, 3 days ago",
        "reviewMeaning": "how much (interrogative)"
      },
      {
        "chapterTitle": "Chapter 6 · 緊急 Kinkyū",
        "lessonTitle": "Handling emergencies",
        "goalTitle": "Build it: call for help",
        "goalLine": "Call for help politely and effectively, in Japanese.",
        "goalShort": "call for help",
        "scenario": "emergency",
        "partnerName": "ユキ Yuki",
        "partnerInitial": "Y",
        "partnerRole": "police officer",
        "partnerPlace": "Shinjuku street",
        "scenarioTitle": "緊急 · Shinjuku",
        "scenarioSub": "Roleplay · seeking help & being clear",
        "lessonPromptEn": "Please help! There's an emergency.",
        "lessonHint": "Why use “助けて”?",
        "bank": [
          "助けて",
          "ください",
          "緊急",
          "です",
          "危ない",
          "私は"
        ],
        "bankEn": [
          "help",
          "please",
          "emergency",
          "is",
          "dangerous",
          "I am"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "完璧！ (Perfect!) 🎉",
        "lessonCorrectBody": "“助けてください” is a direct and polite way to ask for help.",
        "lessonWrongBody": "Begin with a clear plea for help, then mention the situation.",
        "cultureCaption": "A Shinjuku street · night",
        "cultureTitle": "Clear communication in crisis",
        "cultureBody": "In emergencies, succinct and polite communication is vital. Clearly convey the situation and location.",
        "culturePhrase": "“助けてください” — urgent, yet polite, call for aid.",
        "milestoneTitle": "You can now call for help effectively — politely, in Japanese.",
        "convo": [
          {
            "who": "p",
            "n": "何か困っていますか？",
            "en": "Is something wrong?"
          },
          {
            "who": "u",
            "n": "助けてください！緊急です。",
            "fb": "Very clear — urgency is evident."
          },
          {
            "who": "p",
            "n": "大丈夫ですか？どこですか？",
            "en": "Are you okay? Where are you?"
          },
          {
            "who": "u",
            "n": "ここで事故がありました。",
            "fb": "Good — location adds context."
          },
          {
            "who": "p",
            "n": "すぐに向かいます。",
            "en": "We're coming immediately."
          }
        ],
        "debrief": [
          {
            "title": "Using “助けてください”",
            "body": "Directly conveys need for help — polite and effective."
          },
          {
            "title": "Conveying urgency",
            "body": "State the nature and gravity of the emergency clearly."
          }
        ],
        "grammarMini": "下さい vs ください",
        "grammarTitle": "“下さい” vs “ください” — emphasis in requests",
        "grammarIntro": "Politeness variations in appeal words.",
        "gTermA": "下さい (kudasai)",
        "gDescA": "firm requests; often written this way in set phrases",
        "gExA": "助けて下さい。",
        "gTermB": "ください (kudasai)",
        "gDescB": "more casual requests, seen in everyday exchanges",
        "gExB": "見せてください。",
        "clip": "新宿の夜、緊急事態",
        "podcast": "ユキの防災ラジオ #15",
        "article": "日本での緊急事態としての対処法",
        "reader": [
          {
            "t": "日本では"
          },
          {
            "w": "緊急",
            "d": "kinkyū — emergency or urgent"
          },
          {
            "t": "には"
          },
          {
            "w": "正確で",
            "d": "seikaku de — accurately"
          },
          {
            "t": "迅速な"
          },
          {
            "w": "コミュニケーション",
            "d": "communication (katakana)"
          },
          {
            "t": "が必要です。"
          }
        ],
        "reviewWord": "助けて",
        "reviewSource": "from your emergency call, 3 days ago",
        "reviewMeaning": "help (verb form)"
      }
    ]
  },
  "ko": {
    "name": "Korean",
    "flag": "🇰🇷",
    "code": "KO",
    "font": "kr",
    "locale": "ko-KR",
    "greeting": "안녕하세요, Maya",
    "accent": "Korea (Seoul)",
    "chapters": [
      {
        "chapterTitle": "Chapter 1 · 카페 Cafe culture",
        "lessonTitle": "Greetings & warmth",
        "goalTitle": "Build it: order a coffee",
        "goalLine": "Order a coffee — politely, in Korean.",
        "goalShort": "order a coffee",
        "scenario": "cafe",
        "partnerName": "지은 Jieun",
        "partnerInitial": "J",
        "partnerRole": "barista",
        "partnerPlace": "Seoul cafe",
        "scenarioTitle": "카페 · Seoul",
        "scenarioSub": "Roleplay · order & a polite exchange",
        "lessonPromptEn": "One coffee, please.",
        "lessonHint": "Why “주세요”?",
        "bank": [
          "커피",
          "한",
          "잔",
          "주세요",
          "물",
          "두"
        ],
        "bankEn": [
          "coffee",
          "one",
          "cup",
          "please",
          "water",
          "two"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "완벽해요! 🎉",
        "lessonCorrectBody": "“주세요” is the polite “please give me”; “한 잔” = “one cup” with the counter 잔.",
        "lessonWrongBody": "Name the item, then the count “한 잔,” then “주세요.”",
        "cultureCaption": "A cafe in Seoul · afternoon",
        "cultureTitle": "Politeness lives in the verb ending",
        "cultureBody": "Korean bakes respect into the grammar itself. Ending a request with “-주세요” keeps you polite with anyone; drop it and you'd sound blunt. Cafés are a second living room — students linger for hours over one americano.",
        "culturePhrase": "“여기요!” (yeogiyo!) — a friendly “excuse me / over here!” to get the staff's attention.",
        "milestoneTitle": "You can now order a coffee — politely, in Korean.",
        "convo": [
          {
            "who": "p",
            "n": "어서 오세요! 주문하시겠어요?",
            "en": "Welcome! Would you like to order?"
          },
          {
            "who": "u",
            "n": "커피 한 잔 주세요.",
            "fb": "Great — “한 잔” with the counter sounds natural"
          },
          {
            "who": "p",
            "n": "따뜻한 걸로 드릴까요?",
            "en": "Shall I make it hot?"
          },
          {
            "who": "u",
            "n": "네, 따뜻한 걸로 주세요.",
            "fb": "Perfect — “걸로” = “the … one”"
          },
          {
            "who": "p",
            "n": "네, 삼천 원입니다.",
            "en": "Sure — that's 3,000 won."
          }
        ],
        "debrief": [
          {
            "title": "Counter 잔",
            "body": "You used “한 잔” (one cup) — Korean counts almost everything with a counter."
          },
          {
            "title": "Aspirate 커",
            "body": "“커피” started soft — give the “k” a touch more air for a native sound."
          }
        ],
        "grammarMini": "-주세요",
        "grammarTitle": "“-주세요” — the polite “please”",
        "grammarIntro": "Attach 주세요 to a noun (or verb stem) to make a polite request:",
        "gTermA": "주세요 (juseyo)",
        "gDescA": "“please give me” — polite, safe with anyone",
        "gExA": "커피 주세요.",
        "gTermB": "-요 (yo)",
        "gDescB": "the politeness ending on verbs",
        "gExB": "여기 있어요.",
        "clip": "서울의 아침, 동네 사람들과",
        "podcast": "지은의 카페 라디오 #4",
        "article": "카페에서 보내는 조용한 시간",
        "reader": [
          {
            "t": "한국에서 많은 사람들이 "
          },
          {
            "w": "카페",
            "d": "cafe"
          },
          {
            "t": "에서 시간을 보냅니다. 학생들은 커피 한 잔으로 몇 시간 동안 "
          },
          {
            "w": "공부해요",
            "d": "study (polite — from 공부하다, to study)"
          },
          {
            "t": ". 점원에게는 항상 "
          },
          {
            "w": "주세요",
            "d": "please give me (polite request ending)"
          },
          {
            "t": " 라고 말해요. 그것이 예의입니다."
          }
        ],
        "reviewWord": "주세요",
        "reviewSource": "from your cafe order, 3 days ago",
        "reviewMeaning": "please give me (polite request)"
      },
      {
        "chapterTitle": "Chapter 2 · 길 찾기 Directions",
        "lessonTitle": "Finding your way",
        "goalTitle": "Build it: ask for directions",
        "goalLine": "Politely ask for directions in Korean.",
        "goalShort": "ask for directions",
        "scenario": "directions",
        "partnerName": "민수 Minsu",
        "partnerInitial": "M",
        "partnerRole": "local resident",
        "partnerPlace": "Seoul street",
        "scenarioTitle": "서울 거리 · Seoul Street",
        "scenarioSub": "Roleplay · directions & polite requests",
        "lessonPromptEn": "Where is the subway?",
        "lessonHint": "Use “어디예요?”",
        "bank": [
          "지하철역",
          "어디예요",
          "여기",
          "저기",
          "가깝다",
          "멀다"
        ],
        "bankEn": [
          "subway station",
          "where is it",
          "here",
          "there",
          "close",
          "far"
        ],
        "correct": [
          0,
          1
        ],
        "lessonCorrectTitle": "잘했어요! 🎉",
        "lessonCorrectBody": "“어디예요?” means “where is it?” — a simple yet effective phrase.",
        "lessonWrongBody": "Start by naming the place followed by “어디예요?”",
        "cultureCaption": "A busy street in Seoul",
        "cultureTitle": "Mix of Old and Modern",
        "cultureBody": "Korean streets blend tradition with modern life. Asking directions is common—locals appreciate politeness!",
        "culturePhrase": "“실례합니다” (sillyehamnida) — use for polite interruptions, like asking for directions.",
        "milestoneTitle": "You can now ask for directions politely!",
        "convo": [
          {
            "who": "p",
            "n": "안녕하세요! 길 좀 물어봐도 될까요?",
            "en": "Hello! May I ask for directions?"
          },
          {
            "who": "u",
            "n": "지하철역이 어디예요?",
            "fb": "Great choice of words — concise and clear."
          },
          {
            "who": "p",
            "n": "저쪽으로 가면 보여요.",
            "en": "If you go that way, you will see it."
          },
          {
            "who": "u",
            "n": "감사합니다!",
            "fb": "Always ends nicely with a thank you."
          },
          {
            "who": "p",
            "n": "별말씀을요!",
            "en": "You're welcome!"
          }
        ],
        "debrief": [
          {
            "title": "Simple Directions",
            "body": "“어디예요?” gives you the essential grasp for finding things."
          },
          {
            "title": "Politeness with 실례합니다",
            "body": "Before asking, '실례합니다' ensures politeness."
          }
        ],
        "grammarMini": "어디예요",
        "grammarTitle": "“어디예요?” — the polite question for location",
        "grammarIntro": "Attach this phrase to a noun to form a question about its location:",
        "gTermA": "어디예요 (eodieyo)",
        "gDescA": "“where is it?”",
        "gExA": "지하철역이 어디예요?",
        "gTermB": "실례합니다 (sillyehamnida)",
        "gDescB": "Polite way to start a question",
        "gExB": "실례합니다, 길 좀 물어봐도 될까요?",
        "clip": "서울 거리의 하루",
        "podcast": "길 찾기의 예술 #5",
        "article": "서울에서 길을 잃지 않는 법",
        "reader": [
          {
            "t": "서울에서 "
          },
          {
            "w": "길",
            "d": "road or street"
          },
          {
            "t": "을 찾는 것은 때때로 "
          },
          {
            "w": "어려워요",
            "d": "difficult"
          },
          {
            "t": ". 하지만, "
          },
          {
            "w": "친절한",
            "d": "kind"
          },
          {
            "t": " 사람들에게 길을 물어보면 대부분 "
          }
        ],
        "reviewWord": "어디예요",
        "reviewSource": "from your directions inquiry, 3 days ago",
        "reviewMeaning": "where is it?"
      },
      {
        "chapterTitle": "Chapter 3 · 가족 Family",
        "lessonTitle": "Meet the family",
        "goalTitle": "Build it: introduce your family",
        "goalLine": "Introduce your family members in Korean.",
        "goalShort": "introduce family",
        "scenario": "family",
        "partnerName": "수진 Sujin",
        "partnerInitial": "S",
        "partnerRole": "friend",
        "partnerPlace": "Sujin's house",
        "scenarioTitle": "수진의 집 · Sujin's Home",
        "scenarioSub": "Roleplay · introduction & cultural exchange",
        "lessonPromptEn": "This is my mom.",
        "lessonHint": "Use “제 — 입니다”",
        "bank": [
          "제",
          "어머니",
          "입니다",
          "아버지",
          "형제",
          "할머니"
        ],
        "bankEn": [
          "my",
          "mother",
          "is",
          "father",
          "siblings",
          "grandmother"
        ],
        "correct": [
          0,
          1,
          2
        ],
        "lessonCorrectTitle": "잘했어요! 🎉",
        "lessonCorrectBody": "“제 — 입니다” is a polite way to introduce family members.",
        "lessonWrongBody": "Start with “제” followed by the family member and “입니다.”",
        "cultureCaption": "Introducing family at a Korean home",
        "cultureTitle": "Family is foundational",
        "cultureBody": "Family structure is central in Korea; introductions often start with relations, showcasing respect and hierarchy.",
        "culturePhrase": "“이쪽은 ...” (ijjog-eun) — this is ...",
        "milestoneTitle": "You can now introduce your family in a gracious manner!",
        "convo": [
          {
            "who": "p",
            "n": "안녕하세요. 가족을 소개해 드릴게요.",
            "en": "Hello. Let me introduce my family."
          },
          {
            "who": "u",
            "n": "제 어머니입니다.",
            "fb": "Perfect, using the possessive '제' is appropriate."
          },
          {
            "who": "p",
            "n": "안녕하세요. 처음 뵙겠습니다.",
            "en": "Hello, nice to meet you."
          },
          {
            "who": "u",
            "n": "제 아버지예요.",
            "fb": "Introducing with '입니다' adds politeness."
          },
          {
            "who": "p",
            "n": "모두 건강하시지요?",
            "en": "Everyone is well, right?"
          }
        ],
        "debrief": [
          {
            "title": "Possessive 제",
            "body": "Use '제' for politeness when introducing your family members."
          },
          {
            "title": "Family Titles",
            "body": "It is respectful to use proper titles in Korean families."
          }
        ],
        "grammarMini": "제 — 입니다",
        "grammarTitle": "“제 — 입니다” — polite introduction",
        "grammarIntro": "Use this structure to introduce someone:",
        "gTermA": "입니다 (imnida)",
        "gDescA": "formal ending to describe or introduce",
        "gExA": "제 어머니입니다.",
        "gTermB": "제 (je)",
        "gDescB": "my (polite)",
        "gExB": "제 친구",
        "clip": "가족 소개의 순간",
        "podcast": "가족과의 대화 #6",
        "article": "가족의 중요성과 소개",
        "reader": [
          {
            "t": "한국에서는 "
          },
          {
            "w": "가족",
            "d": "family"
          },
          {
            "t": " 소개가 아주 중요해요. 처음 만나면 먼저 "
          },
          {
            "w": "어머니",
            "d": "mother"
          },
          {
            "t": "와 "
          },
          {
            "w": "아버지",
            "d": "father"
          },
          {
            "t": "부터 소개합니다."
          }
        ],
        "reviewWord": "제",
        "reviewSource": "from your family introduction, 3 days ago",
        "reviewMeaning": "my (polite)"
      },
      {
        "chapterTitle": "Chapter 4 · 호텔 Hotel",
        "lessonTitle": "Checking in",
        "goalTitle": "Build it: checking into a hotel",
        "goalLine": "Check into a hotel politely, in Korean.",
        "goalShort": "check into hotel",
        "scenario": "hotel",
        "partnerName": "윤호 Yunho",
        "partnerInitial": "Y",
        "partnerRole": "receptionist",
        "partnerPlace": "Central Seoul Hotel",
        "scenarioTitle": "서울 호텔 · Central Seoul",
        "scenarioSub": "Roleplay · hotel check-in & public service",
        "lessonPromptEn": "I have a reservation.",
        "lessonHint": "Use “예약했어요”",
        "bank": [
          "예약",
          "했어요",
          "방",
          "하나",
          "열쇠",
          "필요해요"
        ],
        "bankEn": [
          "reservation",
          "made",
          "room",
          "one",
          "key",
          "need"
        ],
        "correct": [
          0,
          1
        ],
        "lessonCorrectTitle": "완벽해요! 🎉",
        "lessonCorrectBody": "“예약했어요” indicates you’ve made a reservation. A crucial interaction point.",
        "lessonWrongBody": "State your reservation with “예약했어요.”",
        "cultureCaption": "Checking into a Seoul hotel",
        "cultureTitle": "Hospitality with Heart",
        "cultureBody": "Korean hotels embody efficiency and kindness—expect a warm welcome and impeccable service.",
        "culturePhrase": "“체크인” (chekeu-in) — the Konglish term for check-in.",
        "milestoneTitle": "You can now check into a hotel politely!",
        "convo": [
          {
            "who": "p",
            "n": "안녕하세요! 어떻게 도와드릴까요?",
            "en": "Hello! How may I help you?"
          },
          {
            "who": "u",
            "n": "예약했어요.",
            "fb": "Great start with your reservation statement."
          },
          {
            "who": "p",
            "n": "성함이 어떻게 되세요?",
            "en": "What is your name?"
          },
          {
            "who": "u",
            "n": "김민준입니다.",
            "fb": "Always polite to give your full name."
          },
          {
            "who": "p",
            "n": "예약 확인되었습니다. 열쇠 여기 있습니다.",
            "en": "Your reservation is confirmed. Here's your key."
          }
        ],
        "debrief": [
          {
            "title": "Expect Formality",
            "body": "Hotel interactions are formal—use '입니다' endings."
          },
          {
            "title": "Reservation Terms",
            "body": "“예약” is a key term in travel contexts."
          }
        ],
        "grammarMini": "예약했어요",
        "grammarTitle": "“예약했어요” — stating a reservation",
        "grammarIntro": "Declare your reservation status with this phrase:",
        "gTermA": "예약했어요 (yeyakhaess-eoyo)",
        "gDescA": "I've made a reservation",
        "gExA": "호텔에 예약했어요.",
        "gTermB": "체크인 (chekeu-in)",
        "gDescB": "check-in (a common Konglish term)",
        "gExB": "체크인 시간은 언제인가요?",
        "clip": "서울 호텔의 하루",
        "podcast": "호텔 필수 표현 #7",
        "article": "편안한 호텔 숙박을 위한 팁",
        "reader": [
          {
            "t": "호텔에서 "
          },
          {
            "w": "체크인",
            "d": "check-in"
          },
          {
            "t": "을 할 때는 "
          },
          {
            "w": "예약",
            "d": "reservation"
          },
          {
            "t": " 확인이 필요해요. "
          },
          {
            "w": "열쇠",
            "d": "key"
          },
          {
            "t": "를 받으면 방에 들어갈 수 있어요."
          }
        ],
        "reviewWord": "예약했어요",
        "reviewSource": "from your hotel check-in, 3 days ago",
        "reviewMeaning": "I've made a reservation"
      },
      {
        "chapterTitle": "Chapter 5 · 시장 Market",
        "lessonTitle": "Shopping at the market",
        "goalTitle": "Build it: buy fruit",
        "goalLine": "Politely inquire and purchase fruit at a Korean market.",
        "goalShort": "buy fruit",
        "scenario": "market",
        "partnerName": "영주 Youngju",
        "partnerInitial": "Y",
        "partnerRole": "vendor",
        "partnerPlace": "Gangnam Market",
        "scenarioTitle": "강남 시장 · Gangnam Market",
        "scenarioSub": "Roleplay · bargaining & purchase etiquette",
        "lessonPromptEn": "How much are apples?",
        "lessonHint": "Use “얼마예요?”",
        "bank": [
          "사과",
          "얼마예요",
          "킬로그램",
          "달라",
          "저렴하다",
          "맛있다"
        ],
        "bankEn": [
          "apples",
          "how much is it",
          "kilograms",
          "dollar",
          "cheap",
          "delicious"
        ],
        "correct": [
          0,
          1
        ],
        "lessonCorrectTitle": "잘했어요! 🎉",
        "lessonCorrectBody": "“얼마예요?” is essential for anyone shopping at a market.",
        "lessonWrongBody": "State the item first, followed by “얼마예요?”",
        "cultureCaption": "An energetic market scene",
        "cultureTitle": "Markets are alive",
        "cultureBody": "Korean markets are bustling with bargaining—it’s a dance of respect and price negotiation.",
        "culturePhrase": "“깎아 주세요.” (kkakka jusiyo) — ask for a discount politely.",
        "milestoneTitle": "You can now shop confidently in a Korean market!",
        "convo": [
          {
            "who": "p",
            "n": "어서 오세요! 무엇을 찾고 계세요?",
            "en": "Welcome! What are you looking for?"
          },
          {
            "who": "u",
            "n": "사과는 얼마예요?",
            "fb": "Direct yet courteous—good inquiry."
          },
          {
            "who": "p",
            "n": "킬로그램 당 이천 원입니다.",
            "en": "It's 2,000 won per kilogram."
          },
          {
            "who": "u",
            "n": "조금만 깎아 주세요.",
            "fb": "Adding 'please' makes bargaining polite."
          },
          {
            "who": "p",
            "n": "좋아요, 깎아 드릴게요.",
            "en": "Alright, I'll give you a discount."
          }
        ],
        "debrief": [
          {
            "title": "Bargain Basics",
            "body": "Bargaining is an art form in markets—be polite yet firm."
          },
          {
            "title": "Core Phrases",
            "body": "'얼마예요?' and '깎아 주세요.' are crucial in these interactions."
          }
        ],
        "grammarMini": "얼마예요",
        "grammarTitle": "“얼마예요?” — asking for price",
        "grammarIntro": "Use this question to query the cost of items:",
        "gTermA": "얼마예요 (eolmayeyo)",
        "gDescA": "how much is it?",
        "gExA": "이것은 얼마예요?",
        "gTermB": "깎아 주세요 (kkakka jusiyo)",
        "gDescB": "please give me a discount",
        "gExB": "사과 좀 깎아 주세요.",
        "clip": "상인과 손님의 대화",
        "podcast": "시장 투어 팟캐스트 #8",
        "article": "강남시장에서 꼭 사야 할 것들",
        "reader": [
          {
            "t": "한국 시장은 아주 "
          },
          {
            "w": "활기차요",
            "d": "lively"
          },
          {
            "t": ". "
          },
          {
            "w": "사과",
            "d": "apples"
          },
          {
            "t": "를 사고 싶으면 먼저 "
          },
          {
            "w": "가격",
            "d": "price"
          },
          {
            "t": "을 물어보세요."
          }
        ],
        "reviewWord": "얼마예요",
        "reviewSource": "from your market inquiry, 3 days ago",
        "reviewMeaning": "how much is it?"
      },
      {
        "chapterTitle": "Chapter 6 · 긴급 상황 Emergency",
        "lessonTitle": "Seeking help",
        "goalTitle": "Build it: call for help",
        "goalLine": "Politely seek help in an emergency, in Korean.",
        "goalShort": "call for help",
        "scenario": "emergency",
        "partnerName": "경호 Gyeongho",
        "partnerInitial": "G",
        "partnerRole": "bystander",
        "partnerPlace": "Seoul street",
        "scenarioTitle": "서울 거리 · Emergency response",
        "scenarioSub": "Roleplay · emergency & assistance",
        "lessonPromptEn": "Help me, please.",
        "lessonHint": "Use “도와주세요!”",
        "bank": [
          "도와주세요",
          "긴급",
          "상황",
          "경찰",
          "구급차",
          "화재"
        ],
        "bankEn": [
          "help me",
          "emergency",
          "situation",
          "police",
          "ambulance",
          "fire"
        ],
        "correct": [
          0
        ],
        "lessonCorrectTitle": "훌륭해요! 🎉",
        "lessonCorrectBody": "“도와주세요!” is the key phrase to gain assistance swiftly.",
        "lessonWrongBody": "When in distress, shout “도와주세요!”",
        "cultureCaption": "In emergency situations",
        "cultureTitle": "Swift and United",
        "cultureBody": "Korean society values quick response and community help during emergencies. Knowing how to ask for help is vital.",
        "culturePhrase": "“119” — the number for emergency services, similar to 911.",
        "milestoneTitle": "You can now request urgent assistance correctly!",
        "convo": [
          {
            "who": "p",
            "n": "무슨 일이세요?",
            "en": "What happened?"
          },
          {
            "who": "u",
            "n": "도와주세요! 긴급 상황이에요.",
            "fb": "Clear and urgent—very effective."
          },
          {
            "who": "p",
            "n": "곧 경찰을 불러드릴게요.",
            "en": "I'll call the police for you."
          },
          {
            "who": "u",
            "n": "감사합니다!",
            "fb": "Always express gratitude, even in emergencies."
          },
          {
            "who": "p",
            "n": "조심하세요!",
            "en": "Be careful!"
          }
        ],
        "debrief": [
          {
            "title": "Emergency Numbers",
            "body": "In Korea, call 119 for medical and fire emergencies."
          },
          {
            "title": "Polite Urgency",
            "body": "Use ‘도와주세요’ to express urgent need politely but firmly."
          }
        ],
        "grammarMini": "도와주세요",
        "grammarTitle": "“도와주세요!” — Asking for help",
        "grammarIntro": "Use this phrase to seek assistance:",
        "gTermA": "도와주세요 (dowajuseyo)",
        "gDescA": "help me, please",
        "gExA": "긴급 상황입니다, 도와주세요!",
        "gTermB": "긴급 (gin-geup)",
        "gDescB": "emergency",
        "gExB": "긴급 상황이 발생했습니다.",
        "clip": "서울의 긴급 구조 현장",
        "podcast": "긴급 상황 대처법 #9",
        "article": "긴급 상황에서의 차분함 유지",
        "reader": [
          {
            "t": "한국에서는 "
          },
          {
            "w": "긴급",
            "d": "emergency"
          },
          {
            "t": " 상황에서 "
          },
          {
            "w": "도와주세요",
            "d": "help me"
          },
          {
            "t": "라고 외쳐야 해요. "
          },
          {
            "w": "경찰",
            "d": "police"
          },
          {
            "t": "과 구급차가 빨리 옵니다."
          }
        ],
        "reviewWord": "도와주세요",
        "reviewSource": "from your emergency call, 3 days ago",
        "reviewMeaning": "help me, please"
      }
    ]
  },
  "de": {
    "name": "German",
    "flag": "🇩🇪",
    "code": "DE",
    "font": "",
    "locale": "de-DE",
    "greeting": "Guten Morgen, Maya",
    "accent": "Germany (Standard)",
    "chapters": [
      {
        "chapterTitle": "Chapter 1 · Im Café",
        "lessonTitle": "Greetings & warmth",
        "goalTitle": "Build it: order a coffee",
        "goalLine": "Order a coffee — politely, in German.",
        "goalShort": "order a coffee",
        "scenario": "cafe",
        "partnerName": "Lukas",
        "partnerInitial": "L",
        "partnerRole": "Kellner",
        "partnerPlace": "Berlin café",
        "scenarioTitle": "Im Café · Berlin",
        "scenarioSub": "Roleplay · order & a little small talk",
        "lessonPromptEn": "I'd like a coffee with milk, please.",
        "lessonHint": "Why “mit”?",
        "bank": [
          "Ich hätte gern",
          "einen Kaffee",
          "mit Milch",
          "bitte",
          "die Rechnung",
          "ohne"
        ],
        "bankEn": [
          "I would like",
          "a coffee",
          "with milk",
          "please",
          "the bill",
          "without"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "Perfekt! 🎉",
        "lessonCorrectBody": "“Ich hätte gern” (I'd like) is the polite order — softer than “Ich will” (I want).",
        "lessonWrongBody": "Start with the polite “I'd like,” then what you want.",
        "cultureCaption": "A café in Berlin · 10am",
        "cultureTitle": "Bring cash, and keep it formal",
        "cultureBody": "Many German cafés still prefer cash — don't assume cards. With staff you don't know, use the formal “Sie,” not “du.” And tipping is modest: round up or add a euro, said out loud as you pay.",
        "culturePhrase": "“Stimmt so” — “keep the change,” the normal way to tip.",
        "milestoneTitle": "You can now order a coffee — politely, in German.",
        "convo": [
          {
            "who": "p",
            "n": "Guten Tag! Was darf es sein?",
            "en": "Hello! What would you like?"
          },
          {
            "who": "u",
            "n": "Ich hätte gern einen Kaffee mit Milch, bitte.",
            "fb": "Great — “Ich hätte gern” is very polite"
          },
          {
            "who": "p",
            "n": "Gerne. Sonst noch etwas?",
            "en": "Of course. Anything else?"
          },
          {
            "who": "u",
            "n": "Nein, danke. Die Rechnung, bitte.",
            "fb": "Perfect — natural and polite"
          },
          {
            "who": "p",
            "n": "Das macht drei Euro.",
            "en": "That'll be three euros."
          }
        ],
        "debrief": [
          {
            "title": "Use formal “Sie”",
            "body": "With staff you don't know, “Sie” is expected — “du” feels too casual."
          },
          {
            "title": "Accusative “einen”",
            "body": "“einen Kaffee” — masculine nouns take “einen” as the object. You nailed it."
          }
        ],
        "grammarMini": "der/die/das",
        "grammarTitle": "“der · die · das” — the three genders",
        "grammarIntro": "German nouns are masculine, feminine or neuter — and the article changes as the object:",
        "gTermA": "der → den",
        "gDescA": "masculine — becomes “den” as object",
        "gExA": "Ich nehme den Kaffee.",
        "gTermB": "die / das",
        "gDescB": "feminine / neuter — stay the same",
        "gExB": "Ich nehme die Milch.",
        "clip": "Der Wochenmarkt in Berlin, mit Einheimischen",
        "podcast": "Kaffee mit Lukas — Folge 4",
        "article": "Das kleine Ritual des deutschen Kaffees",
        "reader": [
          {
            "t": "In Deutschland trinken viele Menschen ihren Kaffee in einem "
          },
          {
            "w": "Café",
            "d": "café"
          },
          {
            "t": ". Man bestellt höflich und zahlt oft mit "
          },
          {
            "w": "Bargeld",
            "d": "cash"
          },
          {
            "t": ". Beim Bezahlen sagt man freundlich "
          },
          {
            "w": "stimmt so",
            "d": "“keep the change” — the usual way to tip"
          },
          {
            "t": ". Es ist eine kleine, ruhige Pause am Tag."
          }
        ],
        "reviewWord": "Rechnung",
        "reviewSource": "from your café visit, 2 days ago",
        "reviewMeaning": "the bill / check (feminine: die Rechnung)"
      },
      {
        "chapterTitle": "Chapter 2 · Der Weg",
        "lessonTitle": "Directions & navigation",
        "goalTitle": "Build it: ask for directions",
        "goalLine": "Ask for directions — politely, in German.",
        "goalShort": "ask for directions",
        "scenario": "directions",
        "partnerName": "Anna",
        "partnerInitial": "A",
        "partnerRole": "Passantin",
        "partnerPlace": "Berlin street",
        "scenarioTitle": "Unterwegs · Berlin",
        "scenarioSub": "Roleplay · ask & follow directions",
        "lessonPromptEn": "Excuse me, where is the train station?",
        "lessonHint": "Start with “Entschuldigung.”",
        "bank": [
          "Entschuldigung",
          "wo ist",
          "der Bahnhof",
          "bitte",
          "nach links",
          "geradeaus"
        ],
        "bankEn": [
          "Excuse me",
          "where is",
          "the train station",
          "please",
          "to the left",
          "straight ahead"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "Perfekt! 🎉",
        "lessonCorrectBody": "“Entschuldigung” (Excuse me) is essential to start polite inquiries.",
        "lessonWrongBody": "Begin with “Excuse me,” then ask for what you need.",
        "cultureCaption": "Navigating Berlin · 11am",
        "cultureTitle": "Public transport is king",
        "cultureBody": "Berlin's transit system is reliable. Always validate your ticket before boarding, and don't be afraid to ask locals for help — most are happy to assist.",
        "culturePhrase": "“Wie komme ich zum...” — How do I get to...",
        "milestoneTitle": "You can now ask for directions — politely, in German.",
        "convo": [
          {
            "who": "p",
            "n": "Hallo! Kann ich Ihnen helfen?",
            "en": "Hello! Can I help you?"
          },
          {
            "who": "u",
            "n": "Entschuldigung, wo ist der Bahnhof, bitte?",
            "fb": "Excellent! Using “Entschuldigung” makes it cordial."
          },
          {
            "who": "p",
            "n": "Der Bahnhof ist geradeaus und dann nach links.",
            "en": "The train station is straight ahead and then to the left."
          },
          {
            "who": "u",
            "n": "Vielen Dank für Ihre Hilfe!",
            "fb": "Perfect gratitude expression."
          },
          {
            "who": "p",
            "n": "Gerne, einen schönen Tag noch!",
            "en": "You're welcome, have a nice day!"
          }
        ],
        "debrief": [
          {
            "title": "Polite forms",
            "body": "“Entschuldigung” is a polite way to start any interaction."
          },
          {
            "title": "“Der Bahnhof”",
            "body": "“Der” as a subject but remains the same as an object when asking directions."
          }
        ],
        "grammarMini": "der/die/das",
        "grammarTitle": "“der · die · das” — remains consistent in locations",
        "grammarIntro": "German nouns keep their article in directional phrases.",
        "gTermA": "der → bleibt gleich",
        "gDescA": "Stays the same in directional queries",
        "gExA": "Ich gehe zum Bahnhof.",
        "gTermB": "nach / zu",
        "gDescB": "Use “nach” for cities, “zu” for specific places",
        "gExB": "Ich gehe nach Berlin.",
        "clip": "Berlins Verkehrsnetz erklärt von Einheimischen",
        "podcast": "Der Weg zu Fuß — Folge 8",
        "article": "Das U-Bahn-Netz von Berlin verstehen",
        "reader": [
          {
            "t": "In Berlin nutzen viele Menschen die öffentlichen Verkehrsmittel. Es ist wichtig, "
          },
          {
            "w": "Bargeld",
            "d": "cash"
          },
          {
            "t": " dabei zu haben, um Tickets zu kaufen. Wenn man nach dem Weg fragt, sagen viele "
          },
          {
            "w": "freundlich",
            "d": "friendly"
          },
          {
            "t": " “geradeaus” oder “nach links”."
          }
        ],
        "reviewWord": "geradeaus",
        "reviewSource": "from your street navigation, 2 days ago",
        "reviewMeaning": "straight ahead"
      },
      {
        "chapterTitle": "Chapter 3 · Die Familie",
        "lessonTitle": "Family & relationships",
        "goalTitle": "Build it: talk about your family",
        "goalLine": "Describe your family — confidently, in German.",
        "goalShort": "discuss family",
        "scenario": "family",
        "partnerName": "Katrin",
        "partnerInitial": "K",
        "partnerRole": "Cousin",
        "partnerPlace": "Family gathering",
        "scenarioTitle": "Familienfeier · Stuttgart",
        "scenarioSub": "Roleplay · introduce relatives",
        "lessonPromptEn": "This is my mother, she is very kind.",
        "lessonHint": "Remember “meine” for feminine.",
        "bank": [
          "Das ist",
          "meine Mutter",
          "sie ist",
          "sehr nett",
          "mein Bruder",
          "verheiratet"
        ],
        "bankEn": [
          "This is",
          "my mother",
          "she is",
          "very kind",
          "my brother",
          "married"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "Super! 🎉",
        "lessonCorrectBody": "“Das ist meine Mutter” is the correct phrase for introducing family.",
        "lessonWrongBody": "Start with “Das ist,” then specify the family member.",
        "cultureCaption": "Meeting family · 3pm",
        "cultureTitle": "Family means closeness",
        "cultureBody": "In German culture, family gatherings are frequent. Terms of endearment vary, but politeness persists — even with family, greetings and farewells are cordial.",
        "culturePhrase": "“Tante” — Aunt",
        "milestoneTitle": "You can now describe your family — confidently, in German.",
        "convo": [
          {
            "who": "p",
            "n": "Hallo! Wer ist das?",
            "en": "Hello! Who is that?"
          },
          {
            "who": "u",
            "n": "Das ist meine Mutter, sie ist sehr nett.",
            "fb": "Nicely done! Introductions are smooth."
          },
          {
            "who": "p",
            "n": "Und das ist dein Bruder?",
            "en": "And is that your brother?"
          },
          {
            "who": "u",
            "n": "Ja, das ist mein Bruder. Er ist verheiratet.",
            "fb": "Absolutely, you've got it!"
          },
          {
            "who": "p",
            "n": "Danke fürs Vorstellen!",
            "en": "Thanks for the introduction!"
          }
        ],
        "debrief": [
          {
            "title": "Family terms",
            "body": "Pay attention to gender when talking about family members: “mein Vater” vs. “meine Mutter”."
          },
          {
            "title": "Describing qualities",
            "body": "Using “sehr” to emphasize qualities, e.g., “sehr nett”."
          }
        ],
        "grammarMini": "possessive adjectives",
        "grammarTitle": "Possessive adjectives in German",
        "grammarIntro": "Possessive adjectives change with gender and number of the noun.",
        "gTermA": "mein",
        "gDescA": "Use for masculine/neuter nouns",
        "gExA": "Das ist mein Onkel.",
        "gTermB": "meine",
        "gDescB": "Use for feminine/plural nouns",
        "gExB": "Das ist meine Tante.",
        "clip": "Mehr über deutsche Familienstrukturen",
        "podcast": "Familienzeit — Folge 12",
        "article": "Die Struktur der deutschen Familie",
        "reader": [
          {
            "t": "Familien sind in Deutschland sehr "
          },
          {
            "w": "wichtig",
            "d": "important"
          },
          {
            "t": ". Bei Familientreffen sprechen wir oft über "
          },
          {
            "w": "Erinnerungen",
            "d": "memories"
          },
          {
            "t": " und erzählen Geschichten."
          }
        ],
        "reviewWord": "Mutter",
        "reviewSource": "from your family introduction, 2 days ago",
        "reviewMeaning": "mother"
      },
      {
        "chapterTitle": "Chapter 4 · Im Hotel",
        "lessonTitle": "Hotel & accommodation",
        "goalTitle": "Build it: check into a hotel",
        "goalLine": "Check into a hotel — smoothly, in German.",
        "goalShort": "hotel check-in",
        "scenario": "hotel",
        "partnerName": "Johann",
        "partnerInitial": "J",
        "partnerRole": "Rezeptionist",
        "partnerPlace": "Munich hotel",
        "scenarioTitle": "An der Rezeption · München",
        "scenarioSub": "Roleplay · check-in & services",
        "lessonPromptEn": "I have a reservation under the name Schmidt.",
        "lessonHint": "Use “auf den Namen.”",
        "bank": [
          "Ich habe",
          "eine Reservierung",
          "auf den Namen",
          "Schmidt",
          "ein Doppelzimmer",
          "Frühstück"
        ],
        "bankEn": [
          "I have",
          "a reservation",
          "under the name",
          "Schmidt",
          "a double room",
          "breakfast"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "Großartig! 🎉",
        "lessonCorrectBody": "Use “Ich habe eine Reservierung” to begin your check-in.",
        "lessonWrongBody": "Start with “Ich habe” to indicate possession.",
        "cultureCaption": "At reception · 9am",
        "cultureTitle": "German hotels: efficient and precise",
        "cultureBody": "Punctuality and orderliness are key in German hospitality. Confirm reservations ahead, and always specify needs clearly — it’s appreciated.",
        "culturePhrase": "“Frühstück inklusive?” — Breakfast included?",
        "milestoneTitle": "You can now check into a hotel — smoothly, in German.",
        "convo": [
          {
            "who": "p",
            "n": "Willkommen im Hotel! Haben Sie eine Reservierung?",
            "en": "Welcome to the hotel! Do you have a reservation?"
          },
          {
            "who": "u",
            "n": "Ich habe eine Reservierung auf den Namen Schmidt.",
            "fb": "Perfect reservation introduction!"
          },
          {
            "who": "p",
            "n": "Wunderbar, ein Doppelzimmer für Sie. Möchten Sie Frühstück?",
            "en": "Wonderful, a double room for you. Would you like breakfast?"
          },
          {
            "who": "u",
            "n": "Ja, bitte. Ist das Frühstück inklusive?",
            "fb": "Great question for additional services."
          },
          {
            "who": "p",
            "n": "Ja, das ist es. Ich wünsche Ihnen einen angenehmen Aufenthalt!",
            "en": "Yes, it is. I hope you have a pleasant stay!"
          }
        ],
        "debrief": [
          {
            "title": "Specific phrasing for hotels",
            "body": "Use “auf den Namen” for reservations — literally 'on the name'."
          },
          {
            "title": "Room types and inquiries",
            "body": "Always specify room type, for example, ein Einzelzimmer (single room) or ein Doppelzimmer (double room)."
          }
        ],
        "grammarMini": "präpositionaler Ausdruck",
        "grammarTitle": "Prepositional expression for reservations",
        "grammarIntro": "Reservations in German require specific prepositions.",
        "gTermA": "auf",
        "gDescA": "used for names",
        "gExA": "Eine Reservierung auf den Namen Schmidt.",
        "gTermB": "inklusive",
        "gDescB": "used to confirm inclusivity",
        "gExB": "Ist Frühstück inklusive?",
        "clip": "Ein Insiderblick auf deutsche Hotels",
        "podcast": "Check-in: was zu erwarten ist — Folge 6",
        "article": "Das A und O des Hotelaufenthaltes in Deutschland",
        "reader": [
          {
            "t": "In einem deutschen Hotel ist der "
          },
          {
            "w": "Check-in",
            "d": "check-in"
          },
          {
            "t": " oft sehr "
          },
          {
            "w": "effizient",
            "d": "efficient"
          },
          {
            "t": ". Es ist wichtig, alle "
          },
          {
            "w": "Details",
            "d": "details"
          },
          {
            "t": " klar anzugeben."
          }
        ],
        "reviewWord": "Reservierung",
        "reviewSource": "from your hotel check-in, 2 days ago",
        "reviewMeaning": "reservation (feminine: die Reservierung)"
      },
      {
        "chapterTitle": "Chapter 5 · Auf dem Markt",
        "lessonTitle": "Market & shopping",
        "goalTitle": "Build it: buy fruit",
        "goalLine": "Buy fruit — comfortably, in German.",
        "goalShort": "buy fruit",
        "scenario": "market",
        "partnerName": "Frieda",
        "partnerInitial": "F",
        "partnerRole": "Marktfrau",
        "partnerPlace": "Hamburg market",
        "scenarioTitle": "Der Wochenmarkt · Hamburg",
        "scenarioSub": "Roleplay · purchase & chat",
        "lessonPromptEn": "I'd like two apples, please.",
        "lessonHint": "Use “zwei Äpfel.”",
        "bank": [
          "Ich hätte gern",
          "zwei Äpfel",
          "bitte",
          "frisch",
          "diese Tomaten",
          "kosten"
        ],
        "bankEn": [
          "I'd like",
          "two apples",
          "please",
          "fresh",
          "these tomatoes",
          "cost"
        ],
        "correct": [
          0,
          1,
          2
        ],
        "lessonCorrectTitle": "Fantastisch! 🎉",
        "lessonCorrectBody": "“Ich hätte gern” is perfect for polite requests at the market.",
        "lessonWrongBody": "Begin with “Ich hätte gern” for a polite request.",
        "cultureCaption": "Market morning · 9:30am",
        "cultureTitle": "Markets: full of life",
        "cultureBody": "German markets are vibrant spots — haggle politely and show appreciation for high-quality produce. Learn the names of local fruits and vegetables to blend in seamlessly.",
        "culturePhrase": "“Was kostet das?” — How much is this?",
        "milestoneTitle": "You can now buy fruit — comfortably, in German.",
        "convo": [
          {
            "who": "p",
            "n": "Guten Morgen! Was darf's sein?",
            "en": "Good morning! What can I get you?"
          },
          {
            "who": "u",
            "n": "Ich hätte gern zwei Äpfel, bitte.",
            "fb": "Perfect use of polite ordering!"
          },
          {
            "who": "p",
            "n": "Natürlich, kommt sofort. Möchten Sie noch etwas?",
            "en": "Of course, coming right up. Anything else?"
          },
          {
            "who": "u",
            "n": "Ja, wie viel kosten diese Tomaten?",
            "fb": "Great inquiry about pricing."
          },
          {
            "who": "p",
            "n": "Die kosten drei Euro.",
            "en": "They cost three euros."
          }
        ],
        "debrief": [
          {
            "title": "Polite and precise",
            "body": "Start interactions with greetings and end with ‘bitte’ to keep it pleasant."
          },
          {
            "title": "Price inquiries",
            "body": "Use “Was kostet das?” to ask for prices, common in markets."
          }
        ],
        "grammarMini": "quantifiers",
        "grammarTitle": "German quantifiers",
        "grammarIntro": "Quantifiers adjust based on what’s being counted.",
        "gTermA": "zwei",
        "gDescA": "Basic numeral, does not change form based on item",
        "gExA": "Ich nehme zwei Äpfel.",
        "gTermB": "diese",
        "gDescB": "Used to specify objects",
        "gExB": "Diese Tomaten sind frisch.",
        "clip": "Ein Tag auf dem Hamburger Wochenmarkt",
        "podcast": "Marktgespräche — Folge 9",
        "article": "Die Vielfalt der deutschen Märkte",
        "reader": [
          {
            "t": "Auf dem Markt findet man viele "
          },
          {
            "w": "frische",
            "d": "fresh"
          },
          {
            "t": " Produkte. Obst und Gemüse sind besonders "
          },
          {
            "w": "beliebt",
            "d": "popular"
          },
          {
            "t": ", und viele Menschen genießen den Einkauf im Freien."
          }
        ],
        "reviewWord": "Äpfel",
        "reviewSource": "from your market purchase, 2 days ago",
        "reviewMeaning": "apples (plural: die Äpfel)"
      },
      {
        "chapterTitle": "Chapter 6 · Notfall",
        "lessonTitle": "Emergency & help",
        "goalTitle": "Build it: seek help in an emergency",
        "goalLine": "Seek help — urgently, in German.",
        "goalShort": "emergency help",
        "scenario": "emergency",
        "partnerName": "Polizei",
        "partnerInitial": "P",
        "partnerRole": "Officer",
        "partnerPlace": "City center",
        "scenarioTitle": "Notdienst · Hamburg",
        "scenarioSub": "Roleplay · request aid & report",
        "lessonPromptEn": "Help! I need a doctor.",
        "lessonHint": "Start with “Hilfe!”",
        "bank": [
          "Hilfe",
          "ich brauche",
          "einen Arzt",
          "bitte schnell",
          "die Polizei",
          "rufen"
        ],
        "bankEn": [
          "Help",
          "I need",
          "a doctor",
          "please hurry",
          "the police",
          "call"
        ],
        "correct": [
          0,
          1,
          2
        ],
        "lessonCorrectTitle": "Hervorragend! 🎉",
        "lessonCorrectBody": "“Hilfe” is your go-to word in emergencies.",
        "lessonWrongBody": "Lead with “Hilfe” when things are urgent.",
        "cultureCaption": "Emergency situations · 2pm",
        "cultureTitle": "Emergencies: be direct",
        "cultureBody": "Germans value directness, especially in emergencies. State your situation clearly and don’t be afraid to ask for assistance from anyone nearby.",
        "culturePhrase": "“Rufen Sie einen Krankenwagen!” — Call an ambulance!",
        "milestoneTitle": "You can now seek help in emergencies — urgently, in German.",
        "convo": [
          {
            "who": "p",
            "n": "Was ist passiert?",
            "en": "What happened?"
          },
          {
            "who": "u",
            "n": "Hilfe! Ich brauche einen Arzt!",
            "fb": "Critical way to indicate the need for medical help."
          },
          {
            "who": "p",
            "n": "Ein Krankenwagen ist unterwegs.",
            "en": "An ambulance is on its way."
          },
          {
            "who": "u",
            "n": "Vielen Dank, ich bin in Panik.",
            "fb": "Good way to express urgency and need."
          },
          {
            "who": "p",
            "n": "Bleiben Sie ruhig, wir sind hier um zu helfen.",
            "en": "Stay calm, we are here to help."
          }
        ],
        "debrief": [
          {
            "title": "The power of “Hilfe”",
            "body": "Always start with “Hilfe” for instant attention."
          },
          {
            "title": "Emergency numbers",
            "body": "112 is the emergency number in Germany — quick and vital to know."
          }
        ],
        "grammarMini": "imperatives",
        "grammarTitle": "Using imperatives in emergencies",
        "grammarIntro": "Imperatives are vital in urgent situations.",
        "gTermA": "rufen",
        "gDescA": "Base form, used to call for action",
        "gExA": "Rufen Sie die Polizei!",
        "gTermB": "bleiben",
        "gDescB": "Base form, used to ask for calmness",
        "gExB": "Bleiben Sie ruhig!",
        "clip": "Sicherheitsmaßnahmen in der Stadt erklärt",
        "podcast": "Notfallvorsorge — Folge 2",
        "article": "Erste Schritte bei einem Notfall",
        "reader": [
          {
            "t": "Im Notfall ist es wichtig, schnell zu handeln. Nutzen Sie die Nummer "
          },
          {
            "w": "eins",
            "d": "one"
          },
          {
            "t": "eins, zwei. Bleiben Sie "
          },
          {
            "w": "ruhig",
            "d": "calm"
          },
          {
            "t": " und geben Sie klare Informationen."
          }
        ],
        "reviewWord": "Hilfe",
        "reviewSource": "from your emergency role-play, 2 days ago",
        "reviewMeaning": "help"
      }
    ]
  },
  "it": {
    "name": "Italian",
    "flag": "🇮🇹",
    "code": "IT",
    "font": "",
    "locale": "it-IT",
    "greeting": "Buongiorno, Maya",
    "accent": "Italy (Standard)",
    "chapters": [
      {
        "chapterTitle": "Chapter 1 · Al bar",
        "lessonTitle": "Greetings & warmth",
        "goalTitle": "Build it: order a coffee",
        "goalLine": "Order a coffee — the Italian way.",
        "goalShort": "order a coffee",
        "scenario": "cafe",
        "partnerName": "Giulia",
        "partnerInitial": "G",
        "partnerRole": "barista",
        "partnerPlace": "Roma bar",
        "scenarioTitle": "Al bar · Roma",
        "scenarioSub": "Roleplay · order & a little small talk",
        "lessonPromptEn": "I'd like a coffee with milk, please.",
        "lessonHint": "Why “vorrei”?",
        "bank": [
          "Vorrei",
          "un caffè",
          "con latte",
          "per favore",
          "il conto",
          "senza"
        ],
        "bankEn": [
          "I would like",
          "a coffee",
          "with milk",
          "please",
          "the bill",
          "without"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "Perfetto! 🎉",
        "lessonCorrectBody": "“Vorrei” (I'd like) is the polite order — gentler than “Voglio” (I want).",
        "lessonWrongBody": "Start with the polite “I'd like,” then what you want.",
        "cultureCaption": "A bar in Roma · 8am",
        "cultureTitle": "Coffee is a quick ritual, standing up",
        "cultureBody": "In Italy you drink your espresso “al banco” — standing at the counter, in a minute or two. Sitting at a table can cost double. And never order a cappuccino after 11am: it's a breakfast drink, and locals will notice.",
        "culturePhrase": "“Un caffè” means an espresso — ask for “un americano” if you want it long.",
        "milestoneTitle": "You can now order a coffee — the Italian way.",
        "convo": [
          {
            "who": "p",
            "n": "Buongiorno! Cosa le porto?",
            "en": "Good morning! What can I get you?"
          },
          {
            "who": "u",
            "n": "Vorrei un caffè con latte, per favore.",
            "fb": "Great — “Vorrei” is polite and natural"
          },
          {
            "who": "p",
            "n": "Subito. Altro?",
            "en": "Right away. Anything else?"
          },
          {
            "who": "u",
            "n": "No, grazie. Il conto, per favore.",
            "fb": "Perfect — “il conto” is exactly right"
          },
          {
            "who": "p",
            "n": "Certo, un euro e dieci.",
            "en": "Of course — one euro ten."
          }
        ],
        "debrief": [
          {
            "title": "“un caffè” = espresso",
            "body": "If you want a longer coffee, say “un americano” — “un caffè” is always an espresso."
          },
          {
            "title": "Stress on caffè",
            "body": "The accent falls on the last syllable: caf-FÈ — you had it."
          }
        ],
        "grammarMini": "il / la",
        "grammarTitle": "“il · la” — masculine and feminine “the”",
        "grammarIntro": "Italian nouns are masculine or feminine, and “the” changes to match:",
        "gTermA": "il (m.)",
        "gDescA": "masculine singular",
        "gExA": "il caffè, il conto",
        "gTermB": "la (f.)",
        "gDescB": "feminine singular",
        "gExB": "la mattina, la cassa",
        "clip": "Il mercato di Campo de' Fiori, dal vivo",
        "podcast": "Un caffè con Giulia — ep. 4",
        "article": "Il piccolo rito del caffè italiano",
        "reader": [
          {
            "t": "In Italia molte persone bevono il caffè "
          },
          {
            "w": "al banco",
            "d": "at the counter — standing, and cheaper than sitting"
          },
          {
            "t": ". Si ordina, si beve in fretta e si "
          },
          {
            "w": "paga",
            "d": "pay (one pays — from pagare, to pay)"
          },
          {
            "t": " alla cassa. Il cappuccino si prende solo la "
          },
          {
            "w": "mattina",
            "d": "morning"
          },
          {
            "t": ". È un piccolo rito quotidiano."
          }
        ],
        "reviewWord": "conto",
        "reviewSource": "from your bar visit, 2 days ago",
        "reviewMeaning": "the bill / check (il conto)"
      },
      {
        "chapterTitle": "Chapter 2 · Indicazioni",
        "lessonTitle": "Finding Your Way",
        "goalTitle": "Build it: ask for directions",
        "goalLine": "Ask for and understand directions — the Italian way.",
        "goalShort": "ask for directions",
        "scenario": "directions",
        "partnerName": "Marco",
        "partnerInitial": "M",
        "partnerRole": "local resident",
        "partnerPlace": "Piazza Navona",
        "scenarioTitle": "In strada · Roma",
        "scenarioSub": "Roleplay · asking and understanding directions",
        "lessonPromptEn": "Can you tell me how to get to the train station?",
        "lessonHint": "Use “Mi può dire?” for polite requests.",
        "bank": [
          "Mi può",
          "dire",
          "come arrivare",
          "alla stazione",
          "fermata",
          "davanti"
        ],
        "bankEn": [
          "Can you",
          "tell me",
          "how to get to",
          "the train station",
          "stop",
          "in front of"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "Ben fatto! 🎉",
        "lessonCorrectBody": "“Mi può dire” is a formal and polite way to ask for directions.",
        "lessonWrongBody": "Start with “Mi può dire” for a polite request.",
        "cultureCaption": "Asking directions in Italy",
        "cultureTitle": "Italians love to help tourists",
        "cultureBody": "When asking for directions, politeness goes a long way. Start with a greeting and always thank the person for their help. A simple 'grazie' can lead to warm smiles and friendly chats.",
        "culturePhrase": "“Sempre dritto” means straight ahead.",
        "milestoneTitle": "You can now ask for directions confidently.",
        "convo": [
          {
            "who": "p",
            "n": "Buongiorno, ha bisogno di aiuto?",
            "en": "Good morning, do you need help?"
          },
          {
            "who": "u",
            "n": "Mi può dire come arrivare alla stazione, per favore?",
            "fb": "Excellent — polite and clear"
          },
          {
            "who": "p",
            "n": "Certo, vada sempre dritto e poi giri a sinistra.",
            "en": "Sure, go straight and then turn left."
          },
          {
            "who": "u",
            "n": "Grazie mille!",
            "fb": "Perfect — showing gratitude"
          },
          {
            "who": "p",
            "n": "Di niente, buona giornata!",
            "en": "You're welcome, have a nice day!"
          }
        ],
        "debrief": [
          {
            "title": "Always polite",
            "body": "Using polite forms like “Mi può dire” creates a positive interaction."
          },
          {
            "title": "Clear directions",
            "body": "When giving or receiving directions, clarity is key."
          }
        ],
        "grammarMini": "la · le",
        "grammarTitle": "“la · le” — feminine singular and plural “the”",
        "grammarIntro": "Nouns are either singular or plural, and “the” changes to match:",
        "gTermA": "la (f. sing.)",
        "gDescA": "feminine singular",
        "gExA": "la stazione, la piazza",
        "gTermB": "le (f. pl.)",
        "gDescB": "feminine plural",
        "gExB": "le strade, le fermate",
        "clip": "Visiting the streets of Roma",
        "podcast": "Lost in Translation — ep. 1",
        "article": "Navigating Italian Cities",
        "reader": [
          {
            "t": "In Italia ci sono molte piazze e strade strette. "
          },
          {
            "w": "Chiedere",
            "d": "to ask"
          },
          {
            "t": " indicazioni è comune e i locali sono "
          },
          {
            "w": "gentili",
            "d": "kind"
          },
          {
            "t": ". Basta dire “grazie” per un aiuto."
          }
        ],
        "reviewWord": "stazione",
        "reviewSource": "from your directions encounter, yesterday",
        "reviewMeaning": "the station (la stazione)"
      },
      {
        "chapterTitle": "Chapter 3 · Famiglia",
        "lessonTitle": "Introducing Your Family",
        "goalTitle": "Build it: talk about your family",
        "goalLine": "Introduce your family — the Italian way.",
        "goalShort": "discuss family",
        "scenario": "family",
        "partnerName": "Luca",
        "partnerInitial": "L",
        "partnerRole": "friend",
        "partnerPlace": "Parco dei Bambini",
        "scenarioTitle": "In famiglia · Parco",
        "scenarioSub": "Roleplay · talking about family",
        "lessonPromptEn": "This is my brother. He is called Davide.",
        "lessonHint": "Use “questo è” to introduce someone.",
        "bank": [
          "Questo è",
          "mio",
          "fratello",
          "si chiama",
          "Davide",
          "sorella"
        ],
        "bankEn": [
          "This is",
          "my",
          "brother",
          "he is called",
          "Davide",
          "sister"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "Ottimo lavoro! 🎉",
        "lessonCorrectBody": "“Questo è” is the phrase for introductions.",
        "lessonWrongBody": "Start with “Questo è” when introducing someone.",
        "cultureCaption": "Family in Italy",
        "cultureTitle": "Family is the heart of Italian life",
        "cultureBody": "Family gatherings are common in Italy. Italians often have close connections with extended family, and Sundays are typically reserved for family meals.",
        "culturePhrase": "“Fratello” and “sorella” are common terms.",
        "milestoneTitle": "You can now introduce your family members.",
        "convo": [
          {
            "who": "p",
            "n": "Ciao, chi è questo?",
            "en": "Hi, who is this?"
          },
          {
            "who": "u",
            "n": "Questo è mio fratello. Si chiama Davide.",
            "fb": "Nice introduction — well done"
          },
          {
            "who": "p",
            "n": "Piacere di conoscerti, Davide!",
            "en": "Nice to meet you, Davide!"
          },
          {
            "who": "u",
            "n": "È felice di vederti!",
            "fb": "Great use of expression"
          },
          {
            "who": "p",
            "n": "Buon divertimento al parco!",
            "en": "Have fun at the park!"
          }
        ],
        "debrief": [
          {
            "title": "Family terms",
            "body": "Knowing how to introduce family members is a great way to start conversations."
          },
          {
            "title": "Introducing politely",
            "body": "Use clear phrases to introduce your family."
          }
        ],
        "grammarMini": "mio · mia",
        "grammarTitle": "“mio · mia” — possessive adjectives",
        "grammarIntro": "Possessives show ownership. Here's how they change:",
        "gTermA": "mio (m.)",
        "gDescA": "my, masculine singular",
        "gExA": "mio fratello, mio zio",
        "gTermB": "mia (f.)",
        "gDescB": "my, feminine singular",
        "gExB": "mia sorella, mia zia",
        "clip": "A warm family meal in Toscana",
        "podcast": "Familia in Focus — ep. 2",
        "article": "La Famiglia Italiana",
        "reader": [
          {
            "t": "In Italia la famiglia è molto importante. "
          },
          {
            "w": "Spesso",
            "d": "often"
          },
          {
            "t": ", ci si riunisce per i pasti. Ogni domenica è "
          },
          {
            "w": "tradizione",
            "d": "tradition"
          },
          {
            "t": " mangiare insieme."
          }
        ],
        "reviewWord": "fratello",
        "reviewSource": "from your family talk, 3 days ago",
        "reviewMeaning": "the brother (il fratello)"
      },
      {
        "chapterTitle": "Chapter 4 · In hotel",
        "lessonTitle": "Hotel Reservations and Requests",
        "goalTitle": "Build it: check-in at a hotel",
        "goalLine": "Check-in and make requests — the Italian way.",
        "goalShort": "hotel check-in",
        "scenario": "hotel",
        "partnerName": "Alessia",
        "partnerInitial": "A",
        "partnerRole": "receptionist",
        "partnerPlace": "Hotel Bellavista",
        "scenarioTitle": "Albergo · Check-in",
        "scenarioSub": "Roleplay · Checking into a hotel",
        "lessonPromptEn": "I have a reservation. My name is Marco Rossi.",
        "lessonHint": "Booking reference helps.",
        "bank": [
          "Ho",
          "una prenotazione",
          "mi chiamo",
          "Marco Rossi",
          "camera",
          "vista"
        ],
        "bankEn": [
          "I have",
          "a reservation",
          "my name is",
          "Marco Rossi",
          "room",
          "view"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "Fantastico! 🎉",
        "lessonCorrectBody": "“Ho una prenotazione” tells the receptionist you have a booking.",
        "lessonWrongBody": "Begin with “Ho una prenotazione” to state your booking.",
        "cultureCaption": "Checking in at an Italian hotel",
        "cultureTitle": "Formalities upon arrival",
        "cultureBody": "It's important to be polite and patient when checking in. Present your ID and confirm your booking. In Italy, politeness and a friendly smile are always appreciated.",
        "culturePhrase": "“Prenotazione” is a key term for reservations.",
        "milestoneTitle": "You can now check into a hotel smoothly.",
        "convo": [
          {
            "who": "p",
            "n": "Buongiorno, come posso aiutarla?",
            "en": "Good morning, how can I help you?"
          },
          {
            "who": "u",
            "n": "Ho una prenotazione. Mi chiamo Marco Rossi.",
            "fb": "Clear and courteous introduction"
          },
          {
            "who": "p",
            "n": "Benvenuto, signor Rossi. Ecco la sua camera.",
            "en": "Welcome, Mr. Rossi. Here's your room."
          },
          {
            "who": "u",
            "n": "Grazie, può indicarmi dov'è la colazione?",
            "fb": "Good follow-up question"
          },
          {
            "who": "p",
            "n": "Certamente, al piano terra dalle 7 alle 10.",
            "en": "Certainly, on the ground floor from 7 to 10."
          }
        ],
        "debrief": [
          {
            "title": "Reservation essentials",
            "body": "Always mention your booking and personal details."
          },
          {
            "title": "Room upgrades",
            "body": "Politely ask about your room amenities."
          }
        ],
        "grammarMini": "una · un",
        "grammarTitle": "“una · un” — indefinite articles ‘a’ and ‘an’",
        "grammarIntro": "Articles can be masculine or feminine, like nouns:",
        "gTermA": "un (m.)",
        "gDescA": "a, masculine singular",
        "gExA": "un hotel, un ristorante",
        "gTermB": "una (f.)",
        "gDescB": "a, feminine singular",
        "gExB": "una camera, una colazione",
        "clip": "Behind the scenes at Hotel Bellavista",
        "podcast": "Stay Today — ep. 5",
        "article": "The Italian Hotel Experience",
        "reader": [
          {
            "t": "Quando si arriva in un "
          },
          {
            "w": "albergo",
            "d": "hotel"
          },
          {
            "t": ", è importante presentare "
          },
          {
            "w": "documenti",
            "d": "documents"
          },
          {
            "t": " e confermare il nome."
          }
        ],
        "reviewWord": "prenotazione",
        "reviewSource": "from your hotel check-in, 5 days ago",
        "reviewMeaning": "the reservation (la prenotazione)"
      },
      {
        "chapterTitle": "Chapter 5 · Al mercato",
        "lessonTitle": "Shopping at the Market",
        "goalTitle": "Build it: purchase fresh goods",
        "goalLine": "Buy produce and pay — the Italian way.",
        "goalShort": "market purchasing",
        "scenario": "market",
        "partnerName": "Patrizia",
        "partnerInitial": "P",
        "partnerRole": "vendor",
        "partnerPlace": "Mercato di San Lorenzo",
        "scenarioTitle": "Al mercato · Firenze",
        "scenarioSub": "Roleplay · shopping and negotiation",
        "lessonPromptEn": "How much is a kilogram of tomatoes?",
        "lessonHint": "“Quanto costa” starts a price question.",
        "bank": [
          "Quanto costa",
          "un chilo",
          "di pomodori",
          "per favore",
          "pesare",
          "borsa"
        ],
        "bankEn": [
          "How much is",
          "a kilogram",
          "of tomatoes",
          "please",
          "weigh",
          "bag"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "Bravo! 🎉",
        "lessonCorrectBody": "“Quanto costa” is your phrase for asking prices.",
        "lessonWrongBody": "Begin with “Quanto costa” for price inquiries.",
        "cultureCaption": "Shopping at an Italian market",
        "cultureTitle": "Markets: vibrant and bustling",
        "cultureBody": "Italian markets are lively and full of fresh produce. Engage with the vendors, ask questions about seasoning and origins, and don't be afraid to negotiate politely.",
        "culturePhrase": "“Un chilo” is a standard way to express weight.",
        "milestoneTitle": "You can now shop confidently in Italian markets.",
        "convo": [
          {
            "who": "p",
            "n": "Buongiorno, cosa desidera?",
            "en": "Good morning, what would you like?"
          },
          {
            "who": "u",
            "n": "Quanto costa un chilo di pomodori?",
            "fb": "Great start for price inquiry"
          },
          {
            "who": "p",
            "n": "Sono due euro al chilo.",
            "en": "They are two euros per kilogram."
          },
          {
            "who": "u",
            "n": "Va bene, prendo un chilo, per favore.",
            "fb": "Smooth transaction"
          },
          {
            "who": "p",
            "n": "Perfetto, grazie. Vuole una borsa?",
            "en": "Perfect, thank you. Would you like a bag?"
          }
        ],
        "debrief": [
          {
            "title": "Weight and measures",
            "body": "In Italian markets, weight is usually expressed in kilograms."
          },
          {
            "title": "Polite negotiations",
            "body": "Being cordial when asking for prices or haggling creates a positive atmosphere."
          }
        ],
        "grammarMini": "chilo · chili",
        "grammarTitle": "“chilo · chili” — singular and plural for kilogram(s)",
        "grammarIntro": "Understanding singular and plural forms is useful:",
        "gTermA": "chilo (sing.)",
        "gDescA": "kilogram, singular",
        "gExA": "un chilo di mele",
        "gTermB": "chili (pl.)",
        "gDescB": "kilograms, plural",
        "gExB": "due chili di arance",
        "clip": "Exploring the Mercato di San Lorenzo",
        "podcast": "Market Moves — ep. 7",
        "article": "The Art of Italian Market Shopping",
        "reader": [
          {
            "t": "Al mercato si trova frutta e "
          },
          {
            "w": "verdura",
            "d": "vegetables"
          },
          {
            "t": " di stagione. È un piacere acquirla "
          },
          {
            "w": "direttamente",
            "d": "directly"
          },
          {
            "t": " dai produttori."
          }
        ],
        "reviewWord": "pomodori",
        "reviewSource": "from your market purchase, 1 week ago",
        "reviewMeaning": "tomatoes (i pomodori)"
      },
      {
        "chapterTitle": "Chapter 6 · Emergenza",
        "lessonTitle": "Handling Emergencies",
        "goalTitle": "Build it: ask for help in an emergency",
        "goalLine": "Get help during emergencies — the Italian way.",
        "goalShort": "handle emergencies",
        "scenario": "emergency",
        "partnerName": "Carla",
        "partnerInitial": "C",
        "partnerRole": "emergency responder",
        "partnerPlace": "Stazione di Polizia",
        "scenarioTitle": "Situazioni d'emergenza",
        "scenarioSub": "Roleplay · calling for emergency support",
        "lessonPromptEn": "I need help. Call the police, please.",
        "lessonHint": "Use “Ho bisogno” to express an urgent need.",
        "bank": [
          "Ho bisogno",
          "di aiuto",
          "chiami",
          "la polizia",
          "subito",
          "ambulanza"
        ],
        "bankEn": [
          "I need",
          "help",
          "call",
          "the police",
          "immediately",
          "ambulance"
        ],
        "correct": [
          0,
          1,
          3,
          4
        ],
        "lessonCorrectTitle": "Corretto! 🎉",
        "lessonCorrectBody": "“Ho bisogno di aiuto” clearly communicates your need for assistance.",
        "lessonWrongBody": "Start with “Ho bisogno di aiuto” to clearly ask for help.",
        "cultureCaption": "Emergency responses in Italy",
        "cultureTitle": "Stay calm and communicate clearly",
        "cultureBody": "In emergencies, remaining calm and providing clear information is crucial. Use specific terms and be polite but direct when requesting help.",
        "culturePhrase": "“Emergenza” is the word for emergency.",
        "milestoneTitle": "You can now communicate during emergencies.",
        "convo": [
          {
            "who": "p",
            "n": "Pronto soccorso, come posso aiutarla?",
            "en": "Emergency services, how can I help you?"
          },
          {
            "who": "u",
            "n": "Ho bisogno di aiuto. Chiami la polizia, per favore.",
            "fb": "Urgency is effectively communicated"
          },
          {
            "who": "p",
            "n": "Va bene, l'assistenza è in arrivo.",
            "en": "Alright, help is on the way."
          },
          {
            "who": "u",
            "n": "Grazie, aspetto qui.",
            "fb": "Reassure and confirm location"
          },
          {
            "who": "p",
            "n": "Tenga la linea aperta.",
            "en": "Keep the line open."
          }
        ],
        "debrief": [
          {
            "title": "Key phrases in emergencies",
            "body": "Using precise language is critical in emergencies."
          },
          {
            "title": "Stay informed",
            "body": "Know basic emergency numbers and phrases."
          }
        ],
        "grammarMini": "di · da",
        "grammarTitle": "“di · da” — prepositions in emergencies",
        "grammarIntro": "These prepositions are common in crisis vocabulary:",
        "gTermA": "di",
        "gDescA": "of/about",
        "gExA": "di aiuto",
        "gTermB": "da",
        "gDescB": "from",
        "gExB": "da questa posizione",
        "clip": "Emergency Preparedness in Italy",
        "podcast": "Stay Safe — ep. 9",
        "article": "Understanding Italian Emergency Protocols",
        "reader": [
          {
            "t": "In caso di "
          },
          {
            "w": "emergenza",
            "d": "emergency"
          },
          {
            "t": ", chiama subito i servizi di "
          },
          {
            "w": "soccorso",
            "d": "rescue"
          },
          {
            "t": ". Mantieni la calma e fornisci dettagli."
          }
        ],
        "reviewWord": "aiuto",
        "reviewSource": "from your emergency call, last month",
        "reviewMeaning": "help (l'aiuto)"
      }
    ]
  },
  "pt": {
    "name": "Portuguese",
    "flag": "🇧🇷",
    "code": "PT",
    "font": "",
    "locale": "pt-BR",
    "greeting": "Bom dia, Maya",
    "accent": "Brazil (São Paulo)",
    "chapters": [
      {
        "chapterTitle": "Chapter 1 · No café",
        "lessonTitle": "Greetings & warmth",
        "goalTitle": "Build it: order a coffee",
        "goalLine": "Order a coffee and chat — Brazilian style.",
        "goalShort": "order a coffee",
        "scenario": "cafe",
        "partnerName": "Bruno",
        "partnerInitial": "B",
        "partnerRole": "garçom",
        "partnerPlace": "São Paulo café",
        "scenarioTitle": "No café · São Paulo",
        "scenarioSub": "Roleplay · order & warm small talk",
        "lessonPromptEn": "I'd like a coffee with milk, please.",
        "lessonHint": "Why “gostaria”?",
        "bank": [
          "Eu gostaria de",
          "um café",
          "com leite",
          "por favor",
          "a conta",
          "sem"
        ],
        "bankEn": [
          "I would like",
          "a coffee",
          "with milk",
          "please",
          "the bill",
          "without"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "Perfeito! 🎉",
        "lessonCorrectBody": "“Eu gostaria de” (I'd like) is the polite order — warmer than “Eu quero” (I want).",
        "lessonWrongBody": "Start with the polite “I'd like,” then what you want.",
        "cultureCaption": "A café in São Paulo · 9am",
        "cultureTitle": "The cafezinho is about warmth, not caffeine",
        "cultureBody": "In Brazil, offering someone a “cafezinho” (little coffee) is a gesture of welcome — at home, at work, everywhere. It's small, strong and sweet, and refusing one can feel cold. Conversation is warm and physical: expect to be called “querido/a.”",
        "culturePhrase": "“Aceita um cafezinho?” — “care for a little coffee?”, an offer of friendship.",
        "milestoneTitle": "You can now order a coffee — and chat warmly while you do.",
        "convo": [
          {
            "who": "p",
            "n": "Bom dia! O que vai querer?",
            "en": "Good morning! What would you like?"
          },
          {
            "who": "u",
            "n": "Eu gostaria de um café com leite, por favor.",
            "fb": "Great — “gostaria” sounds polite and natural"
          },
          {
            "who": "p",
            "n": "Saindo! Mais alguma coisa?",
            "en": "Coming up! Anything else?"
          },
          {
            "who": "u",
            "n": "Não, obrigada. A conta, por favor.",
            "fb": "Perfect — “a conta” is exactly right"
          },
          {
            "who": "p",
            "n": "Claro, são cinco reais.",
            "en": "Sure — that's five reais."
          }
        ],
        "debrief": [
          {
            "title": "“obrigada” vs “obrigado”",
            "body": "It matches YOUR gender: a woman says “obrigada,” a man “obrigado.”"
          },
          {
            "title": "Nasal “ã” in São",
            "body": "“São” has a nasal sound — let it resonate through the nose a little."
          }
        ],
        "grammarMini": "ser vs estar",
        "grammarTitle": "“ser” vs “estar” — two ways to “be”",
        "grammarIntro": "Portuguese splits “to be” into permanent vs temporary:",
        "gTermA": "ser",
        "gDescA": "permanent — who/what something is",
        "gExA": "O café é forte.",
        "gTermB": "estar",
        "gDescB": "temporary — a state right now",
        "gExB": "O café está quente.",
        "clip": "A feira de rua em São Paulo, com os locais",
        "podcast": "Um café com o Bruno — ep. 4",
        "article": "O pequeno ritual do cafezinho",
        "reader": [
          {
            "t": "No Brasil, oferecer um "
          },
          {
            "w": "cafezinho",
            "d": "little coffee — a warm gesture of welcome"
          },
          {
            "t": " é um sinal de carinho. Ele é pequeno, forte e "
          },
          {
            "w": "doce",
            "d": "sweet"
          },
          {
            "t": ". As pessoas conversam e "
          },
          {
            "w": "riem",
            "d": "laugh (they laugh — from rir, to laugh)"
          },
          {
            "t": " juntas. É o jeito brasileiro de receber alguém."
          }
        ],
        "reviewWord": "conta",
        "reviewSource": "from your café visit, 2 days ago",
        "reviewMeaning": "the bill / check (a conta)"
      },
      {
        "chapterTitle": "Chapter 2 · Pedindo Direções",
        "lessonTitle": "Giving and Asking for Directions",
        "goalTitle": "Build it: find your way",
        "goalLine": "Learn to ask for directions politely.",
        "goalShort": "ask for directions",
        "scenario": "directions",
        "partnerName": "Carla",
        "partnerInitial": "C",
        "partnerRole": "moradora local",
        "partnerPlace": "Rua Augusta, São Paulo",
        "scenarioTitle": "Pedindo Direções · São Paulo",
        "scenarioSub": "Roleplay · ask where to go",
        "lessonPromptEn": "Where is the nearest subway station, please?",
        "lessonHint": "Why “fica”?",
        "bank": [
          "Onde",
          "fica",
          "a estação",
          "de metrô",
          "mais próxima",
          "por favor"
        ],
        "bankEn": [
          "Where",
          "is located",
          "the station",
          "subway",
          "nearest",
          "please"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "Ótimo! 🎉",
        "lessonCorrectBody": "“Fica” implies location — it's about where something is situated.",
        "lessonWrongBody": "Start with “onde” and specify what you're looking for.",
        "cultureCaption": "Pedindo informações amigavelmente",
        "cultureTitle": "Achar o seu caminho com um sorriso",
        "cultureBody": "Em São Paulo, as ruas são movimentadas. Perguntar por direções é comum, e é educado começar com um “com licença” ou “por favor”. Espera-se calor humano e respeito.",
        "culturePhrase": "“Com licença” — “Excuse me”, um começo amigável.",
        "milestoneTitle": "You can now ask for directions politely.",
        "convo": [
          {
            "who": "p",
            "n": "Com licença, precisa de ajuda?",
            "en": "Excuse me, do you need help?"
          },
          {
            "who": "u",
            "n": "Sim, onde fica a estação de metrô mais próxima, por favor?",
            "fb": "Good use of “fica” to ask for location."
          },
          {
            "who": "p",
            "n": "É só seguir em frente e virar à esquerda.",
            "en": "Just go straight and turn left."
          },
          {
            "who": "u",
            "n": "Muito obrigado! Preciso de mais alguma dica?",
            "fb": "Great politeness with “obrigado”!"
          },
          {
            "who": "p",
            "n": "Nada mais. Boa sorte!",
            "en": "Nothing else. Good luck!"
          }
        ],
        "debrief": [
          {
            "title": "“obrigado/a” and “com licença”",
            "body": "Use “obrigado/a” to thank and “com licença” to politely ask."
          },
          {
            "title": "“fica” in directions",
            "body": "Use “fica” for location; it's a functional, everyday word."
          }
        ],
        "grammarMini": "prepositions for directions",
        "grammarTitle": "Using prepositions for directions",
        "grammarIntro": "Directional cues often depend on simple prepositions:",
        "gTermA": "em frente",
        "gDescA": "go straight; ahead",
        "gExA": "Siga em frente.",
        "gTermB": "à esquerda/direita",
        "gDescB": "left/right turns or positioning",
        "gExB": "Vire à esquerda/direita."
      },
      "clip"
    ]
  },
  "zh": {
    "name": "Mandarin",
    "flag": "🇨🇳",
    "code": "ZH",
    "font": "zh",
    "locale": "zh-CN",
    "greeting": "早上好, Maya",
    "accent": "China (Mainland)",
    "chapters": [
      {
        "chapterTitle": "Chapter 1 · 咖啡馆 Coffee culture",
        "lessonTitle": "Greetings & warmth",
        "goalTitle": "Build it: order a coffee",
        "goalLine": "Order a coffee — politely, in Mandarin.",
        "goalShort": "order a coffee",
        "scenario": "cafe",
        "partnerName": "小美 Xiǎoměi",
        "partnerInitial": "美",
        "partnerRole": "店员 clerk",
        "partnerPlace": "Shanghai café",
        "scenarioTitle": "咖啡馆 · Shanghai",
        "scenarioSub": "Roleplay · order & a short exchange",
        "lessonPromptEn": "I want a coffee. (I'd like a coffee.)",
        "lessonHint": "Why “要”?",
        "bank": [
          "我",
          "要",
          "一杯",
          "咖啡",
          "水",
          "茶"
        ],
        "bankEn": [
          "I",
          "want",
          "a cup",
          "coffee",
          "water",
          "tea"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "完美！(Perfect!) 🎉",
        "lessonCorrectBody": "“我要 (wǒ yào)” = “I want”; “一杯 (yì bēi)” = “one cup,” the measure word for drinks.",
        "lessonWrongBody": "Start with “我” (I), then “要” (want), then “一杯” (one cup), then the drink.",
        "cultureCaption": "A café in Shanghai · morning",
        "cultureTitle": "Four tones, four meanings",
        "cultureBody": "Mandarin is tonal: the same syllable means different things at different pitches. “mā / má / mǎ / mà” are mother, hemp, horse, scold. Getting tones roughly right matters more than perfect grammar — locals listen for the melody.",
        "culturePhrase": "“谢谢 (xièxie)” — thank you; a smile and a nod carry it the rest of the way.",
        "milestoneTitle": "You can now order a coffee — politely, in Mandarin.",
        "convo": [
          {
            "who": "p",
            "n": "你好！要点什么？",
            "en": "Hello! What would you like to order?"
          },
          {
            "who": "u",
            "n": "我要一杯咖啡。",
            "fb": "Great — “一杯” (one cup) is the right measure word"
          },
          {
            "who": "p",
            "n": "热的还是冰的？",
            "en": "Hot or iced?"
          },
          {
            "who": "u",
            "n": "热的，谢谢。",
            "fb": "Perfect — “热的” = the hot one"
          },
          {
            "who": "p",
            "n": "好的，十五块。",
            "en": "Okay — fifteen kuai."
          }
        ],
        "debrief": [
          {
            "title": "Measure word 杯",
            "body": "You used “一杯” (one cup) — Mandarin needs a measure word between number and noun."
          },
          {
            "title": "Tone on 要 (yào)",
            "body": "“要” is a falling 4th tone — say it firmly, like a short command."
          }
        ],
        "grammarMini": "measure words",
        "grammarTitle": "Measure words — the “一杯” rule",
        "grammarIntro": "Mandarin puts a measure word between a number and a noun. The word depends on the object's shape:",
        "gTermA": "杯 (bēi)",
        "gDescA": "for cups / glasses of drink",
        "gExA": "一杯咖啡 — a cup of coffee",
        "gTermB": "个 (gè)",
        "gDescB": "the all-purpose default measure word",
        "gExB": "一个人 — one person",
        "clip": "上海的早晨，和本地人",
        "podcast": "和小美喝咖啡 — 第4集",
        "article": "咖啡馆里的安静时光",
        "reader": [
          {
            "t": "在中国，越来越多的人喜欢去"
          },
          {
            "w": "咖啡馆",
            "d": "café (kāfēiguǎn)"
          },
          {
            "t": "。他们点一杯咖啡，安静地"
          },
          {
            "w": "看书",
            "d": "read a book (kàn shū)"
          },
          {
            "t": "或者工作。对店员要说"
          },
          {
            "w": "谢谢",
            "d": "thank you (xièxie)"
          },
          {
            "t": "，这是礼貌。"
          }
        ],
        "reviewWord": "一杯",
        "reviewSource": "from your café order, 3 days ago",
        "reviewMeaning": "one cup (number + measure word for drinks)"
      },
      {
        "chapterTitle": "Chapter 2 · 寻路 Directions",
        "lessonTitle": "Finding the Way",
        "goalTitle": "Navigate: ask for directions",
        "goalLine": "Politely ask for directions in Mandarin.",
        "goalShort": "ask for directions",
        "scenario": "directions",
        "partnerName": "王明 Wáng Míng",
        "partnerInitial": "明",
        "partnerRole": "路人 passerby",
        "partnerPlace": "Shanghai street",
        "scenarioTitle": "上海街头 · Shanghai",
        "scenarioSub": "Roleplay · ask & understand directions",
        "lessonPromptEn": "Where is the subway station?",
        "lessonHint": "Use “在哪儿”?",
        "bank": [
          "地铁站",
          "在",
          "哪儿",
          "请问",
          "洗手间",
          "银行"
        ],
        "bankEn": [
          "subway station",
          "is",
          "where",
          "excuse me",
          "restroom",
          "bank"
        ],
        "correct": [
          3,
          1,
          0,
          2
        ],
        "lessonCorrectTitle": "完美！(Perfect!) 🎉",
        "lessonCorrectBody": "“请问” (qǐngwèn) = “Excuse me”; “地铁站在哪儿？”= “Where is the subway station?”",
        "lessonWrongBody": "Start with “请问” (Excuse me), then location, then “在哪儿” (where is).",
        "cultureCaption": "Navigating Shanghai · afternoon",
        "cultureTitle": "Navigational phrases in Mandarin",
        "cultureBody": "Politeness goes a long way; start with a friendly “请问” to ask for help. Locals are often helpful, especially when greeted with a smile.",
        "culturePhrase": "“谢谢” — don't forget to thank your helper!",
        "milestoneTitle": "You can now ask for directions — politely, in Mandarin.",
        "convo": [
          {
            "who": "p",
            "n": "请问，您找什么地方？",
            "en": "Excuse me, what are you looking for?"
          },
          {
            "who": "u",
            "n": "请问，地铁站在哪儿?",
            "fb": "Great — asked using the correct question structure"
          },
          {
            "who": "p",
            "n": "在前面右转就是。",
            "en": "It's straight ahead, then turn right."
          },
          {
            "who": "u",
            "n": "谢谢您。",
            "fb": "Perfect — polite way to express gratitude"
          },
          {
            "who": "p",
            "n": "不客气！",
            "en": "You're welcome!"
          }
        ],
        "debrief": [
          {
            "title": "Using 请问",
            "body": "Start a polite inquiry with “请问” — it's a courteous way to seek help."
          },
          {
            "title": "Tone on 哪儿 (nǎ'er)",
            "body": "“哪儿” uses the third rising tone — keep it friendly and inquisitive."
          }
        ],
        "grammarMini": "question structure",
        "grammarTitle": "Forming Questions — the “在哪儿” construct",
        "grammarIntro": "Mandarin asks questions by stating a fact and adding a question phrase at the end:",
        "gTermA": "在哪儿 (zài nǎ'er)",
        "gDescA": "where is",
        "gExA": "地铁站在哪儿 — Where is the subway station?",
        "gTermB": "哪 (nǎ)",
        "gDescB": "which",
        "gExB": "哪个 — which one",
        "clip": "询问方向与本地人",
        "podcast": "在上海寻路 — 第5集",
        "article": "城市探险与问路常识",
        "reader": [
          {
            "t": "找地方时，不仅靠地图，还"
          },
          {
            "w": "需要",
            "d": "need (xūyào)"
          },
          {
            "t": "向"
          },
          {
            "w": "本地人",
            "d": "locals (běndì rén)"
          },
          {
            "t": "请教，这是非常"
          },
          {
            "w": "有效",
            "d": "effective (yǒuxiào)"
          },
          {
            "t": "的方法。"
          }
        ],
        "reviewWord": "在哪儿",
        "reviewSource": "from your directions request, 2 days ago",
        "reviewMeaning": "where is (location indicator)"
      },
      {
        "chapterTitle": "Chapter 3 · 家庭 Family",
        "lessonTitle": "Family Bonds",
        "goalTitle": "Share: talk about your family",
        "goalLine": "Introduce your family in Mandarin.",
        "goalShort": "talk about family",
        "scenario": "family",
        "partnerName": "李丽 Lǐ Lì",
        "partnerInitial": "丽",
        "partnerRole": "朋友 friend",
        "partnerPlace": "Shanghai park",
        "scenarioTitle": "家庭聚会 · Shanghai",
        "scenarioSub": "Roleplay · share information about family",
        "lessonPromptEn": "Who is this? This is my father.",
        "lessonHint": "Use “这是”.",
        "bank": [
          "这",
          "是",
          "我的",
          "爸爸",
          "妈妈",
          "兄弟"
        ],
        "bankEn": [
          "this",
          "is",
          "my",
          "father",
          "mother",
          "sibling"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "完美！(Perfect!) 🎉",
        "lessonCorrectBody": "“这是” (zhè shì) = “This is”; “我的爸爸” = “my father.”",
        "lessonWrongBody": "Start with “这” (this), then “是” (is), then “我的” (my), followed by the family member.",
        "cultureCaption": "Sharing family stories in the park",
        "cultureTitle": "Family in Mandarin Culture",
        "cultureBody": "Family is central in Chinese culture. When introducing family, it’s common to include their roles and significant details.",
        "culturePhrase": "父母 — parents; 礼貌地介绍和聊天!",
        "milestoneTitle": "You can now discuss your family — confidently, in Mandarin.",
        "convo": [
          {
            "who": "p",
            "n": "这是谁呀？",
            "en": "Who is this?"
          },
          {
            "who": "u",
            "n": "这是我的爸爸。",
            "fb": "Great — used “这是” to introduce a family member"
          },
          {
            "who": "p",
            "n": "他看起来很年轻。",
            "en": "He looks very young."
          },
          {
            "who": "u",
            "n": "谢谢，他保养得很好。",
            "fb": "Perfect — acknowledged with a polite response"
          },
          {
            "who": "p",
            "n": "你家人都很幸福吧！",
            "en": "Your family must be very happy!"
          }
        ],
        "debrief": [
          {
            "title": "Using 这是",
            "body": "“这是” introduces someone or something — a fundamental structure in Mandarin."
          },
          {
            "title": "Tone on 是 (shì)",
            "body": "“是” carries a flat tone, confirming identity or information."
          }
        ],
        "grammarMini": "introductions",
        "grammarTitle": "Introducing Family — the “这是” principle",
        "grammarIntro": "To introduce someone in Mandarin, pair the pronoun “这” with the verb “是”:",
        "gTermA": "这是 (zhè shì)",
        "gDescA": "this is",
        "gExA": "这是我的哥哥 — This is my brother",
        "gTermB": "我的 (wǒ de)",
        "gDescB": "my",
        "gExB": "我的姐姐 — My sister",
        "clip": "与家人在公园里",
        "podcast": "家庭故事 — 第3集",
        "article": "家庭在中国文化中的角色",
        "reader": [
          {
            "t": "在中国，家庭被视为社会的"
          },
          {
            "w": "核心",
            "d": "core (héxīn)"
          },
          {
            "t": "。人们常常"
          },
          {
            "w": "聚会",
            "d": "gather (jùhuì)"
          },
          {
            "t": "一起分享生活点滴。"
          }
        ],
        "reviewWord": "这是",
        "reviewSource": "from your family introduction, 1 day ago",
        "reviewMeaning": "this is (used for introductions)"
      },
      {
        "chapterTitle": "Chapter 4 · 酒店 Hotel",
        "lessonTitle": "Checking In",
        "goalTitle": "Secure it: check into a hotel",
        "goalLine": "Check into a hotel — smoothly, in Mandarin.",
        "goalShort": "check into a hotel",
        "scenario": "hotel",
        "partnerName": "张伟 Zhāng Wěi",
        "partnerInitial": "伟",
        "partnerRole": "接待员 receptionist",
        "partnerPlace": "Shanghai hotel",
        "scenarioTitle": "入住酒店 · Shanghai",
        "scenarioSub": "Roleplay · check-in & request",
        "lessonPromptEn": "I have a reservation. (I booked a room.)",
        "lessonHint": "Why “预订”?",
        "bank": [
          "我",
          "有",
          "一个",
          "预订",
          "房间",
          "晚餐"
        ],
        "bankEn": [
          "I",
          "have",
          "a",
          "reservation",
          "room",
          "dinner"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "完美！(Perfect!) 🎉",
        "lessonCorrectBody": "“我有” (wǒ yǒu) = “I have”; “一个预订” = “a reservation.”",
        "lessonWrongBody": "Start with “我” (I), then “有” (have), then “一个” (a), then the noun.",
        "cultureCaption": "Checking into hotels in Shanghai",
        "cultureTitle": "Hotel Stay in China",
        "cultureBody": "Ensure a seamless check-in by having your reservation information ready. Chinese hotels appreciate preparedness and a friendly demeanor.",
        "culturePhrase": "“有预订” — I have a reservation; helpful for efficient check-ins.",
        "milestoneTitle": "You can now check into a hotel — confidently, in Mandarin.",
        "convo": [
          {
            "who": "p",
            "n": "您好，请问有什么可以帮您？",
            "en": "Hello, how can I assist you?"
          },
          {
            "who": "u",
            "n": "我有一个预订。",
            "fb": "Great — stated your reservation using the correct phrase"
          },
          {
            "who": "p",
            "n": "好的，请出示您的身份证。",
            "en": "Okay, please show your ID."
          },
          {
            "who": "u",
            "n": "这是我的身份证，谢谢。",
            "fb": "Perfect — provided ID as requested"
          },
          {
            "who": "p",
            "n": "欢迎入住！",
            "en": "Welcome to your stay!"
          }
        ],
        "debrief": [
          {
            "title": "Using 预订",
            "body": "“预订” indicates a booking or reservation — vital for hotel check-ins."
          },
          {
            "title": "Tone on 订 (dìng)",
            "body": "“订” uses a falling tone, indicating completion or confirmation."
          }
        ],
        "grammarMini": "reservations",
        "grammarTitle": "Making Reservations — the “预订” guideline",
        "grammarIntro": "In Mandarin, state possession with “有” and specify with a noun:",
        "gTermA": "预订 (yùdìng)",
        "gDescA": "reservation",
        "gExA": "我有预订 — I have a reservation",
        "gTermB": "房间 (fángjiān)",
        "gDescB": "room",
        "gExB": "一个房间 — a room",
        "clip": "在上海酒店办理入住",
        "podcast": "酒店接待 — 第6集",
        "article": "酒店入住小贴士",
        "reader": [
          {
            "t": "在中国，"
          },
          {
            "w": "酒店",
            "d": "hotel (jiǔdiàn)"
          },
          {
            "t": "都是按照国际标准来接待"
          },
          {
            "w": "游客",
            "d": "tourists (yóukè)"
          },
          {
            "t": "的。他们非常"
          },
          {
            "w": "专业",
            "d": "professional (zhuānyè)"
          },
          {
            "t": "。"
          }
        ],
        "reviewWord": "预订",
        "reviewSource": "from your hotel check-in, 2 days ago",
        "reviewMeaning": "reservation (for booking)"
      },
      {
        "chapterTitle": "Chapter 5 · 市场 Market",
        "lessonTitle": "Shopping Savvy",
        "goalTitle": "Haggle: buy something at the market",
        "goalLine": "Negotiate a purchase at the market in Mandarin.",
        "goalShort": "buy at the market",
        "scenario": "market",
        "partnerName": "阿明 Ā Míng",
        "partnerInitial": "阿",
        "partnerRole": "小贩 vendor",
        "partnerPlace": "Shanghai market",
        "scenarioTitle": "市场购物 · Shanghai",
        "scenarioSub": "Roleplay · negotiate & buy",
        "lessonPromptEn": "How much is this? (What is the price?)",
        "lessonHint": "Why “多少钱”?",
        "bank": [
          "这个",
          "多少",
          "钱",
          "请问",
          "贵",
          "便宜"
        ],
        "bankEn": [
          "this",
          "how much",
          "money",
          "excuse me",
          "expensive",
          "cheap"
        ],
        "correct": [
          3,
          0,
          1,
          2
        ],
        "lessonCorrectTitle": "完美！(Perfect!) 🎉",
        "lessonCorrectBody": "“请问” (qǐngwèn) = “Excuse me”; “这个多少钱” = “How much is this?”",
        "lessonWrongBody": "Start with “请问” (Excuse me), then “这个” (this), then “多少钱” (how much money).",
        "cultureCaption": "Bargaining at Shanghai Markets",
        "cultureTitle": "The Art of Bargaining",
        "cultureBody": "Bargaining is common practice. Approach with a friendly attitude and respect local customs for a better deal.",
        "culturePhrase": "“便宜点儿” — can it be cheaper?",
        "milestoneTitle": "You can now buy at the market — skillfully, in Mandarin.",
        "convo": [
          {
            "who": "p",
            "n": "请问，您想买什么？",
            "en": "Excuse me, what would you like to buy?"
          },
          {
            "who": "u",
            "n": "这个多少钱？",
            "fb": "Great — asked the price using the correct question form"
          },
          {
            "who": "p",
            "n": "这个五十块。",
            "en": "This is fifty kuai."
          },
          {
            "who": "u",
            "n": "可以便宜一点吗？",
            "fb": "Perfect — politely asked for a discount"
          },
          {
            "who": "p",
            "n": "好吧，四十五块。",
            "en": "Alright, forty-five kuai."
          }
        ],
        "debrief": [
          {
            "title": "Using 多少",
            "body": "“多少” means “how much” — critical for inquiring price."
          },
          {
            "title": "Tone on 钱 (qián)",
            "body": "“钱” uses the second rising tone — elevate the tone slightly."
          }
        ],
        "grammarMini": "price inquiries",
        "grammarTitle": "Inquiring Price — the “多少钱” approach",
        "grammarIntro": "To ask for a price, pair “多少” with the noun it refers to:",
        "gTermA": "多少钱 (duōshǎo qián)",
        "gDescA": "how much money",
        "gExA": "这个多少钱 — How much is this?",
        "gTermB": "贵 (guì)",
        "gDescB": "expensive",
        "gExB": "太贵了 — Too expensive",
        "clip": "在市场里讨价还价",
        "podcast": "市场购物技巧 — 第7集",
        "article": "在市场购物的艺术",
        "reader": [
          {
            "t": "上海的市场里，你可以找到"
          },
          {
            "w": "各种各样",
            "d": "various (gè zhǒng gè yàng)"
          },
          {
            "t": "的"
          },
          {
            "w": "商品",
            "d": "goods (shāngpǐn)"
          },
          {
            "t": "。记得讨价还价！"
          }
        ],
        "reviewWord": "多少钱",
        "reviewSource": "from your market purchase, yesterday",
        "reviewMeaning": "how much (price inquiry)"
      },
      {
        "chapterTitle": "Chapter 6 · 紧急情况 Emergency",
        "lessonTitle": "Emergency Conversations",
        "goalTitle": "Handle it: express an emergency",
        "goalLine": "Communicate an emergency in Mandarin.",
        "goalShort": "express an emergency",
        "scenario": "emergency",
        "partnerName": "李医生 Lǐ Yīshēng",
        "partnerInitial": "李",
        "partnerRole": "医生 doctor",
        "partnerPlace": "Shanghai clinic",
        "scenarioTitle": "紧急情况交流 · Shanghai",
        "scenarioSub": "Roleplay · express urgency & seek help",
        "lessonPromptEn": "I need help. (I require assistance.)",
        "lessonHint": "Why “帮助”?",
        "bank": [
          "我",
          "需要",
          "帮助",
          "医生",
          "救护车",
          "紧急"
        ],
        "bankEn": [
          "I",
          "need",
          "help",
          "doctor",
          "ambulance",
          "emergency"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "完美！(Perfect!) 🎉",
        "lessonCorrectBody": "“我需要” (wǒ xūyào) = “I need”; “帮助” = “help.”",
        "lessonWrongBody": "Start with “我” (I), then “需要” (need), followed by “帮助” (help).",
        "cultureCaption": "Handle emergencies with calm and clarity",
        "cultureTitle": "Emergency Protocol",
        "cultureBody": "Stay calm and be clear. Emergency services respond faster to precise and composed requests.",
        "culturePhrase": "“帮我” — help me, essential for rapid assistance.",
        "milestoneTitle": "You can now handle emergencies — confidently, in Mandarin.",
        "convo": [
          {
            "who": "p",
            "n": "发生了什么事？",
            "en": "What happened?"
          },
          {
            "who": "u",
            "n": "我需要帮助！",
            "fb": "Important — stated the need for help clearly"
          },
          {
            "who": "p",
            "n": "请慢慢说，我能帮你。",
            "en": "Please speak slowly, I can help you."
          },
          {
            "who": "u",
            "n": "我朋友需要医生。",
            "fb": "Perfect — clearly indicated the need for a doctor"
          },
          {
            "who": "p",
            "n": "好的，我马上叫救护车。",
            "en": "Alright, I’ll call an ambulance immediately."
          }
        ],
        "debrief": [
          {
            "title": "Using 帮助",
            "body": "“帮助” indicates a call for assistance — crucial in urgent situations."
          },
          {
            "title": "Tone on 求 (qiú)",
            "body": "In emergencies, the tone should be assertive to convey urgency."
          }
        ],
        "grammarMini": "help requests",
        "grammarTitle": "Requesting Help — the “帮助” protocol",
        "grammarIntro": "When you need help, pair “需要” with the noun:",
        "gTermA": "帮助 (bāngzhù)",
        "gDescA": "help",
        "gExA": "我需要帮助 — I need help",
        "gTermB": "救护车 (jiùhùchē)",
        "gDescB": "ambulance",
        "gExB": "叫救护车 — Call an ambulance",
        "clip": "与医生沟通",
        "podcast": "紧急情况反应 — 第8集",
        "article": "紧急时刻的危机处理",
        "reader": [
          {
            "t": "无论是在家庭还是社会中，知道如何"
          },
          {
            "w": "处理",
            "d": "handle (chǔlǐ)"
          },
          {
            "t": "紧急情况都是非常"
          },
          {
            "w": "重要",
            "d": "important (zhòngyào)"
          },
          {
            "t": "的技能。"
          }
        ],
        "reviewWord": "帮助",
        "reviewSource": "from your emergency call, yesterday",
        "reviewMeaning": "help (for assistance)"
      }
    ]
  },
  "ar": {
    "name": "Arabic",
    "flag": "🇸🇦",
    "code": "AR",
    "font": "ar",
    "locale": "ar-SA",
    "greeting": "صباح الخير, Maya",
    "accent": "Modern Standard Arabic",
    "chapters": [
      {
        "chapterTitle": "Chapter 1 · في المقهى Café culture",
        "lessonTitle": "Greetings & warmth",
        "goalTitle": "Build it: order coffee",
        "goalLine": "Order coffee — politely, in Arabic.",
        "goalShort": "order coffee",
        "scenario": "cafe",
        "partnerName": "ليلى Layla",
        "partnerInitial": "ل",
        "partnerRole": "نادلة waiter",
        "partnerPlace": "a café",
        "scenarioTitle": "في المقهى · Café",
        "scenarioSub": "Roleplay · order & a warm exchange",
        "lessonPromptEn": "I would like a coffee, please.",
        "lessonHint": "Why “أريد”?",
        "bank": [
          "أريد",
          "قهوة",
          "من فضلك",
          "الحساب",
          "ماء",
          "شاي"
        ],
        "bankEn": [
          "I want",
          "coffee",
          "please",
          "the bill",
          "water",
          "tea"
        ],
        "correct": [
          0,
          1,
          2
        ],
        "lessonCorrectTitle": "ممتاز! (Excellent!) 🎉",
        "lessonCorrectBody": "“أريد (urīd)” = “I want/would like”; “من فضلك (min faḍlik)” = “please.” Read right-to-left.",
        "lessonWrongBody": "Start with “أريد” (I'd like), then the item, then “من فضلك” (please).",
        "cultureCaption": "A café · afternoon",
        "cultureTitle": "Refusing coffee can refuse the welcome",
        "cultureBody": "Across the Arab world, offering coffee (qahwa) is the heart of hospitality. A host may insist; accepting, even a small cup, honors them. Arabic is written right-to-left, and a warm “shukran” (thank you) goes a long way.",
        "culturePhrase": "“شكراً (shukran)” — thank you; reply to thanks with “عفواً (ʿafwan).”",
        "milestoneTitle": "You can now order coffee — politely, in Arabic.",
        "convo": [
          {
            "who": "p",
            "n": "مرحباً! ماذا تريد؟",
            "en": "Hello! What would you like?"
          },
          {
            "who": "u",
            "n": "أريد قهوة من فضلك.",
            "fb": "Great — “من فضلك” makes it polite"
          },
          {
            "who": "p",
            "n": "حاضر. أي شيء آخر؟",
            "en": "Right away. Anything else?"
          },
          {
            "who": "u",
            "n": "لا، شكراً. الحساب من فضلك.",
            "fb": "Perfect — “الحساب” = the bill"
          },
          {
            "who": "p",
            "n": "تفضّل، خمسة ريال.",
            "en": "Here you go — five riyals."
          }
        ],
        "debrief": [
          {
            "title": "Right-to-left",
            "body": "Arabic reads right-to-left — your sentence flowed in the right direction."
          },
          {
            "title": "The “ḥ” in الحساب",
            "body": "“ḥisāb” uses a breathy H from the throat — softer than a hard K."
          }
        ],
        "grammarMini": "ال the",
        "grammarTitle": "“ال” — the one word for “the”",
        "grammarIntro": "Arabic has no “a/an,” and a single prefix “ال (al-)” means “the,” attached to the word:",
        "gTermA": "قهوة",
        "gDescA": "“coffee” — no article = a coffee",
        "gExA": "أريد قهوة.",
        "gTermB": "القهوة",
        "gDescB": "“ال” + word = the coffee",
        "gExB": "القهوة لذيذة.",
        "clip": "السوق في الصباح، مع السكان المحليين",
        "podcast": "قهوة مع ليلى — الحلقة 4",
        "article": "طقس القهوة الصغير",
        "reader": [
          {
            "t": "في العالم العربي، تقديم "
          },
          {
            "w": "القهوة",
            "d": "coffee (al-qahwa)"
          },
          {
            "t": " علامة كرم. الضيف "
          },
          {
            "w": "يشرب",
            "d": "drinks (he drinks — from شرب)"
          },
          {
            "t": " فنجاناً صغيراً ويقول "
          },
          {
            "w": "شكراً",
            "d": "thank you (shukran)"
          },
          {
            "t": ". إنها لحظة جميلة من اليوم."
          }
        ],
        "reviewWord": "الحساب",
        "reviewSource": "from your café visit, 2 days ago",
        "reviewMeaning": "the bill / check (al-ḥisāb)"
      },
      {
        "chapterTitle": "Chapter 2 · الاتجاهات Directions",
        "lessonTitle": "Ask & find",
        "goalTitle": "Navigate it: ask for directions",
        "goalLine": "Ask for directions — politely, in Arabic.",
        "goalShort": "ask for directions",
        "scenario": "directions",
        "partnerName": "علي Ali",
        "partnerInitial": "ع",
        "partnerRole": "مارة passerby",
        "partnerPlace": "on the street",
        "scenarioTitle": "في الشارع · On the street",
        "scenarioSub": "Roleplay · asking for directions",
        "lessonPromptEn": "Where is the hotel, please?",
        "lessonHint": "Why “أين” for 'where'?",
        "bank": [
          "أين",
          "الفندق",
          "من فضلك",
          "المتحف",
          "اليمين",
          "اليسار"
        ],
        "bankEn": [
          "where",
          "the hotel",
          "please",
          "the museum",
          "right",
          "left"
        ],
        "correct": [
          0,
          1,
          2
        ],
        "lessonCorrectTitle": "ممتاز! (Excellent!) 🎉",
        "lessonCorrectBody": "“أين (ayn)” = “where”; “من فضلك (min faḍlik)” = “please.”",
        "lessonWrongBody": "Start with “أين” (where), then the place, and finally “من فضلك” (please).",
        "cultureCaption": "Navigating the street · speaking with locals",
        "cultureTitle": "Asking for help is part of the journey",
        "cultureBody": "In Arab countries, asking for directions is common and locals often go out of their way to assist. A simple “شكراً (shukran)” when done goes a long way.",
        "culturePhrase": "“أين الشارع؟ (ayn ash-shāriʿ?)” — where is the street?",
        "milestoneTitle": "You can now ask for directions — politely, in Arabic.",
        "convo": [
          {
            "who": "p",
            "n": "مرحباً! كيف أساعدك؟",
            "en": "Hello! How can I help you?"
          },
          {
            "who": "u",
            "n": "أين الفندق من فضلك؟",
            "fb": "Great — using “من فضلك” shows politeness"
          },
          {
            "who": "p",
            "n": "الفندق في اليمين.",
            "en": "The hotel is on the right."
          },
          {
            "who": "u",
            "n": "شكراً جزيلاً.",
            "fb": "Perfect — showing appreciation is key"
          },
          {
            "who": "p",
            "n": "عفواً، أتمنى لك رحلة سعيدة.",
            "en": "You're welcome, have a great journey."
          }
        ],
        "debrief": [
          {
            "title": "Right-to-left",
            "body": "Arabic reads right-to-left — your question flowed correctly."
          },
          {
            "title": "The sound 'ayn",
            "body": "“أين” uses the ʿayn sound — deeper in the throat, distinct from 'a'."
          }
        ],
        "grammarMini": "Adding السؤال",
        "grammarTitle": "Questioning with “أين”",
        "grammarIntro": "To form questions with 'where', use “أين” before the subject",
        "gTermA": "الفندق",
        "gDescA": "Means 'the hotel', specifying with ال",
        "gExA": "أين الفندق؟",
        "gTermB": "المتحف",
        "gDescB": "Means 'the museum', specifying with ال",
        "gExB": "أين المتحف؟",
        "clip": "المدينة القديمة: أطلال وآثار",
        "podcast": "المشي في الشارع — الحلقة 5",
        "article": "الأسواق التقليدية",
        "reader": [
          {
            "t": "في الشارع، يسأل الناس "
          },
          {
            "w": "عن",
            "d": "about (ʿan)"
          },
          {
            "t": " الطريق و"
          },
          {
            "w": "الاتجاهات",
            "d": "directions (al-ittijāhāt)"
          },
          {
            "t": ". مساعدة الضيوف هامة."
          }
        ],
        "reviewWord": "الاتجاهات",
        "reviewSource": "from your journey, 3 days ago",
        "reviewMeaning": "directions (al-ittijāhāt)"
      },
      {
        "chapterTitle": "Chapter 3 · الأسرة Family",
        "lessonTitle": "Meet & greet",
        "goalTitle": "Introduce it: talk about family",
        "goalLine": "Talk about your family — warmly, in Arabic.",
        "goalShort": "talk about family",
        "scenario": "family",
        "partnerName": "فاطمة Fatima",
        "partnerInitial": "ف",
        "partnerRole": "قريب relative",
        "partnerPlace": "at home",
        "scenarioTitle": "في المنزل · At home",
        "scenarioSub": "Roleplay · family introductions",
        "lessonPromptEn": "This is my brother.",
        "lessonHint": "Why “هذا” and not “هاي”?",
        "bank": [
          "هذا",
          "أخي",
          "أختي",
          "عائلتي",
          "أمي",
          "أبي"
        ],
        "bankEn": [
          "this",
          "my brother",
          "my sister",
          "my family",
          "my mother",
          "my father"
        ],
        "correct": [
          0,
          1
        ],
        "lessonCorrectTitle": "ممتاز! (Excellent!) 🎉",
        "lessonCorrectBody": "“هذا (hadha)” = “this”; possessive pronouns are after the noun.",
        "lessonWrongBody": "Start with “هذا” (this), then the family member.",
        "cultureCaption": "Family gatherings · a pillar of society",
        "cultureTitle": "Family, the core of Arab life",
        "cultureBody": "Family is central in Arab culture. Introductions are warm and customary. Saying “هذا أخي” is a proud introduction.",
        "culturePhrase": "“كيف حالك؟ (kayfa ḥālak?)” — how are you?",
        "milestoneTitle": "You can now introduce your family — warmly, in Arabic.",
        "convo": [
          {
            "who": "p",
            "n": "مرحباً بك في بيتنا!",
            "en": "Welcome to our home!"
          },
          {
            "who": "u",
            "n": "هذا أخي، أحمد.",
            "fb": "Great — a clear, warm introduction"
          },
          {
            "who": "p",
            "n": "تشرفنا يا أحمد.",
            "en": "Nice to meet you, Ahmed."
          },
          {
            "who": "u",
            "n": "عائلتي تحب الضيوف.",
            "fb": "Perfect — expressing warmth"
          },
          {
            "who": "p",
            "n": "شكراً لكم على الدعوة.",
            "en": "Thank you for having us."
          }
        ],
        "debrief": [
          {
            "title": "Right-to-left",
            "body": "Arabic reads right-to-left — you introduced correctly."
          },
          {
            "title": "The gender in هذا/هذه",
            "body": "“هذا” for males, “هذه” for females."
          }
        ],
        "grammarMini": "Possessive pronouns",
        "grammarTitle": "Adding possessive suffixes",
        "grammarIntro": "Arabic adds short suffixes to show possession.",
        "gTermA": "أخي",
        "gDescA": "Means 'my brother' — possessive ending ي",
        "gExA": "هذا أخي.",
        "gTermB": "أختي",
        "gDescB": "Means 'my sister' — possessive ending ي",
        "gExB": "هذه أختي.",
        "clip": "عائلة كبيرة ووجبات مشتركة",
        "podcast": "قصص الأسرة مع فاطمة — الحلقة 6",
        "article": "دور الأسرة والأسلاف",
        "reader": [
          {
            "t": "في الثقافة العربية، "
          },
          {
            "w": "العائلة",
            "d": "family (al-ʿāʾila)"
          },
          {
            "t": " مهمة والضيوف "
          },
          {
            "w": "أصدقاء",
            "d": "friends (aṣdiqāʾ)"
          },
          {
            "t": " للعائلة."
          }
        ],
        "reviewWord": "أخي",
        "reviewSource": "from your visit to a relative, 1 day ago",
        "reviewMeaning": "my brother (akhī)"
      },
      {
        "chapterTitle": "Chapter 4 · الفندق Hotel",
        "lessonTitle": "Check & enjoy",
        "goalTitle": "Book it: stay at a hotel",
        "goalLine": "Check into a hotel — excitedly, in Arabic.",
        "goalShort": "check in to hotel",
        "scenario": "hotel",
        "partnerName": "كريم Kareem",
        "partnerInitial": "ك",
        "partnerRole": "موظف الاستقبال receptionist",
        "partnerPlace": "at the hotel",
        "scenarioTitle": "في الفندق · At the hotel",
        "scenarioSub": "Roleplay · checking in to a hotel",
        "lessonPromptEn": "I have a reservation, please.",
        "lessonHint": "Why “لديَّ” instead of “عندي”?",
        "bank": [
          "لديَّ",
          "حجز",
          "غرفة",
          "مفتاح",
          "جواز سفر",
          "حقائب"
        ],
        "bankEn": [
          "I have",
          "reservation",
          "room",
          "key",
          "passport",
          "bags"
        ],
        "correct": [
          0,
          1,
          2,
          1
        ],
        "lessonCorrectTitle": "ممتاز! (Excellent!) 🎉",
        "lessonCorrectBody": "“لديَّ (ladayya)” = “I have”; often for reservations, tickets.",
        "lessonWrongBody": "Start with “لديَّ” (I have), continue with “حجز” (reservation).",
        "cultureCaption": "Hotel stays · a blend of hospitality",
        "cultureTitle": "Hospitality extends to hotels",
        "cultureBody": "Arab hotels offer a warm greeting. Receptionists are formal yet friendly, ensuring visitors feel welcomed. An exchange of “شكراً” and smiles are common.",
        "culturePhrase": "“جواز السفر (jawāz as-safar)” — passport, crucial word when traveling.",
        "milestoneTitle": "You can now check into a hotel — excitedly, in Arabic.",
        "convo": [
          {
            "who": "p",
            "n": "مرحبا. كيف يمكنني مساعدتك؟",
            "en": "Hello. How can I assist you?"
          },
          {
            "who": "u",
            "n": "لديَّ حجز غرفة لليلة.",
            "fb": "Great — mentioning both 'reservation' and 'room'!"
          },
          {
            "who": "p",
            "n": "اتفضل مفتاح الغرفة.",
            "en": "Here is the room key."
          },
          {
            "who": "u",
            "n": "شكراً، أين المصعد؟",
            "fb": "Perfect — showing appreciation and asking help"
          },
          {
            "who": "p",
            "n": "على يسارك، أتمنى لك إقامة سعيدة.",
            "en": "On your left, enjoy your stay."
          }
        ],
        "debrief": [
          {
            "title": "Right-to-left",
            "body": "Arabic reads right-to-left — checking in flowed rightly."
          },
          {
            "title": "From 'عندي' to 'لديَّ'",
            "body": "Both mean 'I have'; 'لديَّ' is formal."
          }
        ],
        "grammarMini": "Definite nouns",
        "grammarTitle": "Using definite articles in context",
        "grammarIntro": "Arabic uses 'ال' to specify nouns, crucial in formal settings",
        "gTermA": "غرفة",
        "gDescA": "Means 'room' in general, no article",
        "gExA": "أريد غرفة.",
        "gTermB": "الغرفة",
        "gDescB": "Means 'the room', for specifics",
        "gExB": "الغرفة جاهزة.",
        "clip": "مظاهر الضيافة العربية في الفنادق",
        "podcast": "قصص الناس في الفنادق — الحلقة 2",
        "article": "فنادق فاخرة في الشرق الأوسط",
        "reader": [
          {
            "t": "عند الوصول، "
          },
          {
            "w": "الفندق",
            "d": "hotel (al-funduq)"
          },
          {
            "t": " يقدم "
          },
          {
            "w": "الترحيب",
            "d": "welcome (at-taḥrīb)"
          },
          {
            "t": " والضيافة المعهودة."
          }
        ],
        "reviewWord": "حجز",
        "reviewSource": "from your booking activity, 4 days ago",
        "reviewMeaning": "reservation (ḥajz)"
      },
      {
        "chapterTitle": "Chapter 5 · السوق Market",
        "lessonTitle": "Barter & buy",
        "goalTitle": "Buy it: shop in a market",
        "goalLine": "Shop at a market — excitedly, in Arabic.",
        "goalShort": "shop at a market",
        "scenario": "market",
        "partnerName": "سامي Sami",
        "partnerInitial": "س",
        "partnerRole": "بائع vendor",
        "partnerPlace": "in the market",
        "scenarioTitle": "في السوق · In the market",
        "scenarioSub": "Roleplay · shopping in a market",
        "lessonPromptEn": "How much is this, please?",
        "lessonHint": "Why “كم” for the cost question?",
        "bank": [
          "كم",
          "السعر",
          "هذا",
          "فاكهة",
          "خضار",
          "سوق"
        ],
        "bankEn": [
          "how much",
          "price",
          "this",
          "fruit",
          "vegetables",
          "market"
        ],
        "correct": [
          0,
          2,
          1,
          3
        ],
        "lessonCorrectTitle": "ممتاز! (Excellent!) 🎉",
        "lessonCorrectBody": "“كم (kam)” = “how much”; follow it with the item for cost inquiries.",
        "lessonWrongBody": "Start with “كم” (how much), specify the item.",
        "cultureCaption": "Market life · a mix of colors and aromas",
        "cultureTitle": "A vibrancy of sounds and smells",
        "cultureBody": "Arab markets, or 'souks', echo with bargaining and friendliness. Vendors love a chat, and politeness inquiring prices is valued — ending with a warm “شكراً.”",
        "culturePhrase": "“الفاكهة (al-fākiha)” — fruit, often purchased fresh.",
        "milestoneTitle": "You can now shop at a market — excitedly, in Arabic.",
        "convo": [
          {
            "who": "p",
            "n": "مرحباً بجولتنا في السوق!",
            "en": "Welcome to our market tour!"
          },
          {
            "who": "u",
            "n": "كم سعر هذه الفاكهة من فضلك؟",
            "fb": "Great — polite inquiring with 'من فضلك'."
          },
          {
            "who": "p",
            "n": "لك بسعر خاص، خمسة ريالات.",
            "en": "For you, a special price, five riyals."
          },
          {
            "who": "u",
            "n": "شكراً، هذا لطيف.",
            "fb": "Perfect — appreciation is culturally important"
          },
          {
            "who": "p",
            "n": "عفواً، سيتم البيع لك دائماً.",
            "en": "You're welcome, always happy to sell to you."
          }
        ],
        "debrief": [
          {
            "title": "Right-to-left",
            "body": "Arabic reads right-to-left — your shopping question flowed correctly."
          },
          {
            "title": "From 'هذا' to 'هذه'",
            "body": "'هذا' for masculine, 'هذه' for feminine nouns."
          }
        ],
        "grammarMini": "The definite article 'ال'",
        "grammarTitle": "Determining the items in the market",
        "grammarIntro": "Use 'ال' to articulate nouns like 'fruit' when talking specific.",
        "gTermA": "فاكهة",
        "gDescA": "General term for fruit",
        "gExA": "أريد فاكهة.",
        "gTermB": "الفاكهة",
        "gDescB": "Specific mention, with 'أل'",
        "gExB": "الفاكهة هنا طازجة.",
        "clip": "الأسواق التقليدية: صناعات يدوية",
        "podcast": "أصوات السوق مع سامي — الحلقة 3",
        "article": "الأطعمة المحلية والمزارعين",
        "reader": [
          {
            "t": "الناس "
          },
          {
            "w": "يشترون",
            "d": "they buy (yashtrūn)"
          },
          {
            "t": " "
          },
          {
            "w": "الخضروات",
            "d": "vegetables (al-khudhrāwat)"
          },
          {
            "t": " \n و"
          },
          {
            "w": "الفاكهة",
            "d": "fruit (al-faakiha)"
          },
          {
            "t": " من السوق."
          }
        ],
        "reviewWord": "السوق",
        "reviewSource": "from your market visit, 6 days ago",
        "reviewMeaning": "market (as-sūq)"
      },
      {
        "chapterTitle": "Chapter 6 · حالة طوارئ Emergency",
        "lessonTitle": "Prepare & protect",
        "goalTitle": "React to it: ask for help",
        "goalLine": "React in an emergency — calmly, in Arabic.",
        "goalShort": "ask for help",
        "scenario": "emergency",
        "partnerName": "ياسر Yaser",
        "partnerInitial": "ي",
        "partnerRole": "شرطي police officer",
        "partnerPlace": "in the city",
        "scenarioTitle": "في حالة طوارئ · Emergency",
        "scenarioSub": "Roleplay · asking for emergency help",
        "lessonPromptEn": "I need help, please.",
        "lessonHint": "Why “أحتاج” instead of “أريد”?",
        "bank": [
          "أحتاج",
          "مساعدة",
          "الشرطة",
          "الطبيب",
          "النجدة",
          "حريق"
        ],
        "bankEn": [
          "I need",
          "help",
          "the police",
          "the doctor",
          "rescue",
          "fire"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "ممتاز! (Excellent!) 🎉",
        "lessonCorrectBody": "“أحتاج (aḥtāj)” = “I need”; vital verb in emergencies.",
        "lessonWrongBody": "Start with “أحتاج” (I need), specify help needed.",
        "cultureCaption": "Emergency aid · rapid and supportive",
        "cultureTitle": "Calm in the storm",
        "cultureBody": "In emergencies, clarity and calmness aid communication. Arabs value swift help, and calls for “مساعدة” are taken seriously.",
        "culturePhrase": "“النجدة! (an-najda!)” — rescue, crucial in urgent situations.",
        "milestoneTitle": "You can now ask for help — calmly, in Arabic.",
        "convo": [
          {
            "who": "p",
            "n": "هل تحتاج إلى مساعدة؟",
            "en": "Do you need help?"
          },
          {
            "who": "u",
            "n": "أحتاج الشرطة من فضلك.",
            "fb": "Great — specifying the needed service is key."
          },
          {
            "who": "p",
            "n": "الشرطة بالطريق إليك.",
            "en": "Police are on their way."
          },
          {
            "who": "u",
            "n": "شكراً لتواجدكم السريع.",
            "fb": "Perfect — gratitude for swift response"
          },
          {
            "who": "p",
            "n": "عفواً، نحن هنا لخدمتك.",
            "en": "You're welcome, we are here for you."
          }
        ],
        "debrief": [
          {
            "title": "Right-to-left",
            "body": "Arabic reads right-to-left — asking clearly matters."
          },
          {
            "title": "From 'تحتاج' to 'أحتاج'",
            "body": "“I need” differs from “you need” in conjugation."
          }
        ],
        "grammarMini": "Essential nouns in crises",
        "grammarTitle": "The gender-specific terms",
        "grammarIntro": "Use precise Arabic terms, varying by gender and number.",
        "gTermA": "مساعدة",
        "gDescA": "General assistance call",
        "gExA": "أحتاج مساعدة.",
        "gTermB": "النجدة",
        "gDescB": "Specific urgent rescue call",
        "gExB": "النجدة حالاً.",
        "clip": "حالات الطوارئ: أرقام وإجراءات",
        "podcast": "قصة الإنقاذ — الحلقة 1",
        "article": "الوقاية في حالات الطوارئ",
        "reader": [
          {
            "t": "في "
          },
          {
            "w": "الحريق",
            "d": "fire (al-ḥarīq)"
          },
          {
            "t": ", "
          },
          {
            "w": "الإسعاف",
            "d": "ambulance (al-ʾisʿāf)"
          },
          {
            "t": " يأتي بسرعة."
          }
        ],
        "reviewWord": "مساعدة",
        "reviewSource": "from your safety lesson, 5 days ago",
        "reviewMeaning": "help (musāʿada)"
      }
    ]
  },
  "ru": {
    "name": "Russian",
    "flag": "🇷🇺",
    "code": "RU",
    "font": "",
    "locale": "ru-RU",
    "greeting": "Доброе утро, Maya",
    "accent": "Russia (Standard)",
    "chapters": [
      {
        "chapterTitle": "Chapter 1 · В кафе",
        "lessonTitle": "Greetings & warmth",
        "goalTitle": "Build it: order a coffee",
        "goalLine": "Order a coffee — politely, in Russian.",
        "goalShort": "order a coffee",
        "scenario": "cafe",
        "partnerName": "Аня Anya",
        "partnerInitial": "А",
        "partnerRole": "официант",
        "partnerPlace": "Moscow café",
        "scenarioTitle": "В кафе · Moscow",
        "scenarioSub": "Roleplay · order & a short exchange",
        "lessonPromptEn": "I would like a coffee, please.",
        "lessonHint": "Why “хотел бы”?",
        "bank": [
          "Я хотел бы",
          "кофе",
          "с молоком",
          "пожалуйста",
          "счёт",
          "без"
        ],
        "bankEn": [
          "I would like",
          "coffee",
          "with milk",
          "please",
          "bill",
          "without"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "Отлично! 🎉",
        "lessonCorrectBody": "“Я хотел бы (ya khotel by)” = “I would like” — politer than “Я хочу” (I want).",
        "lessonWrongBody": "Start with the polite “I'd like,” then what you want.",
        "cultureCaption": "A café in Moscow · morning",
        "cultureTitle": "Reserved on the surface, warm underneath",
        "cultureBody": "Russians can seem formal with strangers — smiles aren't handed out freely — but warmth runs deep once you're let in. Tea and coffee come with long conversation, and a guest is always offered something. Politeness lives in the word “пожалуйста.”",
        "culturePhrase": "“Спасибо (spasibo)” — thank you; “пожалуйста” covers both “please” and “you're welcome.”",
        "milestoneTitle": "You can now order a coffee — politely, in Russian.",
        "convo": [
          {
            "who": "p",
            "n": "Здравствуйте! Что будете заказывать?",
            "en": "Hello! What will you order?"
          },
          {
            "who": "u",
            "n": "Я хотел бы кофе с молоком, пожалуйста.",
            "fb": "Great — “хотел бы” is polite and natural"
          },
          {
            "who": "p",
            "n": "Хорошо. Что-нибудь ещё?",
            "en": "Okay. Anything else?"
          },
          {
            "who": "u",
            "n": "Нет, спасибо. Счёт, пожалуйста.",
            "fb": "Perfect — “счёт” = the bill"
          },
          {
            "who": "p",
            "n": "Конечно, двести рублей.",
            "en": "Of course — two hundred rubles."
          }
        ],
        "debrief": [
          {
            "title": "“хотел” vs “хотела”",
            "body": "A man says “хотел бы,” a woman “хотела бы” — the verb agrees with your gender."
          },
          {
            "title": "Rolled “р” in счёт",
            "body": "Russian “р” is lightly rolled — let the tongue tap the ridge."
          }
        ],
        "grammarMini": "cases",
        "grammarTitle": "Cases — why “молоко” becomes “молоком”",
        "grammarIntro": "Russian nouns change endings by role. “With milk” puts milk in the instrumental case:",
        "gTermA": "молоко",
        "gDescA": "base form (nominative) — the milk",
        "gExA": "Это молоко.",
        "gTermB": "с молоком",
        "gDescB": "instrumental — “with” triggers the -ом ending",
        "gExB": "кофе с молоком",
        "clip": "Утренний рынок в Москве, с местными",
        "podcast": "Кофе с Аней — выпуск 4",
        "article": "Маленький ритуал русского кофе",
        "reader": [
          {
            "t": "В России многие любят проводить время в "
          },
          {
            "w": "кафе",
            "d": "café (kafe)"
          },
          {
            "t": ". Люди заказывают кофе и долго "
          },
          {
            "w": "разговаривают",
            "d": "talk / converse (from разговаривать)"
          },
          {
            "t": ". Официанту говорят "
          },
          {
            "w": "спасибо",
            "d": "thank you (spasibo)"
          },
          {
            "t": ". Это приятная часть дня."
          }
        ],
        "reviewWord": "счёт",
        "reviewSource": "from your café visit, 2 days ago",
        "reviewMeaning": "the bill / check (schyot)"
      },
      {
        "chapterTitle": "Chapter 2 · Как проехать",
        "lessonTitle": "Asking for Directions",
        "goalTitle": "Find it: ask where the metro is",
        "goalLine": "Ask where the nearest metro station is — politely, in Russian.",
        "goalShort": "ask for directions",
        "scenario": "directions",
        "partnerName": "Иван Ivan",
        "partnerInitial": "И",
        "partnerRole": "прохожий",
        "partnerPlace": "Moscow street",
        "scenarioTitle": "На улице · Moscow",
        "scenarioSub": "Roleplay · find the metro",
        "lessonPromptEn": "Could you tell me where the metro is?",
        "lessonHint": "Why “скажите, пожалуйста”?",
        "bank": [
          "Как",
          "проехать",
          "к",
          "метро",
          "скажите",
          "пожалуйста"
        ],
        "bankEn": [
          "How",
          "get to",
          "to",
          "the metro",
          "tell me",
          "please"
        ],
        "correct": [
          4,
          5,
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "Отлично! 🎉",
        "lessonCorrectBody": "“Скажите, пожалуйста (skazhite, pozhalusta)” is polite and commonly used for requests.",
        "lessonWrongBody": "Start with a polite phrase, then what you need help with.",
        "cultureCaption": "A street in Moscow · afternoon",
        "cultureTitle": "Politeness in requests",
        "cultureBody": "Although Russians might not smile much at strangers, they appreciate politeness. Start any request with “скажите, пожалуйста” to show respect.",
        "culturePhrase": "“Извините (izvinite)” — excuse me; use it informally or when interrupting.",
        "milestoneTitle": "You can now ask for directions to the metro — politely, in Russian.",
        "convo": [
          {
            "who": "p",
            "n": "Здравствуйте! Чем могу помочь?",
            "en": "Hello! How can I help you?"
          },
          {
            "who": "u",
            "n": "Скажите, пожалуйста, как проехать к метро?",
            "fb": "Great — this phrase is direct yet polite."
          },
          {
            "who": "p",
            "n": "Идите прямо и поверните налево.",
            "en": "Go straight and turn left."
          },
          {
            "who": "u",
            "n": "Большое спасибо.",
            "fb": "Perfect — gratitude helps build rapport."
          },
          {
            "who": "p",
            "n": "Пожалуйста, удачи!",
            "en": "You're welcome, good luck!"
          }
        ],
        "debrief": [
          {
            "title": "“проехать” vs “идти”",
            "body": "Use “проехать” for traveling by vehicle, “идти” for walking."
          },
          {
            "title": "Silent “e” in “могу”",
            "body": "The letter 'у' in “могу” lengthens the 'g' sound subtly."
          }
        ],
        "grammarMini": "prepositions",
        "grammarTitle": "Prepositions — navigating space",
        "grammarIntro": "Russian prepositions guide you in space; use them to clarify direction:",
        "gTermA": "к",
        "gDescA": "means 'to' or 'towards'; used for approaching destinations",
        "gExA": "к метро, к дому",
        "gTermB": "мимо",
        "gDescB": "means 'past'; used to indicate passing something",
        "gExB": "пойти мимо аптеки",
        "clip": "Обзор Москвы · знаменитые улицы",
        "podcast": "Поездки по Москве — выпуск 5",
        "article": "Навигация в российской столице",
        "reader": [
          {
            "t": "В Москве удобно перемещаться на "
          },
          {
            "w": "метро",
            "d": "metro (metro)"
          },
          {
            "t": ". Если вы потерялись, спросите у местных: "
          },
          {
            "w": "скажите",
            "d": "tell (from сказать)"
          },
          {
            "t": "или извините. Это поможет вам найти путь."
          }
        ],
        "reviewWord": "метро",
        "reviewSource": "from your direction inquiry, 3 days ago",
        "reviewMeaning": "the metro (metro)"
      },
      {
        "chapterTitle": "Chapter 3 · Семья",
        "lessonTitle": "Talking About Family",
        "goalTitle": "Talk it: introduce your family",
        "goalLine": "Introduce your family members — warmly, in Russian.",
        "goalShort": "introduce family",
        "scenario": "family",
        "partnerName": "Екатерина Yekaterina",
        "partnerInitial": "Е",
        "partnerRole": "друг",
        "partnerPlace": "Home gathering",
        "scenarioTitle": "Семейный ужин · Moscow",
        "scenarioSub": "Roleplay · share about family",
        "lessonPromptEn": "This is my sister and her husband.",
        "lessonHint": "Why “сестра” and “её муж”?",
        "bank": [
          "Это",
          "моя",
          "сестра",
          "её",
          "муж",
          "и"
        ],
        "bankEn": [
          "This is",
          "my",
          "sister",
          "her",
          "husband",
          "and"
        ],
        "correct": [
          0,
          1,
          2,
          5,
          3,
          4
        ],
        "lessonCorrectTitle": "Отлично! 🎉",
        "lessonCorrectBody": "“Это моя (eto moya) сестра” uses 'моя' for possession with feminine nouns.",
        "lessonWrongBody": "Introduce who it is, then describe them with appropriate pronouns.",
        "cultureCaption": "A family gathering · evening",
        "cultureTitle": "Close-knit relationships",
        "cultureBody": "Family ties in Russia are strong and cherished. Family gatherings are heartfelt, with food, stories, and lively discussions.",
        "culturePhrase": "“Родные (rodnye)” — relatives; an inclusive term for close family members.",
        "milestoneTitle": "You can now introduce your family — warmly, in Russian.",
        "convo": [
          {
            "who": "p",
            "n": "Рад вас видеть! Кто с вами?",
            "en": "Good to see you! Who's with you?"
          },
          {
            "who": "u",
            "n": "Это моя сестра и её муж.",
            "fb": "Well done — clear and familial."
          },
          {
            "who": "p",
            "n": "Очень приятно познакомиться.",
            "en": "Very nice to meet you."
          },
          {
            "who": "u",
            "n": "И мы рады познакомиться.",
            "fb": "Great — showing mutual respect."
          },
          {
            "who": "p",
            "n": "Располагайтесь, как дома.",
            "en": "Make yourself at home."
          }
        ],
        "debrief": [
          {
            "title": "“родные” vs “семья”",
            "body": "“Родные” includes extended family; “семья” refers to nuclear family."
          },
          {
            "title": "Soft ending in “моя”",
            "body": "The 'я' at the end softens the possessive pronoun for feminine nouns."
          }
        ],
        "grammarMini": "possessive pronouns",
        "grammarTitle": "Possessive Pronouns — expressing who belongs to whom",
        "grammarIntro": "Possessive pronouns change based on the gender of the noun they describe:",
        "gTermA": "моя",
        "gDescA": "feminine; used with feminine nouns",
        "gExA": "моя сестра, моя бабушка",
        "gTermB": "мой",
        "gDescB": "masculine; used with masculine nouns",
        "gExB": "мой брат, мой дедушка",
        "clip": "Теплые семейные моменты",
        "podcast": "Семейные истории — выпуск 2",
        "article": "Традиции русской семьи",
        "reader": [
          {
            "t": "В российской культуре "
          },
          {
            "w": "семья",
            "d": "family (sem'ya)"
          },
          {
            "t": " — это центр жизни. Люди часто проводят время с "
          },
          {
            "w": "родными",
            "d": "relatives (rodnymi)"
          },
          {
            "t": " за столом."
          }
        ],
        "reviewWord": "сестра",
        "reviewSource": "from your family introduction, 5 days ago",
        "reviewMeaning": "sister (sestra)"
      },
      {
        "chapterTitle": "Chapter 4 · В отеле",
        "lessonTitle": "Checking into a Hotel",
        "goalTitle": "Check it: reserve a hotel room",
        "goalLine": "Reserve a room at a hotel — smoothly, in Russian.",
        "goalShort": "reserve a hotel room",
        "scenario": "hotel",
        "partnerName": "Дмитрий Dmitry",
        "partnerInitial": "Д",
        "partnerRole": "регистратор",
        "partnerPlace": "Moscow hotel",
        "scenarioTitle": "В отеле · Moscow",
        "scenarioSub": "Roleplay · check in smoothly",
        "lessonPromptEn": "I need a room for two nights.",
        "lessonHint": "Why “мне нужен”?",
        "bank": [
          "Мне",
          "нужен",
          "номер",
          "на",
          "две",
          "ночи"
        ],
        "bankEn": [
          "I need",
          "a room",
          "for",
          "two",
          "nights",
          "please"
        ],
        "correct": [
          0,
          1,
          2,
          3,
          4,
          5
        ],
        "lessonCorrectTitle": "Отлично! 🎉",
        "lessonCorrectBody": "“Мне нужен (mne nuzhen) номер” means you need something, literally.",
        "lessonWrongBody": "Begin with the need phrase, then specify the object.",
        "cultureCaption": "Reception in a hotel · afternoon",
        "cultureTitle": "Formal yet hospitable",
        "cultureBody": "In Russian hotels, formal speech is often used, especially at check-in. Demonstrating basic etiquette in Russian goes a long way with staff.",
        "culturePhrase": "“Бронирование (bronyrovaniye)” — reservation; ensure you have one during peak seasons.",
        "milestoneTitle": "You can now reserve a hotel room — smoothly, in Russian.",
        "convo": [
          {
            "who": "p",
            "n": "Добро пожаловать! Как я могу помочь?",
            "en": "Welcome! How may I assist you?"
          },
          {
            "who": "u",
            "n": "Мне нужен номер на две ночи.",
            "fb": "Excellent — that's clear and direct."
          },
          {
            "who": "p",
            "n": "Какой тип номера предпочитаете?",
            "en": "What type of room do you prefer?"
          },
          {
            "who": "u",
            "n": "Двухместный, пожалуйста.",
            "fb": "Perfect — using 'пожалуйста' is polite."
          },
          {
            "who": "p",
            "n": "Ваш номер забронирован. Приятного пребывания!",
            "en": "Your room is booked. Enjoy your stay!"
          }
        ],
        "debrief": [
          {
            "title": "“нужен” vs “нужна”",
            "body": "“Нужен” for masculine, “нужна” for feminine nouns."
          },
          {
            "title": "Silent “з” in “нужен”",
            "body": "The 'з' is lightly pronounced, often blending in conversation."
          }
        ],
        "grammarMini": "gender agreement",
        "grammarTitle": "Gender Agreement in 'нужен'",
        "grammarIntro": "When expressing need, the verb agrees with the gender of the noun:",
        "gTermA": "нужен",
        "gDescA": "masculine; used with masculine nouns",
        "gExA": "нужен номер",
        "gTermB": "нужна",
        "gDescB": "feminine; used with feminine nouns",
        "gExB": "нужна комната",
        "clip": "Обзор отелей Москвы",
        "podcast": "Выбираем отель — выпуск 6",
        "article": "Секреты успешного бронирования в России",
        "reader": [
          {
            "t": "В Москве приезжим предлагаются различные варианты "
          },
          {
            "w": "отелей",
            "d": "hotels (otyeli)"
          },
          {
            "t": ". Важно помнить о "
          },
          {
            "w": "бронировании",
            "d": "reservation (bronirovaniye)"
          },
          {
            "t": " заранее."
          }
        ],
        "reviewWord": "номер",
        "reviewSource": "from your hotel stay, 7 days ago",
        "reviewMeaning": "room (nomer)"
      },
      {
        "chapterTitle": "Chapter 5 · На рынке",
        "lessonTitle": "Shopping at the Market",
        "goalTitle": "Buy it: purchase fresh fruits",
        "goalLine": "Buy apples and bananas — confidently, in Russian.",
        "goalShort": "buy fruits",
        "scenario": "market",
        "partnerName": "Светлана Svetlana",
        "partnerInitial": "С",
        "partnerRole": "продавец",
        "partnerPlace": "Moscow market",
        "scenarioTitle": "На рынке · Moscow",
        "scenarioSub": "Roleplay · purchase fresh produce",
        "lessonPromptEn": "I would like a kilo of apples and bananas.",
        "lessonHint": "Why “один килограмм”?",
        "bank": [
          "Я",
          "хотел бы",
          "один",
          "килограмм",
          "яблок",
          "бананов"
        ],
        "bankEn": [
          "I",
          "would like",
          "one",
          "kilogram",
          "of apples",
          "bananas"
        ],
        "correct": [
          0,
          1,
          2,
          3,
          4,
          5
        ],
        "lessonCorrectTitle": "Отлично! 🎉",
        "lessonCorrectBody": "“Один килограмм яблок (odin kilogram yablok)” is precise and courteous.",
        "lessonWrongBody": "Begin with your desire, then specify the product and amount.",
        "cultureCaption": "A bustling market · morning",
        "cultureTitle": "The art of market shopping",
        "cultureBody": "Russian markets offer fresh and local produce. Haggling is common but do so politely. Vendors appreciate courteous customers.",
        "culturePhrase": "“Свежие (svezhie)” — fresh; always seek out the freshest goods.",
        "milestoneTitle": "You can now buy fresh fruits — confidently, in Russian.",
        "convo": [
          {
            "who": "p",
            "n": "Добро пожаловать! Что хотите купить?",
            "en": "Welcome! What would you like to buy?"
          },
          {
            "who": "u",
            "n": "Я хотел бы один килограмм яблок и бананов.",
            "fb": "Nice — clear and to the point."
          },
          {
            "who": "p",
            "n": "Конечно. Хотите попробовать?",
            "en": "Of course. Would you like to try?"
          },
          {
            "who": "u",
            "n": "Да, спасибо. Хорошие фрукты.",
            "fb": "Excellent — it’s polite and shows appreciation."
          },
          {
            "who": "p",
            "n": "Отлично, всего сто рублей.",
            "en": "Great, a total of one hundred rubles."
          }
        ],
        "debrief": [
          {
            "title": "“хотел” vs “хотела”",
            "body": "Use depending on your gender — male 'хотел', female 'хотела'."
          },
          {
            "title": "Soft 'я' in "
          },
          {
            "body": "The sound is soft, listen carefully to pronunciation in fruits."
          }
        ],
        "grammarMini": "quantity",
        "grammarTitle": "Using numbers in Russian",
        "grammarIntro": "Numbers precede nouns to specify quantity accurately:",
        "gTermA": "один",
        "gDescA": "one; used with singular nouns",
        "gExA": "один килограмм",
        "gTermB": "два",
        "gDescB": "two; used with nouns in genitive plural",
        "gExB": "два килограмма",
        "clip": "Закупка на рынке",
        "podcast": "Покупки и скидки — выпуск 3",
        "article": "Секреты успешных покупок на рынке",
        "reader": [
          {
            "t": "На рынке в Москве можно купить свежие "
          },
          {
            "w": "яблоки",
            "d": "apples (yabloki)"
          },
          {
            "t": ", бананы и другие "
          },
          {
            "w": "фрукты",
            "d": "fruits (frukty)"
          },
          {
            "t": ". Важно уметь правильно "
          },
          {
            "w": "договариваться",
            "d": "negotiate (dogovariva"
          }
        ],
        "reviewWord": "килограмм",
        "reviewSource": "from your market visit, 10 days ago",
        "reviewMeaning": "kilogram (kilogram)"
      },
      {
        "chapterTitle": "Chapter 6 · Аварийная ситуация",
        "lessonTitle": "Dealing with Emergencies",
        "goalTitle": "Handle it: call for help",
        "goalLine": "Call for help in an emergency — urgently, in Russian.",
        "goalShort": "emergency call",
        "scenario": "emergency",
        "partnerName": "Ольга Olga",
        "partnerInitial": "О",
        "partnerRole": "диспетчер",
        "partnerPlace": "Emergency call center",
        "scenarioTitle": "Авария · Emergency",
        "scenarioSub": "Roleplay · seek urgent assistance",
        "lessonPromptEn": "Help! I need assistance immediately.",
        "lessonHint": "Why “помогите, пожалуйста”?",
        "bank": [
          "Помогите",
          "мне нужно",
          "немедленно",
          "вызвать",
          "полицию",
          "пожалуйста"
        ],
        "bankEn": [
          "Help",
          "I need",
          "immediately",
          "to call",
          "the police",
          "please"
        ],
        "correct": [
          0,
          5,
          1,
          3,
          4,
          2
        ],
        "lessonCorrectTitle": "Отлично! 🎉",
        "lessonCorrectBody": "“Помогите, пожалуйста (pomogite, pozhaluista)” is urgent yet respectful.",
        "lessonWrongBody": "Always start with a clear request for help, then specify the emergency.",
        "cultureCaption": "An urgent call · night",
        "cultureTitle": "Staying calm in emergencies",
        "cultureBody": "In emergencies, clear communication is vital. Russian emergency services appreciate concise and respectful calls.",
        "culturePhrase": "“Аптека (apteka)” — pharmacy; a key place for immediate medical aid.",
        "milestoneTitle": "You can now call for help — urgently, in Russian.",
        "convo": [
          {
            "who": "p",
            "n": "Служба экстренной помощи, чем можем помочь?",
            "en": "Emergency services, how can we help?"
          },
          {
            "who": "u",
            "n": "Помогите, пожалуйста! Мне нужно вызвать полицию!",
            "fb": "Important phrasing — urgent but polite."
          },
          {
            "who": "p",
            "n": "Успокойтесь, где вы находитесь?",
            "en": "Calm down, where are you located?"
          },
          {
            "who": "u",
            "n": "Я на улице Пушкина, пожалуйста, быстрее.",
            "fb": "Good — sharing precise information is key."
          },
          {
            "who": "p",
            "n": "Службы уже в пути, ожидайте.",
            "en": "Services are on the way, please wait."
          }
        ],
        "debrief": [
          {
            "title": "“помогите” vs “спасите”",
            "body": "“Помогите” is for general help; “спасите” conveys more urgency."
          },
          {
            "title": "Accentuation in “немедленно”",
            "body": "The stress is on 'мед', making it sound urgent."
          }
        ],
        "grammarMini": "commands",
        "grammarTitle": "Using Commands Effectively",
        "grammarIntro": "In emergencies, concise command forms are paramount:",
        "gTermA": "помогите",
        "gDescA": "request for help; respectful command",
        "gExA": "Помогите, мне плохо.",
        "gTermB": "спасите",
        "gDescB": "implies life-threatening urgency",
        "gExB": "Спасите, пожар!",
        "clip": "Уроки первой помощи",
        "podcast": "ЧС в России — выпуск 1",
        "article": "Навыки выживания в чрезвычайных ситуациях",
        "reader": [
          {
            "t": "В экстренных ситуациях важно сохранять "
          },
          {
            "w": "спокойствие",
            "d": "calmness (spokoystva)"
          },
          {
            "t": ". Вызовите нужные службы, используя фразы: "
          },
          {
            "w": "Помогите",
            "d": "help (pomogite)"
          },
          {
            "t": " и спасите."
          }
        ],
        "reviewWord": "полицию",
        "reviewSource": "from your emergency experience, 12 days ago",
        "reviewMeaning": "the police (politsiyu)"
      }
    ]
  },
  "tr": {
    "name": "Turkish",
    "flag": "🇹🇷",
    "code": "TR",
    "font": "",
    "locale": "tr-TR",
    "greeting": "Günaydın, Maya",
    "accent": "Turkey (Istanbul)",
    "chapters": [
      {
        "chapterTitle": "Chapter 1 · Kahvede",
        "lessonTitle": "Greetings & warmth",
        "goalTitle": "Build it: order a coffee",
        "goalLine": "Order a coffee — politely, in Turkish.",
        "goalShort": "order a coffee",
        "scenario": "cafe",
        "partnerName": "Emre",
        "partnerInitial": "E",
        "partnerRole": "garson",
        "partnerPlace": "Istanbul café",
        "scenarioTitle": "Kahvede · Istanbul",
        "scenarioSub": "Roleplay · order & a warm exchange",
        "lessonPromptEn": "I would like a coffee, please.",
        "lessonHint": "Why “istiyorum”?",
        "bank": [
          "Bir kahve",
          "istiyorum",
          "lütfen",
          "hesap",
          "su",
          "çay"
        ],
        "bankEn": [
          "A coffee",
          "I want",
          "please",
          "bill",
          "water",
          "tea"
        ],
        "correct": [
          0,
          1,
          2
        ],
        "lessonCorrectTitle": "Mükemmel! 🎉",
        "lessonCorrectBody": "“istiyorum” = “I want/would like” and goes at the END — Turkish verbs come last.",
        "lessonWrongBody": "Name the item first, then “istiyorum” (I'd like) at the end, then “lütfen.”",
        "cultureCaption": "A café in Istanbul · afternoon",
        "cultureTitle": "“A coffee is remembered for 40 years”",
        "cultureBody": "There's a Turkish saying: one cup of coffee earns forty years of friendship. Turkish coffee is slow, thick and social — served with water and often a sweet. To offer it is to offer your time, and reading the grounds afterward is half the fun.",
        "culturePhrase": "“Teşekkürler (teşekkür ederim)” — thank you; “lütfen” is please.",
        "milestoneTitle": "You can now order a coffee — politely, in Turkish.",
        "convo": [
          {
            "who": "p",
            "n": "Merhaba! Ne alırsınız?",
            "en": "Hello! What will you have?"
          },
          {
            "who": "u",
            "n": "Bir kahve istiyorum, lütfen.",
            "fb": "Great — verb “istiyorum” at the end, very natural"
          },
          {
            "who": "p",
            "n": "Tabii. Başka bir şey?",
            "en": "Of course. Anything else?"
          },
          {
            "who": "u",
            "n": "Hayır, teşekkürler. Hesap, lütfen.",
            "fb": "Perfect — “hesap” = the bill"
          },
          {
            "who": "p",
            "n": "Tabii, otuz lira.",
            "en": "Sure — thirty lira."
          }
        ],
        "debrief": [
          {
            "title": "Verb goes last",
            "body": "Turkish word order is Subject–Object–Verb: “Bir kahve istiyorum.” You placed it right."
          },
          {
            "title": "Dotless ı in hesap",
            "body": "Turkish has “ı” (no dot) — a back vowel, like the 'a' in “sofa.”"
          }
        ],
        "grammarMini": "vowel harmony",
        "grammarTitle": "Vowel harmony — endings that match",
        "grammarIntro": "Turkish suffixes change vowels to harmonize with the word. The plural is -ler or -lar:",
        "gTermA": "-ler",
        "gDescA": "after front vowels (e, i, ö, ü)",
        "gExA": "ev → evler (houses)",
        "gTermB": "-lar",
        "gDescB": "after back vowels (a, ı, o, u)",
        "gExB": "kitap → kitaplar (books)",
        "clip": "İstanbul'da sabah pazarı, yerlilerle",
        "podcast": "Emre ile kahve — bölüm 4",
        "article": "Türk kahvesinin küçük ritüeli",
        "reader": [
          {
            "t": "Türkiye'de insanlar "
          },
          {
            "w": "kahve",
            "d": "coffee"
          },
          {
            "t": " içmeyi sever. Kahve yavaş içilir ve insanlar uzun uzun "
          },
          {
            "w": "sohbet eder",
            "d": "chat / converse (from sohbet etmek)"
          },
          {
            "t": ". Garsona "
          },
          {
            "w": "teşekkürler",
            "d": "thank you (teşekkürler)"
          },
          {
            "t": " denir. Bu, günün güzel bir anıdır."
          }
        ],
        "reviewWord": "hesap",
        "reviewSource": "from your café visit, 2 days ago",
        "reviewMeaning": "the bill / check (hesap)"
      },
      {
        "chapterTitle": "Chapter 2 · Yönlendirmeler",
        "lessonTitle": "Understanding Directions",
        "goalTitle": "Find it: ask for directions",
        "goalLine": "Politely ask for directions in Turkish.",
        "goalShort": "ask for directions",
        "scenario": "directions",
        "partnerName": "Ayşe",
        "partnerInitial": "A",
        "partnerRole": "yerli",
        "partnerPlace": "Istanbul sokakları",
        "scenarioTitle": "Sokaklarda · Istanbul",
        "scenarioSub": "Roleplay · ask & understand",
        "lessonPromptEn": "How do I get to the post office?",
        "lessonHint": "Why “gidebilirim”?",
        "bank": [
          "Postane",
          "nasıl",
          "gidebilirim",
          "sol",
          "sağ",
          "düz"
        ],
        "bankEn": [
          "Post office",
          "how",
          "can I go",
          "left",
          "right",
          "straight"
        ],
        "correct": [
          1,
          0,
          2,
          5
        ],
        "lessonCorrectTitle": "Harika! 🎉",
        "lessonCorrectBody": "“gidebilirim” = “can I go” — complex verbs go at the END.",
        "lessonWrongBody": "Structure as: question word, location, verb.",
        "cultureCaption": "Istanbul streets · sun setting",
        "cultureTitle": "“Yol sormak yol bilmektir”",
        "cultureBody": "A Turkish proverb says asking for directions is knowing the road. People are generally helpful and will often guide you themselves if they can.",
        "culturePhrase": "“Teşekkürler” — thank you; “lütfen” is please.",
        "milestoneTitle": "You can now ask for directions in Turkish.",
        "convo": [
          {
            "who": "p",
            "n": "Merhaba, yardımcı olabilir miyim?",
            "en": "Hello, can I help you?"
          },
          {
            "who": "u",
            "n": "Postaneye nasıl gidebilirim?",
            "fb": "Nice, verb at the end — perfect question!"
          },
          {
            "who": "p",
            "n": "Düz gidin, sonra sağa dönün.",
            "en": "Go straight, then turn right."
          },
          {
            "who": "u",
            "n": "Anladım, teşekkürler.",
            "fb": "Great acknowledgment — teşekkürler (thanks)"
          },
          {
            "who": "p",
            "n": "Rica ederim. Kolay gelsin!",
            "en": "You’re welcome. Good luck!"
          }
        ],
        "debrief": [
          {
            "title": "Be polite",
            "body": "Turks appreciate politeness. Starting with 'Merhaba' sets a friendly tone."
          },
          {
            "title": "Context matters",
            "body": "Tempo of conversation might change according to the area — busier places, faster answers."
          }
        ],
        "grammarMini": "question words",
        "grammarTitle": "Forming Questions — how to ask rightly",
        "grammarIntro": "Turkish questions often begin with a question word like 'nasıl' for 'how'.",
        "gTermA": "nasıl",
        "gDescA": "how, asks about the method",
        "gExA": "Nasıl yaparım? (How do I do it?)",
        "gTermB": "nerede",
        "gDescB": "where, asks about the location",
        "gExB": "Postane nerede? (Where is the post office?)",
        "clip": "Istanbul'un eski sokakları, sabahın erken saati",
        "podcast": "Ayşe ile İstanbul keşfi — bölüm 12",
        "article": "Yabancıların Türkiye'de yolları bulma rehberi",
        "reader": [
          {
            "t": "İstanbul'da birçok güzel "
          },
          {
            "w": "sokaklar",
            "d": "streets"
          },
          {
            "t": " vardır. İnsanlar genellikle "
          },
          {
            "w": "yardımcı",
            "d": "helpful"
          },
          {
            "t": " olur. Yön sormak "
          },
          {
            "w": "önemlidir",
            "d": "is important"
          },
          {
            "t": "."
          }
        ],
        "reviewWord": "sağ",
        "reviewSource": "directions lesson, 2 days ago",
        "reviewMeaning": "right (direction)"
      },
      {
        "chapterTitle": "Chapter 3 · Aile",
        "lessonTitle": "Introduce Your Family",
        "goalTitle": "Tell it: talk about your family",
        "goalLine": "Introduce your family members in Turkish.",
        "goalShort": "introduce family",
        "scenario": "family",
        "partnerName": "Fatma",
        "partnerInitial": "F",
        "partnerRole": "arkadaş",
        "partnerPlace": "Family gathering",
        "scenarioTitle": "Aile Toplantısı",
        "scenarioSub": "Roleplay · meet the family",
        "lessonPromptEn": "This is my mother.",
        "lessonHint": "Why “benim”?",
        "bank": [
          "Bu",
          "benim",
          "annem",
          "babam",
          "kardeşim",
          "abim"
        ],
        "bankEn": [
          "This",
          "my",
          "mother",
          "father",
          "sibling",
          "elder brother"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "Harika! 🎉",
        "lessonCorrectBody": "“benim” = “my” - denotes possession, used in family introductions.",
        "lessonWrongBody": "Start with 'Bu', followed by possession indicator, then family member.",
        "cultureCaption": "A typical Turkish family gathering",
        "cultureTitle": "“Aile her şeydir”",
        "cultureBody": "Family is central in Turkish culture. Gatherings often include extended family, and hospitality is key. Guests are treated as part of the family.",
        "culturePhrase": "“Hoş geldiniz” — welcome; “görüşürüz” is see you.",
        "milestoneTitle": "You can introduce your family members in Turkish.",
        "convo": [
          {
            "who": "p",
            "n": "Merhaba, ailenle tanışabilir miyim?",
            "en": "Hello, can I meet your family?"
          },
          {
            "who": "u",
            "n": "Tabii, bu benim annem.",
            "fb": "Right, 'benim' for ownership."
          },
          {
            "who": "p",
            "n": "Memnun oldum. Başka kimi tanıştıracaksın?",
            "en": "Nice to meet you. Who else will you introduce?"
          },
          {
            "who": "u",
            "n": "Burası babam, ve bu da kardeşim.",
            "fb": "Excellent — integrated multiple family members."
          },
          {
            "who": "p",
            "n": "Harika bir ailen var!",
            "en": "You have a wonderful family!"
          }
        ],
        "debrief": [
          {
            "title": "Possession in Turkish",
            "body": "'Benim' indicates possession — critical for family introductions."
          },
          {
            "title": "Showing respect",
            "body": "Include titles and respectful language."
          }
        ],
        "grammarMini": "possessive suffixes",
        "grammarTitle": "Possession — forming possessives",
        "grammarIntro": "Turkish uses suffixes to show possession — 'benim annem' means 'my mother'.",
        "gTermA": "-im / -ım",
        "gDescA": "used for first person singular possessive",
        "gExA": "annem (my mother)",
        "gTermB": "-in / -ın",
        "gDescB": "used for second person singular possessive",
        "gExB": "annen (your mother)",
        "clip": "Aile kahvaltısı, sabah güneşiyle",
        "podcast": "Fatma ile aile sohbetleri — bölüm 8",
        "article": "Türk aile yapısı ve değerleri",
        "reader": [
          {
            "t": "Türkler için "
          },
          {
            "w": "aile",
            "d": "family"
          },
          {
            "t": " çok önemlidir. Toplantılarda herkese "
          },
          {
            "w": "hoş geldiniz",
            "d": "welcome"
          },
          {
            "t": " denir ve sohbetler başlar."
          }
        ],
        "reviewWord": "annem",
        "reviewSource": "from the family lesson, 2 days ago",
        "reviewMeaning": "my mother"
      },
      {
        "chapterTitle": "Chapter 4 · Otel",
        "lessonTitle": "Hotel Check-in",
        "goalTitle": "Do it: check into a hotel",
        "goalLine": "Check into a hotel in Turkish.",
        "goalShort": "hotel check-in",
        "scenario": "hotel",
        "partnerName": "Mehmet",
        "partnerInitial": "M",
        "partnerRole": "resepsiyonist",
        "partnerPlace": "City hotel lobby",
        "scenarioTitle": "Otelde",
        "scenarioSub": "Roleplay · check-in & questions",
        "lessonPromptEn": "I have a reservation.",
        "lessonHint": "Why “var”?",
        "bank": [
          "Rezervasyonum",
          "var",
          "ismim",
          "başka",
          "gece",
          "oda"
        ],
        "bankEn": [
          "Reservation",
          "there is",
          "my name",
          "another",
          "night",
          "room"
        ],
        "correct": [
          0,
          1,
          2,
          4
        ],
        "lessonCorrectTitle": "Mükemmel! 🎉",
        "lessonCorrectBody": "“var” = “there is/are” — used to express existence or possession.",
        "lessonWrongBody": "State what you have, followed by 'var' at the end.",
        "cultureCaption": "Hotel lobby · guests check-in",
        "cultureTitle": "“Misafir Umduğunu Yer, Bulduğunu Giyer”",
        "cultureBody": "A Turkish saying highlighting the guest experience. Hotels represent Turkish hospitality with comfort and warm welcomes.",
        "culturePhrase": "“Hoş geldiniz” — welcome; “iyi tatiller”— enjoy your holiday.",
        "milestoneTitle": "You can now check into a hotel in Turkish.",
        "convo": [
          {
            "who": "p",
            "n": "Merhaba, size nasıl yardımcı olabilirim?",
            "en": "Hello, how can I assist you?"
          },
          {
            "who": "u",
            "n": "Rezervasyonum var, ismim Ali.",
            "fb": "Good, 'var' for existence or ownership, well placed."
          },
          {
            "who": "p",
            "n": "Hoş geldiniz, kaç gece kalacaksınız?",
            "en": "Welcome, how many nights will you stay?"
          },
          {
            "who": "u",
            "n": "İki gece kalacağım, başka bir oda var mı?",
            "fb": "Nicely structured, requested additional room."
          },
          {
            "who": "p",
            "n": "Tabii, kontrol ediyorum. İyi konaklamalar!",
            "en": "Sure, checking now. Enjoy your stay!"
          }
        ],
        "debrief": [
          {
            "title": "Existence",
            "body": "'Var' is used for saying something exists or is present, crucial in check-ins."
          },
          {
            "title": "Booking details",
            "body": "Remember to clearly state reservation details to avoid misunderstandings."
          }
        ],
        "grammarMini": "existence",
        "grammarTitle": "Existence & Possession — kullanımı",
        "grammarIntro": "In Turkish, 'var' indicates presence, while 'yok' is absence.",
        "gTermA": "var",
        "gDescA": "used when something exists",
        "gExA": "Rezervasyonum var (I have a reservation)",
        "gTermB": "yok",
        "gDescB": "used when something doesn't exist",
        "gExB": "Yer yok (No space)",
        "clip": "Otel lobisi, akşamüstü",
        "podcast": "Mehmet ile otel deneyimleri — bölüm 10",
        "article": "Türkiye'de otel rezervasyonu: bilmeniz gerekenler",
        "reader": [
          {
            "t": "Türkiye'deki oteller misafirperverlikleriyle meşhurdur. "
          },
          {
            "w": "Rezervasyon",
            "d": "Reservation"
          },
          {
            "t": " yaptırmak genelde kolaydır, ancak önceden "
          },
          {
            "w": "yapmak",
            "d": "to do"
          },
          {
            "t": " önerilir."
          }
        ],
        "reviewWord": "rezervasyon",
        "reviewSource": "hotel stayover, 2 days ago",
        "reviewMeaning": "reservation"
      },
      {
        "chapterTitle": "Chapter 5 · Pazar",
        "lessonTitle": "Shopping at the market",
        "goalTitle": "Do it: buy fresh produce",
        "goalLine": "Learn to interact and buy at a Turkish market.",
        "goalShort": "market shopping",
        "scenario": "market",
        "partnerName": "Zeynep",
        "partnerInitial": "Z",
        "partnerRole": "satıcı",
        "partnerPlace": "Local bazaar",
        "scenarioTitle": "Pazarda",
        "scenarioSub": "Roleplay · transactions & haggling",
        "lessonPromptEn": "How much does this cost?",
        "lessonHint": "Why “ne kadar”?",
        "bank": [
          "Bu",
          "ne kadar",
          "elma",
          "sebze",
          "almak",
          "pazarlık"
        ],
        "bankEn": [
          "This",
          "how much",
          "apple",
          "vegetable",
          "to buy",
          "bargain"
        ],
        "correct": [
          0,
          1,
          2,
          5
        ],
        "lessonCorrectTitle": "Mükemmel! 🎉",
        "lessonCorrectBody": "“ne kadar” = “how much” - used to inquire about the price.",
        "lessonWrongBody": "Use 'Bu', followed by 'ne kadar' for price inquiries.",
        "cultureCaption": "A bustling Turkish market",
        "cultureTitle": "“Pazarlık sünnettir”",
        "cultureBody": "Bargaining is a customary practice in Turkish markets, considered an art. It's friendly, respectful, and part of the shopping culture. Always greet your vendor warmly.",
        "culturePhrase": "“Hayırlı işler” — have a fruitful business; “teşekkürler” — thank you.",
        "milestoneTitle": "You can now shop at the market in Turkish.",
        "convo": [
          {
            "who": "p",
            "n": "Merhaba, hoş geldiniz. Ne arıyorsunuz?",
            "en": "Hello, welcome. What are you looking for?"
          },
          {
            "who": "u",
            "n": "Bu elma ne kadar?",
            "fb": "Right, 'ne kadar' for checking prices."
          },
          {
            "who": "p",
            "n": "Kilo başına beş lira.",
            "en": "Five lira per kilo."
          },
          {
            "who": "u",
            "n": "Bir kilo almak istiyorum, teşekkürler.",
            "fb": "Correct — buying with politeness."
          },
          {
            "who": "p",
            "n": "Rica ederim. Başka bir şey ister misiniz?",
            "en": "You’re welcome. Would you like anything else?"
          }
        ],
        "debrief": [
          {
            "title": "Price inquiries",
            "body": "'Ne kadar' opens the line for bargaining — part of market life."
          },
          {
            "title": "Cultural currency",
            "body": "Smiles, politeness, and bargaining are key currencies here."
          }
        ],
        "grammarMini": "questions & metrics",
        "grammarTitle": "Transactions — asking & weighing up",
        "grammarIntro": "In market settings, 'kilo' is a common measure, and suffixes may be used on goods for pluralization.",
        "gTermA": "-lar / -ler",
        "gDescA": "plural suffixes based on vowel harmony",
        "gExA": "elma → elmalar (apples)",
        "gTermB": "kilo",
        "gDescB": "metric used for weighing goods",
        "gExB": "Lütfen bir kilo elma.",
        "clip": "Pazarda alışveriş, günübirlik",
        "podcast": "Zeynep ile pazar muhabbetleri — bölüm 3",
        "article": "Türkiye'de pazar deneyimi: bilmeniz gerekenler",
        "reader": [
          {
            "t": "Türk pazarları renklidir ve "
          },
          {
            "w": "canlı",
            "d": "lively"
          },
          {
            "t": ". Alıcılar ve satıcılar arasında "
          },
          {
            "w": "pazarlık",
            "d": "bargaining"
          },
          {
            "t": " yaygındır ve dostane bir şekilde yapılır."
          }
        ],
        "reviewWord": "pazarlık",
        "reviewSource": "shopping experience, 2 days ago",
        "reviewMeaning": "bargain"
      },
      {
        "chapterTitle": "Chapter 6 · Acil Durum",
        "lessonTitle": "Emergency Language",
        "goalTitle": "Act fast: respond to emergencies",
        "goalLine": "Learn to handle emergencies in Turkish.",
        "goalShort": "handle emergencies",
        "scenario": "emergency",
        "partnerName": "Ahmet",
        "partnerInitial": "A",
        "partnerRole": "polis memuru",
        "partnerPlace": "City street",
        "scenarioTitle": "Acil bir durum",
        "scenarioSub": "Roleplay · stay calm & communicate",
        "lessonPromptEn": "I need help!",
        "lessonHint": "Why “yardım”?",
        "bank": [
          "Yardım",
          "lütfen",
          "polis",
          "ambulans",
          "tehlike",
          "araba"
        ],
        "bankEn": [
          "Help",
          "please",
          "police",
          "ambulance",
          "danger",
          "car"
        ],
        "correct": [
          0,
          1,
          3,
          5
        ],
        "lessonCorrectTitle": "Doğru! 🎉",
        "lessonCorrectBody": "Correct phrasing — direct and polite request for help.",
        "lessonWrongBody": "For emergencies, state 'Yardım' with urgency, followed by 'lütfen'.",
        "cultureCaption": "Reacting to emergencies",
        "cultureTitle": "“Kim karıştırmadan bilmez”",
        "cultureBody": "Preparation and calmness are key in emergencies. In Turkey, emergency services are prompt, and clarity in requests is crucial.",
        "culturePhrase": "“Yardım edin” — help me; “acil” for urgent.",
        "milestoneTitle": "You can now respond in Turkish during emergencies.",
        "convo": [
          {
            "who": "p",
            "n": "Nerede bir sorun var mı?",
            "en": "Is there a problem somewhere?"
          },
          {
            "who": "u",
            "n": "Yardım lütfen, tehlike var!",
            "fb": "Essential — call for help expressed clearly."
          },
          {
            "who": "p",
            "n": "Sakin olun, polis geliyor.",
            "en": "Stay calm, the police are coming."
          },
          {
            "who": "u",
            "n": "Ambulans da gerekli.",
            "fb": "Correct — ambulance called as needed."
          },
          {
            "who": "p",
            "n": "Tamam, hemen yönlendireceğim.",
            "en": "Alright, I’ll direct immediately."
          }
        ],
        "debrief": [
          {
            "title": "Urgency & Calm",
            "body": "In emergencies, express urgency while maintaining calm."
          },
          {
            "title": "Essential Vocabulary",
            "body": "'Yardım' and 'acil' are critical words to remember."
          }
        ],
        "grammarMini": "imperative & nouns",
        "grammarTitle": "Imperatives — quick and direct",
        "grammarIntro": "In emergencies, Turkish leans on imperative forms — direct commands or requests.",
        "gTermA": "-ın / -in",
        "gDescA": "marker for polite requests",
        "gExA": "Yardım edin (Please help)",
        "gTermB": "acil",
        "gDescB": "urgent, requires fast response",
        "gExB": "Acil durum (Emergency situation)",
        "clip": "Polis merkezinde hareketlilik",
        "podcast": "Ahmet ile acil durum anıları — bölüm 6",
        "article": "Türkiye'deki acil servisler: nasıl müdahale edilir?",
        "reader": [
          {
            "t": "Acil bir durumda doğru "
          },
          {
            "w": "tepki",
            "d": "reaction"
          },
          {
            "t": " vermek önemlidir. "
          },
          {
            "w": "Yardım",
            "d": "help"
          },
          {
            "t": " çağırmadan önce, durumu anlatın."
          }
        ],
        "reviewWord": "yardım",
        "reviewSource": "emergency drill, 2 days ago",
        "reviewMeaning": "help"
      }
    ]
  },
  "vi": {
    "name": "Vietnamese",
    "flag": "🇻🇳",
    "code": "VI",
    "font": "",
    "locale": "vi-VN",
    "greeting": "Chào buổi sáng, Maya",
    "accent": "Vietnam (Southern)",
    "chapters": [
      {
        "chapterTitle": "Chapter 1 · Ở quán cà phê",
        "lessonTitle": "Greetings & warmth",
        "goalTitle": "Build it: order coffee",
        "goalLine": "Order a coffee — politely, in Vietnamese.",
        "goalShort": "order coffee",
        "scenario": "cafe",
        "partnerName": "Linh",
        "partnerInitial": "L",
        "partnerRole": "nhân viên",
        "partnerPlace": "Saigon café",
        "scenarioTitle": "Quán cà phê · Saigon",
        "scenarioSub": "Roleplay · order & a short exchange",
        "lessonPromptEn": "I would like a coffee, please.",
        "lessonHint": "Why “cho tôi”?",
        "bank": [
          "Cho tôi",
          "một",
          "cà phê",
          "nhé",
          "nước",
          "trà"
        ],
        "bankEn": [
          "Give me",
          "a",
          "coffee",
          "please",
          "water",
          "tea"
        ],
        "correct": [
          0,
          1,
          2
        ],
        "lessonCorrectTitle": "Tuyệt vời! 🎉",
        "lessonCorrectBody": "“Cho tôi (give me)” + “một (one)” is the natural, polite way to order; “nhé” softens it.",
        "lessonWrongBody": "Start with “Cho tôi” (give me), then “một” (one), then the drink.",
        "cultureCaption": "A café in Saigon · morning",
        "cultureTitle": "Coffee is something you sit with",
        "cultureBody": "Vietnamese coffee is strong, slow-dripped and often sweetened with condensed milk. People sit on low stools for hours, watching the street go by — “cà phê” is a pastime, not a to-go habit. Tones matter: the same word said six ways means six things.",
        "culturePhrase": "“Cảm ơn (cám ơn)” — thank you; add “nhé” to sound friendly and soft.",
        "milestoneTitle": "You can now order a coffee — politely, in Vietnamese.",
        "convo": [
          {
            "who": "p",
            "n": "Xin chào! Bạn muốn dùng gì?",
            "en": "Hello! What would you like?"
          },
          {
            "who": "u",
            "n": "Cho tôi một cà phê nhé.",
            "fb": "Great — “cho tôi … nhé” is friendly and natural"
          },
          {
            "who": "p",
            "n": "Nóng hay đá?",
            "en": "Hot or iced?"
          },
          {
            "who": "u",
            "n": "Đá, cảm ơn.",
            "fb": "Perfect — “đá” = iced, the local favorite"
          },
          {
            "who": "p",
            "n": "Được, hai mươi nghìn.",
            "en": "Okay — twenty thousand."
          }
        ],
        "debrief": [
          {
            "title": "“nhé” softens it",
            "body": "Ending with “nhé” makes a request warm and polite — you used it well."
          },
          {
            "title": "Tone on cà phê",
            "body": "“cà” carries a falling tone — let the pitch drop, it changes the word."
          }
        ],
        "grammarMini": "classifiers",
        "grammarTitle": "Classifiers — the “một cái” idea",
        "grammarIntro": "Vietnamese puts a classifier between a number and a noun, by type of thing:",
        "gTermA": "cái",
        "gDescA": "for objects / things in general",
        "gExA": "một cái bàn — one table",
        "gTermB": "ly / cốc",
        "gDescB": "for glasses / cups of drink",
        "gExB": "một ly cà phê — a coffee",
        "clip": "Buổi sáng ở Sài Gòn, với người địa phương",
        "podcast": "Cà phê với Linh — tập 4",
        "article": "Nghi thức nhỏ của cà phê Việt",
        "reader": [
          {
            "t": "Ở Việt Nam, nhiều người thích ngồi ở "
          },
          {
            "w": "quán cà phê",
            "d": "café / coffee shop"
          },
          {
            "t": ". Họ uống cà phê chậm rãi và "
          },
          {
            "w": "trò chuyện",
            "d": "chat / converse"
          },
          {
            "t": " với nhau. Với nhân viên, mình nói "
          },
          {
            "w": "cảm ơn",
            "d": "thank you (cảm ơn)"
          },
          {
            "t": ". Đó là khoảnh khắc đẹp trong ngày."
          }
        ],
        "reviewWord": "cảm ơn",
        "reviewSource": "from your café visit, 2 days ago",
        "reviewMeaning": "thank you (cảm ơn)"
      },
      {
        "chapterTitle": "Chapter 2 · Hỏi đường",
        "lessonTitle": "Directions & pleasantries",
        "goalTitle": "Find it: ask for directions",
        "goalLine": "Ask for and understand directions politely, in Vietnamese.",
        "goalShort": "ask for directions",
        "scenario": "directions",
        "partnerName": "Hùng",
        "partnerInitial": "H",
        "partnerRole": "người dân",
        "partnerPlace": "Hà Nội",
        "scenarioTitle": "Hỏi đường · Hà Nội",
        "scenarioSub": "Roleplay · ask & follow directions",
        "lessonPromptEn": "Could you please tell me how to get to the market?",
        "lessonHint": "Why “xin lỗi”?",
        "bank": [
          "Xin lỗi",
          "bạn",
          "cho",
          "hỏi",
          "đường",
          "chợ"
        ],
        "bankEn": [
          "Excuse me",
          "you",
          "give",
          "ask",
          "directions",
          "market"
        ],
        "correct": [
          0,
          1,
          3,
          4
        ],
        "lessonCorrectTitle": "Tuyệt vời! 🎉",
        "lessonCorrectBody": "“Xin lỗi (excuse me)” is polite; “cho hỏi (may I ask)” opens the question warmly.",
        "lessonWrongBody": "Start with “Xin lỗi” (excuse me), then introduce your question.",
        "cultureCaption": "A busy street in Hà Nội · morning",
        "cultureTitle": "Navigating the bustling streets",
        "cultureBody": "In Vietnam, streets are lively and bustling. When asking for directions, politeness and a smile go a long way. Use landmarks — they're more common than street names.",
        "culturePhrase": "“Cảm ơn (cám ơn)” — thank you; “bạn ơi” is a soft call for attention.",
        "milestoneTitle": "You can now ask for directions — politely, in Vietnamese.",
        "convo": [
          {
            "who": "p",
            "n": "Xin chào! Bạn cần tìm gì?",
            "en": "Hello! What are you looking for?"
          },
          {
            "who": "u",
            "n": "Xin lỗi, bạn cho hỏi đường đến chợ?",
            "fb": "Well done — “xin lỗi, bạn cho hỏi ...” is how you gently ask"
          },
          {
            "who": "p",
            "n": "Đi thẳng rồi rẽ trái.",
            "en": "Go straight and then turn left."
          },
          {
            "who": "u",
            "n": "Cảm ơn bạn!",
            "fb": "Great — showing gratitude is key"
          },
          {
            "who": "p",
            "n": "Không có chi!",
            "en": "You're welcome!"
          }
        ],
        "debrief": [
          {
            "title": "“xin lỗi” starts nicely",
            "body": "Prefacing with “xin lỗi” makes the approach courteous, similar to ‘excuse me’."
          },
          {
            "title": "Directional gestures",
            "body": "Accompany your words with gestures — it's common and quite helpful."
          }
        ],
        "grammarMini": "prepositions",
        "grammarTitle": "Prepositions — the “đến” idea",
        "grammarIntro": "Vietnamese uses specific prepositions to indicate direction clearly:",
        "gTermA": "đến",
        "gDescA": "to (a destination)",
        "gExA": "đến chợ — to the market",
        "gTermB": "rẽ",
        "gDescB": "turn",
        "gExB": "rẽ trái — turn left",
        "clip": "Hỏi đường ở Hà Nội",
        "podcast": "Lạc quan cùng Hùng — tập 5",
        "article": "Đường phố Việt và cách hỏi đường",
        "reader": [
          {
            "t": "Ở Hà Nội, bạn có thể thấy nhiều "
          },
          {
            "w": "đường phố",
            "d": "streets"
          },
          {
            "t": " nhộn nhịp. Khi hỏi đường, nhớ nói "
          },
          {
            "w": "cảm ơn",
            "d": "thank you"
          },
          {
            "t": ". Đó là cách giao tiếp tốt."
          }
        ],
        "reviewWord": "rẽ trái",
        "reviewSource": "from your street exploration, 3 days ago",
        "reviewMeaning": "turn left"
      },
      {
        "chapterTitle": "Chapter 3 · Gia đình",
        "lessonTitle": "Family & you",
        "goalTitle": "Share it: talk about family",
        "goalLine": "Introduce your family members in Vietnamese.",
        "goalShort": "introduce family",
        "scenario": "family",
        "partnerName": "Lan",
        "partnerInitial": "L",
        "partnerRole": "bạn",
        "partnerPlace": "Hội An",
        "scenarioTitle": "Gia đình · Hội An",
        "scenarioSub": "Roleplay · share & inquire about family",
        "lessonPromptEn": "This is my sister. Her name is Minh.",
        "lessonHint": "Why use classifiers?",
        "bank": [
          "Đây",
          "là",
          "chị",
          "của",
          "tôi",
          "Minh"
        ],
        "bankEn": [
          "This",
          "is",
          "sister",
          "of",
          "mine",
          "Minh"
        ],
        "correct": [
          0,
          1,
          2,
          4
        ],
        "lessonCorrectTitle": "Tuyệt vời! 🎉",
        "lessonCorrectBody": "“Đây là (this is)” + classifier personalizes the introduction.",
        "lessonWrongBody": "Start with “Đây là” (this is), followed by a relationship title.",
        "cultureCaption": "A family dinner in Hội An · evening",
        "cultureTitle": "Family is the core",
        "cultureBody": "In Vietnam, family is central to life. Extended family often lives close, sharing meals and responsibilities. Addressing each other correctly (with respect and titles) is crucial.",
        "culturePhrase": "“Chị” — older sister; a basic but essential form of address.",
        "milestoneTitle": "You can now introduce your family — in Vietnamese.",
        "convo": [
          {
            "who": "p",
            "n": "Chào! Ai đây?",
            "en": "Hello! Who is this?"
          },
          {
            "who": "u",
            "n": "Đây là chị của tôi, Minh.",
            "fb": "Great — introductions are warm and straightforward this way."
          },
          {
            "who": "p",
            "n": "Chị Minh làm gì?",
            "en": "What does Sister Minh do?"
          },
          {
            "who": "u",
            "n": "Chị ấy là giáo viên.",
            "fb": "Excellent — conversational and informative interaction."
          },
          {
            "who": "p",
            "n": "Thật tuyệt! Rất vui được gặp.",
            "en": "That's great! Nice to meet her."
          }
        ],
        "debrief": [
          {
            "title": "Classifiers personalize",
            "body": "Using familial titles shows warmth and respect."
          },
          {
            "title": "Respectful addressing",
            "body": "Using correct titles (e.g., “chị”) is a sign of respect and familiarity."
          }
        ],
        "grammarMini": "possessive",
        "grammarTitle": "Possessive — the “của tôi” idea",
        "grammarIntro": "Vietnamese uses possessive forms to indicate relationships:",
        "gTermA": "của",
        "gDescA": "of",
        "gExA": "chị của tôi — my sister",
        "gTermB": "tôi",
        "gDescB": "I/mine",
        "gExB": "ba của tôi — my father",
        "clip": "Buổi tối cùng gia đình",
        "podcast": "Chuyện nhà cùng Lan — tập 6",
        "article": "Gia đình Việt qua nhiều thế hệ",
        "reader": [
          {
            "t": "Ở Hội An, gia đình thường cùng nhau ăn bữa "
          },
          {
            "w": "cơm",
            "d": "rice/meal"
          },
          {
            "t": ". Họ trò chuyện và "
          },
          {
            "w": "chia sẻ",
            "d": "share"
          },
          {
            "t": " nhiều niềm vui."
          }
        ],
        "reviewWord": "chị",
        "reviewSource": "from your family visit, 5 days ago",
        "reviewMeaning": "older sister"
      },
      {
        "chapterTitle": "Chapter 4 · Khách sạn",
        "lessonTitle": "Check-in & comfort",
        "goalTitle": "Book it: check into a hotel",
        "goalLine": "Make a hotel reservation — comfortably, in Vietnamese.",
        "goalShort": "hotel check-in",
        "scenario": "hotel",
        "partnerName": "Nhi",
        "partnerInitial": "N",
        "partnerRole": "nhân viên",
        "partnerPlace": "Khách sạn Hoàng Gia",
        "scenarioTitle": "Khách sạn · Đà Nẵng",
        "scenarioSub": "Roleplay · reserve & communicate needs",
        "lessonPromptEn": "I have a reservation under the name Tuấn.",
        "lessonHint": "Why specify names?",
        "bank": [
          "Tôi có",
          "một",
          "đặt phòng",
          "tên",
          "là",
          "Tuấn"
        ],
        "bankEn": [
          "I have",
          "a",
          "reservation",
          "name",
          "is",
          "Tuấn"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "Tuyệt vời! 🎉",
        "lessonCorrectBody": "“Tôi có đặt phòng (I have a reservation)” + name clarifies your identity.",
        "lessonWrongBody": "Begin with “Tôi có đặt phòng” to state your reservation.",
        "cultureCaption": "Hotel lobby in Đà Nẵng · afternoon",
        "cultureTitle": "Hospitality is key",
        "cultureBody": "Hospitality in Vietnam is warm and inviting. Guests enjoy personal touches and attentive service. Remember to politely greet and thank the staff.",
        "culturePhrase": "“Đặt phòng” — reservation; clear communication guarantees a smooth experience.",
        "milestoneTitle": "You can now check into a hotel — confidently, in Vietnamese.",
        "convo": [
          {
            "who": "p",
            "n": "Chào bạn, bạn có đặt phòng không?",
            "en": "Hello, do you have a reservation?"
          },
          {
            "who": "u",
            "n": "Tôi có đặt phòng tên là Tuấn.",
            "fb": "Perfect — stating the name ensures clarity."
          },
          {
            "who": "p",
            "n": "Tên Tuấn có một phòng cỡ lớn.",
            "en": "Name Tuấn has a large room."
          },
          {
            "who": "u",
            "n": "Cảm ơn nhiều nhé.",
            "fb": "Excellent — grateful acknowledgment completed the process."
          },
          {
            "who": "p",
            "n": "Chúc bạn thời gian vui vẻ ở đây!",
            "en": "Enjoy your stay here!"
          }
        ],
        "debrief": [
          {
            "title": "Names ensure certainty",
            "body": "Specify your name to match bookings easily"
          },
          {
            "title": "Engage politely",
            "body": "Adding 'cảm ơn' with kindness enhances interactions."
          }
        ],
        "grammarMini": "complements",
        "grammarTitle": "Complements — the “đặt phòng” concept",
        "grammarIntro": "In Vietnamese, complements help specify the action taken or purpose:",
        "gTermA": "đặt",
        "gDescA": "to book",
        "gExA": "đặt phòng — book a room",
        "gTermB": "tên",
        "gDescB": "name",
        "gExB": "tên là Tuấn — name Tuấn",
        "clip": "Lễ tân và bạn",
        "podcast": "Check-in nhẹ nhàng — tập 7",
        "article": "Khách sạn Việt với chất lượng cao",
        "reader": [
          {
            "t": "Ở Đà Nẵng, các "
          },
          {
            "w": "khách sạn",
            "d": "hotels"
          },
          {
            "t": " luôn có không gian thoải mái và "
          },
          {
            "w": "sạch sẽ",
            "d": "clean"
          },
          {
            "t": ". Khách được phục vụ chu đáo."
          }
        ],
        "reviewWord": "đặt phòng",
        "reviewSource": "from your hotel check-in, 7 days ago",
        "reviewMeaning": "reservation"
      },
      {
        "chapterTitle": "Chapter 5 · Chợ",
        "lessonTitle": "Shopping & bartering",
        "goalTitle": "Trade it: buy from the market",
        "goalLine": "Barter and buy goods confidently in a Vietnamese market.",
        "goalShort": "market shopping",
        "scenario": "market",
        "partnerName": "Sơn",
        "partnerInitial": "S",
        "partnerRole": "người bán hàng",
        "partnerPlace": "Chợ Bến Thành",
        "scenarioTitle": "Chợ · Bến Thành",
        "scenarioSub": "Roleplay · negotiate & purchase",
        "lessonPromptEn": "How much is this banana?",
        "lessonHint": "Why use specific classifiers?",
        "bank": [
          "Cái",
          "này",
          "bao nhiêu",
          "tiền",
          "chuối",
          "quả"
        ],
        "bankEn": [
          "This",
          "is",
          "how much",
          "money",
          "banana",
          "piece"
        ],
        "correct": [
          0,
          2,
          3,
          4
        ],
        "lessonCorrectTitle": "Tuyệt vời! 🎉",
        "lessonCorrectBody": "Starting with a classifier “Cái” + “này” situates the query.",
        "lessonWrongBody": "Start with the classifier, then question the price.",
        "cultureCaption": "Buzzing market in Bến Thành · morning",
        "cultureTitle": "Bartering is an art",
        "cultureBody": "In Vietnamese markets, bargaining is expected. Be polite yet firm, and always acknowledge the seller's effort. Days are spent in lively exchanges.",
        "culturePhrase": "“Bao nhiêu tiền?” — how much money; vital for market haggling.",
        "milestoneTitle": "You can now shop in a market — expertly, in Vietnamese.",
        "convo": [
          {
            "who": "p",
            "n": "Bạn cần mua gì hôm nay?",
            "en": "What would you like to buy today?"
          },
          {
            "who": "u",
            "n": "Cái chuối này bao nhiêu tiền?",
            "fb": "Great — item specifics are vital in pricing."
          },
          {
            "who": "p",
            "n": "Hai mươi nghìn một quả.",
            "en": "Twenty thousand per piece."
          },
          {
            "who": "u",
            "n": "Có giảm chút không?",
            "fb": "Excellent bargaining technique."
          },
          {
            "who": "p",
            "n": "Mười tám nghìn nhé.",
            "en": "Eighteen thousand, okay?"
          }
        ],
        "debrief": [
          {
            "title": "Bargaining language",
            "body": "Using polite forces when negotiating leads to better deals."
          },
          {
            "title": "Include classifiers",
            "body": "“Quả” refers directly to each fruit — remember to include."
          }
        ],
        "grammarMini": "numbers",
        "grammarTitle": "Numbers — the “bao nhiêu” inquiry",
        "grammarIntro": "Market transactions rely heavily on numbers and resultant queries:",
        "gTermA": "bao nhiêu",
        "gDescA": "how many/much",
        "gExA": "bao nhiêu tiền — how much money",
        "gTermB": "quả",
        "gDescB": "classifiers for round objects such as fruits",
        "gExB": "một quả chuối — a banana",
        "clip": "Mua bán ở chợ truyền thống",
        "podcast": "Một ngày ở chợ — tập 8",
        "article": "Bí quyết mua hàng và mặc cả",
        "reader": [
          {
            "t": "Ở chợ Bến Thành, bạn có thể tìm thấy mọi "
          },
          {
            "w": "loại",
            "d": "type"
          },
          {
            "t": " hàng hóa. Hãy nhớ "
          },
          {
            "w": "trả giá",
            "d": "bargain"
          },
          {
            "t": " để có giá tốt nhất."
          }
        ],
        "reviewWord": "bao nhiêu tiền",
        "reviewSource": "from your market experience, 9 days ago",
        "reviewMeaning": "how much money"
      },
      {
        "chapterTitle": "Chapter 6 · Khẩn cấp",
        "lessonTitle": "Urgency & assistance",
        "goalTitle": "Handle it: address an emergency",
        "goalLine": "Seek help and communicate effectively during emergencies in Vietnamese.",
        "goalShort": "emergency aid",
        "scenario": "emergency",
        "partnerName": "Duy",
        "partnerInitial": "D",
        "partnerRole": "người cứu hộ",
        "partnerPlace": "Trung Tâm Y Tế",
        "scenarioTitle": "Tình huống khẩn cấp · Trung Tâm Y Tế",
        "scenarioSub": "Roleplay · seek & offer emergency help",
        "lessonPromptEn": "I need help immediately!",
        "lessonHint": "What's the urgency with “cần”?",
        "bank": [
          "Tôi",
          "cần",
          "giúp",
          "ngay",
          "khẩn cấp",
          "bác sĩ"
        ],
        "bankEn": [
          "I",
          "need",
          "help",
          "immediately",
          "emergency",
          "doctor"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "Tuyệt vời! 🎉",
        "lessonCorrectBody": "Starting with “Tôi cần” makes your request urgent and personal.",
        "lessonWrongBody": "Start with “Tôi cần” and leverage urgency.",
        "cultureCaption": "Medical center in the city · night",
        "cultureTitle": "Stay calm yet clear",
        "cultureBody": "During emergencies, keeping calm while communicating your needs is crucial. Medical staff in Vietnam are trained for fast and effective responses.",
        "culturePhrase": "“Cần giúp” — need help urgently; clear requests ensure quick action.",
        "milestoneTitle": "You can now address emergencies — effectively, in Vietnamese.",
        "convo": [
          {
            "who": "p",
            "n": "Chuyện gì xảy ra vậy?",
            "en": "What happened?"
          },
          {
            "who": "u",
            "n": "Tôi cần giúp đỡ ngay!",
            "fb": "Your urgency is well expressed."
          },
          {
            "who": "p",
            "n": "Đừng lo, chúng tôi sẽ giúp.",
            "en": "Don't worry, we'll help."
          },
          {
            "who": "u",
            "n": "Cảm ơn vì sự nhanh chóng.",
            "fb": "Gratitude ensures continued support."
          },
          {
            "who": "p",
            "n": "Chúng tôi ở đây vì bạn.",
            "en": "We're here for you."
          }
        ],
        "debrief": [
          {
            "title": "Urgency with words",
            "body": "“Ngay” enhances the immediacy — use it in critical moments."
          },
          {
            "title": "Emotion in emergencies",
            "body": "Match your language with the situation—clarity in distress aids quick help."
          }
        ],
        "grammarMini": "imperatives",
        "grammarTitle": "Imperatives — the “giúp” expression",
        "grammarIntro": "In emergencies, concise language is used to convey imperatives:",
        "gTermA": "giúp",
        "gDescA": "help",
        "gExA": "giúp ngay — help immediately",
        "gTermB": "ngay",
        "gDescB": "right now",
        "gExB": "liên lạc ngay — contact immediately",
        "clip": "Đối phó với tình huống khẩn cấp",
        "podcast": "Sáng tỉnh giấc an yên — tập 9",
        "article": "Làm gì trong tình huống khẩn cấp",
        "reader": [
          {
            "t": "Trong tình huống khẩn cấp, hãy cố gắng giữ "
          },
          {
            "w": "bình tĩnh",
            "d": "calm"
          },
          {
            "t": " và gọi cho "
          },
          {
            "w": "cứu hộ",
            "d": "rescue"
          },
          {
            "t": ". Hành động nhanh có thể cứu sống người."
          }
        ],
        "reviewWord": "khẩn cấp",
        "reviewSource": "from your emergency preparedness, 11 days ago",
        "reviewMeaning": "emergency"
      }
    ]
  },
  "nl": {
    "name": "Dutch",
    "flag": "🇳🇱",
    "code": "NL",
    "font": "",
    "locale": "nl-NL",
    "greeting": "Goedemorgen, Maya",
    "accent": "Netherlands (Standard)",
    "chapters": [
      {
        "chapterTitle": "Chapter 1 · In het café",
        "lessonTitle": "Greetings & warmth",
        "goalTitle": "Build it: order a coffee",
        "goalLine": "Order a coffee — the Dutch way.",
        "goalShort": "order a coffee",
        "scenario": "cafe",
        "partnerName": "Sanne",
        "partnerInitial": "S",
        "partnerRole": "ober",
        "partnerPlace": "Amsterdam café",
        "scenarioTitle": "In het café · Amsterdam",
        "scenarioSub": "Roleplay · order & a short exchange",
        "lessonPromptEn": "I would like a coffee with milk, please.",
        "lessonHint": "Why “graag”?",
        "bank": [
          "Ik wil graag",
          "een koffie",
          "met melk",
          "alstublieft",
          "de rekening",
          "zonder"
        ],
        "bankEn": [
          "I would like",
          "a coffee",
          "with milk",
          "please",
          "the bill",
          "without"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "Perfect! 🎉",
        "lessonCorrectBody": "“Ik wil graag” (I'd like) with “graag” is the polite order; “alstublieft” is the formal please.",
        "lessonWrongBody": "Start with the polite “I'd like,” then what you want.",
        "cultureCaption": "A café in Amsterdam · 10am",
        "cultureTitle": "Directness is a form of respect",
        "cultureBody": "The Dutch are famously direct — they'll say exactly what they mean, and they expect the same back. It isn't rudeness; it's honesty and efficiency. Coffee usually comes with a small cookie on the side, and splitting the bill is completely normal.",
        "culturePhrase": "“Dank je wel” — thank you (informal); “dank u wel” is the polite form.",
        "milestoneTitle": "You can now order a coffee — the Dutch way.",
        "convo": [
          {
            "who": "p",
            "n": "Goedemorgen! Wat wilt u?",
            "en": "Good morning! What would you like?"
          },
          {
            "who": "u",
            "n": "Ik wil graag een koffie met melk, alstublieft.",
            "fb": "Great — “graag” makes it polite"
          },
          {
            "who": "p",
            "n": "Prima. Anders nog iets?",
            "en": "Fine. Anything else?"
          },
          {
            "who": "u",
            "n": "Nee, dank u. De rekening, alstublieft.",
            "fb": "Perfect — “de rekening” = the bill"
          },
          {
            "who": "p",
            "n": "Natuurlijk, dat is drie euro.",
            "en": "Of course — that's three euros."
          }
        ],
        "debrief": [
          {
            "title": "“u” vs “je”",
            "body": "With staff you don't know, “u” (and “dank u”) is polite; “je” is casual."
          },
          {
            "title": "Guttural “g” in graag",
            "body": "Dutch “g” is a throaty sound — let it scrape softly at the back."
          }
        ],
        "grammarMini": "de / het",
        "grammarTitle": "“de” vs “het” — the two “the”s",
        "grammarIntro": "Dutch nouns take either “de” or “het.” Most are “de”; you learn the “het” ones word by word:",
        "gTermA": "de",
        "gDescA": "common gender — the majority of nouns",
        "gExA": "de koffie, de rekening",
        "gTermB": "het",
        "gDescB": "neuter — a smaller set, memorized",
        "gExB": "het café, het koekje",
        "clip": "De markt in Amsterdam, met de locals",
        "podcast": "Koffie met Sanne — aflevering 4",
        "article": "Het kleine ritueel van Nederlandse koffie",
        "reader": [
          {
            "t": "In Nederland drinken veel mensen koffie in een "
          },
          {
            "w": "café",
            "d": "café"
          },
          {
            "t": ". Erbij krijg je vaak een "
          },
          {
            "w": "koekje",
            "d": "little cookie / biscuit"
          },
          {
            "t": ". Mensen zijn direct en "
          },
          {
            "w": "praten",
            "d": "talk (to talk — from praten)"
          },
          {
            "t": " openhartig. Het is een fijn moment van de dag."
          }
        ],
        "reviewWord": "rekening",
        "reviewSource": "from your café visit, 2 days ago",
        "reviewMeaning": "the bill / check (de rekening)"
      },
      {
        "chapterTitle": "Chapter 2 · De weg vragen",
        "lessonTitle": "Asking for Directions",
        "goalTitle": "Find it: reach your destination",
        "goalLine": "Ask for directions to the train station — the Dutch way.",
        "goalShort": "ask for directions",
        "scenario": "directions",
        "partnerName": "Jan",
        "partnerInitial": "J",
        "partnerRole": "passant",
        "partnerPlace": "Utrecht",
        "scenarioTitle": "De weg vragen · Utrecht",
        "scenarioSub": "Roleplay · ask & understand",
        "lessonPromptEn": "Could you tell me how to get to the train station?",
        "lessonHint": "Why “kunt u”?",
        "bank": [
          "Kunt u",
          "mij vertellen",
          "hoe ik",
          "bij het station kom",
          "de winkel",
          "daar"
        ],
        "bankEn": [
          "Can you",
          "tell me",
          "how I",
          "get to the station",
          "the shop",
          "there"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "Goed gedaan! 🎉",
        "lessonCorrectBody": "“Kunt u” (Can you) is formal and polite. Use it when asking for help.",
        "lessonWrongBody": "Begin met een beleefde vraag, bijvoorbeeld “Kunt u...?”",
        "cultureCaption": "A street in Utrecht · 2pm",
        "cultureTitle": "Politeness pays off",
        "cultureBody": "While Dutch are direct, politeness in requests is appreciated. Make sure to thank them for their help.",
        "culturePhrase": "“Alstublieft” — please. Use it when asking or giving.",
        "milestoneTitle": "You can now ask for directions — the Dutch way.",
        "convo": [
          {
            "who": "p",
            "n": "Hallo! Kan ik u helpen?",
            "en": "Hello! Can I help you?"
          },
          {
            "who": "u",
            "n": "Kunt u mij vertellen hoe ik bij het station kom?",
            "fb": "Great use of “kunt u” for a polite request."
          },
          {
            "who": "p",
            "n": "Natuurlijk, ga rechtdoor en dan linksaf.",
            "en": "Of course, go straight and then left."
          },
          {
            "who": "u",
            "n": "Bedankt! En dan ben ik er?",
            "fb": "Perfect follow-up — keep the conversation going."
          },
          {
            "who": "p",
            "n": "Ja, het is niet ver.",
            "en": "Yes, it’s not far."
          }
        ],
        "debrief": [
          {
            "title": "Questions for help",
            "body": "Using formal phrases such as “Kunt u...” shows respect."
          },
          {
            "title": "Guttural “g” in ga",
            "body": "Remember the throaty sound of Dutch 'g' in words like ga."
          }
        ],
        "grammarMini": "verbs",
        "grammarTitle": "Verb positions in sentences",
        "grammarIntro": "Verbs in Dutch often come second in main clauses, questions switch the order:",
        "gTermA": "Main clauses",
        "gDescA": "subject-verb-object",
        "gExA": "Ik ga naar huis."
      },
      {
        "gTermB": "Questions",
        "gDescB": "verb-subject-object",
        "gExB": "Ga ik naar huis?"
      },
      "clip",
      "article",
      "reader",
      "reviewWord",
      "reviewSource",
      "reviewMeaning"
    ]
  },
  "pl": {
    "name": "Polish",
    "flag": "🇵🇱",
    "code": "PL",
    "font": "",
    "locale": "pl-PL",
    "greeting": "Dzień dobry, Maya",
    "accent": "Poland (Standard)",
    "chapters": [
      {
        "chapterTitle": "Chapter 1 · W kawiarni",
        "lessonTitle": "Greetings & warmth",
        "goalTitle": "Build it: order a coffee",
        "goalLine": "Order a coffee — politely, in Polish.",
        "goalShort": "order a coffee",
        "scenario": "cafe",
        "partnerName": "Kasia",
        "partnerInitial": "K",
        "partnerRole": "kelner",
        "partnerPlace": "Kraków café",
        "scenarioTitle": "W kawiarni · Kraków",
        "scenarioSub": "Roleplay · order & a short exchange",
        "lessonPromptEn": "I would like a coffee with milk, please.",
        "lessonHint": "Why “poproszę”?",
        "bank": [
          "Poproszę",
          "kawę",
          "z mlekiem",
          "proszę",
          "rachunek",
          "bez"
        ],
        "bankEn": [
          "I would like",
          "a coffee",
          "with milk",
          "please",
          "the bill",
          "without"
        ],
        "correct": [
          0,
          1,
          2
        ],
        "lessonCorrectTitle": "Świetnie! 🎉",
        "lessonCorrectBody": "“Poproszę” (I'd like / may I have) is the warm, polite way to order in a café.",
        "lessonWrongBody": "Start with “Poproszę,” then the item, then any extra like “z mlekiem.”",
        "cultureCaption": "A café in Kraków · morning",
        "cultureTitle": "Titles and “Pan/Pani” show respect",
        "cultureBody": "Politeness in Poland runs through forms of address: you call a stranger “Pan” (sir) or “Pani” (madam), not by name. Cafés are cosy and unhurried, often serving coffee with a slice of cake. A warm “dziękuję” closes any exchange.",
        "culturePhrase": "“Dziękuję” — thank you; “proszę” means both please and you're welcome.",
        "milestoneTitle": "You can now order a coffee — politely, in Polish.",
        "convo": [
          {
            "who": "p",
            "n": "Dzień dobry! Co podać?",
            "en": "Hello! What can I get you?"
          },
          {
            "who": "u",
            "n": "Poproszę kawę z mlekiem.",
            "fb": "Great — “Poproszę” is warm and polite"
          },
          {
            "who": "p",
            "n": "Jasne. Coś jeszcze?",
            "en": "Sure. Anything else?"
          },
          {
            "who": "u",
            "n": "Nie, dziękuję. Rachunek poproszę.",
            "fb": "Perfect — “rachunek” = the bill"
          },
          {
            "who": "p",
            "n": "Oczywiście, dziesięć złotych.",
            "en": "Of course — ten złoty."
          }
        ],
        "debrief": [
          {
            "title": "“Poproszę” is your friend",
            "body": "It politely means “I'd like / may I have” for almost anything — you used it perfectly."
          },
          {
            "title": "Nasal “ę” in kawę",
            "body": "The ę at the end is lightly nasal — let a hint of “n” colour it."
          }
        ],
        "grammarMini": "cases",
        "grammarTitle": "Cases — why “kawa” becomes “kawę”",
        "grammarIntro": "Polish nouns change endings by role. The object of “I'd like” takes the accusative:",
        "gTermA": "kawa",
        "gDescA": "base form (nominative) — coffee",
        "gExA": "To jest kawa.",
        "gTermB": "kawę",
        "gDescB": "accusative — the thing you want",
        "gExB": "Poproszę kawę.",
        "clip": "Poranny targ w Krakowie, z mieszkańcami",
        "podcast": "Kawa z Kasią — odcinek 4",
        "article": "Mały rytuał polskiej kawy",
        "reader": [
          {
            "t": "W Polsce wiele osób spędza czas w "
          },
          {
            "w": "kawiarni",
            "d": "café (in the café — from kawiarnia)"
          },
          {
            "t": ". Zamawiają kawę i spokojnie "
          },
          {
            "w": "rozmawiają",
            "d": "talk / converse (from rozmawiać)"
          },
          {
            "t": ". Do kelnera mówi się "
          },
          {
            "w": "dziękuję",
            "d": "thank you (dziękuję)"
          },
          {
            "t": ". To miły moment dnia."
          }
        ],
        "reviewWord": "rachunek",
        "reviewSource": "from your café visit, 2 days ago",
        "reviewMeaning": "the bill / check (rachunek)"
      },
      {
        "chapterTitle": "Chapter 2 · Wskazówki",
        "lessonTitle": "Getting Around",
        "goalTitle": "Understand it: ask for directions",
        "goalLine": "Ask for directions to the nearest train station.",
        "goalShort": "ask for directions",
        "scenario": "directions",
        "partnerName": "Marek",
        "partnerInitial": "M",
        "partnerRole": "przechodzień",
        "partnerPlace": "ulice Warszawy",
        "scenarioTitle": "Na ulicy · Warszawa",
        "scenarioSub": "Roleplay · ask and understand",
        "lessonPromptEn": "Excuse me, where is the train station?",
        "lessonHint": "Why “przepraszam”?",
        "bank": [
          "Przepraszam",
          "gdzie",
          "jest",
          "dworzec",
          "najbliższy",
          "kolejowy"
        ],
        "bankEn": [
          "Excuse me",
          "where",
          "is",
          "station",
          "nearest",
          "train"
        ],
        "correct": [
          0,
          1,
          2,
          4
        ],
        "lessonCorrectTitle": "Dobrze zrobione! 🎉",
        "lessonCorrectBody": "“Przepraszam” is polite and orients your query.",
        "lessonWrongBody": "Start with “Przepraszam,” then ask “gdzie jest…”.",
        "cultureCaption": "Ulica w Warszawie · popołudnie",
        "cultureTitle": "Navigating with politeness",
        "cultureBody": "Poles appreciate a kind approach. Phrases like “przepraszam” (excuse me) and “dziękuję” (thank you) are key. Public transport is reliable, and stations often have clear signage but asking locals is always helpful.",
        "culturePhrase": "“Dziękuję” — thank you; “bardzo” to emphasize (very much).",
        "milestoneTitle": "You can now ask for directions — politely, in Polish.",
        "convo": [
          {
            "who": "p",
            "n": "Przepraszam, szukasz czegoś?",
            "en": "Excuse me, are you looking for something?"
          },
          {
            "who": "u",
            "n": "Tak, gdzie jest najbliższy dworzec kolejowy?",
            "fb": "Well done — using “najbliższy dworzec” is clear."
          },
          {
            "who": "p",
            "n": "Prosto, a potem w lewo.",
            "en": "Straight, then left."
          },
          {
            "who": "u",
            "n": "Dziękuję bardzo.",
            "fb": "Excellent — gratitude never goes amiss."
          },
          {
            "who": "p",
            "n": "Nie ma za co.",
            "en": "You're welcome."
          }
        ],
        "debrief": [
          {
            "title": "“Przepraszam” opens doors",
            "body": "A polite introduction to any question or request."
          },
          {
            "title": "How to soften the 'ż' in 'przepraszam'",
            "body": "Let it sound like a soft, buzzing 'zh'."
          }
        ],
        "grammarMini": "directions",
        "grammarTitle": "Prepositions for directions",
        "grammarIntro": "When giving directions, prepositions include:",
        "gTermA": "prosto",
        "gDescA": "straight ahead",
        "gExA": "Idź prosto.",
        "gTermB": "lewo",
        "gDescB": "left",
        "gExB": "W lewo skręć."
      },
      {
        "chapterTitle": "Chapter 3 · Rodzina",
        "lessonTitle": "Family and Bonds",
        "goalTitle": "Express it: talk about family",
        "goalLine": "Introduce your family members in a conversation.",
        "goalShort": "talk about family",
        "scenario": "family",
        "partnerName": "Anna",
        "partnerInitial": "A",
        "partnerRole": "kuzynka",
        "partnerPlace": "Rodzinna Zagrajka",
        "scenarioTitle": "Z wizytą · Rodzina",
        "scenarioSub": "Roleplay · share and connect",
        "lessonPromptEn": "This is my mother and father.",
        "lessonHint": "Why use 'to'?",
        "bank": [
          "To",
          "jest",
          "moja",
          "mama",
          "i",
          "tata"
        ],
        "bankEn": [
          "This",
          "is",
          "my",
          "mother",
          "and",
          "father"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "Świetna robota! 🎉",
        "lessonCorrectBody": "“To jest” introduces people or things around you.",
        "lessonWrongBody": "Start with “To jest,”. Family is “mama” and “tata”.",
        "cultureCaption": "Rodzinne spotkanie · popołudnie",
        "cultureTitle": "The Family Circle",
        "cultureBody": "Family plays a central role in Polish culture. Gatherings often include extended family, and terms of endearment are freely used. Respect and support bind these relationships.",
        "culturePhrase": "“Rodzina” — family; “dzieci” — children.",
        "milestoneTitle": "You can now introduce family members in Polish.",
        "convo": [
          {
            "who": "p",
            "n": "Kto to jest?",
            "en": "Who is this?"
          },
          {
            "who": "u",
            "n": "To jest moja mama i tata.",
            "fb": "Good introduction using 'to jest'."
          },
          {
            "who": "p",
            "n": "Ile lat mają twoi rodzice?",
            "en": "How old are your parents?"
          },
          {
            "who": "u",
            "n": "Mama ma pięćdziesiąt lat.",
            "fb": "Well expressed to give age using 'ma'."
          },
          {
            "who": "p",
            "n": "Jakie ładne imiona!",
            "en": "What lovely names!"
          }
        ],
        "debrief": [
          {
            "title": "Starting with 'To jest'",
            "body": "Effective introduction phrase in various contexts."
          },
          {
            "title": "Note on simple possessive pronouns",
            "body": "Possessives like 'moja' for feminine, 'mój' for masculine."
          }
        ],
        "grammarMini": "possessives",
        "grammarTitle": "Introducing with possessives",
        "grammarIntro": "Use possessives to denote ownership or relation:",
        "gTermA": "moja",
        "gDescA": "my (feminine possessive)",
        "gExA": "To jest moja mama.",
        "gTermB": "mój",
        "gDescB": "my (masculine possessive)",
        "gExB": "To jest mój tata."
      },
      {
        "chapterTitle": "Chapter 4 · W hotelu",
        "lessonTitle": "Check-In",
        "goalTitle": "Secure it: book a hotel room",
        "goalLine": "Check in at a hotel and ask about room facilities.",
        "goalShort": "check into a hotel",
        "scenario": "hotel",
        "partnerName": "Piotr",
        "partnerInitial": "P",
        "partnerRole": "recepcjonista",
        "partnerPlace": "Gdańsk Hotel",
        "scenarioTitle": "W recepcji · Hotel",
        "scenarioSub": "Roleplay · confirm and inquire",
        "lessonPromptEn": "I have a reservation under the name Kowalski.",
        "lessonHint": "Why 'na nazwisko'?",
        "bank": [
          "Mam",
          "rezerwację",
          "na",
          "nazwisko",
          "Kowalski",
          "czy"
        ],
        "bankEn": [
          "I have",
          "a reservation",
          "under the name",
          "name",
          "Kowalski",
          "or"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "Znakomicie! 🎉",
        "lessonCorrectBody": "“Rezerwacja na nazwisko” aligns with hotel protocols.",
        "lessonWrongBody": "Use “Mam rezerwację na nazwisko”. Last names follow.",
        "cultureCaption": "Recepcja hotelu · wieczór",
        "cultureTitle": "Staying in a Polish Hotel",
        "cultureBody": "Hotel staff are usually bilingual, but a Polish greeting is well-received. Explaining your needs politely ensures a better service experience, and 'na nazwisko' helps locate reservations.",
        "culturePhrase": "“Pokój” — room; “klucz” — key.",
        "milestoneTitle": "You can now check into a hotel and ask basic questions.",
        "convo": [
          {
            "who": "p",
            "n": "Dzień dobry, w czym mogę pomóc?",
            "en": "Hello, how can I assist?"
          },
          {
            "who": "u",
            "n": "Mam rezerwację na nazwisko Kowalski.",
            "fb": "Perfect use of 'rezerwację na nazwisko'."
          },
          {
            "who": "p",
            "n": "Tak, mamy pana rezerwację. Pokój numer 12.",
            "en": "Yes, we have your reservation. Room number 12."
          },
          {
            "who": "u",
            "n": "Czy pokój ma balkon?",
            "fb": "Good use of 'czy' for questions."
          },
          {
            "who": "p",
            "n": "Tak, pokój ma balkon z widokiem.",
            "en": "Yes, the room has a balcony with a view."
          }
        ],
        "debrief": [
          {
            "title": "Start with 'Mam rezerwację'",
            "body": "Establishes you as a guest expecting service."
          },
          {
            "title": "Understanding facilities inquiry",
            "body": "'Czy' begins inquiries about available amenities."
          }
        ],
        "grammarMini": "questions",
        "grammarTitle": "Formulating queries in context",
        "grammarIntro": "Questions in Polish often use 'czy':",
        "gTermA": "czy",
        "gDescA": "if/whether (used in questions)",
        "gExA": "Czy pokój ma balkon?",
        "gTermB": "rezerwacja",
        "gDescB": "reservation reference",
        "gExB": "Mam rezerwację."
      },
      {
        "chapterTitle": "Chapter 5 · Na targu",
        "lessonTitle": "Market Moments",
        "goalTitle": "Negotiate it: buy fruit and vegetables",
        "goalLine": "Navigate a market to buy fresh produce.",
        "goalShort": "shop at a market",
        "scenario": "market",
        "partnerName": "Zofia",
        "partnerInitial": "Z",
        "partnerRole": "sprzedawczyni",
        "partnerPlace": "Targ Praski",
        "scenarioTitle": "Na targu · Zakupy",
        "scenarioSub": "Roleplay · choose and purchase",
        "lessonPromptEn": "How much are the apples per kilo?",
        "lessonHint": "How 'ile kosztują' creates inquiry?",
        "bank": [
          "Ile",
          "kosztują",
          "jabłka",
          "za",
          "kilogram",
          "są"
        ],
        "bankEn": [
          "How much",
          "are",
          "apples",
          "per",
          "kilogram",
          "are"
        ],
        "correct": [
          0,
          1,
          2,
          4
        ],
        "lessonCorrectTitle": "Wspaniale! 🎉",
        "lessonCorrectBody": "“Ile kosztują” sets up questions for price.",
        "lessonWrongBody": "Begin with “Ile kosztują,” name the item, and ask.",
        "cultureCaption": "Kolorowy targ · rano",
        "cultureTitle": "Market Dynamics",
        "cultureBody": "Markets are bustling, vibrant, and full of life. Vendors expect polite, clear questions; bartering is common yet respectful. Familiarity with weights and measures adds confidence.",
        "culturePhrase": "“Kilo” — kilogram; “złoty” — currency.",
        "milestoneTitle": "You can now purchase goods at a market in Polish.",
        "convo": [
          {
            "who": "p",
            "n": "Dzień dobry, czego szukasz?",
            "en": "Hello, what are you looking for?"
          },
          {
            "who": "u",
            "n": "Ile kosztują jabłka za kilogram?",
            "fb": "Inquiries with 'ile kosztują' effectively."
          },
          {
            "who": "p",
            "n": "Cztery złote za kilogram.",
            "en": "Four zloty per kilogram."
          },
          {
            "who": "u",
            "n": "Poproszę dwa kilogramy.",
            "fb": "Using 'poproszę' to specify purchase is great."
          },
          {
            "who": "p",
            "n": "Proszę, dziękuję za zakupy!",
            "en": "Here you go, thank you for shopping!"
          }
        ],
        "debrief": [
          {
            "title": "Using 'Ile kosztują'",
            "body": "For engaging market vendors smoothly."
          },
          {
            "title": "Recognizing quantities and costs",
            "body": "Using clear pricing questions helps navigate sales."
          }
        ],
        "grammarMini": "measurements",
        "grammarTitle": "Units and pricing",
        "grammarIntro": "Understand how units play a role in questions:",
        "gTermA": "kilogram",
        "gDescA": "main unit of weight for food purchases",
        "gExA": "Ile kosztuje za kilogram?",
        "gTermB": "złote",
        "gDescB": "currency reference for buying",
        "gExB": "To kosztuje pięć złotych."
      },
      {
        "chapterTitle": "Chapter 6 · Nagła sytuacja",
        "lessonTitle": "In Case of Emergency",
        "goalTitle": "Alert it: Report an emergency",
        "goalLine": "Alert someone to an emergency and ask for help.",
        "goalShort": "report an emergency",
        "scenario": "emergency",
        "partnerName": "Tomasz",
        "partnerInitial": "T",
        "partnerRole": "Polak",
        "partnerPlace": "Rynek Główny",
        "scenarioTitle": "Nagła sytuacja · Pomoc",
        "scenarioSub": "Roleplay · explain and find aid",
        "lessonPromptEn": "Help! Someone needs an ambulance!",
        "lessonHint": "Why 'pomoc' is critical?",
        "bank": [
          "Pomoc",
          "ktoś",
          "potrzebuje",
          "karetki",
          "proszę",
          "jest"
        ],
        "bankEn": [
          "Help",
          "someone",
          "needs",
          "ambulance",
          "please",
          "is"
        ],
        "correct": [
          0,
          1,
          2,
          4
        ],
        "lessonCorrectTitle": "Skutecznie! 🎉",
        "lessonCorrectBody": "“Pomoc” is vital in emergencies.",
        "lessonWrongBody": "Przy 'pomocy' follow with 'ktoś potrzebuje'.",
        "cultureCaption": "Rynek w Krakowie · nagły przypadek",
        "cultureTitle": "Emergency Protocols",
        "cultureBody": "In emergencies, clarity and speed are crucial. Words like 'pomoc' (help) and 'karetka' (ambulance) are immediately recognizable. Polish people tend to act quickly to assist one another.",
        "culturePhrase": "“Policja” — police; “straż” — fire department.",
        "milestoneTitle": "You can now report emergencies and call for help in Polish.",
        "convo": [
          {
            "who": "p",
            "n": "Co się stało?",
            "en": "What happened?"
          },
          {
            "who": "u",
            "n": "Pomoc, ktoś potrzebuje karetki!",
            "fb": "Quick call for assistance is well done."
          },
          {
            "who": "p",
            "n": "Już dzwonię po karetkę. Gdzie są?",
            "en": "I am calling an ambulance already. Where are they?"
          },
          {
            "who": "u",
            "n": "Są przy wejściu na rynek.",
            "fb": "Location details are crucial, well done."
          },
          {
            "who": "p",
            "n": "Wszystko będzie dobrze, pomoc jest w drodze.",
            "en": "Everything will be fine, help is on the way."
          }
        ],
        "debrief": [
          {
            "title": "Key terms for immediate action",
            "body": "Gets attention quickly; direct requests."
          },
          {
            "body": "Knowing critical words saves time in emergencies."
          }
        ],
        "grammarMini": "imperatives",
        "grammarTitle": "Imperative Commands",
        "grammarIntro": "Commands needed in emergencies use imperatives: ",
        "gTermA": "pomoc",
        "gDescA": "help (noun to get attention)",
        "gExA": "Pomoc! (as a call)",
        "gTermB": "potrzebuje",
        "gDescB": "a frequent request form for needs",
        "gExB": "Potrzebuję lekarza!"
      }
    ]
  },
  "id": {
    "name": "Indonesian",
    "flag": "🇮🇩",
    "code": "ID",
    "font": "",
    "locale": "id-ID",
    "greeting": "Selamat pagi, Maya",
    "accent": "Indonesia (Jakarta)",
    "chapters": [
      {
        "chapterTitle": "Chapter 1 · Di kafe",
        "lessonTitle": "Greetings & warmth",
        "goalTitle": "Build it: order a coffee",
        "goalLine": "Order a coffee — politely, in Indonesian.",
        "goalShort": "order a coffee",
        "scenario": "cafe",
        "partnerName": "Budi",
        "partnerInitial": "B",
        "partnerRole": "barista",
        "partnerPlace": "Jakarta kopi shop",
        "scenarioTitle": "Di kafe · Jakarta",
        "scenarioSub": "Roleplay · order & a friendly chat",
        "lessonPromptEn": "I would like one coffee, please.",
        "lessonHint": "Why “minta”?",
        "bank": [
          "Saya",
          "minta",
          "satu kopi",
          "tolong",
          "air",
          "teh"
        ],
        "bankEn": [
          "I",
          "request",
          "one coffee",
          "please",
          "water",
          "tea"
        ],
        "correct": [
          0,
          1,
          2
        ],
        "lessonCorrectTitle": "Sempurna! 🎉",
        "lessonCorrectBody": "“minta” = “ask for / I'd like” — the easy, polite way to order anything.",
        "lessonWrongBody": "Start with “Saya” (I), then “minta” (would like), then the item.",
        "cultureCaption": "A kopi shop in Jakarta · morning",
        "cultureTitle": "Kopi is slow, sweet, and social",
        "cultureBody": "Indonesia grows some of the world's best coffee, and ordering it comes wrapped in warmth — a smile and a soft word go further than speed. Kopi tubruk is served unfiltered, the grounds settling as you chat. Politeness and patience are the whole vibe.",
        "culturePhrase": "“Terima kasih” — thank you; “tolong” softens any request into a polite please.",
        "milestoneTitle": "You can now order a coffee — politely, in Indonesian.",
        "convo": [
          {
            "who": "p",
            "n": "Selamat pagi! Mau pesan apa?",
            "en": "Good morning! What would you like to order?"
          },
          {
            "who": "u",
            "n": "Saya minta satu kopi, tolong.",
            "fb": "Great — “minta … tolong” is warm and polite"
          },
          {
            "who": "p",
            "n": "Baik. Ada lagi?",
            "en": "Alright. Anything else?"
          },
          {
            "who": "u",
            "n": "Tidak, terima kasih.",
            "fb": "Perfect — simple and natural"
          },
          {
            "who": "p",
            "n": "Sama-sama, dua puluh ribu rupiah.",
            "en": "You're welcome — twenty thousand rupiah."
          }
        ],
        "debrief": [
          {
            "title": "“minta” vs “mau”",
            "body": "“minta” (request) is softer than “mau” (want) — you chose the polite one."
          },
          {
            "title": "Reduplication",
            "body": "“Sama-sama” (you're welcome) doubles the word — common and friendly in Indonesian."
          }
        ],
        "grammarMini": "no tenses",
        "grammarTitle": "No verb tenses — use time words instead",
        "grammarIntro": "Indonesian verbs don't change for time. You add a little word to say when:",
        "gTermA": "sudah",
        "gDescA": "“already” — marks the past",
        "gExA": "Saya sudah minum. — I already drank.",
        "gTermB": "akan",
        "gDescB": "“will” — marks the future",
        "gExB": "Saya akan minum. — I will drink.",
        "clip": "Pasar pagi di Jakarta, bersama warga",
        "podcast": "Kopi bareng Budi — episode 4",
        "article": "Ritual kecil kopi Indonesia",
        "reader": [
          {
            "t": "Di Indonesia, banyak orang suka menghabiskan waktu di "
          },
          {
            "w": "kafe",
            "d": "café"
          },
          {
            "t": ". Mereka minum kopi pelan-pelan sambil "
          },
          {
            "w": "mengobrol",
            "d": "chatting (from obrol — to chat)"
          },
          {
            "t": ". Kepada pelayan, kita berkata "
          },
          {
            "w": "terima kasih",
            "d": "thank you"
          },
          {
            "t": ". Itu momen yang menyenangkan."
          }
        ],
        "reviewWord": "terima kasih",
        "reviewSource": "from your kopi order, 3 days ago",
        "reviewMeaning": "thank you"
      },
      {
        "chapterTitle": "Chapter 2 · Arah",
        "lessonTitle": "Ways & Whys",
        "goalTitle": "Ask it: get directions",
        "goalLine": "Ask for directions — smoothly, in Indonesian.",
        "goalShort": "get directions",
        "scenario": "directions",
        "partnerName": "Ayu",
        "partnerInitial": "A",
        "partnerRole": "local resident",
        "partnerPlace": "Central Jakarta",
        "scenarioTitle": "Di jalan · Jakarta",
        "scenarioSub": "Roleplay · asking & answering",
        "lessonPromptEn": "Excuse me, how do I get to the market?",
        "lessonHint": "Why “permisi”?",
        "bank": [
          "Permisi",
          "bagaimana",
          "saya",
          "ke",
          "pasar",
          "jalan"
        ],
        "bankEn": [
          "Excuse me",
          "how",
          "I",
          "to",
          "market",
          "walk"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "Brilian! 🎉",
        "lessonCorrectBody": "“Permisi” = “excuse me” — essential for polite interactions.",
        "lessonWrongBody": "Start with “Permisi” (excuse me), then “bagaimana” (how), and continue.",
        "cultureCaption": "Navigating Jakarta · finding your way",
        "cultureTitle": "Courtesy leads the way",
        "cultureBody": "In Indonesia, asking for directions often starts with friendliness. A simple smile and “permisi” can open the path to a helpful conversation. Don't be afraid to ask; locals appreciate it.",
        "culturePhrase": "“Permisi” — opens a polite request.",
        "milestoneTitle": "You can now ask for directions — smoothly, in Indonesian.",
        "convo": [
          {
            "who": "p",
            "n": "Permisi, ada yang bisa saya bantu?",
            "en": "Excuse me, can I help you with something?"
          },
          {
            "who": "u",
            "n": "Bagaimana saya ke pasar, tolong?",
            "fb": "Well done — clear and polite"
          },
          {
            "who": "p",
            "n": "Lurus terus, kemudian belok kiri. Ada lagi?",
            "en": "Straight ahead, then turn left. Anything else?"
          },
          {
            "who": "u",
            "n": "Tidak, terima kasih banyak.",
            "fb": "Perfect — showing gratitude"
          },
          {
            "who": "p",
            "n": "Sama-sama, selamat jalan!",
            "en": "You're welcome, have a safe journey!"
          }
        ],
        "debrief": [
          {
            "title": "“Permisi” importance",
            "body": "“Permisi” (excuse me) softens requests and gets attention politely."
          },
          {
            "title": "Using verbs",
            "body": "Indonesian often skips 'to be' verbs like 'is' or 'are', saving space."
          }
        ],
        "grammarMini": "prepositions",
        "grammarTitle": "Prepositions point the way",
        "grammarIntro": "Knowing a few prepositions helps indicate direction and place:",
        "gTermA": "ke",
        "gDescA": "“to” — indicates movement towards a place",
        "gExA": "Saya ke pasar. — I am going to the market.",
        "gTermB": "di",
        "gDescB": "“in/at” — indicates location",
        "gExB": "Saya di rumah. — I am at home.",
        "clip": "Navigating a busy market in Jakarta",
        "podcast": "Finding your way — episode 5",
        "article": "A journey through Jakarta streets",
        "reader": [
          {
            "t": "Di Jakarta, ramai dan sibuk. Orang sering bertanya arah dengan sopan. "
          },
          {
            "w": "Permisi",
            "d": "excuse me"
          },
          {
            "t": ", bagaimana saya ke tempat?"
          }
        ],
        "reviewWord": "permisi",
        "reviewSource": "from your direction inquiry, 3 days ago",
        "reviewMeaning": "excuse me"
      },
      {
        "chapterTitle": "Chapter 3 · Keluarga",
        "lessonTitle": "Family & roots",
        "goalTitle": "Talk it: introduce your family",
        "goalLine": "Introduce your family — warmly, in Indonesian.",
        "goalShort": "introduce family",
        "scenario": "family",
        "partnerName": "Dewi",
        "partnerInitial": "D",
        "partnerRole": "neighbor",
        "partnerPlace": "Suburban Jakarta",
        "scenarioTitle": "Di rumah · Jakarta",
        "scenarioSub": "Roleplay · introductions at home",
        "lessonPromptEn": "This is my mother.",
        "lessonHint": "Why “ini”?",
        "bank": [
          "Ini",
          "ibu",
          "saya",
          "ayah",
          "kakak",
          "adik"
        ],
        "bankEn": [
          "This is",
          "mother",
          "my",
          "father",
          "older sibling",
          "younger sibling"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "Hebat! 🎉",
        "lessonCorrectBody": "“Ini” = “this is” — a direct way to present someone.",
        "lessonWrongBody": "Start with “Ini” (this is), then the relation and “saya” (my).",
        "cultureCaption": "Family introductions · warmth in words",
        "cultureTitle": "Family is everything",
        "cultureBody": "Indonesians place great value on family connections. Respect for elders and the closeness of extended families are often reflected in the language used. Using proper titles honors this bond.",
        "culturePhrase": "“Ibu” for mother and “Bapak” for father are both respectful and common.",
        "milestoneTitle": "You can now introduce your family — warmly, in Indonesian.",
        "convo": [
          {
            "who": "p",
            "n": "Halo, siapa ini?",
            "en": "Hello, who is this?"
          },
          {
            "who": "u",
            "n": "Ini ibu saya.",
            "fb": "Great introduction — clear and respectful"
          },
          {
            "who": "p",
            "n": "Senang bertemu dengan Anda, Ibu.",
            "en": "Nice to meet you, Ma'am."
          },
          {
            "who": "u",
            "n": "Terima kasih, senang bertemu dengan Anda juga.",
            "fb": "Excellent courtesy"
          },
          {
            "who": "p",
            "n": "Sama-sama, selamat berkenalan.",
            "en": "You're welcome, enjoy getting to know each other."
          }
        ],
        "debrief": [
          {
            "title": "Using “ini”",
            "body": "“Ini” (this is) introduces family members cleanly and simply."
          },
          {
            "title": "Titles & respect",
            "body": "Indonesian titles reflect respect: “Ibu” (mother), “Bapak” (father), and “Saudara” (sibling)."
          }
        ],
        "grammarMini": "possessive pronouns",
        "grammarTitle": "Possession with pronouns",
        "grammarIntro": "Indonesian uses simple possessive pronouns to express ownership:",
        "gTermA": "saya",
        "gDescA": "“my/I” — universal for first person ownership",
        "gExA": "Ini ibu saya. — This is my mother.",
        "gTermB": "anda",
        "gDescB": "“your/you” — polite form of addressing others",
        "gExB": "Nama anda siapa? — What is your name?",
        "clip": "Family gatherings in Jakarta neighborhoods",
        "podcast": "Meet the families — episode 6",
        "article": "Family ties in Indonesian culture",
        "reader": [
          {
            "t": "Di Indonesia, "
          },
          {
            "w": "keluarga",
            "d": "family"
          },
          {
            "t": " adalah yang utama. Hormat dan kasih sayang sering terlihat dalam bahasa."
          }
        ],
        "reviewWord": "ibu",
        "reviewSource": "from your family lesson, 3 days ago",
        "reviewMeaning": "mother"
      },
      {
        "chapterTitle": "Chapter 4 · Hotel",
        "lessonTitle": "Check-in & comfort",
        "goalTitle": "Stay it: check into a hotel",
        "goalLine": "Check into a hotel — effortlessly, in Indonesian.",
        "goalShort": "check into a hotel",
        "scenario": "hotel",
        "partnerName": "Pak Ali",
        "partnerInitial": "A",
        "partnerRole": "receptionist",
        "partnerPlace": "Central Jakarta Hotel",
        "scenarioTitle": "Di hotel · Jakarta",
        "scenarioSub": "Roleplay · checking in & settling down",
        "lessonPromptEn": "I have a reservation.",
        "lessonHint": "Why “saya”?",
        "bank": [
          "Saya",
          "memiliki",
          "reservasi",
          "kamar",
          "dari",
          "untuk"
        ],
        "bankEn": [
          "I",
          "have",
          "reservation",
          "room",
          "from",
          "for"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "Oke! 🎉",
        "lessonCorrectBody": "“Saya memiliki” = “I have” — clear declaration of possession.",
        "lessonWrongBody": "Start with “Saya” (I), then “memiliki” (have), followed by the object.",
        "cultureCaption": "Hotel stays in Jakarta · comfort and convenience",
        "cultureTitle": "Hospitality and kindness",
        "cultureBody": "Hospitality in Indonesian hotels is notable for its warm welcome and helpful staff. Guests are often treated with high respect and friendliness, making them feel at home far from home.",
        "culturePhrase": "“Selamat datang” — a warm welcome.",
        "milestoneTitle": "You can now check into a hotel — effortlessly, in Indonesian.",
        "convo": [
          {
            "who": "p",
            "n": "Selamat datang di hotel kami, ada yang bisa saya bantu?",
            "en": "Welcome to our hotel, can I help you with something?"
          },
          {
            "who": "u",
            "n": "Saya memiliki reservasi.",
            "fb": "Superb — clear and to the point"
          },
          {
            "who": "p",
            "n": "Nama atas reservasi ini?",
            "en": "What name is the reservation under?"
          },
          {
            "who": "u",
            "n": "Atas nama Budi.",
            "fb": "Excellent — concise information"
          },
          {
            "who": "p",
            "n": "Baik, kamar Anda di lantai tiga. Selamat menikmati.",
            "en": "Alright, your room is on the third floor. Enjoy your stay."
          }
        ],
        "debrief": [
          {
            "title": "“saya memiliki” clarity",
            "body": "Declaring possession or reservation with “saya memiliki” ensures clear communication."
          },
          {
            "title": "Understanding nouns",
            "body": "Use straightforward nouns and add context when needed in Indonesian."
          }
        ],
        "grammarMini": "simple present tense",
        "grammarTitle": "Expressing possession clearly",
        "grammarIntro": "Simple possessive statements utilize the word 'memiliki' (to have):",
        "gTermA": "memiliki",
        "gDescA": "“to have” — indicates possession",
        "gExA": "Saya memiliki teman di Jakarta. — I have a friend in Jakarta.",
        "gTermB": "punya",
        "gDescB": "“have” — more informal way to say 'have'",
        "gExB": "Saya punya mobil. — I have a car.",
        "clip": "First impressions at Jakarta hotels",
        "podcast": "Checking into a hotel — episode 7",
        "article": "The comfort of Indonesian hospitality",
        "reader": [
          {
            "t": "Ketika kamu tiba di "
          },
          {
            "w": "hotel",
            "d": "hotel"
          },
          {
            "t": ", resepsionis menyambut dengan ramah. Pesan kamar dan mulailah bersantai."
          }
        ],
        "reviewWord": "reservasi",
        "reviewSource": "from your hotel check-in, 3 days ago",
        "reviewMeaning": "reservation"
      },
      {
        "chapterTitle": "Chapter 5 · Pasar",
        "lessonTitle": "Traditions & transactions",
        "goalTitle": "Deal it: make a market purchase",
        "goalLine": "Make a market purchase — confidently, in Indonesian.",
        "goalShort": "make a market purchase",
        "scenario": "market",
        "partnerName": "Tini",
        "partnerInitial": "T",
        "partnerRole": "vendor",
        "partnerPlace": "Traditional Market, South Jakarta",
        "scenarioTitle": "Di pasar · Jakarta",
        "scenarioSub": "Roleplay · buying & bargaining",
        "lessonPromptEn": "How much is this banana?",
        "lessonHint": "Why “berapa”?",
        "bank": [
          "Berapa",
          "harga",
          "ini",
          "pisang",
          "apel",
          "jeruk"
        ],
        "bankEn": [
          "How much",
          "price",
          "this",
          "banana",
          "apple",
          "orange"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "Luar biasa! 🎉",
        "lessonCorrectBody": "“Berapa” = “how much” — the key question word in transactions.",
        "lessonWrongBody": "Start with “Berapa” (how much), then “harga” (price), and specify the item.",
        "cultureCaption": "Market scenes in Jakarta · a mix of energy and flavor",
        "cultureTitle": "Bargains and banter",
        "cultureBody": "Indonesian markets are vibrant places full of life and community interaction. Bargaining is expected, and the friendly exchange can be as enjoyable as the shopping. Prices are rarely fixed, making the market a lively place for both vendors and buyers.",
        "culturePhrase": "“Berapa harga?” — phrase asking for the price.",
        "milestoneTitle": "You can now make a market purchase — confidently, in Indonesian.",
        "convo": [
          {
            "who": "p",
            "n": "Selamat datang, silakan lihat-lihat.",
            "en": "Welcome, feel free to look around."
          },
          {
            "who": "u",
            "n": "Berapa harga pisang ini?",
            "fb": "Fantastic — precise and clear"
          },
          {
            "who": "p",
            "n": "Lima ribu rupiah. Mau beli berapa?",
            "en": "Five thousand rupiah. How many do you want to buy?"
          },
          {
            "who": "u",
            "n": "Saya ambil ini saja, terima kasih.",
            "fb": "Nicely done — concise conclusion"
          },
          {
            "who": "p",
            "n": "Oke, terima kasih. Selamat berbelanja!",
            "en": "Okay, thank you. Happy shopping!"
          }
        ],
        "debrief": [
          {
            "title": "Understanding “harga”",
            "body": "“Harga” (price) helps you navigate buying and selling smoothly."
          },
          {
            "title": "Common questions",
            "body": "Trust 'berapa' to guide you through pricing discussions."
          }
        ],
        "grammarMini": "interrogative words",
        "grammarTitle": "Ask questions with clarity",
        "grammarIntro": "Mastering a few question words opens up conversations:",
        "gTermA": "berapa",
        "gDescA": "“how much” — essential for discussing price",
        "gExA": "Berapa harga kitab ini? — How much is this book?",
        "gTermB": "apa",
        "gDescB": "“what” — general inquiry",
        "gExB": "Apa ini? — What is this?",
        "clip": "Bargaining scenes in a bustling Jakarta market",
        "podcast": "Market deals — episode 8",
        "article": "The art of bargaining in Indonesia",
        "reader": [
          {
            "t": "Di "
          },
          {
            "w": "pasar",
            "d": "market"
          },
          {
            "t": ", percakapan seru antara penjual dan pembeli. Harga, barang, dan tawar menawar berlangsung dengan cepat."
          }
        ],
        "reviewWord": "pisang",
        "reviewSource": "from your market visit, 3 days ago",
        "reviewMeaning": "banana"
      },
      {
        "chapterTitle": "Chapter 6 · Keadaan darurat",
        "lessonTitle": "Emergencies & help",
        "goalTitle": "Solve it: seek emergency help",
        "goalLine": "Seek emergency help — clearly, in Indonesian.",
        "goalShort": "seek emergency help",
        "scenario": "emergency",
        "partnerName": "Rina",
        "partnerInitial": "R",
        "partnerRole": "emergency responder",
        "partnerPlace": "Jakarta",
        "scenarioTitle": "Dalam keadaan darurat · Jakarta",
        "scenarioSub": "Roleplay · calling for help",
        "lessonPromptEn": "Call for help.",
        "lessonHint": "Why “tolong”?",
        "bank": [
          "Tolong",
          "ada",
          "darurat",
          "kecelakaan",
          "ambulans",
          "polisi"
        ],
        "bankEn": [
          "Help",
          "there is",
          "emergency",
          "accident",
          "ambulance",
          "police"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "Bagus sekali! 🎉",
        "lessonCorrectBody": "“Tolong” = “help” — it's direct and urgent for emergency situations.",
        "lessonWrongBody": "Start with “Tolong” (help), then specify the problem or request.",
        "cultureCaption": "Emergency response in Jakarta · safety first",
        "cultureTitle": "Quick to respond",
        "cultureBody": "In emergencies, knowing the right words can save vital time. Indonesian emergency services are trained to respond swiftly, and clear communication is essential in getting the help needed quickly.",
        "culturePhrase": "“Tolong” — the urgent help word.",
        "milestoneTitle": "You can now seek emergency help — clearly, in Indonesian.",
        "convo": [
          {
            "who": "p",
            "n": "Halo, ini nomor darurat. Ada yang bisa dibantu?",
            "en": "Hello, this is the emergency number. How can I assist you?"
          },
          {
            "who": "u",
            "n": "Tolong, ada kecelakaan di jalan.",
            "fb": "Crisis averted — precise nature of emergency"
          },
          {
            "who": "p",
            "n": "Kami kirim bantuan segera. Apa situasinya?",
            "en": "We'll send help immediately. What is the situation?"
          },
          {
            "who": "u",
            "n": "Dua mobil bertabrakan.",
            "fb": "Good — concise description"
          },
          {
            "who": "p",
            "n": "Terima kasih, tim kami segera datang.",
            "en": "Thank you, our team is on the way."
          }
        ],
        "debrief": [
          {
            "title": "Critical command “tolong”",
            "body": "Knowing “tolong” ensures you're never lost for the word for 'help'."
          },
          {
            "title": "Articulating emergencies",
            "body": "Describe an emergency clearly to ensure rapid response."
          }
        ],
        "grammarMini": "emergency vocabulary",
        "grammarTitle": "Emergency expressions",
        "grammarIntro": "In times of crisis, knowing these could make a difference:",
        "gTermA": "darurat",
        "gDescA": "“emergency” — for critical situations",
        "gExA": "Ini darurat, saya butuh bantuan sekarang. — This is an emergency, I need help now.",
        "gTermB": "kecelakaan",
        "gDescB": "“accident” — when an accident occurs",
        "gExB": "Ada kecelakaan di depan. — There's an accident ahead.",
        "clip": "Emergency response team at work in Jakarta",
        "podcast": "Handling emergencies — episode 9",
        "article": "Staying safe in Jakarta",
        "reader": [
          {
            "t": "Ketika ada situasi "
          },
          {
            "w": "darurat",
            "d": "emergency"
          },
          {
            "t": ", hubungi layanan yang tersedia dengan segera. Bahasa yang tepat dapat menyelamatkan nyawa."
          }
        ],
        "reviewWord": "tolong",
        "reviewSource": "from your emergency handling, 3 days ago",
        "reviewMeaning": "help"
      }
    ]
  },
  "th": {
    "name": "Thai",
    "flag": "🇹🇭",
    "code": "TH",
    "font": "th",
    "locale": "th-TH",
    "greeting": "สวัสดี, Maya",
    "accent": "Thailand (Bangkok)",
    "chapters": [
      {
        "chapterTitle": "Chapter 1 · ที่ร้านกาแฟ Café",
        "lessonTitle": "Greetings & warmth",
        "goalTitle": "Build it: order a coffee",
        "goalLine": "Order a coffee — politely, in Thai.",
        "goalShort": "order a coffee",
        "scenario": "cafe",
        "partnerName": "นภา Napha",
        "partnerInitial": "N",
        "partnerRole": "barista",
        "partnerPlace": "Bangkok café",
        "scenarioTitle": "ร้านกาแฟ · Bangkok",
        "scenarioSub": "Roleplay · order & a polite exchange",
        "lessonPromptEn": "I would like a coffee, please.",
        "lessonHint": "Why “ขอ … ครับ/ค่ะ”?",
        "bank": [
          "ขอ",
          "กาแฟ",
          "หนึ่งแก้ว",
          "ค่ะ",
          "น้ำ",
          "ชา"
        ],
        "bankEn": [
          "please",
          "coffee",
          "one cup",
          "yes",
          "water",
          "tea"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "เยี่ยมมาก! (Perfect!) 🎉",
        "lessonCorrectBody": "“ขอ” = “may I have,” and ending with “ค่ะ” (female) / “ครับ” (male) makes it polite.",
        "lessonWrongBody": "Start with “ขอ” (may I have), name the item, then the polite particle.",
        "cultureCaption": "A café in Bangkok · morning",
        "cultureTitle": "Politeness rides on the last word",
        "cultureBody": "Thai politeness lives in tiny ending particles — “ครับ” for men, “ค่ะ” for women — added to almost every sentence. Skip them and you sound abrupt. A gentle smile (and the wai, a slight bow with palms together) carries enormous social warmth.",
        "culturePhrase": "“ขอบคุณค่ะ/ครับ (khop khun)” — thank you, with the polite particle.",
        "milestoneTitle": "You can now order a coffee — politely, in Thai.",
        "convo": [
          {
            "who": "p",
            "n": "สวัสดีค่ะ รับอะไรดีคะ?",
            "en": "Hello! What would you like?"
          },
          {
            "who": "u",
            "n": "ขอกาแฟหนึ่งแก้วค่ะ",
            "fb": "Great — “ขอ … ค่ะ” is the polite request"
          },
          {
            "who": "p",
            "n": "ได้ค่ะ รับอย่างอื่นไหมคะ?",
            "en": "Sure. Anything else?"
          },
          {
            "who": "u",
            "n": "ไม่ค่ะ ขอบคุณค่ะ",
            "fb": "Perfect — polite particle “ค่ะ” at the end"
          },
          {
            "who": "p",
            "n": "หกสิบบาทค่ะ",
            "en": "Sixty baht."
          }
        ],
        "debrief": [
          {
            "title": "ครับ vs ค่ะ",
            "body": "The polite particle depends on YOUR gender, not the listener's — men say ครับ, women ค่ะ."
          },
          {
            "title": "Mid vs falling tone",
            "body": "“กาแฟ” has specific tones — getting them right is what makes it understood."
          }
        ],
        "grammarMini": "ครับ / ค่ะ",
        "grammarTitle": "Polite particles — ครับ and ค่ะ",
        "grammarIntro": "Thai politeness is added at the very end of a sentence, chosen by your own gender:",
        "gTermA": "ครับ (khrap)",
        "gDescA": "added by male speakers",
        "gExA": "ขอบคุณครับ",
        "gTermB": "ค่ะ (kha)",
        "gDescB": "added by female speakers",
        "gExB": "ขอบคุณค่ะ",
        "clip": "ตลาดเช้าในกรุงเทพฯ กับคนท้องถิ่น",
        "podcast": "กาแฟกับนภา — ตอนที่ 4",
        "article": "พิธีกรรมเล็ก ๆ ของกาแฟไทย",
        "reader": [
          {
            "t": "ในประเทศไทย หลายคนชอบใช้เวลาที่"
          },
          {
            "w": "ร้านกาแฟ",
            "d": "café / coffee shop"
          },
          {
            "t": " พวกเขาดื่มกาแฟช้า ๆ และ"
          },
          {
            "w": "พูดคุย",
            "d": "chat / talk together"
          },
          {
            "t": "กัน กับพนักงานเราพูดว่า"
          },
          {
            "w": "ขอบคุณ",
            "d": "thank you (khop khun)"
          },
          {
            "t": " มันเป็นช่วงเวลาที่ดีของวัน"
          }
        ],
        "reviewWord": "ขอบคุณ",
        "reviewSource": "from your café order, 3 days ago",
        "reviewMeaning": "thank you (khop khun)"
      },
      {
        "chapterTitle": "Chapter 2 · ทางไปไหน Directions",
        "lessonTitle": "Finding Your Way",
        "goalTitle": "Build it: ask for directions",
        "goalLine": "Ask for directions — politely, in Thai.",
        "goalShort": "ask for directions",
        "scenario": "directions",
        "partnerName": "วสุ Vasu",
        "partnerInitial": "V",
        "partnerRole": "local guide",
        "partnerPlace": "Bangkok street",
        "scenarioTitle": "สายถนนในกรุงเทพฯ · Bangkok",
        "scenarioSub": "Roleplay · asking and understanding directions",
        "lessonPromptEn": "Excuse me, how do I get to the train station?",
        "lessonHint": "Why “ขอโทษ … ครับ/ค่ะ”?",
        "bank": [
          "ขอโทษ",
          "สถานีรถไฟ",
          "ไป",
          "อย่างไร",
          "ครับ",
          "ค่ะ"
        ],
        "bankEn": [
          "excuse me",
          "train station",
          "go",
          "how",
          "yes (male)",
          "yes (female)"
        ],
        "correct": [
          0,
          2,
          1,
          3
        ],
        "lessonCorrectTitle": "ยอดเยี่ยม! (Excellent!) 🎉",
        "lessonCorrectBody": "“ขอโทษ” is “excuse me,” with polite endings “ค่ะ” (female) / “ครับ” (male).",
        "lessonWrongBody": "Start with “ขอโทษ” (excuse me), ask the question, then add the polite particle.",
        "cultureCaption": "Navigating Bangkok streets · day",
        "cultureTitle": "Politeness in public",
        "cultureBody": "In Thailand, politeness is essential when asking for help. Even strangers appreciate a smile and the right polite particle.",
        "culturePhrase": "“ขอโทษค่ะ/ครับ (kho thot)” — excuse me, with the polite particle.",
        "milestoneTitle": "You can now ask for directions — politely, in Thai.",
        "convo": [
          {
            "who": "p",
            "n": "สวัสดีครับ/ค่ะ ช่วยอะไรได้บ้างครับ/ค่ะ?",
            "en": "Hello! How can I help you?"
          },
          {
            "who": "u",
            "n": "ขอโทษครับ/ค่ะ สถานีรถไฟไปทางไหนครับ/ค่ะ?",
            "fb": "Great — “ขอโทษครับ/ค่ะ” is a polite way to start."
          },
          {
            "who": "p",
            "n": "เดินตรงไปแล้วเลี้ยวซ้ายครับ/ค่ะ",
            "en": "Go straight and then turn left."
          },
          {
            "who": "u",
            "n": "ขอบคุณครับ/ค่ะ",
            "fb": "Perfect — ending with the polite particle “ครับ/ค่ะ”."
          },
          {
            "who": "p",
            "n": "ยินดีครับ/ค่ะ",
            "en": "You're welcome."
          }
        ],
        "debrief": [
          {
            "title": "ครับ vs ค่ะ",
            "body": "Remember, the polite particle reflects YOUR gender, not the listener's — men use ครับ, women use ค่ะ."
          },
          {
            "title": "Tone matters",
            "body": "Pay attention to the tones in “ทางไหน” to ensure your question is understood."
          }
        ],
        "grammarMini": "ขอโทษ",
        "grammarTitle": "Polite expressions — ขอโทษ",
        "grammarIntro": "Using ‘ขอโทษ’ to politely get someone’s attention or apologize:",
        "gTermA": "ขอโทษครับ (kho thot khrap)",
        "gDescA": "used by male speakers",
        "gExA": "ขอโทษครับ, ผมขอ...",
        "gTermB": "ขอโทษค่ะ (kho thot kha)",
        "gDescB": "used by female speakers",
        "gExB": "ขอโทษค่ะ, ดิฉันขอ...",
        "clip": "มหาวิทยาลัยในกรุงเทพฯ กับนักเรียน",
        "podcast": "เดินท่องกรุงเทพฯ กับวสุ — ตอนที่ 5",
        "article": "การเดินทางในกรุงเทพฯ",
        "reader": [
          {
            "t": "ในเมืองใหญ่ ผู้คนมักจะต้องการ"
          },
          {
            "w": "ขอโทษ",
            "d": "excuse me / apologize"
          },
          {
            "t": "เพื่อขอคำแนะนำในการเดินทาง พูดว่า"
          },
          {
            "w": "ไปทางไหน",
            "d": "which way to go"
          },
          {
            "t": " ช่วยทำให้สิ่งต่าง ๆ ง่ายขึ้นมาก"
          }
        ],
        "reviewWord": "ขอโทษ",
        "reviewSource": "from your direction request, 3 days ago",
        "reviewMeaning": "excuse me / apologize"
      },
      {
        "chapterTitle": "Chapter 3 · ครอบครัวของฉัน Family",
        "lessonTitle": "Introducing Your Family",
        "goalTitle": "Build it: introduce family members",
        "goalLine": "Introduce your family — politely, in Thai.",
        "goalShort": "introduce family",
        "scenario": "family",
        "partnerName": "ศิริ Siriporn",
        "partnerInitial": "S",
        "partnerRole": "friend",
        "partnerPlace": "Bangkok home",
        "scenarioTitle": "บ้านในกรุงเทพฯ · Bangkok",
        "scenarioSub": "Roleplay · introduction and chat",
        "lessonPromptEn": "This is my mother. Her name is Som.",
        "lessonHint": "Why “นี่คือ … ค่ะ/ครับ”?",
        "bank": [
          "นี่คือ",
          "แม่ของฉัน",
          "ชื่อ",
          "ส้ม",
          "ครับ",
          "ค่ะ"
        ],
        "bankEn": [
          "this is",
          "my mother",
          "name",
          "Som",
          "yes (male)",
          "yes (female)"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "ยอดเยี่ยม! (Excellent!) 🎉",
        "lessonCorrectBody": "“นี่คือ” = “this is,” ending with “ค่ะ” (female) / “ครับ” (male) makes it polite.",
        "lessonWrongBody": "Introduce with “นี่คือ” (this is), followed by their name, then the polite particle.",
        "cultureCaption": "Thai family bonds · a close-knit community",
        "cultureTitle": "Family and Respect",
        "cultureBody": "In Thai culture, family is central, and addressing elders with respect is crucial. Polite language strengthens family bonds.",
        "culturePhrase": "“สวัสดีค่ะ/ครับคุณแม่” — greet your parents with respect.",
        "milestoneTitle": "You can now introduce your family — politely, in Thai.",
        "convo": [
          {
            "who": "p",
            "n": "สวัสดีค่ะ นี่คือใครคะ?",
            "en": "Hello! Who is this?"
          },
          {
            "who": "u",
            "n": "นี่คือแม่ของฉัน ชื่อส้มค่ะ",
            "fb": "Perfect — “นี่คือ…ค่ะ” is polite and clear.",
            "en": "This is my mother. Her name is Som."
          },
          {
            "who": "p",
            "n": "ยินดีที่ได้รู้จักค่ะ",
            "en": "Nice to meet you!"
          },
          {
            "who": "u",
            "n": "ขอบคุณค่ะ",
            "fb": "Politeness reinforces harmony through ‘ค่ะ’.",
            "en": "Thank you."
          },
          {
            "who": "p",
            "n": "คุณแม่สวยจังเลยค่ะ",
            "en": "Your mother is very beautiful!"
          }
        ],
        "debrief": [
          {
            "title": "ครับ vs ค่ะ",
            "body": "Use polite particles to show respect. Men useครับ, and women useค่ะ at the end."
          },
          {
            "title": "Tonal speech",
            "body": "The word “แม่” must have the correct tone to convey the right meaning."
          }
        ],
        "grammarMini": "นี่คือ",
        "grammarTitle": "Introducing someone — นี่คือ",
        "grammarIntro": "Use ‘นี่คือ’ to introduce someone politely:",
        "gTermA": "นี่คือครับ (ni khue khrap)",
        "gDescA": "used by male speakers",
        "gExA": "นี่คือพี่ชายของฉันครับ",
        "gTermB": "นี่คือค่ะ (ni khue kha)",
        "gDescB": "used by female speakers",
        "gExB": "นี่คือน้องสาวของดิฉันค่ะ",
        "clip": "พิธีในครอบครัวไทย",
        "podcast": "เล่าเรื่องครอบครัวกับศิริ — ตอนที่ 2",
        "article": "ความสัมพันธ์ทางครอบครัวในไทย",
        "reader": [
          {
            "t": "ครอบครัวไทยมักจะอยู่รวมกัน อาศัยในบ้านเดียวกัน"
          },
          {
            "w": "แม่",
            "d": "mother"
          },
          {
            "t": "และ"
          },
          {
            "w": "พ่อ",
            "d": "father"
          },
          {
            "t": "สำคัญมากในการเลี้ยงดูและสอนลูกหลานให้"
          },
          {
            "w": "เคารพ",
            "d": "respect"
          },
          {
            "t": "ผู้อื่น"
          }
        ],
        "reviewWord": "แม่",
        "reviewSource": "from your family introduction, 3 days ago",
        "reviewMeaning": "mother"
      },
      {
        "chapterTitle": "Chapter 4 · ที่โรงแรม Hotel",
        "lessonTitle": "Checking In",
        "goalTitle": "Build it: check into a hotel",
        "goalLine": "Check into a hotel — politely, in Thai.",
        "goalShort": "check into a hotel",
        "scenario": "hotel",
        "partnerName": "ปวีณา Paveena",
        "partnerInitial": "P",
        "partnerRole": "receptionist",
        "partnerPlace": "Bangkok hotel",
        "scenarioTitle": "โรงแรมในกรุงเทพฯ · Bangkok",
        "scenarioSub": "Roleplay · checking in with courtesy",
        "lessonPromptEn": "I have a reservation. My name is Alex.",
        "lessonHint": "Why “ฉันมี … ครับ/ค่ะ”?",
        "bank": [
          "ฉันมี",
          "การจอง",
          "ชื่อ",
          "อเล็กซ์",
          "ครับ",
          "ค่ะ"
        ],
        "bankEn": [
          "I have",
          "reservation",
          "name",
          "Alex",
          "yes (male)",
          "yes (female)"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "ยอดเยี่ยม! (Excellent!) 🎉",
        "lessonCorrectBody": "“ฉันมี” means “I have,” with polite endings “ค่ะ” (female) / “ครับ” (male).",
        "lessonWrongBody": "Start with “ฉันมี” (I have), state your reservation, and use the polite particle.",
        "cultureCaption": "A warm welcome at Thai hotels",
        "cultureTitle": "Hospitality and Warmth",
        "cultureBody": "Thai hotels are known for their hospitality. Using polite language and a smile helps ensure a pleasant stay.",
        "culturePhrase": "“ยินดีต้อนรับค่ะ/ครับ” — welcome, with the polite particle.",
        "milestoneTitle": "You can now check into a hotel — politely, in Thai.",
        "convo": [
          {
            "who": "p",
            "n": "สวัสดีค่ะ ยินดีต้อนรับค่ะ เช็คอินใช่ไหมคะ?",
            "en": "Hello! Welcome! Are you checking in?"
          },
          {
            "who": "u",
            "n": "ฉันมีการจอง ชื่ออเล็กซ์ค่ะ",
            "fb": "Perfect — a polite and clear check-in.",
            "en": "I have a reservation. My name is Alex."
          },
          {
            "who": "p",
            "n": "ได้ค่ะ รอสักครู่นะคะ",
            "en": "Sure. Please wait a moment."
          },
          {
            "who": "u",
            "n": "ขอบคุณค่ะ",
            "fb": "Ending with the polite particle ‘ค่ะ’ is important.",
            "en": "Thank you."
          },
          {
            "who": "p",
            "n": "นี่คือกุญแจห้องค่ะ",
            "en": "Here is your room key."
          }
        ],
        "debrief": [
          {
            "title": "ครับ vs ค่ะ",
            "body": "Choose the polite particle based on your gender — ครับ for men, ค่ะ for women."
          },
          {
            "title": "Tonal importance",
            "body": "The correct tone in “ชื่อ” is crucial for clarity and politeness."
          }
        ],
        "grammarMini": "ฉันมี",
        "grammarTitle": "Expressing possession — ฉันมี",
        "grammarIntro": "Use ‘ฉันมี’ to indicate possession in a polite context:",
        "gTermA": "ฉันมีครับ (chan mi khrap)",
        "gDescA": "used by male speakers",
        "gExA": "ฉันมีจองครับ",
        "gTermB": "ฉันมีค่ะ (chan mi kha)",
        "gDescB": "used by female speakers",
        "gExB": "ฉันมีจองค่ะ",
        "clip": "การเช็คอินที่โรงแรมในไทย",
        "podcast": "การต้อนรับในโรงแรมกับปวีณา — ตอนที่ 1",
        "article": "เคล็ดลับการเข้าพักในโรงแรมไทย",
        "reader": [
          {
            "t": "คนไทยมักได้รับการต้อนรับที่"
          },
          {
            "w": "โรงแรม",
            "d": "hotel"
          },
          {
            "t": "ด้วยความอบอุ่นและ"
          },
          {
            "w": "ไมตรี",
            "d": "hospitality"
          },
          {
            "t": "บอกว่า"
          },
          {
            "w": "ขอบคุณ",
            "d": "thank you"
          },
          {
            "t": "ช่วยสร้างประสบการณ์ที่ดีขึ้น"
          }
        ],
        "reviewWord": "โรงแรม",
        "reviewSource": "from your hotel check-in, 3 days ago",
        "reviewMeaning": "hotel"
      },
      {
        "chapterTitle": "Chapter 5 · ที่ตลาด Market",
        "lessonTitle": "Shopping Basics",
        "goalTitle": "Build it: buy fruit",
        "goalLine": "Buy fruit — politely, in Thai.",
        "goalShort": "buy fruit",
        "scenario": "market",
        "partnerName": "สมชาย Somchai",
        "partnerInitial": "S",
        "partnerRole": "vendor",
        "partnerPlace": "Bangkok market",
        "scenarioTitle": "ตลาดในกรุงเทพฯ · Bangkok",
        "scenarioSub": "Roleplay · purchasing with politeness",
        "lessonPromptEn": "I would like to buy one kilo of mangoes.",
        "lessonHint": "Why “ขอซื้อ … ครับ/ค่ะ”?",
        "bank": [
          "ขอซื้อ",
          "มะม่วง",
          "หนึ่งกิโล",
          "ครับ",
          "ค่ะ",
          "ช่วย"
        ],
        "bankEn": [
          "I would like to buy",
          "mango",
          "one kilo",
          "yes (male)",
          "yes (female)",
          "help"
        ],
        "correct": [
          0,
          1,
          2,
          4
        ],
        "lessonCorrectTitle": "ยอดเยี่ยม! (Excellent!) 🎉",
        "lessonCorrectBody": "“ขอซื้อ” means “I would like to buy,” with polite endings “ค่ะ” (female) / “ครับ” (male).",
        "lessonWrongBody": "Express your wish with “ขอซื้อ” (I would like to buy), list what you want, and a polite particle.",
        "cultureCaption": "Bangkok street markets · vibrant mornings",
        "cultureTitle": "Market Etiquette",
        "cultureBody": "At Thai markets, politeness fosters positive interactions. Don’t forget to smile and use polite language.",
        "culturePhrase": "“ลดได้ไหมครับ/ค่ะ” — Can you lower the price, please?",
        "milestoneTitle": "You can now buy fruit — politely, in Thai.",
        "convo": [
          {
            "who": "p",
            "n": "สวัสดีครับ ต้องการอะไรครับ?",
            "en": "Hello! What would you need?"
          },
          {
            "who": "u",
            "n": "ขอซื้อมะม่วงหนึ่งกิโลค่ะ",
            "fb": "Perfect — for polite buying requests.",
            "en": "I would like to buy one kilo of mangoes."
          },
          {
            "who": "p",
            "n": "ได้ครับ กิโลละเท่าไหร่ดีครับ?",
            "en": "Sure. How many kilos do you need?"
          },
          {
            "who": "u",
            "n": "หนึ่งกิโลค่ะ ขอบคุณค่ะ",
            "fb": "Ending politely keeps interactions harmonious.",
            "en": "One kilo. Thank you."
          },
          {
            "who": "p",
            "n": "ขอบคุณครับ เชิญมาอีกได้ครับ",
            "en": "Thank you! Please come again."
          }
        ],
        "debrief": [
          {
            "title": "ครับ vs ค่ะ",
            "body": "Your politeness reflects your understanding of local etiquette — use ครับ for males, ค่ะ for females."
          },
          {
            "title": "Tones with numbers",
            "body": "The tone in “หนึ่ง” is key for clarity in your quantity requests."
          }
        ],
        "grammarMini": "ขอซื้อ",
        "grammarTitle": "Expressing desires — ขอซื้อ",
        "grammarIntro": "‘ขอซื้อ’ is a polite way to indicate you want to purchase:",
        "gTermA": "ขอซื้อครับ (kho sue khrap)",
        "gDescA": "used by male speakers",
        "gExA": "ขอซื้อแอปเปิ้ลหนึ่งกิโลครับ",
        "gTermB": "ขอซื้อค่ะ (kho sue kha)",
        "gDescB": "used by female speakers",
        "gExB": "ขอซื้อลำไยสามกิโลค่ะ",
        "clip": "การซื้อของในตลาดโดยมิตร",
        "podcast": "ตลาดนัดวันเสาร์ — ตอนที่ 3",
        "article": "ศิลปะการต่อรองราคาที่ตลาด",
        "reader": [
          {
            "t": "ที่ตลาดนัด กรุงเทพฯ คนชอบจะซื้อ"
          },
          {
            "w": "ผลไม้",
            "d": "fruit"
          },
          {
            "t": "ในราคา"
          },
          {
            "w": "ถูก",
            "d": "cheap"
          },
          {
            "t": "และมักจะบอกว่า"
          },
          {
            "w": "ขอบคุณ",
            "d": "thank you"
          },
          {
            "t": "หลังจากการซื้อขาย"
          }
        ],
        "reviewWord": "มะม่วง",
        "reviewSource": "from your market visit, 3 days ago",
        "reviewMeaning": "mango"
      },
      {
        "chapterTitle": "Chapter 6 · เหตุฉุกเฉิน Emergency",
        "lessonTitle": "Handling Emergencies",
        "goalTitle": "Build it: call for help",
        "goalLine": "Call for help — urgently, in Thai.",
        "goalShort": "call for help",
        "scenario": "emergency",
        "partnerName": "มนตรี Montri",
        "partnerInitial": "M",
        "partnerRole": "bystander",
        "partnerPlace": "Bangkok street",
        "scenarioTitle": "ถนนในกรุงเทพฯ · Bangkok",
        "scenarioSub": "Roleplay · asking for urgent help",
        "lessonPromptEn": "Help! I need a doctor, please!",
        "lessonHint": "Why “ช่วยด้วย … ครับ/ค่ะ”?",
        "bank": [
          "ช่วยด้วย",
          "เรียก",
          "หมอ",
          "ให้หน่อย",
          "ครับ",
          "ค่ะ"
        ],
        "bankEn": [
          "help",
          "call",
          "doctor",
          "please",
          "yes (male)",
          "yes (female)"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "เยี่ยมมาก! (Fantastic!) 🎉",
        "lessonCorrectBody": "“ช่วยด้วย” communicates urgency, with “ค่ะ” (female) / “ครับ” (male) to be polite even when urgent.",
        "lessonWrongBody": "Start with “ช่วยด้วย” (help), ask for what you need, and include the polite particle.",
        "cultureCaption": "Public assistance · Thai streets",
        "cultureTitle": "Immediate Assistance",
        "cultureBody": "In emergencies, politeness helps even in urgency—keep calm and communicate clearly for faster responses.",
        "culturePhrase": "“ช่วยด้วยครับ/ค่ะ” — help me, please.",
        "milestoneTitle": "You can now call for help — urgently, in Thai.",
        "convo": [
          {
            "who": "p",
            "n": "มีอะไรให้ช่วยไหมครับ?",
            "en": "Is there anything I can help with?"
          },
          {
            "who": "u",
            "n": "ช่วยด้วย เรียกหมอให้หน่อยค่ะ",
            "fb": "Clear and urgent — correct use of ‘ช่วยด้วยค่ะ’.",
            "en": "Help! I need a doctor, please!"
          },
          {
            "who": "p",
            "n": "ได้ครับ ผมจะโทรหาโรงพยาบาล",
            "en": "Okay, I will call the hospital."
          },
          {
            "who": "u",
            "n": "ขอบคุณมากค่ะ",
            "fb": "Keeping polite, even in urgency, helps with communication.",
            "en": "Thank you very much."
          },
          {
            "who": "p",
            "n": "ไม่เป็นไรครับ การช่วยเหลือคือเรื่องสำคัญ",
            "en": "No problem, helping is important."
          }
        ],
        "debrief": [
          {
            "title": "ครับ vs ค่ะ",
            "body": "During emergencies, your use of polite language shows respect and urgency — males useครับ, females useค่ะ."
          },
          {
            "title": "Communication under pressure",
            "body": "Ensure the tone in “ช่วยด้วย” is right to effectively convey urgency."
          }
        ],
        "grammarMini": "ช่วยด้วย",
        "grammarTitle": "Urgent expressions — ช่วยด้วย",
        "grammarIntro": "Use ‘ช่วยด้วย’ to call for immediate assistance:",
        "gTermA": "ช่วยด้วยครับ (chuai duai khrap)",
        "gDescA": "used by male speakers",
        "gExA": "ช่วยด้วยครับ น้ำท่วม!",
        "gTermB": "ช่วยด้วยค่ะ (chuai duai kha)",
        "gDescB": "used by female speakers",
        "gExB": "ช่วยด้วยค่ะ มีคนเจ็บ",
        "clip": "เหตุการณ์ฉุกเฉิน ฯลฯ",
        "podcast": "สถานการณ์ฉุกเฉินในกรุงเทพฯ — ตอนที่ 7",
        "article": "การรียกรถพยาบาลในไทย",
        "reader": [
          {
            "t": "ในกรณีฉุกเฉิน คนไทยจะพูดว่า"
          },
          {
            "w": "ช่วยด้วย",
            "d": "help"
          },
          {
            "t": "หรือ"
          },
          {
            "w": "โทร",
            "d": "call"
          },
          {
            "t": "หาหมอ"
          },
          {
            "w": "ให้หน่อย",
            "d": "please"
          },
          {
            "t": "เพื่อขอความช่วยเหลือ"
          }
        ],
        "reviewWord": "หมอ",
        "reviewSource": "from your emergency call, 3 days ago",
        "reviewMeaning": "doctor"
      }
    ]
  },
  "el": {
    "name": "Greek",
    "flag": "🇬🇷",
    "code": "EL",
    "font": "noto",
    "locale": "el-GR",
    "greeting": "Καλημέρα, Maya",
    "accent": "Greece (Athens)",
    "chapters": [
      {
        "chapterTitle": "Chapter 1 · Στο καφενείο",
        "lessonTitle": "Greetings & warmth",
        "goalTitle": "Build it: order a coffee",
        "goalLine": "Order a coffee — the Greek way.",
        "goalShort": "order a coffee",
        "scenario": "cafe",
        "partnerName": "Γιώργος Giorgos",
        "partnerInitial": "Γ",
        "partnerRole": "σερβιτόρος",
        "partnerPlace": "Athens kafeneio",
        "scenarioTitle": "Στο καφενείο · Athens",
        "scenarioSub": "Roleplay · order & a slow chat",
        "lessonPromptEn": "I would like a coffee, please.",
        "lessonHint": "Why “θα ήθελα”?",
        "bank": [
          "Θα ήθελα",
          "έναν καφέ",
          "παρακαλώ",
          "το λογαριασμό",
          "νερό",
          "χωρίς"
        ],
        "bankEn": [
          "I would like",
          "a coffee",
          "please",
          "the bill",
          "water",
          "without"
        ],
        "correct": [
          0,
          1,
          2
        ],
        "lessonCorrectTitle": "Τέλεια! 🎉",
        "lessonCorrectBody": "“Θα ήθελα” (I would like) is the polite, conditional way to order — softer than “θέλω” (I want).",
        "lessonWrongBody": "Start with the polite “I would like,” then what you want, then “παρακαλώ.”",
        "cultureCaption": "A kafeneio in Athens · noon",
        "cultureTitle": "The coffee is an excuse to stay",
        "cultureBody": "In Greece a frappé or freddo can last two hours — the point was never the caffeine, it's the company. The kafeneio is where friendships, gossip and politics unfold slowly. No one will ever bring your bill until you ask; rushing you would be rude.",
        "culturePhrase": "“Τον λογαριασμό, παρακαλώ” — the bill, please; “ευχαριστώ” is thank you.",
        "milestoneTitle": "You can now order a coffee — the Greek way.",
        "convo": [
          {
            "who": "p",
            "n": "Καλημέρα! Τι θα πάρετε;",
            "en": "Good morning! What will you have?"
          },
          {
            "who": "u",
            "n": "Θα ήθελα έναν καφέ, παρακαλώ.",
            "fb": "Great — “θα ήθελα” is polite and natural"
          },
          {
            "who": "p",
            "n": "Βεβαίως. Τίποτε άλλο;",
            "en": "Of course. Anything else?"
          },
          {
            "who": "u",
            "n": "Όχι, ευχαριστώ. Τον λογαριασμό, παρακαλώ.",
            "fb": "Perfect — that's how you ask for the bill"
          },
          {
            "who": "p",
            "n": "Αμέσως, τρία ευρώ.",
            "en": "Right away — three euros."
          }
        ],
        "debrief": [
          {
            "title": "“έναν” gender",
            "body": "Καφές is masculine, so “a coffee” is “έναν καφέ” — the article agrees with gender."
          },
          {
            "title": "Stress mark",
            "body": "Greek words carry an accent (ó) showing which syllable to stress — it changes meaning."
          }
        ],
        "grammarMini": "genders",
        "grammarTitle": "Three genders — ο, η, το",
        "grammarIntro": "Every Greek noun is masculine, feminine or neuter, and the word for “the” changes:",
        "gTermA": "ο καφές",
        "gDescA": "masculine — the coffee",
        "gExA": "ο καφές είναι ζεστός",
        "gTermB": "η / το",
        "gDescB": "feminine (η) and neuter (το)",
        "gExB": "η ζάχαρη, το νερό",
        "clip": "Πρωινή αγορά στην Αθήνα, με ντόπιους",
        "podcast": "Καφές με τη Μαρία — επεισόδιο 4",
        "article": "Η μικρή τελετουργία του ελληνικού καφέ",
        "reader": [
          {
            "t": "Στην Ελλάδα, πολλοί περνούν ώρες στο "
          },
          {
            "w": "καφενείο",
            "d": "kafeneio — traditional coffee house"
          },
          {
            "t": ". Πίνουν τον καφέ αργά και "
          },
          {
            "w": "συζητούν",
            "d": "discuss / chat (from συζητώ)"
          },
          {
            "t": ". Στον σερβιτόρο λένε "
          },
          {
            "w": "ευχαριστώ",
            "d": "thank you (efcharistó)"
          },
          {
            "t": ". Είναι η πιο όμορφη στιγμή της ημέρας."
          }
        ],
        "reviewWord": "λογαριασμό",
        "reviewSource": "from your kafeneio visit, 2 days ago",
        "reviewMeaning": "the bill / check (logariasmó)"
      },
      {
        "chapterTitle": "Chapter 2 · Οδηγίες",
        "lessonTitle": "Asking for directions",
        "goalTitle": "Build it: find your way",
        "goalLine": "Ask for directions — the Greek way.",
        "goalShort": "ask for directions",
        "scenario": "directions",
        "partnerName": "Ελένη Eleni",
        "partnerInitial": "Ε",
        "partnerRole": "ντόπια",
        "partnerPlace": "Athens street",
        "scenarioTitle": "Οδηγίες · Athens",
        "scenarioSub": "Roleplay · directions & small talk",
        "lessonPromptEn": "Could you tell me where the square is?",
        "lessonHint": "Why “θα μπορούσατε”?",
        "bank": [
          "θα μπορούσατε",
          "να μου πείτε",
          "πού είναι",
          "η πλατεία",
          "στην εκκλησία",
          "κοντά"
        ],
        "bankEn": [
          "could you",
          "tell me",
          "where is",
          "the square",
          "the church",
          "near"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "Μπράβο! 🎉",
        "lessonCorrectBody": "“Θα μπορούσατε” (could you) is a polite way to ask for information — softer than “πού είναι” (where is).",
        "lessonWrongBody": "Start with the polite “could you,” then the question.",
        "cultureCaption": "Asking directions in Athens",
        "cultureTitle": "Greeks are more than happy to help",
        "cultureBody": "In Greece, people often offer help with directions. Feel free to ask multiple people to ensure you're on the right path. Friendly conversations often arise from these encounters.",
        "culturePhrase": "“Ευχαριστώ πολύ” — thank you very much",
        "milestoneTitle": "You can now ask for directions — the Greek way.",
        "convo": [
          {
            "who": "p",
            "n": "Καλημέρα! Χρειάζεστε βοήθεια;",
            "en": "Good morning! Do you need help?"
          },
          {
            "who": "u",
            "n": "Θα μπορούσατε να μου πείτε πού είναι η πλατεία;",
            "fb": "Great — “θα μπορούσατε” is polite and gentle"
          },
          {
            "who": "p",
            "n": "Βεβαίως! Είναι κοντά στην εκκλησία.",
            "en": "Of course! It's near the church."
          },
          {
            "who": "u",
            "n": "Ευχαριστώ πολύ!",
            "fb": "Perfect — appropriate gratitude!"
          },
          {
            "who": "p",
            "n": "Παρακαλώ! Καλή συνέχεια.",
            "en": "You're welcome! Have a good day."
          }
        ],
        "debrief": [
          {
            "title": "Politeness with “θα μπορούσατε”",
            "body": "This phrase is key for making polite requests in Greek."
          },
          {
            "title": "Location words",
            "body": "Useful words include κοντά (near), αριστερά (left), and δεξιά (right)."
          }
        ],
        "grammarMini": "prepositions",
        "grammarTitle": "Prepositions in directions",
        "grammarIntro": "Prepositions help describe directions, indicating location and distance.",
        "gTermA": "κοντά",
        "gDescA": "near",
        "gExA": "Η πλατεία είναι κοντά",
        "gTermB": "προς",
        "gDescB": "towards",
        "gExB": "Πηγαίνετε προς την εκκλησία",
        "clip": "Η ζωή στο κέντρο της Αθήνας",
        "podcast": "Οδηγίες στα ελληνικά — επεισόδιο 5",
        "article": "Πώς να βρείτε το δρόμο σας στην Αθήνα",
        "reader": [
          {
            "t": "Στην Αθήνα, οι "
          },
          {
            "w": "τουρίστες",
            "d": "tourists (tourístes)"
          },
          {
            "t": "συχνά ζητούν "
          },
          {
            "w": "οδηγίες",
            "d": "directions (odiyíes)"
          },
          {
            "t": ". Οι Έλληνες είναι πάντα "
          },
          {
            "w": "φιλόξενοι",
            "d": "hospitable (filóxenoi)"
          },
          {
            "t": "."
          }
        ],
        "reviewWord": "πλατεία",
        "reviewSource": "from your directions request, 1 day ago",
        "reviewMeaning": "the square (platía)"
      },
      {
        "chapterTitle": "Chapter 3 · Οικογένεια",
        "lessonTitle": "Talking about family",
        "goalTitle": "Build it: introduce your family",
        "goalLine": "Introduce your family — the Greek way.",
        "goalShort": "introduce your family",
        "scenario": "family",
        "partnerName": "Νίκος Nikos",
        "partnerInitial": "Ν",
        "partnerRole": "φίλος",
        "partnerPlace": "Athens home",
        "scenarioTitle": "Οικογένεια · Athens",
        "scenarioSub": "Roleplay · family talks & relations",
        "lessonPromptEn": "This is my family.",
        "lessonHint": "Why “αυτή είναι”?",
        "bank": [
          "αυτή",
          "είναι",
          "η οικογένειά μου",
          "ο πατέρας μου",
          "η μητέρα μου",
          "αδέρφια"
        ],
        "bankEn": [
          "this",
          "is",
          "my family",
          "my father",
          "my mother",
          "siblings"
        ],
        "correct": [
          0,
          1,
          2,
          4
        ],
        "lessonCorrectTitle": "Συγχαρητήρια! 🎉",
        "lessonCorrectBody": "“Αυτή είναι” (this is) introduces family members naturally.",
        "lessonWrongBody": "Begin with “Αυτή είναι” to introduce someone.",
        "cultureCaption": "Family gathering in Greece",
        "cultureTitle": "Family is at the heart",
        "cultureBody": "Greek families are close-knit and often gather for meals. Family introductions include extended relatives too.",
        "culturePhrase": "“Καλή οικογένεια” — a good family",
        "milestoneTitle": "You can now introduce your family — the Greek way.",
        "convo": [
          {
            "who": "p",
            "n": "Γεια σου! Ποιός είναι μαζί σου;",
            "en": "Hey! Who is with you?"
          },
          {
            "who": "u",
            "n": "Αυτή είναι η οικογένειά μου.",
            "fb": "Great — clear introduction"
          },
          {
            "who": "p",
            "n": "Χαίρω πολύ! Πόσα αδέρφια έχεις;",
            "en": "Nice to meet you! How many siblings do you have?"
          },
          {
            "who": "u",
            "n": "Έχω δύο αδέρφια.",
            "fb": "Perfect — nice response"
          },
          {
            "who": "p",
            "n": "Τι ωραία! Καλή παρέα.",
            "en": "How nice! Great company."
          }
        ],
        "debrief": [
          {
            "title": "Introducing with “αυτή είναι”",
            "body": "Use this phrase to naturally introduce people."
          },
          {
            "title": "Gender agreements in family",
            "body": "Be aware of masculine and feminine forms for family members."
          }
        ],
        "grammarMini": "possessive pronouns",
        "grammarTitle": "Possessive forms — μου, σου, του",
        "grammarIntro": "Greek uses different possessive pronouns to indicate ownership.",
        "gTermA": "ο πατέρας μου",
        "gDescA": "my father",
        "gExA": "ο πατέρας μου είναι δυνατός",
        "gTermB": "η μητέρα σου",
        "gDescB": "your mother",
        "gExB": "η μητέρα σου είναι καλή",
        "clip": "Οικογενειακός χρόνος στην Ελλάδα",
        "podcast": "Η οικογένεια του Κώστα — επεισόδιο 2",
        "article": "Η αξία της ελληνικής οικογένειας",
        "reader": [
          {
            "t": "Στην Ελλάδα, η "
          },
          {
            "w": "οικογένεια",
            "d": "family (oikogéneia)"
          },
          {
            "t": "είναι πολύ "
          },
          {
            "w": "σημαντική",
            "d": "important (simantikí)"
          },
          {
            "t": ". Οι συγγενείς συχνά "
          },
          {
            "w": "συναντιούνται",
            "d": "meet (synantioúntai)"
          },
          {
            "t": "για φαγητό."
          }
        ],
        "reviewWord": "αδέρφια",
        "reviewSource": "from your family introduction, 3 days ago",
        "reviewMeaning": "siblings (adérphia)"
      },
      {
        "chapterTitle": "Chapter 4 · Ξενοδοχείο",
        "lessonTitle": "Checking into a hotel",
        "goalTitle": "Build it: check into your room",
        "goalLine": "Check into a hotel — the Greek way.",
        "goalShort": "check into a hotel",
        "scenario": "hotel",
        "partnerName": "Δημήτρης Dimitris",
        "partnerInitial": "Δ",
        "partnerRole": "ρεσεψιονίστ",
        "partnerPlace": "Athens hotel",
        "scenarioTitle": "Ξενοδοχείο · Athens",
        "scenarioSub": "Roleplay · check-in & amenities",
        "lessonPromptEn": "I have a reservation.",
        "lessonHint": "Why “έχω”?",
        "bank": [
          "έχω",
          "δωμάτιο",
          "κράτηση",
          "ένα",
          "μπαλκόνι",
          "θέα"
        ],
        "bankEn": [
          "I have",
          "room",
          "reservation",
          "a",
          "balcony",
          "view"
        ],
        "correct": [
          0,
          2,
          1,
          3
        ],
        "lessonCorrectTitle": "Εξαιρετικά! 🎉",
        "lessonCorrectBody": "“Έχω” (I have) is straightforward and clear for checking in.",
        "lessonWrongBody": "Start with “Έχω” for stating possession.",
        "cultureCaption": "Hotel check-in in Greece",
        "cultureTitle": "Checking in with ease",
        "cultureBody": "Greek hotels value hospitality. Check-in processes are smooth; don't hesitate to ask for room details or directions.",
        "culturePhrase": "“Καλό ταξίδι” — have a good trip",
        "milestoneTitle": "You can now check into a hotel — the Greek way.",
        "convo": [
          {
            "who": "p",
            "n": "Καλώς ορίσατε! Μπορώ να σας βοηθήσω;",
            "en": "Welcome! Can I help you?"
          },
          {
            "who": "u",
            "n": "Έχω μία κράτηση.",
            "fb": "Great — clear start"
          },
          {
            "who": "p",
            "n": "Σε ποιο όνομα, παρακαλώ;",
            "en": "Under what name, please?"
          },
          {
            "who": "u",
            "n": "Στο όνομα Γιώργος Παπαδόπουλος.",
            "fb": "Perfect — name gives clarity"
          },
          {
            "who": "p",
            "n": "Βεβαίως! Το δωμάτιό σας είναι έτοιμο.",
            "en": "Of course! Your room is ready."
          }
        ],
        "debrief": [
          {
            "title": "“Έχω” for stating",
            "body": "This word is essential for expressions of possession."
          },
          {
            "title": "Hotel vocabulary",
            "body": "Know key words like δίκλινο (double room) and πρωινό (breakfast)."
          }
        ],
        "grammarMini": "expressions of possession",
        "grammarTitle": "Expressing ownership — έχω, έχεις, έχει",
        "grammarIntro": "These verbs are used to express what people have.",
        "gTermA": "έχω κράτηση",
        "gDescA": "I have a reservation",
        "gExA": "έχω κράτηση για απόψε",
        "gTermB": "έχει μπαλκόνι",
        "gDescB": "it has a balcony",
        "gExB": "το δωμάτιο έχει μπαλκόνι",
        "clip": "Ξενοδοχεία στην Αθήνα",
        "podcast": "Μια βραδιά στο ξενοδοχείο — επεισόδιο 6",
        "article": "Τα καλύτερα ξενοδοχεία στην Αθήνα",
        "reader": [
          {
            "t": "Στην Αθήνα, οι "
          },
          {
            "w": "ξενώνες",
            "d": "hostels (xenónes)"
          },
          {
            "t": "είναι δημοφιλείς για "
          },
          {
            "w": "νεαρούς",
            "d": "youth (nearoús)"
          },
          {
            "t": "ταξιδιώτες."
          }
        ],
        "reviewWord": "κράτηση",
        "reviewSource": "from your hotel check-in, 5 days ago",
        "reviewMeaning": "reservation (kráti̱si̱)"
      },
      {
        "chapterTitle": "Chapter 5 · Αγορά",
        "lessonTitle": "Shopping at the market",
        "goalTitle": "Build it: buy fresh produce",
        "goalLine": "Shop at a market — the Greek way.",
        "goalShort": "shop at a market",
        "scenario": "market",
        "partnerName": "Σοφία Sofia",
        "partnerInitial": "Σ",
        "partnerRole": "πωλήτρια",
        "partnerPlace": "Athens market",
        "scenarioTitle": "Αγορά · Athens",
        "scenarioSub": "Roleplay · buying & negotiating",
        "lessonPromptEn": "How much is this?",
        "lessonHint": "Why “πόσο κάνει”?",
        "bank": [
          "πόσο",
          "κάνει",
          "αυτό",
          "φρέσκο",
          "μήλα",
          "τιμή"
        ],
        "bankEn": [
          "how much",
          "is",
          "this",
          "fresh",
          "apples",
          "price"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "Τέλειο! 🎉",
        "lessonCorrectBody": "“Πόσο κάνει” (how much is) is standard for asking prices.",
        "lessonWrongBody": "Start with “Πόσο” to ask about cost.",
        "cultureCaption": "At the market in Greece",
        "cultureTitle": "A vibrant shopping experience",
        "cultureBody": "Markets in Greece are an assault on the senses — full of color, smells, and lively conversation. Don't be shy to haggle; it's part of the experience.",
        "culturePhrase": "“Φρέσκα προϊόντα” — fresh produce",
        "milestoneTitle": "You can now shop at a market — the Greek way.",
        "convo": [
          {
            "who": "p",
            "n": "Καλημέρα! Τι θα θέλατε;",
            "en": "Good morning! What would you like?"
          },
          {
            "who": "u",
            "n": "Πόσο κάνει αυτό;",
            "fb": "Great — simple and effective question"
          },
          {
            "who": "p",
            "n": "Κάνει τρία ευρώ.",
            "en": "It's three euros."
          },
          {
            "who": "u",
            "n": "Είναι φρέσκο;",
            "fb": "Perfect — shows interest in quality"
          },
          {
            "who": "p",
            "n": "Ναι, είναι από το χωριό μας.",
            "en": "Yes, it's from our village."
          }
        ],
        "debrief": [
          {
            "title": "Using “πόσο κάνει”",
            "body": "It's a key phrase for inquiring about price."
          },
          {
            "title": "Market terms",
            "body": "Useful words include καρότα (carrots) and τομάτες (tomatoes)."
          }
        ],
        "grammarMini": "questions & inquiries",
        "grammarTitle": "Forming questions with πόσο",
        "grammarIntro": "Learn to form questions asking about quantities and prices.",
        "gTermA": "πόσο κάνει",
        "gDescA": "how much is",
        "gExA": "πόσο κάνει το κιλό;",
        "gTermB": "πόσο κοστίζει",
        "gDescB": "how much does it cost",
        "gExB": "πόσο κοστίζει αυτό το φρούτο;",
        "clip": "Καθημερινές αγορές στην Αθήνα",
        "podcast": "Στην αγορά με την Άννα — επεισόδιο 7",
        "article": "Τα παζάρια της Ελλάδας",
        "reader": [
          {
            "t": "Στην αγορά, οι "
          },
          {
            "w": "πωλητές",
            "d": "vendors (polités)"
          },
          {
            "t": "είναι πρόθυμοι να "
          },
          {
            "w": "διαπραγματεύονται",
            "d": "negotiate (diapragmatevóntai)"
          },
          {
            "t": "."
          }
        ],
        "reviewWord": "μήλα",
        "reviewSource": "from your market visit, 1 week ago",
        "reviewMeaning": "apples (míla)"
      },
      {
        "chapterTitle": "Chapter 6 · Έκτακτη ανάγκη",
        "lessonTitle": "Handling an emergency",
        "goalTitle": "Build it: call for help",
        "goalLine": "Call for help — the Greek way.",
        "goalShort": "call for help",
        "scenario": "emergency",
        "partnerName": "Άννα Anna",
        "partnerInitial": "Α",
        "partnerRole": "περαστική",
        "partnerPlace": "Athens street",
        "scenarioTitle": "Έκτακτη ανάγκη · Athens",
        "scenarioSub": "Roleplay · emergencies & assistance",
        "lessonPromptEn": "I need help.",
        "lessonHint": "Why “χρειάζομαι βοήθεια”?",
        "bank": [
          "χρειάζομαι",
          "βοήθεια",
          "αμέσως",
          "ασθενοφόρο",
          "αστυνομία",
          "φωτιά"
        ],
        "bankEn": [
          "I need",
          "help",
          "immediately",
          "ambulance",
          "police",
          "fire"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "Καταπληκτικά! 🎉",
        "lessonCorrectBody": "“Χρειάζομαι βοήθεια” (I need help) is crucial for emergencies.",
        "lessonWrongBody": "Begin with “Χρειάζομαι” when stating a need.",
        "cultureCaption": "Emergency situations in Greece",
        "cultureTitle": "Stay calm, help is near",
        "cultureBody": "In Greece, people are quick to respond in emergencies. Knowing basic phrases can make a big difference. Don't hesitate to approach someone for help.",
        "culturePhrase": "“Τηλεφωνήστε στην αστυνομία” — call the police",
        "milestoneTitle": "You can now call for help — the Greek way.",
        "convo": [
          {
            "who": "p",
            "n": "Τι συμβαίνει; Βοήθεια χρειάζεστε;",
            "en": "What's happening? Do you need help?"
          },
          {
            "who": "u",
            "n": "Χρειάζομαι βοήθεια, αμέσως!",
            "fb": "Great — urgent and clear"
          },
          {
            "who": "p",
            "n": "Τι να κάνω; Καλέσω ασθενοφόρο;",
            "en": "What should I do? Call an ambulance?"
          },
          {
            "who": "u",
            "n": "Ναι, παρακαλώ!",
            "fb": "Perfect — direct request"
          },
          {
            "who": "p",
            "n": "Εντάξει, έρχεται άμεσα.",
            "en": "Okay, it's coming right away."
          }
        ],
        "debrief": [
          {
            "title": "Using “χρειάζομαι”",
            "body": "Essential for expressing needs, especially in urgent situations."
          },
          {
            "title": "Emergency vocabulary",
            "body": "Know crucial words like ασθενοφόρο (ambulance) and φωτιά (fire)."
          }
        ],
        "grammarMini": "expressing needs",
        "grammarTitle": "Expressing urgent needs — χρειάζομαι, πρέπει",
        "grammarIntro": "Learn to articulate needs and musts in crucial situations.",
        "gTermA": "χρειάζομαι βοήθεια",
        "gDescA": "I need help",
        "gExA": "χρειάζομαι τώρα βοήθεια",
        "gTermB": "πρέπει να",
        "gDescB": "I must",
        "gExB": "πρέπει να φύγουμε",
        "clip": "Αντιμετωπίζοντας μια κρίση στην Αθήνα",
        "podcast": "Επείγουσες καταστάσεις — επεισόδιο 3",
        "article": "Πρώτες βοήθειες στην Ελλάδα",
        "reader": [
          {
            "t": "Στις "
          },
          {
            "w": "έκτακτες",
            "d": "emergency (éktaktes)"
          },
          {
            "t": "περιπτώσεις, είναι σημαντικό να "
          },
          {
            "w": "παραμείνετε",
            "d": "remain (paramíneite)"
          },
          {
            "t": "ήρεμοι."
          }
        ],
        "reviewWord": "βοήθεια",
        "reviewSource": "from your emergency scenario, 1 day ago",
        "reviewMeaning": "help (voí̱theia)"
      }
    ]
  },
  "he": {
    "name": "Hebrew",
    "flag": "🇮🇱",
    "code": "HE",
    "font": "he",
    "locale": "he-IL",
    "greeting": "בוקר טוב, Maya",
    "accent": "Israel (Standard)",
    "chapters": [
      {
        "chapterTitle": "Chapter 1 · בבית קפה Café",
        "lessonTitle": "Greetings & warmth",
        "goalTitle": "Build it: order a coffee",
        "goalLine": "Order a coffee — politely, in Hebrew.",
        "goalShort": "order a coffee",
        "scenario": "cafe",
        "partnerName": "נועה Noa",
        "partnerInitial": "נ",
        "partnerRole": "barista",
        "partnerPlace": "Tel Aviv café",
        "scenarioTitle": "בית קפה · Tel Aviv",
        "scenarioSub": "Roleplay · order & a friendly chat",
        "lessonPromptEn": "I would like a coffee, please.",
        "lessonHint": "Why “אפשר”?",
        "bank": [
          "אפשר",
          "קפה",
          "בבקשה",
          "החשבון",
          "מים",
          "תה"
        ],
        "bankEn": [
          "Can",
          "coffee",
          "please",
          "the bill",
          "water",
          "tea"
        ],
        "correct": [
          0,
          1,
          2
        ],
        "lessonCorrectTitle": "מושלם! (Perfect!) 🎉",
        "lessonCorrectBody": "“אפשר” literally means “is it possible” — the everyday polite way to ask for something.",
        "lessonWrongBody": "Start with “אפשר” (may I), name the item, then “בבקשה” (please).",
        "cultureCaption": "A café in Tel Aviv · morning",
        "cultureTitle": "Bluntness here is a kind of intimacy",
        "cultureBody": "Israeli café culture is famously direct — people skip the small talk and speak plainly, which locals experience as warmth and honesty, not rudeness. Cafés are second offices and living rooms; sitting for hours over one coffee is completely normal.",
        "culturePhrase": "“תודה (toda)” — thank you; “בבקשה (bevakasha)” is both please and you're welcome.",
        "milestoneTitle": "You can now order a coffee — politely, in Hebrew.",
        "convo": [
          {
            "who": "p",
            "n": "בוקר טוב! מה תרצי?",
            "en": "Good morning! What would you like?"
          },
          {
            "who": "u",
            "n": "אפשר קפה, בבקשה.",
            "fb": "Great — “אפשר … בבקשה” is the natural polite request"
          },
          {
            "who": "p",
            "n": "בטח. עוד משהו?",
            "en": "Sure. Anything else?"
          },
          {
            "who": "u",
            "n": "לא, תודה. החשבון בבקשה.",
            "fb": "Perfect — “החשבון” = the bill"
          },
          {
            "who": "p",
            "n": "בוודאי, שנים עשר שקל.",
            "en": "Of course — twelve shekels."
          }
        ],
        "debrief": [
          {
            "title": "Gendered verbs",
            "body": "“תרצי” is said to a woman, “תרצה” to a man — Hebrew verbs mark gender."
          },
          {
            "title": "Guttural ח",
            "body": "The ח in “החשבון” is a soft throat sound — let it rasp gently."
          }
        ],
        "grammarMini": "gender",
        "grammarTitle": "Gendered verbs — speaking to him vs her",
        "grammarIntro": "Hebrew verbs change by the gender of the person spoken to:",
        "gTermA": "תרצה",
        "gDescA": "said to a man — “would you like”",
        "gExA": "מה תרצה?",
        "gTermB": "תרצי",
        "gDescB": "said to a woman — “would you like”",
        "gExB": "מה תרצי?",
        "clip": "שוק הבוקר בתל אביב, עם המקומיים",
        "podcast": "קפה עם נועה — פרק 4",
        "article": "הטקס הקטן של הקפה הישראלי",
        "reader": [
          {
            "t": "בישראל, אנשים רבים אוהבים לשבת ב"
          },
          {
            "w": "בית קפה",
            "d": "café (beit kafe)"
          },
          {
            "t": ". הם שותים קפה לאט ו"
          },
          {
            "w": "מדברים",
            "d": "talk / chat (medabrim)"
          },
          {
            "t": " זה עם זה. למלצר אומרים "
          },
          {
            "w": "תודה",
            "d": "thank you (toda)"
          },
          {
            "t": ". זה רגע נעים ביום."
          }
        ],
        "reviewWord": "החשבון",
        "reviewSource": "from your café visit, 2 days ago",
        "reviewMeaning": "the bill / check (ha-kheshbon)"
      },
      {
        "chapterTitle": "Chapter 2 · הנחיות Directions",
        "lessonTitle": "Asking for Directions",
        "goalTitle": "Build it: find the museum",
        "goalLine": "Ask for directions to the museum — politely, in Hebrew.",
        "goalShort": "find the museum",
        "scenario": "directions",
        "partnerName": "יוסי Yossi",
        "partnerInitial": "י",
        "partnerRole": "local",
        "partnerPlace": "Tel Aviv street",
        "scenarioTitle": "רחוב בתל אביב · Tel Aviv",
        "scenarioSub": "Roleplay · finding your way",
        "lessonPromptEn": "How do I get to the museum?",
        "lessonHint": "Ask 'איך מגיעים ל...?'",
        "bank": [
          "איך",
          "מגיעים",
          "ל",
          "מוזיאון",
          "שם",
          "רחוב"
        ],
        "bankEn": [
          "how",
          "to get",
          "to",
          "museum",
          "there",
          "street"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "מצוין! (Excellent!) 🎉",
        "lessonCorrectBody": "“איך מגיעים ל...” means “how do I get to...” — a polite and common way to ask for directions.",
        "lessonWrongBody": "Start with “איך מגיעים ל...” (how to get to), then name the place.",
        "cultureCaption": "Navigating Tel Aviv · asking locals",
        "cultureTitle": "Directness with Directions",
        "cultureBody": "In Israel, it's common to ask passersby for directions. Israelis are usually helpful and direct in providing guidance.",
        "culturePhrase": "“בבקשה (bevakasha)” — please/you're welcome; “תודה רבה (toda raba)” — thank you very much.",
        "milestoneTitle": "You can now find places — politely, in Hebrew.",
        "convo": [
          {
            "who": "p",
            "n": "שלום! איך אפשר לעזור?",
            "en": "Hello! How can I help?"
          },
          {
            "who": "u",
            "n": "איך מגיעים למוזיאון, בבקשה?",
            "fb": "Great — “איך מגיעים ל...” sets up the question perfectly."
          },
          {
            "who": "p",
            "n": "פשוט, ישר ואז שמאלה ברחוב הראשי.",
            "en": "Simple, straight then left on the main street."
          },
          {
            "who": "u",
            "n": "תודה רבה!",
            "fb": "Perfect — expressing thanks reinforces politeness."
          },
          {
            "who": "p",
            "n": "בבקשה. תהנה!",
            "en": "You're welcome. Enjoy!"
          }
        ],
        "debrief": [
          {
            "title": "Using ל for to/at",
            "body": "The preposition ל (to) directs the action toward a location."
          },
          {
            "title": "Understanding “מגיעים”",
            "body": "“מגיעים” is the plural form, used for general directions."
          }
        ],
        "grammarMini": "prepositions",
        "grammarTitle": "Using prepositions — direction & destination",
        "grammarIntro": "Hebrew uses ל to indicate directionality:",
        "gTermA": "למוזיאון",
        "gDescA": "to the museum",
        "gExA": "איך מגיעים למוזיאון?",
        "gTermB": "לרחוב",
        "gDescB": "to the street",
        "gExB": "פונים ימינה לרחוב"
      },
      "clip",
      "מדריך לסיורים בעיר תל אביב",
      "podcast",
      "שיחה על הנחיות — פרק 8",
      "article",
      "אמנות ההתמצאות בתל אביב",
      "reader",
      [
        {
          "t": "בתל אביב, הנחיות הן "
        },
        {
          "w": "חשובות",
          "d": "important (khshuvot)"
        },
        {
          "t": ". אנשים אוהבים "
        },
        {
          "w": "לעזור",
          "d": "to help (la'azor)"
        },
        {
          "t": " ל"
        },
        {
          "w": "תיירים",
          "d": "tourists (tayarim)"
        },
        {
          "t": "."
        }
      ],
      "reviewWord",
      "מוזיאון",
      "reviewSource",
      "from your directions quest, 2 days ago",
      "reviewMeaning",
      "museum (muzion)"
    ]
  },
  "uk": {
    "name": "Ukrainian",
    "flag": "🇺🇦",
    "code": "UK",
    "font": "noto",
    "locale": "uk-UA",
    "greeting": "Доброго ранку, Maya",
    "accent": "Ukraine (Kyiv)",
    "chapters": [
      {
        "chapterTitle": "Chapter 1 · У кафе",
        "lessonTitle": "Greetings & warmth",
        "goalTitle": "Build it: order a coffee",
        "goalLine": "Order a coffee — politely, in Ukrainian.",
        "goalShort": "order a coffee",
        "scenario": "cafe",
        "partnerName": "Олена Olena",
        "partnerInitial": "О",
        "partnerRole": "бариста",
        "partnerPlace": "Lviv café",
        "scenarioTitle": "У кафе · Lviv",
        "scenarioSub": "Roleplay · order & a warm exchange",
        "lessonPromptEn": "I would like a coffee, please.",
        "lessonHint": "Why “хотів/хотіла би”?",
        "bank": [
          "Я хотів би",
          "каву",
          "будь ласка",
          "рахунок",
          "воду",
          "чай"
        ],
        "bankEn": [
          "I would like",
          "coffee",
          "please",
          "bill",
          "water",
          "tea"
        ],
        "correct": [
          0,
          1,
          2
        ],
        "lessonCorrectTitle": "Чудово! 🎉",
        "lessonCorrectBody": "“хотів би” (m.) / “хотіла би” (f.) is the polite conditional “I would like.”",
        "lessonWrongBody": "Start with the polite “I would like,” then the item, then “будь ласка.”",
        "cultureCaption": "A café in Lviv · morning",
        "cultureTitle": "Lviv runs on coffee and conversation",
        "cultureBody": "Lviv is Ukraine's coffee capital, with a café culture going back centuries — rich, ritual, and proudly local. Coffee comes strong and slow, often with a pastry, and the talk around the table matters as much as the cup. Warmth opens every exchange.",
        "culturePhrase": "“Дякую (dyakuyu)” — thank you; “будь ласка” is please and you're welcome.",
        "milestoneTitle": "You can now order a coffee — politely, in Ukrainian.",
        "convo": [
          {
            "who": "p",
            "n": "Доброго ранку! Що бажаєте?",
            "en": "Good morning! What would you like?"
          },
          {
            "who": "u",
            "n": "Я хотів би каву, будь ласка.",
            "fb": "Great — “хотів би … будь ласка” is polite"
          },
          {
            "who": "p",
            "n": "Звичайно. Ще щось?",
            "en": "Of course. Anything else?"
          },
          {
            "who": "u",
            "n": "Ні, дякую. Рахунок, будь ласка.",
            "fb": "Perfect — “рахунок” = the bill"
          },
          {
            "who": "p",
            "n": "Звісно, тридцять гривень.",
            "en": "Sure — thirty hryvnias."
          }
        ],
        "debrief": [
          {
            "title": "“хотів” vs “хотіла”",
            "body": "A man says “хотів би,” a woman “хотіла би” — past-form verbs mark gender."
          },
          {
            "title": "Soft “і” vs “и”",
            "body": "Ukrainian distinguishes і and и — different vowels that change words."
          }
        ],
        "grammarMini": "cases",
        "grammarTitle": "Cases — why “кава” becomes “каву”",
        "grammarIntro": "Ukrainian nouns change endings by role. The object of “I'd like” takes the accusative:",
        "gTermA": "кава",
        "gDescA": "base form (nominative) — coffee",
        "gExA": "Це кава.",
        "gTermB": "каву",
        "gDescB": "accusative — the thing you want",
        "gExB": "Я хотів би каву.",
        "clip": "Ранковий ринок у Львові, з місцевими",
        "podcast": "Кава з Оленою — випуск 4",
        "article": "Маленький ритуал української кави",
        "reader": [
          {
            "t": "В Україні багато людей люблять проводити час у "
          },
          {
            "w": "кафе",
            "d": "café (kafe)"
          },
          {
            "t": ". Вони п'ють каву поволі та "
          },
          {
            "w": "розмовляють",
            "d": "talk / converse (rozmovляють)"
          },
          {
            "t": ". Офіціанту кажуть "
          },
          {
            "w": "дякую",
            "d": "thank you (dyakuyu)"
          },
          {
            "t": ". Це приємний момент дня."
          }
        ],
        "reviewWord": "рахунок",
        "reviewSource": "from your café visit, 2 days ago",
        "reviewMeaning": "the bill / check (rakhunok)"
      },
      {
        "chapterTitle": "Chapter 2 · Напрямки",
        "lessonTitle": "Asking for Directions",
        "goalTitle": "Find it: ask for directions",
        "goalLine": "Ask for directions to the nearest metro station, politely, in Ukrainian.",
        "goalShort": "ask for directions",
        "scenario": "directions",
        "partnerName": "Іван Ivan",
        "partnerInitial": "І",
        "partnerRole": "проходжувач",
        "partnerPlace": "Lviv streets",
        "scenarioTitle": "На вулицях Львова",
        "scenarioSub": "Roleplay · ask for & give directions",
        "lessonPromptEn": "Excuse me, where is the nearest metro?",
        "lessonHint": "Why “перепрошую” instead of просто “вибачте”?",
        "bank": [
          "Перепрошую",
          "де",
          "найближчий",
          "метро",
          "ліворуч",
          "прямо"
        ],
        "bankEn": [
          "Excuse me",
          "where",
          "nearest",
          "metro",
          "left",
          "straight"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "Чудово! 🎉",
        "lessonCorrectBody": "“перепрошую” shows politeness and attention.",
        "lessonWrongBody": "Begin with the polite “Pered to excuse” before asking your question.",
        "cultureCaption": "Navigating Lviv · getting around",
        "cultureTitle": "The charm of getting lost in Lviv",
        "cultureBody": "Despite its size, Lviv can feel like a maze with its narrow streets and hidden courtyards. Locals are always warm and willing to help, often ending directions with a smile.",
        "culturePhrase": "“Прошу” — please, after providing help; “дякую” means thank you.",
        "milestoneTitle": "You can now ask for directions, politely, in Ukrainian.",
        "convo": [
          {
            "who": "p",
            "n": "Доброго дня! Чим можу допомогти?",
            "en": "Good day! How can I help?"
          },
          {
            "who": "u",
            "n": "Перепрошую, де найближче метро?",
            "fb": "Great — polite way to ask for directions!"
          },
          {
            "who": "p",
            "n": "Прямо і потім ліворуч.",
            "en": "Straight and then left."
          },
          {
            "who": "u",
            "n": "Дякую!",
            "fb": "Excellent — gratitude is always appreciated."
          },
          {
            "who": "p",
            "n": "Прошу! Гарного дня.",
            "en": "You're welcome! Have a nice day."
          }
        ],
        "debrief": [
          {
            "title": "Polite requests",
            "body": "“Перепрошую” adds more politeness than a simple “вибачте.”"
          },
          {
            "title": "Direction words",
            "body": "Learn words like ліворуч, праворуч (left, right) for better navigation."
          }
        ],
        "grammarMini": "declensions",
        "grammarTitle": "Declensions — directions often change",
        "grammarIntro": "Nouns in Ukrainian can change based on their function and role. Location queries often use different forms.",
        "gTermA": "метро",
        "gDescA": "base form — metro",
        "gExA": "Це метро.",
        "gTermB": "метра",
        "gDescB": "locative, when asking direction",
        "gExB": "Де метро?"
      },
      {
        "chapterTitle": "Chapter 3 · Сім'я",
        "lessonTitle": "Talking about Family",
        "goalTitle": "Discuss it: talk about your family",
        "goalLine": "Say a few words about your family, in Ukrainian.",
        "goalShort": "talk about family",
        "scenario": "family",
        "partnerName": "Анна Anna",
        "partnerInitial": "А",
        "partnerRole": "друг",
        "partnerPlace": "Lviv park",
        "scenarioTitle": "У парку Львова",
        "scenarioSub": "Roleplay · share about your family",
        "lessonPromptEn": "I have a brother and a sister.",
        "lessonHint": "Notice gender in nouns: брат vs сестра.",
        "bank": [
          "У мене",
          "є",
          "брат",
          "сестра",
          "мама",
          "тато"
        ],
        "bankEn": [
          "I have",
          "a",
          "brother",
          "sister",
          "mother",
          "father"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "Чудово! 🎉",
        "lessonCorrectBody": "“У мене є…” is how you start to express possession in Ukrainian.",
        "lessonWrongBody": "Start with “У мене є” for possession, followed by the family members.",
        "cultureCaption": "Family in Ukraine",
        "cultureTitle": "Family ties that bind",
        "cultureBody": "Families in Ukraine often form close-knit structures with gatherings central to maintaining strong connections, celebrating traditions, and passing down stories.",
        "culturePhrase": "“Улюблені” — beloved ones, often used warmly in family context.",
        "milestoneTitle": "You can now talk about your family, in Ukrainian.",
        "convo": [
          {
            "who": "p",
            "n": "Привіт! Як справи у твоєї сім'ї?",
            "en": "Hi! How is your family doing?"
          },
          {
            "who": "u",
            "n": "У мене є брат і сестра.",
            "fb": "Great — simple and accurate sentence."
          },
          {
            "who": "p",
            "n": "Чудово! Щось ще про них?",
            "en": "Wonderful! Anything else about them?"
          },
          {
            "who": "u",
            "n": "Вони схожі на мене.",
            "fb": "Excellent description using similarity."
          },
          {
            "who": "p",
            "n": "Це цікаво!",
            "en": "That's interesting!"
          }
        ],
        "debrief": [
          {
            "title": "Gendered nouns",
            "body": "Family terms change based on gender, pay attention to endings."
          },
          {
            "title": "Possessive terms",
            "body": "“У мене є” is invaluable for describing possession."
          }
        ],
        "grammarMini": "possession",
        "grammarTitle": "Possession — expressing ownership",
        "grammarIntro": "Ukrainians express possession with “У мене є” which sometimes requires adjustments to the following noun for gender.",
        "gTermA": "брат",
        "gDescA": "brother — masculine noun",
        "gExA": "Це мій брат.",
        "gTermB": "сестра",
        "gDescB": "sister — feminine noun",
        "gExB": "Це моя сестра."
      },
      {
        "chapterTitle": "Chapter 4 · Готель",
        "lessonTitle": "Navigating the Hotel",
        "goalTitle": "Settle it: check into the hotel",
        "goalLine": "Check into a hotel room, in Ukrainian.",
        "goalShort": "check into the hotel",
        "scenario": "hotel",
        "partnerName": "Петро Petro",
        "partnerInitial": "П",
        "partnerRole": "консьєрж",
        "partnerPlace": "Lviv hotel",
        "scenarioTitle": "Готель Львова",
        "scenarioSub": "Roleplay · checking in & confirming details",
        "lessonPromptEn": "I have a reservation under the name Ivanov.",
        "lessonHint": "Why use “на ім'я”?",
        "bank": [
          "У мене",
          "є",
          "бронь",
          "ім'я",
          "Іванов",
          "номер"
        ],
        "bankEn": [
          "I have",
          "a",
          "reservation",
          "name",
          "Ivanov",
          "room"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "Чудово! 🎉",
        "lessonCorrectBody": "“на ім'я” specifies the reservation details—crucial at check-in.",
        "lessonWrongBody": "Begin with possession “У мене є,” giving your name last.",
        "cultureCaption": "Ukrainian hospitality",
        "cultureTitle": "Warm parcels of Ukrainian hospitality",
        "cultureBody": "Hotels in Ukraine often blend comfort with a welcoming spirit, putting guests at ease through attentive service and a hearty dose of Ukrainian hospitality. 'Guest' becomes 'family' during your stay.",
        "culturePhrase": "“Прошу” — You're welcome; commonly said as a friendly gesture in service.",
        "milestoneTitle": "You can now check into a hotel, in Ukrainian.",
        "convo": [
          {
            "who": "p",
            "n": "Доброго дня! Ласкаво просимо до нашого готелю.",
            "en": "Good day! Welcome to our hotel."
          },
          {
            "who": "u",
            "n": "У мене є бронь на ім'я Іванов.",
            "fb": "Good start, clear identification of reservation."
          },
          {
            "who": "p",
            "n": "Зрозумів. Ваш номер готовий.",
            "en": "Understood. Your room is ready."
          },
          {
            "who": "u",
            "n": "Дякую. Через скільки сніданок?",
            "fb": "Good inquiry about additional services."
          },
          {
            "who": "p",
            "n": "Сніданок із восьмої до десятої.",
            "en": "Breakfast is from eight to ten."
          }
        ],
        "debrief": [
          {
            "title": "Reservations and names",
            "body": "Use “на ім'я” to specify whom a reservation is for."
          },
          {
            "title": "Service terms",
            "body": "Common Q&As about amenities improve your experience."
          }
        ],
        "grammarMini": "possessive adjectives",
        "grammarTitle": "Using possessive adjectives",
        "grammarIntro": "Making reservations includes using possessive adjectives, which sometimes still call for gender adaptations of the nouns they relate to.",
        "gTermA": "бронь",
        "gDescA": "reservation — feminine",
        "gExA": "Це моя бронь.",
        "gTermB": "номер",
        "gDescB": "room — masculine",
        "gExB": "Це мій номер."
      },
      {
        "chapterTitle": "Chapter 5 · Ринок",
        "lessonTitle": "Shopping at the Market",
        "goalTitle": "Buy it: purchase fresh produce",
        "goalLine": "Buy fruits at the market, in Ukrainian.",
        "goalShort": "purchase fresh produce",
        "scenario": "market",
        "partnerName": "Світлана Svitlana",
        "partnerInitial": "С",
        "partnerRole": "продавець",
        "partnerPlace": "Lviv market",
        "scenarioTitle": "Ринок у Львові",
        "scenarioSub": "Roleplay · negotiate and buy",
        "lessonPromptEn": "How much are the apples?",
        "lessonHint": "“Скільки коштують” versus “скільки є”",
        "bank": [
          "Скільки",
          "коштують",
          "яблука",
          "ціна",
          "м'яко",
          "свіжі"
        ],
        "bankEn": [
          "How much",
          "are",
          "apples",
          "price",
          "soft",
          "fresh"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "Чудово! 🎉",
        "lessonCorrectBody": "Phrase “скільки коштують” is standard when inquiring about prices.",
        "lessonWrongBody": "Start with “How much” for clearer queries.",
        "cultureCaption": "Bargaining at the bazaar",
        "cultureTitle": "An age-old tradition of market exchanges",
        "cultureBody": "Ukrainian markets are vibrant cultures filled with colors, voices, and hearty negotiations. The banter echoes age-old traditions where every transaction is more than just trade—it's community engagement.",
        "culturePhrase": "“Будь ласка” for thanking after purchasing; keeps exchanges friendly and engaged.",
        "milestoneTitle": "You can now purchase fresh produce at the market, in Ukrainian.",
        "convo": [
          {
            "who": "p",
            "n": "Доброго дня! Щось цікавить?",
            "en": "Good day! Interested in anything?"
          },
          {
            "who": "u",
            "n": "Скільки коштують яблука?",
            "fb": "Good specific question on cost."
          },
          {
            "who": "p",
            "n": "П'ять гривень за кілограм.",
            "en": "Five hryvnias per kilogram."
          },
          {
            "who": "u",
            "n": "Дякую, беру кілограм.",
            "fb": "Decision made and communicated—excellent!"
          },
          {
            "who": "p",
            "n": "Дякую, приходьте ще!",
            "en": "Thank you, come again!"
          }
        ],
        "debrief": [
          {
            "title": "Quantities and costs",
            "body": "Using accurate numbers and quantity terms enhances transactions."
          },
          {
            "title": "Market dynamics",
            "body": "Understanding the interplay of terms of engagement aids eloquence in exchanges."
          }
        ],
        "grammarMini": "numerals",
        "grammarTitle": "Price inquiry using numerals",
        "grammarIntro": "Numbers in Ukrainian must align with noun forms, essential for calculations during purchases.",
        "gTermA": "яблука",
        "gDescA": "nominative — apples",
        "gExA": "Це яблука.",
        "gTermB": "яблук",
        "gDescB": "genitive plural, when expressing quantity or price.",
        "gExB": "Скільки коштують яблук?"
      },
      {
        "chapterTitle": "Chapter 6 · Невідкладна допомога",
        "lessonTitle": "Handling Emergencies",
        "goalTitle": "Act on it: call emergency services",
        "goalLine": "Call emergency services, in Ukrainian.",
        "goalShort": "call emergency services",
        "scenario": "emergency",
        "partnerName": "Олександр Oleksandr",
        "partnerInitial": "О",
        "partnerRole": "оператор",
        "partnerPlace": "emergency hotline",
        "scenarioTitle": "Служба порятунку",
        "scenarioSub": "Roleplay · report & request assistance",
        "lessonPromptEn": "Help, there is an emergency!",
        "lessonHint": "“Допоможіть” has an urgency over “допомога.”",
        "bank": [
          "Допоможіть",
          "тут",
          "трапилася",
          "надзвичайна",
          "ситуація",
          "швидка"
        ],
        "bankEn": [
          "Help",
          "here",
          "occurred",
          "emergency",
          "situation",
          "ambulance"
        ],
        "correct": [
          0,
          1,
          3,
          4
        ],
        "lessonCorrectTitle": "Чудово! 🎉",
        "lessonCorrectBody": "“Допоможіть” draws immediate attention, crucial in emergencies.",
        "lessonWrongBody": "Begin with “Help,” followed by key event description.",
        "cultureCaption": "Ukrainian Emergency Services",
        "cultureTitle": "Quick response with warmth",
        "cultureBody": "While acting professionally, Ukrainian emergency services often extend concern and compassion, reflecting communal values in crisis support — from the first call to the final handover, reassuring care can be anticipated.",
        "culturePhrase": "“Підтримка” means 'support,' often offered alongside help, creating a network of assistance.",
        "milestoneTitle": "You can now call emergency services, in Ukrainian.",
        "convo": [
          {
            "who": "p",
            "n": "Служба порятунку, слухаю вас.",
            "en": "Rescue service, I am listening to you."
          },
          {
            "who": "u",
            "n": "Допоможіть, тут трапилася надзвичайна ситуація!",
            "fb": "Efficient, clear problem communication."
          },
          {
            "who": "p",
            "n": "Що саме трапилося і де ви?",
            "en": "What exactly happened and where are you?"
          },
          {
            "who": "u",
            "n": "Я в центрі, потрібна швидка допомога.",
            "fb": "Good, clear articulation of need and location."
          },
          {
            "who": "p",
            "n": "Зрозумів, виїжджаємо зараз.",
            "en": "Understood, we are dispatching now."
          }
        ],
        "debrief": [
          {
            "title": "The imperative form in emergencies",
            "body": "“Допоможіть” is an urgent form that conveys urgency."
          },
          {
            "title": "Geographical precision",
            "body": "Knowing and stating your location precisely hastens response."
          }
        ],
        "grammarMini": "imperative mood",
        "grammarTitle": "Effective use of the imperative mood",
        "grammarIntro": "The imperative mood in Ukrainian has different forms depending on formality and urgency, crucial for effective emergency communication.",
        "gTermA": "допомога",
        "gDescA": "noun — help",
        "gExA": "Це допомога.",
        "gTermB": "допоможіть",
        "gDescB": "imperative — command or urgent request for help",
        "gExB": "Допоможіть!"
      }
    ]
  },
  "sw": {
    "name": "Swahili",
    "flag": "🇰🇪",
    "code": "SW",
    "font": "",
    "locale": "sw-KE",
    "greeting": "Habari ya asubuhi, Maya",
    "accent": "Kenya / Tanzania",
    "chapters": [
      {
        "chapterTitle": "Chapter 1 · Kwenye mkahawa",
        "lessonTitle": "Greetings & warmth",
        "goalTitle": "Build it: order a coffee",
        "goalLine": "Order a coffee — politely, in Swahili.",
        "goalShort": "order a coffee",
        "scenario": "cafe",
        "partnerName": "Amani",
        "partnerInitial": "A",
        "partnerRole": "mhudumu",
        "partnerPlace": "Nairobi café",
        "scenarioTitle": "Mkahawani · Nairobi",
        "scenarioSub": "Roleplay · greet, order & chat",
        "lessonPromptEn": "I would like a coffee, please.",
        "lessonHint": "Why “naomba”?",
        "bank": [
          "Naomba",
          "kahawa",
          "tafadhali",
          "bili",
          "maji",
          "chai"
        ],
        "bankEn": [
          "I would like",
          "coffee",
          "please",
          "bill",
          "water",
          "tea"
        ],
        "correct": [
          0,
          1,
          2
        ],
        "lessonCorrectTitle": "Vizuri sana! 🎉",
        "lessonCorrectBody": "“Naomba” literally “I request” — the warm, polite way to ask for anything.",
        "lessonWrongBody": "Start with “Naomba” (I'd like), name the item, then “tafadhali.”",
        "cultureCaption": "A café in Nairobi · morning",
        "cultureTitle": "Greetings come before everything",
        "cultureBody": "In East Africa you greet before you ask for anything — skipping “Habari?” (how are you?) is unthinkable. The exchange of greetings can be long and is the heart of courtesy. Coffee and chai are shared slowly; relationships always come before the transaction.",
        "culturePhrase": "“Asante (sana)” — thank you (very much); “tafadhali” is please.",
        "milestoneTitle": "You can now order a coffee — politely, in Swahili.",
        "convo": [
          {
            "who": "p",
            "n": "Habari ya asubuhi! Karibu, unataka nini?",
            "en": "Good morning! Welcome, what would you like?"
          },
          {
            "who": "u",
            "n": "Naomba kahawa, tafadhali.",
            "fb": "Great — “Naomba … tafadhali” is warm and polite"
          },
          {
            "who": "p",
            "n": "Sawa. Kitu kingine?",
            "en": "Okay. Anything else?"
          },
          {
            "who": "u",
            "n": "Hapana, asante.",
            "fb": "Perfect — “asante” = thank you"
          },
          {
            "who": "p",
            "n": "Karibu, shilingi mia mbili.",
            "en": "You're welcome — two hundred shillings."
          }
        ],
        "debrief": [
          {
            "title": "Greet first",
            "body": "You can add “Habari?” before ordering — greetings open every Swahili exchange."
          },
          {
            "title": "“Karibu”",
            "body": "It means both “welcome” and “you're welcome” — a lovely all-purpose warmth word."
          }
        ],
        "grammarMini": "noun classes",
        "grammarTitle": "Noun classes — the “m-/wa-” idea",
        "grammarIntro": "Swahili sorts nouns into classes; prefixes change for singular and plural:",
        "gTermA": "mtu",
        "gDescA": "person (m-/wa- class, singular)",
        "gExA": "mtu mmoja — one person",
        "gTermB": "watu",
        "gDescB": "people (plural of the same class)",
        "gExB": "watu wawili — two people",
        "clip": "Soko la asubuhi Nairobi, na wenyeji",
        "podcast": "Kahawa na Amani — kipindi 4",
        "article": "Desturi ndogo ya kahawa ya Afrika Mashariki",
        "reader": [
          {
            "t": "Afrika Mashariki, watu wengi hupenda kukaa "
          },
          {
            "w": "mkahawani",
            "d": "at the café (from mkahawa — café)"
          },
          {
            "t": ". Hunywa kahawa polepole na "
          },
          {
            "w": "kuzungumza",
            "d": "to chat / converse"
          },
          {
            "t": ". Kwa mhudumu, tunasema "
          },
          {
            "w": "asante",
            "d": "thank you"
          },
          {
            "t": ". Ni wakati mzuri wa siku."
          }
        ],
        "reviewWord": "asante",
        "reviewSource": "from your café visit, 3 days ago",
        "reviewMeaning": "thank you"
      },
      {
        "chapterTitle": "Chapter 2 · Njia",
        "lessonTitle": "Asking for Directions",
        "goalTitle": "Build it: ask for directions",
        "goalLine": "Ask for directions politely, in Swahili.",
        "goalShort": "ask for directions",
        "scenario": "directions",
        "partnerName": "Mwenda",
        "partnerInitial": "M",
        "partnerRole": "mwenyeji",
        "partnerPlace": "Jiji la Nairobi",
        "scenarioTitle": "Njiani · Nairobi",
        "scenarioSub": "Roleplay · asking & understanding",
        "lessonPromptEn": "Can you please tell me how to get to the market?",
        "lessonHint": "Notice the use of “tafadhali.”",
        "bank": [
          "Unaweza",
          "uniambie",
          "njia",
          "wakati",
          "tafadhali",
          "soko"
        ],
        "bankEn": [
          "Can you",
          "tell me",
          "way",
          "time",
          "please",
          "market"
        ],
        "correct": [
          0,
          1,
          2,
          4
        ],
        "lessonCorrectTitle": "Vizuri sana! 🎉",
        "lessonCorrectBody": "Using 'tafadhali' ensures your request is polite.",
        "lessonWrongBody": "Start with 'Unaweza' (Can you), follow it with 'uniambie' (tell me), then 'njia' (way), and finish with 'tafadhali' (please).",
        "cultureCaption": "In the streets of Nairobi",
        "cultureTitle": "Politeness on the streets",
        "cultureBody": "In East African cities, asking for directions often involves a series of polite exchanges. Always begin with a greeting before making your request.",
        "culturePhrase": "“Tafadhali” — please; “Unaweza kuniambia?” — Can you tell me?",
        "milestoneTitle": "You can now ask for directions politely, in Swahili.",
        "convo": [
          {
            "who": "p",
            "n": "Habari! Unaelekea wapi?",
            "en": "Hello! Where are you headed?"
          },
          {
            "who": "u",
            "n": "Unaweza kuniambia njia ya kwenda sokoni, tafadhali?",
            "fb": "Perfect — you're asking politely for directions"
          },
          {
            "who": "p",
            "n": "Ndiyo, nenda moja kwa moja kisha geuka kushoto.",
            "en": "Yes, go straight then turn left."
          },
          {
            "who": "u",
            "n": "Asante sana kwa msaada wako.",
            "fb": "Great — thanking for the help is always appreciated"
          },
          {
            "who": "p",
            "n": "Karibu! Safari njema.",
            "en": "You're welcome! Safe journey."
          }
        ],
        "debrief": [
          {
            "title": "Greetings matter",
            "body": "Remember to start with 'Habari' when approaching someone for directions."
          },
          {
            "title": "“Karibu”",
            "body": "It’s the Swahili way of expressing friendliness and welcome."
          }
        ],
        "grammarMini": "prepositions",
        "grammarTitle": "Using prepositions in Swahili",
        "grammarIntro": "Swahili uses simple prepositions to indicate directions and places:",
        "gTermA": "chini",
        "gDescA": "under",
        "gExA": "kiti chini — chair under",
        "gTermB": "juu",
        "gDescB": "on",
        "gExB": "meza juu — table on",
        "clip": "Mjini Nairobi asubuhi, na wenyeji",
        "podcast": "Njia na Mwenda — kipindi 5",
        "article": "Kuelekeza njia katika mji wa Nairobi",
        "reader": [
          {
            "t": "Wakati mwingine njia zinaweza kuwa ngumu "
          },
          {
            "w": "katika jiji",
            "d": "in the city (from jiji — city)"
          },
          {
            "t": ". Uliza mwenyeji ikiwa "
          },
          {
            "w": "umepotea",
            "d": "you're lost"
          },
          {
            "t": ". Mara nyingi watafurahi kusaidia."
          }
        ],
        "reviewWord": "njia",
        "reviewSource": "from your directions inquiry, 2 days ago",
        "reviewMeaning": "way"
      },
      {
        "chapterTitle": "Chapter 3 · Familia",
        "lessonTitle": "Talking about Family",
        "goalTitle": "Build it: introduce your family",
        "goalLine": "Introduce your family in Swahili.",
        "goalShort": "introduce family",
        "scenario": "family",
        "partnerName": "Fatuma",
        "partnerInitial": "F",
        "partnerRole": "rafiki",
        "partnerPlace": "Nairobi home",
        "scenarioTitle": "Nyumbani · Nairobi",
        "scenarioSub": "Roleplay · share & listen",
        "lessonPromptEn": "This is my brother and sister.",
        "lessonHint": "Note the noun classes for family members.",
        "bank": [
          "Huyu",
          "ni",
          "kaka",
          "na",
          "dada",
          "wangu"
        ],
        "bankEn": [
          "This",
          "is",
          "brother",
          "and",
          "sister",
          "my"
        ],
        "correct": [
          0,
          1,
          2,
          3,
          4,
          5
        ],
        "lessonCorrectTitle": "Vizuri sana! 🎉",
        "lessonCorrectBody": "Family introductions are often accompanied by the possessive 'wangu' (my).",
        "lessonWrongBody": "Start with 'Huyu ni' (This is), then state the family member, and finalize with 'wangu' (my).",
        "cultureCaption": "A family gathering in Nairobi",
        "cultureTitle": "Family is central",
        "cultureBody": "Family gatherings are a cherished tradition in East Africa. The extended family is often included in introductions, reflecting the communal culture.",
        "culturePhrase": "“Karibu nyumbani” — Welcome home; this phrase embodies warmth and belonging.",
        "milestoneTitle": "You can now introduce your family in Swahili.",
        "convo": [
          {
            "who": "p",
            "n": "Karibu nyumbani! Hawa ni nani?",
            "en": "Welcome home! Who are these?"
          },
          {
            "who": "u",
            "n": "Huyu ni kaka yangu na huyu ni dada yangu.",
            "fb": "Great — you've introduced your family members"
          },
          {
            "who": "p",
            "n": "Ni wazuri! Je, wanakaa wapi?",
            "en": "They are lovely! Where do they live?"
          },
          {
            "who": "u",
            "n": "Wanakaa Nairobi, asante kwa kuwakaribisha.",
            "fb": "Well done on acknowledging hosting manners"
          },
          {
            "who": "p",
            "n": "Karibu sana! Ni furaha yangu.",
            "en": "You’re very welcome! It's my pleasure."
          }
        ],
        "debrief": [
          {
            "title": "Include everyone",
            "body": "Remember, introductions often extend to include various family members."
          },
          {
            "title": "“Wangu”",
            "body": "The possessive in Swahili is attached to the noun for clarity and belonging."
          }
        ],
        "grammarMini": "possessive pronouns",
        "grammarTitle": "Possessive pronouns in Swahili",
        "grammarIntro": "Swahili possessive pronouns agree with noun classes:",
        "gTermA": "wangu",
        "gDescA": "my (singular, m-/wa- class)",
        "gExA": "kaka yangu — my brother",
        "gTermB": "wenu",
        "gDescB": "your (plural, m-/wa- class)",
        "gExB": "ndugu wenu — your siblings",
        "clip": "Furaha ya familia Nairobi jioni",
        "podcast": "Familia na Fatuma — kipindi 6",
        "article": "Umuhimu wa familia Afrika Mashariki",
        "reader": [
          {
            "t": "Katika familia nyingi za Afrika Mashariki, "
          },
          {
            "w": "upendo",
            "d": "love"
          },
          {
            "t": " na "
          },
          {
            "w": "umoja",
            "d": "unity"
          },
          {
            "t": " ni muhimu sana. Watu wanapenda "
          },
          {
            "w": "kukutana",
            "d": "to meet"
          },
          {
            "t": " mara kwa mara."
          }
        ],
        "reviewWord": "familia",
        "reviewSource": "from your family discussion, yesterday",
        "reviewMeaning": "family"
      },
      {
        "chapterTitle": "Chapter 4 · Hoteli",
        "lessonTitle": "Checking into a Hotel",
        "goalTitle": "Build it: check into a hotel",
        "goalLine": "Check into a hotel with courtesy, in Swahili.",
        "goalShort": "check into a hotel",
        "scenario": "hotel",
        "partnerName": "Salim",
        "partnerInitial": "S",
        "partnerRole": "mkabidhi",
        "partnerPlace": "Hoteli ya Nairobi",
        "scenarioTitle": "Hoteleleni · Nairobi",
        "scenarioSub": "Roleplay · check-in & relax",
        "lessonPromptEn": "I have a reservation under the name of Smith.",
        "lessonHint": "Ensure you make a polite request with 'tafadhali'.",
        "bank": [
          "Nina",
          "uhifadhi",
          "chini ya",
          "jina",
          "la",
          "Smith"
        ],
        "bankEn": [
          "I have",
          "a reservation",
          "under",
          "name",
          "of",
          "Smith"
        ],
        "correct": [
          0,
          1,
          2,
          3,
          4,
          5
        ],
        "lessonCorrectTitle": "Vizuri sana! 🎉",
        "lessonCorrectBody": "Polite check-ins help ensure a warm welcome.",
        "lessonWrongBody": "Start with 'Nina uhifadhi' (I have a reservation), follow with 'chini ya jina la' (under the name of), and complete with 'Smith'.",
        "cultureCaption": "A cozy hotel in Nairobi",
        "cultureTitle": "Hospitality rules",
        "cultureBody": "In hotels, showing appreciation and acknowledging the staff creates a pleasant atmosphere. Use 'tafadhali' liberally.",
        "culturePhrase": "“Asante kwa msaada wako.” — Thank you for your help; gratitude is key.",
        "milestoneTitle": "You can now check into a hotel with courtesy, in Swahili.",
        "convo": [
          {
            "who": "p",
            "n": "Karibu hoteli yetu! Una uhifadhi?",
            "en": "Welcome to our hotel! Do you have a reservation?"
          },
          {
            "who": "u",
            "n": "Nina uhifadhi chini ya jina la Smith, tafadhali.",
            "fb": "Perfect — mentioned your reservation and used 'tafadhali'"
          },
          {
            "who": "p",
            "n": "Lengo! Chumba chako kiko tayari.",
            "en": "Understood! Your room is ready."
          },
          {
            "who": "u",
            "n": "Asante sana kwa huduma yako.",
            "fb": "Well done — appreciating the service is important"
          },
          {
            "who": "p",
            "n": "Karibu, furahia kukaa kwako.",
            "en": "You're welcome, enjoy your stay."
          }
        ],
        "debrief": [
          {
            "title": "Highlight the reservation",
            "body": "Ensure your name and reservation details are clear and politely stated."
          },
          {
            "title": "Use 'tafadhali'",
            "body": "It conveys your respect and ensures goodwill in service."
          }
        ],
        "grammarMini": "adjective agreement",
        "grammarTitle": "Adjective agreement with nouns",
        "grammarIntro": "Adjectives agree with the noun class, affecting prefixes:",
        "gTermA": "kikubwa",
        "gDescA": "big (ki-/vi- class)",
        "gExA": "kitanda kikubwa — big bed",
        "gTermB": "vikubwa",
        "gDescB": "big (plural, ki-/vi- class)",
        "gExB": "vitanda vikubwa — big beds",
        "clip": "Ijumaa usiku Nairobi hoteli",
        "podcast": "Hoteli na Salim — kipindi 7",
        "article": "Utaratibu wa hoteli Afrika Mashariki",
        "reader": [
          {
            "t": "Mapokezi ni sehemu ya kwanza unayokutana nayo "
          },
          {
            "w": "ukifika",
            "d": "when you arrive"
          },
          {
            "t": " hotelini. "
          },
          {
            "w": "Watumishi",
            "d": "staff"
          },
          {
            "t": " wako tayari kukusaidia. Hakikisha unasema "
          },
          {
            "w": "asante",
            "d": "thank you"
          },
          {
            "t": " kila mara."
          }
        ],
        "reviewWord": "uhifadhi",
        "reviewSource": "from your hotel reservation, last week",
        "reviewMeaning": "reservation"
      },
      {
        "chapterTitle": "Chapter 5 · Sokoni",
        "lessonTitle": "Shopping at the Market",
        "goalTitle": "Build it: buy fruits",
        "goalLine": "Buy fruits with politeness, in Swahili.",
        "goalShort": "buy fruits",
        "scenario": "market",
        "partnerName": "Khadija",
        "partnerInitial": "K",
        "partnerRole": "muuzaji",
        "partnerPlace": "Soko la Nairobi",
        "scenarioTitle": "Sokoni · Nairobi",
        "scenarioSub": "Roleplay · choosing & paying",
        "lessonPromptEn": "How much is this mango?",
        "lessonHint": "Learning numbers helps in price negotiations.",
        "bank": [
          "Hii",
          "embe",
          "ni shilingi",
          "ngapi",
          "hii",
          "tafadhali"
        ],
        "bankEn": [
          "This",
          "mango",
          "is",
          "how much",
          "this",
          "please"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "Vizuri sana! 🎉",
        "lessonCorrectBody": "Always remember to be polite with 'tafadhali'.",
        "lessonWrongBody": "Start with 'Hii embe' (This mango), followed by 'ni shilingi ngapi' (is how much), and end with 'tafadhali'.",
        "cultureCaption": "A vibrant market in Nairobi",
        "cultureTitle": "Bargaining and respect",
        "cultureBody": "Market exchanges are lively, filled with bargaining and banter. A smile and a 'tafadhali' go a long way.",
        "culturePhrase": "“Punguza bei” — Lower the price; cheeky yet respectful.",
        "milestoneTitle": "You can now buy fruits politely, in Swahili.",
        "convo": [
          {
            "who": "p",
            "n": "Karibu sokoni! Unahitaji nini?",
            "en": "Welcome to the market! What do you need?"
          },
          {
            "who": "u",
            "n": "Hii embe ni shilingi ngapi, tafadhali?",
            "fb": "Great — price enquiry with politeness"
          },
          {
            "who": "p",
            "n": "Embe hii ni shilingi sitini.",
            "en": "This mango is sixty shillings."
          },
          {
            "who": "u",
            "n": "Punguza bei kidogo, tafadhali.",
            "fb": "Lovely — you're engaging in bargaining respectfully"
          },
          {
            "who": "p",
            "n": "Sawa, shilingi hamsini.",
            "en": "Okay, fifty shillings."
          }
        ],
        "debrief": [
          {
            "title": "The art of bargaining",
            "body": "Start with a chuckle and follow with a request and 'tafadhali'."
          },
          {
            "title": "“Punguza bei”",
            "body": "A necessary phrase to master the Swahili market scene."
          }
        ],
        "grammarMini": "numbers",
        "grammarTitle": "Counting in Swahili",
        "grammarIntro": "Numbers are essential for bargaining and everyday interactions:",
        "gTermA": "sitini",
        "gDescA": "sixty",
        "gExA": "shilingi sitini — sixty shillings",
        "gTermB": "hamsini",
        "gDescB": "fifty",
        "gExB": "shilingi hamsini — fifty shillings",
        "clip": "Soko la jioni Nairobi",
        "podcast": "Sokoni na Khadija — kipindi 8",
        "article": "Bargaining na uchumi wa soko Afrika Mashariki",
        "reader": [
          {
            "t": "Soko ni mahali ambapo watu wanakuja "
          },
          {
            "w": "kununua",
            "d": "to buy"
          },
          {
            "t": " na "
          },
          {
            "w": "kuuza",
            "d": "to sell"
          },
          {
            "t": ". "
          },
          {
            "w": "Mawasiliano",
            "d": "Communication"
          },
          {
            "t": " ni muhimu hapa."
          }
        ],
        "reviewWord": "bei",
        "reviewSource": "from your market trip, yesterday",
        "reviewMeaning": "price"
      },
      {
        "chapterTitle": "Chapter 6 · Dharura",
        "lessonTitle": "Handling Emergencies",
        "goalTitle": "Build it: call for help",
        "goalLine": "Call for help in an emergency situation, in Swahili.",
        "goalShort": "call for help",
        "scenario": "emergency",
        "partnerName": "Moses",
        "partnerInitial": "M",
        "partnerRole": "askari",
        "partnerPlace": "Mtaa wa Nairobi",
        "scenarioTitle": "Dharurani · Nairobi",
        "scenarioSub": "Roleplay · getting urgent aid",
        "lessonPromptEn": "Help! Please call the police.",
        "lessonHint": "Urgency is key; “tafadhali” for polite insistence.",
        "bank": [
          "Nisaidie",
          "tafadhali",
          "ita",
          "polisi",
          "haraka",
          "hapa"
        ],
        "bankEn": [
          "Help",
          "please",
          "call",
          "police",
          "quickly",
          "here"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "Vizuri sana! 🎉",
        "lessonCorrectBody": "In emergencies, clarity and politeness both matter.",
        "lessonWrongBody": "Start with 'Nisaidie' (Help), then 'tafadhali' (please), followed by 'ita polisi' (call the police).",
        "cultureCaption": "A street in Nairobi under watch",
        "cultureTitle": "Community care",
        "cultureBody": "In emergencies, the community bands together to help. Staying calm helps the situation.",
        "culturePhrase": "“Haraka” — quickly; composing yet effective under pressure.",
        "milestoneTitle": "You can now call for help in an emergency, in Swahili.",
        "convo": [
          {
            "who": "p",
            "n": "Kuna shida gani? Unahitaji msaada?",
            "en": "What is the problem? Do you need help?"
          },
          {
            "who": "u",
            "n": "Nisaidie, tafadhali ita polisi.",
            "fb": "Great — you've called for help efficiently"
          },
          {
            "who": "p",
            "n": "Hakika, polisi wanakuja haraka.",
            "en": "Certainly, the police are coming quickly."
          },
          {
            "who": "u",
            "n": "Asante kwa kuwa na haraka.",
            "fb": "Good job — acknowledging prompt action"
          },
          {
            "who": "p",
            "n": "Karibu. Tutakusaidia kadiri ya uwezo wetu.",
            "en": "Welcome. We will help as best as we can."
          }
        ],
        "debrief": [
          {
            "title": "Stay calm",
            "body": "In emergencies, begin interactions with a cool head to secure help more effectively."
          },
          {
            "title": "“Polisi”",
            "body": "Ensure clarity in requesting police assistance."
          }
        ],
        "grammarMini": "imperative verbs",
        "grammarTitle": "Using imperative verbs",
        "grammarIntro": "The imperative form is crucial for directives and commands:",
        "gTermA": "ita",
        "gDescA": "call (imperative)",
        "gExA": "ita askari — call the police",
        "gTermB": "kimbia",
        "gDescB": "run",
        "gExB": "kimbia haraka — run quickly",
        "clip": "Asubuhi ya dharura Nairobi street",
        "podcast": "Dharura na Moses — kipindi 9",
        "article": "Kurudisha usalama na imani Afrika Mashariki",
        "reader": [
          {
            "t": "Wakati wa dharura, ni muhimu "
          },
          {
            "w": "kuponda",
            "d": "to hurry"
          },
          {
            "t": " na kufika mahali salama. "
          },
          {
            "w": "Jirani",
            "d": "Neighbor"
          },
          {
            "t": " anayeweza kusaidia ni muhimu sana."
          }
        ],
        "reviewWord": "dhurura",
        "reviewSource": "from your emergency response, last week",
        "reviewMeaning": "emergency"
      }
    ]
  },
  "sv": {
    "name": "Swedish",
    "flag": "🇸🇪",
    "code": "SV",
    "font": "",
    "locale": "sv-SE",
    "greeting": "God morgon, Maya",
    "accent": "Sweden (Stockholm)",
    "chapters": [
      {
        "chapterTitle": "Chapter 1 · På fiket",
        "lessonTitle": "Greetings & warmth",
        "goalTitle": "Build it: order a coffee",
        "goalLine": "Order a coffee — and learn to fika.",
        "goalShort": "order a coffee",
        "scenario": "cafe",
        "partnerName": "Elsa",
        "partnerInitial": "E",
        "partnerRole": "barista",
        "partnerPlace": "Stockholm fik",
        "scenarioTitle": "På fiket · Stockholm",
        "scenarioSub": "Roleplay · order & a cozy chat",
        "lessonPromptEn": "I would like a coffee, please.",
        "lessonHint": "Why “skulle vilja”?",
        "bank": [
          "Jag skulle vilja ha",
          "en kaffe",
          "tack",
          "notan",
          "vatten",
          "utan"
        ],
        "bankEn": [
          "I would like",
          "a coffee",
          "thank you",
          "the bill",
          "water",
          "without"
        ],
        "correct": [
          0,
          1,
          2
        ],
        "lessonCorrectTitle": "Perfekt! 🎉",
        "lessonCorrectBody": "“skulle vilja ha” (would like to have) is the polite order; “tack” covers both please and thanks.",
        "lessonWrongBody": "Start with the polite “I would like to have,” then the item.",
        "cultureCaption": "A fik in Stockholm · 3pm",
        "cultureTitle": "Fika is a national pause",
        "cultureBody": "“Fika” is more than a coffee break — it's a daily ritual of slowing down, usually with a cinnamon bun, alone or with others. Swedes take it seriously; workplaces stop for it. There's no rushing, no upselling, and “lagom” (just the right amount) rules everything.",
        "culturePhrase": "“Tack” does a lot of work — it's please, thank you, and yes please, depending on tone.",
        "milestoneTitle": "You can now order a coffee — and fika like a Swede.",
        "convo": [
          {
            "who": "p",
            "n": "God morgon! Vad vill du ha?",
            "en": "Good morning! What would you like?"
          },
          {
            "who": "u",
            "n": "Jag skulle vilja ha en kaffe, tack.",
            "fb": "Great — “skulle vilja ha” is nicely polite"
          },
          {
            "who": "p",
            "n": "Visst. Något mer?",
            "en": "Sure. Anything else?"
          },
          {
            "who": "u",
            "n": "Nej tack. Notan, tack.",
            "fb": "Perfect — “notan” = the bill"
          },
          {
            "who": "p",
            "n": "Självklart, trettio kronor.",
            "en": "Of course — thirty kronor."
          }
        ],
        "debrief": [
          {
            "title": "“tack” is everything",
            "body": "You used it for both please and thanks — exactly how Swedes do."
          },
          {
            "title": "Pitch accent",
            "body": "Swedish has a melodic two-tone accent — “kaffe” rises then falls slightly."
          }
        ],
        "grammarMini": "en / ett",
        "grammarTitle": "“en” vs “ett” — the two genders",
        "grammarIntro": "Swedish nouns are either “en” words or “ett” words — you simply learn which:",
        "gTermA": "en kaffe",
        "gDescA": "common gender (most nouns)",
        "gExA": "en kaffe, en bulle",
        "gTermB": "ett bord",
        "gDescB": "neuter gender",
        "gExB": "ett bord, ett glas",
        "clip": "Morgonmarknaden i Stockholm, med lokalbor",
        "podcast": "Kaffe med Elsa — avsnitt 4",
        "article": "Den lilla ritualen som heter fika",
        "reader": [
          {
            "t": "I Sverige tar många en paus på ett "
          },
          {
            "w": "fik",
            "d": "café (a cozy coffee spot)"
          },
          {
            "t": ". De dricker kaffe långsamt och "
          },
          {
            "w": "pratar",
            "d": "talk / chat (from prata)"
          },
          {
            "t": ". Till servitören säger man "
          },
          {
            "w": "tack",
            "d": "thanks / please"
          },
          {
            "t": ". Det kallas fika — en mysig stund."
          }
        ],
        "reviewWord": "notan",
        "reviewSource": "from your fika, 2 days ago",
        "reviewMeaning": "the bill / check (notan)"
      },
      {
        "chapterTitle": "Chapter 2 · Vägbeskrivningar",
        "lessonTitle": "Asking for Directions",
        "goalTitle": "Find it: the way to the museum",
        "goalLine": "Ask how to get to the museum — without getting lost.",
        "goalShort": "directions to the museum",
        "scenario": "directions",
        "partnerName": "Lars",
        "partnerInitial": "L",
        "partnerRole": "local resident",
        "partnerPlace": "Old Town, Stockholm",
        "scenarioTitle": "Vägbeskrivningar · Gamla stan",
        "scenarioSub": "Roleplay · navigating a new city",
        "lessonPromptEn": "Excuse me, how do I get to the museum?",
        "lessonHint": "Why “hur tar jag mig till”?",
        "bank": [
          "Ursäkta",
          "hur tar jag mig till",
          "museet",
          "vänster",
          "höger",
          "rakt fram"
        ],
        "bankEn": [
          "Excuse me",
          "how do I get to",
          "the museum",
          "left",
          "right",
          "straight ahead"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "Perfekt! 🎉",
        "lessonCorrectBody": "“hur tar jag mig till” means asking for a destination; use direction words like “vänster” and “höger.”",
        "lessonWrongBody": "Begin with “Excuse me” and ask how to reach your destination.",
        "cultureCaption": "Asking directions in Stockholm",
        "cultureTitle": "Navigating the city",
        "cultureBody": "Swedes are helpful and direct; maps and apps are common, but personal assistance is appreciated. Use polite phrases.",
        "culturePhrase": "“Ursäkta” is key to starting a conversation politely.",
        "milestoneTitle": "You can now ask for directions and explore confidently.",
        "convo": [
          {
            "who": "p",
            "n": "Ursäkta, kan jag hjälpa dig?",
            "en": "Excuse me, may I help you?"
          },
          {
            "who": "u",
            "n": "Ja, hur tar jag mig till museet?",
            "fb": "Great — direct question for directions"
          },
          {
            "who": "p",
            "n": "Gå rakt fram och sväng sedan vänster.",
            "en": "Go straight ahead, then turn left."
          },
          {
            "who": "u",
            "n": "Tack så mycket!",
            "fb": "Perfect — gratitude is appreciated"
          },
          {
            "who": "p",
            "n": "Inga problem, ha en trevlig dag!",
            "en": "No problem, have a nice day!"
          }
        ],
        "debrief": [
          {
            "title": "Polite inquiries",
            "body": "Starting with “ursäkta” helps open doors to friendly guidance."
          },
          {
            "title": "Directional phrases",
            "body": "Get familiar with key direction words like “vänster” and “höger.”"
          }
        ],
        "grammarMini": "present tense verbs",
        "grammarTitle": "Asking with ‘hur’",
        "grammarIntro": "Using ‘hur’ for directions — structure your questions:",
        "gTermA": "hur",
        "gDescA": "how",
        "gExA": "Hur tar jag mig till museet?",
        "gTermB": "går",
        "gDescB": "present tense",
        "gExB": "Jag går rakt fram."
      },
      {
        "chapterTitle": "Chapter 3 · Familjen",
        "lessonTitle": "Talking about Family",
        "goalTitle": "Introduce your family",
        "goalLine": "Describe your family — start with the basics.",
        "goalShort": "introduce family",
        "scenario": "family",
        "partnerName": "Sofia",
        "partnerInitial": "S",
        "partnerRole": "friend",
        "partnerPlace": "Södermalm",
        "scenarioTitle": "Familjen · Södermalm",
        "scenarioSub": "Roleplay · sharing family stories",
        "lessonPromptEn": "This is my sister.",
        "lessonHint": "Why ‘det här är’?",
        "bank": [
          "det här är",
          "min syster",
          "min bror",
          "pappa",
          "mamma",
          "familj"
        ],
        "bankEn": [
          "this is",
          "my sister",
          "my brother",
          "dad",
          "mom",
          "family"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "Perfekt! 🎉",
        "lessonCorrectBody": "“det här är” introduces people and things; use possessive forms.",
        "lessonWrongBody": "Start with ‘this is’ then introduce a family member.",
        "cultureCaption": "Family ties in Sweden",
        "cultureTitle": "Families and seasons",
        "cultureBody": "Family gatherings are important in Swedish life, often celebrated during seasonal holidays like Midsommar.",
        "culturePhrase": "“Familj” is central — start with close relations.",
        "milestoneTitle": "You can introduce family members confidently.",
        "convo": [
          {
            "who": "p",
            "n": "Hej! Vem är det här?",
            "en": "Hi! Who is this?"
          },
          {
            "who": "u",
            "n": "Det här är min syster.",
            "fb": "Nicely introduced — ‘det här är’ works well"
          },
          {
            "who": "p",
            "n": "Trevligt att träffas. Är ni nära?",
            "en": "Nice to meet you. Are you close?"
          },
          {
            "who": "u",
            "n": "Ja, vi är bästa vänner också.",
            "fb": "Great addition — talking about closeness"
          },
          {
            "who": "p",
            "n": "Så härligt! Familj är viktigt.",
            "en": "That's wonderful! Family is important."
          }
        ],
        "debrief": [
          {
            "title": "Introducing family",
            "body": "“det här är” is your go-to phrase."
          },
          {
            "title": "Possessive pronouns",
            "body": "Learn “min,” “mitt,” and “mina” for singular, singular neutral, and plural possessions."
          }
        ],
        "grammarMini": "possessive pronouns",
        "grammarTitle": "“min/mitt/mina” — possession forms",
        "grammarIntro": "Swedish uses different forms based on possession:",
        "gTermA": "min",
        "gDescA": "for en-words",
        "gExA": "min syster, min bror",
        "gTermB": "mitt",
        "gDescB": "for ett-words",
        "gExB": "mitt hus, mitt rum"
      },
      {
        "chapterTitle": "Chapter 4 · Hotellet",
        "lessonTitle": "Checking into a Hotel",
        "goalTitle": "Book it: hotel stay",
        "goalLine": "Reserve a room and check into your Swedish hotel.",
        "goalShort": "hotel reservation",
        "scenario": "hotel",
        "partnerName": "Erik",
        "partnerInitial": "E",
        "partnerRole": "hotel receptionist",
        "partnerPlace": "Central Hotel, Stockholm",
        "scenarioTitle": "Hotellet · Stockholm",
        "scenarioSub": "Roleplay · settling into your stay",
        "lessonPromptEn": "I have a reservation.",
        "lessonHint": "Mind the verb “har”",
        "bank": [
          "jag har",
          "en reservation",
          "ett rum",
          "för natten",
          "en natt",
          "två nätter"
        ],
        "bankEn": [
          "I have",
          "a reservation",
          "a room",
          "for the night",
          "one night",
          "two nights"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "Perfekt! 🎉",
        "lessonCorrectBody": "Use “jag har” when you possess something like a reservation or booking.",
        "lessonWrongBody": "Start with ‘I have’ to state possession of your reservation.",
        "cultureCaption": "Checking into a local hotel",
        "cultureTitle": "Hotel practices",
        "cultureBody": "Swedes appreciate punctuality and clear communication; check-in processes are straightforward with minimal fuss.",
        "culturePhrase": "“Reservation” remains simple in Swedish usage",
        "milestoneTitle": "You can now book and check into a hotel skillfully.",
        "convo": [
          {
            "who": "p",
            "n": "Välkommen! Har du en bokning?",
            "en": "Welcome! Do you have a booking?"
          },
          {
            "who": "u",
            "n": "Ja, jag har en reservation.",
            "fb": "Right on — expressing your room reservation"
          },
          {
            "who": "p",
            "n": "För hur många nätter?",
            "en": "For how many nights?"
          },
          {
            "who": "u",
            "n": "Två nätter, tack.",
            "fb": "Spot on — clear duration for the stay"
          },
          {
            "who": "p",
            "n": "Självklart, här är nyckeln.",
            "en": "Certainly, here is the key."
          }
        ],
        "debrief": [
          {
            "title": "Making reservations",
            "body": "Use ‘jag har’ for stating confirmed reservations."
          },
          {
            "title": "Duration phrases",
            "body": "Practice common length-of-stay terms like ‘en natt’ and ‘två nätter.’"
          }
        ],
        "grammarMini": "regular verbs in present",
        "grammarTitle": "“har” — present tense possession",
        "grammarIntro": "Express ownership with ‘har,’ essential for statements of possession.",
        "gTermA": "har",
        "gDescA": "to have (present tense)",
        "gExA": "Jag har ett rum.",
        "gTermB": "kommer",
        "gDescB": "to come (present tense)",
        "gExB": "Jag kommer från USA."
      },
      {
        "chapterTitle": "Chapter 5 · Marknaden",
        "lessonTitle": "Shopping at the Market",
        "goalTitle": "Buy it: fresh vegetables",
        "goalLine": "Navigate buying fresh produce at a Swedish market.",
        "goalShort": "buy fresh produce",
        "scenario": "market",
        "partnerName": "Frida",
        "partnerInitial": "F",
        "partnerRole": "vendor",
        "partnerPlace": "Farmers' Market, Stockholm",
        "scenarioTitle": "Marknaden · Bondens marknad",
        "scenarioSub": "Roleplay · buying local and fresh",
        "lessonPromptEn": "I would like two apples.",
        "lessonHint": "Use quantity with ‘skulle vilja ha’",
        "bank": [
          "jag skulle vilja ha",
          "två äpplen",
          "morötter",
          "tomater",
          "hur mycket",
          "kostar det"
        ],
        "bankEn": [
          "I would like",
          "two apples",
          "carrots",
          "tomatoes",
          "how much",
          "does it cost"
        ],
        "correct": [
          0,
          1,
          3,
          5
        ],
        "lessonCorrectTitle": "Perfekt! 🎉",
        "lessonCorrectBody": "Add specific quantities for clarity with ‘skulle vilja ha’.",
        "lessonWrongBody": "Open with ‘I would like’ before specifying your purchase.",
        "cultureCaption": "A vibrant market scene",
        "cultureTitle": "Market manners",
        "cultureBody": "Swedes value local produce and friendly interactions. Pay attention to sustainable choices and ask about origins.",
        "culturePhrase": "“Hur mycket kostar det” is essential for transaction clarity.",
        "milestoneTitle": "You can shop at the market confidently, like a local.",
        "convo": [
          {
            "who": "p",
            "n": "Hej! Vad skulle du vilja köpa?",
            "en": "Hello! What would you like to buy?"
          },
          {
            "who": "u",
            "n": "Jag skulle vilja ha två äpplen.",
            "fb": "Nice — constrained and intent right"
          },
          {
            "who": "p",
            "n": "Gärna, något mer?",
            "en": "Sure, anything else?"
          },
          {
            "who": "u",
            "n": "Nej tack. Hur mycket kostar det?",
            "fb": "Always useful — asking for price"
          },
          {
            "who": "p",
            "n": "Det blir tjugofem kronor.",
            "en": "That'll be twenty-five kronor."
          }
        ],
        "debrief": [
          {
            "title": "Shopping dialogue",
            "body": "Maintain a friendly tone and state quantities clearly."
          },
          {
            "title": "Cost inquiries",
            "body": "Familiarize yourself with asking prices and handling currency."
          }
        ],
        "grammarMini": "quantities and pricing",
        "grammarTitle": "Expressing amounts",
        "grammarIntro": "Adding numbers to phrases for clarity:",
        "gTermA": "två",
        "gDescA": "two",
        "gExA": "två äpplen, två morötter",
        "gTermB": "hur mycket",
        "gDescB": "how much",
        "gExB": "Hur mycket kostar tomaterna?"
      },
      {
        "chapterTitle": "Chapter 6 · Nödsituation",
        "lessonTitle": "Emergency Situations",
        "goalTitle": "Call it: emergency help",
        "goalLine": "Reach out for help in emergencies with precise Swedish.",
        "goalShort": "emergency assistance",
        "scenario": "emergency",
        "partnerName": "Anna",
        "partnerInitial": "A",
        "partnerRole": "emergency operator",
        "partnerPlace": "Stockholm emergency services",
        "scenarioTitle": "Nödcentral · Stockholm",
        "scenarioSub": "Roleplay · handling urgent situations",
        "lessonPromptEn": "Help, I have an emergency.",
        "lessonHint": "Use “hjälp” and “nödsituation” together",
        "bank": [
          "hjälp",
          "jag har en",
          "nödsituation",
          "skynda",
          "olycka",
          "brand"
        ],
        "bankEn": [
          "help",
          "I have an",
          "emergency",
          "hurry",
          "accident",
          "fire"
        ],
        "correct": [
          0,
          1,
          2,
          5
        ],
        "lessonCorrectTitle": "Perfekt! 🎉",
        "lessonCorrectBody": "“Hjälp” followed by your situation gets quick attention.",
        "lessonWrongBody": "Start with a clear call for help, stating your emergency.",
        "cultureCaption": "Emergency response in Sweden",
        "cultureTitle": "Efficient Systems",
        "cultureBody": "Sweden prides itself on effective emergency services — clear communication is critical.",
        "culturePhrase": "‘Hjälp’ is instinctive — use it clearly and confidently.",
        "milestoneTitle": "You can call for emergency help accurately.",
        "convo": [
          {
            "who": "p",
            "n": "112, vad har hänt?",
            "en": "112, what has happened?"
          },
          {
            "who": "u",
            "n": "Hjälp, jag har en nödsituation.",
            "fb": "Well composed — stating the urgency well"
          },
          {
            "who": "p",
            "n": "Var är du just nu?",
            "en": "Where are you right now?"
          },
          {
            "who": "u",
            "n": "Jag är på Storgatan, skynda!",
            "fb": "Exact and to point — location matters"
          },
          {
            "who": "p",
            "n": "Hjälp är på väg, håll ut.",
            "en": "Help is on the way, hold on."
          }
        ],
        "debrief": [
          {
            "title": "Staying calm",
            "body": "In emergencies, staying clear and calm is pivotal."
          },
          {
            "title": "Location details",
            "body": "Provide accurate location information for swift assistance."
          }
        ],
        "grammarMini": "imperatives and emergencies",
        "grammarTitle": "Using necessities: ‘hjälp’",
        "grammarIntro": "The imperative form gets attention fast — crucial in urgent situations.",
        "gTermA": "hjälp",
        "gDescA": "help (imperative)",
        "gExA": "Hjälp mig!",
        "gTermB": "skynda",
        "gDescB": "hurry (imperative)",
        "gExB": "Skynda dig!"
      }
    ]
  },
  "ro": {
    "name": "Romanian",
    "flag": "🇷🇴",
    "code": "RO",
    "font": "",
    "locale": "ro-RO",
    "greeting": "Bună dimineața, Maya",
    "accent": "Romania (Bucharest)",
    "chapters": [
      {
        "chapterTitle": "Chapter 1 · La cafenea",
        "lessonTitle": "Greetings & warmth",
        "goalTitle": "Build it: order a coffee",
        "goalLine": "Order a coffee — politely, in Romanian.",
        "goalShort": "order a coffee",
        "scenario": "cafe",
        "partnerName": "Andrei",
        "partnerInitial": "A",
        "partnerRole": "ospătar",
        "partnerPlace": "Bucharest café",
        "scenarioTitle": "La cafenea · Bucharest",
        "scenarioSub": "Roleplay · order & a warm exchange",
        "lessonPromptEn": "I would like a coffee, please.",
        "lessonHint": "Why “aș dori”?",
        "bank": [
          "Aș dori",
          "o cafea",
          "vă rog",
          "nota",
          "apă",
          "ceai"
        ],
        "bankEn": [
          "I would like",
          "a coffee",
          "please",
          "the bill",
          "water",
          "tea"
        ],
        "correct": [
          0,
          1,
          2
        ],
        "lessonCorrectTitle": "Perfect! 🎉",
        "lessonCorrectBody": "“Aș dori” (I would like) is the polite conditional — softer than “vreau” (I want).",
        "lessonWrongBody": "Start with the polite “I would like,” then the item, then “vă rog.”",
        "cultureCaption": "A café in Bucharest · morning",
        "cultureTitle": "A Latin soul in Eastern Europe",
        "cultureBody": "Romanian is a Romance language in a Slavic neighbourhood, and the culture mixes Latin warmth with local depth. Coffee comes with unhurried conversation, and hospitality runs deep — a guest is often pressed to eat and stay. Politeness with “vă rog” opens every door.",
        "culturePhrase": "“Mulțumesc” — thank you; “vă rog” is please (and “poftiți” means here you go).",
        "milestoneTitle": "You can now order a coffee — politely, in Romanian.",
        "convo": [
          {
            "who": "p",
            "n": "Bună dimineața! Ce doriți?",
            "en": "Good morning! What would you like?"
          },
          {
            "who": "u",
            "n": "Aș dori o cafea, vă rog.",
            "fb": "Great — “aș dori … vă rog” is polite and natural"
          },
          {
            "who": "p",
            "n": "Sigur. Altceva?",
            "en": "Sure. Anything else?"
          },
          {
            "who": "u",
            "n": "Nu, mulțumesc. Nota, vă rog.",
            "fb": "Perfect — “nota” = the bill"
          },
          {
            "who": "p",
            "n": "Desigur, cinci lei.",
            "en": "Of course — five lei."
          }
        ],
        "debrief": [
          {
            "title": "Gender of nouns",
            "body": "“Cafea” is feminine, so it's “o cafea” — the article matches gender."
          },
          {
            "title": "Special letters ă, î, ș",
            "body": "Romanian has its own diacritics — “ș” is “sh,” “ț” is “ts.”"
          }
        ],
        "grammarMini": "articles",
        "grammarTitle": "The article hides at the end of the word",
        "grammarIntro": "Romanian sticks “the” onto the END of the noun, unlike most Romance languages:",
        "gTermA": "o cafea",
        "gDescA": "“a coffee” — article before",
        "gExA": "Aș dori o cafea.",
        "gTermB": "cafeaua",
        "gDescB": "“the coffee” — article suffixed",
        "gExB": "Cafeaua e bună.",
        "clip": "Piața de dimineață din București, cu localnicii",
        "podcast": "Cafea cu Andrei — episodul 4",
        "article": "Micul ritual al cafelei românești",
        "reader": [
          {
            "t": "În România, mulți oameni petrec timp la o "
          },
          {
            "w": "cafenea",
            "d": "café (cafenea)"
          },
          {
            "t": ". Beau cafeaua încet și "
          },
          {
            "w": "vorbesc",
            "d": "talk / chat (from a vorbi)"
          },
          {
            "t": ". Ospătarului îi spun "
          },
          {
            "w": "mulțumesc",
            "d": "thank you (mulțumesc)"
          },
          {
            "t": ". E un moment plăcut al zilei."
          }
        ],
        "reviewWord": "nota",
        "reviewSource": "from your café visit, 2 days ago",
        "reviewMeaning": "the bill / check (nota)"
      },
      {
        "chapterTitle": "Chapter 2 · Direcții",
        "lessonTitle": "Navigate & find your way",
        "goalTitle": "Build it: ask for directions",
        "goalLine": "Ask for directions to a nearby place — confidently, in Romanian.",
        "goalShort": "ask for directions",
        "scenario": "directions",
        "partnerName": "Mihai",
        "partnerInitial": "M",
        "partnerRole": "localnic",
        "partnerPlace": "Piața Unirii, Bucharest",
        "scenarioTitle": "Direcțiile · Piața Unirii",
        "scenarioSub": "Roleplay · asking & understanding directions",
        "lessonPromptEn": "How do I get to the train station, please?",
        "lessonHint": "Why “cum ajung”?",
        "bank": [
          "Cum ajung",
          "la gară",
          "vă rog",
          "stânga",
          "dreapta",
          "înainte"
        ],
        "bankEn": [
          "How do I get",
          "to the station",
          "please",
          "left",
          "right",
          "straight"
        ],
        "correct": [
          0,
          1,
          2,
          5
        ],
        "lessonCorrectTitle": "Well done! 🎉",
        "lessonCorrectBody": "“Cum ajung” is perfect for asking directions politely.",
        "lessonWrongBody": "Begin with “Cum ajung,” then follow with the destination and “vă rog.”",
        "cultureCaption": "A bustling square in Bucharest",
        "cultureTitle": "Romanian hospitality continued",
        "cultureBody": "Locals are approachable and often eager to help with directions. 'Vă rog' and 'mulțumesc' ensure you’re greeted warmly.",
        "culturePhrase": "“Scuzați-mă” — excuse me; “mulțumesc” — thank you.",
        "milestoneTitle": "You can now ask for directions in Romanian.",
        "convo": [
          {
            "who": "p",
            "n": "Bună ziua! Pot să vă ajut?",
            "en": "Good afternoon! Can I help you?"
          },
          {
            "who": "u",
            "n": "Cum ajung la gară, vă rog?",
            "fb": "Excellent — very polite and correct"
          },
          {
            "who": "p",
            "n": "Mergeți înainte, apoi la dreapta.",
            "en": "Go straight, then right."
          },
          {
            "who": "u",
            "n": "Mulțumesc mult!",
            "fb": "Polite and appreciative"
          },
          {
            "who": "p",
            "n": "Cu plăcere! Drum bun!",
            "en": "You're welcome! Have a nice journey!"
          }
        ],
        "debrief": [
          {
            "title": "Polite verbs",
            "body": "“Ajungeți” is the polite form — always useful!"
          },
          {
            "title": "Pronunciation",
            "body": "“g” in “gară” is always hard, like in “go.”"
          }
        ],
        "grammarMini": "directions",
        "grammarTitle": "Prepositions & directions",
        "grammarIntro": "Learn how directions and prepositions work harmoniously in Romanian:",
        "gTermA": "înainte",
        "gDescA": "“straight ahead” — singular command",
        "gExA": "Mergeți înainte!",
        "gTermB": "în dreapta",
        "gDescB": "“to the right” — used with the verb 'a merge'",
        "gExB": "Faceți în dreapta."
      },
      {
        "chapterTitle": "Chapter 3 · Familie",
        "lessonTitle": "Introducing & inquiring",
        "goalTitle": "Build it: talk about family",
        "goalLine": "Introduce and inquire about family in Romanian.",
        "goalShort": "talk about family",
        "scenario": "family",
        "partnerName": "Elena",
        "partnerInitial": "E",
        "partnerRole": "vecină",
        "partnerPlace": "Blocul din București",
        "scenarioTitle": "Familia · În blocul din București",
        "scenarioSub": "Roleplay · introductions & relationships",
        "lessonPromptEn": "This is my sister. What about you?",
        "lessonHint": "Why “aceasta”?",
        "bank": [
          "Aceasta este",
          "sora mea",
          "tu",
          "fratele tău",
          "verișoara",
          "familie"
        ],
        "bankEn": [
          "This is",
          "my sister",
          "you",
          "your brother",
          "cousin",
          "family"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "You did it! 🎉",
        "lessonCorrectBody": "“Aceasta” introduces someone — simple and clear.",
        "lessonWrongBody": "Introduce with “Aceasta este,” then the relative.",
        "cultureCaption": "Family gathering in Romania",
        "cultureTitle": "Family is at the core",
        "cultureBody": "Romanians value family deeply. Conversations often revolve around kinship and shared memories.",
        "culturePhrase": "“Bunica” — grandmother; “unchi” — uncle.",
        "milestoneTitle": "You can now chat about family connections.",
        "convo": [
          {
            "who": "p",
            "n": "Bună! Cum te cheamă?",
            "en": "Hi! What's your name?"
          },
          {
            "who": "u",
            "n": "Sunt Alex. Aceasta este sora mea.",
            "fb": "Great introduction to family members"
          },
          {
            "who": "p",
            "n": "Frumoasă familie! Îți place să locuiești aici?",
            "en": "Beautiful family! Do you like living here?"
          },
          {
            "who": "u",
            "n": "Da, foarte mult. Dar voi?",
            "fb": "Good follow-up and polite interest"
          },
          {
            "who": "p",
            "n": "Și nouă ne place. Locuitul aici e minunat.",
            "en": "We like it too. Living here is wonderful."
          }
        ],
        "debrief": [
          {
            "title": "Possessive clarity",
            "body": "“Mea” and “tău” are possessive forms — consistency matters!"
          },
          {
            "title": "Romanian names",
            "body": "Names often reflect cultural or historical significance."
          }
        ],
        "grammarMini": "possessives",
        "grammarTitle": "Possessions are personal",
        "grammarIntro": "Observe the flexibility in Romanian possessives:",
        "gTermA": "sora mea",
        "gDescA": "“my sister” — possessive after noun",
        "gExA": "Aceasta este sora mea.",
        "gTermB": "fratele tău",
        "gDescB": "“your brother” — possessive after noun",
        "gExB": "Acela este fratele tău."
      },
      {
        "chapterTitle": "Chapter 4 · Hotel",
        "lessonTitle": "Booking & staying",
        "goalTitle": "Build it: book a hotel room",
        "goalLine": "Reserve a hotel room in Romanian.",
        "goalShort": "book a room",
        "scenario": "hotel",
        "partnerName": "Raluca",
        "partnerInitial": "R",
        "partnerRole": "recepționeră",
        "partnerPlace": "Hotel Central, București",
        "scenarioTitle": "La hotel · Hotel Central",
        "scenarioSub": "Roleplay · reserving lodging & check-in",
        "lessonPromptEn": "I would like a room for two nights, please.",
        "lessonHint": "Why “aș vrea” instead of “vreau”?",
        "bank": [
          "Aș vrea",
          "o cameră",
          "două nopți",
          "vă rog",
          "reținută",
          "cheie"
        ],
        "bankEn": [
          "I would like",
          "a room",
          "two nights",
          "please",
          "reserved",
          "key"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "Great success! 🎉",
        "lessonCorrectBody": "“Aș vrea” is softer and suitable for requests.",
        "lessonWrongBody": "Start with “Aș vrea,” specify the details, add “vă rog.”",
        "cultureCaption": "Hotel reception in Bucharest",
        "cultureTitle": "Courteous requests matter",
        "cultureBody": "Politeness is key in Romania, especially in service encounters. Use “vă rog” at every opportunity.",
        "culturePhrase": "“Cameră” — room; “cheie” — key.",
        "milestoneTitle": "You can now book a room comfortably.",
        "convo": [
          {
            "who": "p",
            "n": "Bună ziua! Cum vă pot ajuta?",
            "en": "Good day! How can I help you?"
          },
          {
            "who": "u",
            "n": "Aș vrea o cameră pentru două nopți, vă rog.",
            "fb": "Perfect booking expression!"
          },
          {
            "who": "p",
            "n": "Sigur, avem disponibilitate. Pot să vă dau o cheie.",
            "en": "Sure, we have availability. I'll get you a key."
          },
          {
            "who": "u",
            "n": "Mulțumesc pentru ajutor!",
            "fb": "Gratitude is always appreciated"
          },
          {
            "who": "p",
            "n": "Cu plăcere! Să aveți un sejur plăcut.",
            "en": "You're welcome! Have a pleasant stay."
          }
        ],
        "debrief": [
          {
            "title": "Conditional politeness",
            "body": "“Aș vrea” versus “Vreau” — modal verbs soften commands."
          },
          {
            "title": "Reservation lingo",
            "body": "“Reținută” for reserved status; instant confirmation."
          }
        ],
        "grammarMini": "verbs",
        "grammarTitle": "Modal verbs open doors",
        "grammarIntro": "Explore how to soften requests in Romanian:",
        "gTermA": "aș vrea",
        "gDescA": "“I would like” — polite conditional",
        "gExA": "Aș vrea o cameră.",
        "gTermB": "vreau",
        "gDescB": "“I want” — direct assertion",
        "gExB": "Vreau o cameră."
      },
      {
        "chapterTitle": "Chapter 5 · Piață",
        "lessonTitle": "Bargain & purchase",
        "goalTitle": "Build it: buy local produce",
        "goalLine": "Negotiate and buy produce at the market in Romanian.",
        "goalShort": "buy produce",
        "scenario": "market",
        "partnerName": "Ion",
        "partnerInitial": "I",
        "partnerRole": "vânzător",
        "partnerPlace": "Piața Obor, București",
        "scenarioTitle": "La piață · Piața Obor",
        "scenarioSub": "Roleplay · buying & bargaining",
        "lessonPromptEn": "How much are the apples, please?",
        "lessonHint": "Why “Cât costă”?",
        "bank": [
          "Cât costă",
          "merele",
          "vă rog",
          "reducere",
          "legume",
          "fructe"
        ],
        "bankEn": [
          "How much are",
          "the apples",
          "please",
          "discount",
          "vegetables",
          "fruits"
        ],
        "correct": [
          0,
          1,
          2,
          4
        ],
        "lessonCorrectTitle": "Excellent! 🎉",
        "lessonCorrectBody": "“Cât costă” is the go-to for asking prices.",
        "lessonWrongBody": "Begin with “Cât costă,” specify the item, end with “vă rog.”",
        "cultureCaption": "Market vibes in Romania",
        "cultureTitle": "Markets are a social hub",
        "cultureBody": "Romanian markets are lively and full of friendly banter. Always remember to negotiate with a smile.",
        "culturePhrase": "“Tarabă” — stall; “piață” — market.",
        "milestoneTitle": "You can now buy and bargain at a market.",
        "convo": [
          {
            "who": "p",
            "n": "Bună! Ce doriți să cumpărați?",
            "en": "Hello! What would you like to buy?"
          },
          {
            "who": "u",
            "n": "Cât costă merele, vă rog?",
            "fb": "Great question for negotiating prices"
          },
          {
            "who": "p",
            "n": "Cinci lei kilogramul. Vreți două kilograme?",
            "en": "Five lei per kilogram. Want two kilos?"
          },
          {
            "who": "u",
            "n": "Da, și o reducere, vă rog.",
            "fb": "Bold but polite negotiating"
          },
          {
            "who": "p",
            "n": "Sigur, să fie patru lei! Mulțumesc.",
            "en": "Sure, four lei it is! Thank you."
          }
        ],
        "debrief": [
          {
            "title": "Price questions",
            "body": "“Cât costă” is universal for price inquiries."
          },
          {
            "title": "Market lingo",
            "body": "“Reducere” brings deals — always worth trying!"
          }
        ],
        "grammarMini": "questions",
        "grammarTitle": "Question words lead the way",
        "grammarIntro": "Learn to inquire effectively:",
        "gTermA": "Cât costă",
        "gDescA": "“How much is” — start of a price question",
        "gExA": "Cât costă legumele?",
        "gTermB": "Cât",
        "gDescB": "“How much” — universal quantifier",
        "gExB": "Cât e totalul?"
      },
      {
        "chapterTitle": "Chapter 6 · Urgențe",
        "lessonTitle": "React & assist",
        "goalTitle": "Build it: handle emergencies",
        "goalLine": "Communicate in an emergency — efficiently, in Romanian.",
        "goalShort": "handle emergencies",
        "scenario": "emergency",
        "partnerName": "Marcel",
        "partnerInitial": "M",
        "partnerRole": "trecător",
        "partnerPlace": "Stradă din București",
        "scenarioTitle": "În caz de urgență · Pe stradă",
        "scenarioSub": "Roleplay · emergencies & assistance",
        "lessonPromptEn": "I need help, please call an ambulance.",
        "lessonHint": "Why “am nevoie de” instead of “îmi trebuie”?",
        "bank": [
          "Am nevoie de",
          "ajutor",
          "vă rog",
          "sunați",
          "ambulanța",
          "medic"
        ],
        "bankEn": [
          "I need",
          "help",
          "please",
          "call",
          "ambulance",
          "doctor"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "Courageous action! 🎉",
        "lessonCorrectBody": "“Am nevoie de” is straightforward and urgent.",
        "lessonWrongBody": "Say “Am nevoie de,” specify the help needed, then “vă rog.”",
        "cultureCaption": "Street scene in Romania",
        "cultureTitle": "Preparedness can save lives",
        "cultureBody": "In Romania, emergencies are handled with care and urgency. Know key phrases and be proactive.",
        "culturePhrase": "“Salvare” — rescue; “poliție” — police.",
        "milestoneTitle": "You can now handle emergencies with composure.",
        "convo": [
          {
            "who": "p",
            "n": "Ce s-a întâmplat? Sunteți bine?",
            "en": "What happened? Are you okay?"
          },
          {
            "who": "u",
            "n": "Am nevoie de ajutor, vă rog sunați ambulanța.",
            "fb": "Direct and necessary urgency"
          },
          {
            "who": "p",
            "n": "Clar, sun la 112 acum.",
            "en": "Sure, I’m calling 112 now."
          },
          {
            "who": "u",
            "n": "Mulțumesc pentru ajutorul rapid.",
            "fb": "Responsive gratitude in a crisis"
          },
          {
            "who": "p",
            "n": "Nu vă faceți griji, e bine să fiți ajutat.",
            "en": "Don't worry, it’s good to help."
          }
        ],
        "debrief": [
          {
            "title": "Expressing urgency",
            "body": "“Am nevoie de” for urgent needs — skip “îmi trebuie” here."
          },
          {
            "title": "Emergency assistance",
            "body": "112 is Romania's go-to emergency contact — memorize it."
          }
        ],
        "grammarMini": "essential phrases",
        "grammarTitle": "Expressions in dire need",
        "grammarIntro": "Prioritize efficiency with these key phrases:",
        "gTermA": "Am nevoie de",
        "gDescA": "“I need” — used for urgency",
        "gExA": "Am nevoie de un medic.",
        "gTermB": "sunați",
        "gDescB": "“call” — imperative for immediate action",
        "gExB": "Sunați ambulanța!"
      }
    ]
  },
  "cs": {
    "name": "Czech",
    "flag": "🇨🇿",
    "code": "CS",
    "font": "",
    "locale": "cs-CZ",
    "greeting": "Dobré ráno, Maya",
    "accent": "Czechia (Prague)",
    "chapters": [
      {
        "chapterTitle": "Chapter 1 · V kavárně",
        "lessonTitle": "Greetings & warmth",
        "goalTitle": "Build it: order a coffee",
        "goalLine": "Order a coffee — politely, in Czech.",
        "goalShort": "order a coffee",
        "scenario": "cafe",
        "partnerName": "Petra",
        "partnerInitial": "P",
        "partnerRole": "číšnice",
        "partnerPlace": "Prague kavárna",
        "scenarioTitle": "V kavárně · Prague",
        "scenarioSub": "Roleplay · order & a quiet exchange",
        "lessonPromptEn": "I would like a coffee, please.",
        "lessonHint": "Why “bych chtěl(a)”?",
        "bank": [
          "Chtěl bych",
          "kávu",
          "prosím",
          "účet",
          "vodu",
          "čaj"
        ],
        "bankEn": [
          "I would like",
          "a coffee",
          "please",
          "the bill",
          "water",
          "tea"
        ],
        "correct": [
          0,
          1,
          2
        ],
        "lessonCorrectTitle": "Výborně! 🎉",
        "lessonCorrectBody": "“Chtěl bych” (m.) / “Chtěla bych” (f.) is the polite “I would like”; “prosím” is please.",
        "lessonWrongBody": "Start with the polite “I would like,” then the item, then “prosím.”",
        "cultureCaption": "A kavárna in Prague · morning",
        "cultureTitle": "The café as a second home",
        "cultureBody": "Prague's grand café houses are cultural institutions — places writers and thinkers lingered for hours over a single coffee. The atmosphere is calm and a touch formal; you greet, you order with “prosím,” and you're never hurried. Beer may be cheaper than water, but coffee culture runs deep too.",
        "culturePhrase": "“Děkuji” — thank you; “prosím” is please (and also “you're welcome”).",
        "milestoneTitle": "You can now order a coffee — politely, in Czech.",
        "convo": [
          {
            "who": "p",
            "n": "Dobré ráno! Co si dáte?",
            "en": "Good morning! What will you have?"
          },
          {
            "who": "u",
            "n": "Chtěl bych kávu, prosím.",
            "fb": "Great — “chtěl bych … prosím” is polite"
          },
          {
            "who": "p",
            "n": "Jistě. Ještě něco?",
            "en": "Sure. Anything else?"
          },
          {
            "who": "u",
            "n": "Ne, děkuji. Účet, prosím.",
            "fb": "Perfect — “účet” = the bill"
          },
          {
            "who": "p",
            "n": "Samozřejmě, padesát korun.",
            "en": "Of course — fifty crowns."
          }
        ],
        "debrief": [
          {
            "title": "“chtěl” vs “chtěla”",
            "body": "A man says “chtěl bych,” a woman “chtěla bych” — the verb marks gender."
          },
          {
            "title": "The “ř” sound",
            "body": "Czech “ř” (in “tři”) is a famous rolled-buzzed sound — even locals praise foreigners who try."
          }
        ],
        "grammarMini": "cases",
        "grammarTitle": "Cases — why “káva” becomes “kávu”",
        "grammarIntro": "Czech nouns change endings by role. The object of “I'd like” takes the accusative:",
        "gTermA": "káva",
        "gDescA": "base form (nominative) — coffee",
        "gExA": "To je káva.",
        "gTermB": "kávu",
        "gDescB": "accusative — the thing you want",
        "gExB": "Chtěl bych kávu.",
        "clip": "Ranní trh v Praze, s místními",
        "podcast": "Káva s Petrou — díl 4",
        "article": "Malý rituál české kávy",
        "reader": [
          {
            "t": "V Česku lidé rádi tráví čas v "
          },
          {
            "w": "kavárně",
            "d": "café (in the café — from kavárna)"
          },
          {
            "t": ". Pijí kávu pomalu a "
          },
          {
            "w": "povídají si",
            "d": "chat together (from povídat)"
          },
          {
            "t": ". Číšníkovi řeknou "
          },
          {
            "w": "děkuji",
            "d": "thank you (děkuji)"
          },
          {
            "t": ". Je to příjemná chvíle dne."
          }
        ],
        "reviewWord": "účet",
        "reviewSource": "from your kavárna visit, 2 days ago",
        "reviewMeaning": "the bill / check (účet)"
      },
      {
        "chapterTitle": "Chapter 2 · Směr",
        "lessonTitle": "Asking for Directions",
        "goalTitle": "Find it: navigate the city",
        "goalLine": "Politely ask for directions in Czech.",
        "goalShort": "ask for directions",
        "scenario": "directions",
        "partnerName": "Jan",
        "partnerInitial": "J",
        "partnerRole": "místní obyvatel",
        "partnerPlace": "Praha centrum",
        "scenarioTitle": "V centru města · Prague",
        "scenarioSub": "Roleplay · asking for & understanding directions",
        "lessonPromptEn": "Could you tell me where the square is, please?",
        "lessonHint": "Why “mohl(a) byste”?",
        "bank": [
          "Mohl byste",
          "mi",
          "říct",
          "kde",
          "náměstí",
          "je"
        ],
        "bankEn": [
          "Could you",
          "me",
          "tell",
          "where",
          "the square",
          "is"
        ],
        "correct": [
          0,
          1,
          2,
          3,
          4,
          5
        ],
        "lessonCorrectTitle": "Výborně! 🎉",
        "lessonCorrectBody": "“Mohl byste” (m.) / “Mohla byste” (f.) is formal for “could you.”",
        "lessonWrongBody": "Start with “could you,” followed by “tell me where ….”",
        "cultureCaption": "Navigating Prague streets · adventure",
        "cultureTitle": "Czech politeness and direction-giving",
        "cultureBody": "Czechs are known for their politeness. When asking for directions, prefacing with “prosím vás” and ending with “děkuji” is standard.",
        "culturePhrase": "“Prosím vás” — excuse me; used to politely get someone's attention.",
        "milestoneTitle": "You can now find your way around — politely, in Czech.",
        "convo": [
          {
            "who": "j",
            "n": "Dobrý den! Mohu vám pomoci?",
            "en": "Good day! Can I help you?"
          },
          {
            "who": "u",
            "n": "Mohl byste mi říct, kde je náměstí?",
            "fb": "Good job — that's the polite form."
          },
          {
            "who": "j",
            "n": "Ano, jděte rovně. Je to na konci ulice.",
            "en": "Yes, go straight. It's at the end of the street."
          },
          {
            "who": "u",
            "n": "Děkuji mnohokrát!",
            "fb": "Great — always thank politely."
          },
          {
            "who": "j",
            "n": "Rádo se stalo!",
            "en": "You're welcome!"
          }
        ],
        "debrief": [
          {
            "title": "“mohl” vs “mohla”",
            "body": "Use “mohl byste” for men and “mohla byste” for women when asking formally."
          },
          {
            "title": "The “ř” sound",
            "body": "Mastering the “ř” in words like “říct” impresses locals, showing keen interest."
          }
        ],
        "grammarMini": "verbs",
        "grammarTitle": "Polite Requests and Verbs",
        "grammarIntro": "Czech verbs have formal forms, often using the conditional mood:",
        "gTermA": "mohu",
        "gDescA": "can (first person)",
        "gExA": "Mohu říct?",
        "gTermB": "mohl byste",
        "gDescB": "could you (formal)",
        "gExB": "Mohl byste říct?"
      },
      {
        "chapterTitle": "Chapter 3 · Rodina",
        "lessonTitle": "Talking about Family",
        "goalTitle": "Share it: introduce your family",
        "goalLine": "Introduce your family members in Czech.",
        "goalShort": "introduce family",
        "scenario": "family",
        "partnerName": "Pavel",
        "partnerInitial": "P",
        "partnerRole": "nový přítel",
        "partnerPlace": "Praha park",
        "scenarioTitle": "V parku · Prague",
        "scenarioSub": "Roleplay · family introduction",
        "lessonPromptEn": "This is my mother.",
        "lessonHint": "Why “moje matka”?",
        "bank": [
          "Tohle je",
          "moje",
          "matka",
          "otec",
          "bratr",
          "sestra"
        ],
        "bankEn": [
          "This is",
          "my",
          "mother",
          "father",
          "brother",
          "sister"
        ],
        "correct": [
          0,
          1,
          2
        ],
        "lessonCorrectTitle": "Výborně! 🎉",
        "lessonCorrectBody": "“Tohle je” — this is; followed by a possessive and the family member.",
        "lessonWrongBody": "Start with “this is,” then “my,” then the family member.",
        "cultureCaption": "Family picnic · bonding",
        "cultureTitle": "Family in the Czech Republic",
        "cultureBody": "Family is central in Czech life. Gatherings are frequent, and all members are essential parts of decision-making.",
        "culturePhrase": "“Máma” — mom; an endearing term like mom in English.",
        "milestoneTitle": "You can now introduce your family in Czech.",
        "convo": [
          {
            "who": "p",
            "n": "Kdo je s tebou v parku?",
            "en": "Who is with you in the park?"
          },
          {
            "who": "u",
            "n": "Tohle je moje matka.",
            "fb": "Correct — 'tohle je' introduction."
          },
          {
            "who": "p",
            "n": "A ten muž vedle ní?",
            "en": "And the man next to her?"
          },
          {
            "who": "u",
            "n": "To je můj otec.",
            "fb": "Perfect — 'můj otec' aligns with gender."
          },
          {
            "who": "p",
            "n": "Rád vás poznávám!",
            "en": "Nice to meet you all!"
          }
        ],
        "debrief": [
          {
            "title": "Possessives and Family Terms",
            "body": "Possessive adjectives match the gender and number of the noun they modify."
          },
          {
            "title": "Czech Vowels",
            "body": "Pronouncing Czech vowels clearly is key, especially in word endings."
          }
        ],
        "grammarMini": "possessives",
        "grammarTitle": "Possessive Adjectives in Family Contexts",
        "grammarIntro": "Possessive adjectives agree in gender, number, and case with the noun they modify:",
        "gTermA": "moje",
        "gDescA": "my (feminine singular)",
        "gExA": "moje matka",
        "gTermB": "můj",
        "gDescB": "my (masculine singular)",
        "gExB": "můj otec"
      },
      {
        "chapterTitle": "Chapter 4 · Hotelu",
        "lessonTitle": "Checking In and Out",
        "goalTitle": "Reserve it: book a room",
        "goalLine": "Successfully book a hotel room in Czech.",
        "goalShort": "book a room",
        "scenario": "hotel",
        "partnerName": "Jana",
        "partnerInitial": "J",
        "partnerRole": "recepční",
        "partnerPlace": "Praha hotel",
        "scenarioTitle": "Na recepci · Prague",
        "scenarioSub": "Roleplay · book & check-in procedure",
        "lessonPromptEn": "I have a reservation.",
        "lessonHint": "Why 'rezervaci mám'?",
        "bank": [
          "Mám",
          "rezervaci",
          "pokoj",
          "jméno",
          "příjezd",
          "odjezd"
        ],
        "bankEn": [
          "I have",
          "a reservation",
          "room",
          "name",
          "arrival",
          "departure"
        ],
        "correct": [
          0,
          1
        ],
        "lessonCorrectTitle": "Výborně! 🎉",
        "lessonCorrectBody": "“Mám” begins the statement of ownership/logistics.",
        "lessonWrongBody": "Start with “I have” followed by the item.",
        "cultureCaption": "Historical hotels · tradition",
        "cultureTitle": "Czech Hotel Etiquette",
        "cultureBody": "Czech hotels emphasize formality and courtesy. Greetings start with “Dobrý den” and it's customary to use titles.",
        "culturePhrase": "“Recepční” — the receptionist (role in hotels).",
        "milestoneTitle": "You can book a room in Czech.",
        "convo": [
          {
            "who": "j",
            "n": "Dobrý den, jak vám mohu pomoci?",
            "en": "Good day, how may I help you?"
          },
          {
            "who": "u",
            "n": "Mám rezervaci.",
            "fb": "Exactly how you'd confirm a reservation."
          },
          {
            "who": "j",
            "n": "Na jaké jméno, prosím?",
            "en": "Under what name, please?"
          },
          {
            "who": "u",
            "n": "Na jméno Novák.",
            "fb": "Correct, simply state the name."
          },
          {
            "who": "j",
            "n": "V pořádku, pokoj 101.",
            "en": "Alright, room 101."
          }
        ],
        "debrief": [
          {
            "title": "Word Order in Statements",
            "body": "Common sentence structure often begins with the subject followed by the verb."
          },
          {
            "title": "Hotel Vocabulary",
            "body": "Essential words include 'pokoj' (room) and 'rezervace' (reservation)."
          }
        ],
        "grammarMini": "ownership",
        "grammarTitle": "Expressing Ownership and Requests",
        "grammarIntro": "Use the verb 'mít' (to have) for possession and reservation confirmations:",
        "gTermA": "mám",
        "gDescA": "I have",
        "gExA": "Mám rezervaci.",
        "gTermB": "rezervaci",
        "gDescB": "reservation",
        "gExB": "Potřebujete rezervaci."
      },
      {
        "chapterTitle": "Chapter 5 · Trh",
        "lessonTitle": "Shopping at the Market",
        "goalTitle": "Shop it: buy fresh produce",
        "goalLine": "Engage in a transaction at a market stall.",
        "goalShort": "buy produce",
        "scenario": "market",
        "partnerName": "Eva",
        "partnerInitial": "E",
        "partnerRole": "prodejce",
        "partnerPlace": "Trh v Praze",
        "scenarioTitle": "Na trhu · Prague",
        "scenarioSub": "Roleplay · market transaction",
        "lessonPromptEn": "How much does this cost?",
        "lessonHint": "Why “kolik to stojí”?",
        "bank": [
          "Kolik",
          "tohle",
          "stojí",
          "jablko",
          "hruška",
          "mrkev"
        ],
        "bankEn": [
          "How much",
          "this",
          "costs",
          "apple",
          "pear",
          "carrot"
        ],
        "correct": [
          0,
          1,
          2
        ],
        "lessonCorrectTitle": "Výborně! 🎉",
        "lessonCorrectBody": "“Kolik to stojí” — how much does it cost?",
        "lessonWrongBody": "Start the question with “how much.”",
        "cultureCaption": "Bustling market scene · colors and sounds",
        "cultureTitle": "Market Traditions",
        "cultureBody": "Czech markets are vibrant hubs of fresh local produce. Sellers often engage lively conversations — bargaining and humor ingrained.",
        "culturePhrase": "“Sleva” — discount; legal and expected at markets.",
        "milestoneTitle": "You can now shop for produce in Czech.",
        "convo": [
          {
            "who": "e",
            "n": "Dobrý den! Co si přejete?",
            "en": "Good day! What would you like?"
          },
          {
            "who": "u",
            "n": "Kolik tohle stojí?",
            "fb": "Perfect — straightforward market inquiry."
          },
          {
            "who": "e",
            "n": "To stojí padesát korun.",
            "en": "It costs fifty crowns."
          },
          {
            "who": "u",
            "n": "Dám si tři, prosím.",
            "fb": "Well done, clear order."
          },
          {
            "who": "e",
            "n": "Děkuji, tady to máte!",
            "en": "Thank you, here you go!"
          }
        ],
        "debrief": [
          {
            "title": "Czechs and Prices",
            "body": "Always expect to clarify costs and be prepared for friendly negotiations."
          },
          {
            "title": "Counting Money",
            "body": "Numbers follow gender and the object being counted often controls case endings."
          }
        ],
        "grammarMini": "questions",
        "grammarTitle": "Asking Questions about Costs",
        "grammarIntro": "Learn how to structure questions to find price information:",
        "gTermA": "kolik",
        "gDescA": "how much",
        "gExA": "Kolik to stojí?",
        "gTermB": "stojí",
        "gDescB": "costs",
        "gExB": "To stojí padesát korun."
      },
      {
        "chapterTitle": "Chapter 6 · Nouze",
        "lessonTitle": "Handling Emergencies",
        "goalTitle": "Get help: communicate urgency",
        "goalLine": "Express an emergency and ask for help in Czech.",
        "goalShort": "express emergency",
        "scenario": "emergency",
        "partnerName": "Karel",
        "partnerInitial": "K",
        "partnerRole": "strážník",
        "partnerPlace": "Ulice v Praze",
        "scenarioTitle": "Na ulici · Prague",
        "scenarioSub": "Roleplay · seek urgent assistance",
        "lessonPromptEn": "I need help immediately!",
        "lessonHint": "Why “potřebuji pomoc”?",
        "bank": [
          "Potřebuji",
          "pomoc",
          "hned",
          "policii",
          "sanitku",
          "lékaře"
        ],
        "bankEn": [
          "I need",
          "help",
          "immediately",
          "police",
          "ambulance",
          "doctor"
        ],
        "correct": [
          0,
          1,
          2
        ],
        "lessonCorrectTitle": "Výborně! 🎉",
        "lessonCorrectBody": "“Potřebuji” — I need; always followed by the immediate necessity.",
        "lessonWrongBody": "Urgency follows with 'I need' and the requirement.",
        "cultureCaption": "Calm & composed · respond effectively",
        "cultureTitle": "Emergency Protocols",
        "cultureBody": "Emergencies require clear requests. Politeness is less emphasized, clarity critical; use simple, direct Czech words like 'pomoc'.",
        "culturePhrase": "“Hasiči” — firefighters; vital in emergencies involving fire.",
        "milestoneTitle": "You can now ask for help in case of an emergency in Czech.",
        "convo": [
          {
            "who": "k",
            "n": "Co se stalo?",
            "en": "What happened?"
          },
          {
            "who": "u",
            "n": "Potřebuji pomoc hned!",
            "fb": "Correct, urgency is conveyed."
          },
          {
            "who": "k",
            "n": "Uklidněte se, co se děje?",
            "en": "Calm down, what's happening?"
          },
          {
            "who": "u",
            "n": "Potřebuji lékaře.",
            "fb": "Well done, precise request for assistance."
          },
          {
            "who": "k",
            "n": "Sanitka je na cestě.",
            "en": "An ambulance is on the way."
          }
        ],
        "debrief": [
          {
            "title": "Focus in Emergencies",
            "body": "Emergency situations prioritize clarity and urgency over grammar perfection."
          },
          {
            "title": "Pronunciation under Stress",
            "body": "Practice common emergency words calmly, as stress can alter pronunciation."
          }
        ],
        "grammarMini": "command forms",
        "grammarTitle": "Expressing Needs Clearly",
        "grammarIntro": "Key emergency vocabulary revolves around strong verbs to express immediate needs:",
        "gTermA": "potřebuji",
        "gDescA": "I need",
        "gExA": "Potřebuji pomoc.",
        "gTermB": "hned",
        "gDescB": "immediately",
        "gExB": "Potřebuji pomoc hned."
      }
    ]
  },
  "hu": {
    "name": "Hungarian",
    "flag": "🇭🇺",
    "code": "HU",
    "font": "",
    "locale": "hu-HU",
    "greeting": "Jó reggelt, Maya",
    "accent": "Hungary (Budapest)",
    "chapters": [
      {
        "chapterTitle": "Chapter 1 · A kávézóban",
        "lessonTitle": "Greetings & warmth",
        "goalTitle": "Build it: order a coffee",
        "goalLine": "Order a coffee — politely, in Hungarian.",
        "goalShort": "order a coffee",
        "scenario": "cafe",
        "partnerName": "Eszter",
        "partnerInitial": "E",
        "partnerRole": "pincér",
        "partnerPlace": "Budapest kávéház",
        "scenarioTitle": "A kávézóban · Budapest",
        "scenarioSub": "Roleplay · order & a polite exchange",
        "lessonPromptEn": "I would like a coffee, please.",
        "lessonHint": "Why “kérek”?",
        "bank": [
          "Kérek",
          "egy kávét",
          "legyen szíves",
          "a számlát",
          "vizet",
          "teát"
        ],
        "bankEn": [
          "I would like",
          "a coffee",
          "please",
          "the bill",
          "water",
          "tea"
        ],
        "correct": [
          0,
          1,
          2
        ],
        "lessonCorrectTitle": "Tökéletes! 🎉",
        "lessonCorrectBody": "“Kérek” = “I ask for / I'd like”; “kávét” takes a -t ending because it's the object.",
        "lessonWrongBody": "Start with “Kérek” (I'd like), then the item with its -t ending.",
        "cultureCaption": "A kávéház in Budapest · morning",
        "cultureTitle": "The coffee house as a salon",
        "cultureBody": "Budapest's ornate kávéház (coffee houses) were once literary salons — writers had their own marble tables and wrote whole novels there. The tradition of lingering, reading and talking over coffee survives. Service is gracious and a little formal; “legyen szíves” (please) goes a long way.",
        "culturePhrase": "“Köszönöm” — thank you; “legyen szíves” is a polite “please / be so kind.”",
        "milestoneTitle": "You can now order a coffee — politely, in Hungarian.",
        "convo": [
          {
            "who": "p",
            "n": "Jó reggelt! Mit kér?",
            "en": "Good morning! What would you like?"
          },
          {
            "who": "u",
            "n": "Kérek egy kávét, legyen szíves.",
            "fb": "Great — “kérek … legyen szíves” is polite"
          },
          {
            "who": "p",
            "n": "Rendben. Még valamit?",
            "en": "Alright. Anything else?"
          },
          {
            "who": "u",
            "n": "Nem, köszönöm. A számlát, legyen szíves.",
            "fb": "Perfect — “a számlát” = the bill"
          },
          {
            "who": "p",
            "n": "Természetesen, hatszáz forint.",
            "en": "Of course — six hundred forint."
          }
        ],
        "debrief": [
          {
            "title": "The object ending -t",
            "body": "“kávé” → “kávét” — Hungarian marks the object with a -t suffix."
          },
          {
            "title": "Vowel harmony",
            "body": "Suffixes change to match the vowels in the word — “kávét,” not “kávöt.”"
          }
        ],
        "grammarMini": "vowel harmony",
        "grammarTitle": "Vowel harmony — suffixes that match",
        "grammarIntro": "Hungarian endings change their vowels to harmonise with the word's own vowels:",
        "gTermA": "-ban",
        "gDescA": "“in” after back vowels",
        "gExA": "kávézóban — in a café",
        "gTermB": "-ben",
        "gDescB": "“in” after front vowels",
        "gExB": "kertben — in a garden",
        "clip": "Reggeli piac Budapesten, helyiekkel",
        "podcast": "Kávé Eszterrel — 4. rész",
        "article": "A magyar kávé kis rituáléja",
        "reader": [
          {
            "t": "Magyarországon sokan szeretnek időt tölteni egy "
          },
          {
            "w": "kávézóban",
            "d": "in a café (from kávézó)"
          },
          {
            "t": ". Lassan isszák a kávét és "
          },
          {
            "w": "beszélgetnek",
            "d": "chat / converse (from beszélget)"
          },
          {
            "t": ". A pincérnek azt mondják, "
          },
          {
            "w": "köszönöm",
            "d": "thank you (köszönöm)"
          },
          {
            "t": ". Ez a nap egyik kedves pillanata."
          }
        ],
        "reviewWord": "számla",
        "reviewSource": "from your kávéház visit, 2 days ago",
        "reviewMeaning": "the bill / check (számla)"
      },
      {
        "chapterTitle": "Chapter 2 · Útbaigazítás",
        "lessonTitle": "Finding your way",
        "goalTitle": "Build it: ask for directions",
        "goalLine": "Ask for directions politely, in Hungarian.",
        "goalShort": "ask for directions",
        "scenario": "directions",
        "partnerName": "Gábor",
        "partnerInitial": "G",
        "partnerRole": "helybeli",
        "partnerPlace": "Budapest",
        "scenarioTitle": "Útbaigazítás · Budapest",
        "scenarioSub": "Roleplay · find your way around",
        "lessonPromptEn": "Excuse me, where is the museum?",
        "lessonHint": "Why “elnézést”?",
        "bank": [
          "Elnézést",
          "hol van",
          "a múzeum",
          "a bolt",
          "a tér",
          "a vasútállomás"
        ],
        "bankEn": [
          "Excuse me",
          "where is",
          "the museum",
          "the store",
          "the square",
          "the train station"
        ],
        "correct": [
          0,
          1,
          2
        ],
        "lessonCorrectTitle": "Nagyszerű! 🎉",
        "lessonCorrectBody": "“Elnézést” is a polite way to catch someone's attention. “Hol van” asks for the location.",
        "lessonWrongBody": "Begin with “Elnézést” (Excuse me), followed by “hol van” and the place.",
        "cultureCaption": "Navigating Budapest · a city of bridges",
        "cultureTitle": "Asking for directions gracefully",
        "cultureBody": "In Hungary, asking for directions is a polite interaction. People are generally helpful, and starting with “Elnézést” shows courtesy.",
        "culturePhrase": "“Elnézést” — excuse me; “köszönöm” is used for thanking someone.",
        "milestoneTitle": "You can now ask for directions in Hungarian.",
        "convo": [
          {
            "who": "p",
            "n": "Jó napot! Segíthetek valamiben?",
            "en": "Good day! Can I help with something?"
          },
          {
            "who": "u",
            "n": "Elnézést, hol van a múzeum?",
            "fb": "Well done — polite and clear!"
          },
          {
            "who": "p",
            "n": "A múzeum két saroknyira van innen.",
            "en": "The museum is two blocks away from here."
          },
          {
            "who": "u",
            "n": "Köszönöm szépen.",
            "fb": "Great — express gratitude!"
          },
          {
            "who": "p",
            "n": "Nagyon szívesen!",
            "en": "You're very welcome!"
          }
        ],
        "debrief": [
          {
            "title": "Locational phrases",
            "body": "“hol van” asks 'where is', a simple way to get directions."
          },
          {
            "title": "Politeness in requests",
            "body": "Begin sentences with “Elnézést” to show courtesy when asking questions."
          }
        ],
        "grammarMini": "politeness",
        "grammarTitle": "Forming polite requests",
        "grammarIntro": "When asking for help or directions, starting with a polite phrase is key:",
        "gTermA": "Elnézést,",
        "gDescA": "Excuse me, used to politely attract attention",
        "gExA": "Elnézést, hol van a bolt? — Excuse me, where is the store?",
        "gTermB": "",
        "gDescB": "",
        "gExB": "",
        "clip": "Útbiaigazítás a városban, helyiekkel",
        "podcast": "Útmutató Gáborral — 1. rész",
        "article": "Tippek a budapesti közlekedéshez",
        "reader": [
          {
            "t": "Ha eltévedtél Budapesten, gyakran kérhetsz útbaigazítást egy "
          },
          {
            "w": "helybélitől",
            "d": "from a local (helybeli)"
          },
          {
            "t": ". Mondj "
          },
          {
            "w": "elnézést",
            "d": "excuse me (elnézést)"
          },
          {
            "t": " és kérdezd meg: "
          },
          {
            "w": "hol van",
            "d": "where is (hol van)"
          },
          {
            "t": " a célod."
          }
        ],
        "reviewWord": "helybeli",
        "reviewSource": "from your navigation, 3 days ago",
        "reviewMeaning": "local person (helybeli)"
      },
      {
        "chapterTitle": "Chapter 3 · Család",
        "lessonTitle": "Family Matters",
        "goalTitle": "Build it: talk about your family",
        "goalLine": "Introduce your family briefly, in Hungarian.",
        "goalShort": "introduce your family",
        "scenario": "family",
        "partnerName": "Anna",
        "partnerInitial": "A",
        "partnerRole": "barát",
        "partnerPlace": "Budapest kávéház",
        "scenarioTitle": "Család · Bemutatkozás",
        "scenarioSub": "Roleplay · talking about family",
        "lessonPromptEn": "This is my mother.",
        "lessonHint": "Why “ő az én anyukám”?",
        "bank": [
          "Ő",
          "az én",
          "anyukám",
          "apukám",
          "testvérem",
          "nagymama"
        ],
        "bankEn": [
          "This is",
          "my",
          "mother",
          "father",
          "sibling",
          "grandmother"
        ],
        "correct": [
          0,
          1,
          2
        ],
        "lessonCorrectTitle": "Kiváló! 🎉",
        "lessonCorrectBody": "“Ő” means 'this is'. Use 'az én' to denote possession.",
        "lessonWrongBody": "Begin with “Ő” for 'this is', followed by 'az én' and the family member.",
        "cultureCaption": "Introducing family · Hungarian gatherings",
        "cultureTitle": "Family in Hungarian culture",
        "cultureBody": "Family plays a central role in Hungarian life. Gathering and introducing family members is a cherished tradition.",
        "culturePhrase": "“Család” — family; “testvér” is a sibling.",
        "milestoneTitle": "You can now briefly introduce family in Hungarian.",
        "convo": [
          {
            "who": "p",
            "n": "Szia! Kivel jöttél?",
            "en": "Hi! Who did you come with?"
          },
          {
            "who": "u",
            "n": "Ő az én anyukám, Anna.",
            "fb": "Nice! You've introduced your mother."
          },
          {
            "who": "p",
            "n": "Nagyon örülök. És ő?",
            "en": "Nice to meet you. And she?"
          },
          {
            "who": "u",
            "n": "Ő az én testvérem.",
            "fb": "Good job mentioning a sibling!"
          },
          {
            "who": "p",
            "n": "Jó társaságban vagy!",
            "en": "You're in good company!"
          }
        ],
        "debrief": [
          {
            "title": "Possession in introductions",
            "body": "“az én” shows ownership, a common way to introduce family members."
          },
          {
            "title": "Family terms",
            "body": "Get to know basic family terms. It's a key part of introducing loved ones."
          }
        ],
        "grammarMini": "possession",
        "grammarTitle": "Possessive phrases",
        "grammarIntro": "Indicate possession by using the following structure:",
        "gTermA": "az én",
        "gDescA": "used for introducing your own family",
        "gExA": "Ő az én apukám. — This is my father.",
        "gTermB": "család",
        "gDescB": "family, an important noun",
        "gExB": "A családom nagy. — My family is big.",
        "clip": "Családi összejövetel, finom ételek",
        "podcast": "Család Annával — 2. rész",
        "article": "A magyar családi élet hagyományai",
        "reader": [
          {
            "t": "Magyarországon a "
          },
          {
            "w": "családok",
            "d": "families (család)"
          },
          {
            "t": " gyakran összejönnek a hétvégéken. Gyerekek és "
          },
          {
            "w": "szülők",
            "d": "parents (szülő)"
          },
          {
            "t": " együtt ebédelnek és beszélgetnek. A "
          },
          {
            "w": "nagyszülők",
            "d": "grandparents (nagyszülő)"
          },
          {
            "t": " is részt vesznek."
          }
        ],
        "reviewWord": "család",
        "reviewSource": "from your family introduction, yesterday",
        "reviewMeaning": "family (család)"
      },
      {
        "chapterTitle": "Chapter 4 · A szállodában",
        "lessonTitle": "Checking in",
        "goalTitle": "Build it: check into a hotel",
        "goalLine": "Check in at a hotel, in Hungarian.",
        "goalShort": "check into a hotel",
        "scenario": "hotel",
        "partnerName": "Katalin",
        "partnerInitial": "K",
        "partnerRole": "recepciós",
        "partnerPlace": "Budapest hotel",
        "scenarioTitle": "A szállodában · Check-in",
        "scenarioSub": "Roleplay · checking in & communication",
        "lessonPromptEn": "I have a reservation.",
        "lessonHint": "Why “foglalásom van”?",
        "bank": [
          "Foglalásom",
          "van",
          "egy szoba",
          "kulcs",
          "törölköző",
          "wifi"
        ],
        "bankEn": [
          "I have a reservation",
          "have",
          "a room",
          "key",
          "towel",
          "wifi"
        ],
        "correct": [
          0,
          1
        ],
        "lessonCorrectTitle": "Tökéletes! 🎉",
        "lessonCorrectBody": "“Foglalásom van” means 'I have a reservation'. It includes possession and is formal.",
        "lessonWrongBody": "Start with “Foglalásom van” to claim your reservation.",
        "cultureCaption": "Check-in at a hotel",
        "cultureTitle": "Hospitality in Hungarian hotels",
        "cultureBody": "Hungarian hotels pride themselves on hospitality. Clear communication upon checking in makes for a smoother experience.",
        "culturePhrase": "“Foglalásom” — my reservation; keep it polite and clear.",
        "milestoneTitle": "You can now check into a hotel in Hungarian.",
        "convo": [
          {
            "who": "p",
            "n": "Jó napot kívánok! Miben segíthetek?",
            "en": "Good afternoon! How can I help?"
          },
          {
            "who": "u",
            "n": "Foglalásom van.",
            "fb": "Perfect start — announce your reservation!"
          },
          {
            "who": "p",
            "n": "Rendben. Mi a név?",
            "en": "Alright. What is the name?"
          },
          {
            "who": "u",
            "n": "A nevem Peter, köszönöm.",
            "fb": "Good — sharing your name."
          },
          {
            "who": "p",
            "n": "A szobakulcs itt van. Jó pihenést!",
            "en": "Here is the room key. Have a pleasant stay!"
          }
        ],
        "debrief": [
          {
            "title": "Checking in steps",
            "body": "Announce your reservation first, then provide further details such as your name."
          },
          {
            "title": "Formal communication",
            "body": "Use polite and clear language, especially in a formal setting like a hotel."
          }
        ],
        "grammarMini": "possession",
        "grammarTitle": "Possession structures",
        "grammarIntro": "Use these structures to convey possession and availability:",
        "gTermA": "Foglalásom van",
        "gDescA": "I have a reservation, a formal statement",
        "gExA": "Foglalásom van egy szobára. — I have a room reservation.",
        "gTermB": "Szobakulcsom",
        "gDescB": "My room key, indicating possession",
        "gExB": "A szobakulcsom elveszett. — I lost my room key.",
        "clip": "Check-in és szállodai túra",
        "podcast": "Szálloda Katalinnal — 3. rész",
        "article": "A magyar szállodai vendéglátás",
        "reader": [
          {
            "t": "A szállodában való "
          },
          {
            "w": "bejelentkezés",
            "d": "check-in (bejelentkezés)"
          },
          {
            "t": " gyors és egyszerű. A "
          },
          {
            "w": "foglalás",
            "d": "reservation (foglalás)"
          },
          {
            "t": " fontos lépés. Mondj "
          },
          {
            "w": "jó napot",
            "d": "good afternoon (jó napot)"
          },
          {
            "t": " a recepciósoknak."
          }
        ],
        "reviewWord": "foglalás",
        "reviewSource": "from your hotel check-in, 4 days ago",
        "reviewMeaning": "reservation (foglalás)"
      },
      {
        "chapterTitle": "Chapter 5 · A piacon",
        "lessonTitle": "Market Adventure",
        "goalTitle": "Build it: buy some fruit",
        "goalLine": "Buy fruit at the market, in Hungarian.",
        "goalShort": "buy fruit",
        "scenario": "market",
        "partnerName": "Miklós",
        "partnerInitial": "M",
        "partnerRole": "árus",
        "partnerPlace": "Budapest piac",
        "scenarioTitle": "A piacon · Vásárlás",
        "scenarioSub": "Roleplay · purchase & exchange",
        "lessonPromptEn": "How much are the apples?",
        "lessonHint": "Why “mennyibe kerülnek”?",
        "bank": [
          "Mennyibe",
          "kerülnek",
          "az almák",
          "a paradicsom",
          "a banán",
          "egy kiló"
        ],
        "bankEn": [
          "How much",
          "are",
          "the apples",
          "the tomatoes",
          "the bananas",
          "a kilo"
        ],
        "correct": [
          0,
          1,
          2
        ],
        "lessonCorrectTitle": "Szuper! 🎉",
        "lessonCorrectBody": "“Mennyibe kerülnek” asks 'how much' and is crucial for pricing queries.",
        "lessonWrongBody": "Use “Mennyibe kerülnek” to ask for the price of multiple items.",
        "cultureCaption": "The vibrancy of Hungarian markets",
        "cultureTitle": "Budapest's market culture",
        "cultureBody": "Markets in Budapest are lively places, full of fresh produce and vibrant exchanges. Know the basics to navigate them effectively.",
        "culturePhrase": "“Piac” — market; phrases to know include asking about prices.",
        "milestoneTitle": "You can now buy fruit at a market in Hungarian.",
        "convo": [
          {
            "who": "p",
            "n": "Szia! Miben segíthetek?",
            "en": "Hi! How can I help you?"
          },
          {
            "who": "u",
            "n": "Mennyibe kerülnek az almák?",
            "fb": "Good question — directly about the price."
          },
          {
            "who": "p",
            "n": "Az almák háromszáz forint kilónként.",
            "en": "The apples are three hundred forint per kilo."
          },
          {
            "who": "u",
            "n": "Köszönöm, kérek egy kilót.",
            "fb": "Well done — requesting a kilo!"
          },
          {
            "who": "p",
            "n": "Itt van, köszönöm a vásárlást!",
            "en": "Here you go, thank you for your purchase!"
          }
        ],
        "debrief": [
          {
            "title": "Weighing and pricing",
            "body": "Asking 'Mennyibe kerülnek?' is the standard way to inquire about prices."
          },
          {
            "title": "Quantity expressions",
            "body": "Learn to communicate desired quantities, like kilograms or pieces."
          }
        ],
        "grammarMini": "pricing",
        "grammarTitle": "Pricing questions",
        "grammarIntro": "Asking about price and quantities:",
        "gTermA": "Mennyibe kerül",
        "gDescA": "How much is it, singular item pricing",
        "gExA": "Mennyibe kerül egy alma? — How much is an apple?",
        "gTermB": "Mennyibe kerülnek",
        "gDescB": "How much are they, plural item pricing",
        "gExB": "Mennyibe kerülnek az almák? — How much are the apples?",
        "clip": "Vásárlás a piacon, finom gyümölcsök",
        "podcast": "Vásárlás Miklóssal — 5. rész",
        "article": "Budapesti piacok és vásárok",
        "reader": [
          {
            "t": "A piacon az "
          },
          {
            "w": "árusok",
            "d": "vendors (árus)"
          },
          {
            "t": " kedvesek és segítőkészek. Az ételek frissek, és számos "
          },
          {
            "w": "zöldség",
            "d": "vegetable (zöldség)"
          },
          {
            "t": " és "
          },
          {
            "w": "gyümölcs",
            "d": "fruit (gyümölcs)"
          },
          {
            "t": " közül válogathatsz."
          }
        ],
        "reviewWord": "árus",
        "reviewSource": "from your market visit, 5 days ago",
        "reviewMeaning": "vendor (árus)"
      },
      {
        "chapterTitle": "Chapter 6 · Vészhelyzet",
        "lessonTitle": "In case of emergency",
        "goalTitle": "Build it: report an emergency",
        "goalLine": "Report an emergency situation, in Hungarian.",
        "goalShort": "report an emergency",
        "scenario": "emergency",
        "partnerName": "István",
        "partnerInitial": "I",
        "partnerRole": "rendőr",
        "partnerPlace": "Budapest utcán",
        "scenarioTitle": "Vészhelyzet · Feljelentés",
        "scenarioSub": "Roleplay · report and response",
        "lessonPromptEn": "Help! I need an ambulance.",
        "lessonHint": "Why “segítség”?",
        "bank": [
          "Segítség",
          "kell",
          "mentő",
          "rendőrség",
          "orvos",
          "tűzoltó"
        ],
        "bankEn": [
          "Help",
          "need",
          "ambulance",
          "police",
          "doctor",
          "firefighter"
        ],
        "correct": [
          0,
          1,
          2
        ],
        "lessonCorrectTitle": "Szép munka! 🎉",
        "lessonCorrectBody": "Start with “Segítség” to quickly indicate an emergency, followed by your request.",
        "lessonWrongBody": "Start with “Segítség” and specify what you need, like “mentő” for ambulance.",
        "cultureCaption": "Emergency situations in Hungary",
        "cultureTitle": "Handling emergencies calmly",
        "cultureBody": "In emergencies, staying calm is key. Call for help immediately and clearly state what you need first.",
        "culturePhrase": "“Segítség” — help; a crucial phrase in emergencies.",
        "milestoneTitle": "You can now report emergencies in Hungarian.",
        "convo": [
          {
            "who": "p",
            "n": "Mi történt? Miben segíthetek?",
            "en": "What happened? How can I help?"
          },
          {
            "who": "u",
            "n": "Segítség, mentő kell!",
            "fb": "Great call — announced the need quickly!"
          },
          {
            "who": "p",
            "n": "Hol van a helyszín?",
            "en": "Where is the location?"
          },
          {
            "who": "u",
            "n": "A Kossuth utcán, kérem siessenek.",
            "fb": "Good — provided the location."
          },
          {
            "who": "p",
            "n": "Azonnal úton vannak. Maradjon vonalban!",
            "en": "They're on their way. Stay on the line!"
          }
        ],
        "debrief": [
          {
            "title": "Essential emergency vocabulary",
            "body": "“Segítség” is the immediate call for help. Specify what assistance you need."
          },
          {
            "title": "Calm communication",
            "body": "Be clear and concise when specifying the nature of the emergency."
          }
        ],
        "grammarMini": "urgency",
        "grammarTitle": "Emergency expressions",
        "grammarIntro": "Learn to express urgency and request help:",
        "gTermA": "Segítség,",
        "gDescA": "immediate help, urgent plea",
        "gExA": "Segítség, tűzoltó kell! — Help, need a firefighter!",
        "gTermB": "mentő",
        "gDescB": "emergency service, critical term",
        "gExB": "Sürgős mentőhívás szükséges. — An urgent ambulance call is needed.",
        "clip": "Vészhelyzeti eljárások Budapesten",
        "podcast": "Vészhelyzet Istvánnal — 6. rész",
        "article": "Vészhelyzeti protokoll Magyarországon",
        "reader": [
          {
            "t": "Ha vészhelyzet van, gyorsan kell "
          },
          {
            "w": "segítséget",
            "d": "help (segítség)"
          },
          {
            "t": " kérni. Hívd a "
          },
          {
            "w": "rendőrséget",
            "d": "police (rendőrség)"
          },
          {
            "t": ", vagy a megfelelő "
          },
          {
            "w": "szolgálatokat",
            "d": "services (szolgálat)"
          },
          {
            "t": ". Ne ess pánikba, lépj gyorsan."
          }
        ],
        "reviewWord": "segítség",
        "reviewSource": "from your emergency prep, 6 days ago",
        "reviewMeaning": "help (segítség)"
      }
    ]
  },
  "fi": {
    "name": "Finnish",
    "flag": "🇫🇮",
    "code": "FI",
    "font": "",
    "locale": "fi-FI",
    "greeting": "Hyvää huomenta, Maya",
    "accent": "Finland (Helsinki)",
    "chapters": [
      {
        "chapterTitle": "Chapter 1 · Kahvilassa",
        "lessonTitle": "Greetings & warmth",
        "goalTitle": "Build it: order a coffee",
        "goalLine": "Order a coffee — politely, in Finnish.",
        "goalShort": "order a coffee",
        "scenario": "cafe",
        "partnerName": "Aino",
        "partnerInitial": "A",
        "partnerRole": "tarjoilija",
        "partnerPlace": "Helsinki kahvila",
        "scenarioTitle": "Kahvilassa · Helsinki",
        "scenarioSub": "Roleplay · order & a calm exchange",
        "lessonPromptEn": "I would like a coffee, please.",
        "lessonHint": "Why “saisinko”?",
        "bank": [
          "Saisinko",
          "kahvin",
          "kiitos",
          "laskun",
          "vettä",
          "teetä"
        ],
        "bankEn": [
          "Could I have",
          "a coffee",
          "thank you",
          "the bill",
          "water",
          "tea"
        ],
        "correct": [
          0,
          1,
          2
        ],
        "lessonCorrectTitle": "Täydellistä! 🎉",
        "lessonCorrectBody": "“Saisinko” = “could I have” — the polite request; “kahvin” takes an -n ending as the object.",
        "lessonWrongBody": "Start with “Saisinko” (could I have), then the item with its -n ending.",
        "cultureCaption": "A kahvila in Helsinki · morning",
        "cultureTitle": "The world's heaviest coffee drinkers",
        "cultureBody": "Finns drink more coffee per person than anyone on Earth, and the workday even guarantees coffee breaks by tradition. Yet the culture is quiet and unfussy — comfortable silences are normal, small talk is minimal, and a calm “kiitos” is all the warmth a moment needs.",
        "culturePhrase": "“Kiitos” — thank you (and please, in requests); a little goes a long way.",
        "milestoneTitle": "You can now order a coffee — politely, in Finnish.",
        "convo": [
          {
            "who": "p",
            "n": "Hyvää huomenta! Mitä saisi olla?",
            "en": "Good morning! What would you like?"
          },
          {
            "who": "u",
            "n": "Saisinko kahvin, kiitos.",
            "fb": "Great — “saisinko … kiitos” is polite and natural"
          },
          {
            "who": "p",
            "n": "Toki. Jotain muuta?",
            "en": "Sure. Anything else?"
          },
          {
            "who": "u",
            "n": "Ei, kiitos. Laskun, kiitos.",
            "fb": "Perfect — “laskun” = the bill"
          },
          {
            "who": "p",
            "n": "Tottakai, kolme euroa.",
            "en": "Of course — three euros."
          }
        ],
        "debrief": [
          {
            "title": "The object ending -n",
            "body": "“kahvi” → “kahvin” — Finnish marks a whole, completed object with -n."
          },
          {
            "title": "Double letters matter",
            "body": "“tuli” (fire) vs “tuuli” (wind) — length of vowels/consonants changes meaning."
          }
        ],
        "grammarMini": "cases",
        "grammarTitle": "Cases — endings instead of prepositions",
        "grammarIntro": "Finnish has no word for “in” — it adds an ending to the noun instead:",
        "gTermA": "kahvila",
        "gDescA": "café (base form)",
        "gExA": "Tämä on kahvila.",
        "gTermB": "kahvilassa",
        "gDescB": "“in the café” — the -ssa ending",
        "gExB": "Olen kahvilassa.",
        "clip": "Aamutori Helsingissä, paikallisten kanssa",
        "podcast": "Kahvit Ainon kanssa — jakso 4",
        "article": "Suomalaisen kahvin pieni rituaali",
        "reader": [
          {
            "t": "Suomessa moni viettää aikaa "
          },
          {
            "w": "kahvilassa",
            "d": "in a café (from kahvila)"
          },
          {
            "t": ". He juovat kahvia rauhassa ja "
          },
          {
            "w": "juttelevat",
            "d": "chat (from jutella)"
          },
          {
            "t": ". Tarjoilijalle sanotaan "
          },
          {
            "w": "kiitos",
            "d": "thank you / please (kiitos)"
          },
          {
            "t": ". Se on päivän mukava hetki."
          }
        ],
        "reviewWord": "lasku",
        "reviewSource": "from your kahvila visit, 2 days ago",
        "reviewMeaning": "the bill / check (lasku)"
      },
      {
        "chapterTitle": "Chapter 2 · Suunnat",
        "lessonTitle": "Asking for Directions",
        "goalTitle": "Find it: ask for directions",
        "goalLine": "Ask for directions politely, in Finnish.",
        "goalShort": "ask for directions",
        "scenario": "directions",
        "partnerName": "Mikko",
        "partnerInitial": "M",
        "partnerRole": "paikallinen",
        "partnerPlace": "Helsinki katu",
        "scenarioTitle": "Suunnat · Helsinki",
        "scenarioSub": "Roleplay · ask & navigate",
        "lessonPromptEn": "Excuse me, could you tell me where the station is?",
        "lessonHint": "Why “anteeksi”?",
        "bank": [
          "Anteeksi",
          "missä",
          "asema",
          "on",
          "keskus",
          "kauppa"
        ],
        "bankEn": [
          "Excuse me",
          "where",
          "station",
          "is",
          "center",
          "shop"
        ],
        "correct": [
          0,
          1,
          3,
          2
        ],
        "lessonCorrectTitle": "Hienoa! 🎉",
        "lessonCorrectBody": "“Missä on” = “where is” — a polite inquiry; place follows the query.",
        "lessonWrongBody": "Start with “Anteeksi” (excuse me), then “missä on” to ask where something is.",
        "cultureCaption": "Helsinki katu · afternoon",
        "cultureTitle": "Navigating Finnish cities",
        "cultureBody": "Finnish cities are walkable with clear signage. Finns are helpful when asked, but as with all interactions, keep it brief with a smile and a “kiitos” to end.",
        "culturePhrase": "“Anteeksi” — excuse me; just a bit more than a mere word.",
        "milestoneTitle": "You can now ask for directions — confidently, in Finnish.",
        "convo": [
          {
            "who": "p",
            "n": "Hyvää päivää! Tarvitsetko apua suunnissa?",
            "en": "Good day! Do you need help with directions?"
          },
          {
            "who": "u",
            "n": "Anteeksi, missä on asema?",
            "fb": "Perfect — clear and polite!"
          },
          {
            "who": "p",
            "n": "Asema on suoraan eteenpäin.",
            "en": "The station is straight ahead."
          },
          {
            "who": "u",
            "n": "Kiitos paljon!",
            "fb": "Great — a simple thank you."
          },
          {
            "who": "p",
            "n": "Ei kestä. Hyvää päivää!",
            "en": "You're welcome. Have a good day!"
          }
        ],
        "debrief": [
          {
            "title": "Question structure",
            "body": "Begin with “missä on” for asking where something is."
          },
          {
            "title": "Brief exchanges",
            "body": "Keep your questions concise and to the point, a cultural preference."
          }
        ],
        "grammarMini": "questions",
        "grammarTitle": "Question Structure",
        "grammarIntro": "Finnish questions often start with the query phrase, making them direct:",
        "gTermA": "missä on",
        "gDescA": "where is",
        "gExA": "Missä on asema?",
        "gTermB": "miten pääsen",
        "gDescB": "how do I get",
        "gExB": "Miten pääsen keskustaan?",
        "clip": "Reitit Helsingissä, paikalliset opastavat",
        "podcast": "Kaupunkisuunnistus — jakso 8",
        "article": "Kartoita Helsinki: opas matkailijoille",
        "reader": [
          {
            "t": "Helsingissä on helppo kulkea. Kaupat ja asemat ovat usein lähellä toisiaan. Tarvitsetko vain "
          },
          {
            "w": "ohjeistusta",
            "d": "guidance"
          },
          {
            "t": ", ja olet pian perillä."
          }
        ],
        "reviewWord": "asema",
        "reviewSource": "from your street interaction, 2 days ago",
        "reviewMeaning": "the station (asema)"
      },
      {
        "chapterTitle": "Chapter 3 · Perhe",
        "lessonTitle": "Discussing Family",
        "goalTitle": "Talk about it: introduce your family",
        "goalLine": "Introduce your family to someone in Finnish.",
        "goalShort": "introduce your family",
        "scenario": "family",
        "partnerName": "Riikka",
        "partnerInitial": "R",
        "partnerRole": "naapuri",
        "partnerPlace": "Helsinki piha",
        "scenarioTitle": "Perhe · Helsinki",
        "scenarioSub": "Roleplay · meet & greet",
        "lessonPromptEn": "This is my mother and father.",
        "lessonHint": "Why use “minun”?",
        "bank": [
          "Tämä",
          "on",
          "minun",
          "äitini",
          "isäni",
          "perheeni"
        ],
        "bankEn": [
          "This",
          "is",
          "my",
          "my mother",
          "my father",
          "my family"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "Loistavaa! 🎉",
        "lessonCorrectBody": "“Minun” (my) personalizes your sentences — ownership is key!",
        "lessonWrongBody": "Start with “Tämä on” and use “minun” to show possession.",
        "cultureCaption": "Family gathering in Finland · evening",
        "cultureTitle": "Family is important",
        "cultureBody": "Finns highly value family, often spending holidays together. Introductions are brief, and names are emphasized.",
        "culturePhrase": "“Tämä on…” — direct introductions, keeping it simple.",
        "milestoneTitle": "You can now introduce your family — warmly, in Finnish.",
        "convo": [
          {
            "who": "p",
            "n": "Hei! Kuka tämä on?",
            "en": "Hi! Who is this?"
          },
          {
            "who": "u",
            "n": "Tämä on minun äitini.",
            "fb": "Excellent — brief and simple."
          },
          {
            "who": "p",
            "n": "Ihana tavata! Ja tämä?",
            "en": "Lovely to meet you! And this?"
          },
          {
            "who": "u",
            "n": "Tämä on minun isäni.",
            "fb": "Perfect — continue with the same structure."
          },
          {
            "who": "p",
            "n": "Miellyttävä perhe!",
            "en": "A delightful family!"
          }
        ],
        "debrief": [
          {
            "title": "Possessive structure",
            "body": "“Minun” is used to show possession, crucial in introductions."
          },
          {
            "title": "Concise intros",
            "body": "Keep introductions brief, focusing on names and roles."
          }
        ],
        "grammarMini": "possessive",
        "grammarTitle": "Possessive Pronouns",
        "grammarIntro": "Possession is shown using specific pronouns:",
        "gTermA": "minun",
        "gDescA": "my",
        "gExA": "Minun perheeni on pieni.",
        "gTermB": "hänen",
        "gDescB": "his/her",
        "gExB": "Hänen talonsa on suuri.",
        "clip": "Perhetavat suomalaisittain, iltaisin",
        "podcast": "Perheen esittely — jakso 10",
        "article": "Suomalainen perheidylli: kotona ja kylässä",
        "reader": [
          {
            "t": "Suomalaisissa kodeissa "
          },
          {
            "w": "perhe",
            "d": "family"
          },
          {
            "t": " on usein pieni, mutta tiivis. He viettävät aikaa "
          },
          {
            "w": "yhdessä",
            "d": "together"
          },
          {
            "t": ", vaikkapa saunan jälkeen."
          }
        ],
        "reviewWord": "perhe",
        "reviewSource": "from your family visit, 2 days ago",
        "reviewMeaning": "the family (perhe)"
      },
      {
        "chapterTitle": "Chapter 4 · Hotelli",
        "lessonTitle": "Checking In — Hotels",
        "goalTitle": "Settle in: check into a hotel",
        "goalLine": "Check into a hotel room with ease, in Finnish.",
        "goalShort": "check into a hotel",
        "scenario": "hotel",
        "partnerName": "Jari",
        "partnerInitial": "J",
        "partnerRole": "vastaanottovirkailija",
        "partnerPlace": "Helsinki hotelli",
        "scenarioTitle": "Hotelli · Helsinki",
        "scenarioSub": "Roleplay · book & relax",
        "lessonPromptEn": "I have a reservation under my name.",
        "lessonHint": "Why “varaus”?",
        "bank": [
          "Minulla",
          "on",
          "varaus",
          "nimelläni",
          "huone",
          "yksi"
        ],
        "bankEn": [
          "I have",
          "a",
          "reservation",
          "under my name",
          "room",
          "one"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "Upeaa! 🎉",
        "lessonCorrectBody": "“Varaus nimelläni” ensures your booking is recognized correctly.",
        "lessonWrongBody": "Begin with “Minulla on” for possession verbs.",
        "cultureCaption": "Checking into Helsinki hotels · evening",
        "cultureTitle": "Efficient and welcoming",
        "cultureBody": "Finnish hotels focus on efficient service. Keep interaction clear and quick, and always remember a “kiitos”.",
        "culturePhrase": "“Varaus” — essential for smooth transactions.",
        "milestoneTitle": "You can now check into a hotel — effortlessly, in Finnish.",
        "convo": [
          {
            "who": "p",
            "n": "Tervetuloa! Kuinka voin auttaa?",
            "en": "Welcome! How can I assist you?"
          },
          {
            "who": "u",
            "n": "Minulla on varaus nimelläni.",
            "fb": "Awesome — that covers it!"
          },
          {
            "who": "p",
            "n": "Hetkinen... kyllä, huone neljätoista.",
            "en": "One moment... yes, room fourteen."
          },
          {
            "who": "u",
            "n": "Kiitos paljon!",
            "fb": "Well done — concise and polite."
          },
          {
            "who": "p",
            "n": "Ole hyvä ja nauti vierailustasi!",
            "en": "Please enjoy your stay!"
          }
        ],
        "debrief": [
          {
            "title": "Reservation language",
            "body": "“Varaus” is key when referring to your booking in formal contexts."
          },
          {
            "title": "Checking in",
            "body": "Keep your interactions quick to suit Finnish service style."
          }
        ],
        "grammarMini": "possession",
        "grammarTitle": "Possession with 'Minulla on'",
        "grammarIntro": "'Minulla on' indicates that you possess something:",
        "gTermA": "Minulla on",
        "gDescA": "I have",
        "gExA": "Minulla on avain.",
        "gTermB": "kuka on",
        "gDescB": "who is",
        "gExB": "Kuka on paikalla?",
        "clip": "Hotellin vastaanottoa, iltapäivän hetkiä",
        "podcast": "Hotelliyö — jakso 5",
        "article": "Majoituksen tavat: sujuva sisäänkirjautuminen",
        "reader": [
          {
            "t": "Hotellissa on tärkeää "
          },
          {
            "w": "varmistaa",
            "d": "ensure"
          },
          {
            "t": " että kaikki on kunnossa heti alussa. "
          }
        ],
        "reviewWord": "varaus",
        "reviewSource": "from your hotel booking, 2 days ago",
        "reviewMeaning": "the reservation (varaus)"
      },
      {
        "chapterTitle": "Chapter 5 · Tori",
        "lessonTitle": "Shopping at the Market",
        "goalTitle": "Trade it: buy fresh produce",
        "goalLine": "Buy fresh produce from a market vendor, in Finnish.",
        "goalShort": "buy at the market",
        "scenario": "market",
        "partnerName": "Sami",
        "partnerInitial": "S",
        "partnerRole": "kauppias",
        "partnerPlace": "Helsinki tori",
        "scenarioTitle": "Tori · Helsinki",
        "scenarioSub": "Roleplay · purchase & bargain",
        "lessonPromptEn": "How much is this apple?",
        "lessonHint": "Why is it “paljonko”?",
        "bank": [
          "Paljonko",
          "tämä",
          "omena",
          "maksaa",
          "kilo",
          "hinta"
        ],
        "bankEn": [
          "How much",
          "this",
          "apple",
          "cost",
          "kilo",
          "price"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "Mahtavaa! 🎉",
        "lessonCorrectBody": "“Paljonko maksaa” sets you up for straightforward transactions.",
        "lessonWrongBody": "Use “Paljonko” for pricing questions, then item.",
        "cultureCaption": "Browsing Helsinki markets · morning",
        "cultureTitle": "Market culture in Finland",
        "cultureBody": "Finnish markets are vibrant but calm. Prices are fixed; politeness is a must, with a friendly nod and a genuine “kiitos”.",
        "culturePhrase": "“Paljonko tämä maksaa?” — quick and clear for transactions.",
        "milestoneTitle": "You can now buy at the market — confidently, in Finnish.",
        "convo": [
          {
            "who": "p",
            "n": "Hei! Mitä saisi olla tänään?",
            "en": "Hi! What can I get you today?"
          },
          {
            "who": "u",
            "n": "Paljonko tämä omena maksaa?",
            "fb": "Nice — straight to business!"
          },
          {
            "who": "p",
            "n": "Se maksaa yhden euron.",
            "en": "That costs one euro."
          },
          {
            "who": "u",
            "n": "Okei, otan sen. Kiitos!",
            "fb": "Excellent — simple transaction done!"
          },
          {
            "who": "p",
            "n": "Ole hyvä. Hyvää päivän jatkoa!",
            "en": "You're welcome. Have a good day!"
          }
        ],
        "debrief": [
          {
            "title": "Transactional language",
            "body": "“Paljonko” is crucial for all transactional contexts."
          },
          {
            "title": "Market etiquette",
            "body": "Always greet and thank the vendor; it maintains a good atmosphere."
          }
        ],
        "grammarMini": "interrogatives",
        "grammarTitle": "Asking Prices",
        "grammarIntro": "‘Paljonko maksaa’ prefaces many monetary inquiries:",
        "gTermA": "paljonko maksaa",
        "gDescA": "how much costs",
        "gExA": "Paljonko maksaa kilo perunoita?",
        "gTermB": "haluaisin",
        "gDescB": "I would like",
        "gExB": "Haluaisin kolme omenaa.",
        "clip": "Torin vilskettä, aamurutiinit",
        "podcast": "Torielämää — jakso 12",
        "article": "Torikauppa Helsingissä: miten toimia",
        "reader": [
          {
            "t": "Helsingin torit ovat täynnä "
          },
          {
            "w": "tuoreita",
            "d": "fresh"
          },
          {
            "t": " tuotteita. Asiakkaat "
          },
          {
            "w": "keskustelevat",
            "d": "converse"
          },
          {
            "t": " myyjien kanssa luontevasti."
          }
        ],
        "reviewWord": "omena",
        "reviewSource": "from your market visit, 2 days ago",
        "reviewMeaning": "the apple (omena)"
      },
      {
        "chapterTitle": "Chapter 6 · Hätätilanne",
        "lessonTitle": "Handling Emergencies",
        "goalTitle": "Manage it: call for help",
        "goalLine": "Call for help in an emergency, in Finnish.",
        "goalShort": "call for help",
        "scenario": "emergency",
        "partnerName": "Annika",
        "partnerInitial": "A",
        "partnerRole": "ensiapu",
        "partnerPlace": "Helsinki kadulla",
        "scenarioTitle": "Hätätilanne · Helsinki",
        "scenarioSub": "Roleplay · act & assure",
        "lessonPromptEn": "Help! I need an ambulance.",
        "lessonHint": "Why use “tarvitsen”?",
        "bank": [
          "Apua",
          "tarvitsen",
          "ambulanssin",
          "poliisi",
          "tuli",
          "palo"
        ],
        "bankEn": [
          "Help",
          "I need",
          "an ambulance",
          "police",
          "fire",
          "emergency"
        ],
        "correct": [
          0,
          1,
          2
        ],
        "lessonCorrectTitle": "Olet turvassa! 🎉",
        "lessonCorrectBody": "“Tarvitsen” (I need) expresses urgency effectively in emergencies.",
        "lessonWrongBody": "Start with “Apua!” then what is needed.",
        "cultureCaption": "Responding to emergencies in Finland · alert",
        "cultureTitle": "Emergency responses",
        "cultureBody": "Finns are calm under pressure. Emergency services are efficient, with clear Finnish or simple English appreciated.",
        "culturePhrase": "“Tarvitsen apua” — urgent and clear for emergencies.",
        "milestoneTitle": "You're now prepared for emergencies — efficiently, in Finnish.",
        "convo": [
          {
            "who": "p",
            "n": "Hei, mikä on hätänä?",
            "en": "Hi, what's the emergency?"
          },
          {
            "who": "u",
            "n": "Apua! Tarvitsen ambulanssin.",
            "fb": "Spot on — straight to the point!"
          },
          {
            "who": "p",
            "n": "Missä olette nyt?",
            "en": "Where are you right now?"
          },
          {
            "who": "u",
            "n": "Olen Helsingin kadulla.",
            "fb": "Good — location matters."
          },
          {
            "who": "p",
            "n": "Selvä, apu on tulossa.",
            "en": "Okay, help is on the way."
          }
        ],
        "debrief": [
          {
            "title": "Urgency and essentials",
            "body": "“Tarvitsen” is fundamental when expressing needs in emergencies."
          },
          {
            "title": "Communication",
            "body": "Stay calm and provide clear information, allowing helpers to respond promptly."
          }
        ],
        "grammarMini": "verbs",
        "grammarTitle": "Expressing Needs",
        "grammarIntro": "‘Tarvitsen’ communicates necessity and urgency:",
        "gTermA": "tarvitsen",
        "gDescA": "I need",
        "gExA": "Tarvitsen lääkärin.",
        "gTermB": "avun",
        "gDescB": "the help",
        "gExB": "Tarvitsen avun nyt.",
        "clip": "Hätätilanteessa reagoiminen, asiantuntijat selittää",
        "podcast": "Ensiapu — jakso 3",
        "article": "Suomalainen hätäpalvelu: tehokkuus ja rauhallisuus",
        "reader": [
          {
            "t": "Suomessa "
          },
          {
            "w": "hätätilanne",
            "d": "emergency"
          },
          {
            "t": " hoidetaan nopeasti ja tehokkaasti. Yhteydenotto on "
          },
          {
            "w": "tärkeää",
            "d": "important"
          },
          {
            "t": ", jotta avunsaanti onnistuu."
          }
        ],
        "reviewWord": "ambulanssi",
        "reviewSource": "from your emergency call, 2 days ago",
        "reviewMeaning": "the ambulance (ambulanssi)"
      }
    ]
  },
  "no": {
    "name": "Norwegian",
    "flag": "🇳🇴",
    "code": "NO",
    "font": "",
    "locale": "nb-NO",
    "greeting": "God morgen, Maya",
    "accent": "Norway (Oslo)",
    "chapters": [
      {
        "chapterTitle": "Chapter 1 · På kafé",
        "lessonTitle": "Greetings & warmth",
        "goalTitle": "Build it: order a coffee",
        "goalLine": "Order a coffee — politely, in Norwegian.",
        "goalShort": "order a coffee",
        "scenario": "cafe",
        "partnerName": "Ingrid",
        "partnerInitial": "I",
        "partnerRole": "servitør",
        "partnerPlace": "Oslo kafé",
        "scenarioTitle": "På kafé · Oslo",
        "scenarioSub": "Roleplay · order & a cozy exchange",
        "lessonPromptEn": "I would like a coffee, please.",
        "lessonHint": "Why “kunne jeg få”?",
        "bank": [
          "Kan jeg få",
          "en kaffe",
          "takk",
          "regningen",
          "vann",
          "uten"
        ],
        "bankEn": [
          "Can I have",
          "a coffee",
          "thank you",
          "the bill",
          "water",
          "without"
        ],
        "correct": [
          0,
          1,
          2
        ],
        "lessonCorrectTitle": "Perfekt! 🎉",
        "lessonCorrectBody": "“Kan jeg få …, takk” (may I have …, please) is the everyday polite order; “takk” covers please & thanks.",
        "lessonWrongBody": "Start with “Kan jeg få” (may I have), then the item, then “takk.”",
        "cultureCaption": "A kafé in Oslo · morning",
        "cultureTitle": "Equality, quiet, and kos",
        "cultureBody": "Norwegians value equality and understatement — you won't see much fuss or hierarchy, and first names are used with everyone. The cosy ideal of “kos” means a warm coffee, soft light and easy company. Politeness is gentle and brief; over-the-top service would feel out of place.",
        "culturePhrase": "“Takk” does double duty as please and thank you; “tusen takk” is a warm “thanks a lot.”",
        "milestoneTitle": "You can now order a coffee — politely, in Norwegian.",
        "convo": [
          {
            "who": "p",
            "n": "God morgen! Hva vil du ha?",
            "en": "Good morning! What would you like?"
          },
          {
            "who": "u",
            "n": "Kan jeg få en kaffe, takk.",
            "fb": "Great — “kan jeg få … takk” is natural and polite"
          },
          {
            "who": "p",
            "n": "Selvsagt. Noe mer?",
            "en": "Of course. Anything more?"
          },
          {
            "who": "u",
            "n": "Nei takk. Regningen, takk.",
            "fb": "Perfect — “regningen” = the bill"
          },
          {
            "who": "p",
            "n": "Klart, tretti kroner.",
            "en": "Sure — thirty kroner."
          }
        ],
        "debrief": [
          {
            "title": "“takk” everywhere",
            "body": "You used it for both please and thanks — exactly the Norwegian way."
          },
          {
            "title": "Pitch accent",
            "body": "Norwegian is a tonal-ish language — words have a gentle rising/falling melody."
          }
        ],
        "grammarMini": "en / et",
        "grammarTitle": "“en” vs “et” — the two genders",
        "grammarIntro": "Norwegian nouns are mostly “en” words or “et” words; the article also attaches to the end:",
        "gTermA": "en kaffe",
        "gDescA": "common gender — a coffee",
        "gExA": "en kaffe → kaffen (the coffee)",
        "gTermB": "et bord",
        "gDescB": "neuter gender — a table",
        "gExB": "et bord → bordet (the table)",
        "clip": "Morgenmarkedet i Oslo, med lokale",
        "podcast": "Kaffe med Ingrid — episode 4",
        "article": "Det lille ritualet rundt norsk kaffe",
        "reader": [
          {
            "t": "I Norge liker mange å tilbringe tid på en "
          },
          {
            "w": "kafé",
            "d": "café"
          },
          {
            "t": ". De drikker kaffe rolig og "
          },
          {
            "w": "prater",
            "d": "chat / talk (from prate)"
          },
          {
            "t": ". Til servitøren sier man "
          },
          {
            "w": "takk",
            "d": "thanks / please (takk)"
          },
          {
            "t": ". Det er et koselig øyeblikk."
          }
        ],
        "reviewWord": "regningen",
        "reviewSource": "from your kafé visit, 2 days ago",
        "reviewMeaning": "the bill / check (regningen)"
      },
      {
        "chapterTitle": "Chapter 2 · Veibeskrivelser",
        "lessonTitle": "Asking for Directions",
        "goalTitle": "Build it: ask for directions",
        "goalLine": "Ask someone where the train station is, in Norwegian.",
        "goalShort": "ask for directions",
        "scenario": "directions",
        "partnerName": "Erik",
        "partnerInitial": "E",
        "partnerRole": "lokal",
        "partnerPlace": "Oslo sentrum",
        "scenarioTitle": "Veibeskrivelser · Oslo",
        "scenarioSub": "Roleplay · finding your way",
        "lessonPromptEn": "Where is the train station?",
        "lessonHint": "Why “kan du fortelle meg”?",
        "bank": [
          "Kan du si",
          "hvor togstasjonen",
          "er",
          "unskyld",
          "nær",
          "vennlig"
        ],
        "bankEn": [
          "Can you say",
          "where the train station",
          "is",
          "excuse me",
          "near",
          "friendly"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "Perfekt! 🎉",
        "lessonCorrectBody": "“Kan du si hvor … er?” (can you say where … is?) is a polite way to ask for directions.",
        "lessonWrongBody": "Start with “Kan du si” (can you say), followed by the place, then “er.”",
        "cultureCaption": "Oslo sentrum · directions",
        "cultureTitle": "Directness with a smile",
        "cultureBody": "While Norwegians are direct, they pair it with a gentle approach. Providing directions often involves friendly gestures and simple language, as there's appreciation for straightforward communication.",
        "culturePhrase": "“Unskyld” is your go-to for attention, similar to excuse me.",
        "milestoneTitle": "You can now ask for directions — politely, in Norwegian.",
        "convo": [
          {
            "who": "p",
            "n": "Hei! Unskyld, trenger du hjelp?",
            "en": "Hi! Excuse me, do you need help?"
          },
          {
            "who": "u",
            "n": "Kan du si hvor togstasjonen er?",
            "fb": "Great — a polite question in Norwegian!"
          },
          {
            "who": "p",
            "n": "Selvfølgelig, gå rett frem og ta til venstre.",
            "en": "Of course, go straight and turn left."
          },
          {
            "who": "u",
            "n": "Tusen takk!",
            "fb": "Well done — expressing gratitude with 'tusen takk'."
          },
          {
            "who": "p",
            "n": "Ingen problem, ha en fin dag!",
            "en": "No problem, have a nice day!"
          }
        ],
        "debrief": [
          {
            "title": "Politeness in questions",
            "body": "Using 'kan du' shows you care about being gentle in your requests."
          },
          {
            "title": "Understanding directions",
            "body": "Practice commonly used directional terms to build language intuition."
          }
        ],
        "grammarMini": "Adverbs and Directions",
        "grammarTitle": "Prepositions and Directional Terms",
        "grammarIntro": "In Norwegian, prepositions such as 'til' (to) and 'fra' (from) help clarify directions:",
        "gTermA": "til venstre",
        "gDescA": "to the left",
        "gExA": "Ta til venstre ved krysset. (Turn left at the intersection)",
        "gTermB": "rett frem",
        "gDescB": "straight ahead",
        "gExB": "Gå rett frem til du ser butikken. (Go straight ahead until you see the store)",
        "clip": "Oslo sentrum, i midten av byen",
        "podcast": "Hjemme i Oslo — episode 5",
        "article": "Hvordan finne frem i storbyen",
        "reader": [
          {
            "t": "På reise er det nyttig å vite hvordan man "
          },
          {
            "w": "finner",
            "d": "finds (from finne)"
          },
          {
            "t": " frem. Mange spør: hvordan kommer jeg til "
          },
          {
            "w": "togstasjonen",
            "d": "the train station"
          },
          {
            "t": "?"
          }
        ],
        "reviewWord": "venstre",
        "reviewSource": "from your Oslo tour, 2 days ago",
        "reviewMeaning": "left"
      },
      {
        "chapterTitle": "Chapter 3 · Familie",
        "lessonTitle": "Talking About Family",
        "goalTitle": "Build it: introduce your family",
        "goalLine": "Introduce a family member, in Norwegian.",
        "goalShort": "introduce family",
        "scenario": "family",
        "partnerName": "Lise",
        "partnerInitial": "L",
        "partnerRole": "venn",
        "partnerPlace": "familietreff",
        "scenarioTitle": "Familie · Treff",
        "scenarioSub": "Roleplay · talking about loved ones",
        "lessonPromptEn": "This is my sister.",
        "lessonHint": "Why “dette er”?",
        "bank": [
          "Dette er",
          "min søster",
          "og",
          "mor",
          "far",
          "besteforeldre"
        ],
        "bankEn": [
          "This is",
          "my sister",
          "and",
          "mother",
          "father",
          "grandparents"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "Perfekt! 🎉",
        "lessonCorrectBody": "“Dette er …” (This is …) is a warm way to introduce family members.",
        "lessonWrongBody": "Start with “Dette er” (This is), then mention the person.",
        "cultureCaption": "Et familietreff",
        "cultureTitle": "Family Inclusivity",
        "cultureBody": "In Norway, family gatherings are occasions for connection and sharing stories. Everyone is treated with the same warmth and respect, regardless of generation.",
        "culturePhrase": "“Min” and “mine” for possessive, ‘min søster’ (my sister); ‘mine foreldre’ (my parents).",
        "milestoneTitle": "You can now introduce family members — proudly, in Norwegian.",
        "convo": [
          {
            "who": "p",
            "n": "Hei! Kan du fortelle om familien din?",
            "en": "Hi! Can you tell me about your family?"
          },
          {
            "who": "u",
            "n": "Dette er min søster og min mor.",
            "fb": "Lovely introductions!"
          },
          {
            "who": "p",
            "n": "Kjempeflott, hva gjør de?",
            "en": "Great, what do they do?"
          },
          {
            "who": "u",
            "n": "Min søster studerer, og min mor jobber.",
            "fb": "Clear explanation!"
          },
          {
            "who": "p",
            "n": "Så hyggelig å høre, takk for at du deler!",
            "en": "So nice to hear, thanks for sharing!"
          }
        ],
        "debrief": [
          {
            "title": "Sharing family stories",
            "body": "Norwegians enjoy talking about family as part of getting to know each other."
          },
          {
            "title": "Possessive pronouns",
            "body": "You'll use 'min', 'mitt', 'mine' often in family contexts."
          }
        ],
        "grammarMini": "Possessives",
        "grammarTitle": "The Possessive Form",
        "grammarIntro": "In Norwegian, use 'min', 'mitt', 'mine' for possessive references:",
        "gTermA": "min søster",
        "gDescA": "my sister",
        "gExA": "Dette er min søster. (This is my sister)",
        "gTermB": "mitt barn",
        "gDescB": "my child",
        "gExB": "Dette er mitt barn. (This is my child)",
        "clip": "Familietid i Norge",
        "podcast": "Liv i familien — episode 3",
        "article": "Viktigheten av familiebånd i Norge",
        "reader": [
          {
            "t": "I Norge er det vanlig å tilbringe tid med "
          },
          {
            "w": "familien",
            "d": "the family"
          },
          {
            "t": ". Det er en tid for "
          },
          {
            "w": "samtale",
            "d": "conversation"
          },
          {
            "t": " og latter."
          }
        ],
        "reviewWord": "søster",
        "reviewSource": "from your family gathering, yesterday",
        "reviewMeaning": "sister"
      },
      {
        "chapterTitle": "Chapter 4 · Hotel",
        "lessonTitle": "Checking into a Hotel",
        "goalTitle": "Build it: check into a hotel",
        "goalLine": "Check into a hotel, in Norwegian.",
        "goalShort": "check into a hotel",
        "scenario": "hotel",
        "partnerName": "Magnus",
        "partnerInitial": "M",
        "partnerRole": "resepsjonist",
        "partnerPlace": "Oslo Hotel",
        "scenarioTitle": "Hotell · Innsjekking",
        "scenarioSub": "Roleplay · arriving at your stay",
        "lessonPromptEn": "I have a reservation.",
        "lessonHint": "Why “jeg har en”?",
        "bank": [
          "Jeg har",
          "en reservasjon",
          "rom",
          "nøkkel",
          "heis",
          "frokost"
        ],
        "bankEn": [
          "I have",
          "a reservation",
          "room",
          "key",
          "elevator",
          "breakfast"
        ],
        "correct": [
          0,
          1,
          2,
          2
        ],
        "lessonCorrectTitle": "Perfekt! 🎉",
        "lessonCorrectBody": "“Jeg har en reservasjon” means I have a reservation, signaling your arrival.",
        "lessonWrongBody": "Start with “Jeg har” (I have), then the reservation.",
        "cultureCaption": "Innsjekking på hotell i Norge",
        "cultureTitle": "Efficiency and Warmth",
        "cultureBody": "Norwegian hospitality at hotels is characterized by efficiency paired with a cordial attitude. It's common to greet with warmth yet respect guests' privacy.",
        "culturePhrase": "“Rom” (room) is easy to remember since it matches the English sound.",
        "milestoneTitle": "You can now check into a hotel — efficiently, in Norwegian.",
        "convo": [
          {
            "who": "p",
            "n": "Velkommen til Oslo Hotel, hvordan kan jeg hjelpe?",
            "en": "Welcome to Oslo Hotel, how can I help?"
          },
          {
            "who": "u",
            "n": "Jeg har en reservasjon under navnet Hansen.",
            "fb": "You checked in like a native!"
          },
          {
            "who": "p",
            "n": "Fint, jeg finner det. Her er nøkkelen din.",
            "en": "Great, I found it. Here’s your key."
          },
          {
            "who": "u",
            "n": "Takk, når er frokost?",
            "fb": "Good question for hotel guests!"
          },
          {
            "who": "p",
            "n": "Frokost er fra sju til ni.",
            "en": "Breakfast is from seven to nine."
          }
        ],
        "debrief": [
          {
            "title": "Checking in, with ease",
            "body": "Mastering check-in basics helps you swiftly transition into travel mode."
          },
          {
            "title": "Booking terms",
            "body": "Terms like 'rom', 'nøkkel' are fundamental in hotel stays."
          }
        ],
        "grammarMini": "Verbs and Actions",
        "grammarTitle": "Essential Verbs for Travel",
        "grammarIntro": "Key actions like 'ha' (have) and 'si' (say) hold crucial roles in travel conversations:",
        "gTermA": "ha",
        "gDescA": "to have",
        "gExA": "Jeg har en nøkkel. (I have a key)",
        "gTermB": "si",
        "gDescB": "to say",
        "gExB": "Hva sa du? (What did you say?)",
        "clip": "Ankomst til hotellet",
        "podcast": "Snakke om reiser — episode 2",
        "article": "Hotelleksperienser i Norge",
        "reader": [
          {
            "t": "Når man bor på hotell i Norge, er det vanlig å spørre om "
          },
          {
            "w": "frokost",
            "d": "breakfast"
          },
          {
            "t": ". Det er en viktig del av oppholdet."
          }
        ],
        "reviewWord": "reservasjon",
        "reviewSource": "from your hotel stay, 1 day ago",
        "reviewMeaning": "reservation"
      },
      {
        "chapterTitle": "Chapter 5 · Marked",
        "lessonTitle": "Shopping at the Market",
        "goalTitle": "Build it: buy fruit at the market",
        "goalLine": "Purchase some fruit, in Norwegian.",
        "goalShort": "buy fruit",
        "scenario": "market",
        "partnerName": "Kari",
        "partnerInitial": "K",
        "partnerRole": "selger",
        "partnerPlace": "Oslo marked",
        "scenarioTitle": "Marked · Oslo",
        "scenarioSub": "Roleplay · selecting and purchasing",
        "lessonPromptEn": "How much is the apple?",
        "lessonHint": "Why “hvor mye”?",
        "bank": [
          "Hvor mye",
          "koster",
          "eplet",
          "veldig",
          "frisk",
          "dyrt"
        ],
        "bankEn": [
          "How much",
          "costs",
          "the apple",
          "very",
          "fresh",
          "expensive"
        ],
        "correct": [
          0,
          1,
          2,
          1
        ],
        "lessonCorrectTitle": "Perfekt! 🎉",
        "lessonCorrectBody": "“Hvor mye koster …?” (How much does … cost?) is your guide to market purchases.",
        "lessonWrongBody": "Start with “Hvor mye” (How much), then use “koster.”",
        "cultureCaption": "Marked i Solskinn",
        "cultureTitle": "Local Produce and Fresh Finds",
        "cultureBody": "Markets in Norway offer local and often organic options. Conversations are concise but friendly, and you'll often see familiar faces across stalls.",
        "culturePhrase": "“Frisk” (fresh) describes produce and is often heard in these exchanges.",
        "milestoneTitle": "You can now buy produce at a market — confidently, in Norwegian.",
        "convo": [
          {
            "who": "p",
            "n": "Hei! Kan jeg hjelpe deg med noe?",
            "en": "Hi! Can I help you with something?"
          },
          {
            "who": "u",
            "n": "Hvor mye koster eplet?",
            "fb": "You're mastering shopping inquiries!"
          },
          {
            "who": "p",
            "n": "Det koster fem kroner per stykke.",
            "en": "It costs five kroner each."
          },
          {
            "who": "u",
            "n": "Jeg tar tre, takk.",
            "fb": "Sensible choice!"
          },
          {
            "who": "p",
            "n": "Tusen takk, ha en fin dag!",
            "en": "Thanks a lot, have a nice day!"
          }
        ],
        "debrief": [
          {
            "title": "Market dialogues",
            "body": "Engaging with sellers is often quick; knowing key terms expedites your transactions."
          },
          {
            "title": "Numbers at the market",
            "body": "Getting familiar with numbers helps in understanding prices easily."
          }
        ],
        "grammarMini": "Numbers and Prices",
        "grammarTitle": "Numerics in Commerce",
        "grammarIntro": "Numbers are crucial in buying goods. Learn how to pronounce and understand:",
        "gTermA": "fem",
        "gDescA": "five",
        "gExA": "Fem epler, takk. (Five apples, please)",
        "gTermB": "ti",
        "gDescB": "ten",
        "gExB": "Koster det ti kroner? (Does it cost ten kroner?)",
        "clip": "Markedsliv",
        "podcast": "På tur til markedet — episode 6",
        "article": "Guide til norske markeder",
        "reader": [
          {
            "t": "På et norsk marked kan du kjøpe "
          },
          {
            "w": "frukt",
            "d": "fruit"
          },
          {
            "t": " og grønnsaker. De er ofte "
          },
          {
            "w": "økologiske",
            "d": "organic"
          },
          {
            "t": "."
          }
        ],
        "reviewWord": "eplet",
        "reviewSource": "from your market trip, 3 days ago",
        "reviewMeaning": "the apple"
      },
      {
        "chapterTitle": "Chapter 6 · Nødsituasjon",
        "lessonTitle": "Handling Emergencies",
        "goalTitle": "Build it: call for help",
        "goalLine": "Call for help in an emergency, in Norwegian.",
        "goalShort": "call for help",
        "scenario": "emergency",
        "partnerName": "Anna",
        "partnerInitial": "A",
        "partnerRole": "nabo",
        "partnerPlace": "Oslo",
        "scenarioTitle": "Nødsituasjon · Hjelp",
        "scenarioSub": "Roleplay · alerting for assistance",
        "lessonPromptEn": "I need help!",
        "lessonHint": "Why “jeg trenger”?",
        "bank": [
          "Jeg trenger",
          "hjelp",
          "nå",
          "ring",
          "politiet",
          "Ambulanse"
        ],
        "bankEn": [
          "I need",
          "help",
          "now",
          "call",
          "the police",
          "ambulance"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "Perfekt! 🎉",
        "lessonCorrectBody": "“Jeg trenger hjelp!” (I need help!) communicates urgency effectively.",
        "lessonWrongBody": "Begin with “Jeg trenger” (I need), then state “hjelp.”",
        "cultureCaption": "Nødsituasjoner i Norge",
        "cultureTitle": "Calm and Efficient",
        "cultureBody": "Norwegian emergency responses prioritize calm and clear communication. Knowing key phrases ensures essential aid is provided swiftly.",
        "culturePhrase": "“Nå” (now) imparts urgency when calling services.",
        "milestoneTitle": "You can now call for help in emergencies — clearly, in Norwegian.",
        "convo": [
          {
            "who": "p",
            "n": "Hei, er alt i orden?",
            "en": "Hi, is everything okay?"
          },
          {
            "who": "u",
            "n": "Jeg trenger hjelp nå!",
            "fb": "Essential urgency conveyed!"
          },
          {
            "who": "p",
            "n": "Jeg ringer politiet med en gang.",
            "en": "I'll call the police immediately."
          },
          {
            "who": "u",
            "n": "Takk, jeg venter her.",
            "fb": "Good, staying put for assistance!"
          },
          {
            "who": "p",
            "n": "Hjelpen er på vei.",
            "en": "Help is on the way."
          }
        ],
        "debrief": [
          {
            "title": "Emergency terms",
            "body": "Recognizing emergency vocabulary preps you for clear, crucial communication."
          },
          {
            "title": "Keeping composed",
            "body": "Learn phrases that express urgency without panic, ensuring quick assistance."
          }
        ],
        "grammarMini": "Imperatives and Commands",
        "grammarTitle": "Urgent Commands",
        "grammarIntro": "Urgent situations call for direct language. Learn key imperative forms:",
        "gTermA": "ring",
        "gDescA": "call",
        "gExA": "Ring ambulanse! (Call an ambulance!)",
        "gTermB": "hjelp",
        "gDescB": "help",
        "gExB": "Hjelp meg! (Help me!)",
        "clip": "Nødnummer Norge",
        "podcast": "Nødsituasjoner håndtert — episode 8",
        "article": "Hvordan forberede seg på nødsituasjoner",
        "reader": [
          {
            "t": "Hvis noe skjer, er det viktig å kunne "
          },
          {
            "w": "ringe",
            "d": "call"
          },
          {
            "t": " raskt etter "
          },
          {
            "w": "hjelp",
            "d": "help"
          },
          {
            "t": "."
          }
        ],
        "reviewWord": "hjelp",
        "reviewSource": "from emergency training, 4 days ago",
        "reviewMeaning": "help"
      }
    ]
  },
  "da": {
    "name": "Danish",
    "flag": "🇩🇰",
    "code": "DA",
    "font": "",
    "locale": "da-DK",
    "greeting": "Godmorgen, Maya",
    "accent": "Denmark (Copenhagen)",
    "chapters": [
      {
        "chapterTitle": "Chapter 1 · På caféen",
        "lessonTitle": "Greetings & warmth",
        "goalTitle": "Build it: order a coffee",
        "goalLine": "Order a coffee — politely, in Danish.",
        "goalShort": "order a coffee",
        "scenario": "cafe",
        "partnerName": "Mette",
        "partnerInitial": "M",
        "partnerRole": "tjener",
        "partnerPlace": "Copenhagen café",
        "scenarioTitle": "På caféen · Copenhagen",
        "scenarioSub": "Roleplay · order & a hyggelig exchange",
        "lessonPromptEn": "I would like a coffee, please.",
        "lessonHint": "Why “må jeg få”?",
        "bank": [
          "Må jeg få",
          "en kaffe",
          "tak",
          "regningen",
          "vand",
          "uden"
        ],
        "bankEn": [
          "May I have",
          "a coffee",
          "thank you",
          "the bill",
          "water",
          "without"
        ],
        "correct": [
          0,
          1,
          2
        ],
        "lessonCorrectTitle": "Perfekt! 🎉",
        "lessonCorrectBody": "“Må jeg få …, tak” (may I have …, please) is the everyday polite order; “tak” means please/thanks.",
        "lessonWrongBody": "Start with “Må jeg få” (may I have), then the item, then “tak.”",
        "cultureCaption": "A café in Copenhagen · morning",
        "cultureTitle": "Hygge: warmth, candles, calm",
        "cultureBody": "“Hygge” — cosy, content togetherness — is the heart of Danish life, and the café is its natural home: candles even by day, soft seating, no rush. Danes are relaxed and egalitarian; service is friendly and informal, and lingering over coffee is exactly the point.",
        "culturePhrase": "“Tak” covers thanks and please; “tusind tak” is a heartfelt “a thousand thanks.”",
        "milestoneTitle": "You can now order a coffee — politely, in Danish.",
        "convo": [
          {
            "who": "p",
            "n": "Godmorgen! Hvad vil du have?",
            "en": "Good morning! What would you like?"
          },
          {
            "who": "u",
            "n": "Må jeg få en kaffe, tak.",
            "fb": "Great — “må jeg få … tak” is natural and polite"
          },
          {
            "who": "p",
            "n": "Selvfølgelig. Andet?",
            "en": "Of course. Anything else?"
          },
          {
            "who": "u",
            "n": "Nej tak. Regningen, tak.",
            "fb": "Perfect — “regningen” = the bill"
          },
          {
            "who": "p",
            "n": "Klart, femogtyve kroner.",
            "en": "Sure — twenty-five kroner."
          }
        ],
        "debrief": [
          {
            "title": "“tak” for everything",
            "body": "You used it for please and thanks — just like Danes do."
          },
          {
            "title": "The soft “d”",
            "body": "The Danish soft “d” (in “mad”) sounds almost like an English “l” — tricky but charming."
          }
        ],
        "grammarMini": "en / et",
        "grammarTitle": "“en” vs “et” — the two genders",
        "grammarIntro": "Danish nouns are “en” or “et” words, and the article attaches to the end of the word:",
        "gTermA": "en kaffe",
        "gDescA": "common gender — a coffee",
        "gExA": "en kaffe → kaffen (the coffee)",
        "gTermB": "et bord",
        "gDescB": "neuter gender — a table",
        "gExB": "et bord → bordet (the table)",
        "clip": "Morgenmarkedet i København, med lokale",
        "podcast": "Kaffe med Mette — afsnit 4",
        "article": "Det lille ritual omkring dansk kaffe",
        "reader": [
          {
            "t": "I Danmark kan man godt lide at bruge tid på en "
          },
          {
            "w": "café",
            "d": "café"
          },
          {
            "t": ". De drikker kaffe i ro og "
          },
          {
            "w": "snakker",
            "d": "chat / talk (from snakke)"
          },
          {
            "t": ". Til tjeneren siger man "
          },
          {
            "w": "tak",
            "d": "thanks / please (tak)"
          },
          {
            "t": ". Det er et hyggeligt øjeblik."
          }
        ],
        "reviewWord": "regningen",
        "reviewSource": "from your café visit, 2 days ago",
        "reviewMeaning": "the bill / check (regningen)"
      },
      {
        "chapterTitle": "Chapter 2 · Finde vej",
        "lessonTitle": "Directions & guidance",
        "goalTitle": "Build it: ask for directions",
        "goalLine": "Ask someone for directions, politely, in Danish.",
        "goalShort": "ask for directions",
        "scenario": "directions",
        "partnerName": "Lars",
        "partnerInitial": "L",
        "partnerRole": "lokal",
        "partnerPlace": "København gader",
        "scenarioTitle": "Finde vej · København",
        "scenarioSub": "Roleplay · asking & understanding",
        "lessonPromptEn": "Could you tell me where the station is?",
        "lessonHint": "Why “kan du fortælle mig”?",
        "bank": [
          "Kan du",
          "fortælle mig",
          "hvor",
          "stationen",
          "er",
          "tak"
        ],
        "bankEn": [
          "Can you",
          "tell me",
          "where",
          "the station",
          "is",
          "thank you"
        ],
        "correct": [
          0,
          1,
          2,
          5
        ],
        "lessonCorrectTitle": "Fantastisk! 🎉",
        "lessonCorrectBody": "“Kan du fortælle mig … tak” is the standard polite way to ask for directions.",
        "lessonWrongBody": "Start with “Kan du fortælle mig” (can you tell me), then directions, then “tak.”",
        "cultureCaption": "Navigating the streets of Copenhagen",
        "cultureTitle": "Cyclists and Smiles",
        "cultureBody": "Danes are eager to help with directions — often on a bike! Friendly smiles and simple phrases make the interaction light and enjoyable.",
        "culturePhrase": "“venstre” for left, “højre” for right.",
        "milestoneTitle": "You can now ask for directions — politely, in Danish.",
        "convo": [
          {
            "who": "p",
            "n": "Hej! Har du brug for hjælp?",
            "en": "Hi! Do you need help?"
          },
          {
            "who": "u",
            "n": "Kan du fortælle mig, hvor stationen er, tak?",
            "fb": "Good job; very clear and polite!"
          },
          {
            "who": "p",
            "n": "Ja, selvfølgelig. Det er til venstre.",
            "en": "Yes, of course. It's to the left."
          },
          {
            "who": "u",
            "n": "Mange tak!",
            "fb": "Excellent — 'mange tak' gives thanks emphasis"
          },
          {
            "who": "p",
            "n": "Ingen årsag, god tur!",
            "en": "No problem, have a good trip!"
          }
        ],
        "debrief": [
          {
            "title": "Emphasis with 'mange'",
            "body": "By adding 'mange' (many), your 'thanks' carry more weight."
          },
          {
            "title": "The Danish 'g'",
            "body": "In words like 'god', the 'g' is softer, almost like 'y' in yes."
          }
        ],
        "grammarMini": "ordfølgning",
        "grammarTitle": "Ordering questions",
        "grammarIntro": "The structure of a question in Danish often follows the same order as in English but notice inversion in simpler queries:",
        "gTermA": "hvor er den?",
        "gDescA": "where is it?",
        "gExA": "hvor er stationen?",
        "gTermB": "kan du hjælpe?",
        "gDescB": "can you help?",
        "gExB": "kan du vise mig vejen?",
        "clip": "Gadeudsigter i København",
        "podcast": "Tales of Copenhagen — Chapter 2",
        "article": "Navigating Danish Streets: A Local's Guide",
        "reader": [
          {
            "t": "I København er der mange cykelstier. Hvis du farer vild, kan du "
          },
          {
            "w": "spørge",
            "d": "ask"
          },
          {
            "t": " en lokal om vej."
          },
          {
            "t": " De er ofte venlige til at hjælpe."
          }
        ],
        "reviewWord": "venstre",
        "reviewSource": "from your directions, 2 days ago",
        "reviewMeaning": "left (venstre)"
      },
      {
        "chapterTitle": "Chapter 3 · Familie",
        "lessonTitle": "Family & connections",
        "goalTitle": "Build it: introduce your family",
        "goalLine": "Introduce your family members by name, in Danish.",
        "goalShort": "introduce your family",
        "scenario": "family",
        "partnerName": "Anna",
        "partnerInitial": "A",
        "partnerRole": "ven",
        "partnerPlace": "danskamerikansk hus",
        "scenarioTitle": "Familieliv · Introduktioner",
        "scenarioSub": "Roleplay · family & relationships",
        "lessonPromptEn": "This is my mother.",
        "lessonHint": "Why use “min”?",
        "bank": [
          "Det her er",
          "min",
          "mor",
          "og",
          "far",
          "søster"
        ],
        "bankEn": [
          "This is",
          "my",
          "mother",
          "and",
          "father",
          "sister"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "Perfekt! 🎉",
        "lessonCorrectBody": "“Det her er …” introduces someone in a polite and clear manner; using “min” shows possession.",
        "lessonWrongBody": "Begin with 'Det her er' followed by 'min' and the family member.",
        "cultureCaption": "Family gathering in a Danish home",
        "cultureTitle": "Families and Festivities",
        "cultureBody": "Families in Denmark cherish gatherings. Whether it's a birthday or a holiday, there's always coffee and cakes. Warmth and equality often characterize the interaction.",
        "culturePhrase": "“mor” for mother, “far” for father.",
        "milestoneTitle": "You can now introduce your family — confidently, in Danish.",
        "convo": [
          {
            "who": "p",
            "n": "Hej! Hvem er det her?",
            "en": "Hi! Who is this?"
          },
          {
            "who": "u",
            "n": "Det her er min mor, og det her er min søster.",
            "fb": "Nicely done! Family introductions made easy."
          },
          {
            "who": "p",
            "n": "Hyggeligt at møde jer!",
            "en": "Nice to meet you!"
          },
          {
            "who": "u",
            "n": "Tak, i lige måde!",
            "fb": "Using 'i lige måde' (likewise) is friendly and polite"
          },
          {
            "who": "p",
            "n": "Sådan en dejlig familie.",
            "en": "What a lovely family."
          }
        ],
        "debrief": [
          {
            "title": "Possessives in Danish",
            "body": "Use 'min' for singular possessions like 'min far'."
          },
          {
            "title": "Danish small talk",
            "body": "Small talks in family settings are simple: smile and share."
          }
        ],
        "grammarMini": "Possessive Pronouns",
        "grammarTitle": "Min vs. Mit vs. Mine",
        "grammarIntro": "Danish possessive pronouns change depending on the gender and number of the noun:",
        "gTermA": "min",
        "gDescA": "for common-gender singular nouns",
        "gExA": "min mor",
        "gTermB": "mit",
        "gDescB": "for neuter-gender singular nouns",
        "gExB": "mit hus",
        "clip": "Dansk familiehygge",
        "podcast": "Family Bonds in Denmark — Episode 3",
        "article": "Living with a Danish Family: Experiences",
        "reader": [
          {
            "t": "Danish family life er ofte centreret rundt måltider og "
          },
          {
            "w": "fællesskab",
            "d": "community"
          },
          {
            "t": ". De nyder at "
          },
          {
            "w": "dele",
            "d": "share"
          },
          {
            "t": " historier."
          }
        ],
        "reviewWord": "søster",
        "reviewSource": "from your family intro, 3 days ago",
        "reviewMeaning": "sister (søster)"
      },
      {
        "chapterTitle": "Chapter 4 · På hotellet",
        "lessonTitle": "Check-in & services",
        "goalTitle": "Build it: check into a hotel",
        "goalLine": "Check into a hotel and ask for services, in Danish.",
        "goalShort": "check into a hotel",
        "scenario": "hotel",
        "partnerName": "Jens",
        "partnerInitial": "J",
        "partnerRole": "receptionist",
        "partnerPlace": "hotel i Aarhus",
        "scenarioTitle": "Indtjekning · Aarhus",
        "scenarioSub": "Roleplay · hotels & comfort",
        "lessonPromptEn": "My name is [Your Name], I have a reservation.",
        "lessonHint": "Why “Jeg har en reservation”?",
        "bank": [
          "Mit navn er",
          "jeg har",
          "en reservation",
          "værelse",
          "forkerte værelse",
          "beklager"
        ],
        "bankEn": [
          "My name is",
          "I have",
          "a reservation",
          "room",
          "wrong room",
          "sorry"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "Super! 🎉",
        "lessonCorrectBody": "Formulate politely using 'Mit navn er…' and put the reservation details to ease the check-in.",
        "lessonWrongBody": "Start with 'Mit navn er' (my name is), followed by your reservation statement.",
        "cultureCaption": "A Danish hotel reception in Aarhus",
        "cultureTitle": "Hospitality & Modernity",
        "cultureBody": "Danish hotels exemplify minimalist design and warm hospitality. Staff aims to ensure comfort in all respects — don't hesitate to ask for necessities.",
        "culturePhrase": "“værelse” for room, an essential hotel word.",
        "milestoneTitle": "You can now check into a hotel — with ease, in Danish.",
        "convo": [
          {
            "who": "p",
            "n": "Velkommen! Kan jeg hjælpe dig?",
            "en": "Welcome! Can I help you?"
          },
          {
            "who": "u",
            "n": "Mit navn er [Dit Navn], jeg har en reservation.",
            "fb": "Good, clear statement — makes check-in smooth."
          },
          {
            "who": "p",
            "n": "Selvfølgelig, lad mig finde din reservation.",
            "en": "Of course, let me find your reservation."
          },
          {
            "who": "u",
            "n": "Tak, jeg glæder mig til at se værelset.",
            "fb": "Looking forward and expressing excitement is appreciated."
          },
          {
            "who": "p",
            "n": "Her er din nøgle, nyd dit ophold!",
            "en": "Here is your key, enjoy your stay!"
          }
        ],
        "debrief": [
          {
            "title": "Politeness unplugged",
            "body": "'Beklager' and 'tak' epitomize politeness — use them often."
          },
          {
            "title": "Danish hotel life",
            "body": "Hotel stays in Denmark are cozy with a modern twist. Engage freely but respectfully."
          }
        ],
        "grammarMini": "definite nouns",
        "grammarTitle": "Adding 'en' and 'et'",
        "grammarIntro": "Turning a noun definite in Danish sometimes merely involves adding 'en' or 'et' at the end:",
        "gTermA": "et værelse",
        "gDescA": "a room",
        "gExA": "værelset (the room)",
        "gTermB": "en reservation",
        "gDescB": "a reservation",
        "gExB": "reservationen (the reservation)",
        "clip": "Hotel Views and Reviews in Aarhus",
        "podcast": "Visiting Aarhus — Episode 4",
        "article": "Understanding Danish Hotels: What to Expect",
        "reader": [
          {
            "t": "På et hotel i Danmark mødes du med venlighed og "
          },
          {
            "w": "komfort",
            "d": "comfort"
          },
          {
            "t": ". Receptionisten hjælper altid med et smil."
          }
        ],
        "reviewWord": "værelse",
        "reviewSource": "from your hotel check-in, 5 days ago",
        "reviewMeaning": "room (værelse)"
      },
      {
        "chapterTitle": "Chapter 5 · På markedet",
        "lessonTitle": "Shopping & bargaining",
        "goalTitle": "Build it: buy groceries at a market",
        "goalLine": "Buy groceries while shopping at a Danish market, with confidence.",
        "goalShort": "buy groceries",
        "scenario": "market",
        "partnerName": "Sofie",
        "partnerInitial": "S",
        "partnerRole": "sælger",
        "partnerPlace": "København marked",
        "scenarioTitle": "Markedshandel · København",
        "scenarioSub": "Roleplay · buy & interact",
        "lessonPromptEn": "How much does it cost?",
        "lessonHint": "Why use “hvor meget”?",
        "bank": [
          "Hvor meget",
          "koster",
          "det",
          "æbler",
          "kun kontant",
          "jeg vil gerne"
        ],
        "bankEn": [
          "How much",
          "does cost",
          "it",
          "apples",
          "cash only",
          "I would like"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "Flot! 🎉",
        "lessonCorrectBody": "'Hvor meget koster ...' sets the stage for a purchase discussion.",
        "lessonWrongBody": "Start with 'Hvor meget koster' followed by the item.",
        "cultureCaption": "A bustling market in Copenhagen",
        "cultureTitle": "Freshness & Interaction",
        "cultureBody": "Markets are vibrant places. Danes enjoy fresh produce and casual chats — stand by for some good-natured bargaining (in Danish!).",
        "culturePhrase": "“kontant” for cash — many stalls are 'cash only'.",
        "milestoneTitle": "You can now buy groceries — adeptly, in Danish.",
        "convo": [
          {
            "who": "p",
            "n": "Velkommen til markedet, hvad vil du have?",
            "en": "Welcome to the market, what would you like?"
          },
          {
            "who": "u",
            "n": "Hvor meget koster æblerne?",
            "fb": "Nice query, now you’ll see the prices!"
          },
          {
            "who": "p",
            "n": "De koster 10 kroner for et kilo.",
            "en": "They cost 10 kroner per kilo."
          },
          {
            "who": "u",
            "n": "Jeg vil gerne have to kilo, tak.",
            "fb": "Excellent — you've made a sound choice."
          },
          {
            "who": "p",
            "n": "Her er de, kun kontant, ikke?",
            "en": "Here they are, cash only, right?"
          }
        ],
        "debrief": [
          {
            "title": "Currency & Knick-knacks",
            "body": "'Kroner' is Denmark's currency; understanding prices in Danish helps."
          },
          {
            "title": "The richness of dialogues",
            "body": "Market dialogues are lively — embrace them with open arms."
          }
        ],
        "grammarMini": "question forms",
        "grammarTitle": "Formulating Questions",
        "grammarIntro": "Questions in markets may be direct — think auction-style, quick and effective:",
        "gTermA": "hvor meget",
        "gDescA": "how much",
        "gExA": "hvor meget koster det?",
        "gTermB": "vil",
        "gDescB": "want",
        "gExB": "du vil have det?",
        "clip": "København marked liv og lyde",
        "podcast": "Market Tales — Episode 5",
        "article": "The Shopper's Guide to Danish Markets",
        "reader": [
          {
            "t": "På markeder i Danmark kan man købe "
          },
          {
            "w": "friske",
            "d": "fresh"
          },
          {
            "t": " frugter og grøntsager. "
          },
          {
            "t": "Det er integreret med "
          },
          {
            "w": "kultur",
            "d": "culture"
          },
          {
            "t": " og samvær."
          }
        ],
        "reviewWord": "kontant",
        "reviewSource": "from your market purchase, 2 days ago",
        "reviewMeaning": "cash (kontant)"
      },
      {
        "chapterTitle": "Chapter 6 · Nødsituation",
        "lessonTitle": "Emergency & assistance",
        "goalTitle": "Build it: call for help",
        "goalLine": "Call for emergency assistance, if needed, in Danish.",
        "goalShort": "call for help",
        "scenario": "emergency",
        "partnerName": "Poul",
        "partnerInitial": "P",
        "partnerRole": "betjent",
        "partnerPlace": "København",
        "scenarioTitle": "Nødopkald · København",
        "scenarioSub": "Roleplay · emergency & action",
        "lessonPromptEn": "Help! I need an ambulance!",
        "lessonHint": "Why “hjælp”?",
        "bank": [
          "Hjælp",
          "jeg har brug for",
          "en ambulance",
          "politi",
          "brænd!",
          "nummer 112"
        ],
        "bankEn": [
          "Help",
          "I need",
          "an ambulance",
          "police",
          "fire!",
          "number 112"
        ],
        "correct": [
          0,
          1,
          2,
          5
        ],
        "lessonCorrectTitle": "Godt gået! 🎉",
        "lessonCorrectBody": "In emergencies, getting straight to the point saves time.",
        "lessonWrongBody": "Start with 'Hjælp', then specific assistance and 'nummer 112'.",
        "cultureCaption": "Emergency services in Denmark",
        "cultureTitle": "Rapid Response & Efficiency",
        "cultureBody": "The Danes practice efficiency even during crises. Swift communication and a calm approach ensure rapid assistance.",
        "culturePhrase": "“nummer 112” for emergencies — it's universal in Denmark.",
        "milestoneTitle": "You can now call for help — when suddenly needed, in Danish.",
        "convo": [
          {
            "who": "p",
            "n": "Er du okay? Hvad sker der?",
            "en": "Are you okay? What's happening?"
          },
          {
            "who": "u",
            "n": "Hjælp! Jeg har brug for en ambulance, nummer 112.",
            "fb": "Well done — help is underway!"
          },
          {
            "who": "p",
            "n": "Ambulancen er på vej, bliv rolig.",
            "en": "The ambulance is on its way, stay calm."
          },
          {
            "who": "u",
            "n": "Tak, jeg venter her.",
            "fb": "Calm communication ensures effective help."
          },
          {
            "who": "p",
            "n": "Hjælpen er her snart.",
            "en": "Help will be here soon."
          }
        ],
        "debrief": [
          {
            "title": "Efficiency of the System",
            "body": "The emergency number (112) links you directly to swift assistance."
          },
          {
            "title": "Calm Amidst Crisis",
            "body": "Even in emergencies, maintaining calmness benefits everyone involved."
          }
        ],
        "grammarMini": "imperatives",
        "grammarTitle": "Imperatives and Urgency",
        "grammarIntro": "In emergencies, imperative verbs are vital; each implies urgency clearly:",
        "gTermA": "hjælp",
        "gDescA": "help",
        "gExA": "hjælp mig!",
        "gTermB": "ring",
        "gDescB": "call",
        "gExB": "ring til 112!",
        "clip": "Nødtjenester og tips, København",
        "podcast": "Safety and You — Episode 6",
        "article": "Understanding Emergency Procedures in Denmark",
        "reader": [
          {
            "t": "I en kritisk situation kan man hurtigt ringe "
          },
          {
            "w": "112",
            "d": "emergency number"
          },
          {
            "t": ". Det er vigtigt at være rolig og klar til at give information."
          }
        ],
        "reviewWord": "ambulance",
        "reviewSource": "from your emergency call, 1 day ago",
        "reviewMeaning": "ambulance (ambulance)"
      }
    ]
  },
  "tl": {
    "name": "Filipino",
    "flag": "🇵🇭",
    "code": "TL",
    "font": "",
    "locale": "fil-PH",
    "greeting": "Magandang umaga, Maya",
    "accent": "Philippines (Manila)",
    "chapters": [
      {
        "chapterTitle": "Chapter 1 · Sa kapehan",
        "lessonTitle": "Greetings & warmth",
        "goalTitle": "Build it: order a coffee",
        "goalLine": "Order a coffee — politely, in Filipino.",
        "goalShort": "order a coffee",
        "scenario": "cafe",
        "partnerName": "Liza",
        "partnerInitial": "L",
        "partnerRole": "barista",
        "partnerPlace": "Manila kapehan",
        "scenarioTitle": "Sa kapehan · Manila",
        "scenarioSub": "Roleplay · order & a warm exchange",
        "lessonPromptEn": "I would like one coffee, please.",
        "lessonHint": "Why “po”?",
        "bank": [
          "Pwede",
          "po",
          "isang kape",
          "salamat",
          "tubig",
          "tsaa"
        ],
        "bankEn": [
          "Can",
          "please",
          "a coffee",
          "thank you",
          "water",
          "tea"
        ],
        "correct": [
          0,
          1,
          2
        ],
        "lessonCorrectTitle": "Ang galing! 🎉",
        "lessonCorrectBody": "“Pwede po …” = “may I please …” — the little word “po” adds respect to anything.",
        "lessonWrongBody": "Start with “Pwede” (may I), add “po” for respect, then the item.",
        "cultureCaption": "A kapehan in Manila · morning",
        "cultureTitle": "Respect lives in one word: “po”",
        "cultureBody": "Filipino warmth and respect run through the language — adding “po” (and “opo” for yes) to your speech shows courtesy to elders and strangers alike. Hospitality is huge: you'll be offered food and coffee constantly, and refusing too firmly can seem cold. A smile carries everything.",
        "culturePhrase": "“Salamat (po)” — thank you; add “po” to sound respectful to anyone older or in service.",
        "milestoneTitle": "You can now order a coffee — politely, in Filipino.",
        "convo": [
          {
            "who": "p",
            "n": "Magandang umaga! Ano po ang gusto ninyo?",
            "en": "Good morning! What would you like?"
          },
          {
            "who": "u",
            "n": "Pwede po isang kape, salamat.",
            "fb": "Great — “po” makes it nicely respectful"
          },
          {
            "who": "p",
            "n": "Sige po. May iba pa po ba?",
            "en": "Sure. Anything else?"
          },
          {
            "who": "u",
            "n": "Wala na po, salamat.",
            "fb": "Perfect — “wala na po” = nothing more, thanks"
          },
          {
            "who": "p",
            "n": "Salamat po, singkwenta pesos.",
            "en": "Thank you — fifty pesos."
          }
        ],
        "debrief": [
          {
            "title": "The magic of “po”",
            "body": "Sprinkling “po” through a sentence is the core of Filipino politeness — you used it well."
          },
          {
            "title": "Spanish loanwords",
            "body": "Many words (kape, mesa, silya) come from Spanish — a head start if you know it."
          }
        ],
        "grammarMini": "po / opo",
        "grammarTitle": "“po” and “opo” — politeness markers",
        "grammarIntro": "Filipino shows respect by inserting little particles, not by changing verbs:",
        "gTermA": "po",
        "gDescA": "respect particle, slipped into a sentence",
        "gExA": "Salamat po.",
        "gTermB": "opo",
        "gDescB": "respectful “yes” (vs casual “oo”)",
        "gExB": "Opo, gusto ko po.",
        "clip": "Umagang palengke sa Maynila, kasama ang mga lokal",
        "podcast": "Kape kasama si Liza — episode 4",
        "article": "Ang maliit na ritwal ng kapeng Pinoy",
        "reader": [
          {
            "t": "Sa Pilipinas, maraming tao ang gustong mag-stay sa "
          },
          {
            "w": "kapehan",
            "d": "café / coffee shop"
          },
          {
            "t": ". Dahan-dahan silang umiinom ng kape at "
          },
          {
            "w": "nag-uusap",
            "d": "talking together (from usap)"
          },
          {
            "t": ". Sa barista, sinasabi nila ang "
          },
          {
            "w": "salamat",
            "d": "thank you (salamat)"
          },
          {
            "t": ". Masayang bahagi ito ng araw."
          }
        ],
        "reviewWord": "salamat",
        "reviewSource": "from your kapehan visit, 3 days ago",
        "reviewMeaning": "thank you"
      },
      {
        "chapterTitle": "Chapter 2 · Pagtatanong ng Direksyon",
        "lessonTitle": "Asking Directions",
        "goalTitle": "Build it: ask for directions",
        "goalLine": "Ask for directions to a place — in Filipino.",
        "goalShort": "ask for directions",
        "scenario": "directions",
        "partnerName": "Carlos",
        "partnerInitial": "C",
        "partnerRole": "local resident",
        "partnerPlace": "Quezon City",
        "scenarioTitle": "Pagtatanong ng Direksyon · Quezon City",
        "scenarioSub": "Roleplay · ask & receive directions",
        "lessonPromptEn": "How do I get to the museum, please?",
        "lessonHint": "Use 'po' to show respect.",
        "bank": [
          "Paano",
          "pumunta",
          "sa museo",
          "po",
          "salamat",
          "direksyon"
        ],
        "bankEn": [
          "How",
          "to go",
          "to the museum",
          "please",
          "thank you",
          "directions"
        ],
        "correct": [
          0,
          1,
          3,
          2
        ],
        "lessonCorrectTitle": "Tama! 🎉",
        "lessonCorrectBody": "“Paano po pumunta …” means you're politely asking how to get somewhere.",
        "lessonWrongBody": "Begin with “Paano” (how), use “po” for respect, then where you want to go.",
        "cultureCaption": "Asking directions in Quezon City · daytime",
        "cultureTitle": "Politeness in asking",
        "cultureBody": "When asking for directions in the Philippines, it's common to approach with politeness and a smile. “Po” softens your request, making it more approachable.",
        "culturePhrase": "“Salamat po” — a respectful thank you after receiving help.",
        "milestoneTitle": "You can now politely ask for directions in Filipino.",
        "convo": [
          {
            "who": "u",
            "n": "Magandang hapon po! Paano po pumunta sa museo?",
            "fb": "Great — you’ve started with polite greeting and question"
          },
          {
            "who": "p",
            "n": "Tumawid po kayo ng kalsada tapos kumanan.",
            "en": "Cross the street and then turn right."
          },
          {
            "who": "u",
            "n": "Salamat po! Malayu-layo ba?",
            "fb": "Perfect — checking the distance is a good follow-up"
          },
          {
            "who": "p",
            "n": "Mga limang minuto po ang lakad.",
            "en": "It's about a five-minute walk."
          },
          {
            "who": "u",
            "n": "Maraming salamat po!",
            "fb": "Closing with gratefulness is always kind"
          }
        ],
        "debrief": [
          {
            "title": "The power of a smile",
            "body": "Incorporating a smile with your respectful inquiry signals friendliness and politeness."
          },
          {
            "title": "Regional directions",
            "body": "Directions often use landmarks — knowing local terms can help in understanding."
          }
        ],
        "grammarMini": "po / paano",
        "grammarTitle": "“po” and “paano” — politeness and asking",
        "grammarIntro": "Asking questions politely in Filipino is straightforward with certain particles:",
        "gTermA": "po",
        "gDescA": "a particle for respect",
        "gExA": "Tuloy po kayo.",
        "gTermB": "paano",
        "gDescB": "how to do something",
        "gExB": "Paano po magbukas?",
        "clip": "Pagtatanong ng direksyon sa Quiapo, Manila",
        "podcast": "Mga Kwento ni Carlos — episode 7",
        "article": "Ang sining ng paghingi ng direksyon",
        "reader": [
          {
            "t": "Sa Metro Manila, laging may mga naliligaw na nagtatanong ng "
          },
          {
            "w": "direksyon",
            "d": "directions"
          },
          {
            "t": ". Mabubuting tao ang mga "
          },
          {
            "w": "Pilipino",
            "d": "Filipinos"
          },
          {
            "t": " at sila ay laging handang "
          },
          {
            "w": "tumulong",
            "d": "help"
          },
          {
            "t": "."
          }
        ],
        "reviewWord": "direksyon",
        "reviewSource": "from your directions quest, 2 days ago",
        "reviewMeaning": "directions"
      },
      {
        "chapterTitle": "Chapter 3 · Pamilya",
        "lessonTitle": "Introducing your family",
        "goalTitle": "Build it: talk about your family",
        "goalLine": "Introduce your family members — in Filipino.",
        "goalShort": "introduce family",
        "scenario": "family",
        "partnerName": "Ana",
        "partnerInitial": "A",
        "partnerRole": "neighbor",
        "partnerPlace": "Marikina",
        "scenarioTitle": "Sa tahanan · Marikina",
        "scenarioSub": "Roleplay · meet and introduce family",
        "lessonPromptEn": "This is my father and my mother.",
        "lessonHint": "Learn the family terms.",
        "bank": [
          "Ito",
          "ang aking tatay",
          "at",
          "nanay",
          "po",
          "iyo"
        ],
        "bankEn": [
          "This",
          "is my father",
          "and",
          "mother",
          "respect",
          "your"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "Mahusay! 🎉",
        "lessonCorrectBody": "Filipino introductions are warm — combining 'po' at the end maintains that.",
        "lessonWrongBody": "Start with “Ito” (This), then introduce your family using 'tatay' and 'nanay'.",
        "cultureCaption": "Introducing family in Marikina · evening",
        "cultureTitle": "Family Importance",
        "cultureBody": "Family is central in Filipino life. When meeting someone new, sharing about family forms connections. Using ‘po’ shows respect when talking about them.",
        "culturePhrase": "“Kuya” and “Ate” — address for older brother/sister as respect.",
        "milestoneTitle": "You can now introduce your family in Filipino.",
        "convo": [
          {
            "who": "u",
            "n": "Magandang gabi! Ito po ang aking tatay.",
            "fb": "Nicely introduced with 'po' for respect"
          },
          {
            "who": "p",
            "n": "Kumusta po? Ikinagagalak kong makilala kayo!",
            "en": "How are you? Pleased to meet you!"
          },
          {
            "who": "u",
            "n": "Ito naman po ang aking nanay.",
            "fb": "Continue using 'po' for a touch of politeness"
          },
          {
            "who": "p",
            "n": "Masaya akong makilala kayo, Ale!",
            "en": "Happy to meet you, Ma'am!"
          },
          {
            "who": "u",
            "n": "Maraming salamat sa inyong pagbisita!",
            "fb": "Ending with gratitude is thoughtful"
          }
        ],
        "debrief": [
          {
            "title": "Respectful Titles",
            "body": "Besides 'po', using titles like 'kuya' (older brother) or 'ate' (older sister) shows respect."
          },
          {
            "title": "Family Terms",
            "body": "Knowing family terms enriches your conversations and bridges interactions."
          }
        ],
        "grammarMini": "tatay / nanay",
        "grammarTitle": "Family Terms – Building Connections",
        "grammarIntro": "Using family terms appropriately is central to respectful interaction:",
        "gTermA": "tatay",
        "gDescA": "father",
        "gExA": "Ito po ang tatay ko.",
        "gTermB": "nanay",
        "gDescB": "mother",
        "gExB": "Ito ang nanay ko.",
        "clip": "Usap-usapan ng pamilya sa kusina",
        "podcast": "Usapang Pitaka – episode 10",
        "article": "Pagsasama ng pamilya sa hapag-kainan",
        "reader": [
          {
            "t": "Mahilig ang mga Pilipino sa "
          },
          {
            "w": "pagsasalu-salo",
            "d": "gathering"
          },
          {
            "t": " kasama ang pamilya. Tuwing Linggo, nagtitipon ang "
          },
          {
            "w": "mga pamilya",
            "d": "the families"
          },
          {
            "t": " upang "
          },
          {
            "w": "kumain",
            "d": "eat"
          },
          {
            "t": " nang sabay-sabay."
          }
        ],
        "reviewWord": "nanay",
        "reviewSource": "from your family introduction, 2 days ago",
        "reviewMeaning": "mother"
      },
      {
        "chapterTitle": "Chapter 4 · Sa Hotel",
        "lessonTitle": "Check-in and hospitality",
        "goalTitle": "Build it: check into a hotel",
        "goalLine": "Check-in to your hotel — in Filipino.",
        "goalShort": "check into hotel",
        "scenario": "hotel",
        "partnerName": "Marco",
        "partnerInitial": "M",
        "partnerRole": "receptionist",
        "partnerPlace": "Cebu City Hotel",
        "scenarioTitle": "Sa hotel · Cebu",
        "scenarioSub": "Roleplay · check-in & paths to comfort",
        "lessonPromptEn": "I have a reservation under my name.",
        "lessonHint": "Introduce yourself formally.",
        "bank": [
          "May reserbasyon",
          "ako",
          "sa pangalang",
          "po",
          "salamat",
          "kwarto"
        ],
        "bankEn": [
          "Have a reservation",
          "I",
          "under the name",
          "respect",
          "thank you",
          "room"
        ],
        "correct": [
          0,
          1,
          3,
          2
        ],
        "lessonCorrectTitle": "Tama! 🎉",
        "lessonCorrectBody": "Stating your reservation with 'po' shows respect and clarity.",
        "lessonWrongBody": "Begin with “May reserbasyon” and use 'po' to add politeness.",
        "cultureCaption": "Check-in practices in Cebu City Hotel · afternoon",
        "cultureTitle": "Warm Hospitality",
        "cultureBody": "Filipinos are known for warm hospitality. During check-in, formal self-introductions include 'po', ensuring you strike a fine balance between respect and friendliness.",
        "culturePhrase": "“Salamat po!” — always solidify interactions with gratitude.",
        "milestoneTitle": "You can now check into a hotel in Filipino.",
        "convo": [
          {
            "who": "u",
            "n": "Magandang hapon po! May reserbasyon ako sa pangalang Cruz.",
            "fb": "Good start by stating your request clearly and politely"
          },
          {
            "who": "p",
            "n": "Sandali lang po, hahanapin ko po sa sistema.",
            "en": "One moment, I'll check our system."
          },
          {
            "who": "u",
            "n": "Salamat po!",
            "fb": "Politeness is always appreciated"
          },
          {
            "who": "p",
            "n": "Narito na po. Kwarto 204.",
            "en": "Here it is. Room 204."
          },
          {
            "who": "u",
            "n": "Maraming salamat po, sa inyong tulong!",
            "fb": "Ending with gratitude wells your interaction in warmth"
          }
        ],
        "debrief": [
          {
            "title": "Formal Inflections",
            "body": "Filipino language inside the hotel may have lots of 'po' and 'opo', but it's a sign of respect."
          },
          {
            "title": "Courteous Requests",
            "body": "When making requests during your stay, keep using 'po' to express politeness."
          }
        ],
        "grammarMini": "reserbasyon / kwarto",
        "grammarTitle": "Formal Terms at Check-in",
        "grammarIntro": "Be careful to use proper terms for a pleasant and clear experience:",
        "gTermA": "reserbasyon",
        "gDescA": "reservation",
        "gExA": "May reserbasyon po.",
        "gTermB": "kwarto",
        "gDescB": "room",
        "gExB": "Saang kwarto po",
        "clip": "Pagdating sa hotel, pagkuha ng susi",
        "podcast": "Mga Paglalakbay ni Marco — episode 8",
        "article": "Ang ligaya ng paglalakbay at ang ating mga hotel",
        "reader": [
          {
            "t": "Ang pag-check-in sa hotel sa "
          },
          {
            "w": "Pilipinas",
            "d": "Philippines"
          },
          {
            "t": " ay simple. Kung may "
          },
          {
            "w": "reserbasyon",
            "d": "reservation"
          },
          {
            "t": ", ipakita ang iyong "
          },
          {
            "w": "ID",
            "d": "identification"
          },
          {
            "t": " sa reception."
          }
        ],
        "reviewWord": "kwarto",
        "reviewSource": "from your hotel check-in, 3 days ago",
        "reviewMeaning": "room"
      },
      {
        "chapterTitle": "Chapter 5 · Sa Palengke",
        "lessonTitle": "Market Excursions",
        "goalTitle": "Build it: buy at the market",
        "goalLine": "Buy goods at the market — in Filipino.",
        "goalShort": "buy at the market",
        "scenario": "market",
        "partnerName": "Nena",
        "partnerInitial": "N",
        "partnerRole": "vendor",
        "partnerPlace": "Pasig Market",
        "scenarioTitle": "Sa palengke · Pasig City",
        "scenarioSub": "Roleplay · buy & enjoy local goods",
        "lessonPromptEn": "How much for this fruit, please?",
        "lessonHint": "Be friendly while asking.",
        "bank": [
          "Magkano",
          "tong prutas",
          "po",
          "salamat",
          "gulay",
          "ito"
        ],
        "bankEn": [
          "How much",
          "this fruit",
          "respect",
          "thank you",
          "vegetables",
          "this"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "Tama! 🎉",
        "lessonCorrectBody": "You've mastered the blend of friendliness and politeness.",
        "lessonWrongBody": "Start with 'Magkano', include 'po' for that extra friendliness.",
        "cultureCaption": "Haggling at Pasig Market · morning",
        "cultureTitle": "Finding a Bargain",
        "cultureBody": "The market (palengke) is where life meets colors. 'Po' while asking prices improves your chances of fair terms. Prepare to haggle; sellers expect it!",
        "culturePhrase": "“Salamat po!” — a warm thank you seals the deal.",
        "milestoneTitle": "You can now buy goods at the market in Filipino.",
        "convo": [
          {
            "who": "u",
            "n": "Magandang umaga po! Magkano tong prutas?",
            "fb": "Great polite inquiry!"
          },
          {
            "who": "p",
            "n": "Bente pesos po kada kilo.",
            "en": "Twenty pesos per kilo."
          },
          {
            "who": "u",
            "n": "Pwede pong ibaba pa?",
            "fb": "Nice bargaining technique!"
          },
          {
            "who": "p",
            "n": "Para sa inyo, desi-nueve pesos lang.",
            "en": "For you, only nineteen pesos."
          },
          {
            "who": "u",
            "n": "Salamat po! Bili na ako!",
            "fb": "Ending with a friendly purchase"
          }
        ],
        "debrief": [
          {
            "title": "The Art of Bargaining",
            "body": "Bargaining is common — mix respect and humor to get the best deal."
          },
          {
            "title": "Daily Market Routines",
            "body": "Knowing terms of weigh and price improve expedience and the fun of shopping."
          }
        ],
        "grammarMini": "prutas / gulay",
        "grammarTitle": "Fruit and Vegetables – Knowing Your Goods",
        "grammarIntro": "Familiarity with types of foods simplifies interactions:",
        "gTermA": "prutas",
        "gDescA": "fruit",
        "gExA": "Bumili ng prutas",
        "gTermB": "gulay",
        "gDescB": "vegetables",
        "gExB": "Maraming murang gulay",
        "clip": "Pag-iikot sa palengke, dibersidad ng produkto",
        "podcast": "Mga Balikbayan Boxes ni Nena — episode 5",
        "article": "Pagbisita sa palengke sa ating mga lungsod",
        "reader": [
          {
            "t": "Sa palengke, makakakita ka ng iba't ibang "
          },
          {
            "w": "prutas",
            "d": "fruits"
          },
          {
            "t": " at "
          },
          {
            "w": "gulay",
            "d": "vegetables"
          },
          {
            "t": ". Minsan, pwede kang makipagtawaran para sa "
          },
          {
            "w": "presyo",
            "d": "price"
          },
          {
            "t": "."
          }
        ],
        "reviewWord": "gulay",
        "reviewSource": "from your market adventure, 3 days ago",
        "reviewMeaning": "vegetables"
      },
      {
        "chapterTitle": "Chapter 6 · Emergency",
        "lessonTitle": "Emergency Assistance",
        "goalTitle": "Build it: seek emergency help",
        "goalLine": "Request emergency help — in Filipino.",
        "goalShort": "seek emergency help",
        "scenario": "emergency",
        "partnerName": "Inspector Ruiz",
        "partnerInitial": "R",
        "partnerRole": "police officer",
        "partnerPlace": "Cebu City",
        "scenarioTitle": "Sa oras ng sakuna · Cebu City",
        "scenarioSub": "Roleplay · seek help & guidance",
        "lessonPromptEn": "Please help me, it's urgent!",
        "lessonHint": "Urgency requires clear and polite communication.",
        "bank": [
          "Tulungan",
          "mo",
          "ako",
          "po",
          "mahalaga",
          "kailangan"
        ],
        "bankEn": [
          "Help",
          "me",
          "I",
          "please",
          "urgent",
          "need"
        ],
        "correct": [
          0,
          1,
          2,
          4
        ],
        "lessonCorrectTitle": "Nagawa mo! 🎉",
        "lessonCorrectBody": "Expressing emergencies politely ensures faster help.",
        "lessonWrongBody": "Use 'Tulungan' as a base, then stress its urgency.",
        "cultureCaption": "Emergency culture in Cebu City · anytime",
        "cultureTitle": "Effective Communication",
        "cultureBody": "In emergencies, concise language combined with respect enforces level-headed cooperation and effective responses.",
        "culturePhrase": "“Tulungan mo po ako” — activate emergency assistance commandingly yet respectfully.",
        "milestoneTitle": "You can now seek help in an emergency in Filipino.",
        "convo": [
          {
            "who": "u",
            "n": "Tulungan mo po ako! Kailangan ko ng tulong!",
            "fb": "Assertiveness together with respect is urgent and polite"
          },
          {
            "who": "p",
            "n": "Ano po ang nangyari?",
            "en": "What happened?"
          },
          {
            "who": "u",
            "n": "May aksidente sa kalsada.",
            "fb": "Quick and clear in explaining the situation"
          },
          {
            "who": "p",
            "n": "Makakauha kami ng tulong agad po.",
            "en": "We'll get help immediately."
          },
          {
            "who": "u",
            "n": "Salamat po sa mabilis na tugon!",
            "fb": "Closing with thanks ensures professionalism and warmth"
          }
        ],
        "debrief": [
          {
            "title": "Precision under Pressure",
            "body": "Using correct terms with brevity accelerates assistive responses."
          },
          {
            "title": "Stay Respectful",
            "body": "Maintaining respect even during emergencies may save time and ensure you receive the help you need."
          }
        ],
        "grammarMini": "kailangan / mahalaga",
        "grammarTitle": "Words of Emergency – Getting Assistance",
        "grammarIntro": "Choosing the proper words can make a big difference in emergencies:",
        "gTermA": "kailangan",
        "gDescA": "need",
        "gExA": "Kailangan ko ng tulong.",
        "gTermB": "mahalaga",
        "gDescB": "important",
        "gExB": "Mahalaga po ito.",
        "clip": "Sa gitna ng aksidente, tawagan ang mga awtoridad",
        "podcast": "Mga Insidente sa Kalsada — episode 12",
        "article": "Paghahanda sa oras ng sakuna at ang ating kultura",
        "reader": [
          {
            "t": "Sa mga oras ng "
          },
          {
            "w": "sakuna",
            "d": "disaster"
          },
          {
            "t": ", makikita mo ang "
          },
          {
            "w": "bayanihan",
            "d": "community spirit"
          },
          {
            "t": " ng mga Pilipino. Nagkakaisa ang "
          },
          {
            "w": "komunidad",
            "d": "community"
          },
          {
            "t": " para sa pagtulong."
          }
        ],
        "reviewWord": "sakuna",
        "reviewSource": "from your emergency situation, 1 day ago",
        "reviewMeaning": "disaster"
      }
    ]
  },
  "bn": {
    "name": "Bengali",
    "flag": "🇧🇩",
    "code": "BN",
    "font": "bn",
    "locale": "bn-BD",
    "greeting": "সুপ্রভাত, Maya",
    "accent": "Bangladesh / Kolkata",
    "chapters": [
      {
        "chapterTitle": "Chapter 1 · চায়ের দোকান Tea culture",
        "lessonTitle": "Greetings & warmth",
        "goalTitle": "Build it: order cha",
        "goalLine": "Order cha and chat — Bengali style.",
        "goalShort": "order cha",
        "scenario": "cafe",
        "partnerName": "রিয়া Riya",
        "partnerInitial": "R",
        "partnerRole": "cha wala",
        "partnerPlace": "Dhaka tea stall",
        "scenarioTitle": "চায়ের দোকান · Dhaka",
        "scenarioSub": "Roleplay · order cha & adda",
        "lessonPromptEn": "I would like one cup of tea.",
        "lessonHint": "Why “এক কাপ”?",
        "bank": [
          "আমি",
          "এক কাপ",
          "চা",
          "চাই",
          "পানি",
          "দুই"
        ],
        "bankEn": [
          "I",
          "a cup",
          "tea",
          "want",
          "water",
          "two"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "চমৎকার! (Wonderful!) 🎉",
        "lessonCorrectBody": "“আমি … চাই” = “I want”; “এক কাপ চা” is “one cup of tea,” with the counter কাপ.",
        "lessonWrongBody": "Start with “আমি” (I), then “এক কাপ” (one cup), then “চা,” then “চাই.”",
        "cultureCaption": "A tea stall in Dhaka · evening",
        "cultureTitle": "Cha and adda: the art of hanging out",
        "cultureBody": "In Bengal, the roadside tea stall is a social institution and “adda” — long, rambling, joyful conversation — is practically a cultural art form. A tiny glass of sweet, milky cha fuels hours of talk about everything and nothing. To share cha is to share time and friendship.",
        "culturePhrase": "“ধন্যবাদ (dhonnobad)” — thank you; “কত? (koto?)” means “how much?”",
        "milestoneTitle": "You can now order cha — and settle in for adda.",
        "convo": [
          {
            "who": "p",
            "n": "সুপ্রভাত! কী খাবেন?",
            "en": "Good morning! What will you have?"
          },
          {
            "who": "u",
            "n": "আমি এক কাপ চা চাই।",
            "fb": "Great — “এক কাপ চা” with the counter is natural"
          },
          {
            "who": "p",
            "n": "দুধ চা না রং চা?",
            "en": "Milk tea or black tea?"
          },
          {
            "who": "u",
            "n": "দুধ চা, ধন্যবাদ।",
            "fb": "Perfect — “দুধ চা” = milk tea"
          },
          {
            "who": "p",
            "n": "মাত্র দশ টাকা।",
            "en": "Just ten taka."
          }
        ],
        "debrief": [
          {
            "title": "Counter “কাপ”",
            "body": "You said “এক কাপ চা” (one cup tea) — counters make Bengali sound fluent."
          },
          {
            "title": "Aspirated “ধ”",
            "body": "“ধন্যবাদ” starts with a breathy “dh” — let a puff of air follow the d."
          }
        ],
        "grammarMini": "আমি … চাই",
        "grammarTitle": "“আমি … চাই” — how to say “I want”",
        "grammarIntro": "Bengali puts the verb at the end. “I want X” is literally “I X want”:",
        "gTermA": "আমি (ami)",
        "gDescA": "“I” — the subject, comes first",
        "gExA": "আমি চা চাই।",
        "gTermB": "চাই (chai)",
        "gDescB": "“want” — the verb, comes last",
        "gExB": "আমি পানি চাই।",
        "clip": "ঢাকার সকালের বাজার, স্থানীয়দের সঙ্গে",
        "podcast": "রিয়ার সঙ্গে চা — পর্ব ৪",
        "article": "বাঙালি চায়ের ছোট্ট রীতি",
        "reader": [
          {
            "t": "বাংলায়, সকাল শুরু হয় এক কাপ গরম "
          },
          {
            "w": "চা",
            "d": "cha — sweet milky tea"
          },
          {
            "t": " দিয়ে। মানুষ রাস্তার ধারে দাঁড়িয়ে চা "
          },
          {
            "w": "খায়",
            "d": "drinks / consumes (from খাওয়া)"
          },
          {
            "t": " আর একসঙ্গে "
          },
          {
            "w": "আড্ডা দেয়",
            "d": "hangs out / chats (adda dey)"
          },
          {
            "t": "। এটাই দিনের সেরা সময়।"
          }
        ],
        "reviewWord": "ধন্যবাদ",
        "reviewSource": "from your cha order, 3 days ago",
        "reviewMeaning": "thank you (dhonnobad)"
      },
      {
        "chapterTitle": "Chapter 2 · পথ নির্দেশ Directions",
        "lessonTitle": "Finding Your Way",
        "goalTitle": "Build it: ask for directions",
        "goalLine": "Ask for directions and understand them.",
        "goalShort": "ask directions",
        "scenario": "directions",
        "partnerName": "রাফি Rafi",
        "partnerInitial": "R",
        "partnerRole": "local guide",
        "partnerPlace": "Dhaka streets",
        "scenarioTitle": "পথ নির্দেশ · Dhaka",
        "scenarioSub": "Roleplay · seeking directions",
        "lessonPromptEn": "Where is the bus stop?",
        "lessonHint": "Why “কোথায়”?",
        "bank": [
          "বাস",
          "স্টপ",
          "কোথায়",
          "আছে",
          "রেল",
          "লফট"
        ],
        "bankEn": [
          "bus",
          "stop",
          "where",
          "is",
          "rail",
          "left"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "চমৎকার! (Wonderful!) 🎉",
        "lessonCorrectBody": "“কোথায়” = “where” starts the question. Use “আছে” at the end.",
        "lessonWrongBody": "Start with the place (e.g., “বাস স্টপ”), then “কোথায়,” conclude with “আছে.”",
        "cultureCaption": "Dhaka streets · navigating",
        "cultureTitle": "Asking Directions: Bengali style",
        "cultureBody": "In Bengal, asking for directions is often a chatty interaction. Locals are eager to help and might even walk part of the way with you to ensure you find your destination.",
        "culturePhrase": "“আপনি কি সাহায্য করতে পারেন? (apni ki shahajyo korte paren?)” — can you help?",
        "milestoneTitle": "You can now ask for directions confidently.",
        "convo": [
          {
            "who": "p",
            "n": "শুভ সকাল! কোথায় যাবেন?",
            "en": "Good morning! Where are you heading?"
          },
          {
            "who": "u",
            "n": "বাস স্টপ কোথায় আছে?",
            "fb": "Nice usage of “কোথায়” here."
          },
          {
            "who": "p",
            "n": "সামনে গিয়ে ডান দিকে।",
            "en": "Go ahead and take a right."
          },
          {
            "who": "u",
            "n": "ধন্যবাদ, আপনি খুব সহায়ক।",
            "fb": "Perfect — showing gratitude builds rapport."
          },
          {
            "who": "p",
            "n": "আরে না, ভালভাবে যান।",
            "en": "Oh, not at all. Safe travels!"
          }
        ],
        "debrief": [
          {
            "title": "Using “কোথায়”",
            "body": "“কোথায়” is placed at the start or middle to ask about location."
          },
          {
            "title": "Gratitude Culture",
            "body": "Expressing thanks like “ধন্যবাদ” often comes with a smile, bonding people warmly."
          }
        ],
        "grammarMini": "কোথায় … আছে",
        "grammarTitle": "“কোথায় … আছে” — how to ask “where is”",
        "grammarIntro": "In Bengali, questions about location use a format: location then “কোথায় আছে”:",
        "gTermA": "কোথায় (kothae)",
        "gDescA": "“where” — to inquire location",
        "gExA": "স্টেশন কোথায় আছে?",
        "gTermB": "আছে (achhe)",
        "gDescB": "“is/exists” — final verb form",
        "gExB": "পোস্ট অফিস কোথায় আছে?",
        "clip": "ঢাকার রাস্তার জীবন",
        "podcast": "রাফির পথ নির্দেশ — পর্ব ৫",
        "article": "ধানমন্ডির পথনির্দেশিকা",
        "reader": [
          {
            "t": "ঢাকায়, পথ খুঁজতে হলে ",
            "w": "জিজ্ঞাসা করতে হবে",
            "d": "have to ask (from জিজ্ঞাসা করা)"
          },
          {
            "t": "। লোকজন সাধারণত সাহায্য করতে "
          },
          {
            "w": "পছন্দ করে।",
            "d": "like to (from পছন্দ করা)"
          },
          {
            "t": " আরও সবিস্তারে পথ "
          },
          {
            "w": "দেখিয়ে দেয়।",
            "d": "show (from দেখানো)"
          }
        ],
        "reviewWord": "কোথায়",
        "reviewSource": "from your direction inquiry, 3 days ago",
        "reviewMeaning": "where (kothae)"
      },
      {
        "chapterTitle": "Chapter 3 · পরিবার Family",
        "lessonTitle": "Meet the Family",
        "goalTitle": "Build it: introduce your family",
        "goalLine": "Introduce your family to others.",
        "goalShort": "family intro",
        "scenario": "family",
        "partnerName": "মৌ Mou",
        "partnerInitial": "M",
        "partnerRole": "cousin",
        "partnerPlace": "home",
        "scenarioTitle": "পরিবার · home",
        "scenarioSub": "Roleplay · introduce family",
        "lessonPromptEn": "This is my father.",
        "lessonHint": "Why “এটা”?",
        "bank": [
          "এটা",
          "আমার",
          "বাবা",
          "মা",
          "ভাই",
          "ছেলে"
        ],
        "bankEn": [
          "this",
          "my",
          "father",
          "mother",
          "brother",
          "son"
        ],
        "correct": [
          0,
          1,
          2
        ],
        "lessonCorrectTitle": "চমৎকার! (Wonderful!) 🎉",
        "lessonCorrectBody": "“এটা আমার বাবা” = “this is my father”. Order is subject, possessive, object.",
        "lessonWrongBody": "Start with “এটা” (this), then “আমার” (my), then the relation.",
        "cultureCaption": "Family gathering at home",
        "cultureTitle": "Family Ties in Bengal",
        "cultureBody": "Families in Bengal are close-knit. Visiting family and participating in gatherings are integral for building strong family bonds.",
        "culturePhrase": "“শুভ জন্মদিন! (shubho jonmodin)” — Happy Birthday!",
        "milestoneTitle": "You can now introduce family members with confidence.",
        "convo": [
          {
            "who": "p",
            "n": "এই যে, তোমার পরিবার?",
            "en": "Here, is this your family?"
          },
          {
            "who": "u",
            "n": "হ্যাঁ, এটা আমার বাবা।",
            "fb": "Good! “এটা আমার বাবা” is clear and correct."
          },
          {
            "who": "p",
            "n": "তুমি কি তোমার ভাইকে দেখাতে পারো?",
            "en": "Can you show me your brother?"
          },
          {
            "who": "u",
            "n": "এটা আমার ভাই।",
            "fb": "Perfect use of “এটা” for introduction."
          },
          {
            "who": "p",
            "n": "তোমার পরিবার খুব সুন্দর।",
            "en": "Your family is very beautiful."
          }
        ],
        "debrief": [
          {
            "title": "Possessive “আমার”",
            "body": "“আমার” is used to convey possession, crucial in introducing family."
          },
          {
            "title": "The Warmth of “এটা”",
            "body": "“এটা” adds warmth, pointing to something or someone directly."
          }
        ],
        "grammarMini": "এটা আমার …",
        "grammarTitle": "“এটা আমার …” — introducing with “This is my …”",
        "grammarIntro": "In Bengali, introductions combine subject markers with possessive forms:",
        "gTermA": "এটা (eta)",
        "gDescA": "“this” — for introduction",
        "gExA": "এটা আমার মা।",
        "gTermB": "আমার (amar)",
        "gDescB": "“my” — possessive form",
        "gExB": "এটা আমার বোন।",
        "clip": "পরিবারের জমায়েত",
        "podcast": "মৌর সঙ্গে পরিবার — পর্ব ৬",
        "article": "বাংলার পারিবারিক বন্ধন",
        "reader": [
          {
            "t": "একটি "
          },
          {
            "w": "পরিবার",
            "d": "family"
          },
          {
            "t": " হলো শক্তিশালী সম্পর্কের এক অবিচ্ছেদ্য অংশ। "
          },
          {
            "w": "একসঙ্গে",
            "d": "together"
          },
          {
            "t": " সময় "
          },
          {
            "w": "কাটানো",
            "d": "spending"
          },
          {
            "t": " প্রতিদিনের উজ্জ্বলতা আনে।"
          }
        ],
        "reviewWord": "পরিবার",
        "reviewSource": "from your family introductions, 3 days ago",
        "reviewMeaning": "family (poribar)"
      },
      {
        "chapterTitle": "Chapter 4 · হোটেল Hotel",
        "lessonTitle": "Checking In",
        "goalTitle": "Build it: hotel check-in",
        "goalLine": "Check into a hotel and get settled.",
        "goalShort": "hotel check-in",
        "scenario": "hotel",
        "partnerName": "আরিফ Arif",
        "partnerInitial": "A",
        "partnerRole": "receptionist",
        "partnerPlace": "Dhaka hotel",
        "scenarioTitle": "হোটেল · Dhaka",
        "scenarioSub": "Roleplay · hotel check-in",
        "lessonPromptEn": "I have a reservation.",
        "lessonHint": "Why “সংরক্ষন”?",
        "bank": [
          "আমার",
          "সংরক্ষন",
          "আছে",
          "একটি",
          "ঘর",
          "বুকিং"
        ],
        "bankEn": [
          "my",
          "reservation",
          "have",
          "a",
          "room",
          "booking"
        ],
        "correct": [
          0,
          1,
          2
        ],
        "lessonCorrectTitle": "চমৎকার! (Wonderful!) 🎉",
        "lessonCorrectBody": "“আমার সংরক্ষন আছে” is how to say “I have a reservation”.",
        "lessonWrongBody": "Start with “আমার” (my), then “সংরক্ষন” (reservation), then “আছে” (have).",
        "cultureCaption": "Checking into a Dhaka hotel",
        "cultureTitle": "Hospitality in Bengali Hotels",
        "cultureBody": "Hospitality is vital in Bengal. Hotels often offer a warm greeting and personalized service to make guests feel at home.",
        "culturePhrase": "“আর কিছু লাগবে? (ar kicho lagbe?)” — Need anything else?",
        "milestoneTitle": "You can now confidently check into a hotel.",
        "convo": [
          {
            "who": "p",
            "n": "স্বাগতম, কিভাবে সাহায্য করতে পারি?",
            "en": "Welcome, how can I assist you?"
          },
          {
            "who": "u",
            "n": "আমার সংরক্ষন আছে।",
            "fb": "Great use of asserting your reservation."
          },
          {
            "who": "p",
            "n": "আপনার কি পাসপোর্ট আছে?",
            "en": "Do you have your passport?"
          },
          {
            "who": "u",
            "n": "হ্যাঁ, এটা নিন।",
            "fb": "Excellent, you're well-prepared."
          },
          {
            "who": "p",
            "n": "ধন্যবাদ, আপনার ঘর প্রস্তুত।",
            "en": "Thank you, your room is ready."
          }
        ],
        "debrief": [
          {
            "title": "Using “সংরক্ষন”",
            "body": "“সংরক্ষন” stands for reservation, essential when booking or confirming."
          },
          {
            "title": "Politeness Norms",
            "body": "Politeness is a staple; thanking and asking questions help solidify interactions."
          }
        ],
        "grammarMini": "আমার সংরক্ষন আছে",
        "grammarTitle": "“আমার সংরক্ষন আছে” — claiming your reservation",
        "grammarIntro": "To assert having anything, structure it with subject and verb:",
        "gTermA": "আমার (amar)",
        "gDescA": "“my” — ownership",
        "gExA": "আমার ঘর আছে।",
        "gTermB": "আছে (achhe)",
        "gDescB": "“have” — verb marque",
        "gExB": "আমার পাসপোর্ট আছে।",
        "clip": "ঢাকার একটি অভিজাত হোটেল",
        "podcast": "আরিফের হোটেল পরামর্শ — পর্ব ৭",
        "article": "হোটেল নেতৃত্বের আদবকায়দা",
        "reader": [
          {
            "t": "হোটেলে "
          },
          {
            "w": "চেকইন",
            "d": "check-in"
          },
          {
            "t": " করতে হলে "
          },
          {
            "w": "সময়",
            "d": "time"
          },
          {
            "t": " আপনার "
          },
          {
            "w": "সংরক্ষন",
            "d": "reservation"
          },
          {
            "t": " যাচাই করতে দেরি করবেন না।"
          }
        ],
        "reviewWord": "সংরক্ষন",
        "reviewSource": "from your hotel check-in, 3 days ago",
        "reviewMeaning": "reservation (songrokkhon)"
      },
      {
        "chapterTitle": "Chapter 5 · বাজার Market",
        "lessonTitle": "Bargain Wisely",
        "goalTitle": "Build it: buy vegetables",
        "goalLine": "Negotiate prices and shop at a local market.",
        "goalShort": "market shopping",
        "scenario": "market",
        "partnerName": "সাবিনা Sabina",
        "partnerInitial": "S",
        "partnerRole": "vendor",
        "partnerPlace": "Dhaka market",
        "scenarioTitle": "বাজার · Dhaka",
        "scenarioSub": "Roleplay · market shopping",
        "lessonPromptEn": "How much is this vegetable?",
        "lessonHint": "Why “কত”?",
        "bank": [
          "এটা",
          "সবজি",
          "কত",
          "টাকা",
          "লাগবে",
          "কপি"
        ],
        "bankEn": [
          "this",
          "vegetable",
          "how much",
          "taka",
          "cost",
          "cabbage"
        ],
        "correct": [
          0,
          1,
          2,
          3
        ],
        "lessonCorrectTitle": "চমৎকার! (Wonderful!) 🎉",
        "lessonCorrectBody": "“এটা সবজি কত টাকা?” is how to ask the cost of something.",
        "lessonWrongBody": "Begin with “এটা” (this), add “সবজি” (vegetable), and finish with “কত টাকা” (how many taka).",
        "cultureCaption": "Dhaka market · colorful chaos",
        "cultureTitle": "Market Bargaining: The Art",
        "cultureBody": "Bargaining is integral to market experiences in Bengal. A friendly yet firm negotiation is standard practice.",
        "culturePhrase": "“কম হবে? (kom hobe?)” — can it be less?",
        "milestoneTitle": "You can now comfortably shop in a local market.",
        "convo": [
          {
            "who": "p",
            "n": "সবজি কি চাইবেন?",
            "en": "Which vegetables would you like?"
          },
          {
            "who": "u",
            "n": "এটা সবজি কত টাকা?",
            "fb": "Well done, asking specific costs!"
          },
          {
            "who": "p",
            "n": "এই কপি পনেরো টাকা।",
            "en": "This cabbage is fifteen taka."
          },
          {
            "who": "u",
            "n": "কম হবে?",
            "fb": "Great way to start bargaining — smart!"
          },
          {
            "who": "p",
            "n": "আপনার জন্য বারো টাকা।",
            "en": "For you, twelve taka."
          }
        ],
        "debrief": [
          {
            "title": "Understanding “কত টাকা”",
            "body": "“কত টাকা” is the go-to structure for inquiring prices."
          },
          {
            "title": "Bargaining Norms",
            "body": "Bargaining involves politeness and a friendly tone — never insultingly low."
          }
        ],
        "grammarMini": "এটা … কত টাকা",
        "grammarTitle": "“এটা … কত টাকা” — inquiring about cost",
        "grammarIntro": "Comprehend cost queries by correlating object and price question:",
        "gTermA": "এটা (eta)",
        "gDescA": "“this” — addressing the item",
        "gExA": "এটা কপি কত টাকা?",
        "gTermB": "কত টাকা (koto taka)",
        "gDescB": "“how much” (money)",
        "gExB": "এটা চাল কত টাকা?",
        "clip": "ধাক্কাদার বাজারে",
        "podcast": "সাবিনার সঙ্গে বাজার — পর্ব ৮",
        "article": "বাংলার বাজারের গল্প",
        "reader": [
          {
            "t": "বাজারে "
          },
          {
            "w": "বেচাকেনা",
            "d": "trading"
          },
          {
            "t": " মানেই "
          },
          {
            "w": "আনন্দ",
            "d": "pleasure"
          },
          {
            "t": " পাওয়া, সেখানে "
          },
          {
            "w": "কানাঘুষো",
            "d": "bargain"
          },
          {
            "t": " চালিয়ে যেতে হবে।"
          }
        ],
        "reviewWord": "কম হবে?",
        "reviewSource": "from your market negotiation, 3 days ago",
        "reviewMeaning": "can it be less? (kom hobe?)"
      },
      {
        "chapterTitle": "Chapter 6 · জরুরি ব্যবস্থা Emergency",
        "lessonTitle": "Handling Emergencies",
        "goalTitle": "Build it: respond to emergencies",
        "goalLine": "Seek help and communicate during emergencies.",
        "goalShort": "emergency response",
        "scenario": "emergency",
        "partnerName": "তাহমিদ Tahmid",
        "partnerInitial": "T",
        "partnerRole": "helpful passerby",
        "partnerPlace": "Dhaka city",
        "scenarioTitle": "জরুরি ব্যবস্থা · Dhaka",
        "scenarioSub": "Roleplay · responding to emergencies",
        "lessonPromptEn": "I need help!",
        "lessonHint": "Why “সাহায্য”?",
        "bank": [
          "আমাকে",
          "সাহায্য",
          "করুন",
          "বাচাও",
          "এখানে",
          "পুলিশ"
        ],
        "bankEn": [
          "help",
          "me",
          "do",
          "save",
          "here",
          "police"
        ],
        "correct": [
          0,
          1,
          2
        ],
        "lessonCorrectTitle": "চমৎকার! (Wonderful!) 🎉",
        "lessonCorrectBody": "“আমাকে সাহায্য করুন” means directly asking for help.",
        "lessonWrongBody": "State “আমাকে” (me), then “সাহায্য” (help), finally “করুন” (do).",
        "cultureCaption": "Street emergency assistance",
        "cultureTitle": "Daring to Assist: Culture of Care",
        "cultureBody": "Bengalis are often quick to respond in emergencies. There's a deep-rooted sense of community support and altruism.",
        "culturePhrase": "“জরুরি নম্বর (zoruuri nombor)” — emergency number",
        "milestoneTitle": "You are now able to seek help during emergencies in Bengali.",
        "convo": [
          {
            "who": "p",
            "n": "কোন সমস্যা?",
            "en": "Is there a problem?"
          },
          {
            "who": "u",
            "n": "আমাকে সাহায্য করুন!",
            "fb": "Strong and clear call for aid."
          },
          {
            "who": "p",
            "n": "কি ঘটেছে?",
            "en": "What has happened?"
          },
          {
            "who": "u",
            "n": "পুলিশ ডাকুন, দয়া করে।",
            "fb": "Specific requests make for rapid response."
          },
          {
            "who": "p",
            "n": "আর কিছুর প্রয়োজন?",
            "en": "Do you need anything else?"
          }
        ],
        "debrief": [
          {
            "title": "Asserting Help",
            "body": "Using “করুন” in commands is assertive yet courteous."
          },
          {
            "title": "Local Support Systems",
            "body": "Understanding local phrases can accelerate emergency responses."
          }
        ],
        "grammarMini": "আমাকে সাহায্য করুন",
        "grammarTitle": "“আমাকে সাহায্য করুন” — asking for help",
        "grammarIntro": "With imperative expressions, clarify the object and action:",
        "gTermA": "আমাকে (amake)",
        "gDescA": "“me” — the person needing help",
        "gExA": "আমাকে বাচাও!",
        "gTermB": "সাহায্য করুন (shahajjo korun)",
        "gDescB": "“help” (do) — the request",
        "gExB": "এই অবস্থায় আমাকে সাহায্য করুন।",
        "clip": "ঢাকার জরুরি সাড়া",
        "podcast": "তাহমিদের সবার সুরক্ষা — পর্ব ৯",
        "article": "জরুরির সময় সাহায্যের কৌশল",
        "reader": [
          {
            "t": "জরুরি অবস্থার সময় "
          },
          {
            "w": "শান্ত",
            "d": "calm"
          },
          {
            "t": " থাকতে হবে এবং "
          },
          {
            "w": "সহায়ক",
            "d": "helpful"
          },
          {
            "t": " নেটওয়ার্কের সাথে "
          },
          {
            "w": "যোগাযোগ",
            "d": "contact"
          },
          {
            "t": " বজায় রাখতে হবে।"
          }
        ],
        "reviewWord": "জরুরি",
        "reviewSource": "from your emergency practice, 3 days ago",
        "reviewMeaning": "emergency (zoruri)"
      }
    ]
  }
};
