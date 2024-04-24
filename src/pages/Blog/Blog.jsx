// Blog.jsx
import React from "react";
import { motion } from "framer-motion";
import { PageHeader, Nav } from "../../components"; 
import "./style.css";
import blogLinks from "./blogLinks.json"; 

const Blog = () => {
  return (
    <motion.div
      className="page-blog"
      exit={{ x: "100vw" }}
      transition={{ ease: "easeInOut" }}
    >
      <Nav />
      <div className="blog-container">
      <div style={{marginTop: '92px'}}>
        <PageHeader />
      </div>

        <ul className="blog-links">
        <motion.h3 style={{ marginBottom: '10px', color:'#222222'}}>
  blogs.
</motion.h3>
          {blogLinks.map(blog => (
            <li key={blog.id}>
              <a href={blog.link}>{blog.title}</a>
              <span className="blog-meta">{blog.time} | {blog.location}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default Blog;
