import './Skills.css';

function Skills() {
  return (
    <div className="skills-container">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-category">
        <h3>Frontend</h3>
        <p>React, HTML, CSS, JavaScript</p>
      </div>
      <div className="skills-category">
        <h3>Backend</h3>
        <p>Node.js, Express, MongoDB</p>
      </div>
      <div className="skills-category">
        <h3>Tools</h3>
        <p>Git, Docker, VS Code</p>
      </div>
    </div>
  );
}

export default Skills;
