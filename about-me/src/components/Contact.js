import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h2>Get In Touch</h2>
        <p className="contact-subtitle">
          Let's build something amazing together
        </p>
      </div>

      <div className="contact-grid">
        {/* Terminal-style Contact Card */}
        <div className="contact-card terminal-card">
          <div className="terminal-header">
            <div className="terminal-controls">
              <span className="control-dot red"></span>
              <span className="control-dot yellow"></span>
              <span className="control-dot green"></span>
            </div>
            <span className="terminal-title">contact.sh</span>
          </div>
          <div className="terminal-body">
            <div className="terminal-line">
              <span className="prompt">$</span>
              <span className="command">whoami</span>
            </div>
            <div className="terminal-output">André Pont de Anda</div>
            <div className="terminal-line">
              <span className="prompt">$</span>
              <span className="command">echo $ROLE</span>
            </div>
            <div className="terminal-output">Software Engineer & CS Student</div>
            <div className="terminal-line">
              <span className="prompt">$</span>
              <span className="command">cat contact.info</span>
            </div>
            <div className="terminal-output">
              Ready to collaborate
            </div>
          </div>
        </div>

        {/* Contact Methods Grid */}
        <div className="contact-methods">
          <div className="method-card email-card" onClick={() => window.open('mailto:andrepontde@gmail.com', '_blank')}>
            <div className="method-icon">
              <span>📧</span>
            </div>
            <div className="method-content">
              <h3>Email</h3>
              <p>andrepontde@gmail.com</p>
              <span className="method-action">Send Message →</span>
            </div>
            <div className="card-hover-effect"></div>
          </div>

          <div className="method-card linkedin-card" onClick={() => window.open('https://www.linkedin.com/in/andre-pont-de-anda/', '_blank')}>
            <div className="method-icon">
              <span>💼</span>
            </div>
            <div className="method-content">
              <h3>LinkedIn</h3>
              
              <span className="method-action">Connect →</span>
            </div>
            <div className="card-hover-effect"></div>
          </div>

          <div className="method-card github-card" onClick={() => window.open('https://github.com/andrepontde', '_blank')}>
            <div className="method-icon">
              <span>⚡</span>
            </div>
            <div className="method-content">
              <h3>GitHub</h3>
              
              <span className="method-action">View Code →</span>
            </div>
            <div className="card-hover-effect"></div>
          </div>

          <div className="method-card resume-card">
            <div className="method-icon">
              <span>📄</span>
            </div>
            <div className="method-content">
              <h3>Resume</h3>
              
              <a href="/path-to-your-resume.pdf" download className="method-action">Download →</a>
            </div>
            <div className="card-hover-effect"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
