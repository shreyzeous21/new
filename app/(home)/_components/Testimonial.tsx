"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

// Example array of testimonials
const testimonials = [
  {
    id: 1,
    quote:
      "Immersion-cooled systems do not require chillers, CRAC units, raised flooring, etc. This method has the potential to cut in half the construction cost",
    name: "David Prucnal, P.E. at NSA, United States",
  },
  {
    id: 2,
    quote:
      "We saturated the power envelope by putting twice as many systems as we would normally have, if it had a normal way of cooling",
    name: "Laurent Clerc, VP of Information Technology at CGG, France",
  },
  {
    id: 3,
    quote:
      " The GRC system is reducing our cooling energy consumption by up to 90%, bringing down our total energy cost by around 35%",
    name: "CTO at DownUnder GeoSolutions, Australia",
  },
  {
    id: 4,
    quote:
      " GRC’s system enabled the Tsubame-KFC to rank #1 on the Green500 list of the most efficient supercomputers in the world",
    name: "Tokyo Institute of Technology, Japan Previous Slide",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className=" h-auto bg-gradient-to-r from-blue-600 to-green-400 py-14 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-5">
          What Our Clients Say
        </h2>
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="relative h-[300px] sm:h-[300px] flex items-center justify-center px-8 sm:px-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <Quote className="h-12 w-12 mx-auto mb-6 text-green-500" />
                <p className="text-xl sm:text-xl font-medium text-gray-700 mb-8">
                  {testimonials[currentIndex].quote}
                </p>
                <div className="flex items-center justify-center space-x-4">
                  <div className="text-left">
                    <h3 className="text-sm font-semibold text-gray-900">
                      {testimonials[currentIndex].name}
                    </h3>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <div className="flex justify-center mt-8 space-x-4">
          <button
            className="bg-white text-blue-600 rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            className="bg-white text-blue-600 rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
