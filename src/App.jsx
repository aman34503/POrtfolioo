import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import Home from "./pages/HomePage/Home";
import Blog from "./pages/Blog/Blog";
import Discussion from "./pages/Discussion/discussion";
import CaseStudy from "./pages/CaseStudy/CaseStudy";

export const App = () => {
  const location = useLocation();

  return (
    <ThemeProvider>
      <CustomCursor />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/discussion" element={<Discussion />} />
        </Routes>
      </AnimatePresence>
    </ThemeProvider>
  );
};
