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
          <h1>Hello! I'm André Pont</h1>
          <p className="main-description">
            I am a computing student with a passion for backend development and a keen interest in exploring the world of AI. As a developer, I can easily adapt to any tech stack and am always eager to learn new technologies. I have a strong foundation in programming languages such as Java, Python, and JavaScript, and I am proficient in using frameworks like Express.js for API development and TensorFlow for AI.
          </p>
          <p className="secondary-description">If you would like to know more about me, feel free to explore the following sections:</p>
          <ul className="navigation-links">
            <li><Link to="/about-me">🙍🏻‍♂️ About Me</Link></li>
            <li><Link to="/projects">💻 Projects</Link></li>
            <li><Link to="/resume">📄 Resume</Link></li>
            <li><a href="#contact">📧 Contact</a></li>
          </ul>
          
          <div className="quick-stats">
            <div className="stat-item">
              <span className="stat-number">4+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Technologies Mastered</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">2+</span>
              <span className="stat-label">Years Learning</span>
            </div>
          </div>

          <div className="cta-section">
            <Link to="/projects" className="cta-primary">View My Work</Link>
            <a href="#contact" className="cta-secondary">Get In Touch</a>
          </div>
        </div>
      </div>

      <div className="highlight-section">
        <h2>What I Bring to the Table</h2>
        <div className="highlights-grid">
          <div className="highlight-item">
            <div className="highlight-icon">�</div>
            <h3>Backend Excellence</h3>
            <p>Specialized in building robust, scalable backend systems with Node.js, Express.js, and Java</p>
          </div>
          <div className="highlight-item">
            <div className="highlight-icon">🤖</div>
            <h3>AI Integration</h3>
            <p>Experience with TensorFlow and machine learning model integration into web applications</p>
          </div>
          <div className="highlight-item">
            <div className="highlight-icon">⚡</div>
            <h3>Quick Adaptation</h3>
            <p>Proven ability to quickly learn and adapt to new technologies and development frameworks</p>
          </div>
          <div className="highlight-item">
            <div className="highlight-icon">🎯</div>
            <h3>Problem Solver</h3>
            <p>Strong analytical skills with a focus on creating efficient, maintainable solutions</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
