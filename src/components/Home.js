import React, { useState, useEffect } from "react";
import "./../index.css";
import man from "./../images/man.svg";
import { motion, AnimatePresence } from "framer-motion";
import { animateScroll as scroll } from "react-scroll";

const contentVariants = {
  initial: {
    translateY: "100vh",
    opacity: 0,
  },

  animate: {
    translateY: "0vh",
    opacity: 1,
    transition: {
      duration: 2,
      when: "beforeChildren",
      // staggerChildren: 0.4,
    },
  },
};

const childrenVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },

  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      type: "spring",
      delay: 0.5,
    },
  },

  exit: {
    opacity: 0,
    y: -200,
    transition: { duration: 0.2 },
  },
};

const Home = () => {
  // State
  const [showHeadingOne, setShowHeadingOne] = useState(true);
  const [showHeadingTwo, setShowHeadingTwo] = useState(false);
  const [showHeadingThree, setShowHeadingThree] = useState(false);

  // Timeout
  useEffect(() => {
    setTimeout(() => {
      if (showHeadingOne) {
        setShowHeadingOne(false);
        setShowHeadingTwo(true);
        setShowHeadingThree(false);
      } else if (showHeadingTwo) {
        setShowHeadingOne(false);
        setShowHeadingTwo(false);
        setShowHeadingThree(true);
      } else {
        setShowHeadingOne(true);
        setShowHeadingTwo(false);
        setShowHeadingThree(false);
      }
    }, 3000);
  }, [showHeadingOne, showHeadingTwo, showHeadingThree]);

  return (
    <section className="home-container" id="home" name="home">
      <motion.div
        className="content-container"
        variants={contentVariants}
        initial="initial"
        animate="animate"
      >
        <h4 className="welcome-content">WELCOME TO MY WORLD</h4>
        <br />
        <h1 className="main-content">
          Hi, I’m Cheng
          <motion.span
            drag={true}
            dragConstraints={{ left: 0, top: 0, bottom: 0, right: 0 }}
            className="hand"
            animate={{ rotate: [0, 20, 0, 20, 0, 0, 0, 0, 0, 0] }}
            transition={{ yoyo: Infinity, duration: 1.7 }}
          >
            <span role="img" aria-label="Hand waving">
              👋
            </span>
          </motion.span>{" "}
        </h1>
        {/* Animate Skill Content */}

        <div className="skill-animation">
          <AnimatePresence>
            {showHeadingOne && (
              <motion.h2
                className="skill-content"
                variants={childrenVariants}
                exit="exit"
                animate="animate"
                initial="initial"
              >
                Web UI/UX Developer | React | Angular Developer
              </motion.h2>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {showHeadingTwo && (
              <motion.h2
                className="skill-content"
                variants={childrenVariants}
                exit="exit"
                animate="animate"
                initial="initial"
              >
                Mobile App Developer | React Native | Ionic | Flutter
              </motion.h2>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {showHeadingThree && (
              <motion.h2
                className="skill-content"
                variants={childrenVariants}
                exit="exit"
                animate="animate"
                initial="initial"
              >
                Blockchain | Smart Contracts | Web 3.0
              </motion.h2>
            )}
          </AnimatePresence>
        </div>
        {/* // */}
        <div className="button-wrapper">
          <button
            className="button contact-btn"
            onClick={() => scroll.scrollToBottom()}
          >
            Contact Me
          </button>
          <a
            href="https://drive.google.com/file/d/1VZRhQNTsedhodcb2uOGuhRBCbsZ4kSvC/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button">Resume</button>
          </a>
        </div>
      </motion.div>

      <motion.div
        className="svg-container"
        animate={{ translateY: [-20, 0, -20, 0] }}
        transition={{ yoyo: Infinity, duration: 6 }}
      >
        <img className="svg" src={man} alt="" />
      </motion.div>
    </section>
  );
};

export default Home;
