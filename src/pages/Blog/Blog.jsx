// Blog.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { PageHeader, Nav } from "../../components"; 
import "./style.css";
import blogLinks from "./blogLinks.json"; 

const Blog = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  
    const toggleTheme = () => {
      setIsDarkTheme(!isDarkTheme);
    };
  return (
    <motion.div
      className={`page-blog ${isDarkTheme ? "dark-theme" : ""}`}
      exit={{ x: "100vw" }}
      transition={{ ease: "easeInOut" }}
    >
      <Nav isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
      <div className="blog-container">
      <div style={{marginTop: '92px'}}>
        <PageHeader isDarkTheme={isDarkTheme} />
      </div>

        <ul className="blog-links">
        <motion.h3 style={{ marginBottom: '10px', color:'#222222'}} isDarkTheme={isDarkTheme}>
  blogs.
</motion.h3>
          {blogLinks.map(blog => (
            <li key={blog.id} isDarkTheme={isDarkTheme}>
              <a href={blog.link}>{blog.title} isDarkTheme={isDarkTheme}</a>
              <span className="blog-meta">{blog.time} | {blog.location} isDarkTheme={isDarkTheme}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default Blog;
