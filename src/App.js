import './App.css';
import './pages/Pages.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PortfolioPage from './pages/PortfolioPage';
import BlogPage from './pages/BlogPage';
import AdminPage from './pages/AdminPage';

function App() {
  useEffect(() => {
    const canvas = document.getElementById('game-of-life');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const width = canvas.width;
    const height = canvas.height;

    const isMobile = window.innerWidth <= 768;
    const resolution = isMobile ? 15 : 10;
    const cols = Math.floor(width / resolution);
    const rows = Math.floor(height / resolution);

    let grid = createGrid();

    function createGrid() {
      return new Array(rows).fill(null).map(() =>
        new Array(cols).fill(null).map(() => Math.random() > 0.8 ? 1 : 0)
      );
    }

    function drawGrid(grid) {
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, width, height);
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          ctx.fillStyle = grid[row][col] ? '#c2fe0c' : '#000000';
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
      const fps = isMobile ? 6 : 10;
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

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="App">
      <canvas id="game-of-life"></canvas>
      
      <Router>
        <Routes>
          <Route path="/" element={<PortfolioPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
