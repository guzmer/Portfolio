import React from 'react';
import Typewriter from 'typewriter-effect';
import './Home.css';
import Resume from "../../assets/docs/Resume.pdf";
import Fade from "react-reveal/Fade";

const Home = () => {
  return (
    <>
    <div className='container-fluid home-container' id="home">
        <div className='container'>
        <Fade right>
            <h2>Welcome to Meriem's Portfolio</h2>
            <h1>
                <Typewriter
                    options={{
                        strings: ["Software Engineer", "Fullstack Developer", "MERN Stack Developer", "Backend Engineer"],
                        autoStart: true,
                        loop:true,
                    }}
                    />
            </h1>
            </Fade>
            <Fade bottom>
            <div className="home-buttons">
              <a
                className="btn btn-resume"
                href={Resume} download="Resume_Meriem_Saied.pdf"
              >
                Resume
              </a>
            </div>
          </Fade>
        </div>
    </div>
    </>
  )
}

export default Home