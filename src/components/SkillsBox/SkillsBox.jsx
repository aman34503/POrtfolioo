import React from "react";
import { motion } from "framer-motion";

import "./style.css";
const SkillsBox = () => {
  const Skills = {
    WebSkills: [
      "HTML-CSS",
      "JavaScript",
      "React",
      "Context-api",
      "React-Router-Dom",
      "Styled-Components",
      "Strapi CMS",
      "Socket.io",
      "SQL",
      "NodeJs",
      "Firebase",
      "GIT and GitHub",
    ],
    CompetetiveSkills: ["C++/C", "Data Structures", "Algorithms"],
    Extras: ["Linux", "VScode", "Bash Scripting"],
  };

  return (
    <>
    <div className="container">
    <motion.h1 className="title">
         Skills : 
        </motion.h1>
      <div className="skills-wrap">
        <div className="skills-colomn-wrap">
          <motion.h3>As Web-Developer</motion.h3>
          <ul>
            {Skills.WebSkills.map((skill, index) => {
              return <li key={index}>{skill}</li>;
            })}
          </ul>
        </div>
        <div className="skills-colomn-wrap">
          <motion.h3>As Competetive-Programmer</motion.h3>
          <ul>
            {Skills.CompetetiveSkills.map((skill, index) => {
              return <li key={index}>{skill}</li>;
            })}
          </ul>
        </div>
        <div className="skills-colomn-wrap">
          <motion.h3>Extras</motion.h3>
          <ul>
            {Skills.Extras.map((skill, index) => {
              return <li key={index}>{skill}</li>;
            })}
          </ul>
        </div>
      </div>
      </div>
    </>
  );
};

export default SkillsBox;
