"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  // Array of images with associated links and names
  const slides = [
    { src: "/img1.png", link: "/learn-more-1", imageName: "Image One" },
    { src: "/img2.webp", link: "/learn-more-2", imageName: "Image Two" },
    { src: "/img3.webp", link: "/learn-more-3", imageName: "Image Three" },
    { src: "/img4.webp", link: "/learn-more-4", imageName: "Image Four" },
  ];

  // State to track the current image index
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true); // State to control the slideshow

  // Change the image every 3 seconds if the slideshow is playing
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 3000); // 3000ms = 3 seconds

      return () => clearInterval(interval); // Cleanup on component unmount or when isPlaying changes
    }
  }, [isPlaying, slides.length]); // Dependency on isPlaying

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev); // Toggle play/pause state
  };

  return (
    <div className="relative w-full h-[80vh] bg-black text-white flex flex-col items-center">
      {/* Container for the sliding images */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
        {/* Animated Image Section */}
        <motion.div
          key={currentIndex} // This ensures the component re-renders for each new image
          className="w-full h-full absolute"
          initial={{ opacity: 0, x: 100 }} // Initial state: hidden and from the right
          animate={{ opacity: 1, x: 0 }} // Final state: fully visible and centered
          exit={{ opacity: 0, x: -100 }} // Exit state: fade out to the left
          transition={{ duration: 1 }} // Transition time
        >
          <Image
            src={slides[currentIndex].src}
            alt={slides[currentIndex].imageName}
            layout="fill"
            objectFit="cover"
            className="object-cover opacity-60"
          />
        </motion.div>
      </div>

      {/* Buttons for Image Names */}
      <div className="absolute bottom-4 z-10 flex justify-center w-full gap-4">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)} // Set the active index on button click
            className={`text-sm md:text-base py-2 px-4 rounded-md transition duration-300  
              ${
                currentIndex === index
                  ? "bg-green-500 text-white"
                  : "bg-transparent border border-gray-300 text-white hover:bg-green-500 hover:text-white"
              }`}
          >
            {slide.imageName}
          </button>
        ))}
      </div>

      {/* Text Section */}
      <div
        className="absolute bottom-10 left-4 w-[90%] h-auto 
          lg:top-1/2 md:left-0 md:w-1/3 md:h-1/3 
          z-10 flex flex-col items-center justify-center p-4 md:p-6"
      >
        <a
          href={slides[currentIndex].link} // Dynamic link based on current image
          className="bg-green-600 text-white text-sm md:text-base 
            font-semibold px-4 py-2 md:px-6 md:py-3 
            rounded-md shadow-md hover:bg-green-700 
            transition duration-300"
        >
          Learn More
        </a>

        {/* Play/Pause Button */}
        {/* <button
          onClick={togglePlayPause}
          className="mt-4 bg-purple-600 text-white py-2 px-4 rounded-md transition duration-300 hover:bg-purple-700"
        >
          {isPlaying ? "Pause" : "Play"} Slide Show
        </button> */}
      </div>
    </div>
  );
};

export default Hero;
