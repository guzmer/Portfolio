import React from "react";
import "./Projects.css";
import pic1 from "../../assets/p1.png";
import pic2 from "../../assets/p2.png";
import pic3 from "../../assets/pic3pr.png"
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Projects
        </h2>
        <hr />
        <p className="pb-3 text-center">
          Here are two projects I've worked on. Want the details? Let’s chat and I’ll tell you all the behind-the-scenes!🚀<br></br>
          This section will be updated as soon as I finish my ongoing projects, so stay tuned for more cool stuff! 🔧
          </p>

        {/* card design */}
        <div className="row" id="ads">
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full stack</span>
                  <img
                    src={pic1}
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">NodeJs</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">
                      School Management System Project
                    </h5>
                    <p>
                    Developed a School Management System, within ENSI Junior Enterprise, for enrollment, scheduling, grades, and academic records.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">ML-Based Solution</span>
                  <img
                    src={pic2}
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React Native</span>
                  <span className="card-detail-badge">ANDROID</span>
                  <span className="card-detail-badge">QGIS</span>
                  <span className="card-detail-badge">STM32</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Automated Verbal Aggression Detection & Patrol Alert System</h5>
                    <p>
                    Developed a system to detect and analyze verbal aggression and implemented a signaling mechanism to 
                    notify patrols in real-time upon detection of aggressive behavior. 
                    </p>
                  </div>
                 
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Web Scraping</span>
                  <img
                    src={pic3}
                    alt="project3"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Python</span>
                  <span className="card-detail-badge">BeautifulSoup</span>
                  <span className="card-detail-badge">PowerBI</span>
                  <span className="card-detail-badge">Data Cleaning</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">
                      Web Scraping: Bank agencies data
                    </h5>
                    <p>
                    Developed an interactive dashboard to visualize geographic metrics of bank agencies on a map.
                    </p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Projects;