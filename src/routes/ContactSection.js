import React from "react";
import "./Styles/ContactSection.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPaperPlane,
  FaGlobe,
} from "react-icons/fa";
import resume from "../Assets/Rohit-Bhosale.pdf";

const ContactSection = ({ ref }) => {
  // const downloadFile = () => {
  //   const pdfUrl = "Sample.pdf";
  //   const link = document.createElement("a");
  //   link.href = pdfUrl;
  //   link.download = "Rohit-Bhosale.pdf";
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };

  return (
    <div ref={ref} className="contact-container">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-subtitle">
        Below are the details to reach out to me!
      </p>

      <div className="contact-grid">
        <div className="contact-box">
          <FaMapMarkerAlt className="contact-icon" />
          <h4>Address</h4>
          <p>Nashik, Maharashtra, India</p>
        </div>

        <div className="contact-box">
          <FaPhoneAlt className="contact-icon" />
          <h4>Contact Number</h4>
          <p>+91 7743951326</p>
        </div>

        <div className="contact-box">
          <FaPaperPlane className="contact-icon" />
          <h4>Email Address</h4>
          <p>bhosalerohit3926@gmail.com</p>
        </div>

        <div className="contact-box">
          <FaGlobe className="contact-icon" />
          <p>
            {/* <a
              href="/Assets/Rohit_Bhosale.pdf"
              target="_blank"
              download="Rohit_Bhosale.pdf"
            > */}
            <a href={resume} download={"Rohit_Bhosale.pdf"}>
              <button>
                <h4 style={{ color: "#ffc107" }}>Download Resume</h4>
              </button>
            </a>
            {/* Download resume */}
            {/* </a> */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
