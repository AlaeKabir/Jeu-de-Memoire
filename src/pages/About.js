import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      <div className="container">
        <h1>About Us</h1>
        <section>
          <p>
            <strong>Matching Pairs</strong> is an interactive memory game where users test and
            train their short-term memory by matching hidden card pairs. Each playthrough helps
            improve visual attention, concentration, and recall skills in a fun and engaging way.
          </p>
        </section>

        <section>
          <h2>Our Mission</h2>
          <p>
            Our goal is to offer a simple, joyful way for players of all ages to stimulate their
            cognitive abilities through play. Whether you're taking a short brain break or trying to
            boost memory over time, this game adapts to your pace and keeps you coming back!
          </p>
        </section>

        <section>
          <h2>Our Team</h2>
          <p>Our team consists of passionate developers who value creativity, clean design, and user-centered thinking.
          </p>
        </section>

        <section>
          <h2>Give Us Feedback</h2>
          <p>
            We'd love to hear from you! If you have ideas, suggestions, or bugs to report, feel free
            to reach out at <a href="mailto:matchingpairs.team@gmail.com">matchingpairs.team@gmail.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;