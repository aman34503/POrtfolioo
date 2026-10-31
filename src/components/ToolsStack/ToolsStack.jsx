import React from "react";
import { ToolsData } from "../../data/SiteData";
import "./ToolsStack.css";

const ToolsStack = () => {
  const categories = Object.entries(ToolsData);

  return (
    <section className="section tools-stack" id="stack" aria-labelledby="stack-heading">
      <div className="page-inner">
        <span className="section-number">06</span>
        <h2 className="section-heading" id="stack-heading">tools & stack</h2>

        <dl className="tools-grid">
          {categories.map(([category, tools]) => (
            <div key={category} className="tools-row">
              <dt className="tools-category">{category}</dt>
              <dd className="tools-list">{tools.join(" · ")}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default ToolsStack;
