import React, { useState, useEffect } from "react";
import { SocialLinks, CurrentlyData } from "../../data/SiteData";
import SpotifyNowPlaying from "../SpotifyNowPlaying/SpotifyNowPlaying";
import "./Hero.css";

const Hero = () => {
  const [time, setTime] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date().toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      setTime(now);
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(SocialLinks.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      window.location.href = `mailto:${SocialLinks.email}`;
    }
  };

  return (
    <section className="hero" aria-label="Introduction">
      <div className="hero-content">
        <div className="hero-top-status" aria-label="Current status and Spotify">
          <div className="hero-status-pill">
            <span className="live-indicator">
              <span className="live-pulse"></span>
              <span className="live-core"></span>
            </span>
            <span className="hero-currently-label">currently:</span>
            <span className="hero-currently-item">
              building <span className="hero-val-highlight">{CurrentlyData.building}</span>
            </span>
            <span className="hero-status-sep">/</span>
            <span className="hero-currently-item">
              reading <span className="hero-val-highlight">{CurrentlyData.reading}</span>
            </span>
          </div>

          <div className="hero-spotify-wrapper">
            <SpotifyNowPlaying compact={false} />
          </div>
        </div>

        <h1 className="hero-name">
          <span className="hero-name-line hero-reveal">aman</span>
          <span className="hero-name-line hero-reveal hero-reveal-delay">shrivastava</span>
        </h1>

        <p className="hero-tagline">
          i scope, build, ship, automate, and maintain things for the web.
          <br />
          then i write about it.
        </p>

        <div className="hero-meta">
          <span className="hero-badge" aria-label="Available for freelance work">
            available for work
          </span>

          <span className="hero-time" aria-label="Current local time in India">
            <span className="hero-time-label">ist</span> {time}
          </span>
        </div>

        <div className="hero-links">
          <button
            className="hero-email-btn"
            onClick={handleCopyEmail}
            aria-label={copied ? "Email copied" : "Copy email address"}
          >
            {copied ? "copied!" : SocialLinks.email === "TODO@example.com" ? "email" : SocialLinks.email}
          </button>
          <span className="hero-link-sep">·</span>
          <a href={SocialLinks.resume} target="_blank" rel="noopener noreferrer" className="hero-link">
            resume
          </a>
          <span className="hero-link-sep">·</span>
          <a href={SocialLinks.calendar} target="_blank" rel="noopener noreferrer" className="hero-link">
            book a call
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
