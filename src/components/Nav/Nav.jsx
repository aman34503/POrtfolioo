// Nav.js

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";
import "./style.css";

const Nav = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <>
      <motion.nav
        className="nav"
        initial={{ y: -400 }}
        animate={{ y: 0 }}
        transition={{
          duration: 1.2,
          type: "spring",
          ease: "easeInOut",
          delay: 0.8,
        }}
      >
        <div className="main-menu">
          <ul>
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="dark-mode-toggle" onClick={toggleDarkMode}>
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </div>
        <button className="theme-toggle" onClick={toggleDarkMode}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </motion.nav>
    </>
  );
};

export default Nav;
