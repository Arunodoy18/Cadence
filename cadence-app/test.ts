const L = {
  bank: ["Je voudrais", "un café", "au lait", "s'il vous plaît", "l'addition", "sans"],
  bankEn: ["I would like", "a coffee", "with milk", "please", "the bill", "without"]
};

const showHints = true;

L.bank.forEach((word, id) => {
  const show = showHints && L.bankEn?.[id];
  console.log(`Word: ${word}, Hint: ${show ? L.bankEn[id] : 'HIDDEN'}`);
});
