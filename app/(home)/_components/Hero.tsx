"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  const images = [
    { src: "/img1.png", alt: "Image 1", text: "First Image", link: "/about" },
    {
      src: "/img2.png",
      alt: "Image 2",
      text: "Second Image",
      link: "/services",
    },
    { src: "/img3.png", alt: "Image 3", text: "Third Image", link: "/contact" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length, isPaused]);

  const handlePlayPauseToggle = () => {
    setIsPaused((prev) => !prev);
  };

  const handleTextClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="h-screen w-full flex justify-center items-center bg-purple-500 overflow-hidden relative">
      {/* Slider Container */}
      <div className="relative w-full h-full">
        <AnimatePresence>
          {images.map(
            (image, index) =>
              index === currentIndex && (
                <motion.div
                  key={index}
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100%" }}
                  transition={{ type: "spring", stiffness: 100, damping: 25 }}
                  className="absolute w-full h-full flex flex-col justify-center items-center text-center"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    layout=""
                    width={1000}
                    height={1000}
                    objectFit="cover"
                    className="shadow-lg h-auto w-full"
                  />
                  {/* <p className="absolute bottom-32 text-white text-lg md:text-2xl font-semibold">
                    {image.text}
                  </p> */}
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>

      {/* Fixed "Know More" Button */}
      <div className="absolute bottom-32 left-[6rem]  transform -translate-x-1/2">
        <Link href={images[currentIndex].link}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-purple-600 px-4 py-2 rounded-lg shadow-md hover:bg-purple-100 transition-all duration-300"
          >
            Know More
          </motion.button>
        </Link>
      </div>

      {/* Play/Pause Button */}
      <button
        onClick={handlePlayPauseToggle}
        className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-full shadow-lg flex items-center justify-center md:p-4 group"
      >
        {isPaused ? (
          <span className="flex flex-row items-center gap-2 text-sm md:text-base">
            <Play size={20} className="text-purple-600" />
            <span className="hidden group-hover:inline text-purple-600">
              Play
            </span>
          </span>
        ) : (
          <span className="flex flex-row items-center gap-2 text-sm md:text-base">
            <Pause size={20} className="text-purple-600" />
            <span className="hidden group-hover:inline text-purple-600">
              Pause
            </span>
          </span>
        )}
      </button>

      {/* Image Text (clickable buttons) */}
      <div className="absolute bottom-10 left-5 flex items-center gap-2 flex-wrap md:left-8">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => handleTextClick(index)}
            className={`transition-all duration-300 px-2 py-1 text-xs md:text-base rounded-lg hover:bg-white hover:text-purple-600 ${
              index === currentIndex
                ? "bg-white text-black px-4 py-2"
                : "border-2 border-white text-white px-3 py-2"
            }`}
          >
            {image.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
