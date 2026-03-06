import React, { useState } from "react";
import { Nav, MinimalHeader } from "../../components";
import { useTheme } from "../../context/ThemeContext";
import { motion } from "framer-motion";
import "./style.css";

const Contact = () => {
  const { isDarkTheme, toggleTheme } = useTheme();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (userName && email && regex.test(email)) {
      const mailto = `mailto:?subject=Contact from ${encodeURIComponent(userName)}&body=${encodeURIComponent(
        `From: ${userName} (${email})\n\n${msg}`
      )}`;
      window.location.href = mailto;
      setUserName("");
      setEmail("");
      setMsg("");
    }
  };

  return (
    <motion.div
      className={`page-wrapper page-contact ${isDarkTheme ? "dark-theme" : ""}`}
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
    >
      <Nav isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
      <div className="app-container contact-container">
        <MinimalHeader title="Contact" isDarkTheme={isDarkTheme} />

        <p className="contact-sub">Get in touch or drop a message.</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-row">
            <input
              type="text"
              className="contact-input"
              placeholder="Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="email"
              className="contact-input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <textarea
            className="contact-input contact-textarea"
            placeholder="Message"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            rows={4}
          />
          <button type="submit" className="contact-btn">Send</button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
