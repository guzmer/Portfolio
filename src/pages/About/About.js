import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";

const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="about-content">
            <h1>Hi there 👋</h1>
            <p>
            I'm <b>Meriem Saied</b>, a passionate Software Engineer who loves turning ideas into reality. 💡💻 <br></br>
            From sleek UIs 🎨 to powerful backends 🔧, I’m all about creating impact.✨  <br></br>
            Passionate about tech, always learning, and ready for new challenges. <br></br> Let’s make something awesome! 🚀🤝 <br></br>
            <div className="note">Oh, and by the way, this site will keep evolving because I’m constantly learning and cooking up new projects! 🌱🔧</div>
            </p>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
