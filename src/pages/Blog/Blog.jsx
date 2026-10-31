import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { fetchHashnodePosts } from "../../utils/blogApi";
import blogLinksFallback from "./blogLinks.json";
import "./Blog.css";

const Blog = () => {
  const [posts, setPosts] = useState(blogLinksFallback);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);
    fetchHashnodePosts()
      .then((data) => {
        if (!cancelled && data.length > 0) setPosts(data);
      })
      .catch(() => {
        if (!cancelled) setError("could not load posts from hashnode");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => { cancelled = true; };
  }, []);

  return (
    <motion.div
      className="page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <Header />
      <main className="blog-page">
        <div className="page-inner">
          <div className="blog-header">
            <span className="section-number">blog</span>
            <h1 className="section-heading blog-heading">writing</h1>
            <p className="blog-intro">
              thoughts on building, shipping, and everything in between.
            </p>
          </div>

          {error && <p className="blog-error">{error}</p>}

          {loading ? (
            <p className="blog-loading">loading…</p>
          ) : (
            <ul className="blog-list">
              {posts.map((post, i) => (
                <li key={post.id || i} className="blog-item">
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="blog-link"
                  >
                    <span className="blog-title">{post.title}</span>
                    <span className="blog-meta">
                      {post.time}
                      {post.brief && (
                        <span className="blog-read-time">
                          {" "}· {Math.max(1, Math.ceil((post.brief?.length || 0) / 200))} min
                        </span>
                      )}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          )}

          <div className="blog-ext">
            <a
              href="https://aman04.hashnode.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="blog-ext-link"
            >
              all posts on hashnode ↗
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default Blog;
