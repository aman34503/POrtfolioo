import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LandingHeader } from "../../components";
import { useTheme } from "../../context/ThemeContext";
import blogLinksFallback from "./blogLinks.json";
import { fetchHashnodePosts } from "../../utils/blogApi";
import "./style.css";

const Blog = () => {
  const { isDarkTheme, toggleTheme } = useTheme();
  const [blogLinks, setBlogLinks] = useState(blogLinksFallback);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);
    fetchHashnodePosts()
      .then((posts) => {
        if (!cancelled && posts.length > 0) setBlogLinks(posts);
      })
      .catch(() => {
        if (!cancelled) setError("Could not load from API");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => { cancelled = true; };
  }, []);

  return (
    <motion.div
      className={`landing-page page-blog ${isDarkTheme ? "dark-theme" : ""}`}
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
    >
      <LandingHeader isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
      <main className="landing-main">
        <h1 className="blog-page-title">Blogs</h1>
        {error && <p className="blog-error">{error}</p>}
        {loading ? (
          <p className="blog-loading">Loading…</p>
        ) : (
          <ul className="blog-list">
            {blogLinks.map((blog, i) => (
              <motion.li
                key={blog.id || i}
                className="blog-row"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.03 * i }}
              >
                <a href={blog.link} target="_blank" rel="noopener noreferrer" className="blog-title">
                  {blog.title}
                </a>
                <span className="blog-meta">
                  BLOG / {blog.time}
                </span>
              </motion.li>
            ))}
          </ul>
        )}
      </main>
    </motion.div>
  );
};

export default Blog;
