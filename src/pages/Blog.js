import React from 'react';
import './Blog.css';

const Blog = () => {
  return (
    <section id="blog">
      <h2>Blog</h2>
      <div className="blog-list">
        {/* Add your blog posts here */}
        <div className="blog-item">
          <h3>Blog Post 1</h3>
          <p>Summary of blog post 1.</p>
        </div>
        <div className="blog-item">
          <h3>Blog Post 2</h3>
          <p>Summary of blog post 2.</p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
