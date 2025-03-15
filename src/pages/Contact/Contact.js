import React from "react";
import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="thank-you-message">
        <h2>Thank You!</h2>
        <p>Let's collaborate and build something amazing together.</p>
      </div>
      
      <div className="contact-info">
        <p>Contact me at:</p>
        <div className="contact-details">
          <a href="mailto:meriem.saiied@gmail.com" className="contact-link">
            <FaEnvelope /> meriem.saiied@gmail.com
          </a> <br></br>
          <a href="tel:+21629990478" className="contact-link">
            <FaPhone /> +216 29 990 478
          </a>
        </div>
      </div>

      <div className="social-links">
        <a href="https://linkedin.com/in/meriem-saied-1145a9206" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Contact;
