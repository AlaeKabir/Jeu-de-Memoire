import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <h1>Welcome to the Matching Pairs Game!</h1>
      <h6>Test your memory and have fun 🎉</h6>
      <nav>
        <Link to="/selection" className="btn">Play the Game</Link>
        
      </nav>
    </div>
  );
}

export default Home;
