import './Projects.css';

function Projects() {
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="project-item">
        <h3>Project 1</h3>
        <p>Short description of the project.</p>
        <p>Tech used: React, Node.js, etc.</p>
        <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </div>
      {/* Add more projects as needed */}
    </div>
  );
}

export default Projects;
