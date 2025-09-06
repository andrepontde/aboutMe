import React, { useEffect, useState } from 'react';
import AboutMe from '../components/AboutMe';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Skills from '../components/Skills';
import { trackPageView, trackPortfolioEvent } from '../utils/analytics';

const PortfolioPage = () => {
  const [currentSection, setCurrentSection] = useState('about');
  const [displayText, setDisplayText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const [showContent, setShowContent] = useState(false);

  // Track initial page view
  useEffect(() => {
    trackPageView(window.location.pathname);
  }, []);

  useEffect(() => {
    const terminalLines = [
      'andre@portfolio:~$ pwd',
      '/home/andre/portfolio',
      'andre@portfolio:~$ ls -la',
      'total 42',
      'drwxr-xr-x  6 andre andre 4096 Aug 14 2025 .',
      'drwxr-xr-x 12 andre andre 4096 Aug 14 2025 ..',
      '-rw-r--r--  1 andre andre 2048 Aug 14 2025 README.md',
      'andre@portfolio:~$ cat README.md',
      ';)'
    ];

    let timeoutId;
    if (currentLine < terminalLines.length) {
      timeoutId = setTimeout(() => {
        setDisplayText(prev => prev + terminalLines[currentLine] + '\n');
        setCurrentLine(prev => prev + 1);
      }, 400);
    } else if (currentLine === terminalLines.length && !showContent) {
      timeoutId = setTimeout(() => {
        setShowContent(true);
      }, 800);
    }
    return () => clearTimeout(timeoutId);
  }, [currentLine, showContent]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setCurrentSection(sectionId);
    
    // Track section views
    trackPortfolioEvent.sectionView(sectionId);
  };

  return (
    <div className="main-container">
      {/* Header */}
      <header className="main-header">
        <div className="header-content">
          {!showContent && (
            <div className="terminal-intro">
              <pre className="terminal-startup">{displayText}</pre>
            </div>
          )}
          {showContent && (
            <div className="welcome-content">
              <div className="content-layout">
                <div className="text-content">
                  <h1>André Pont</h1>
                  <p className="tagline">Full-Stack Developer & Computing Student</p>
                  <p className="description">
                    CS student motivated by a passion for technology and fear of unemployment.
                    Retired procrastinator and retail assistant @ <a href="https://www.rains.com" className="company-link" target="_blank" rel="noopener noreferrer">RAINS Dublin</a>
                  </p>
                  <div className="quick-info">
                    <span>📍 Dublin, Ireland</span>
                    <span>🎓 BSc Computer Science</span>
                    <span>💼 3+ Years Experience</span>
                  </div>
                </div>
                <div className="profile-section">
                  <img 
                    src={require('../images/sixdayspic.jpg')} 
                    alt="André Pont De Anda" 
                    className="profile-image"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {showContent && (
        <>
          {/* Navigation */}
          <nav className="main-nav">
            <button 
              className={currentSection === 'about' ? 'active' : ''} 
              onClick={() => scrollToSection('about')}
            >
              About
            </button>
            <button 
              className={currentSection === 'skills' ? 'active' : ''} 
              onClick={() => scrollToSection('skills')}
            >
              Skills
            </button>
            <button 
              className={currentSection === 'projects' ? 'active' : ''} 
              onClick={() => scrollToSection('projects')}
            >
              Projects
            </button>
            <button 
              className={currentSection === 'experience' ? 'active' : ''} 
              onClick={() => scrollToSection('experience')}
            >
              Experience
            </button>
            <button 
              className={currentSection === 'contact' ? 'active' : ''} 
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </button>
            {/* Blog link */}
            <a href="/blog" className="nav-link">
              Blog
            </a>
          </nav>

          {/* About Section */}
          <section id="about" className="content-section">
            <div className="horizontal-scroll">
              <AboutMe />
            </div>
          </section>

          {/* Main Content */}
          <main className="main-content">
            
            {/* Skills Section */}
            <section id="skills" className="content-section">
              <div className="horizontal-scroll">
                <Skills />
              </div>
            </section>

          
            {/* Projects Section */}
            <section id="projects" className="content-section">
              <div className="horizontal-scroll">
                <Projects />
              </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="content-section">
              <div className="horizontal-scroll">
                <Experience />
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="content-section">
              <div className="horizontal-scroll">
                <Contact />
              </div>
            </section>
          </main>

          <footer className="main-footer">
            <p>© 2025 André Pont De Anda. All rights reserved.</p>
          </footer>
        </>
      )}
    </div>
  );
};

export default PortfolioPage;
