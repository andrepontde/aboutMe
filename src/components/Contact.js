import './Contact.css';
import { trackPortfolioEvent } from '../utils/analytics';

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h2>Get In Touch</h2>
        <p className="contact-subtitle">
          Professional networking and collaboration
        </p>
      </div>

      <div className="contact-grid">
        {/* Git Bash Terminal */}
        <div className="terminal-card">
          <div className="terminal-header">
            <span className="terminal-title">Git Bash</span>
            <div className="window-controls">
              <span className="control-btn minimize">−</span>
              <span className="control-btn maximize">□</span>
              <span className="control-btn close">×</span>
            </div>
          </div>
          <div className="terminal-body">
            <div className="terminal-line">
              <span className="prompt">andre@DESKTOP-DEV MINGW64 ~/social-network</span>
            </div>
            <div className="terminal-line">
              <span className="command-line">$ git status</span>
            </div>
            <div className="terminal-output">On branch main</div>
            <div className="terminal-output">Your branch is up to date with 'origin/main'.</div>
            <div className="terminal-output">
              <br />
              Changes not staged for commit:
              <br />
              &nbsp;&nbsp;modified: &nbsp;&nbsp;&nbsp;social_life.txt
              <br />
              &nbsp;&nbsp;deleted: &nbsp;&nbsp;&nbsp;&nbsp;free_time.md
              {/* <br /> */}
              {/* &nbsp;&nbsp;added: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.java */}
            </div>
            <div className="terminal-line">
              <span className="command-line">$ cat README.md</span>
            </div>
            <div className="terminal-output">
              # André's Page
              <br />
              Status: Currently accepting collaboration requests
              <br />
              Bug reports: Not welcome
            </div>
            <div className="terminal-line">
              <span className="prompt">andre@DESKTOP-DEV MINGW64 ~/social-network</span>
              <span className="cursor">|</span>
            </div>
          </div>
        </div>

        {/* Contact Methods Grid */}
        <div className="contact-methods">
          <div className="method-card email-card" onClick={() => {
            trackPortfolioEvent.contactForm('email');
            window.open('mailto:andrepontde@gmail.com', '_blank');
          }}>
            <div className="method-icon">📧</div>
            <div className="method-content">
              <h3>Email</h3>
              <p>andrepontde@gmail.com</p>
              <span className="method-action">Send Message</span>
            </div>
          </div>

          <div className="method-card linkedin-card" onClick={() => {
            trackPortfolioEvent.externalLink('LinkedIn Profile');
            window.open('https://www.linkedin.com/in/andre-pont-de-anda/', '_blank');
          }}>
            <div className="method-icon">💼</div>
            <div className="method-content">
              <h3>LinkedIn</h3>
              <p>Professional Network</p>
              <span className="method-action">Connect</span>
            </div>
          </div>

          <div className="method-card github-card" onClick={() => {
            trackPortfolioEvent.externalLink('GitHub Profile');
            window.open('https://github.com/andrepontde', '_blank');
          }}>
            <div className="method-icon">⚡</div>
            <div className="method-content">
              <h3>GitHub</h3>
              <p>Code Repository</p>
              <span className="method-action">View Code</span>
            </div>
          </div>

          <div className="method-card steam-card" onClick={() => {
            trackPortfolioEvent.externalLink('Steam Profile');
            window.open('https://steamcommunity.com/id/your-steam-id/', '_blank');
          }}>
            <div className="method-icon">🎮</div>
            <div className="method-content">
              <h3>Steam</h3>
              <p>Gaming Profile</p>
              <span className="method-action">Add Friend</span>
            </div>
          </div>

          <div className="method-card hackerrank-card" onClick={() => {
            trackPortfolioEvent.externalLink('HackerRank Profile');
            window.open('https://www.hackerrank.com/your-profile', '_blank');
          }}>
            <div className="method-icon">🏆</div>
            <div className="method-content">
              <h3>HackerRank</h3>
              <p>Coding Challenges</p>
              <span className="method-action">View Profile</span>
            </div>
          </div>

          <div className="method-card resume-card">
            <div className="method-icon">📄</div>
            <div className="method-content">
              <h3>Resume</h3>
              <p>CV Document</p>
              <a 
                href="/AndrePont_CV.pdf"
                download 
                className="method-action"
                onClick={() => trackPortfolioEvent.resumeDownload()}
              >
                Download
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
