import './AboutMe.css';

function AboutMe() {
  return (
    <div className="about-me-container">
      <h2>About Me</h2>
      <p>
        I am a software developer with a passion for creating impactful
        applications. My mission is to deliver high-quality solutions that
        solve real-world problems.
      </p>
      <div className="skills-section">
        <h3>Skills</h3>
        <p>Frontend: React, HTML, CSS, JavaScript</p>
        <p>Backend: Node.js, Express, MongoDB</p>
        <p>Tools: Git, Docker, VS Code</p>
      </div>
      <div className="education-section">
        <h3>Education</h3>
        <p>Bachelor's Degree in Computer Science - [Your University]</p>
        <h4>Certifications</h4>
        <p>Certified React Developer</p>
      </div>
    </div>
  );
}

export default AboutMe;
