import React, { useState, useRef } from 'react';
import './Projects.css';

function Projects() {
  const scrollRef = useRef(null);
  
  const scrollProjectsLeft = () => {
    const container = scrollRef.current;
    if (container) {
      const cardWidth = container.querySelector('.project-card')?.offsetWidth || 0;
      const gap = 20;
      container.scrollBy({
        left: -(cardWidth + gap), // Scroll by 1 card width to shift view
        behavior: 'smooth'
      });
    }
  };

  const scrollProjectsRight = () => {
    const container = scrollRef.current;
    if (container) {
      const cardWidth = container.querySelector('.project-card')?.offsetWidth || 0;
      const gap = 20;
      container.scrollBy({
        left: cardWidth + gap, // Scroll by 1 card width to shift view
        behavior: 'smooth'
      });
    }
  };

  const projects = [
    {
      id: 1,
      title: "Personal Portfolio Website",
      description: "A modern, responsive portfolio website built with React featuring Conway's Game of Life background animation. Showcases professional experience, projects, and skills with smooth navigation and interactive elements.",
      longDescription: "This project demonstrates advanced React concepts including hooks, routing, and canvas animations. The Game of Life implementation runs efficiently at 60fps with optimized rendering and responsive design considerations.",
      technologies: ["React", "JavaScript", "HTML5 Canvas", "CSS3"],
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
      title: "SentiMetrics - AI Sentiment Analysis Platform",
      description: "Hackathon-winning social media sentiment analysis platform built for HackIreland. Uses AI to analyze public sentiment across Twitter and Bluesky for stock trading insights and event analysis.",
      longDescription: "A comprehensive platform that aggregates social media data and provides AI-powered sentiment analysis with actionable recommendations. Built during HackIreland hackathon, featuring real-time data processing and conversational AI interface.",
      technologies: ["Next.js", "TypeScript", "Flask", "Python", "OpenAI GPT-3.5", "VADER Sentiment", "Twitter API", "Bluesky API"],
      category: "Full Stack Development",
      status: "Completed",
      featured: true,
      githubUrl: "https://github.com/andrepontde/Language-Style-Auto-Matching",
      liveUrl: null,
      imageUrl: null,
      challenges: [
        "Integrating multiple social media APIs in real-time",
        "Implementing advanced sentiment analysis algorithms",
        "Building conversational AI interface with OpenAI"
      ],
      learnings: [
        "Multi-platform API integration",
        "AI/ML model implementation",
        "Real-time data processing"
      ],
      dateCompleted: "2024-11",
      duration: "2 days (Hackathon)"
    },
    {
      id: 3,
      title: "HouseHub - House Management Platform",
      description: "Comprehensive full-stack house management application addressing Ireland's housing crisis. Features real-time chat, task management, bill splitting, and multi-user authentication for shared accommodations.",
      longDescription: "Enterprise-level platform designed for shared housing management with JWT authentication, Socket.IO real-time communication, and comprehensive organizational tools. Includes role-based access control for landlords and tenants.",
      technologies: ["Node.js", "React", "MongoDB", "Socket.IO", "JWT", "Express.js", "Irish Eircode API"],
      category: "Full Stack Development",
      status: "Completed",
      featured: true,
      githubUrl: "https://github.com/yourusername/househub",
      liveUrl: null,
      imageUrl: null,
      challenges: [
        "Implementing real-time chat with Socket.IO",
        "Building complex multi-user authentication system",
        "Managing state across multiple house environments"
      ],
      learnings: [
        "Real-time application architecture",
        "Role-based access control implementation",
        "Complex state management in React"
      ],
      dateCompleted: "2024-12",
      duration: "6 weeks"
    },
    {
      id: 4,
      title: "Blood Test Scheduler - Data Structures Implementation",
      description: "Java desktop application demonstrating comprehensive implementation of data structures and algorithms. Features patient management with priority queuing, recursive algorithms, and GUI interface using Java Swing.",
      longDescription: "Educational project showcasing custom implementations of linked lists, priority queues, and stacks. Includes medical priority system, file serialization, and recursive programming techniques for healthcare appointment scheduling.",
      technologies: ["Java SE 8+", "Java Swing", "NetBeans", "Object Serialization", "Custom Data Structures"],
      category: "Desktop Development",
      status: "Completed",
      featured: false,
      githubUrl: "https://github.com/yourusername/blood-scheduler",
      liveUrl: null,
      imageUrl: null,
      challenges: [
        "Implementing custom data structures from scratch",
        "Building efficient priority-based scheduling algorithm",
        "Creating intuitive GUI with Java Swing"
      ],
      learnings: [
        "Advanced data structures implementation",
        "Algorithm design and optimization",
        "Desktop application development with Java"
      ],
      dateCompleted: "2024-10",
      duration: "4 weeks"
    },
    {
      id: 5,
      title: "CS50 AI - Harvard Artificial Intelligence Course",
      description: "Complete implementation of Harvard's CS50 Introduction to Artificial Intelligence course. Comprehensive 6-week journey covering search algorithms, knowledge systems, machine learning, neural networks, and NLP through 10+ hands-on projects.",
      longDescription: "Intensive AI program covering the full spectrum of artificial intelligence techniques. Implemented search algorithms (BFS, DFS, A*), adversarial AI with minimax, knowledge-based systems with propositional logic, probabilistic models, reinforcement learning, CNNs for computer vision, and NLP with attention mechanisms. Each week featured practical projects applying theoretical concepts to real-world problems.",
      technologies: ["Python", "TensorFlow", "Keras", "scikit-learn", "NumPy", "Pandas", "OpenCV", "NLTK", "Pygame"],
      category: "Artificial Intelligence",
      status: "Completed",
      featured: false,
      githubUrl: "https://github.com/yourusername/cs50-ai",
      liveUrl: null,
      imageUrl: null,
      challenges: [
        "Implementing minimax with alpha-beta pruning for optimal game AI",
        "Building Bayesian networks for genetic trait inheritance calculation",
        "Creating CNNs for traffic sign classification with high accuracy",
        "Developing reinforcement learning agents using Q-learning",
        "Implementing attention mechanisms for sequence-to-sequence NLP models",
        "Solving complex constraint satisfaction problems for crossword generation"
      ],
      learnings: [
        "Advanced search algorithms: BFS, DFS, A* with heuristics",
        "Adversarial AI: Minimax algorithm with alpha-beta pruning",
        "Knowledge representation: Propositional logic and automated reasoning",
        "Probabilistic AI: Bayesian networks, Markov models, PageRank algorithm",
        "Machine learning: Supervised learning, decision trees, model evaluation",
        "Reinforcement learning: Q-learning, policy optimization",
        "Deep learning: CNNs, image classification, computer vision",
        "Natural language processing: Context-free grammars, attention mechanisms",
        "Optimization: Local search, constraint satisfaction, backtracking"
      ],
      dateCompleted: "2024-09",
      duration: "8 weeks"
    },
    {
      id: 6,
      title: "Language Style Matching (LSM) Auto Matcher Bot",
      description: "Advanced NLP tool that analyzes linguistic style and generates responses matching Language Style Matching characteristics. Developed in collaboration with Master in Applied Psychology researcher.",
      longDescription: "Sophisticated three-stage processing system combining text analysis, OpenAI integration, and style matching to create psychologically-informed responses that mirror specific linguistic patterns for better communication rapport.",
      technologies: ["Python", "OpenAI GPT-3.5/GPT-4", "Natural Language Processing", "NLTK", "Psychological Analysis"],
      category: "Data Science",
      status: "Completed",
      featured: false,
      githubUrl: "https://github.com/yourusername/lsm-matcher",
      liveUrl: null,
      imageUrl: null,
      challenges: [
        "Implementing complex linguistic pattern analysis",
        "Integrating psychological research with AI",
        "Maintaining semantic meaning while matching style"
      ],
      learnings: [
        "Advanced natural language processing",
        "Psychology-informed AI development",
        "Multi-stage text processing pipelines"
      ],
      dateCompleted: "2024-08",
      duration: "3 weeks"
    },
    {
      id: 7,
      title: "OOP SDG - Renewable Energy Education Platform",
      description: "Collaborative Java application addressing UN Sustainable Development Goal 7. Features interactive renewable energy game, comprehensive knowledge quiz, and carbon footprint calculator with educational dashboard.",
      longDescription: "Team-developed educational platform demonstrating advanced OOP principles, design patterns (MVC, Factory, Observer), and clean code architecture. Combines environmental education with gamified learning experiences.",
      technologies: ["Java SE 11+", "Java Swing", "NetBeans", "Design Patterns", "SOLID Principles"],
      category: "Desktop Development",
      status: "Completed",
      featured: false,
      githubUrl: "https://github.com/yourusername/oop-sdg",
      liveUrl: null,
      imageUrl: null,
      challenges: [
        "Implementing multiple design patterns effectively",
        "Collaborative development with team coordination",
        "Creating engaging educational game mechanics"
      ],
      learnings: [
        "Advanced object-oriented programming",
        "Design pattern implementation",
        "Team-based software development"
      ],
      dateCompleted: "2024-05",
      duration: "8 weeks"
    },
    {
      id: 8,
      title: "Steadfast - AI Productivity Assistant",
      description: "Work-in-progress AI-powered desktop assistant that dynamically adapts digital environments based on user behavior and context. Combines behavioral monitoring, journaling analysis, and AI automation to enhance productivity.",
      longDescription: "Multi-component productivity system featuring a C# system agent for behavioral monitoring, Python FastAPI AI engine with GPT integration, Electron-based journaling app, and comprehensive dashboard. Uses machine learning to understand user intentions, reward focus, and reduce distractions in real-time.",
      technologies: ["C#", ".NET 6+", "Python", "FastAPI", "Electron", "React", "GPT API", "SQLite", "NLP", "TailwindCSS"],
      category: "Full Stack Development",
      status: "In Development",
      featured: false,
      githubUrl: "https://github.com/yourusername/steadfast",
      liveUrl: null,
      imageUrl: null,
      challenges: [
        "Building cross-platform system-level monitoring with C#",
        "Integrating multiple technologies (C#, Python, Electron) seamlessly",
        "Developing AI context awareness from user behavior patterns",
        "Creating intelligent app blocking and reward systems",
        "Implementing real-time behavioral analysis and scoring"
      ],
      learnings: [
        "Advanced system-level programming with C#",
        "Multi-service architecture design and communication",
        "AI-driven behavioral analysis and pattern recognition",
        "Desktop application development with Electron",
        "Real-time data processing and automation systems"
      ],
      dateCompleted: "In Progress",
      duration: "Ongoing"
    }
  ];

  const categories = ['Featured', ...new Set(projects.map(p => p.category))];
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [modalProject, setModalProject] = useState(null);

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : selectedCategory === 'Featured'
    ? projects.filter(p => p.featured)
    : projects.filter(p => p.category === selectedCategory);

  const openModal = (project) => {
    setModalProject(project);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setModalProject(null);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  return (
    <div className="projects-container">
      <div className="projects-header">
        <h2>My Projects</h2>
        <p className="projects-subtitle">
          A collection of projects showcasing my technical skills and problem-solving abilities
        </p>
      </div>

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
                {category} ({category === 'Featured' 
                  ? projects.filter(p => p.featured).length 
                  : projects.filter(p => p.category === category).length
                })
              </button>
            ))}
          </div>
        </div>

        {/* Projects Container with Side Navigation */}
        <div className="projects-container-wrapper">
          <button className="projects-nav-button projects-nav-left" onClick={scrollProjectsLeft} aria-label="Previous projects">
            <span className="nav-icon">{'<'}</span>
            <span className="nav-label">prev()</span>
          </button>

          {/* Projects Grid */}
          <div className="projects-grid" ref={scrollRef}>
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
                    onClick={() => openModal(project)}
                  >
                    More
                  </button>
                </div>
              </div>
            </div>
          ))}
          </div>

          <button className="projects-nav-button projects-nav-right" onClick={scrollProjectsRight} aria-label="Next projects">
            <span className="nav-icon">{'>'}</span>
            <span className="nav-label">next()</span>
          </button>
        </div>
      </section>

      {/* Project Modal */}
      {modalProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title-section">
                <h2>{modalProject.title}</h2>
                <span className={`status-badge ${modalProject.status.toLowerCase().replace(' ', '-')}`}>
                  {modalProject.status}
                </span>
              </div>
              <button className="modal-close" onClick={closeModal}>×</button>
            </div>
            
            <div className="modal-body">
              <div className="modal-section">
                <h3>Project Overview</h3>
                <p>{modalProject.longDescription}</p>
              </div>

              <div className="modal-section">
                <h3>Technologies Used</h3>
                <div className="modal-tech-stack">
                  {modalProject.technologies.map(tech => (
                    <span key={tech} className="modal-tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="modal-section">
                <h3>Key Challenges</h3>
                <ul className="modal-list">
                  {modalProject.challenges.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-section">
                <h3>What I Learned</h3>
                <ul className="modal-list">
                  {modalProject.learnings.map((learning, index) => (
                    <li key={index}>{learning}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-section">
                <h3>Project Details</h3>
                <div className="modal-meta">
                  <div className="modal-meta-item">
                    <strong>Category:</strong> {modalProject.category}
                  </div>
                  <div className="modal-meta-item">
                    <strong>Completed:</strong> {modalProject.dateCompleted}
                  </div>
                  <div className="modal-meta-item">
                    <strong>Duration:</strong> {modalProject.duration}
                  </div>
                </div>
              </div>

              <div className="modal-actions">
                {modalProject.githubUrl && (
                  <a href={modalProject.githubUrl} target="_blank" rel="noopener noreferrer" className="modal-link github">
                    View on GitHub
                  </a>
                )}
                {modalProject.liveUrl && (
                  <a href={modalProject.liveUrl} target="_blank" rel="noopener noreferrer" className="modal-link live">
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
