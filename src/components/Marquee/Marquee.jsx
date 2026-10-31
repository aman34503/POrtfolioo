import React from "react";
import "./Marquee.css";

const Marquee = () => {
  const text = "scope · build · ship · automate · maintain · write · repeat · ";
  /* Duplicate for seamless loop */
  const content = text.repeat(6);

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        <span className="marquee-text">{content}</span>
        <span className="marquee-text">{content}</span>
      </div>
    </div>
  );
};

export default Marquee;
