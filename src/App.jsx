import React, { useState, useEffect } from "react";
import NormalizeStyle from "./Global/normalizeStyle";
import { Contact, Home, Loader } from "./pages";
import Blog from "./pages/Blog/Blog";
import "./Global/ScrollBar.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";

export const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <>
      <NormalizeStyle />
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.key}>
            <Route
              exact path="/"
              element={loading ? <Loader /> : <Home />}
            />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/blog" element={<Blog />} />
          </Routes>
        </AnimatePresence>
    </>
  );
};
