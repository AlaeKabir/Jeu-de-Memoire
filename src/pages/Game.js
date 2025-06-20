import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "../components/Card";
import allCards from "../assets/cards"; 
function Game() {
  const location = useLocation();
  const difficulty = location.state?.selectedDifficulty || "Easy";
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);

  useEffect(() => {
    let numberOfPairs = 6; // Default Easy
    if (difficulty === "Medium") numberOfPairs = 9;
    if (difficulty === "Hard") numberOfPairs = 12;

    const selected = allCards.slice(0, numberOfPairs);
    const duplicated = [...selected, ...selected];
    const shuffled = duplicated
      .map(card => ({ ...card, uuid: crypto.randomUUID() }))
      .sort(() => Math.random() - 0.5);
    setCards(shuffled);
  }, [difficulty]);

  const handleClick = (uuid) => {
    if (flipped.length === 2 || flipped.includes(uuid)) return;
    const newFlipped = [...flipped, uuid];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      const [first, second] = newFlipped.map(id => cards.find(c => c.uuid === id));
      if (first.id === second.id) {
        setMatched([...matched, first.id]);
      }
      setTimeout(() => setFlipped([]), 800);
    }
  };

  const isFlipped = (card) => flipped.includes(card.uuid) || matched.includes(card.id);

  return (
    <div className="game-container">
      <h4 style={{ textAlign: "center", color: "#5D3A3A", fontWeight: "600" }}>
  Matching Pairs – {difficulty} Mode
</h4>

      <div className={`card-grid ${difficulty.toLowerCase()}`}>
        {cards.map(card => (
          <Card
            key={card.uuid}
            card={card}
            isFlipped={isFlipped(card)}
            onClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
}

export default Game;
