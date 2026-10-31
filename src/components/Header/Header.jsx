import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import "./Header.css";

const Header = () => {
  const { isDarkTheme, toggleTheme } = useTheme();
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="header" role="banner">
      <div className="header-inner">
        <Link to="/" className="header-logo" aria-label="Home">
          aman shrivastava
        </Link>

        <nav className="header-nav" aria-label="Main navigation">
          {!isHome ? (
            <Link to="/" className="header-link">
              home
            </Link>
          ) : (
            <a href="#work" className="header-link">
              work
            </a>
          )}
          <Link to="/blog" className="header-link">
            blog
          </Link>
          <Link to="/discussion" className="header-link">
            discussion
          </Link>
          <a
            href="https://github.com/aman34503"
            target="_blank"
            rel="noopener noreferrer"
            className="header-link"
          >
            github
          </a>
          <a
            href="https://www.linkedin.com/in/aman-shrivastava04/"
            target="_blank"
            rel="noopener noreferrer"
            className="header-link"
          >
            linkedin
          </a>
          <a
            href="https://twitter.com/Aman_eth1"
            target="_blank"
            rel="noopener noreferrer"
            className="header-link"
          >
            x
          </a>
          <button
            className="header-theme-toggle"
            onClick={toggleTheme}
            aria-label={isDarkTheme ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkTheme ? "☀" : "☽"}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
