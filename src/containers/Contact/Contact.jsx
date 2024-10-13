import React, { useState } from "react";
import emailjs from "emailjs-com";  // Import EmailJS
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";

import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setIsLoading] = useState(false);

  const { email, message, subject, name } = formData;

  // Handle input changes
  const handleChangeInput = (e) => {
    const { name: fieldName, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [fieldName]: value };
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent page refresh
    setIsLoading(true);
  
    const serviceID = "service_ufdledq";     // Add your service ID
    const templateID = "template_7hdi20h";   // Add your template ID
    const publicKey = "RWRwfSrXKj9qsBN04";   // Add your public key
  
    const templateParams = {
      to_name: "Sreeraj",    
      from_name: name,       // From form input state
      from_email: email,     // From form input state
      subject: subject,      // From form input state
      message: message,      // From form input state
    };
  
    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setIsFormSubmitted(true);
          setIsLoading(false);
        },
        (err) => {
          console.log("FAILED...", err);
          setIsLoading(false);
        }
      );
  };

  return (
    <>
      <h2 className="head-text">
        Take a coffee & <span>chat</span> with <span>me</span>
      </h2>

      <div className="app__contact-cards">
        <div className="app__contact-card">
          <img src={images.email} alt="email" />
          <a href="mailto:sreeraj2122@gmail.com" className="p-text">
            sreeraj2122@gmail.com
          </a>
        </div>
        <div className="app__contact-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel:+918078382787" className="p-text">
            +91 8078382787
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <form className="app__contact-form app__flex" onSubmit={handleSubmit}>
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder="Your Name"
              value={name}
              onChange={handleChangeInput}
              name="name"
              required
            />
          </div>
          <div className="app__flex">
            <input
              type="email"
              className="p-text"
              placeholder="Your Email"
              value={email}
              onChange={handleChangeInput}
              name="email"
              required
            />
          </div>
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder="Subject"
              value={subject}
              onChange={handleChangeInput}
              name="subject"
              required
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              value={message}
              onChange={handleChangeInput}
              required
            />
          </div>
          <button
            type="submit"
            className="portfolio-button"
          >
            {loading ? "Sending Message..." : "Send Message"}
          </button>
        </form>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in <span>Touch!</span>
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Contact, "app__contact"),
  "contact",
  "app__whitebg"
);
