import React, { useRef } from "react";
import "./Styles/New.css";
import AboutSection from "./AboutSection";
import ResumeSection from "./ResumeSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";
import HomeSection from "./HomeSection";
import Header from "./Header";

const Home = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const resumeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <Header
        scrollToSection={scrollToSection}
        homeRef={homeRef}
        aboutRef={aboutRef}
        resumeRef={resumeRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />

      <HomeSection ref={homeRef} />
      <AboutSection ref={aboutRef} />

      <ResumeSection ref={resumeRef} />

      <ProjectsSection ref={projectsRef} />
      <ContactSection ref={contactRef} />
    </div>
  );
};

export default Home;
