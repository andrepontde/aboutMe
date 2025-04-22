import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <button className="contact-button" onClick={() => window.open('mailto:andrepontde@gmail.com', '_blank')}>
        <span>Email</span>
      </button>
      <button className="contact-button" onClick={() => window.open('https://www.linkedin.com/in/andre-pont-de-anda/', '_blank')}>
        <span>LinkedIn</span>
      </button>
      <button className="contact-button" onClick={() => window.open('https://github.com/andrepontde', '_blank')}>
        <span>GitHub</span>
      </button>
    </div>
  );
}

export default Contact;
