import React from 'react';
import './Experience.css';

function Experience() {
  return (
    <div className="experience-container">
      
      <div className="experience-grid">
        {/* Professional Experience */}
        <div className="experience-card">
          <div className="card-header">
            <h3>Professional Experience</h3>
            {/* <span className="card-icon">💼</span> */}
          </div>
          <div className="experience-content">
            <div className="experience-item">
              <h4>Full-Stack Developer - Viaja con CLAP</h4>
              <span className="experience-duration">6 months</span>
              <p>
                Developed a comprehensive website solution for the travel company, handling both frontend 
                and backend development. This experience gave me valuable insights into client requirements, 
                project delivery, and professional software development practices.
              </p>
            </div>
            <div className="experience-item">
              <h4>Freelance Developer</h4>
              <span className="experience-duration">Ongoing</span>
              <p>
                Working on various projects ranging from web applications to AI integrations. 
                Building solutions for small businesses and startups with focus on scalable architectures.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Expertise */}
        <div className="experience-card">
          <div className="card-header">
            <h3>Technical Expertise</h3>
            {/* <span className="card-icon">⚙️</span> */}
          </div>
          <div className="experience-content">
            <div className="skill-category">
              <h4>Core Development</h4>
              <div className="skills-list">
                <span className="skill-tag primary">Java</span>
                <span className="skill-tag primary">Python</span>
                <span className="skill-tag primary">JavaScript</span>
                <span className="skill-tag">Spring Boot</span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">Node.js</span>
              </div>
              <p className="skill-description">
                Full-stack development with expertise in enterprise-level applications and modern web frameworks.
              </p>
            </div>
            
            <div className="skill-category">
              <h4>AI & Machine Learning</h4>
              <div className="skills-list">
                <span className="skill-tag primary">Natural Language Processing</span>
                <span className="skill-tag">TensorFlow</span>
                <span className="skill-tag">OpenAI Integration</span>
                <span className="skill-tag">Sentiment Analysis</span>
              </div>
              <p className="skill-description">
                Advanced AI applications including sentiment analyzers, ChatGPT integrations, and ML model development.
              </p>
            </div>
            
            <div className="skill-category">
              <h4>Infrastructure & Systems</h4>
              <div className="skills-list">
                <span className="skill-tag">Linux Administration</span>
                <span className="skill-tag">VPS Management</span>
                <span className="skill-tag">Git</span>
                <span className="skill-tag">System Architecture</span>
              </div>
              <p className="skill-description">
                Extensive experience managing servers, system optimization, and collaborative development workflows.
              </p>
            </div>
          </div>
        </div>

        {/* Education & Learning */}
        <div className="experience-card">
          <div className="card-header">
            <h3>Education & Learning</h3>
            {/* <span className="card-icon">🎓</span> */}
          </div>
          <div className="experience-content">
            <div className="education-item">
              <h4>BSc Computer Science</h4>
              <span className="education-details">National College of Ireland • 3rd Year • 2022-2025</span>
              <p>
                Comprehensive computer science program with emphasis on software engineering, 
                algorithms, and system design. Extensive experience in team-based project development.
              </p>
            </div>
            
            <div className="education-item">
              <h4>CS50 AI with Python</h4>
              <span className="education-details">Harvard University • 2024</span>
              <p>
                Intensive AI program covering search algorithms, adversarial AI, knowledge-based systems, 
                probabilistic models, reinforcement learning, CNNs, and NLP with attention mechanisms.
              </p>
            </div>
            
            <div className="education-item">
              <h4>Continuous Learning</h4>
              <span className="education-details">500+ hours of specialized courses</span>
              <p>
                Udemy courses covering AI (supervised/unsupervised ML, NLP), advanced Python, 
                and Linux system administration. Committed to staying current with emerging technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
