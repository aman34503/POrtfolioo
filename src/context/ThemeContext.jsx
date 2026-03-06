import React, { createContext, useContext, useState, useEffect, useLayoutEffect } from "react";

const ThemeContext = createContext();

const STORAGE_KEY = "portfolio_theme";

export function ThemeProvider({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored === "dark";
    } catch {
      return false;
    }
  });

  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", isDarkTheme ? "dark" : "light");
  }, [isDarkTheme]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, isDarkTheme ? "dark" : "light");
    } catch (e) {
      // ignore
    }
  }, [isDarkTheme]);

  const toggleTheme = () => setIsDarkTheme((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
