import React, { useState, useEffect } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    /* Only show custom cursor on devices with fine pointer (desktop) */
    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches) return;

    setVisible(true);

    const handleMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const handleOver = (e) => {
      const target = e.target.closest("a, button, [role='button']");
      setHovering(!!target);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`custom-cursor ${hovering ? "custom-cursor--hover" : ""}`}
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px)`,
      }}
      aria-hidden="true"
    />
  );
};

export default CustomCursor;
