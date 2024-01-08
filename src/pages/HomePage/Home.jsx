import React, { useEffect, useRef } from "react";
import "./style.css";
import { WorkData } from "../../data/WorkData";
import { motion } from "framer-motion";
import {
  ContactBtn,
  PageHeader,
  SkillsIntro,
  CTABtn,
  Intro,
  Nav,
  SectionTitle,
  WorkCard,
  AboutText,
  SocialConnect,
  ContactEmail,
  FooterNav,
  SkillsBox,
} from "../../components";
import Experience from "../../components/Experience/Experience";

const Home = () => {
  const WCard = WorkData.map((work) => {
    return <WorkCard key={work.id} work={work} />;
  });

  const vantaRef = useRef(null);

  useEffect(() => {
    // Initialize Vanta.js on component mount
    if (vantaRef.current) {
      window.VANTA.BIRDS({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 300.00,
        minWidth: 100.00,
        scale: 0.80,
        scaleMobile: 1.00,
        backgroundColor: 0x0,
        color1: 0xffffff,
        color2: 0xffffff,
        birdSize: 1.10,
        wingSpan: 14.00,
        speedLimit: 3.00,
        separation: 21.00,
        alignment: 1.00,
        cohesion: 69.00,
        quantity: 1.00
      });
    }

    // Clean up Vanta.js on component unmount
    return () => {
      if (vantaRef.current) {
        window.VANTA.BIRDS.destroy();
      }
    };
  }, []);

  return (
<>
    <motion.div
      className="page"
      exit={{ x: "-100vw" }}
      transition={{ ease: "easeInOut" }}
    >
      <div className="head-wrap" id="home" ref={vantaRef}>
        <Nav />
        <div className="head">
          <PageHeader />
          <SkillsIntro />
        </div>

        <div className="container">
          <section className="intro">
            {/* Your existing intro section */}
            <div className="vanta-container"></div>
            <ContactBtn />
            <Intro />
            <div className="resume-btn-wrap">
              <CTABtn
                text="Resume"
                link="https://drive.google.com/file/d/1yDhzoSGlxO3VFMEo2wbi4G6YuX20hbE9/view?usp=sharing"
                padding="clamp(8px, 2px + 1vw, 10px)"
                width="clamp(120px, 90px + 10vw ,220px)"
              />
            </div>
          </section>
          <section className="work" id="work">
            {/* Your existing works section */}
            <SectionTitle title="Selected Works :" />
            <div className="projects-wrap">{WCard}</div>
          </section>
          <section className="experience" id="experience">
          {/* New experience section */}
          <SectionTitle title="Experience :" />
          <Experience/>
        </section>
          <section className="skills">
                        <article>
              <SectionTitle title="My_ Skills" />
            </article>
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
