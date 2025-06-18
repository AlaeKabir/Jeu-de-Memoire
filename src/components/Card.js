import React from "react";
import "./Card.css";

const Card = ({ card, isFlipped, onClick }) => (
  <div className="card" onClick={() => onClick(card.uuid)}>
    <div className={isFlipped ? "flipped" : ""}>
      <div className="front">{card.symbol}</div>
      <div className="back">❓</div>
    </div>
  </div>
);

export default Card;