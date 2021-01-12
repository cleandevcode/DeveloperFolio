import React from "react";
import "./../index.css";
import uiImage from "./../images/web.jpg";
import webImage from "./../images/mobile.png";

const Services = () => {
  return (
    <section
      data-aos="zoom-in"
      className="services-container"
      name="services"
      id="services"
    >
      <h1 className="heading">Services I Provide</h1>
      <div className="services-wrapper">
        <div className="services">
          <li>
            <img src={uiImage} alt="" />
            <p>Web Development</p>
          </li>
        </div>
        <div className="services">
          <li>
            <img src={webImage} alt="" />
            <p>Mobile Development</p>
          </li>
        </div>
      </div>
    </section>
  );
};

export default Services;
