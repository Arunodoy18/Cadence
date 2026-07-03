const _L = {
  chapters: [
    {
      bank: ['a', 'b'],
      bankEn: ['A', 'B']
    }
  ]
};

const activeChapter = null;
const L = { ..._L, ...(_L.chapters?.[activeChapter || 0] || {}) };

console.log(L.bankEn);
