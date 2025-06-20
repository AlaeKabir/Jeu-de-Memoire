import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      <div className="about-container">
        <h1 className="title">About Matching Pairs</h1>

        <section className="about-section">
          <p>
            <strong>Matching Pairs</strong> is a playful memory game that helps train your short-term memory by flipping and matching hidden cards. Each session is designed to sharpen attention, focus, and memory in a joyful and relaxing environment.
          </p>
        </section>

        <section className="about-section">
          <h2>🎯 Our Mission</h2>
          <p>
            Our mission is to create a cozy, engaging experience that promotes mental wellness and cognitive development for users of all ages. Whether you're taking a quick brain break or playing daily, Matching Pairs grows with you.
          </p>
        </section>

        <section className="about-section">
          <h2>👩‍💻 Our Team</h2>
          <p>
            Designed with 💖 by Lina & Alae — two developers who care deeply about user experience, clean code, and delightful design.
          </p>
        </section>

        <section className="about-section">
          <h2>📩 Share Your Thoughts</h2>
          <p>
            We’d love to hear from you! Have an idea or found a bug? Send us a message at<br />
            <a href="mailto:matchingpairs.team@gmail.com" className="email-link">matchingpairs.team@gmail.com</a>
          </p>
        </section>

        <Link to="/" className="back-link">← Back to Home</Link>
      </div>
    </div>
  );
}

export default About;
