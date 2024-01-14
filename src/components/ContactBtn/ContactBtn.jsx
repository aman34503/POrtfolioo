// ContactBtn.jsx

import React from "react";
import { motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
import "./style.css";

const TextVariant = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: {
      duration: 1,
      delay: 1.8,
    },
  },
};

const icons = {
  arrow: <GoArrowUpRight className="arrow_up" />,
};

const ContactBtn = (props) => {
  const style = {
    width: `${props.width}`,
    backgroundColor: "white",
    border: "none",
    padding: `${props.padding}`,
    fontSize: "clamp(12px, 4px + 3vw, 18px)",
    cursor: "pointer",
    textDecoration: "none",
  };

  return (
    <motion.div
      className="contact-container"
      variants={TextVariant}
      transition={{
        duration: 1,
        type: "spring",
        ease: "easeIn",
        delay: 1.4,
      }}
    >
      <div className="baby-pink-box">
        <h4>
          I am currently open for full-time engineering roles, which involves
          user interface and experience design, frontend engineering as the
          core.
        </h4>
        <p>
          A collaborative team of engineers and designers, who are building
          great products. Interested in working together? Feel free to schedule
          a meet!
        </p>
        <a
          href="https://cal.com"
          target="_blank"
          rel="noopener noreferrer"
          className="schedule-meet-btn"
        >
          Schedule a meet / cal.com
        </a>
        <a href={props.link} target="_blank" rel="noreferrer">
          <motion.button
            style={style}
            className="cta-btn"
            whileTap={{ scale: 0.9 }}
          >
            {props.text}
            {icons.arrow}
          </motion.button>
        </a>
      </div>
    </motion.div>
  );
};

export default ContactBtn;
