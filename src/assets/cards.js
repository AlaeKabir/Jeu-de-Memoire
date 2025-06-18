const cards = [
  { id: 1, symbol: "🐶" },
  { id: 2, symbol: "🐱" },
  { id: 3, symbol: "🦊" },
  { id: 4, symbol: "🐸" },
  { id: 5, symbol: "🐵" },
  { id: 6, symbol: "🐯" },
];

export default [...cards, ...cards]  // Duplicate for pairs
  .map((card, index) => ({ ...card, uuid: index + 1 }))
  .sort(() => Math.random() - 0.5); // Shuffle