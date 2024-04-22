// Nav.js

import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import { motion } from "framer-motion";

const Nav = () => {
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
        <div className="main-menue">
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
      </motion.nav>
    </>
  );
};

export default Nav;
