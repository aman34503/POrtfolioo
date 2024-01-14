import React from "react";
import { motion } from "framer-motion";
import {
  FaCss3,
  FaExternalLinkAlt,
  FaGithub,
  FaHtml5,
  FaReact,
  FaBootstrap
} from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiReactrouter, SiSocketdotio,SiMatrix,SiFarfetch,SiAuthelia  } from "react-icons/si";
import { PiFramerLogoFill } from "react-icons/pi";
import { IoLogoFirebase } from "react-icons/io5";
import { FaThumbsUp } from "react-icons/fa";

import { WorkData } from "../../data/WorkData";

import "./style.css";

const WorkCard = () => {
  const getTechIcon = (tech) => {
    switch (tech) {
      case "React":
        return <FaReact className="tech-icon react" />;
      case "HTML":
        return <FaHtml5 className="tech-icon html" />;
      case "JavaScript":
        return <RiJavascriptFill className="tech-icon javascript" />;
      case "CSS":
        return <FaCss3 className="tech-icon css" />;
      case "Bootstrap":
        return <FaBootstrap className="tech-icon bootstrap" />;
      case "react-router":
        return <SiReactrouter className="tech-icon reactRouter" />;
      case "Framer motion":
        return <PiFramerLogoFill className="tech-icon framer-motion" />
      case "Socket.io":
        return <SiSocketdotio className="tech-icon socket"/>
      case "MaterialUI":
        return <SiMatrix className="tech-icon material-ui" />;
      case "Firestore-Database":
        return<IoLogoFirebase className="tech-icon firestore-database" />;
      case "fetch-api":
        return <SiFarfetch  className="tech-icon fetch-api" />;
      case "OAuth":
        return <SiAuthelia className="tech-icon oauth" />;
      case "Github":
      default:
        return tech; // Default to displaying tech name if no icon is available
    }
  };

  return (
    <div className="container">
      <motion.h2 className="project-title">Projects :</motion.h2>
      <div className="work-cards-container">
        {WorkData.map((work) => (
          <div key={work.id} className="work-card">
            <h3 className="project-name">{work.name}</h3>
            <p className="project-status">
                <>
                  <FaThumbsUp className="thumbs-up-icon" />
                  Maintained
                </>
          
            </p>
            <p>{work.description}</p>
            <h4 className="tech-stack">Tech Stack:</h4>
              <div className="tech-list">
                {work.techStack.map((tech, index) => (
                  <span key={index} className="tech-list-item">
                    {getTechIcon(tech)}{(tech)}
                    {index < work.techStack.length - 1 && <span>&bull;</span>}
                  </span>
                ))}
              </div>
            <div className="project-links">
              {work.demo && (
                <a
                  href={work.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-btn"
                >
                  <FaExternalLinkAlt />
                  Demo
                </a>
              )}
              <a
                href={work.github}
                target="_blank"
                rel="noopener noreferrer"
                className="link-btn"
              >
                <FaGithub />
                GitHub
              </a>
            </div>
            <div>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkCard;
