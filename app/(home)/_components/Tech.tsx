/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Tech = () => {
  const cards = [
    {
      id: 1,
      title: "AI Solutions",
      hoverText: "Explore AI",
      icon: "/img1.png",
      alt: "AI Solutions",
      link: "/ai-solutions",
    },
    {
      id: 2,
      title: "AI Models",
      hoverText: "Learn Models",
      icon: "/img2.png",
      alt: "AI Models",
      link: "/ai-models",
    },
    {
      id: 3,
      title: "Consulting",
      hoverText: "Get Advice",
      icon: "/img3.png",
      alt: "Consulting",
      link: "/consulting",
    },
    {
      id: 4,
      title: "Analytics",
      hoverText: "Discover Insights",
      icon: "/icon4.png",
      alt: "Analytics",
      link: "/analytics",
    },
    {
      id: 5,
      title: "IT Automation",
      hoverText: "Automate IT",
      icon: "/icon5.png",
      alt: "IT Automation",
      link: "/it-automation",
    },
    {
      id: 6,
      title: "Compute & Servers",
      hoverText: "Scale Servers",
      icon: "/icon6.png",
      alt: "Compute & Servers",
      link: "/compute-servers",
    },
    {
      id: 7,
      title: "Databases",
      hoverText: "Manage Data",
      icon: "/icon7.png",
      alt: "Databases",
      link: "/databases",
    },
    {
      id: 8,
      title: "Security & Identity",
      hoverText: "Secure Access",
      icon: "/icon8.png",
      alt: "Security & Identity",
      link: "/security-identity",
    },
  ];

  return (
    <div className="py-10 max-w-7xl lg:w-full h-auto mx-5 justify-start lg:mx-auto flex flex-col">
      <div className="h-auto w-full justify-center py-2 flex flex-col">
        <div className="flex flex-col lg:w-1/2 justify-start">
          <h1 className="text-4xl font-bold py-2">Technology & Consulting</h1>
          <p className="text-black text-base py-4">
            From next-generation AI to cutting edge hybrid cloud solutions to
            the deep expertise of IBM Consulting, IBM has what it takes to help
            you reinvent how your business works in the age of AI.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 w-full">
          {cards.map((card) => (
            <Link key={card.id} href={card.link} legacyBehavior>
              <a className="relative bg-white border border-gray-200 shadow-sm p-6 flex flex-col gap-20  justify-between transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 group">
                <div className="relative h-10 flex  ">
                  <h3 className="absolute text-sm text-gray-700 group-hover:text-white font-medium text-center transition-all duration-300 group-hover:-translate-y-6 group-hover:opacity-0">
                    {card.title}
                  </h3>
                  <p className="absolute text-sm text-gray-700 group-hover:text-white font-medium text-center opacity-0 transition-all duration-300 translate-y-6 group-hover:translate-y-0 group-hover:opacity-100">
                    {card.hoverText}
                  </p>
                </div>

                <img
                  src={card.icon}
                  alt={card.alt}
                  className="w-14 h-14 rounded-full mt-4"
                />

                <span className="absolute bottom-4 right-4 text-2xl font-semibold text-gray-700 group-hover:text-white">
                  &rarr;
                </span>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tech;
