import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LandingHeader } from "../../components";
import { useTheme } from "../../context/ThemeContext";
import { getComments, saveComment } from "../../utils/discussionService";
import "./style.css";

const Discussion = () => {
  const { isDarkTheme, toggleTheme } = useTheme();
  const [comments, setComments] = useState([]);
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    setComments(getComments());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = (text || "").trim();
    if (!trimmed) return;
    const newComment = saveComment({
      author: (author || "").trim() || "Anonymous",
      text: trimmed,
    });
    setComments((prev) => [newComment, ...prev]);
    setText("");
  };

  const formatDate = (iso) => {
    const d = new Date(iso);
    return d.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
  };

  return (
    <motion.div
      className={`landing-page page-discussion ${isDarkTheme ? "dark-theme" : ""}`}
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
    >
      <LandingHeader isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
      <main className="landing-main discussion-container">
        <h1 className="disc-page-title">Discussion</h1>
        <form className="disc-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="disc-input disc-name"
          />
          <div className="disc-row">
            <textarea
              placeholder="Add a comment…"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="disc-input disc-text"
              rows={2}
            />
            <button type="submit" className="disc-btn">Post</button>
          </div>
        </form>

        <div className="disc-list">
          {comments.length === 0 ? (
            <p className="disc-empty">No comments yet.</p>
          ) : (
            comments.map((c, i) => (
              <motion.article
                key={c.id}
                className="disc-item"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.03 * i }}
              >
                <div className="disc-item-head">
                  <span className="disc-author">{c.author}</span>
                  <span className="disc-date">{formatDate(c.createdAt)}</span>
                </div>
                <p className="disc-body">{c.text}</p>
              </motion.article>
            ))
          )}
        </div>
      </main>
    </motion.div>
  );
};

export default Discussion;
