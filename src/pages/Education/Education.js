import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";
import ensi from "../../assets/ensi.jpeg";
import lpbt from "../../assets/lpbt.jpeg";
import manar from "../../assets/manar.png";
const Education = () => {
  return (
    <>
      <div className=" education" id="education">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Education Details
        </h2>
        <hr />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2020 - 2023"
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
            icon={<img src={ensi} alt="ENSI" style={{ width: "40px", height: "40px", borderRadius: "50%" }} />}
          >
            <h3 className="vertical-timeline-element-title">Engineering School</h3>
            <h4 className="vertical-timeline-element-subtitle">
              National School of Comuter Science
            </h4>
            <h6>Software engineering, System Design, Algorithm Optimization, Software Quality&Testing</h6>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2018 - 2020"
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
            icon={<img src={manar} alt="Manar" style={{ width: "40px", height: "40px", borderRadius: "50%" }} />}
          >
            <h3 className="vertical-timeline-element-title">Pre-Engineering School</h3>
            <h4 className="vertical-timeline-element-subtitle">
              El Manar
            </h4>
            <h6>Mathematics, Physics, Algorithm</h6>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2014 - 2018"
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
            icon={<img src={lpbt} alt="LPBT" style={{ width: "40px", height: "40px", borderRadius: "50%" }} />}
          >
            <h3 className="vertical-timeline-element-title">Baccalaureat Mathematics</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Pioneer Bourguiba High School
            </h4>
            <h6>Mathematics, Intro to Algorithm</h6>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;