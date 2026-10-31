import React from "react";
import { motion } from "framer-motion";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Marquee from "../../components/Marquee/Marquee";
import WhatIDo from "../../components/WhatIDo/WhatIDo";
import SelectedWork from "../../components/SelectedWork/SelectedWork";
import WritingSection from "../../components/WritingSection/WritingSection";
import HowIWork from "../../components/HowIWork/HowIWork";
import ToolsStack from "../../components/ToolsStack/ToolsStack";
import ContactSection from "../../components/ContactSection/ContactSection";
import Footer from "../../components/Footer/Footer";

const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.25 },
};

const Home = () => {
  return (
    <motion.div className="page" {...pageTransition}>
      <Header />
      <main>
        <div className="page-inner">
          <Hero />
        </div>
        <Marquee />
        <WhatIDo />
        <SelectedWork />
        <WritingSection />
        <HowIWork />
        <ToolsStack />
        <ContactSection />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Home;
