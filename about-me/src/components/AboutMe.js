import './AboutMe.css';

function AboutMe() {
  return (
    <div className="about-me-container">
      <div className="about-intro">
        <h2>About Me</h2>
        <p className="intro-text">
          I'm André Pont De Anda, a 22-year-old Computer Science student at the National College of Ireland, 
          currently in my third year. Originally from México, I chose to study abroad to pursue better 
          opportunities and broaden my horizons. I'm passionate about creating software solutions that 
          make a meaningful impact on communities and businesses.
        </p>
      </div>

      <div className="about-content">
        <div className="column-left">
          <section className="experience-section">
            <h3>Professional Experience</h3>
            <div className="experience-item">
              <h4>Full-Stack Developer - Viaja con CLAP</h4>
              <span className="experience-duration">6 months</span>
              <p>
                Developed a comprehensive website solution for the travel company, handling both frontend 
                and backend development. This experience gave me valuable insights into client requirements, 
                project delivery, and professional software development practices.
              </p>
            </div>
          </section>

          <section className="education-section">
            <h3>Education & Learning</h3>
            <div className="education-item">
              <h4>BSc Computer Science</h4>
              <span className="education-details">National College of Ireland • 3rd Year • 2022-2025</span>
              <p>
                Comprehensive computer science program with emphasis on software engineering, 
                algorithms, and system design. Extensive experience in team-based project development.
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
          </section>

          <section className="interests-section">
            <h3>Beyond Code</h3>
            <p>
              My interests extend beyond pure technology. I'm fascinated by psychology and its intersection 
              with technology, which has led to some of my most innovative projects. I also have extensive 
              knowledge in computer hardware, having built and configured systems since my early teens.
            </p>
            <p>
              I'm always exploring new technologies and methodologies, but I've found that Java and Python 
              form the perfect combination for most of my work - Java for robust system-level applications 
              and Python for AI and high-level data processing.
            </p>
          </section>

          <section className="journey-section">
            <h3>My Journey</h3>
            <p>
              My relationship with technology began at age 8, and it has been a constant companion ever since. 
              What started as curiosity about how computers work evolved into a deep passion for software 
              development, system architecture, and artificial intelligence. Moving from México to Ireland 
              for my studies was a pivotal decision that has shaped both my technical skills and global perspective.
            </p>
            <p>
              I believe in the power of technology to solve real-world problems and am always thinking about 
              how software can contribute to my community. Every project I undertake is driven by this 
              philosophy of meaningful impact.
            </p>
          </section>
        </div>

        <div className="column-right">
          <section className="skills-section">
            <h3>Technical Expertise</h3>
            <div className="skills-grid">
              <div className="skill-category">
                <h4>Core Languages</h4>
                <div className="skills-list">
                  <span className="skill-tag primary">Java</span>
                  <span className="skill-tag primary">Python</span>
                  <span className="skill-tag primary">JavaScript</span>
                </div>
                <p className="skill-description">
                  My go-to languages: Java for robust, low-level system development and Python for 
                  high-level AI and data processing applications.
                </p>
              </div>
              
              <div className="skill-category">
                <h4>Frameworks & Technologies</h4>
                <div className="skills-list">
                  <span className="skill-tag">Spring Boot</span>
                  <span className="skill-tag">Node.js</span>
                  <span className="skill-tag">MERN Stack</span>
                  <span className="skill-tag">Jupyter</span>
                </div>
                <p className="skill-description">
                  Full-stack development with modern frameworks, from backend APIs to complete 
                  web applications.
                </p>
              </div>
              
              <div className="skill-category">
                <h4>AI & Machine Learning</h4>
                <div className="skills-list">
                  <span className="skill-tag primary">Natural Language Processing</span>
                  <span className="skill-tag">Supervised Learning</span>
                  <span className="skill-tag">Unsupervised Learning</span>
                  <span className="skill-tag">Sentiment Analysis</span>
                </div>
                <p className="skill-description">
                  Completed CS50 AI course and developed practical applications including sentiment 
                  analyzers and ChatGPT-integrated solutions.
                </p>
              </div>
              
              <div className="skill-category">
                <h4>Infrastructure & Tools</h4>
                <div className="skills-list">
                  <span className="skill-tag">Linux</span>
                  <span className="skill-tag">Git</span>
                  <span className="skill-tag">VPS Management</span>
                  <span className="skill-tag">System Architecture</span>
                </div>
                <p className="skill-description">
                  Managing my own VPS with multiple services, extensive Linux experience, and 
                  proficient in collaborative development workflows.
                </p>
              </div>
            </div>
          </section>

          <section className="approach-section">
            <h3>Development Philosophy</h3>
            <div className="approach-grid">
              <div className="approach-item">
                <div className="approach-icon">📋</div>
                <h4>PARA Method</h4>
                <p>Organized project management using the PARA system for efficient workflow and knowledge management.</p>
              </div>
              <div className="approach-item">
                <div className="approach-icon">🔄</div>
                <h4>Agile & Scrum</h4>
                <p>Experienced in agile development methodologies and collaborative team environments.</p>
              </div>
              <div className="approach-item">
                <div className="approach-icon">✨</div>
                <h4>Clean Code</h4>
                <p>Strong advocate for maintainable, readable code that stands the test of time.</p>
              </div>
              <div className="approach-item">
                <div className="approach-icon">🔧</div>
                <h4>System Thinking</h4>
                <p>Deep understanding of computer hardware, system optimization, and performance tuning.</p>
              </div>
            </div>
          </section>

          <section className="goals-section">
            <h3>Looking Forward</h3>
            <p>
              I'm actively seeking opportunities to apply my diverse skill set in environments that value 
              innovation, clean code, and meaningful impact. My goal is to work on projects that not only 
              solve technical challenges but also contribute positively to communities and businesses.
            </p>
            <p>
              With my international perspective, technical expertise, and passion for continuous learning, 
              I'm ready to take on challenging projects that push the boundaries of what's possible with 
              modern technology.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
