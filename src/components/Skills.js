import React, { useState } from 'react';
import './Skills.css';

function Skills() {
  const [activeTab, setActiveTab] = useState('languages.js');

  const fileStructure = {
    'languages.js': {
      icon: '🟨',
      content: [
        { line: 1, code: '// Primary programming languages', type: 'comment' },
        { line: 2, code: 'const primaryLanguages = {', type: 'keyword' },
        { line: 3, code: '  java: {', type: 'normal' },
        { line: 4, code: '    experience: "4+ years",', type: 'string' },
        { line: 5, code: '    level: "expert",', type: 'string' },
        { line: 6, code: '    use: "System-level applications"', type: 'string' },
        { line: 7, code: '  },', type: 'normal' },
        { line: 8, code: '  python: {', type: 'normal' },
        { line: 9, code: '    experience: "4+ years",', type: 'string' },
        { line: 10, code: '    level: "expert",', type: 'string' },
        { line: 11, code: '    use: "AI & data processing"', type: 'string' },
        { line: 12, code: '  },', type: 'normal' },
        { line: 13, code: '  javascript: {', type: 'normal' },
        { line: 14, code: '    experience: "3+ years",', type: 'string' },
        { line: 15, code: '    level: "advanced",', type: 'string' },
        { line: 16, code: '    use: "Web development"', type: 'string' },
        { line: 17, code: '  }', type: 'normal' },
        { line: 18, code: '};', type: 'keyword' },
      ]
    },
    'frameworks.tsx': {
      icon: '🟦',
      content: [
        { line: 1, code: '// Web development frameworks & libraries', type: 'comment' },
        { line: 2, code: 'interface Framework {', type: 'keyword' },
        { line: 3, code: '  name: string;', type: 'type' },
        { line: 4, code: '  category: "frontend" | "backend";', type: 'type' },
        { line: 5, code: '  experience: string;', type: 'type' },
        { line: 6, code: '}', type: 'keyword' },
        { line: 7, code: '', type: 'normal' },
        { line: 8, code: 'const frameworks: Framework[] = [', type: 'keyword' },
        { line: 9, code: '  // Frontend Technologies', type: 'comment' },
        { line: 10, code: '  { name: "React", category: "frontend"},', type: 'normal' },
        { line: 11, code: '  { name: "Next.js", category: "frontend"},', type: 'normal' },
        { line: 12, code: '  { name: "HTML5 Canvas", category: "frontend"},', type: 'normal' },
        { line: 13, code: '  { name: "Electron", category: "frontend"},', type: 'normal' },
        { line: 14, code: '', type: 'normal' },
        { line: 15, code: '  // Backend Technologies', type: 'comment' },
        { line: 16, code: '  { name: "Node.js", category: "backend"},', type: 'normal' },
        { line: 17, code: '  { name: "Express.js", category: "backend"},', type: 'normal' },
        { line: 18, code: '  { name: "Flask", category: "backend"},', type: 'normal' },
        { line: 19, code: '  { name: "FastAPI", category: "backend"},', type: 'normal' },
        { line: 20, code: '  { name: "Spring Boot", category: "backend"}', type: 'normal' },
        { line: 21, code: '];', type: 'keyword' },
      ]
    },
    'ai-tools.py': {
      icon: '🟩',
      content: [
        { line: 1, code: '# AI & Machine Learning Technologies', type: 'comment' },
        { line: 2, code: 'class AIExpertise:', type: 'keyword' },
        { line: 3, code: '    """Specialized AI and ML capabilities"""', type: 'string' },
        { line: 4, code: '    ', type: 'normal' },
        { line: 5, code: '    def __init__(self):', type: 'function' },
        { line: 6, code: '        self.nlp_skills = [', type: 'normal' },
        { line: 7, code: '            "Natural Language Processing",', type: 'string' },
        { line: 8, code: '            "Sentiment Analysis",', type: 'string' },
        { line: 9, code: '            "Linguistic Style Matching",', type: 'string' },
        { line: 10, code: '            "VADER Sentiment Analysis"', type: 'string' },
        { line: 11, code: '        ]', type: 'normal' },
        { line: 12, code: '        ', type: 'normal' },
        { line: 13, code: '        self.ai_apis = {', type: 'normal' },
        { line: 14, code: '            "OpenAI": ["GPT-3.5", "GPT-4"],', type: 'string' },
        { line: 15, code: '            "experience": "1+ years",', type: 'string' },
        { line: 16, code: '            "projects": "SentiMetrics, LSM Bot, Steadfast"', type: 'string' },
        { line: 17, code: '        }', type: 'normal' },
        { line: 18, code: '        ', type: 'normal' },
        { line: 19, code: '        self.ml_frameworks_I_am_just_learning   = [', type: 'normal' },
        { line: 20, code: '            "TensorFlow", "scikit-learn",', type: 'string' },
        { line: 21, code: '            "NLTK", "Pandas", "NumPy"', type: 'string' },
        { line: 22, code: '        ]', type: 'normal' },
      ]
    },
    'systems.sh': {
      icon: '⚫',
      content: [
        { line: 1, code: '#!/bin/bash', type: 'comment' },
        { line: 2, code: '# System administration and tools expertise', type: 'comment' },
        { line: 3, code: '', type: 'normal' },
        { line: 4, code: '# Database technologies', type: 'comment' },
        { line: 5, code: 'DATABASES=("MongoDB" "SQLite" "MySQL" "PostgreSQL")', type: 'keyword' },
        { line: 6, code: '', type: 'normal' },
        { line: 7, code: '# System administration (8+ years)', type: 'comment' },
        { line: 8, code: 'SYSTEM_SKILLS=(', type: 'keyword' },
        { line: 9, code: '    "Linux Administration"', type: 'string' },
        { line: 10, code: '    "Hardware Configuration"', type: 'string' },
        { line: 11, code: '    "Performance Tuning"', type: 'string' },
        { line: 12, code: '    "System Optimization"', type: 'string' },
        { line: 13, code: ')', type: 'keyword' },
        { line: 14, code: '', type: 'normal' },
        { line: 15, code: '# Development tools', type: 'comment' },
        { line: 16, code: 'echo "Git & GitHub: Expert level"', type: 'function' },
        { line: 17, code: 'echo "NetBeans IDE: Primary Java environment"', type: 'function' },
        { line: 18, code: 'echo "JWT Authentication: Advanced implementation"', type: 'function' },
        { line: 19, code: 'echo "API Integration: Multiple platforms"', type: 'function' },
      ]
    },
    'practices.md': {
      icon: '📝',
      content: [
        { line: 1, code: '# Development Practices & Methodologies', type: 'comment' },
        { line: 2, code: '', type: 'normal' },
        { line: 3, code: '## Project Management', type: 'comment' },
        { line: 4, code: '- **PARA Method**: Organized workflow and knowledge management', type: 'normal' },
        { line: 5, code: '- **Task Organization**: Efficient project structuring', type: 'normal' },
        { line: 6, code: '', type: 'normal' },
        { line: 7, code: '## Agile Development', type: 'comment' },
        { line: 8, code: '- **Scrum Methodology**: Team-based iterative development', type: 'normal' },
        { line: 9, code: '- **Collaborative Environments**: Cross-functional teamwork', type: 'normal' },
        { line: 10, code: '', type: 'normal' },
        { line: 11, code: '## Code Quality', type: 'comment' },
        { line: 12, code: '- **Clean Code**: Maintainable, readable implementations', type: 'normal' },
        { line: 13, code: '- **SOLID Principles**: Object-oriented design patterns', type: 'normal' },
        { line: 14, code: '- **Design Patterns**: MVC, Factory, Observer patterns', type: 'normal' },
        { line: 15, code: '', type: 'normal' },
        { line: 16, code: '## Version Control', type: 'comment' },
        { line: 17, code: '- **Git Workflows**: Branching strategies and collaboration', type: 'normal' },
        { line: 18, code: '- **Documentation**: Comprehensive project documentation', type: 'normal' },
      ]
    }
  };

  const tabs = Object.keys(fileStructure);

  return (
    <div className="skills-container">
      <div className="ide-container">
        {/* IDE Title Bar */}
        <div className="ide-title-bar">
          <div className="title-bar-left">
            <span className="app-title">André's Tech Stack - Visual Studio Code</span>
          </div>
          <div className="title-bar-center">
            <span className="file-path">~/skills - André Pont De Anda</span>
          </div>
          <div className="title-bar-right">
            <div className="window-controls">
              <span className="control-btn minimize">−</span>
              <span className="control-btn maximize">□</span>
              <span className="control-btn close">×</span>
            </div>
          </div>
        </div>

        {/* File Tabs */}
        <div className="file-tabs">
          {tabs.map((filename) => (
            <div
              key={filename}
              className={`file-tab ${activeTab === filename ? 'active' : ''}`}
              onClick={() => setActiveTab(filename)}
            >
              <span className="file-icon">{fileStructure[filename].icon}</span>
              <span className="file-name">{filename}</span>
              {activeTab === filename && <span className="tab-close">×</span>}
            </div>
          ))}
        </div>

        {/* Code Editor */}
        <div className="code-editor">
          <div className="editor-content">
            {fileStructure[activeTab].content.map((line) => (
              <div key={line.line} className="code-line">
                <span className="line-number">{line.line}</span>
                <span className={`code-text ${line.type}`}>{line.code}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Terminal Panel */}
        <div className="terminal-panel">
          <div className="terminal-header">
            <span className="terminal-title">TERMINAL</span>
            <div className="terminal-tabs">
              <span className="terminal-tab active">bash</span>
              <span className="terminal-tab">+</span>
            </div>
          </div>
          <div className="terminal-content">
            <div className="terminal-line">
              <span className="terminal-prompt">andre@dev:~/skills$</span>
              <span className="terminal-command">grep -r "experience" .</span>
            </div>
            <div className="terminal-output">
              <div>./languages.js: Java (4 years), Python (4 years), javascript (2 years)</div>
              <div>./frameworks.tsx: MERN Stack (2 years), SpringBoot (-1 year)</div>
              <div>./systems.sh: Linux Administration (1+ years)</div>
            </div>
            <div className="terminal-line">
              <span className="terminal-prompt">andre@dev:~/skills$</span>
              <span className="terminal-cursor">|</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
