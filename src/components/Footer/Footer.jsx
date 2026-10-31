import React, { useState } from "react";
import { CurrentlyData } from "../../data/SiteData";
import "./Footer.css";

const Footer = () => {
  const [easterEgg, setEasterEgg] = useState(false);
  const year = new Date().getFullYear();
  const month = new Date().toLocaleString("en-US", { month: "short" }).toLowerCase();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="page-inner">
        <div className="footer-divider" />

        <div className="footer-grid">
          <div className="footer-col">
            <span className="footer-label">last updated</span>
            <span className="footer-value">{month} {year}</span>
          </div>

          <div className="footer-col">
            <span className="footer-label">colophon</span>
            <span className="footer-value">
              set in instrument serif, jetbrains mono & inter.{" "}
              <span
                className="footer-easter-egg"
                onMouseEnter={() => setEasterEgg(true)}
                onMouseLeave={() => setEasterEgg(false)}
                role="presentation"
              >
                {easterEgg ? "yes, every pixel." : "built by me, obviously."}
              </span>
            </span>
          </div>

          <div className="footer-col footer-currently">
            <span className="footer-label">currently</span>
            <span className="footer-value">
              building {CurrentlyData.building} · reading {CurrentlyData.reading} · listening to {CurrentlyData.listening}
            </span>
          </div>
        </div>

        <button
          className="footer-top-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
        >
          ↑ top
        </button>
      </div>
    </footer>
  );
};

export default Footer;
