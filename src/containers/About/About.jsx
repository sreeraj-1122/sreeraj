import React, { useState } from "react";
import { motion } from "framer-motion";
import profile from "../../assets/my.jpg";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.css";

import developerProfile from "../../constants/developerProfile";

const About = () => {
  const [aboutMe, setAboutMe] = useState({
    resumeUrl: "https://drive.google.com/file/d/1U3qSdHMdpzauqX2Y8yI27FY3unEuWzdu/view?usp=drive_link", 
  });

  const viewResumeHandler = () => {
    window.open(aboutMe.resumeUrl, "_blank");
  };

  return (
    <>
      <h2 className="head-text">
        I know that <span>Good Design</span>
        <br />
        means <span>Good Business</span>
      </h2>

      <div className="app__about-context app__flex">
        <div className="app__about-img app__flex">
          <div className="app__flex">
            <img src={profile} alt="Profile" />
          </div>
        </div>
        <div className="app__about-data app__flex">
          <h2 className="head-text">About Me</h2>
          <p className="p-text">
            Hi there, I'm <span>Sreeraj</span> – a highly skilled{" "}
            <span>MERN stack developer</span> experienced in crafting dynamic
            front-end interfaces and robust back-end solutions. I specialize in
            building intuitive and efficient web applications. I love what I do
            (Web Development!) and continuously push myself to learn and expand
            my skill set, which drives me forward. I am seeking a position to
            contribute to the development and enhancement of web applications
            while continuously expanding my technical expertise. As for my
            personality, I'm a result-oriented individual with a strong eye for
            detail. I'm equally comfortable working in a team or handling
            projects independently. You could describe me as a dedicated,
            easygoing person with a sense of humor who thrives on solving
            challenges and delivering top-notch results.
          </p>
          <div>
            <button className="portfolio-button" onClick={viewResumeHandler}>
              Resume
            </button>
          </div>
        </div>
      </div>

      {/* Mapping over the developerProfile array */}
      <div className="app__profiles">
        {developerProfile.map((profile, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.1 }}
            transition={{ duration: 0.2, type: "tween" }}
            className="app__profile-item"
            key={profile.title + index}
          >
            <img src={profile.image} alt={profile.title} /> {/* Display image */}
            <h2 className="bold-text" style={{ marginTop: "20px" }}>
              {profile.title}
            </h2>
            <h2 className="p-text" style={{ marginTop: "10px" }}>
              {profile.description}
            </h2>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
