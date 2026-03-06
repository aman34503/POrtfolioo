import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaLaptopCode,
  FaReact,
  FaPython,
  FaBriefcase,
  FaCloud,
} from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { MdWebhook } from "react-icons/md";
import "./styles.css";
import { ExperienceData } from "../../data/ExperienceData";

const icons = {
  file: MdWebhook,
  laptop: FaLaptopCode,
  javascript: RiJavascriptFill,
  react: FaReact,
  python: FaPython,
  briefcase: FaBriefcase,
  cloud: FaCloud,
};

const Experience = ({ isDarkTheme }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });

  return (
    <section
      ref={sectionRef}
      className={`work-history ${isDarkTheme ? "dark-theme" : ""}`}
      id="work-history"
    >
      <motion.h2
        className="experience-title"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
      >
        Work Experience
      </motion.h2>

      <div className="exp-list">
        {ExperienceData.map((exp, index) => {
          const IconComponent = icons[exp.icon] || FaLaptopCode;
          return (
            <motion.div
              key={exp.id}
              className="exp-row"
              initial={{ opacity: 0, y: 6 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.04 }}
            >
              <div className="exp-icon">
                <IconComponent />
              </div>
              <div className="exp-body">
                <p className="exp-title">
                  {exp.title}
                  <span className="exp-company"> @ {exp.company}</span>
                </p>
                <p className="exp-date">{exp.date}</p>
                {exp.skills?.length > 0 && (
                  <p className="exp-skills">{exp.skills.join(" · ")}</p>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
