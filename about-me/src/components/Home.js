import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="profile-section">
        <img
          src={require('../images/sixdayspic.jpg')}
          alt="Profile"
          className="profile-image"
        />
        <div className="text-content">
          <h1>Hello! I'm André Pont</h1>
          <p>
            I am a computing student with a passion for backend development and a keen interest in exploring the world of AI. As a developer, I can easily adapt to any tech stack and am always eager to learn new technologies. I have a strong foundation in programming languages such as Java, Python, and JavaScript, and I am proficient in using frameworks like Express.js for API development and TensorFlow for AI.
          </p>
          <p>If you would like to know more about me, feel free to explore the following sections:</p>
          <ul>
            <li><a href="#about-me">🙍🏻‍♂️ About Me</a></li>
            <li><a href="#resume">📄 Resume</a></li>
            <li><a href="#now">⏳ Now</a></li>
            <li><a href="#what-i-use">🛠️ What I Use</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
