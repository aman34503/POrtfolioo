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
  AboutText,
  SocialConnect,
  ContactEmail,
  FooterNav,
  SkillsBox,
} from "../../components";
import Experience from "../../components/Experience/Experience";
import WorkCard from "../../components/WorkCard/WorkCard";

const Home = () => {




  return (
<>
    <motion.div
      className="page"
      exit={{ x: "-100vw" }}
      transition={{ ease: "easeInOut" }}
    >
      <div className="head-wrap" id="home" >
        <Nav />
        <div className="head">
          <PageHeader />
          <SkillsIntro />
        </div>

        <div className="container">
          <section className="intro">
            {/* Your existing intro section */}
            <Intro />
              <ContactBtn
                text="Resume"
                link="https://drive.google.com/file/d/1oBfmyTJUrsZ1_JcmGair9MEE0cOIRjmr/view?usp=sharing"
                padding="clamp(8px, 2px + 1vw, 10px)"
                width="clamp(120px, 90px + 10vw ,220px)"
              />
            <div className="resume-btn-wrap">
            </div>
          </section>
          <section className="experience" id="experience">
          <Experience/>
        </section>

          <section className="work" id="work">
            <WorkCard/>
          </section>

          <section className="skills">
              
            <SkillsBox />
          </section>
          <section className="about" id="about">
                        <article>
              <SectionTitle title="About Me and _Myself :" />
            </article>
            <div>
              <AboutText />
              <SocialConnect dim="clamp(20px, 18px + 5vw, 55px)" />
            </div>
          </section>
          <section className="contact" id="connect">
                        <article>
              <SectionTitle
                title="Let's Have a Talk !"
                fontSize="clamp(36px, 20px + 7vw, 80px)"
              />
            </article>
            <ContactEmail />
            <footer>
              <SocialConnect dim="25px" size="15px" />
              <div className="footer-content">
                <FooterNav />
              </div>
            </footer>
          </section>
        </div>
      </div>
    </motion.div>
</>
  );
};

export default Home;
