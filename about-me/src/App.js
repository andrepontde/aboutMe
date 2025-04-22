import './App.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    const canvas = document.getElementById('game-of-life');
    const ctx = canvas.getContext('2d');
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
    <Router>
      <div className="App">
        <canvas id="game-of-life"></canvas>
        <header className="App-header">
          <nav>
            <a href="/">Home</a>
            <a href="/about-me">About Me</a>
            <a href="/projects">Projects</a>
            <a href="/resume">Resume</a>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
		<div className="contact-wrapper">
          <Contact />
        </div>

        <footer>
          <p>Copyright © 2025, André Pont De Anda</p>
          <p>All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
