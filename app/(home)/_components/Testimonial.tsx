"use client";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion

// Example array of testimonials
const testimonials = [
  {
    id: 1,
    quote:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est et fugiat, laborum veniam tempora quaerat ullam enim eos temporibus commodi odit id.",
    name: "Dr Shrey",
    designation: "CEO",
    imgSrc: "/logo.png",
  },
  {
    id: 2,
    quote:
      "Quis voluptatum voluptatem earum rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est et fugiat, laborum veniam tempora quaerat.",
    name: "Dr Anna",
    designation: "CTO",
    imgSrc: "/logo.png",
  },
  {
    id: 3,
    quote:
      "Veritatis, provident dolores? Quis voluptatum voluptatem earum rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est et fugiat.",
    name: "Dr Raj",
    designation: "COO",
    imgSrc: "/logo.png",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next testimonial
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous testimonial
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-gradient-to-r from-blue-900 to-green-500 py-12 mx-auto h-auto items-center gap-4 justify-center w-full flex flex-col">
      <h2 className="text-4xl font-bold text-white">Testimonials</h2>
      <div className="bg-white w-1/2 rounded-md shadow-md flex flex-col gap-8 p-10 justify-center h-[60vh]">
        <Quote className="h-12 w-12" />
        {/* Using Framer Motion to animate the testimonial */}
        <motion.p
          className="text-lg"
          key={testimonials[currentIndex].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {testimonials[currentIndex].quote}
        </motion.p>
        <div className="items-center flex gap-5 flex-row">
          <img
            src={testimonials[currentIndex].imgSrc}
            alt={testimonials[currentIndex].name}
            className="h-[12vh] w-[5vw] object-contain rounded-md"
          />
          <span className="flex flex-col">
            <h1 className="text-xl font-semibold">
              {testimonials[currentIndex].name}
            </h1>
            <p className="text-sm">{testimonials[currentIndex].designation}</p>
          </span>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center gap-4">
        {/* Left Button */}
        <button
          className="bg-white border border-gray-300 rounded-md p-3 shadow hover:shadow-lg flex items-center justify-center"
          onClick={prevTestimonial}
        >
          <ChevronLeft className="h-6 w-6 text-gray-600" />
        </button>

        {/* Right Button */}
        <button
          className="bg-white border border-gray-300 rounded-md p-3 shadow hover:shadow-lg flex items-center justify-center"
          onClick={nextTestimonial}
        >
          <ChevronRight className="h-6 w-6 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
