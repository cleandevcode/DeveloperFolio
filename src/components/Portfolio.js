import React from "react";
import "./../index.css";
import { motion } from "framer-motion";

const boxVariants = {
  hover: {
    scale: 1.06,
    transition: {
      type: "spring",
    },
  },
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
        {/* Project 0 - Shoclef */}
        <motion.div
          className="projects"
          variants={boxVariants}
          whileHover="hover"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.shoclef.com/"
          >
            <div className="project-images" id="shoclef"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Shoclef</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                href="https://www.shoclef.com/"
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
              <h3>Dancassab</h3>
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

        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.autotrader.ca/brandcampaign/ford/accessories/2021/en/home/index.html"
          >
            <div className="project-images" id="autotrader"></div>
          </a>
          <div className="project-links">
            <div className="text">
              <h3>AutoTrader.ca</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                href="https://www.autotrader.ca/brandcampaign/ford/accessories/2021/en/home/index.html"
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

        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://appsandprojects.com/telus-pdf-tool/"
          >
            <div className="project-images" id="telus"></div>
          </a>
          <div className="project-links">
            <div className="text">
              <h3>Telus PDF Generator</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                href="https://appsandprojects.com/telus-pdf-tool/"
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

        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://gojirx-dev1.gojitech.systems/"
          >
            <div className="project-images" id="gojirx"></div>
          </a>
          <div className="project-links">
            <div className="text">
              <h3>GojiRx Admin System</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                href="https://gojirx-dev1.gojitech.systems/"
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
            href={`https://play.google.com/store/apps/details?id=com.klnkfnd.app&hl=en_US&gl=US`}
          >
            <div className="project-images" id="klnkfnd"></div>
          </a>
          <div className="project-links">
            <div className="text">
              <h3>Klnkfnd</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                href={`https://play.google.com/store/apps/details?id=com.klnkfnd.app&hl=en_US&gl=US`}
                target="_blank"
              >
                {" "}
                <i
                  className="fab fa-google-play"
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
