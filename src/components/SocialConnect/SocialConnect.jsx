// SocialConnect.jsx

import React, { useState } from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import "./style.css";

const Socials = ({ icon, text, dimenssion, fontSize, to }) => {
  const [hover, setHover] = useState(false);

  return (
    <li
      className="one-social-wrap"
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {React.createElement(icon, {
        size: dimenssion,
        color: hover ? "#e1306c" : "#405de6",
        style: { transform: hover ? "rotate(-10deg)" : "" },
      })}
      <a href={to} target="_blank" className="socials-name" rel="noreferrer">
        <p style={{ fontSize: fontSize }}>{text}</p>
      </a>
    </li>
  );
};

const SocialConnect = ({ dim, size }) => {
  return (
    <ul className="socials-wrap">
      <Socials
        icon={FaInstagram}
        text="Instagram"
        to="https://www.instagram.com/digitso._/?hl=en"
        dimenssion={dim}
        fontSize={size}
      />
      <Socials
        icon={FaLinkedin}
        text="LinkedIn"
        to="https://www.linkedin.com/in/aman-shrivastava04/"
        dimenssion={dim}
        fontSize={size}
      />
      <Socials
        icon={FaGithub}
        text="GitHub"
        to="https://github.com/aman34503"
        dimenssion={dim}
        fontSize={size}
      />
      <Socials
        icon={FaTwitter}
        text="Twitter"
        to="https://twitter.com/YourTwitterHandle"
        dimenssion={dim}
        fontSize={size}
      />
    </ul>
  );
};

export default SocialConnect;
