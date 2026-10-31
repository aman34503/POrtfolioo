import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { CaseStudiesData } from "../../data/CaseStudiesData";
import "./CaseStudy.css";

const CaseStudy = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const caseStudyIndex = CaseStudiesData.findIndex((c) => c.slug === slug);
  const study = CaseStudiesData[caseStudyIndex];

  const nextStudy =
    caseStudyIndex >= 0 && caseStudyIndex < CaseStudiesData.length - 1
      ? CaseStudiesData[caseStudyIndex + 1]
      : CaseStudiesData[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!study) {
    return (
      <div className="case-study-page page-shell">
        <Header />
        <main className="content-container error-state">
          <p className="mono-label">404 // case study not found</p>
          <h1 className="error-title">project record missing</h1>
          <Link to="/" className="back-link">
            ← return to portfolio index
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <motion.div
      className="case-study-page page-shell"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      <Header />

      <main className="case-study-main content-container">
        {/* Navigation Breadcrumb */}
        <div className="cs-top-nav">
          <button onClick={() => navigate(-1)} className="cs-back-btn">
            ← back to index
          </button>
          <span className="cs-nav-cat">case study // {study.year}</span>
        </div>

        {/* Hero Section */}
        <header className="cs-header">
          <div className="cs-meta-strip">
            <span className="cs-tag-org">{study.org}</span>
            <span className="cs-tag-status">● {study.status}</span>
          </div>

          <h1 className="cs-title">{study.title}</h1>
          <p className="cs-subtitle">{study.subtitle}</p>

          <div className="cs-details-grid">
            <div className="cs-detail-col">
              <span className="cs-detail-label">role</span>
              <span className="cs-detail-val">{study.role}</span>
            </div>
            <div className="cs-detail-col">
              <span className="cs-detail-label">timeline</span>
              <span className="cs-detail-val">{study.year}</span>
            </div>
            <div className="cs-detail-col">
              <span className="cs-detail-label">organization</span>
              <span className="cs-detail-val">{study.org}</span>
            </div>
            <div className="cs-detail-col">
              <span className="cs-detail-label">links</span>
              <div className="cs-links-cluster">
                {study.github && (
                  <a
                    href={study.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cs-link-btn"
                  >
                    github ↗
                  </a>
                )}
                {study.externalLink && (
                  <a
                    href={study.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cs-link-btn"
                  >
                    live site ↗
                  </a>
                )}
                {!study.github && !study.externalLink && (
                  <span className="cs-link-muted">internal enterprise system</span>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Impact Metrics */}
        {study.metrics && (
          <section className="cs-metrics-section">
            <div className="cs-metrics-grid">
              {study.metrics.map((metric, idx) => (
                <div key={idx} className="cs-metric-card">
                  <span className="cs-metric-val">{metric.value}</span>
                  <span className="cs-metric-label">{metric.label}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Executive Overview */}
        <section className="cs-section cs-overview-section">
          <h2 className="cs-section-heading">Overview</h2>
          <p className="cs-lead-text">{study.summary}</p>
        </section>

        {/* Problem vs Solution 2-column or structured block */}
        <section className="cs-section cs-challenge-solution">
          <div className="cs-dual-col">
            <div className="cs-col-box">
              <span className="cs-box-tag">the challenge</span>
              <h3 className="cs-box-title">Context & Constraints</h3>
              <p className="cs-box-body">{study.problem}</p>
            </div>

            <div className="cs-col-box cs-col-solution">
              <span className="cs-box-tag">the architecture</span>
              <h3 className="cs-box-title">System & Execution</h3>
              <p className="cs-box-body">{study.solution}</p>
            </div>
          </div>
        </section>

        {/* Key Engineering Deliverables */}
        <section className="cs-section cs-work-section">
          <h2 className="cs-section-heading">Key Technical Highlights</h2>
          <ul className="cs-work-list">
            {study.keyWork.map((item, idx) => (
              <li key={idx} className="cs-work-item">
                <span className="cs-work-num">0{idx + 1}</span>
                <p className="cs-work-text">{item}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Stack & Technologies */}
        <section className="cs-section cs-stack-section">
          <h2 className="cs-section-heading">Technologies Deployed</h2>
          <div className="cs-stack-pills">
            {study.stack.map((tech, idx) => (
              <span key={idx} className="cs-stack-pill">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Next Case Study Bar */}
        <nav className="cs-next-nav" aria-label="Next case study">
          <span className="cs-next-label">next project</span>
          <Link to={`/work/${nextStudy.slug}`} className="cs-next-link">
            <span className="cs-next-title">{nextStudy.title}</span>
            <span className="cs-next-arrow">→</span>
          </Link>
        </nav>
      </main>

      <Footer />
    </motion.div>
  );
};

export default CaseStudy;
