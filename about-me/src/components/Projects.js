import React, { useState } from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Personal Portfolio Website",
      description: "A modern, responsive portfolio website built with React featuring Conway's Game of Life background animation. Showcases professional experience, projects, and skills with smooth navigation and interactive elements.",
      longDescription: "This project demonstrates advanced React concepts including hooks, routing, and canvas animations. The Game of Life implementation runs efficiently at 60fps with optimized rendering and responsive design considerations.",
      technologies: ["React", "JavaScript", "HTML5 Canvas", "CSS3", "React Router"],
      category: "Frontend Development",
      status: "Live",
      featured: true,
      githubUrl: "https://github.com/andrepontde/aboutMe",
      liveUrl: "#", // Add your deployed URL here
      imageUrl: null, // Add screenshot path when available
      challenges: [
        "Implementing smooth Conway's Game of Life animation",
        "Ensuring responsive design across all devices",
        "Optimizing canvas performance for mobile browsers"
      ],
      learnings: [
        "Advanced Canvas API manipulation",
        "React performance optimization",
        "Modern CSS Grid and Flexbox layouts"
      ],
      dateCompleted: "2025-01",
      duration: "2 weeks"
    },
    {
      id: 2,
      title: "AI-Powered Backend API",
      description: "RESTful API built with Express.js integrating TensorFlow for machine learning predictions. Features authentication, data validation, and comprehensive error handling.",
      longDescription: "A scalable backend solution demonstrating proficiency in Node.js ecosystem, machine learning integration, and API design best practices.",
      technologies: ["Node.js", "Express.js", "TensorFlow.js", "MongoDB", "JWT", "Docker"],
      category: "Backend Development",
      status: "In Development",
      featured: true,
      githubUrl: "https://github.com/yourusername/ai-backend-api",
      liveUrl: null,
      imageUrl: null,
      challenges: [
        "Integrating TensorFlow with Node.js efficiently",
        "Implementing secure authentication system",
        "Optimizing API response times"
      ],
      learnings: [
        "Machine learning model deployment",
        "API security best practices",
        "Database optimization techniques"
      ],
      dateCompleted: "2025-01",
      duration: "3 weeks"
    },
    {
      id: 3,
      title: "Java Desktop Application",
      description: "Cross-platform desktop application built with Java Swing for data management and visualization. Features include file I/O, data processing, and interactive charts.",
      longDescription: "Demonstrates object-oriented programming principles, design patterns, and GUI development skills in Java.",
      technologies: ["Java", "Swing", "SQLite", "JUnit", "Maven"],
      category: "Desktop Development",
      status: "Completed",
      featured: false,
      githubUrl: "https://github.com/yourusername/java-desktop-app",
      liveUrl: null,
      imageUrl: null,
      challenges: [
        "Creating responsive UI with Swing",
        "Efficient data handling and persistence",
        "Cross-platform compatibility"
      ],
      learnings: [
        "Advanced Java GUI programming",
        "Database integration patterns",
        "Software testing methodologies"
      ],
      dateCompleted: "2024-12",
      duration: "4 weeks"
    },
    {
      id: 4,
      title: "Python Data Analysis Tool",
      description: "Python-based tool for processing and analyzing large datasets with pandas and numpy. Includes data visualization with matplotlib and statistical analysis features.",
      longDescription: "Showcases data science skills and Python proficiency for handling real-world data processing challenges.",
      technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter"],
      category: "Data Science",
      status: "Completed",
      featured: false,
      githubUrl: "https://github.com/yourusername/python-data-tool",
      liveUrl: null,
      imageUrl: null,
      challenges: [
        "Processing large datasets efficiently",
        "Creating meaningful visualizations",
        "Implementing statistical algorithms"
      ],
      learnings: [
        "Advanced pandas operations",
        "Data visualization best practices",
        "Statistical analysis techniques"
      ],
      dateCompleted: "2024-11",
      duration: "2 weeks"
    }
  ];

  const categories = [...new Set(projects.map(p => p.category))];
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedProject, setExpandedProject] = useState(null);

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const featuredProjects = projects.filter(p => p.featured);

  return (
    <div className="projects-container">
      <div className="projects-header">
        <h2>My Projects</h2>
        <p className="projects-subtitle">
          A collection of projects showcasing my technical skills and problem-solving abilities
        </p>
      </div>

      {/* Featured Projects */}
      <section className="featured-section">
        <h3>Featured Projects</h3>
        <div className="featured-grid">
          {featuredProjects.map(project => (
            <div key={project.id} className="featured-project-card">
              <div className="project-header">
                <h4>{project.title}</h4>
                <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
                  {project.status}
                </span>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="tech-stack">
                {project.technologies.slice(0, 4).map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="tech-tag more">+{project.technologies.length - 4} more</span>
                )}
              </div>
              <div className="project-links">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link github">
                    <span>GitHub</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link live">
                    <span>Live Demo</span>
                  </a>
                )}
                <button 
                  className="project-link details"
                  onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                >
                  {expandedProject === project.id ? 'Less Details' : 'More Details'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Category Filter */}
      <section className="all-projects-section">
        <div className="filter-section">
          <h3>All Projects</h3>
          <div className="category-filters">
            <button 
              className={selectedCategory === 'All' ? 'active' : ''}
              onClick={() => setSelectedCategory('All')}
            >
              All ({projects.length})
            </button>
            {categories.map(category => (
              <button 
                key={category}
                className={selectedCategory === category ? 'active' : ''}
                onClick={() => setSelectedCategory(category)}
              >
                {category} ({projects.filter(p => p.category === category).length})
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-main">
                <div className="project-header">
                  <h4>{project.title}</h4>
                  <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
                    {project.status}
                  </span>
                </div>
                <p className="project-description">{project.description}</p>
                
                <div className="project-meta">
                  <span className="category-tag">{project.category}</span>
                  <span className="date">{project.dateCompleted}</span>
                  <span className="duration">{project.duration}</span>
                </div>

                <div className="tech-stack">
                  {project.technologies.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link github">
                      GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link live">
                      Live Demo
                    </a>
                  )}
                  <button 
                    className="project-link details"
                    onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                  >
                    {expandedProject === project.id ? 'Less' : 'More'}
                  </button>
                </div>
              </div>

              {/* Expanded Details */}
              {expandedProject === project.id && (
                <div className="project-details">
                  <div className="detail-section">
                    <h5>Project Overview</h5>
                    <p>{project.longDescription}</p>
                  </div>
                  
                  <div className="detail-section">
                    <h5>Key Challenges</h5>
                    <ul>
                      {project.challenges.map((challenge, index) => (
                        <li key={index}>{challenge}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="detail-section">
                    <h5>What I Learned</h5>
                    <ul>
                      {project.learnings.map((learning, index) => (
                        <li key={index}>{learning}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h3>Interested in My Work?</h3>
        <p>I'm always open to discussing new opportunities and collaborations.</p>
        <a href="#contact" className="cta-button">Get In Touch</a>
      </section>
    </div>
  );
}

export default Projects;
