import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./Testimonial.css";

// Sample testimonials and brands data (replace with your actual data source)
const sampleTestimonials = [
  {
    imgurl: "path/to/image1.jpg", // Replace with actual image paths
    name: "John Doe",
    feedback: "This is a great service!",
    company: "Company A",
  },
  {
    imgurl: "path/to/image2.jpg", // Replace with actual image paths
    name: "Jane Smith",
    feedback: "I highly recommend this!",
    company: "Company B",
  },
  // Add more testimonial objects as needed
];

const sampleBrands = [
  { _id: "1", imgUrl: "path/to/brand1.jpg" }, // Replace with actual brand images
  { _id: "2", imgUrl: "path/to/brand2.jpg" },
  // Add more brand objects as needed
];

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState(sampleTestimonials);
  const [brands, setBrands] = useState(sampleBrands);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  const test = testimonials[currentIndex];

  return (
    <>
      <h2 className="head-text">
        See what <span>Others</span> say about me!
      </h2>
      {testimonials.length > 0 && (
        <>
          <div className="app__testimonial-carousel app__flex">
            <img src={test.imgurl} alt={test.name} />
            <div className="app__testimonial-content">
              <p className="p-text">{test.feedback}</p>
              <div>
                <h4 className="bold-text">{test.name}</h4>
                <h5 className="p-text">{test.company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonials-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className="app__testimonials-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={brand._id}
          >
            <img src={brand.imgUrl} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, "app__testimonial"),
  "testimonials",
  "app__primarybg"
);
