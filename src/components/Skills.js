import React from "react";
import "./../index.css";
import reactnative from "./../images/reactnative.png";
import ionic from "./../images/ionic.png";
import flutter from "./../images/flutter.png";

const Skills = () => {
  return (
    <section
      data-aos="fade-right"
      className="skills-container"
      name="skills"
      id="skills"
    >
      <h1 className="heading">What I Am Good At &nbsp;&nbsp;?</h1>

      <div className="techs">
        <div className="d-flex">
          <li>
            <i className="fab html fa-html5"></i> <p>HTML5</p>
          </li>
          <li>
            <i className="fab css fa-css3"></i>
            <p>CSS3</p>
          </li>
          <li>
            <i className="fab sass fa-sass"></i>
            <p>Sass</p>
          </li>
          <li>
            <i className="fab bootstrap fa-bootstrap"></i>
            <p>Bootstrap</p>
          </li>
          <li>
            <i className="fab javascript fa-js"></i>
            <p>Javascript</p>
          </li>
          <li>
            <i className="fab typescript fa-react"></i>
            <p>Typescript</p>
          </li>
        </div>
        <div className="d-flex">
          <li>
            <i className="fab react fa-react"></i>
            <p>React</p>
          </li>
          <li>
            <i className="fab angular fa-angular"></i>
            <p>Angular</p>
          </li>
          <li>
            <i className="fab vuejs fa-vuejs"></i>
            <p>Vue</p>
          </li>
          <li>
            <i className="fab node-js fa-node-js"></i>
            <p>Node.js</p>
          </li>
        </div>
        <div className="d-flex" style={{ marginTop: 20 }}>
          <li>
            <img src={reactnative} className="techImage" alt="" />
            <p>React Native</p>
          </li>
          <li>
            <img src={ionic} className="techImage" alt="" />
            <p>Ionic</p>
          </li>
          <li>
            <img src={flutter} className="techImage" alt="" />
            <p>Fultter</p>
          </li>
        </div>
      </div>
    </section>
  );
};

export default Skills;
