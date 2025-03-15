import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./workExp.css";
import knowlepsy from "../../assets/knowlepsy.jpeg";
import cognira from "../../assets/cognira.jpeg";
import biat from "../../assets/biat.jpg";

const WorkExp = () => {
  return (
    <>
      <div className="work" id="work">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="Nov. 2024 - present"
              dateClassName="white-date"
              iconStyle={{
                background: "#1e1e2c", // circle background color
                color: "#fff", // text color if needed
                width: "50px", // circle size
                height: "50px", // circle size
                borderRadius: "50%", // makes the icon a circle
                display: "flex", // allows image to align properly
                justifyContent: "center", // centers the image horizontally
                alignItems: "center", // centers the image vertically
              }}
              icon={<img src={knowlepsy} alt="Knowlepsy" style={{ width: "40px", height: "40px", borderRadius: "50%" }} />}
            >
              <h3 className="vertical-timeline-element-title">
                Software Engineer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Knowlepsy, France.
              </h4>
              <h6>
              Specialized in collecting real-world data through connected devices, offering continuous health insights for doctors, clinicians, and users to improve patient outcomes.
              </h6>
              <ul>
    <li>Designing and developing scalable backend and frontend services</li>
    <li>Testing, deploying, and maintaining RESTful APIs for mobile and web applications</li>
    <li>Optimizing database performance for efficiency and scalability</li>
    <li>Enhancing and refining algorithms for better performance</li>
</ul>

              <b>
              Keywords: System Design, Javascript, NodeJs, Express, React, MSSQL, Docker, Azure, Agile
              </b>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="Jun. 2023 - Jun. 2024"
              dateClassName="white-date"
              iconStyle={{
                background: "#1e1e2c", // circle background color
                color: "#fff", // text color if needed
                width: "50px", // circle size
                height: "50px", // circle size
                borderRadius: "50%", // makes the icon a circle
                display: "flex", // allows image to align properly
                justifyContent: "center", // centers the image horizontally
                alignItems: "center", // centers the image vertically
              }}
              icon={<img src={cognira} alt="Cognira" style={{ width: "40px", height: "40px", borderRadius: "50%" }} />}
            >
              <h3 className="vertical-timeline-element-title">
                Software Engineer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Cognira, Tunisia
              </h4>
              <h6>
              Specialized in providing advanced AI-driven decision support solutions for retailers, enabling smarter promotional strategies and optimized business decisions. 
              </h6>
              
              <ul>
    <li>Designed and developed scalable RESTful APIs following microservices architecture</li>
    <li>Identified and resolved performance bottlenecks in backend services</li>
    <li>Collaborated with cross-functional teams to implement and integrate new features</li>
</ul>

               <b>
               Keywords: RESTful APIs, Scala, Spring Boot, Cassandra, Docker, Kubernetes, Jenkins, Bitbucket, SCRUM, microservices architecture
               </b>
              
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="Feb. 2023 - Jun. 2023"
              dateClassName="white-date"
              iconStyle={{
                background: "#1e1e2c", // circle background color
                color: "#fff", // text color if needed
                width: "50px", // circle size
                height: "50px", // circle size
                borderRadius: "50%", // makes the icon a circle
                display: "flex", // allows image to align properly
                justifyContent: "center", // centers the image horizontally
                alignItems: "center", // centers the image vertically
              }}
              icon={<img src={cognira} alt="Cognira" style={{ width: "40px", height: "40px", borderRadius: "50%" }} />}
            >
              <h3 className="vertical-timeline-element-title">
                Software Engineer Intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Cognira, Tunisia
              </h4>
              <h6>
                <p>
              <b>Problem: </b> Implementing a search algorithm into the company’s calculation engine. <br></br>
              
              <b>Solution: </b>Designed and implemented a search algorithm to enhance the functionality of the company’s existing calculation engine,
              improving the efficiency and accuracy of data retrieval, ensuring compatibility and minimal disruption
              to ongoing operations. <br></br>
 
               <b>
               Keywords: Bound Tree, Scala, Cassandra, Docker, Jenkins, Unit Testing.
               </b>
              </p>
              </h6>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="Jun. 2022 - Aug. 2022"
              dateClassName="white-date"
              iconStyle={{
                background: "#1e1e2c", // circle background color
                color: "#fff", // text color if needed
                width: "50px", // circle size
                height: "50px", // circle size
                borderRadius: "50%", // makes the icon a circle
                display: "flex", // allows image to align properly
                justifyContent: "center", // centers the image horizontally
                alignItems: "center", // centers the image vertically
              }}
              icon={<img src={biat} alt="BIAT" style={{ width: "40px", height: "40px", borderRadius: "50%" }} />}
            >
              <h3 className="vertical-timeline-element-title">
                Software Engineer Intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                BIAT, Tunisia
              </h4> 
              <h6>
                <p>
                <b>Problem: </b> The bank need for a dashboard to visualize its agencies data. <br></br>
              
              <b>Solution: </b>Developed and implemented web scraping scripts, cleaned and processed data, designed and created interactive dashboards. <br></br>
              <b>
               Keywords: Web Scraping, Python, BeautifulSoup, Data Cleaning, PowerBI
               </b>
               </p>
               </h6>
              
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;