import './AboutMe.css';

function AboutMe() {
  return (
    <div className="about-me-container">
      <div className="about-intro">
        <h2>About Me</h2>
        <p className="intro-text">
          I'm André Pont De Anda, a passionate computing student with a strong foundation in backend development 
          and a growing interest in artificial intelligence. I thrive on solving complex problems and building 
          scalable solutions that make a real impact.
        </p>
      </div>

      <div className="about-content">
        <section className="journey-section">
          <h3>My Journey</h3>
          <p>
            Currently pursuing my studies at National College of Ireland, I've developed a deep appreciation 
            for the intersection of technology and problem-solving. My journey began with curiosity about 
            how systems work behind the scenes, which naturally led me to backend development where I can 
            architect and build the foundations that power applications.
          </p>
          <p>
            What excites me most about development is the constant learning curve. Every project presents 
            new challenges that push me to explore different technologies, optimize performance, and think 
            creatively about solutions. This adaptability has become one of my strongest assets as a developer.
          </p>
        </section>

        <section className="skills-section">
          <h3>Technical Skills</h3>
          <div className="skills-grid">
            <div className="skill-category">
              <h4>Backend Development</h4>
              <div className="skills-list">
                <span className="skill-tag primary">Node.js</span>
                <span className="skill-tag primary">Express.js</span>
                <span className="skill-tag primary">Java</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">API Design</span>
                <span className="skill-tag">Database Design</span>
              </div>
            </div>
            
            <div className="skill-category">
              <h4>Frontend Development</h4>
              <div className="skills-list">
                <span className="skill-tag primary">React</span>
                <span className="skill-tag primary">JavaScript</span>
                <span className="skill-tag">HTML5</span>
                <span className="skill-tag">CSS3</span>
                <span className="skill-tag">Responsive Design</span>
              </div>
            </div>
            
            <div className="skill-category">
              <h4>AI & Machine Learning</h4>
              <div className="skills-list">
                <span className="skill-tag primary">TensorFlow</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Data Analysis</span>
                <span className="skill-tag">ML Algorithms</span>
              </div>
            </div>
            
            <div className="skill-category">
              <h4>Tools & Technologies</h4>
              <div className="skills-list">
                <span className="skill-tag">Git & GitHub</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">SQLite</span>
                <span className="skill-tag">VS Code</span>
                <span className="skill-tag">Linux</span>
              </div>
            </div>
          </div>
        </section>

        <section className="approach-section">
          <h3>My Approach</h3>
          <div className="approach-grid">
            <div className="approach-item">
              <div className="approach-icon">🎯</div>
              <h4>Problem-First Thinking</h4>
              <p>I always start by understanding the problem deeply before jumping into solutions. This ensures I build what's actually needed.</p>
            </div>
            <div className="approach-item">
              <div className="approach-icon">🔧</div>
              <h4>Clean Code Advocate</h4>
              <p>I believe in writing code that's not just functional but also maintainable, readable, and efficient for long-term success.</p>
            </div>
            <div className="approach-item">
              <div className="approach-icon">📚</div>
              <h4>Continuous Learning</h4>
              <p>Technology evolves rapidly, and I'm committed to staying current with industry trends and best practices.</p>
            </div>
            <div className="approach-item">
              <div className="approach-icon">🤝</div>
              <h4>Collaborative Mindset</h4>
              <p>Great software is built by great teams. I value communication, feedback, and learning from others.</p>
            </div>
          </div>
        </section>

        <section className="interests-section">
          <h3>When I'm Not Coding</h3>
          <p>
            Outside of development, I'm fascinated by emerging technologies and their potential impact on society. 
            I enjoy reading about AI advancements, exploring new programming paradigms, and contributing to 
            open-source projects when possible. I also believe in maintaining a healthy work-life balance 
            through outdoor activities and continuous learning in various fields.
          </p>
        </section>

        <section className="goals-section">
          <h3>Looking Forward</h3>
          <p>
            I'm actively seeking opportunities to apply my skills in a professional environment where I can 
            contribute to meaningful projects while continuing to grow as a developer. My goal is to work 
            on systems that scale, solve real problems, and make a positive impact on users' lives.
          </p>
          <p>
            I'm particularly interested in roles that combine backend development with AI/ML applications, 
            as I believe this intersection represents the future of intelligent software systems.
          </p>
        </section>
      </div>
    </div>
  );
}

export default AboutMe;
