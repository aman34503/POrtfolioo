import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaRocket, FaLaptopCode, FaReact, FaPython, FaBriefcase, FaCloud } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { MdWebhook } from "react-icons/md";
import "./styles.css";
import { ExperienceData } from "../../data/ExperienceData";
import { hover } from "@testing-library/user-event/dist/hover";

const icons = {
  rocket: <FaRocket className="emoji" />,
  file: <MdWebhook className="emoji" />,
  laptop: <FaLaptopCode className="emoji" />,
  javascript: <RiJavascriptFill className="emoji" />,
  react: <FaReact className="emoji" />,
  python: <FaPython className="emoji" />,
  briefcase: <FaBriefcase className="emoji" />,
  cloud: <FaCloud className="emoji" />
};

const Experience = ({ isDarkTheme }) => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <motion.div transition={{ ease: "easeInOut" }}>
      <section className={`work-history ${isDarkTheme ? "dark-theme" : ""}`} id="work-history">
        <h2 className="experience-title">Work Experience</h2>
        <div className="experience-list">
          {ExperienceData.map((experience) => (
            <motion.div
              key={experience.id}
              className="experience-item"
              onMouseEnter={() => setHoveredId(experience.id)}
              onMouseLeave={() => setHoveredId(null)}
              whileHover={{ scale: 1.02 }}
            >
              {icons[experience.icon]}
              <div>
                <p className="title">
                  {experience.title} at <span className="company-name">{experience.company}</span>
                </p>
                <p className="date">{experience.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Experience;