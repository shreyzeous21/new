/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

const cardData = [
  {
    id: 1,
    icon: "/digital/icon-cost-effective.png",
    title: "Cost Effective",
    description:
      "Cut data center construction costs by eliminating chillers, CRACs, CRAHs, raised floors and downsizing power & backup infrastructure.",
    link: "Learn more",
  },
  {
    id: 2,
    icon: "/digital/icon-future-proof.png",
    title: "Future Proof",
    description:
      "Cool the most powerful servers — up to 368 kW/rack —and capitalize on emerging advanced processing applications.",
    link: "Learn more",
  },
  {
    id: 3,
    icon: "/digital/icon-scaleable.png",
    title: "Scalable",
    description:
      "Reduce planning & forecasting. Easily add capacity as your operation grows.",
    link: "Learn more",
  },
  {
    id: 4,
    icon: "/digital/icon-agile.png",
    title: "Agile",
    description:
      "GRC liquid immersion cooling solutions can be located in virtually any environment—and be up and running within weeks, not months.",
    link: "Learn more",
  },
  {
    id: 5,
    icon: "/digital/icon-resilient.png",
    title: "Resilient",
    description:
      "Eliminate fan vibrations, dust and moisture contamination, oxidation and static risks, and remove data center hot spots.",
    link: "Learn more",
  },
  {
    id: 6,
    icon: "/digital/icon-efficient.png",
    title: "Efficient",
    description:
      "Experience a <1.03 pPUE, reduce server power use by an average of 11%, and cut power consumed for IT cooling by up to 90%.",
    link: "Learn more",
  },
];

const DigitalPartner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNext = () => {
    const visibleCards = isSmallScreen ? 1 : 3;
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleCards < cardData.length ? prevIndex + 1 : prevIndex
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const visibleCards = isSmallScreen ? 1 : 3;

  return (
    <div className="h-auto mx-auto w-full max-w-6xl py-16 flex flex-col">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:justify-between items-center w-full mb-6">
        <div className="flex flex-col text-center lg:text-start w-full justify-start mx-5 ">
          <h1 className="text-4xl text-white font-bold">
            Green Revolution Cooling
          </h1>
          <p className="mt-2 text-white text-lg">
            Redefining the Efficiency and Sustainability of Data Center Cooling
          </p>
        </div>
        <div className="hidden lg:flex gap-4">
          <ArrowLeft
            onClick={handlePrev}
            className={`cursor-pointer ${
              currentIndex === 0 ? "text-gray-300" : "text-white"
            }`}
          />
          <ArrowRight
            onClick={handleNext}
            className={`cursor-pointer ${
              currentIndex + visibleCards >= cardData.length
                ? "text-gray-300"
                : "text-white"
            }`}
          />
        </div>
      </div>

      {/* Card Section */}
      <div className="relative px-10 overflow-hidden">
        <motion.div
          className="flex gap-10"
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
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-gray-100 mt-5 rounded-lg shadow-lg p-6 w-full sm:w-[20vw] lg:w-[24vw] flex-shrink-0 h-[320px] flex flex-col justify-between"
            >
              <img
                src={card.icon}
                alt={card.title}
                className="w-[7rem] h-auto"
              />
              <h2 className="text-xl text-[#69bf3c] font-semibold">
                {card.title}
              </h2>
              <p className="text-gray-600 text-sm">{card.description}</p>
              <a
                href="#"
                className="text-black hover:text-[#69bf3c] font-medium"
              >
                {card.link} <ArrowUpRight className="inline" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Navigation for Small Screens */}
      {isSmallScreen && (
        <div className="flex justify-between mt-4">
          <ArrowLeft
            onClick={handlePrev}
            className={`cursor-pointer ${
              currentIndex === 0 ? "text-gray-300" : "text-black"
            }`}
          />
          <ArrowRight
            onClick={handleNext}
            className={`cursor-pointer ${
              currentIndex + visibleCards >= cardData.length
                ? "text-gray-300"
                : "text-black"
            }`}
          />
        </div>
      )}
    </div>
  );
};

export default DigitalPartner;
