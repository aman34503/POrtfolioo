import React from "react";
import { motion } from "framer-motion";
import "./style.css";

const ParentVariant = {
  initial: {
    x: 0,
  },
  animate: {
    y: 0,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const TextVariant = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: {
      duration: 1.2,
      type: "tween",
      ease: "easeInOut",
    },
  },
  // hover: {
  //   color: "#1F51FF",
  //   transition: {
  //     duration: 0.3,
  //     type: "tween",
  //     ease: "easeInOut",
  //   },
  // },
};

const PageHeader = () => {
  return (
    <>
      <motion.div
        className="text-area"
        variants={ParentVariant}
        initial="initial"
        animate="animate"
      >
        <span>
          <motion.h1 variants={TextVariant} whileHover="hover">
            hi there<em>.</em>
          </motion.h1>
        </span>
        <span>
          <motion.h1 variants={TextVariant} whileHover="hover">
            Aman
          </motion.h1>
          <motion.h1 variants={TextVariant} whileHover="hover">
            Shrivastava
          </motion.h1>
          <motion.h2 variants={TextVariant} whileHover="hover">
             Developer and front-end software engineer in half.
          </motion.h2>
        </span>
      </motion.div>
    </>
  );
};

export default PageHeader;
