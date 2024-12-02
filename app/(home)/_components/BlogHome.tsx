"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeftCircle, ArrowRightCircle, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const newsItems = [
  {
    id: 1,
    title:
      "Comparing Apples to Apples: Fairly Assessing Single-Phase Immersion's Cooling Capabilities Versus Air and DLC",
    date: "November 05, 2024",
    imageUrl: "/blog/blog1.jpg",
    link: "/shrey",
    text: "Comparing Apples to Apples: Fairly Assessing Single-Phase Immersion's Cooling Capabilities Versus Air and DLC",
  },
  {
    id: 2,
    title:
      "Revolutionizing Data Center Cooling: A Close Look at iDLC Architecture",
    date: "October 21, 2024",
    imageUrl: "/blog/blog2.jpg",
    link: "/shrey",
    text: "In today's rapidly evolving technological landscape, data centers are facing increasing demands for performance, efficiency, and sustainability.",
  },
  {
    id: 3,
    title:
      "iDLC: Merging Spot Cooling and Immersion for Optimal Data Center Efficiency",
    date: "October 4, 2024",
    imageUrl: "/blog/blog3.webp",
    link: "/shrey",
    text: "As data centers continue to grow in size and complexity, the need for efficient and effective cooling solutions has become increasingly critical. Two primary methods have emerged to address...",
  },
  {
    id: 4,
    title: "The Trouble with TDP: Rethinking Data Center Cooling",
    date: "September 20, 2024",
    imageUrl: "/blog/blog4.jpg",
    link: "/shrey",
    text: "Thermal Design Power (TDP) has long been a data center thermal management cornerstone. However, in recent years, its limitations have become increasingly apparent. As chip power densities continue to...",
  },
  {
    id: 5,
    title:
      "Targeted Flow Heat Sinks: A Simplified Approach to Cooling High-Powered Processors",
    date: "September 17, 2024",
    imageUrl:
      "https://www.grcooling.com/wp-content/uploads/tfhs-blog-image_-1-1.jpg",
    link: "/shrey",
    text: "In today's data-intensive world, the demand for high-performance processors has skyrocketed. These powerful chips generate significant amounts of heat, making efficient cooling a critical challenge. Traditional cooling methods often...",
  },
  {
    id: 6,
    title: "Innovations in Data Center Architecture and Design",
    date: "November 12, 2024",
    imageUrl: "/img2.png",
    link: "/shrey",
    text: "In today's data-intensive world, the demand for high-performance processors has skyrocketed. These powerful chips generate significant amounts of heat, making efficient cooling a critical challenge. Traditional cooling methods often...",
  },
  {
    id: 7,
    title: "Exploring Sustainable Solutions for IT Infrastructure",
    date: "November 12, 2024",
    imageUrl: "/img3.png",
    link: "/shrey",
    text: "In today's data-intensive world, the demand for high-performance processors has skyrocketed. These powerful chips generate significant amounts of heat, making efficient cooling a critical challenge. Traditional cooling methods often...",
  },
  {
    id: 8,
    title: "The Future of Data Centers: Trends and Innovations",
    date: "November 12, 2024",
    imageUrl: "/img4.png",
    link: "/shrey",
    text: "In today's data-intensive world, the demand for high-performance processors has skyrocketed. These powerful chips generate significant amounts of heat, making efficient cooling a critical challenge. Traditional cooling methods often...",
  },
];

const BlogHome = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsToShow >= newsItems.length
        ? prevIndex
        : prevIndex + itemsToShow
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? prevIndex : prevIndex - itemsToShow
    );
  };

  const isAtStart = currentIndex === 0;
  const isAtEnd = currentIndex + itemsToShow >= newsItems.length;

  return (
    <div className="py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-[#243765] mb-12 text-center lg:text-left">
          Latest News
        </h1>

        <div className="relative">
          <div className="overflow-hidden">
            <AnimatePresence initial={false}>
              <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:h-[80vh] h-[50vh]  gap-6">
                {newsItems
                  .slice(currentIndex, currentIndex + itemsToShow)
                  .map((item) => (
                    <motion.div
                      key={item.id}
                      className="bg-gray-200 rounded-lg shadow-lg overflow-hidden flex flex-col"
                      // style={{ aspectRatio: "1 / 2" }}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="relative h-1/2">
                        <Image
                          src={item.imageUrl}
                          alt={item.title}
                          className="absolute inset-0 w-full h-full object-cover"
                          layout="fill"
                          objectFit="cover"
                          objectPosition="center"
                          quality={100}
                        />
                      </div>
                      <div className="p-4 flex group flex-col justify-between flex-grow">
                        <div>
                          <p className="text-sm text-gray-500 mb-2">
                            {item.date}
                          </p>
                          <h2 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 s group-hover:text-[#69bf3c] transition-colors duration-300">
                            {item.title}
                          </h2>
                          <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                            {item.text}
                          </p>
                        </div>
                        {item.link && (
                          <Link
                            href={item.link}
                            className="inline-flex items-center text-[#243765] group-hover:text-[#69bf3c] transition-colors duration-300"
                          >
                            Learn more
                            <ArrowUpRight className="ml-2 h-4 w-4" />
                          </Link>
                        )}
                      </div>
                    </motion.div>
                  ))}
              </div>
            </AnimatePresence>
          </div>

          <div className=" mt-4 flex justify-center space-x-4">
            <button
              className={`p-2 rounded-full shadow-lg transition-colors duration-300 ${
                isAtStart
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-white text-[#243765] hover:bg-[#69bf3c] hover:text-white"
              }`}
              onClick={handlePrev}
              disabled={isAtStart}
              aria-label="Previous news items"
            >
              <ArrowLeftCircle className="h-6 w-6" />
            </button>
            <button
              className={`p-2 rounded-full shadow-lg transition-colors duration-300 ${
                isAtEnd
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-white text-[#243765] hover:bg-[#69bf3c] hover:text-white"
              }`}
              onClick={handleNext}
              disabled={isAtEnd}
              aria-label="Next news items"
            >
              <ArrowRightCircle className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHome;
