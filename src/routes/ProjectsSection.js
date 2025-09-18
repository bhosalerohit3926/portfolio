import React from "react";
import "./Styles/ProjectsSection.css";

// Replace these imports with actual images in your /src/assets folder or public folder
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { projects } from "../common/projectsData";

const ProjectsSection = ({ ref }) => {
  const navigate = useNavigate();

  const navigateToDetailScreen = (item) => {
    navigate("/projectDetail", { state: JSON.stringify(item) });
  };

  return (
    <div ref={ref} className="projects-container">
      <h2 className="projects-title">Projects</h2>
      <p className="projects-subtitle">
        Below are some mobile application projects developed using React Native,
        showcasing expertise in cross-platform development, UI design, and
        performance optimization.
      </p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="title_div">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>
            <div className="project_link_div">
              {project.App_Store_Link != null && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    // margin: "20px",
                  }}
                >
                  <a
                    className="project-link-btn"
                    target="appStoreLink"
                    href={project.App_Store_Link}
                  >
                    {project.App_Store_icon}
                  </a>
                  <a
                    className="project-link-btn"
                    target="playStoreLink"
                    href={project.PlayStore_Link}
                  >
                    {project.PlayStore_icon}
                  </a>
                </div>
              )}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                margin: 10,
              }}
            >
              <Button
                variant="outlined"
                style={{
                  color: "#ffc201",
                  borderColor: "#ffc201",
                }}
                onClick={() => navigateToDetailScreen(project)}
                size="small"
              >
                View Details
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
