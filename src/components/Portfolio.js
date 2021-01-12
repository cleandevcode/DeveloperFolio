import React from "react";
import "./../index.css";
import { motion } from "framer-motion";

const boxVariants = {
  hover: {
    scale: 1.06,
    transition: {
      type: "spring"
    }
  }
};

const Portfolio = () => {
  return (
    <section
      data-aos="fade-up"
      className="portfolio-container"
      name="portfolio"
      id="portfolio"
    >
      <h1 className="heading">Projects I have Built</h1>
      <div className="projects-container">
        {/* Project 1 - Corona Tracker */}
        <motion.div
          className="projects"
          variants={boxVariants}
          whileHover="hover"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="http://dancassab.com/"
          >
            <div className="project-images" id="dancassab"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Dancassab - online shopping</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                href="http://dancassab.com/"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>
        {/* // */}

        {/* Project 2 - Shoe Store */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="http://carpe-diem.mx/"
          >
            <div className="project-images" id="carpediem"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Carpe Diem</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                href="http://carpe-diem.mx/"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>
        {/* // */}

        {/* Project 3 - Quiz App */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="http://minimeisreview.com/"
          >
            <div className="project-images" id="minimeis"></div>
          </a>
          <div className="project-links">
            <div className="text">
              <h3>Minimeis Review</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                href="http://minimeisreview.com/"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>
        {/* // */}

        {/* Project 4 - Explore matiari */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="http://biznessapps.com/"
          >
            <div className="project-images" id="bizness"></div>
          </a>
          <div className="project-links">
            <div className="text">
              <h3>Mobile App Maker</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                href="http://biznessapps.com/"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>
        {/* // */}

        {/* Project 5 - Expense Tracker */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="http://channelmum.com/"
          >
            <div className="project-images" id="channelmum"></div>
          </a>
          <div className="project-links">
            <div className="text">
              <h3>Channel Mum</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                href="http://channelmum.com/"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>
        {/* // */}

        {/* Project 6 - SpaceX Website */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://apps.apple.com/us/app/onrun/id1492566299"
          >
            <div className="project-images" id="onrun"></div>
          </a>
          <div className="project-links">
            <div className="text">
              <h3>OnRun</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                href="https://apps.apple.com/us/app/onrun/id1492566299"
                target="_blank"
              >
                {" "}
                <i
                  className="fab fa-app-store"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://apps.apple.com/us/app/wevedo/id1312389637"
          >
            <div className="project-images" id="wevedo"></div>
          </a>
          <div className="project-links">
            <div className="text">
              <h3>Wevedo</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                href="https://apps.apple.com/us/app/wevedo/id1312389637"
                target="_blank"
              >
                {" "}
                <i
                  className="fab fa-app-store"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>
        {/* // */}
      </div>
    </section>
  );
};

export default Portfolio;
