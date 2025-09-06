import React, { useState, useEffect } from 'react';
import './Blog.css';
import { initializeSamplePosts } from '../utils/samplePosts';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = () => {
    // Initialize sample posts if none exist
    initializeSamplePosts();
    
    const savedPosts = localStorage.getItem('blogPosts');
    if (savedPosts) {
      const parsedPosts = JSON.parse(savedPosts);
      // Sort posts by date (newest first)
      parsedPosts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setPosts(parsedPosts);
    }
  };

  const formatDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const truncateContent = (content, maxLength = 200) => {
    if (content.length <= maxLength) return content;
    return content.substr(0, maxLength) + '...';
  };

  const openPost = (post) => {
    setSelectedPost(post);
  };

  const closePost = () => {
    setSelectedPost(null);
  };

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (selectedPost) {
    return (
      <div className="blog-container">
        <div className="blog-header">
          <button className="back-btn" onClick={closePost}>
            ← Back to Blog
          </button>
          <h2>Blog</h2>
        </div>
        
        <article className="blog-post-full">
          <header className="post-header">
            <h1>{selectedPost.title}</h1>
            <div className="post-meta">
              <span className="post-date">{formatDate(selectedPost.createdAt)}</span>
              {selectedPost.tags && selectedPost.tags.length > 0 && (
                <div className="post-tags">
                  {selectedPost.tags.map((tag, index) => (
                    <span key={index} className="tag">#{tag}</span>
                  ))}
                </div>
              )}
            </div>
          </header>
          
          <div className="post-content">
            {selectedPost.content.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="blog-container">
      <div className="blog-header">
        <h2>Blog</h2>
        <p className="blog-subtitle">Thoughts on development, technology, and life</p>
      </div>

      {posts.length === 0 ? (
        <div className="no-posts">
          <p>No blog posts yet. Check back soon!</p>
        </div>
      ) : (
        <>
          <div className="posts-grid">
            {currentPosts.map((post) => (
              <article key={post.id} className="post-card" onClick={() => openPost(post)}>
                <header className="post-card-header">
                  <h3>{post.title}</h3>
                  <span className="post-date">{formatDate(post.createdAt)}</span>
                </header>
                
                <div className="post-preview">
                  <p>{truncateContent(post.content)}</p>
                </div>
                
                {post.tags && post.tags.length > 0 && (
                  <div className="post-tags">
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="tag">#{tag}</span>
                    ))}
                    {post.tags.length > 3 && <span className="tag-more">+{post.tags.length - 3}</span>}
                  </div>
                )}
                
                <footer className="post-card-footer">
                  <span className="read-more">Read more →</span>
                </footer>
              </article>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="pagination">
              <button 
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="pagination-btn"
              >
                Previous
              </button>
              
              <div className="pagination-numbers">
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => paginate(index + 1)}
                    className={`pagination-number ${currentPage === index + 1 ? 'active' : ''}`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
              
              <button 
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="pagination-btn"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Blog;
