import React, { useState, useEffect } from 'react';
import './BlogAdmin.css';
import { initializeSamplePosts } from '../utils/samplePosts';

const BlogAdmin = () => {
  const [posts, setPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState({
    id: '',
    title: '',
    content: '',
    tags: '',
    createdAt: '',
    updatedAt: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Simple password protection (in production, use proper authentication)
  const ADMIN_PASSWORD = '1234'; // Change this to your preferred password

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = () => {
    // Initialize sample posts if none exist
    initializeSamplePosts();
    
    const savedPosts = localStorage.getItem('blogPosts');
    if (savedPosts) {
      const parsedPosts = JSON.parse(savedPosts);
      parsedPosts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setPosts(parsedPosts);
    }
  };

  const savePosts = (updatedPosts) => {
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
    setPosts(updatedPosts);
  };

  const handleAuth = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password');
      setPassword('');
    }
  };

  const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };

  const formatDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentPost(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNewPost = () => {
    setCurrentPost({
      id: '',
      title: '',
      content: '',
      tags: '',
      createdAt: '',
      updatedAt: ''
    });
    setIsEditing(false);
    setShowForm(true);
  };

  const handleEditPost = (post) => {
    setCurrentPost({
      ...post,
      tags: post.tags ? post.tags.join(', ') : ''
    });
    setIsEditing(true);
    setShowForm(true);
  };

  const handleSavePost = (e) => {
    e.preventDefault();
    
    if (!currentPost.title.trim() || !currentPost.content.trim()) {
      alert('Please fill in both title and content');
      return;
    }

    const now = new Date().toISOString();
    const tagsArray = currentPost.tags
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag.length > 0);

    const postToSave = {
      ...currentPost,
      tags: tagsArray,
      updatedAt: now
    };

    if (isEditing) {
      // Update existing post
      const updatedPosts = posts.map(post => 
        post.id === currentPost.id ? postToSave : post
      );
      savePosts(updatedPosts);
    } else {
      // Create new post
      postToSave.id = generateId();
      postToSave.createdAt = now;
      const updatedPosts = [postToSave, ...posts];
      savePosts(updatedPosts);
    }

    setShowForm(false);
    setCurrentPost({
      id: '',
      title: '',
      content: '',
      tags: '',
      createdAt: '',
      updatedAt: ''
    });
  };

  const handleDeletePost = (postId) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      const updatedPosts = posts.filter(post => post.id !== postId);
      savePosts(updatedPosts);
    }
  };

  const handleCancelEdit = () => {
    setShowForm(false);
    setCurrentPost({
      id: '',
      title: '',
      content: '',
      tags: '',
      createdAt: '',
      updatedAt: ''
    });
  };

  const exportPosts = () => {
    const dataStr = JSON.stringify(posts, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `blog-posts-${new Date().toISOString().split('T')[0]}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const importPosts = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const importedPosts = JSON.parse(event.target.result);
        if (Array.isArray(importedPosts)) {
          if (window.confirm('This will replace all existing posts. Continue?')) {
            savePosts(importedPosts);
          }
        } else {
          alert('Invalid file format');
        }
      } catch (error) {
        alert('Error reading file');
      }
    };
    reader.readAsText(file);
    e.target.value = ''; // Reset file input
  };

  if (!isAuthenticated) {
    return (
      <div className="blog-admin-container">
        <div className="auth-form">
          <h2>Blog Admin Access</h2>
          <form onSubmit={handleAuth}>
            <div className="form-group">
              <label htmlFor="password">Enter Admin Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
              />
            </div>
            <button type="submit" className="auth-btn">
              Access Admin Panel
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-admin-container">
      <div className="admin-header">
        <h2>Blog Admin Panel</h2>
        <div className="admin-actions">
          <button onClick={handleNewPost} className="new-post-btn">
            + New Post
          </button>
          <button onClick={exportPosts} className="export-btn">
            Export Posts
          </button>
          <label className="import-btn">
            Import Posts
            <input 
              type="file" 
              accept=".json" 
              onChange={importPosts}
              style={{ display: 'none' }}
            />
          </label>
        </div>
      </div>

      {showForm && (
        <div className="post-form-overlay">
          <div className="post-form">
            <div className="form-header">
              <h3>{isEditing ? 'Edit Post' : 'Create New Post'}</h3>
              <button onClick={handleCancelEdit} className="cancel-btn">
                ×
              </button>
            </div>
            
            <form onSubmit={handleSavePost}>
              <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={currentPost.title}
                  onChange={handleInputChange}
                  placeholder="Enter post title"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="tags">Tags (comma-separated):</label>
                <input
                  type="text"
                  id="tags"
                  name="tags"
                  value={currentPost.tags}
                  onChange={handleInputChange}
                  placeholder="e.g., javascript, react, tutorial"
                />
              </div>

              <div className="form-group">
                <label htmlFor="content">Content:</label>
                <textarea
                  id="content"
                  name="content"
                  value={currentPost.content}
                  onChange={handleInputChange}
                  placeholder="Write your blog post content here..."
                  rows="15"
                  required
                />
              </div>

              <div className="form-actions">
                <button type="button" onClick={handleCancelEdit} className="cancel-form-btn">
                  Cancel
                </button>
                <button type="submit" className="save-btn">
                  {isEditing ? 'Update Post' : 'Create Post'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="posts-list">
        <h3>Manage Posts ({posts.length})</h3>
        
        {posts.length === 0 ? (
          <div className="no-posts">
            <p>No posts yet. Create your first blog post!</p>
          </div>
        ) : (
          <div className="posts-table">
            {posts.map((post) => (
              <div key={post.id} className="post-row">
                <div className="post-info">
                  <h4>{post.title}</h4>
                  <div className="post-meta">
                    <span>Created: {formatDate(post.createdAt)}</span>
                    {post.updatedAt && post.updatedAt !== post.createdAt && (
                      <span>Updated: {formatDate(post.updatedAt)}</span>
                    )}
                    {post.tags && post.tags.length > 0 && (
                      <div className="post-tags">
                        {post.tags.map((tag, index) => (
                          <span key={index} className="tag">#{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="post-preview">
                    {post.content.substring(0, 150)}...
                  </div>
                </div>
                <div className="post-actions">
                  <button 
                    onClick={() => handleEditPost(post)}
                    className="edit-btn"
                  >
                    Edit
                  </button>
                  <button 
                    onClick={() => handleDeletePost(post.id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogAdmin;
