import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BlogAdmin from '../components/BlogAdmin';
import { trackPageView } from '../utils/analytics';
import './Pages.css';

const AdminPage = () => {
  useEffect(() => {
    trackPageView('/admin');
  }, []);

  return (
    <div className="admin-page">
      {/* Navigation Header */}
      <nav className="admin-nav">
        <div className="nav-content">
          <Link to="/blog" className="back-blog">
            ← Back to Blog
          </Link>
          <h1 className="admin-title">Blog Administration</h1>
          <Link to="/" className="back-home">
            Home
          </Link>
        </div>
      </nav>

      {/* Admin Content */}
      <div className="admin-content">
        <BlogAdmin />
      </div>

      {/* Footer */}
      <footer className="admin-footer">
        <p>© 2025 André Pont De Anda. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AdminPage;
