import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Nav } from "../../components";

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
      <div className="head-wrap" id="home">
        <Nav />
        
      </div>
      <ul>
        <div className="blog-posts">
          {blogPosts.map((post) => (
            <div key={post._id} className="blog-post">
              <img src={post.coverImage} alt={post.title} />
              <h3>{post.title}</h3>
            </div>
          ))}
        </div>
      </ul>
    </motion.section>
  );
};

export default Blog;
