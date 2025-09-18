import React from "react";
import "./Styles/AboutSection.css";

const skills = [
  { name: "React Native", value: 95 },
  { name: "Reactjs", value: 85 },
  { name: "JavaScript", value: 80 },
  { name: "Nodejs", value: 60 },
  { name: "Nextjs", value: 60 },
  { name: "HTML", value: 70 },
  { name: "CSS", value: 80 },
];

const AboutSection = ({ ref }) => {
  return (
    <div ref={ref} className="about-container">
      <div className="left-panel">
        {/* <img
          src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg"
          alt="Profile"
          className="profile-image"
        /> */}
        <div className="basic-info">
          <p>
            <strong>Name:</strong> Rohit Bhosale
          </p>
          <p>
            <strong>Job Role:</strong> React Native Developer
          </p>
          <p>
            <strong>Experience:</strong> 3 Years
          </p>
          <p>
            <strong>Address:</strong> Nashik, Maharashtra, India
          </p>
        </div>
        <div className="skills-section">
          <h3>Skills</h3>
          {skills.map((skill, index) => (
            <div key={index} className="skill-bar">
              <p>
                {skill.name} {skill.value}%
              </p>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${skill.value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="right-panel">
        <h2>About Me</h2>
        <p className="description">
          With over 3 years of comprehensive experience in the field of React
          Native and Reactjs, accompanied by a master's in computer science.
          Proficient in Mobile application development and web development.
        </p>
        <div className="details">
          <p>
            <strong>Profile:</strong> React Native Developer
          </p>

          <p>
            <strong>Education:</strong> Master's in computer science
          </p>
          <p>
            <strong>Language:</strong> English, Hindi and Marathi
          </p>
          <p>
            <strong>Other Skills:</strong> Reactjs, Nodejs, HTML, CSS,
            Bootstrap, JavaScript and Nextjs
          </p>
          <p>
            <strong>Interest:</strong> Traveling, Playing Cricket, Enhanced New
            Skills.
          </p>
        </div>
        <p className="projects-count">
          <strong>30+</strong> Projects completed
        </p>
        <a
          href="https://www.linkedin.com/in/rohit-bhosale-345176244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="linkdin"
          className="linkedin-btn"
        >
          LINKEDIN
        </a>
      </div>
    </div>
  );
};

export default AboutSection;
