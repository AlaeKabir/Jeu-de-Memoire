import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "../components/Card";

function Game() {
  const location = useLocation();
  const difficulty = location.state?.selectedDifficulty || "Easy";
  const theme = location.state?.selectedTheme || "Hello Kitty";

  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);

  useEffect(() => {
    let numberOfPairs = 6;
    if (difficulty === "Medium") numberOfPairs = 9;
    if (difficulty === "Hard") numberOfPairs = 12;

    const themeKey = theme.toLowerCase().replace("é", "e").replace(/\s/g, "");

    const cardsForTheme = Array.from({ length: numberOfPairs }, (_, index) => ({
      id: index,
      img: `/assets/${themeKey}/${index + 1}.png`, // Ex: /assets/hellokitty/1.png
    }));

    const duplicated = [...cardsForTheme, ...cardsForTheme];
    const shuffled = duplicated
      .map(card => ({ ...card, uuid: crypto.randomUUID() }))
      .sort(() => Math.random() - 0.5);

    setCards(shuffled);
  }, [difficulty, theme]);

  const handleClick = (uuid) => {
    if (flipped.length === 2 || flipped.includes(uuid)) return;
    const newFlipped = [...flipped, uuid];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      const [first, second] = newFlipped.map(id => cards.find(c => c.uuid === id));
      if (first.id === second.id) {
        setMatched(prev => [...prev, first.id]);
      }
      setTimeout(() => setFlipped([]), 800);
    }
  };

  const isFlipped = (card) => flipped.includes(card.uuid) || matched.includes(card.id);

  return (
    <div className="game-container">
      <h4 style={{ textAlign: "center", color: "#5D3A3A", fontWeight: "600", marginBottom: "1px" }}>
        Mode: {difficulty} 
      </h4>
      <h4 style={{ textAlign: "center", color: "#5D3A3A", fontWeight: "600", marginBottom: "20px" }}>
       Theme: {theme}
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
