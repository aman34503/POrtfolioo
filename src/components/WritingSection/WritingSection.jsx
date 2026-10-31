import React, { useState, useEffect } from "react";
import { fetchHashnodePosts } from "../../utils/blogApi";
import blogLinksFallback from "../../pages/Blog/blogLinks.json";
import { Link } from "react-router-dom";
import "./WritingSection.css";

const WritingSection = () => {
  const [posts, setPosts] = useState(blogLinksFallback);

  useEffect(() => {
    let cancelled = false;
    fetchHashnodePosts()
      .then((data) => !cancelled && data?.length > 0 && setPosts(data))
      .catch(() => {});
    return () => { cancelled = true; };
  }, []);

  /* Show max 5 on the homepage */
  const visiblePosts = posts.slice(0, 5);

  return (
    <section className="section writing" id="writing" aria-labelledby="writing-heading">
      <div className="page-inner">
        <span className="section-number">04</span>
        <h2 className="section-heading" id="writing-heading">writing</h2>

        <ul className="writing-list">
          {visiblePosts.map((post, i) => (
            <li key={post.id || i} className="writing-item">
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="writing-link"
              >
                <span className="writing-title">{post.title}</span>
                <span className="writing-meta">
                  {post.time}
                  {post.brief && (
                    <span className="writing-read-time">
                      {" "}· {Math.max(1, Math.ceil((post.brief?.length || 0) / 200))} min
                    </span>
                  )}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="writing-footer">
          <Link to="/blog" className="writing-all-link">
            all posts →
          </Link>
          <a
            href="https://aman04.hashnode.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="writing-all-link"
          >
            hashnode ↗
          </a>
        </div>
      </div>
    </section>
  );
};

export default WritingSection;
