import React, { useState } from "react";
import { SocialLinks } from "../../data/SiteData";
import "./ContactSection.css";

const ContactSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(SocialLinks.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${SocialLinks.email}`;
    }
  };

  return (
    <section className="section contact-section" id="contact" aria-labelledby="contact-heading">
      <div className="page-inner">
        <span className="section-number">07</span>
        <h2 className="contact-big-heading" id="contact-heading">
          let's work together
        </h2>

        <p className="contact-sub">
          got a project? let's talk.
        </p>

        <div className="contact-actions">
          <button className="contact-copy-btn" onClick={handleCopy}>
            {copied ? "copied!" : "copy email address"}
          </button>

          <span className="contact-or">or</span>

          <a
            href={SocialLinks.calendar}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-cal-link"
          >
            book a call →
          </a>
        </div>

        <nav className="contact-socials" aria-label="Social links">
          <a href={SocialLinks.github} target="_blank" rel="noopener noreferrer">
            github
          </a>
          <a href={SocialLinks.linkedin} target="_blank" rel="noopener noreferrer">
            linkedin
          </a>
          <a href={SocialLinks.twitter} target="_blank" rel="noopener noreferrer">
            x
          </a>
          <a href={SocialLinks.hashnode} target="_blank" rel="noopener noreferrer">
            hashnode
          </a>
        </nav>
      </div>
    </section>
  );
};

export default ContactSection;
