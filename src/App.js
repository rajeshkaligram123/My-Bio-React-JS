import "./App.css";
import entrepreneurImage from "./images/Hero.png";
import logo from "./images/logo2.png";
import insta from "./images/insta.png";
import linkdin from "./images/linkedin.png"; // Corrected the filename
import git from "./images/git.png";
import about from "./images/aboutMe.png";

function App() {
  return (
    <div className="App">
      <nav className="App-nav">
        <div className="nav-container">
          <h3 className="nav-item">About me</h3>
          <h3 className="nav-item">Skills</h3>
          <h3 className="nav-item">Portfolio</h3>
          <h3 className="nav-item contact">CONTACT ME</h3>
        </div>
      </nav>
      <div className="image_dashboard">
        <div className="image-overlay">
          <img src={logo} alt="logo" className="logo-image" />
          <h2 className="name_text">HI, I am</h2>
          <h1 className="name_text1">RAJESH ROY</h1>
          <p className="name_text2">Front-end Developer / React-Native</p>
        </div>
        <div className="image-overlay2">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={insta} alt="Instagram" className="insta" />
          </a>
          <a
            href="https://www.linkedin.com/in/rajesh-r-588219119/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkdin} alt="LinkedIn" className="linkdin" />
          </a>
          <a
            href="https://github.com/Rajeshkaligram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={git} alt="GitHub" className="git" />
          </a>
        </div>

        <img src={entrepreneurImage} alt="background_img" />
      </div>
      <div className="second_container">
        <img src={about} className="about_logo" />
      </div>
    </div>
  );
}

export default App;
