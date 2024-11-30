"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  const slides = [
    {
      src: "/img1.png",
      link: "/learn-more-1",
      imageName: "Image One",
      text: {
        desktop: "Increase Performance. Enhance Sustainability. Optimize TCO.",
        mobile: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    },
    {
      src: "/img2.webp",
      link: "/learn-more-2",
      imageName: "Image Two",
      text: {
        desktop: "Increase Performance. Enhance Sustainability. Optimize TCO.",
        mobile: "Sed do eiusmod tempor incididunt ut labore.",
      },
    },
    {
      src: "/img3.webp",
      link: "/learn-more-3",
      imageName: "Image Three",
      text: {
        desktop: "Increase Performance. Enhance Sustainability. Optimize TCO.",
        mobile: "Duis aute irure dolor in reprehenderit.",
      },
    },
    {
      src: "/img4.webp",
      link: "/learn-more-4",
      imageName: "Image Four",
      text: {
        desktop: "Increase Performance. Enhance Sustainability. Optimize TCO.",
        mobile: "Excepteur sint occaecat cupidatat non proident.",
      },
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false); // State to track device type

  // Change the image every 3 seconds if the slideshow is playing
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, slides.length]);

  // Detect screen size to determine whether it's mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Set mobile threshold
    };

    // Check initially and add listener
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative w-full h-[80vh] bg-black text-white flex flex-col items-center">
      {/* Container for the sliding images */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
        {/* Animated Image Section */}
        <motion.div
          key={currentIndex}
          className="w-full h-full absolute"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={slides[currentIndex].src}
            alt={slides[currentIndex].imageName}
            layout="fill"
            objectFit="cover"
            className="object-cover opacity-50"
          />
        </motion.div>
      </div>

      {/* Buttons for Image Names */}
      <div className="absolute bottom-4 z-10 flex justify-center w-full gap-5">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-20 h-[2px] transition-all duration-300 
          ${
            currentIndex === index
              ? "bg-orange-500 scale-125"
              : "bg-gray-300 hover:bg-orange-400"
          }`}
          ></button>
        ))}
      </div>

      {/* Text Section */}
      <div
        className="absolute bottom-10 left-4 w-[90%] py-10 h-auto 
      lg:top-1/2 lg:left-10  md:w-1/2 md:h-1/6 
      z-10 flex flex-col  justify-center p-4 md:p-6"
      >
        <h1 className="text-5xl font-bold mb-8">
          Redefining the Efficiency and Sustainability of Data Center Cooling
        </h1>
        <p className="text-white text-xl  mb-10">
          {isMobile
            ? slides[currentIndex].text.mobile // Show mobile text
            : slides[currentIndex].text.desktop}{" "}
        </p>
        <a
          className=""
          href={slides[currentIndex].link} // Dynamic link based on current image
        >
          <button className="learn-more">
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text">Learn More</span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
