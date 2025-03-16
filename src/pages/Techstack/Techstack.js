import React from "react";
import "./Techstack.css";
import { TechstackList } from "../../utils/TechstackList";
import { motion } from "framer-motion";


const Techstack = () => {
  return (
    <>
      <div className="container techstack" id="techstack">
        {/* RubberBand replaced with motion.div */}
        <motion.h2
          className="col-12 mt-3 mb-1 text-center text-uppercase"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Technologies Stack
        </motion.h2>
        <hr />
        <motion.p
          className="pb-3 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          👉  This includes programming languages, frameworks, databases, front-end and back-end tools, RESTful APIs, cloud platforms, CI/CD pipelines, and version control systems.
        </motion.p>

        <div className="row">
          {TechstackList.map((tech) => (
            // Fade left replaced with motion.div for individual items
            <motion.div
              key={tech._id}
              className="col-md-3"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="card m-2">
                <div className="card-content">
                  <div className="card-body">
                    <div className="media d-flex justify-content-center">
                      <div className="alig-self-center">
                        <tech.icon className="tech-icon" />
                      </div>
                      <div className="media-body">
                        <h5>{tech.name}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Techstack;