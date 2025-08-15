import './App.css';
import { useEffect, useState } from 'react';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';

function App() {
  const [currentSection, setCurrentSection] = useState('about');
  const [displayText, setDisplayText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const [showContent, setShowContent] = useState(false);

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
      ''
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
  };

  useEffect(() => {
    const canvas = document.getElementById('game-of-life');
    if (!canvas) return; // Early return if canvas doesn't exist
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return; // Early return if context can't be created
    
    canvas.style.position = 'fixed'; // Ensure the canvas is fixed
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%'; // Make the canvas width match the viewport
    canvas.style.height = '100%'; // Make the canvas height match the viewport
    canvas.width = window.innerWidth; // Match the canvas width to the viewport
    canvas.height = window.innerHeight; // Match the canvas height to the viewport

    const width = canvas.width;
    const height = canvas.height;

    const resolution = 10;
    const cols = Math.floor(width / resolution);
    const rows = Math.floor(height / resolution);

    let grid = createGrid();

    function createGrid() {
      return new Array(rows).fill(null).map(() =>
        new Array(cols).fill(null).map(() => Math.random() > 0.8 ? 1 : 0)
      );
    }

    function drawGrid(grid) {
      ctx.fillStyle = '#000000'; // Black background
      ctx.fillRect(0, 0, width, height);
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          ctx.fillStyle = grid[row][col] ? '#c2fe0c' : '#000000'; // Neon green for active cells
          ctx.fillRect(col * resolution, row * resolution, resolution, resolution);
        }
      }
    }

    function updateGrid(grid) {
      const nextGrid = grid.map(arr => [...arr]);
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const neighbors = countNeighbors(grid, row, col);
          if (grid[row][col] === 1 && (neighbors < 2 || neighbors > 3)) {
            nextGrid[row][col] = 0;
          } else if (grid[row][col] === 0 && neighbors === 3) {
            nextGrid[row][col] = 1;
          }
        }
      }
      return nextGrid;
    }

    function countNeighbors(grid, x, y) {
      let sum = 0;
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          const row = (x + i + rows) % rows;
          const col = (y + j + cols) % cols;
          sum += grid[row][col];
        }
      }
      sum -= grid[x][y];
      return sum;
    }

    function update() {
      const fps = 10; // Target 10 updates per second
      const interval = 1000 / fps;
      let lastTime = 0;

      function step(currentTime) {
        if (currentTime - lastTime >= interval) {
          grid = updateGrid(grid);
          drawGrid(grid);
          lastTime = currentTime;
        }
        requestAnimationFrame(step);
      }

      requestAnimationFrame(step);
    }

    drawGrid(grid);
    update();
  }, []);

  return (
    <div className="App">
      <canvas id="game-of-life"></canvas>
      
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
                    <h1>André Pont De Anda</h1>
                    <p className="tagline">Full-Stack Developer & Computing Student</p>
                    <p className="description">
                      CS student motivated by a passion for technology and fear of unempployment.
                      Retired procastinator and retail assistant @ <a href="https://www.rains.com">RAINS Dublin</a>
                    </p>
                    <div className="quick-info">
                      <span>📍 Dublin, Ireland</span>
                      <span>🎓 BSc Computer Science</span>
                      <span>💼 3+ Years Experience</span>
                    </div>
                  </div>
                  <div className="profile-section">
                    <img 
                      src={require('./images/sixdayspic.jpg')} 
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
                {/* <h2>Get In Touch</h2> */}
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
    </div>
  );
}

export default App;
