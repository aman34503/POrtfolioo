import React from "react";
import { motion } from "framer-motion";
import { RiJavascriptFill } from "react-icons/ri";
import "./style.css";

const SkillsBox = ({ isDarkTheme }) => {
  const Skills = {
    WebSkills: [
      { name: "HTML-CSS", emoji: "💻" },
      { name: "JavaScript", emoji: <RiJavascriptFill /> },
      { name: "React", emoji: "⚛️" },
      { name: "Context-api", emoji: "🔄" },
      { name: "React-Router-Dom", emoji: "🔗" },
      { name: "Styled-Components", emoji: "💅" },
      { name: "Strapi CMS", emoji: "📄" },
      { name: "Socket.io", emoji: "🔌" },
      { name: "SQL", emoji: "🗃️" },
      { name: "NodeJs", emoji: "🚀" },
      { name: "Firebase", emoji: "🔥" },
      { name: "GIT and GitHub", emoji: "🐙" },
    ],
    Programming: [
      { name: "C++/C", emoji: "🖥️" },
      { name: "Python", emoji: "🐍" },
      { name: "Data Structures", emoji: "📊" },
      { name: "Algorithms", emoji: "🧠" },
    ],
    Extras: [
      { name: "Linux", emoji: "🐧" },
      { name: "VScode", emoji: "⌨️" },
      { name: "Bash Scripting", emoji: "📝" },
      { name: "Docker", emoji: "🐳" },
    ],
  };

  const listItemVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1 },
  };

  return (
    <div className={`container ${isDarkTheme ? "dark-theme" : ""}`}>
      <motion.h1 className="skills-title">Proficiencies:</motion.h1>
      <div className="skills-wrap">
        <div className="skills-colomn-wrap">
          <motion.h3>As Web Developer</motion.h3>
          <ul>
            {Skills.WebSkills.map((skill, index) => (
              <motion.li
                key={index}
                variants={listItemVariants}
                initial="initial"
                whileHover="hover"
              >
                {skill.emoji} {skill.name}
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="skills-colomn-wrap">
          <motion.h3>As Programmer</motion.h3>
          <ul>
            {Skills.Programming.map((skill, index) => (
              <motion.li
                key={index}
                variants={listItemVariants}
                initial="initial"
                whileHover="hover"
              >
                {skill.emoji} {skill.name}
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="skills-colomn-wrap">
          <motion.h3>Extras</motion.h3>
          <ul>
            {Skills.Extras.map((skill, index) => (
              <motion.li
                key={index}
                variants={listItemVariants}
                initial="initial"
                whileHover="hover"
              >
                {skill.emoji} {skill.name}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillsBox;