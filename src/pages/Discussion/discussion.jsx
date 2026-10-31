import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { getComments, saveComment } from "../../utils/discussionService";
import "./Discussion.css";

const Discussion = () => {
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
      author: (author || "").trim() || "anonymous",
      text: trimmed,
    });
    setComments((prev) => [newComment, ...prev]);
    setText("");
  };

  const formatDate = (iso) => {
    const d = new Date(iso);
    return d.toLocaleDateString("en-GB", { month: "short", day: "numeric", year: "numeric" }).toLowerCase();
  };

  return (
    <motion.div
      className="page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <Header />
      <main className="disc-page">
        <div className="page-inner">
          <div className="disc-header">
            <span className="section-number">discussion</span>
            <h1 className="section-heading">leave a note</h1>
            <p className="disc-intro">
              say hi, leave feedback, or just scribble something.
            </p>
          </div>

          <form className="disc-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="your name"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="disc-input disc-name-input"
              aria-label="Your name"
            />
            <div className="disc-row">
              <textarea
                placeholder="write something…"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="disc-input disc-text-input"
                rows={3}
                aria-label="Your comment"
              />
              <button type="submit" className="disc-submit">
                post
              </button>
            </div>
          </form>

          <div className="disc-comments">
            {comments.length === 0 ? (
              <p className="disc-empty">no comments yet. be the first.</p>
            ) : (
              comments.map((c) => (
                <article key={c.id} className="disc-comment">
                  <div className="disc-comment-head">
                    <span className="disc-author">{c.author}</span>
                    <span className="disc-date">{formatDate(c.createdAt)}</span>
                  </div>
                  <p className="disc-body">{c.text}</p>
                </article>
              ))
            )}
          </div>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default Discussion;
