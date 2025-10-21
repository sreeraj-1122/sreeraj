import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Tooltip as ReactTooltip } from "react-tooltip"; // Correct import for ReactTooltip

import { AppWrap, MotionWrap } from "../../wrapper";
import "./Skills.scss";
import { images } from "../../constants";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);

  const skillVariants = {
    view: {
      x: [-15, 0],
      opacity: [0, 1],
      transition: {
        x: {
          type: "spring",
          stiffness: "10",
        },
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    hover: {
      y: -7,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    tap: {
      y: -7,
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  useEffect(() => {
    // Mock data for skills
    const mockSkills = [
      { name: "HTML", bgColor: "#E34F26", icon: images.html },
      { name: "CSS", bgColor: "#1572B6", icon: images.css },
      { name: "JavaScript", bgColor: "#F7DF1E", icon: images.javascript },
      { name: "Bootstrap", bgColor: "#306998", icon: images.boo },
      { name: "React", bgColor: "#61DAFB", icon: images.react },
      { name: "Redux", bgColor: "#764ABC", icon: images.redux },
      { name: "Node.js", bgColor: "#68A063", icon: images.node },
      { name: "MongoDB", bgColor: "#47A248", icon: images.mongo },
      { name: "Express.Js", bgColor: "#E10098", icon: images.express },
    ];

    // Mock data for experience
    const mockExperience = [
      {
        year: "2025",
        works: [
          { name: "Junior Software Engineer", company: "Vuelogix Technologies Pvt Ltd", desc: "Developed user interfaces." },
          { name: "Project Management ,User Interface Design ,Responsive Web Design ", desc: "Implemented REST APIs." },
        ],
      },
      {
        year: "2025",
        works: [
          { name: "Software Engineer Trainee", company: "Vuelogix Technologies Pvt Ltd", desc: "Developed user interfaces." },
          { name: "Learned Vue js ,Rest APIs ", desc: "Implemented REST APIs." },
        ],
      },
      {
        year: "2024",
        works: [
          { name: "Mern Stack Developer Intern", company: "Futura Labs ,Kozhikode", desc: "Developed user interfaces." },
          { name: "Learned Full Stack", company: "Individual  ", desc: "Implemented REST APIs." },
        ],
      },
      {
        year: "2022",
        works: [
          { name: "Learned Basics of Web Development", company: "Individual", desc: "Developed user interfaces." },
          // { name: "Backend Developer", company: "Company B", desc: "Implemented REST APIs." },
        ],
      },
    ];

    setSkills(mockSkills);
    setExperience(mockExperience);
  }, []);

  return (
    <>
      <h2 className="head-text">
        Skills <span>&</span> Experience
      </h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill, index) => (
            <motion.div
              variants={skillVariants}
              whileInView="view"
              whileHover="hover"
              whileTap="tap"
              className="app__skills-item app__flex"
              key={skill.name + "-" + index}
            >
              <div
                className="app__flex"
                style={{ backgroundColor:"rgb(237, 242, 248" }}
              >
                <img src={skill.icon} alt={skill.name} /> {/* Ensure this path is correct */}
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="app__skills-exp">
          {experience?.map((exp) => (
            <motion.div className="app__skills-exp-item" key={exp.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{exp.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {exp?.works?.map((work) => (
                  <React.Fragment key={work.name}>
                    <motion.div
                      whileInView={{
                        opacity: [0, 1],
                        x: [-100, 5, 0],
                      }}
                      transition={{
                        duration: 1,
                      }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#313bac"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </React.Fragment>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
