import React from "react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import "./style.css";

const LandingHeader = ({ isDarkTheme, toggleTheme }) => {
  return (
    <header className="landing-header">
      <Link to="/contact" className="landing-email-btn">
        <span className="landing-email-dot" />
        Write to me via email
      </Link>
      <div className="landing-header-right">
        <Link to="/discussion" className="landing-discussion-btn">Discussion</Link>
        <a href="https://twitter.com/Aman_eth1" target="_blank" rel="noopener noreferrer">Follow me on X</a>
        <a href="https://github.com/aman34503" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/aman-shrivastava04/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <Link to="/blog">Blog</Link>
        <Link to="/">Home</Link>
        <button className="landing-theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
          {isDarkTheme ? <FaSun size={18} /> : <FaMoon size={18} />}
        </button>
      </div>
    </header>
  );
};

export default LandingHeader;
