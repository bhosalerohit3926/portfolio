import React from "react";
import "./Styles/HomeSection.css"; // Reuse the same styling
// import profilePic from "./assets/profile.jpg"; // Update with your path
import profileImage from "../Assets/Main_Image4.jpeg";

const HomeSection = ({ ref }) => {
  return (
    <section ref={ref} className="section">
      <div className="sectiondiv">
        {/* Left Side */}
        <div className="twosections">
          <div>
            <h3 className="hellotxt">Hello ! </h3>
            <p
              style={{
                fontStyle: "italic",
                fontSize: "15px",
                color: "#fff",
              }}
            >
              Welcome to my portfolio website!
            </p>
            <h2
              style={{
                color: "#ffc107",
                fontSize: "40px",
                fontFamily: "Liberti",
              }}
            >
              I'm Rohit Bhosale
            </h2>
            <h1
              style={{
                // fontStyle: "italic",
                color: "#cfeef0",
                fontWeight: "400",
                fontFamily: "Oswald",
              }}
            >
              React Native Developer
            </h1>
          </div>
        </div>

        {/* Right Side - Profile Image */}
        <div className="twosections">
          <div className="profile-wrapper">
            <div className="profile-circle">
              <img src={profileImage} alt="Profile" className="profile-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
