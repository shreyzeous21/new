"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

// Example array of testimonials
const testimonials = [
  {
    id: 1,
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est et fugiat, laborum veniam tempora quaerat ullam enim eos temporibus commodi odit id.",
    name: "Dr. Shrey",
    designation: "CEO",
    imgSrc: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    quote:
      "Quis voluptatum voluptatem earum rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est et fugiat, laborum veniam tempora quaerat.",
    name: "Dr. Anna",
    designation: "CTO",
    imgSrc: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    quote:
      "Veritatis, provident dolores? Quis voluptatum voluptatem earum rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est et fugiat.",
    name: "Dr. Raj",
    designation: "COO",
    imgSrc: "/placeholder.svg?height=80&width=80",
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
    <div className="bg-gradient-to-r from-blue-600 to-green-400 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          What Our Clients Say
        </h2>
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="relative h-[400px] sm:h-[300px] flex items-center justify-center px-8 sm:px-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <Quote className="h-12 w-12 mx-auto mb-6 text-blue-500" />
                <p className="text-xl sm:text-2xl font-medium text-gray-700 mb-8">
                  {testimonials[currentIndex].quote}
                </p>
                <div className="flex items-center justify-center space-x-4">
                  <Image
                    src={testimonials[currentIndex].imgSrc}
                    alt={testimonials[currentIndex].name}
                    width={64}
                    height={64}
                    className="h-16 w-16 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="text-gray-600">
                      {testimonials[currentIndex].designation}
                    </p>
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
