// Experience.js

import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaLaptopCode,FaReact,FaPython } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { MdWebhook } from "react-icons/md";
import "./styles.css";
import { ExperienceData } from "../../data/ExperienceData";

const icons = {
  rocket: <FaRocket className="emoji rocket" />,
  file: <MdWebhook className="emoji file" />,
  laptop: <FaLaptopCode className="emoji laptop" />,
  javascript: <RiJavascriptFill className="emoji javascript" />,
  react: <FaReact className="emoji react" />,
  python : <FaPython className="emoji python" />

};

const Experience = () => {
  return (
    <motion.div transition={{ ease: "easeInOut" }}>
      <div className="container">
        <motion.h2>
          Work Experience : 
        </motion.h2>
        <section className="work-history" id="work-history">
          {ExperienceData.map((experience) => (
            <div key={experience.id} className="experience-item">
              {icons[experience.icon]}
              <p>
                {experience.title} at {experience.company} ({experience.date})
              </p>
            </div>
          ))}
        </section>
      </div>
    </motion.div>
  );
};

export default Experience;
