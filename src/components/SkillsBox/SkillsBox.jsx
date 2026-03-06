import React from "react";
import { SiSalesforce } from "react-icons/si";
import "./style.css";

const SkillsBox = ({ isDarkTheme }) => {
  const groups = [
    { label: "Web", items: ["HTML-CSS", "JS", "React", "Node", "Firebase", "Git"] },
    { label: "Programming", items: ["C/C++", "Python", "DS & Algo"] },
    { label: "Salesforce Dev", items: ["Apex", "LWC", "Flows", "SOQL", "Data Cloud"] },
    { label: "Salesforce Admin", items: ["Reports", "Dashboards", "Flows", "Permissions"] },
    { label: "Copado", items: ["Source Format", "Extension Builder", "Metadata Pipeline"] },
    { label: "Tools", items: ["AI Tools", "Jenkins", "Postman", "VS Code", "Docker"] },
  ];

  return (
    <div className={`container skills-section ${isDarkTheme ? "dark-theme" : ""}`}>
      <h2 className="skills-title">Proficiencies</h2>
      <div className="skills-tags">
        {groups.map((g) => (
          <div key={g.label} className="skills-group">
            <span className="skills-group-label">{g.label}</span>
            <span className="skills-group-items">
              {g.items.map((item, i) => (
                <span key={i} className="skill-tag">{item}</span>
              ))}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsBox;
