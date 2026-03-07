import React from "react";
import NormalizeStyle from "./Global/normalizeStyle";
import { ThemeProvider } from "./context/ThemeContext";
import { Contact, Home } from "./pages";
import Blog from "./pages/Blog/Blog";
import Discussion from "./pages/Discussion/discussion";
import "./Global/ScrollBar.css";
import "./Global/layout.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

export const App = () => {
  const location = useLocation();

  return (
    <ThemeProvider>
      <NormalizeStyle />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/discussion" element={<Discussion />} />
        </Routes>
      </AnimatePresence>
    </ThemeProvider>
  );
};
