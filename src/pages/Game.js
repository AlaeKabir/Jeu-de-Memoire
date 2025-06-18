import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import initialCards from "../data/cards";
//import "./Game.css"; 

function Game() {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);

  useEffect(() => {
    setCards(initialCards);
  }, []);

  const handleClick = (uuid) => {
    if (flipped.length === 2 || flipped.includes(uuid)) return;
    const newFlipped = [...flipped, uuid];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      const [first, second] = newFlipped.map(id => cards.find(c => c.uuid === id));
      if (first.id === second.id) {
        setMatched([...matched, first.id]);
      }
      setTimeout(() => setFlipped([]), 1000);
    }
  };

  const isFlipped = (card) => flipped.includes(card.uuid) || matched.includes(card.id);

  return (
    <div className="game">
      <h2>Matching Pairs</h2>
      <div className="grid">
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
