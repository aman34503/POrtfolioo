import React from "react";
import { motion } from "framer-motion";
import "./style.css";
import profileImage from "./amanprofile.jpeg"; // Replace with your image file

const PageHeader = ({ isDarkTheme }) => {
  const ParentVariant = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const TextVariant = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
  };

  const ImageVariant = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { duration: 0.6, delay: 0.4 } },
    hover: { filter: "grayscale(100%)" },
  };

  return (
    <div className={`container ${isDarkTheme ? "dark-theme" : ""}`}>
      <motion.div
        className="text-area"
        variants={ParentVariant}
        initial="initial"
        animate="animate"
      >
        <span className="about-me-aman">
          <motion.img
            src={profileImage}
            alt="Your Name"
            variants={ImageVariant}
            whileHover="hover"
            className="profile-image"
          />
          <div>
            <motion.h2 variants={TextVariant}>
              👋 Hey, I'm Aman<em>.</em>
            </motion.h2>
            <motion.h4>Software Engineer.</motion.h4>
            <motion.h4>23, he/him</motion.h4>
          </div>
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