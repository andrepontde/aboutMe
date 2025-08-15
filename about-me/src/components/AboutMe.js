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
      </div>

      {/* About Container with Side Navigation */}
      <div className="about-container-wrapper">
        <button className="about-nav-button about-nav-left" onClick={scrollAboutLeft} aria-label="Previous cards">
          <span className="nav-icon">{'<'}</span>
          <span className="nav-label">prev()</span>
        </button>

        {/* About Grid */}
        <div className="about-grid" ref={scrollRef}>
        /* Introduction Card */
          <div className="about-card">
            <div className="about-card-header">
              <h3>Who am I</h3>
            </div>
            <div className="about-card-content-two-column">
              <div className="about-left-column">
                <p>
            I'm André Pont, a 22-year-old Computer Science student at National College of Ireland, 
            currently in my third year. Originally from México, but I chose to study abroad to escape latin america.
                </p>
                <p>
            My passion is creating software solutions that make a meaningful impact on communities and businesses.
                </p>
                <p>
            With over 4 years of hands-on experience in software development, I’ve built a strong foundation in computer science fundamentals, contributed to diverse projects from web apps to automation tools, and am now diving deep into AI development and model training to expand my expertise even further.
                </p>

              </div>
              <div className="about-right-column">
                <div className="stats-container">
            <h4>Quick Stats</h4>
            <div className="stat-item">
              <span className="stat-label">Age:</span>
              <span className="stat-value">22</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Years Coding:</span>
              <span className="stat-value">6+</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Projects:</span>
              <span className="stat-value">30+</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Languages:</span>
              <span className="stat-value">3+</span>
            </div>
                </div>
                <div className="location-info">
            <h4>Location Journey</h4>
            <div className="location-timeline">
              <div className="location-step">
                <span className="location-flag">🇲🇽</span>
                <span className="location-text">Born in México</span>
              </div>
              <div className="location-step">
                <span className="location-flag">✈️</span>
                <span className="location-text">Moved to Ireland</span>
              </div>
              <div className="location-step">
                <span className="location-flag">🇮🇪</span>
                <span className="location-text">Studying in Dublin</span>
              </div>
            </div>
                </div>
              </div>
            </div>
          </div>
{/* Beyond Code Card */}
        <div className="about-card">
          <div className="about-card-header">
            <h3>Beyond Code</h3>
          </div>
          <div className="about-card-content-two-column">
            <div className="about-left-column">
              <p>
                My interests extend beyond pure technology. I'm fascinated by psychology and its intersection 
                with technology, which has led to some of my most innovative projects.
              </p>
              <p>
                I also have extensive knowledge in computer hardware, since I built and configured systems since my early teens with my dad.
              </p>
              <p>
                I've found that Java and Python form the perfect combination for most of my work - Java for robust system-level applications and Python for AI and high-level data processing, but I often use javascript as well for web development.
              </p>
              <div className="tech-preferences">
                <span className="tech-tag primary">Java</span>
                <span className="tech-tag primary">Python</span>
                <span className="tech-tag">Psychology + Tech</span>
                <span className="tech-tag">Hardware</span>
              </div>
            </div>
            <div className="about-right-column">
              <div className="interests-container">
                <h4>Personal Interests</h4>
                <div className="interest-item">
                  <span className="interest-icon">🧠</span>
                  <div className="interest-content">
                    <span className="interest-title">Psychology</span>
                    <span className="interest-desc">Human behavior & UX</span>
                  </div>
                </div>
                <div className="interest-item">
                  <span className="interest-icon">🔧</span>
                  <div className="interest-content">
                    <span className="interest-title">Hardware</span>
                    <span className="interest-desc">Building & optimization</span>
                  </div>
                </div>
                <div className="interest-item">
                  <span className="interest-icon">🎮</span>
                  <div className="interest-content">
                    <span className="interest-title">Gaming</span>
                    <span className="interest-desc">Mainly Valve's deadlock and Horror games</span>
                  </div>
                </div>
              </div>
              <div className="hardware-specs">
                <h4>Current Setup</h4>
                <div className="spec-list">
                  <div className="spec-item">
                    <span className="spec-label">CPU:</span>
                    <span className="spec-value">AMD Ryzen 7 7700</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">RAM:</span>
                    <span className="spec-value">32GB DDR5 6000mhz</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">GPU:</span>
                    <span className="spec-value">RTX 5070</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">OS:</span>
                    <span className="spec-value">Windows 11</span>
                    
                  </div>
                  <div className="spec-item">
                    <span className="spec-label"></span>
                    <span className="spec-value" style={{ fontSize: '0.7em', color: '#888', marginTop: '2px', display: 'block' }}>
                      (I only use linux for my vps get over it)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          {/* Development Philosophy Card
        <div className="about-card">
          <div className="about-card-header">
            <h3>Development Philosophy</h3>
          </div>
          <div className="about-card-content-two-column">
            <div className="about-left-column">
              <div className="philosophy-grid-left">
                <div className="philosophy-item">
                  <div className="philosophy-icon">📋</div>
                  <h4>PARA Method</h4>
                  <p>Organized project management using the PARA system for efficient workflow and knowledge management, this has been an essential part to my discipline and dedication. If you haven't seen it check <a href='https://youtu.be/T6Mfl1OywM8?si=D3zP1VcFwJ2YBSB0'>Tiago Forte's video on organization</a></p>
                </div>
                <div className="philosophy-item">
                  <div className="philosophy-icon">🔄</div>
                  <h4>Agile & Scrum</h4>
                  <p>Experienced in agile development methodologies and collaborative team environments.</p>
                </div>
              </div>
            </div>
            <div className="about-right-column">
              <div className="philosophy-grid-right">
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
          </div>
        </div> */}

        

        {/* Looking Forward Card */}
        <div className="about-card">
          <div className="about-card-header">
            <h3>Looking Forward</h3>
          </div>
          <div className="about-card-content-two-column">
            <div className="about-left-column">
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
            <div className="about-right-column">
              <div className="goals-container">
                <h4>Career Goals</h4>
                <div className="goal-item">
                  <span className="goal-icon">🎯</span>
                  <span className="goal-text">Full-stack development role</span>
                </div>
                <div className="goal-item">
                  <span className="goal-icon">🤖</span>
                  <span className="goal-text">AI/ML integration projects</span>
                </div>
                <div className="goal-item">
                  <span className="goal-icon">🌍</span>
                  <span className="goal-text">Work with international teams</span>
                </div>
                <div className="goal-item">
                  <span className="goal-icon">📈</span>
                  <span className="goal-text">Lead innovative solutions</span>
                </div>
              </div>
              <div className="availability-container">
                <h4>Availability</h4>
                <div className="availability-status">
                  <span className="status-indicator active"></span>
                  <span className="status-text">Open to opportunities</span>
                </div>
                <div className="availability-details">
                  <div className="availability-item">
                    <span className="avail-label">Graduation:</span>
                    <span className="avail-value">Summer 2027</span>
                  </div>
                  <div className="availability-item">
                    <span className="avail-label">Location:</span>
                    <span className="avail-value">Dublin / Remote</span>
                  </div>
                  <div className="availability-item">
                    <span className="avail-label">Type:</span>
                    <span className="avail-value">Full-time / Internship</span>
                  </div>
                </div>
              </div>
            </div>
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
