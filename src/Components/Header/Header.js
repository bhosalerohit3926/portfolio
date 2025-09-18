import React, { useState } from "react";
import "./Header.css";

const Header = ({
  scrollToSection,
  homeRef,
  aboutRef,
  resumeRef,
  projectsRef,
  contactRef,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="header">
      <h3 className="headingtxt">Rohit Bhosale</h3>
      <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
        {/* <button onClick={() => scrollToSection(homeRef)}>
          <h4 className="menutxt">Home</h4>
        </button> */}
        <button onClick={() => scrollToSection(aboutRef)} className="btnstyle">
          <h4 className="menutext">About</h4>
        </button>
        <button onClick={() => scrollToSection(resumeRef)}>
          <h4 className="menutext">Resume</h4>
        </button>
        <button onClick={() => scrollToSection(projectsRef)}>
          <h4 className="menutext">Projects</h4>
        </button>
        <button onClick={() => scrollToSection(contactRef)}>
          <h4 className="menutext">Contact</h4>
        </button>
      </nav>
    </div>
  );
};

export default Header;
