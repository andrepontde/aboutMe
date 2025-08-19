import React, { useState } from 'react';
import './Experience.css';

function Experience() {
  const [activeTab, setActiveTab] = useState('professional');

  const tabs = [
    { id: 'professional', label: 'Experience', icon: '' },
    { id: 'education', label: 'Education', icon: '' },
    { id: 'philosophy', label: 'Philosophy', icon: '' }
  ];

  return (
    <div className="experience-container">
      {/* Tab Navigation */}
      <div className="experience-tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="tab-icon">{tab.icon}</span>
            <span className="tab-label">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="experience-content-wrapper">
        {/* Professional Experience */}
        {activeTab === 'professional' && (
          <div className="tab-content professional-content">
            <div className="content-header">
              <h3>Professional Journey</h3>
              <p className="content-subtitle">Building solutions that make a difference</p>
            </div>
            
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-marker">
                  <span className="marker-dot"></span>
                  <span className="marker-line"></span>
                </div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h4>Full-Stack Developer</h4>
                    <span className="company">Viaja con CLAP</span>
                    <span className="duration">6 months</span>
                  </div>
                  <p>
                    Developed a comprehensive website solution for the travel company, handling both frontend 
                    and backend development. This experience gave me valuable insights into client requirements, 
                    project delivery, and professional software development practices.
                  </p>
                  <div className="timeline-tags">
                    <span className="timeline-tag">Full-Stack Development</span>
                    <span className="timeline-tag">Client Relations</span>
                    <span className="timeline-tag">Project Delivery</span>
                  </div>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker">
                  <span className="marker-dot"></span>
                </div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h4>Freelance Developer</h4>
                    <span className="company">Independent</span>
                    <span className="duration">Ongoing</span>
                  </div>
                  <p>
                    Working on various projects ranging from web applications to AI integrations. 
                    Building solutions for small businesses and startups with focus on scalable architectures.
                  </p>
                  <div className="timeline-tags">
                    <span className="timeline-tag">Web Applications</span>
                    <span className="timeline-tag">AI Integration</span>
                    <span className="timeline-tag">Scalable Architecture</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Philosophy */}
        {activeTab === 'philosophy' && (
          <div className="tab-content philosophy-content">
            <div className="content-header">
              <h3>Development Philosophy</h3>
              <p className="content-subtitle">Principles that guide my approach to development</p>
            </div>
            
            <div className="philosophy-grid">
              <div className="philosophy-item">
                <div className="philosophy-icon">📋</div>
                <h4>PARA Method</h4>
                <p>Organized project management using the PARA system for efficient workflow and knowledge management, this has been an essential part to my discipline and dedication. If you haven't seen it check <a href='https://youtu.be/T6Mfl1OywM8?si=D3zP1VcFwJ2YBSB0' target="_blank" rel="noopener noreferrer">Tiago Forte's video on organization</a></p>
              </div>
              <div className="philosophy-item">
                <div className="philosophy-icon">🔄</div>
                <h4>Agile & Scrum</h4>
                <p>Experienced in agile development methodologies and collaborative team environments.</p>
              </div>
              <div className="philosophy-item">
                <div className="philosophy-icon">✨</div>
                <h4>Clean Code</h4>
                <p>Strong advocate for maintainable, readable code that stands the test of time.</p>
              </div>
              <div className="philosophy-item">
                <div className="philosophy-icon">🧠</div>
                <h4>System Thinking</h4>
                <p>Deep understanding of computer hardware, system optimization, and performance tuning.</p>
              </div>
            </div>
          </div>
        )}

        {/* Education */}
        {activeTab === 'education' && (
          <div className="tab-content education-content">
            <div className="content-header">
              <h3>Learning Journey</h3>
              <p className="content-subtitle">Continuous growth and knowledge expansion</p>
            </div>
            
            <div className="education-showcase">
              <div className="education-item-modern primary">
                <div className="education-badge">
                  <span className="badge-icon"></span>
                  <span className="badge-text">Current</span>
                </div>
                <div className="education-content-main">
                  <h4>BSc Computer Science</h4>
                  <div className="education-meta">
                    <span className="institution">National College of Ireland</span>
                    <span className="year">2022-2025</span>
                    <span className="status">3rd Year</span>
                  </div>
                  <p>
                    Comprehensive computer science program with emphasis on software engineering, 
                    algorithms, and system design. Extensive experience in team-based project development.
                  </p>
                </div>
              </div>

              <div className="education-item-modern">
                <div className="education-badge">
                  <span className="badge-icon"></span>
                  <span className="badge-text">Certificate</span>
                </div>
                <div className="education-content-main">
                  <h4>CS50 AI with Python</h4>
                  <div className="education-meta">
                    <span className="institution">Harvard University</span>
                    <span className="year">2024</span>
                  </div>
                  <p>
                    Intensive AI program covering search algorithms, adversarial AI, knowledge-based systems, 
                    probabilistic models, reinforcement learning, CNNs, and NLP with attention mechanisms.
                  </p>
                </div>
              </div>

              <div className="education-item-modern">
                <div className="education-badge">
                  <span className="badge-icon"></span>
                  <span className="badge-text">500+ hrs</span>
                </div>
                <div className="education-content-main">
                  <h4>Continuous Learning</h4>
                  <div className="education-meta">
                    <span className="institution">Various Platforms</span>
                    <span className="year">Ongoing</span>
                  </div>
                  <p>
                    Udemy courses covering AI (supervised/unsupervised ML, NLP), advanced Python, 
                    and Linux system administration. Committed to staying current with emerging technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Experience;