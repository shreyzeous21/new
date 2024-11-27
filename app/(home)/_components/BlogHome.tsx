"use client";

import {
  ArrowLeftCircle,
  ArrowRight,
  ArrowRightCircle,
  Share,
} from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const newsItems = [
  {
    id: 1,
    title:
      "Comparing Apples to Apples: Fairly Assessing Single-Phase Immersion’s Cooling Capabilities Versus Air and DLC",
    date: "November 05, 2024",
    imageUrl: "/blog/blog1.jpg",
    link: "/shrey",
  },
  {
    id: 2,
    title:
      "Revolutionizing Data Center Cooling: A Close Look at iDLC Architecture",
    date: "October 21, 2024",
    imageUrl: "/blog/blog2.jpg",
    link: "/shrey",
  },
  {
    id: 3,
    title:
      "iDLC: Merging Spot Cooling and Immersion for Optimal Data Center Efficiency",
    date: "October 4, 2024",
    imageUrl: "/blog/blog3.webp",
    link: "/shrey",
  },
  {
    id: 4,
    title: "The Trouble with TDP: Rethinking Data Center Cooling",
    date: "September 20, 2024",
    imageUrl: "/blog/blog4.jpg",
    link: "/shrey",
  },
  {
    id: 5,
    title: "Cutting-Edge Cooling Techniques for Modern Data Centers",
    date: "November 12, 2024",
    imageUrl: "/img1.png",
    link: "/shrey",
  },
  {
    id: 6,
    title: "Innovations in Data Center Architecture and Design",
    date: "November 12, 2024",
    imageUrl: "/img2.png",
    link: "/shrey",
  },
  {
    id: 7,
    title: "Exploring Sustainable Solutions for IT Infrastructure",
    date: "November 12, 2024",
    imageUrl: "/img3.png",
    link: "/shrey",
  },
  {
    id: 8,
    title: "The Future of Data Centers: Trends and Innovations",
    date: "November 12, 2024",
    imageUrl: "/img4.png",
    link: "/shrey",
  },
];

const BlogHome = () => {
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
    const itemsToShow = isSmallScreen ? 1 : 3;
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsToShow >= newsItems.length
        ? prevIndex
        : prevIndex + itemsToShow
    );
  };

  const handlePrev = () => {
    const itemsToShow = isSmallScreen ? 1 : 3;
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? prevIndex : prevIndex - itemsToShow
    );
  };

  const itemsToShow = isSmallScreen ? 1 : 3;

  const isAtStart = currentIndex === 0;
  const isAtEnd =
    currentIndex + itemsToShow >= newsItems.length || newsItems.length <= 1;

  return (
    <div className="h-auto flex mx-auto max-w-7xl w-full py-10 px-4">
      <div className="w-full flex flex-col">
        <h1 className="font-bold text-4xl mb-6">Latest News</h1>

        {/* Carousel Section */}
        <div className="relative">
          <div className="flex gap-6 overflow-hidden">
            <AnimatePresence initial={false}>
              {newsItems
                .slice(currentIndex, currentIndex + itemsToShow)
                .map((item) => (
                  <motion.div
                    key={item.id}
                    className="bg-gray-200 rounded-lg overflow-hidden w-full lg:w-[28vw] flex-shrink-0 lg:h-[70vh] h-[60vh] flex flex-col"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{
                      duration: 0.5,
                      ease: "backIn",
                    }}
                  >
                    {/* Image Section */}
                    <div
                      className="flex-shrink-0 h-[50%] bg-cover bg-center transform transition-transform duration-300 ease-in-out hover:scale-110"
                      style={{ backgroundImage: `url(${item.imageUrl})` }}
                    ></div>

                    {/* Content Section */}
                    <div className="flex flex-col justify-between p-4 h-[50%]">
                      <p className="text-gray-500 text-sm mt-2">{item.date}</p>
                      <h2 className="text-lg font-semibold text-black leading-tight">
                        {item.title}
                      </h2>
                      {item.link && (
                        <Link href={item.link} className="mt-auto">
                          <Share className="text-black" />
                        </Link>
                      )}
                    </div>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-6 flex justify-between">
          {/* Navigation Buttons */}
          <div className="flex gap-4 items-center px-4">
            <button
              className={`bg-white p-2 rounded-full shadow-lg ${
                isAtStart
                  ? "cursor-not-allowed text-gray-400"
                  : "hover:bg-gray-200 text-black"
              }`}
              onClick={handlePrev}
              disabled={isAtStart}
            >
              <ArrowLeftCircle />
            </button>
            <button
              className={`bg-white p-2 rounded-full shadow-lg ${
                isAtEnd
                  ? "cursor-not-allowed text-gray-400"
                  : "hover:bg-gray-200 text-black"
              }`}
              onClick={handleNext}
              disabled={isAtEnd}
            >
              <ArrowRightCircle />
            </button>
          </div>
          <Link
            href="/newsroom"
            className="text-blue-600 hover:underline flex items-center"
          >
            Explore Newsroom
            <ArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogHome;