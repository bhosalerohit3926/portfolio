import React from "react";
import "./Styles/ResumeSection.css";

const ResumeSection = ({ ref }) => {
  return (
    <div ref={ref} className="resume-container">
      <h2 className="resume-title">Resume</h2>
      <p className="resume-summary">
        Passionate React Native Developer with 3 years of hands-on experience
        building high-performance web-applications and cross-platform mobile
        applications. Proven expertise in React Native, Reactjs , JavaScript,
        and native module integration, with a strong focus on performance
        optimization, intuitive UI/UX, and scalable architecture.
      </p>

      <h3 className="section-heading">Experience</h3>
      <div className="experience-grid">
        <div className="experience-card">
          <h4>
            <span>August 2022 – Present</span> React Native Developer
          </h4>
          <h5>ExcellencePort</h5>

          <ul>
            <li>
              Developed interactive cross platform mobile Applications using
              React Native technology.
            </li>
            <li>
              Forged strong stakeholder relationships by driving new
              initiatives, achieved project goals and annual renewals.
            </li>
            <li>
              Team Collaboration, Problem Solving, Effective Communication,
              Adaptability, Time Management, Attention to Detail,
              Accountability, Agile Mindset.
            </li>
          </ul>
        </div>
      </div>

      <h3 className="section-heading">Education</h3>
      <div className="education-grid">
        <div className="education-card">
          <h4>2015 – 2018</h4>
          <h5>Bachelor in Computer science</h5>
          <p>Bhonsala Military College, Nashik</p>
          <p>Savitribai Phule Pune University</p>
          <p>Grade: Second class.</p>
        </div>
        <div className="education-card">
          <h4>2018 – 2020</h4>
          <h5>Master's in Computer science</h5>
          <p>Bhonsala Military College, Nashik</p>
          <p>Savitribai Phule Pune University</p>
          <p>Grade: Higher second class.</p>
        </div>
      </div>

      {/* <div className="download-cv">
        <a href="#" className="download-btn">
          Download CV
        </a>
      </div> */}
    </div>
  );
};

export default ResumeSection;
