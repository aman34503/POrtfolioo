import React from "react";
import { motion } from "framer-motion";
import profileImage from "../PageHeader/amanprofile.jpeg";
import "./style.css";

const MinimalHeader = ({ title, isDarkTheme }) => (
  <motion.div
    className={`minimal-header ${isDarkTheme ? "dark-theme" : ""}`}
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <img src={profileImage} alt="Aman" className="minimal-header-avatar" />
    <span className="minimal-header-title">{title}</span>
  </motion.div>
);

export default MinimalHeader;
