import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaLaptopCode, FaReact, FaPython, FaBriefcase } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { MdWebhook } from "react-icons/md";
import "./styles.css"; // Import the CSS file
import { ExperienceData } from "../../data/ExperienceData";

const icons = {
  rocket: <FaRocket className="emoji rocket" />,
  file: <MdWebhook className="emoji file" />,
  laptop: <FaLaptopCode className="emoji laptop" />,
  javascript: <RiJavascriptFill className="emoji javascript" />,
  react: <FaReact className="emoji react" />,
  python: <FaPython className="emoji python" />,
  briefcase: <FaBriefcase className="emoji briefcase" />,
};

const Experience = () => {
  const getRandomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

 const listItemVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1 },
  };

  return (
    <motion.div transition={{ ease: "easeInOut" }}>
      <section className="work-history" id="work-history">
        <motion.h2 className="experience-title">Work Experience :</motion.h2>
        {ExperienceData.map((experience) => (
          <motion.div 
            key={experience.id} 
            className="experience-item"
            variants={listItemVariants} 
            whileHover="hover" 
            initial="initial"
          >
            {icons[experience.icon]}
            <p>
              {experience.title} at{" "}
              <span className="company-name" style={{ fontWeight: "bold", color: getRandomColor() }}>
                {experience.company}
              </span>{" "}
              ({experience.date})
            </p>
          </motion.div>
        ))}
      </section>
    </motion.div>
  );
};

export default Experience;
