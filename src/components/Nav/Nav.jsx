import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa"; // Import icons from react-icons

const Nav = ({ isDarkTheme, toggleTheme }) => {
  return (
    <motion.nav
      className={`nav ${isDarkTheme ? "dark-theme" : ""}`}
      initial={{ y: -400 }}
      animate={{ y: 0 }}
      transition={{
        duration: 1.2,
        type: "spring",
        ease: "easeInOut",
        delay: 0.8,
      }}
    >
      <div className="nav-container">
        <ul className="nav-links">
          <li>
            <NavLink exact to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/discussion">Discussion</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
        {/* Theme Toggle Button */}
        <button className="theme-toggle-btn" onClick={toggleTheme}>
          {isDarkTheme ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
      </div>
    </motion.nav>
  );
};

export default Nav;
