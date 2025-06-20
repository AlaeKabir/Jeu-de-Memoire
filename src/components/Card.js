import React from "react";
import "./Card.css";

function Card({ card, isFlipped, onClick }) {
  return (
    <div className="card" onClick={() => onClick(card.uuid)}>
      {isFlipped ? (
        <img src={card.img} alt="card" className="card-img" />
      ) : (
        <div className="card-back" />
      )}
    </div>
  );
}

export default Card;