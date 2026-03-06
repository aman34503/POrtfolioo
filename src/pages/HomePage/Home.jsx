import React from "react";
import "./style.css";
import { motion } from "framer-motion";
import {
  ContactBtn,
  PageHeader,
  SkillsIntro,
  Intro,
  Nav,
  SectionTitle,
  SocialConnect,
  ContactEmail,
  FooterNav,
  SkillsBox,
  Certifications,
} from "../../components";
import Experience from "../../components/Experience/Experience";
import WorkCard from "../../components/WorkCard/WorkCard";
import { useTheme } from "../../context/ThemeContext";

const Home = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <motion.div
      className={`page page-home ${isDarkTheme ? "dark-theme" : ""}`}
      exit={{ x: "-100vw" }}
      transition={{ ease: "easeInOut" }}
    >
      <Nav isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
      
      <div className="head-wrap" id="home">
        <div className="head">
          <PageHeader isDarkTheme={isDarkTheme} />
          <SkillsIntro isDarkTheme={isDarkTheme} />
        </div>

        <div className="container">
          <section className="intro">
            <Intro isDarkTheme={isDarkTheme} />
            <ContactBtn
              text="Resume"
              link="https://drive.google.com/file/d/1oBfmyTJUrsZ1_JcmGair9MEE0cOIRjmr/view?usp=sharing"
              padding="clamp(8px, 2px + 1vw, 10px)"
              width="clamp(120px, 90px + 10vw ,220px)"
            />
          </section>

          <section className="experience" id="experience">
            <Experience isDarkTheme={isDarkTheme} />
          </section>

          <section className="work" id="work">
            <WorkCard isDarkTheme={isDarkTheme} />
          </section>

          <section className="skills">
            <SkillsBox isDarkTheme={isDarkTheme} />
          </section>

          <section className="certifications" id="certifications">
            <Certifications isDarkTheme={isDarkTheme} />
          </section>

          <section className="contact" id="connect" isDarkTheme={isDarkTheme}>
            <SectionTitle
              title="Let's Have a Talk !"
              fontSize="clamp(22px, 5vw, 36px)"
              className="talk-title"
            />
            <ContactEmail isDarkTheme={isDarkTheme} />
            <footer>
              <SocialConnect dim="25px" size="15px" isDarkTheme={isDarkTheme} />
              <div className="footer-content">
                <FooterNav isDarkTheme={isDarkTheme} />
              </div>
            </footer>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;