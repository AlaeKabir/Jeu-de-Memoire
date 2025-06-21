import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Selection.css";


import sanrioKittyImg from "../assets/sanrio.png";
import carsImg from "../assets/cars.png";
import minionsImg from "../assets/minions.png";

function Selection() {
  const [difficulty, setDifficulty] = useState("Easy");
  const [theme, setTheme] = useState("Sanrio");
  const navigate = useNavigate();

  const startGame = () => {
    navigate("/game", {
      state: {
        selectedDifficulty: difficulty,
        selectedTheme: theme,
      },
    });
  };

  
  const themeImages = {
    "Sanrio": sanrioKittyImg,
    "Cars": carsImg,
    "Minions": minionsImg,
  };

  return (
    <div className="selection-page">
      <h2 className="title">Customize Your Game 🎀</h2>

      <div className="section">
        <h3>Choose Difficulty</h3>
        <div className="button-group">
          {["Easy", "Medium", "Hard"].map((level) => (
            <button
              key={level}
              className={`btn ${difficulty === level ? "active" : ""}`}
              onClick={() => setDifficulty(level)}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      <div className="section">
        <h3>Select Theme</h3>
        <div className="theme-options">
          {["Sanrio", "Cars", "Minions"].map((t) => (
            <div
              key={t}
              className={`theme-card ${theme === t ? "active" : ""}`}
              onClick={() => setTheme(t)}
            >
              <img src={themeImages[t]} alt={t} />
              <p>{t}</p>
            </div>
          ))}
        </div>
      </div>

      <button className="start-btn" onClick={startGame}>
        Start Game
      </button>
    </div>
  );
}

export default Selection;
