import React, { useRef } from "react";
import Header from "../../Components/Header/Header";
import "./Home.css";
import HomeSection from "../../routes/HomeSection";
import AboutSection from "../../routes/AboutSection";
import ResumeSection from "../../routes/ResumeSection";
import ProjectsSection from "../../routes/ProjectsSection";
import ContactSection from "../../routes/ContactSection";

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
    <div className="container">
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
