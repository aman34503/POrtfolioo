import React from "react";
import { motion } from "framer-motion";
import "./style.css";

const ParentVariant = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const TextVariant = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
};

const PageHeader = () => {
  return (
    <div className="container">
      <motion.div
        className="text-area"
        variants={ParentVariant}
        initial="initial"
        animate="animate"
      >
        <span className="about-me-aman">
          <motion.h2 variants={TextVariant}>
            👋 Hey, I'm Aman<em>.</em>
          </motion.h2>
          <motion.h4 variants={TextVariant}>
            Software Engineer and Front-end Developer.
          </motion.h4>
          <motion.h4 variants={TextVariant}>23, he/him</motion.h4>
        </span>
      </motion.div>

      <div className="about-me">
        <h3>About Me</h3>
        <motion.p variants={TextVariant}>
          An engineer with a knack for design. My journey involves mastering the
          art of crafting scalable websites and applications. I am dedicated to
          creating experiences that resonate—blending intuitive user interfaces,
          captivating design aesthetics, developer-friendly solutions, and a
          commitment to making a meaningful impact.
        </motion.p>
      </div>
    </div>
  );
};

export default PageHeader;
