// Experience.js

import React from "react";
import { motion } from "framer-motion";
import { ExperienceData } from "../../data/ExperienceData";
import "./styles.css"; // Add this line to import your CSS file

const Experience = () => {
  return (
    <motion.div transition={{ ease: "easeInOut" }}>
      <div className="container">
        <section className="experience" id="experience">
          {ExperienceData.map((experience) => (
            <div key={experience.id}>
              <h2>{experience.title}</h2>
              <h3>{experience.company}</h3>
              <p>
                {experience.employmentType} | {experience.location}
              </p>
              <p>{experience.date}</p>
              <h4>Skills:</h4>
              <div className="skill-list">
                {experience.skills.map((skill, index) => (
                  <div key={index}>
                    <p>{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </motion.div>
  );
};

export default Experience;
