// Auto-extracted from prototype
export function scenarioMeta(L: any, key: string) {
  const m: any = {
    cafe: { partnerName: L.partnerName, partnerInitial: L.partnerInitial, partnerRole: L.partnerRole, partnerPlace: L.partnerPlace, persona: "a friendly " + L.partnerRole + " at " + L.partnerPlace, level: "A2", scripted: true },
    freetalk: { partnerName: "A new friend", partnerInitial: "☺", partnerRole: "free talk", partnerPlace: "a relaxed chat", persona: "a warm, curious local friend making relaxed small talk about everyday life", level: "A2", scripted: false },
    doctor: { partnerName: "The doctor", partnerInitial: "✚", partnerRole: "clinic visit", partnerPlace: "a clinic", persona: "a kind, patient doctor gently asking a patient about simple symptoms", level: "A2", scripted: false },
    family: { partnerName: "Partner's parent", partnerInitial: "❤", partnerRole: "meeting family", partnerPlace: "a family home", persona: "the warm, curious parent of the learner's partner, asking friendly questions about their life over dinner", level: "A2", scripted: false },
    debate: { partnerName: "Debate partner", partnerInitial: "⚖", partnerRole: "B2 challenge", partnerPlace: "a friendly debate", persona: "a sharp but friendly debate partner discussing an everyday opinion topic, gently pushing back to challenge the learner", level: "B2", scripted: false },
    airport: { partnerName: "Gate agent", partnerInitial: "✈", partnerRole: "at the airport", partnerPlace: "an airport check-in desk", persona: "a brisk but helpful airport agent handling check-in, baggage and boarding questions", level: "A2", scripted: false },
    hotel: { partnerName: "Receptionist", partnerInitial: "🛎", partnerRole: "hotel check-in", partnerPlace: "a hotel front desk", persona: "a polite hotel receptionist checking a guest in and answering questions about the room and breakfast", level: "A2", scripted: false },
    market: { partnerName: "Stall vendor", partnerInitial: "🧺", partnerRole: "at the market", partnerPlace: "a busy street market", persona: "a lively market vendor selling fruit and goods, naming prices and happy to haggle a little", level: "A2", scripted: false },
    dinner: { partnerName: "Server", partnerInitial: "🍽", partnerRole: "at the restaurant", partnerPlace: "a restaurant", persona: "a friendly restaurant server taking an order, recommending dishes and handling the bill", level: "A2", scripted: false },
    interview: { partnerName: "Hiring manager", partnerInitial: "💼", partnerRole: "job interview", partnerPlace: "a job interview", persona: "a professional but warm hiring manager asking about the candidate's background and strengths", level: "B1", scripted: false },
    directions: { partnerName: "A passer-by", partnerInitial: "🧭", partnerRole: "asking directions", partnerPlace: "a street corner", persona: "a helpful local giving simple walking directions to a nearby place", level: "A1", scripted: false },
    pharmacy: { partnerName: "Pharmacist", partnerInitial: "✚", partnerRole: "at the pharmacy", partnerPlace: "a pharmacy", persona: "a calm pharmacist helping with a minor ailment and explaining how to take medicine", level: "A2", scripted: false },
    placement: { partnerName: "Mateo", partnerInitial: "M", partnerRole: "placement tutor", partnerPlace: "a quick placement chat", persona: "a friendly language tutor running a short spoken placement check; start very simple, then make each question a little harder, to gauge the learner's level", level: "A2", scripted: false }
  };
  return m[key] || m.cafe;
}
