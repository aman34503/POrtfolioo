import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ProjectsData } from "../../data/SiteData";
import "./SelectedWork.css";

const SelectedWork = () => {
  const [expandedId, setExpandedId] = useState(1); // open first by default for discoverability

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="section selected-work" id="work" aria-labelledby="work-heading">
      <div className="page-inner">
        <span className="section-number">03</span>
        <h2 className="section-heading" id="work-heading">selected work</h2>

        <div className="work-list" role="list">
          {ProjectsData.map((project) => (
            <article
              key={project.id}
              className={`work-row ${expandedId === project.id ? "work-row--expanded" : ""}`}
              role="listitem"
            >
              <button
                className="work-row-header"
                onClick={() => toggleExpand(project.id)}
                aria-expanded={expandedId === project.id}
                aria-controls={`work-detail-${project.id}`}
              >
                <span className="work-year">{project.year}</span>
                <span className="work-project">
                  {project.project}
                  {project.hasCaseStudy && (
                    <span className="work-cs-pill" title="Detailed case study available">
                      case study
                    </span>
                  )}
                </span>
                <span className="work-roles">
                  {project.roles.join(" · ")}
                </span>
                <span className="work-arrow" aria-hidden="true">
                  {expandedId === project.id ? "−" : "→"}
                </span>
              </button>

              {expandedId === project.id && (
                <div className="work-detail" id={`work-detail-${project.id}`}>
                  <p className="work-description">{project.description}</p>
                  <div className="work-stack">
                    <span className="work-stack-label">stack:</span>
                    {project.stack.join(" · ")}
                  </div>
                  
                  <div className="work-links-row">
                    {project.slug && (
                      <Link to={`/work/${project.slug}`} className="work-case-study-btn">
                        read case study →
                      </Link>
                    )}
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="work-ext-link">
                        live ↗
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="work-ext-link">
                        github ↗
                      </a>
                    )}
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
