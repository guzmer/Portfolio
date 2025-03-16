import React from 'react';
import Typewriter from 'typewriter-effect';
import './Home.css';
import Resume from "../../assets/docs/Resume.pdf";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <div className='container-fluid home-container' id="home">
        <div className='container'>
          {/* Fade animation for the text */}
          <motion.h2
            initial={{ opacity: 0, x: -50 }}  // Starts from left with zero opacity
            animate={{ opacity: 1, x: 0 }}     // Moves to normal position with full opacity
            transition={{ duration: 1, ease: "easeOut" }}  // Duration and easing for smoothness
          >
          Welcome to Meriem's Portfolio
          </motion.h2>
          
          <motion.h1
            initial={{ opacity: 0, x: -50 }}  // Starts from left with zero opacity
            animate={{ opacity: 1, x: 0 }}     // Moves to normal position with full opacity
            transition={{ duration: 1.5, ease: "easeOut" }} // Smooth animation with a bit longer duration
          >
            <Typewriter
              options={{
                strings: ["Software Engineer", "Fullstack Developer", "MERN Stack Developer", "Backend Engineer"],
                autoStart: true,
                loop: true,
              }}
            />
          </motion.h1>

          {/* Fade animation for the buttons */}
          <motion.div
            className="home-buttons"
            initial={{ opacity: 0, y: 50 }}  // Starts from below with zero opacity
            animate={{ opacity: 1, y: 0 }}    // Moves to normal position with full opacity
            transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
          >
            <a
              className="btn btn-resume"
              href={Resume}
              download="Resume_Meriem_Saied.pdf"
            >
              Resume
            </a>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;