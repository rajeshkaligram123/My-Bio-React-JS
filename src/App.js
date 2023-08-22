import "./App.css";
import React, { useEffect, useState } from "react";
import entrepreneurImage from "./images/Hero.png";
import logo from "./images/logo2.png";
import insta from "./images/insta.png";
import linkdin from "./images/linkedin.png"; // Corrected the filename
import git from "./images/git.png";
import aboutMe from "./images/aboutMe.png";
import explore from "./images/explore.png";
import logo3 from "./images/logo3.png";
import skill from "./images/skill.png";
import html from "./images/html.png";
import css from "./images/css.png";
import react from "./images/react.png";
import javascript from "./images/javascript.png";
import boostrap from "./images/bootstrap.png";
import git2 from "./images/git2.png";
import figma from "./images/figma.png";
import node from "./images/node.png";
import mysql from "./images/mysql.png";
import flutter from "./images/Flutter.png";
import typescript from "./images/typescript.png";
import backimg from "./images/backimg.png";
import portfolio from "./images/portfolio.png";
import hilltop from "./images/hilltop.png";
import kidekinder from "./images/kidkinder.png";
import app1 from "./images/app1st.jpg";
import app2 from "./images/app2nd.jpg";
import app3 from "./images/app3rd.jpg";
import contact from "./images/contact.png";

