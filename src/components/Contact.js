import React from "react";
import "./../index.css";

const Contact = () => {
  return (
    <section
      data-aos="zoom-in"
      className="contact-container"
      name="contact"
      id="contact"
    >
      <div className="profile-image"></div>
      <h1 className="heading">Contact</h1>

      <div className="cards-container">
        {/* Card 1 - Email */}
        <div className="cards">
          <div className="contact-icons">
            <i className="fas fa-envelope"></i>
          </div>
          <div className="contact-text">
            <span>Email</span>
          </div>
          <div className="contact-links">
            <span>blueskyremi@outlook.com</span>
          </div>
        </div>

        {/* Card 2 - Social Media */}
        <div className="cards">
          <div className="contact-icons">
            <i className="fas fa-globe"></i>
          </div>
          <div className="contact-text">
            <span>Social Media</span>
          </div>
          <div className="contact-links">
            {/* github */}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/cleandevcode"
            >
              <i className="fab fa-github" title="github" id="github"></i>
            </a>

            {/* angelist */}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://angel.co/u/cleancodedev"
            >
              <i className="fab fa-angellist" title="angel" id="angel"></i>
            </a>

            {/* linkedIn */}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/cheng-he-3ba8021b1/"
            >
              <i className="fab fa-linkedin" title="linkedin" id="linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
