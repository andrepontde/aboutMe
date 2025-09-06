import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Blog from '../components/Blog';
import { trackPageView } from '../utils/analytics';
import './Pages.css';

const BlogPage = () => {
  useEffect(() => {
    trackPageView('/blog');
  }, []);

  return (
    <div className="blog-page">
      {/* Navigation Header */}
      <nav className="blog-nav">
        <div className="nav-content">
          <Link to="/" className="back-home">
            ← Back to Portfolio
          </Link>
          <h1 className="blog-title">André's Blog</h1>
          <div className="nav-spacer"></div>
        </div>
      </nav>

      {/* Blog Content */}
      <div className="blog-content">
        <Blog />
      </div>

      {/* Footer */}
      <footer className="blog-footer">
        <p>© 2025 André Pont De Anda. All rights reserved.</p>
        <Link to="/admin" className="admin-link">🔑</Link>
      </footer>
    </div>
  );
};

export default BlogPage;