function App() {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (event) => {
    const clickedButtonId = event.target.id;
    setActiveButton(clickedButtonId);
  };

  useEffect(() => {
    setActiveButton("allButton");
  }, []);
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
      <div
        style={{ backgroundImage: `url(${entrepreneurImage})` }}
        className="image_dashboard"
      >
        <img src={logo} alt="logo" className="logo_image" />
        <div className="first_container">
          <h2 className="name_text">HI, I am</h2>
          <h1 className="typewriter">RAAJESH ROY</h1>
          <p className="name_text2">Front-end Developer / React-Native</p>
        </div>
        <div className="second_container">
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
      </div>
      <div className="third_container">
        <img src={aboutMe} alt="about-logo" />
        <p className="about_me">
          Hello! I'm Rajesh Roy, a passionate React Native and React JS
          developer based in Kolkata. With a keen eye for detail and a love for
          creating seamless user experiences, I bring digital ideas to life
          through clean and efficient code.
        </p>
        <img src={explore} alt="explore" />
        <br />
        <img src={logo3} alt="logo3" className="logo3" />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div>
            <h2>DESIGN</h2>
            <p className="design_text">
              {" "}
              As a React Native developer based in Kolkata, I specialize in
              crafting engaging and user-centric mobile applications. With an
              acute understanding of UI/UX principles, I blend creativity and
              functionality to design intuitive interfaces that resonate with
              users. My designs are driven by a deep appreciation for aesthetic
              appeal, ensuring a seamless and visually pleasing experience for
              every app user.
            </p>
          </div>
          <div>
            <h2>DEVELOPMENT</h2>
            <p className="design_text">
              {" "}
              In the heart of my work lies the development of robust React
              Native applications. Leveraging my expertise in React Native and
              React JS, I transform ideas into functional code. I believe in
              clean coding practices, modular architecture, and performance
              optimization, resulting in apps that are not only feature-rich but
              also efficient and responsive across various devices. Through a
              meticulous development process, I bring concepts to life with a
              strong focus on reliability and scalability.
            </p>
          </div>
        </div>
        <div>
          <h2>MAINTENANCE</h2>
          <p className="maintenace_text">
            {" "}
            Beyond the launch, I'm committed to the ongoing success of the apps
            I create. I provide consistent maintenance and updates to ensure
            that applications remain compatible with evolving technologies and
            platforms. Regular monitoring, bug fixes, and feature enhancements
            are part of my maintenance strategy, guaranteeing a seamless
            experience for users while accommodating changing user needs and
            industry trends. My dedication to post-launch support reflects my
            commitment to delivering solutions that stand the test of time.
          </p>
        </div>
      </div>
      <img src={logo3} alt="logo3" className="logo3" />
      <br />
      <img src={skill} alt="skill" className="skill" />

      <div>
        <h2 className="use_txt"> USING NOW :</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            paddingTop: "4rem",
            paddingLeft: "2.5rem",
          }}
        >
          <div style={{ paddingRight: "5rem" }}>
            <img src={html} alt="html" className="html" />
            <h3 className="logo_text">HTML5</h3>
          </div>
          <div style={{ paddingRight: "5rem" }}>
            <img src={css} alt="css" className="css" />
            <h3 className="logo_text">CSS3</h3>
          </div>
          <div style={{ paddingRight: "5rem" }}>
            <img src={react} alt="react" className="react" />
            <h3 className="logo_text">REACT-NATIVE</h3>
          </div>
          <div>
            <img src={javascript} alt="javascript" className="javascript" />
            <h3 className="logo_text">JAVASCRIPT</h3>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            paddingTop: "5rem",
          }}
        >
          <div style={{ paddingRight: "5rem" }}>
            <img src={react} alt="react" className="react" />
            <h3 className="logo_text">REACT-JS</h3>
          </div>
          <div style={{ paddingRight: "5rem" }}>
            <img src={boostrap} alt="boostrap" className="boostrap" />
            <h3 className="logo_text">BOOTSTRAP</h3>
          </div>
          <div style={{ paddingRight: "5rem" }}>
            <img src={git2} alt="git2" className="git2" />
            <h3 className="logo_text">GIT</h3>
          </div>
          <div>
            <img src={figma} alt="figma" className="figma" />
            <h3 className="logo_text">FIGMA</h3>
          </div>
        </div>
        <h2 className="use_txt"> LEARNING :</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            paddingTop: "5rem",
            paddingLeft: "2.5rem",
          }}
        >
          <div style={{ paddingRight: "5rem" }}>
            <img src={node} alt="node" className="node" />
            <h3 className="logo_text">NODEJS</h3>
          </div>
          <div style={{ paddingRight: "5rem" }}>
            <img src={mysql} alt="mysql" className="mysql" />
            <h3 className="logo_text">MySQL</h3>
          </div>
          <div style={{ paddingRight: "5rem" }}>
            <img src={flutter} alt="flutter" className="flutter" />
            <h3 className="logo_text">FLUTTER</h3>
          </div>
          <div>
            <img src={typescript} alt="typescript" className="typescript" />
            <h3 className="logo_text">TYPESCRIPT</h3>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${backimg})` }}
        className="backimage_dashboard"
      >
        <img src={portfolio} alt="portfolio" />
      </div>
      <div className="black_div">
        <h2
          id="allButton"
          className={`black_div_text ${
            activeButton === "allButton" ? "active-button" : ""
          }`}
          onClick={handleButtonClick}
        >
          ALL
        </h2>
        <h2
          id="appsButton"
          className={`black_div_text ${
            activeButton === "appsButton" ? "active-button" : ""
          }`}
          onClick={handleButtonClick}
        >
          APPS
        </h2>
        <h2
          id="websiteButton"
          className={`black_div_text ${
            activeButton === "websiteButton" ? "active-button" : ""
          }`}
          onClick={handleButtonClick}
        >
          WEBSITE
        </h2>
      </div>
      {activeButton === "allButton" && (
        <div className="all_div">
          <img src={hilltop} alt="hilltop" className="web_app_img1" />
          <img src={kidekinder} alt="kidekinder" className="web_app_img1" />
          <img src={app1} alt="app1" className="web_app_img" />
          <img src={app2} alt="app2" className="web_app_img" />
        </div>
      )}
      {activeButton === "appsButton" && (
        <div className="all_div">
          <img src={app1} alt="app1" className="app_img" />
          <img src={app2} alt="app2" className="app_img" />
          <img src={app3} alt="app3" className="app_img" />
        </div>
      )}
      {activeButton === "websiteButton" && (
        <div className="all_div">
          <img src={hilltop} alt="hilltop" className="web_img" />
          <img src={kidekinder} alt="kidekinder" className="web_img" />
        </div>
      )}
      <div style={{ paddingTop: "10rem" }}>
        <img src={contact} alt="contact" />
      </div>
    </div>
  );
}

export default App;
