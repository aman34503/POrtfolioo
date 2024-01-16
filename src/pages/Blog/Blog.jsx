// Blog.jsx

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Nav } from "../../components";

import "./style.css";

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    // Fetch blog posts
    const fetchPostsByUsername = async (username) => {
      try {
        const query = JSON.stringify({
          query: `{
          user(username: "${username}") {
            publication {
              posts(page: 0) {
                _id
                cuid
                coverImage
                title
                slug
              }
            }
          }
        }`,
        });

        const response = await fetch("https://api.hashnode.com/", {
          method: "post",
          body: query,
          headers: {
            "Content-Type": "application/json",
          },
        });

        const jsonResponse = await response.json();
        setBlogPosts(jsonResponse.data.user.publication.posts);
      } catch (error) {
        console.error("Error fetching Hashnode posts:", error);
      }
    };

    fetchPostsByUsername("aman04");
  }, []);

  return (
    <div className="blog-container">
      <motion.div
        className="page-blog"
        exit={{ x: "-100vw" }}
        transition={{ ease: "easeInOut" }}
      >
        <Nav />
        <motion.section
          className="blog-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            type: "tween",
            ease: "easeInOut",
          }}
        >

          <motion.h1>
            Blogs :
          </motion.h1>
          <ul className="blog-posts">
            {blogPosts.map((post) => (
              <li key={post._id} className="blog-post">
                <a
                  href={`https://aman04.hashnode.dev/${post.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="blog-box">
                    <img src={post.coverImage} alt={post.title} />
                    <h3>{post.title}</h3>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default Blog;
