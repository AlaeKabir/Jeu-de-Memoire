import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "../components/Card";

function Game() {
  const location = useLocation();
  const navigate = useNavigate();

  const difficulty = location.state?.selectedDifficulty || "Easy";
  const theme = location.state?.selectedTheme || "Hello Kitty";

  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  useEffect(() => {
    let numberOfPairs = 3;
    if (difficulty === "Medium") numberOfPairs = 9;
    if (difficulty === "Hard") numberOfPairs = 12;

    const themeKey = theme.toLowerCase().replace("é", "e").replace(/\s/g, "");

    const cardsForTheme = Array.from({ length: numberOfPairs }, (_, index) => ({
      id: index,
      img: `/assets/${themeKey}/${themeKey}${index + 1}.png`,
    }));

    const duplicated = [...cardsForTheme, ...cardsForTheme];
    const shuffled = duplicated
      .map(card => ({ ...card, uuid: crypto.randomUUID() }))
      .sort(() => Math.random() - 0.5);

    setCards(shuffled);
    setStartTime(Date.now());
  }, [difficulty, theme]);

  const handleClick = (uuid) => {
    if (flipped.length === 2 || flipped.includes(uuid)) return;
    const newFlipped = [...flipped, uuid];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      const [first, second] = newFlipped.map(id => cards.find(c => c.uuid === id));
      if (first.id === second.id) {
        setMatched(prev => {
          const updated = [...prev, first.id];
          // to check if game is finished
          if (updated.length === cards.length / 2) {
            setEndTime(Date.now());
          }
          return updated;
        });
      }
      setTimeout(() => setFlipped([]), 800);
    }
  };

  const isFlipped = (card) => flipped.includes(card.uuid) || matched.includes(card.id);

  const timeTaken = endTime && startTime ? Math.round((endTime - startTime) / 1000) : null;

  const handleRestart = () => {
    window.location.reload(); 
  };

  return (
    <div className="game-container">
      <h4 style={{ textAlign: "center", color: "#5D3A3A", fontWeight: "600" }}>
        Mode: {difficulty} | Theme: {theme}
      </h4>

      {endTime ? (
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <h2>🎉 Well done!</h2>
          <p>You matched all pairs!</p>
          <p>⏱ Time: <strong>{timeTaken} sec</strong></p>
          <p>🧠 Pairs matched: {matched.length}</p>
          <button onClick={handleRestart} className="btn">Play Again</button>
          <button onClick={() => navigate("/")} className="btn" style={{ marginLeft: "10px" }}>
            Return to Menu
          </button>
        </div>
      ) : (
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
      )}
    </div>
  );
}

export default Game;
