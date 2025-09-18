import React, { useMemo, useState } from "react";
import "./Styles/ProjectDetail.css";
import { useLocation } from "react-router-dom";
import { projectDetails } from "../common/projectsData";
import "./Styles/ProjectDetail.css";
import StepSection from "../Components/StepSection/StepSection";

const ProjectDetail = (props) => {
  const location = useLocation();
  // const receivedData = location.state || {};
  const receivedData = useMemo(() => location.state || {}, [location.state]);
  const [projectData, setProjectData] = useState([]);
  const [parsedData, setParsedData] = useState();

  useMemo(() => {
    window.scrollTo(0, 0);
    let data = JSON.parse(receivedData);
    setParsedData(data);
    if (Object.keys(data).length > 0) {
      let projectData = projectDetails.filter((x) => x.id === data.id);
      setProjectData(projectData);
    }
  }, [receivedData]);

  const renderBullets = (text) => {
    if (text == null) return;
    return text
      .split(".")
      .map((sentence) => sentence.trim())
      .filter(Boolean)
      .map((sentence, index) => <li key={index}>{sentence}.</li>);
  };

  return (
    <div className="container">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <h1 style={{ color: "white", fontStyle: "italic" }}>
          {parsedData?.title}
        </h1>
      </div>
      {projectData.map((project) => (
        <>
          <StepSection
            text={project.Step_One}
            imageSide="right"
            renderBullets={renderBullets}
            image={project.Step_One_Image}
          />
          <StepSection
            text={project.Step_two}
            imageSide="left"
            renderBullets={renderBullets}
            image={project.Step_Two_Image}
          />
          <StepSection
            text={project.Step_Three}
            imageSide="right"
            renderBullets={renderBullets}
            image={project.Step_Three_Image}
          />
          <StepSection
            text={project.Step_Four}
            imageSide="left"
            renderBullets={renderBullets}
            image={project.Step_Four_Image}
          />
          <StepSection
            text={project.Step_Five}
            imageSide="right"
            renderBullets={renderBullets}
            image={project.Step_Five_Image}
          />
          <StepSection
            text={project.Step_Six}
            imageSide="left"
            renderBullets={renderBullets}
            image={project.Step_Six_Image}
          />
          <StepSection
            text={project.Step_Seven}
            imageSide="right"
            renderBullets={renderBullets}
            image={project.Step_Seven_Image}
          />
          <StepSection
            text={project.Step_Eight}
            imageSide="left"
            renderBullets={renderBullets}
            image={project.Step_Eight_Image}
          />
        </>
      ))}
    </div>
  );
};

export default ProjectDetail;
