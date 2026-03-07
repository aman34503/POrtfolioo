import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { useTheme } from "../../context/ThemeContext";
import { ExperienceData } from "../../data/ExperienceData";
import { WorkData } from "../../data/WorkData";
import { LandingHeader, ContactBtn } from "../../components";
import "../../components/ContactBtn/style.css";
import SkillsBox from "../../components/SkillsBox/SkillsBox";
import blogLinksFallback from "../Blog/blogLinks.json";
import { fetchHashnodePosts } from "../../utils/blogApi";

const Home = () => {
  const { isDarkTheme, toggleTheme } = useTheme();
  const [activeTab, setActiveTab] = useState("posts");
  const [posts, setPosts] = useState(blogLinksFallback);

  useEffect(() => {
    let cancelled = false;
    fetchHashnodePosts()
      .then((data) => !cancelled && data?.length > 0 && setPosts(data))
      .catch(() => {});
    return () => { cancelled = true; };
  }, []);

  const tabs = [
    { id: "posts", label: "Posts", count: posts.length },
    { id: "work", label: "Work experience", count: ExperienceData.length },
    { id: "projects", label: "Projects", count: WorkData.length },
  ];

  const recentWork = ExperienceData[0];

  return (
    <div className={`landing-page ${isDarkTheme ? "dark-theme" : ""}`} id="home">
      <LandingHeader isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />

      <main className="landing-main">
        {/* Hero */}
        <section className="landing-hero">
          <h1 className="landing-hero-title">
            Hi, I am Aman.<br />
Exploring ideas through code          </h1>
        </section>

        {/* Recent Work Experience */}
        <section className="landing-recent">
          <h2 className="landing-section-title">Recent Work Experience</h2>
          <p className="landing-recent-text">
            My most recent role was at <span className="landing-amp">&</span>{" "}
            <strong>{recentWork?.company}</strong> where I worked as a {recentWork?.title}.
            I work with {recentWork?.skills?.slice(0, 4).join(", ")} and more.
          </p>
        </section>

        {/* CTA - cal.com + Resume */}
        <section className="landing-cta">
          <ContactBtn
            text="Resume"
            link="https://drive.google.com/file/d/1C_Zgycn3VTbuVPSLMEdtiTSddM3EiT86/view?usp=sharing"
            padding="clamp(8px, 2px + 1vw, 10px)"
            width="clamp(120px, 90px + 10vw, 220px)"
          />
        </section>

        {/* Skills
        <section className="landing-skills">
          <SkillsBox isDarkTheme={isDarkTheme} />
        </section> */}

        {/* Tabs */}
        <nav className="landing-tabs">
          {tabs.map((t) => (
            <button
              key={t.id}
              className={`landing-tab ${activeTab === t.id ? "active" : ""}`}
              onClick={() => setActiveTab(t.id)}
            >
              {t.label} ({t.count})
            </button>
          ))}
        </nav>
        <div className="landing-tabs-line" />

        {/* Content List */}
        <ul className="landing-list">
          {activeTab === "posts" &&
            posts.map((p, i) => (
              <li key={p.id || i} className="landing-list-item">
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="landing-list-title">
                  {p.title}
                </a>
                <span className="landing-list-meta">BLOG / {p.time}</span>
              </li>
            ))}
          {activeTab === "work" &&
            ExperienceData.map((e) => (
              <li key={e.id} className="landing-list-item">
                <span className="landing-list-title">{e.title} @ {e.company}</span>
                <span className="landing-list-meta">EXPERIENCE / {e.date.split(" ").pop()}</span>
              </li>
            ))}
          {activeTab === "projects" &&
            WorkData.map((p) => (
              <li key={p.id} className="landing-list-item">
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="landing-list-title">
                  {p.name}
                </a>
                <span className="landing-list-meta">PROJECT / {p.techStack[0] || "—"}</span>
              </li>
            ))}
        </ul>

        {/* Footer links */}
        <footer className="landing-footer">
          <Link to="/blog">Blog</Link>
          <Link to="/discussion">Discussion</Link>
          <Link to="/contact">Contact</Link>
        </footer>
      </main>
    </div>
  );
};

export default Home;
