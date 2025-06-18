import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <h1>Welcome to the Matching Pairs Game!</h1>
      <p>Test your memory and have fun 🎉</p>
      <nav>
        <Link to="/game" className="btn">Play the Game</Link>
        <Link to="/about" className="btn">About Us</Link>
        <Link to="/contact" className="btn">Feedback / Contact</Link>
      </nav>
    </div>
  );
}

export default Home;
