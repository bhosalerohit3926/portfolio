import React, { useState } from "react";
import "./Styles/New.css";

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
    <header className="header">
      <h1 className="name">Rohit Bhosale</h1>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={menuOpen ? "bar rotate1" : "bar"}></div>
        <div className={menuOpen ? "bar fade" : "bar"}></div>
        <div className={menuOpen ? "bar rotate2" : "bar"}></div>
      </div>

      {/* Navigation Menu */}
      <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
        <button onClick={() => scrollToSection(homeRef)}>
          <h4 className="menutxt">Home</h4>
        </button>
        <button onClick={() => scrollToSection(aboutRef)}>
          <h4 className="menutxt">About</h4>
        </button>
        <button onClick={() => scrollToSection(resumeRef)}>
          <h4 className="menutxt">Resume</h4>
        </button>
        <button onClick={() => scrollToSection(projectsRef)}>
          <h4 className="menutxt">Projects</h4>
        </button>
        <button onClick={() => scrollToSection(contactRef)}>
          <h4 className="menutxt">Contact</h4>
        </button>
      </nav>
    </header>
  );
};

export default Header;
