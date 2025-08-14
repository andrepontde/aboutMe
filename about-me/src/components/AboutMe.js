import React, { useRef } from 'react';
import './AboutMe.css';

function AboutMe() {
  const scrollRef = useRef(null);

  const scrollAboutLeft = () => {
    const container = scrollRef.current;
    if (container) {
      const cardWidth = container.querySelector('.about-card')?.offsetWidth || 0;
      const gap = 20;
      container.scrollBy({
        left: -(cardWidth + gap), // Scroll by 1 card width to shift view
        behavior: 'smooth'
      });
    }
  };

  const scrollAboutRight = () => {
    const container = scrollRef.current;
    if (container) {
      const cardWidth = container.querySelector('.about-card')?.offsetWidth || 0;
      const gap = 20;
      container.scrollBy({
        left: cardWidth + gap, // Scroll by 1 card width to shift view
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="about-me-container">
      <div className="about-header">
        <p className="about-subtitle">
          Get to know the person behind the code - my journey, interests, and vision
        </p>
      </div>

      {/* About Container with Side Navigation */}
      <div className="about-container-wrapper">
        <button className="about-nav-button about-nav-left" onClick={scrollAboutLeft} aria-label="Previous cards">
          <span className="nav-icon">{'<'}</span>
          <span className="nav-label">prev()</span>
        </button>

        {/* About Grid */}
        <div className="about-grid" ref={scrollRef}>
        {/* Introduction Card */}
        <div className="about-card">
          <div className="about-card-header">
            <h3>Introduction</h3>
          </div>
          <div className="about-card-content">
            <p>
              I'm André Pont De Anda, a 22-year-old Computer Science student at National College of Ireland, 
              currently in my third year. Originally from México, I chose to study abroad to pursue better 
              opportunities and broaden my horizons.
            </p>
            <p>
              I'm passionate about creating software solutions that make a meaningful impact on communities and businesses.
            </p>
            <div className="highlight-info">
              <span>🌎 México → Ireland</span>
              <span>🎓 Computer Science Student</span>
              <span>💻 Full-Stack Developer</span>
            </div>
          </div>
        </div>

        {/* Beyond Code Card */}
        <div className="about-card">
          <div className="about-card-header">
            <h3>Beyond Code</h3>
          </div>
          <div className="about-card-content">
            <p>
              My interests extend beyond pure technology. I'm fascinated by psychology and its intersection 
              with technology, which has led to some of my most innovative projects.
            </p>
            <p>
              I also have extensive knowledge in computer hardware, having built and configured systems since my early teens.
            </p>
            <p>
              I'm always exploring new technologies and methodologies, but I've found that Java and Python 
              form the perfect combination for most of my work - Java for robust system-level applications 
              and Python for AI and high-level data processing.
            </p>
            <div className="tech-preferences">
              <span className="tech-tag primary">Java</span>
              <span className="tech-tag primary">Python</span>
              <span className="tech-tag">Psychology + Tech</span>
              <span className="tech-tag">Hardware</span>
            </div>
          </div>
        </div>

        {/* Journey Card */}
        <div className="about-card">
          <div className="about-card-header">
            <h3>My Journey</h3>
          </div>
          <div className="about-card-content">
            <p>
              My relationship with technology began at age 8, and it has been a constant companion ever since. 
              What started as curiosity about how computers work evolved into a deep passion for software 
              development, system architecture, and artificial intelligence.
            </p>
            <p>
              Moving from México to Ireland for my studies was a pivotal decision that has shaped both my 
              technical skills and global perspective.
            </p>
            <p>
              I believe in the power of technology to solve real-world problems and am always thinking about 
              how software can contribute to my community. Every project I undertake is driven by this 
              philosophy of meaningful impact.
            </p>

          </div>
        </div>

        {/* Development Philosophy Card */}
        <div className="about-card">
          <div className="about-card-header">
            <h3>Development Philosophy</h3>
          </div>
          <div className="about-card-content">
            <div className="philosophy-grid">
              <div className="philosophy-item">
                <div className="philosophy-icon"></div>
                <h4>PARA Method</h4>
                <p>Organized project management using the PARA system for efficient workflow and knowledge management.</p>
              </div>
              <div className="philosophy-item">
                <div className="philosophy-icon"></div>
                <h4>Agile & Scrum</h4>
                <p>Experienced in agile development methodologies and collaborative team environments.</p>
              </div>
              <div className="philosophy-item">
                <div className="philosophy-icon"></div>
                <h4>Clean Code</h4>
                <p>Strong advocate for maintainable, readable code that stands the test of time.</p>
              </div>
              <div className="philosophy-item">
                <div className="philosophy-icon"></div>
                <h4>System Thinking</h4>
                <p>Deep understanding of computer hardware, system optimization, and performance tuning.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Looking Forward Card */}
        <div className="about-card">
          <div className="about-card-header">
            <h3>Looking Forward</h3>

          </div>
          <div className="about-card-content">
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
            <p>
              Whether working independently or as part of a team, I focus on clear communication, thorough 
              documentation, and collaborative development practices that lead to successful project outcomes.
            </p>
          </div>
        </div>
        </div>

        <button className="about-nav-button about-nav-right" onClick={scrollAboutRight} aria-label="Next cards">
          <span className="nav-icon">{'>'}</span>
          <span className="nav-label">next()</span>
        </button>
      </div>
    </div>
  );
}

export default AboutMe;
