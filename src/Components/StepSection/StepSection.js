// StepSection.js
import React from "react";
import "../../routes/Styles/ProjectDetail.css";

const StepSection = ({ text, imageSide = "left", renderBullets, image }) => {
  return (
    <>
      {text != null && (
        <section className="section">
          <div className="step_one_style">
            {/* Show Image First or Text First based on side */}
            {imageSide === "left" && (
              <div className="imageSection">
                <img src={image} alt="detailImages" className="image" />
              </div>
            )}

            <div className="child_div">
              <h4 className="textStyle">
                <ul>{renderBullets(text)}</ul>
              </h4>
            </div>

            {imageSide === "right" && (
              <div className="imageSection">
                <img src={image} alt="detailImages" className="image" />
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default StepSection;
