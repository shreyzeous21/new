"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Trees, Code } from "lucide-react";

const cardData = [
  {
    id: 1,
    icon: <Trees size={48} className="text-green-500" />, // Increased icon size
    title: "Sustainability",
    description:
      "See how we accelerate our contributions to a sustainable and inclusive world.",
    link: "Discover more",
  },
  {
    id: 2,
    icon: <Code size={48} className="text-green-500" />, // Increased icon size
    title: "Software",
    description:
      "Explore our agnostic software portfolio providing our customers with the right software for their needs.",
    link: "Explore our software offer",
  },
  {
    id: 3,
    icon: <Trees size={48} className="text-green-500" />, // Increased icon size
    title: "Innovation",
    description:
      "Innovate with tailored solutions designed for modern challenges.",
    link: "Learn about innovation",
  },
  {
    id: 4,
    icon: <Code size={48} className="text-green-500" />, // Increased icon size
    title: "Growth",
    description:
      "Empower your business growth with our strategic insights and tools.",
    link: "See growth insights",
  },
];

const DigitalPartner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 3; // Number of cards visible at once

  const handleNext = () => {
    if (currentIndex + visibleCards < cardData.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="bg-white h-auto mx-auto w-full max-w-7xl justify-center py-10 flex flex-col">
      {/* Header */}
      <div className="flex lg:flex-row flex-col lg:justify-between justify-center items-center w-full mx-auto h-full mb-6">
        <h1 className="text-4xl text-center font-bold mb-4 lg:mb-0">
          Your digital partner for Sustainability and Efficiency
        </h1>
        <span className="lg:flex hidden flex-row gap-4">
          <ArrowLeft
            onClick={handlePrev}
            className="cursor-pointer text-gray-500 hover:text-black"
          />
          <ArrowRight
            onClick={handleNext}
            className="cursor-pointer text-gray-500 hover:text-black"
          />
        </span>
      </div>

      {/* Carousel for Larger Screens and Stack for Mobile */}
      <div className="relative mx-10 font-semibold py-4 lg:w-full overflow-hidden">
        {/* For mobile (small screens), display cards in a column */}
        <div className="lg:hidden gap-10 flex flex-col">
          {cardData.map((card) => (
            <motion.div
              key={card.id}
              whileHover={{ scale: 1.05, y: -10 }} // Floating effect
              className="bg-gray-100 cursor-pointer rounded-lg shadow-lg p-6 w-full h-[320px] text-left flex flex-col justify-between"
            >
              <motion.div className="mb-4">{card.icon}</motion.div>
              <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
              <p className="text-gray-600 mb-4">{card.description}</p>
              <a
                href="#"
                className="text-blue-500 hover:underline font-medium text-sm"
              >
                {card.link} →
              </a>
            </motion.div>
          ))}
        </div>

        {/* For tablets and larger screens (lg and above), show carousel */}
        <motion.div
          className="lg:flex hidden mx-5 gap-6"
          initial={{ x: 0 }}
          animate={{ x: -currentIndex * (100 / visibleCards) + "%" }}
          transition={{ duration: 0.5 }}
          style={{
            width: `${(cardData.length / visibleCards) * 100}%`,
          }}
        >
          {cardData.map((card) => (
            <motion.div
              key={card.id}
              whileHover={{ scale: 1.05, y: -10 }} // Floating effect
              className="bg-gray-100 cursor-pointer rounded-lg shadow-lg p-6 w-full sm:w-[45vw] md:w-[30vw] lg:w-[25vw] h-[320px] flex-shrink-0 text-left flex flex-col justify-between"
            >
              <motion.div className="mb-4">{card.icon}</motion.div>
              <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
              <p className="text-gray-600 mb-4">{card.description}</p>
              <a
                href="#"
                className="text-blue-500 hover:underline font-medium text-sm"
              >
                {card.link} →
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default DigitalPartner;
