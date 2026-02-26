import React from "react";

import { BsLinkedin, BsInstagram } from "react-icons/bs";
import {  AiFillGithub } from "react-icons/ai";


const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://www.linkedin.com/in/sreeraj-k1"
          target="_blank"
          rel="noreferrer"
          className="app__flex"
        >
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a
          href="https://github.com/sreeraj-1122"
          target="_blank"
          rel="noreferrer"
          className="app__flex"
        >
          <AiFillGithub />
        </a>
      </div>
      <div>
        <a
          href="https://www.instagram.com/_.sree.raj/"
          target="_blank"
          rel="noreferrer"
          className="app__flex"
        >
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
