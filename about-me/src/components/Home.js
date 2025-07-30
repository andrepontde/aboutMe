import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="profile-section">
        <img
          src={require('../images/sixdayspic.jpg')}
          alt="Profile"
          className="profile-image"
        />
        <div className="text-content">
          <h1>André Pont De Anda</h1>
          <p className="title">Software Developer & Computing Student</p>
          <p className="main-description">
            Full-stack developer specializing in backend systems and AI integration. 
            Currently pursuing computing studies while building innovative solutions 
            with modern technologies including Java, Python, React, and machine learning frameworks.
          </p>
          
          <div className="quick-stats">
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Technologies</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Learning Mode</span>
            </div>
          </div>

          <Link to="/projects" className="cta-primary">View Projects</Link>
          <Link to="/resume" className="cta-secondary">Download Resume</Link>
        </div>
      </div>

      <div className="highlight-section">
        <h2>Core Expertise</h2>
        <div className="highlights-grid">
          <div className="highlight-item">
            <div className="highlight-icon">⚙️</div>
            <h3>Backend Development</h3>
            <p>Java, Node.js, Express.js, Flask, RESTful APIs, and database integration</p>
          </div>
          <div className="highlight-item">
            <div className="highlight-icon">🤖</div>
            <h3>AI & Machine Learning</h3>
            <p>Python, TensorFlow, OpenAI integration, sentiment analysis, and data processing</p>
          </div>
          <div className="highlight-item">
            <div className="highlight-icon">⚛️</div>
            <h3>Frontend Development</h3>
            <p>React, responsive design, and modern JavaScript frameworks</p>
          </div>
          <div className="highlight-item">
            <div className="highlight-icon">🎯</div>
            <h3>Problem Solving</h3>
            <p>Strong analytical skills with proven ability to deliver innovative solutions and efficient code</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
