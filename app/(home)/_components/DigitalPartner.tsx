/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { EffectFlip, Navigation } from "swiper/modules";

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
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Detect mobile screen size
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="h-auto mx-auto w-full max-w-6xl py-16 flex flex-col items-center justify-center">
      {/* Header Section */}
      <div className="flex flex-col items-center mb-6 text-center">
        <h1 className="text-4xl text-white font-bold">
          Green Revolution Cooling
        </h1>
        <p className="mt-2 text-white text-lg">
          Redefining the Efficiency and Sustainability of Data Center Cooling
        </p>
      </div>

      {/* Swiper Section */}
      <div className="relative w-full px-10 overflow-hidden">
        <Swiper
          effect="flip" // Flip effect for slides
          grabCursor={true} // Enable grab cursor on hover
          pagination={{ clickable: true }}
          navigation={true}
          modules={[EffectFlip, Navigation]} // Import modules for flip, pagination, and navigation
          className="mySwiper"
          slidesPerView={isSmallScreen ? 1 : 3} // 1 slide per view for small screens
          spaceBetween={30}
        >
          {cardData.map((card) => (
            <SwiperSlide key={card.id}>
              <div className="bg-gray-100 mt-5 rounded-lg shadow-lg p-6 w-full sm:w-[20vw] lg:w-[40vw] h-[300px] flex flex-col justify-between mx-auto">
                <img
                  src={card.icon}
                  alt={card.title}
                  className="w-[7rem] h-auto mx-auto"
                />
                <h2 className="text-xl text-[#69bf3c] font-semibold text-center">
                  {card.title}
                </h2>
                <p className="text-gray-600 text-sm text-center">
                  {card.description}
                </p>
                <a
                  href="#"
                  className="text-black hover:text-[#69bf3c] font-medium text-center"
                >
                  {card.link}
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default DigitalPartner;
