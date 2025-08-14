import React, { useRef } from 'react';
import './Skills.css';

function Skills() {
  const scrollRef = useRef(null);

  const scrollSkillsLeft = () => {
    const container = scrollRef.current;
    if (container) {
      const cardWidth = container.querySelector('.skill-card')?.offsetWidth || 0;
      const gap = 20;
      container.scrollBy({
        left: -(cardWidth + gap),
        behavior: 'smooth'
      });
    }
  };

  const scrollSkillsRight = () => {
    const container = scrollRef.current;
    if (container) {
      const cardWidth = container.querySelector('.skill-card')?.offsetWidth || 0;
      const gap = 20;
      container.scrollBy({
        left: cardWidth + gap,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="skills-container">
      <div className="skills-header">
        <p className="skills-subtitle">
          Technologies and methodologies I use to build meaningful software solutions
        </p>
      </div>

      {/* Skills Container with Side Navigation */}
      <div className="skills-container-wrapper">
        <button className="skills-nav-button skills-nav-left" onClick={scrollSkillsLeft} aria-label="Previous skills">
          <span className="nav-icon">{'<'}</span>
          <span className="nav-label">prev()</span>
        </button>

        {/* Skills Grid */}
        <div className="skills-grid" ref={scrollRef}>
          {/* Primary Languages Card */}
          <div className="skill-card">
            <div className="skill-card-header">
              <h3>Primary Languages</h3>
            </div>
            <div className="skill-card-content">
              <p>
                My core programming languages that I've been working with for years. 
                Java and Python form the perfect combination for my work.
              </p>
              <div className="tech-grid">
                <div className="tech-item primary">
                  <span className="tech-name">Java</span>
                  <span className="tech-note">System-level applications</span>
                </div>
                <div className="tech-item primary">
                  <span className="tech-name">Python</span>
                  <span className="tech-note">AI & data processing</span>
                </div>
                <div className="tech-item">
                  <span className="tech-name">JavaScript</span>
                  <span className="tech-note">Web development</span>
                </div>
                <div className="tech-item">
                  <span className="tech-name">TypeScript</span>
                  <span className="tech-note">Type-safe development</span>
                </div>
                <div className="tech-item">
                  <span className="tech-name">C#</span>
                  <span className="tech-note">Desktop applications</span>
                </div>
              </div>
            </div>
          </div>

          {/* Web Development Card */}
          <div className="skill-card">
            <div className="skill-card-header">
              <h3>Web Development</h3>
            </div>
            <div className="skill-card-content">
              <p>
                Full-stack web development with modern frameworks and tools. 
                Experience building everything from simple portfolios to complex platforms.
              </p>
              <div className="tech-categories">
                <div className="tech-category">
                  <h4>Frontend</h4>
                  <div className="tech-list">
                    <span>React</span>
                    <span>Next.js</span>
                    <span>HTML5 Canvas</span>
                    <span>CSS3</span>
                    <span>Electron</span>
                  </div>
                </div>
                <div className="tech-category">
                  <h4>Backend</h4>
                  <div className="tech-list">
                    <span>Node.js</span>
                    <span>Express.js</span>
                    <span>Flask</span>
                    <span>FastAPI</span>
                    <span>Spring Boot</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AI & Data Science Card */}
          <div className="skill-card">
            <div className="skill-card-header">
              <h3>AI & Data Science</h3>
            </div>
            <div className="skill-card-content">
              <p>
                Specialized in AI integration and natural language processing. 
                Completed Harvard's CS50 AI course and built multiple AI-powered applications.
              </p>
              <div className="ai-skills">
                <div className="ai-skill-item">
                  <span className="skill-title">Natural Language Processing</span>
                  <span className="skill-detail">Sentiment analysis, linguistic matching</span>
                </div>
                <div className="ai-skill-item">
                  <span className="skill-title">OpenAI Integration</span>
                  <span className="skill-detail">GPT-3.5, GPT-4 API development</span>
                </div>
                <div className="ai-skill-item">
                  <span className="skill-title">Machine Learning</span>
                  <span className="skill-detail">TensorFlow, scikit-learn, CNNs</span>
                </div>
                <div className="ai-skill-item">
                  <span className="skill-title">AI Algorithms</span>
                  <span className="skill-detail">Search, minimax, neural networks</span>
                </div>
              </div>
            </div>
          </div>

          {/* Development Practices Card */}
          <div className="skill-card">
            <div className="skill-card-header">
              <h3>Development Practices</h3>
            </div>
            <div className="skill-card-content">
              <p>
                Strong foundation in software engineering principles and methodologies 
                that ensure quality, maintainable code.
              </p>
              <div className="practices-grid">
                <div className="practice-item">
                  <h4>Project Management</h4>
                  <p>PARA Method for organized workflow and knowledge management</p>
                </div>
                <div className="practice-item">
                  <h4>Agile Development</h4>
                  <p>Experienced with Scrum methodology and collaborative environments</p>
                </div>
                <div className="practice-item">
                  <h4>Code Quality</h4>
                  <p>Clean code advocate, SOLID principles, design patterns</p>
                </div>
                <div className="practice-item">
                  <h4>Version Control</h4>
                  <p>Git workflows, collaborative development, documentation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Systems & Tools Card */}
          <div className="skill-card">
            <div className="skill-card-header">
              <h3>Systems & Tools</h3>
            </div>
            <div className="skill-card-content">
              <p>
                Deep understanding of computer systems from hardware to software. 
                Started building and configuring systems at an early age.
              </p>
              <div className="systems-content">
                <div className="system-category">
                  <h4>Databases</h4>
                  <div className="system-items">
                    <span>MongoDB</span>
                    <span>SQLite</span>
                    <span>MySQL</span>
                    <span>PostgreSQL</span>
                  </div>
                </div>
                <div className="system-category">
                  <h4>System Administration</h4>
                  <div className="system-items">
                    <span>Linux</span>
                    <span>Hardware Configuration</span>
                    <span>Performance Tuning</span>
                    <span>System Optimization</span>
                  </div>
                </div>
                <div className="system-category">
                  <h4>Development Tools</h4>
                  <div className="system-items">
                    <span>Git & GitHub</span>
                    <span>NetBeans</span>
                    <span>JWT Authentication</span>
                    <span>API Integration</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className="skills-nav-button skills-nav-right" onClick={scrollSkillsRight} aria-label="Next skills">
          <span className="nav-icon">{'>'}</span>
          <span className="nav-label">next()</span>
        </button>
      </div>
    </div>
  );
}

export default Skills;
