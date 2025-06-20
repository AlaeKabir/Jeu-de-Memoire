import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [message, setMessage] = useState("");

  return (
    <div className="contact">
      <h2>Feedback & Contact</h2>
      <form onSubmit={e => { e.preventDefault(); alert("Thanks for your feedback!"); }}>
        <textarea
          placeholder="Your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="5"
          cols="40"
        />
        <br />
        <button className="back-btn"type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
