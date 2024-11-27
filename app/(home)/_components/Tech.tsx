/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Tech = () => {
  const cards = [
    {
      id: 1,
      title: "AI and Machine Learning",
      hoverText:
        "Advanced technologies, such as artificial intelligence and machine learning have explosive potential, however they also introduce unprecedented obstacles for data centers.",
      icon: "/tech/ai.webp",
      alt: "AI and Machine Learning",
      link: "#",
    },
    {
      id: 2,
      title: "Blockchain Computing",
      hoverText:
        "GRC’s data center liquid immersion cooling solutions designed for digital asset mining are innovative yet amazingly simple. ",
      icon: "/tech/ai.webp",
      alt: "Blockchain Computing",
      link: "#",
    },
    {
      id: 3,
      title: "Enterprise / Cloud / Hyperscale",
      hoverText:
        "Green Revolution Cooling’s (GRC) modular, pre-engineered immersion cooling systems enable you to build and expand data center capacity within weeks, reducing forecasting challenges.",
      icon: "/tech/ai.webp",
      alt: "Enterprise / Cloud / Hyperscale",
      link: "#",
    },
    {
      id: 4,
      title: "Edge",
      hoverText:
        "Cloud and IOT applications have opened exciting new frontiers. But inherent latencies often demand that companies put localized compute closer to where the data is needed.",
      icon: "/tech/ai.webp",
      alt: "Edge",
      link: "#",
    },
    {
      id: 5,
      title: "High-Performance Computing",
      hoverText:
        "High-performance computing (HPC) drives transformational discoveries and crushes previously insurmountable challenges. ",
      icon: "/tech/ai.webp",
      alt: "High-Performance Computing",
      link: "#",
    },
    {
      id: 6,
      title: "ICEraQ®",
      hoverText:
        "Whether you’re running AI, public cloud computing, private cloud storage, a high frequency trading operation, or an on-premises data center, ",
      icon: "/tech/ai.webp",
      alt: "ICEraQ®",
      link: "#",
    },
    {
      id: 7,
      title: "ICEtank®",
      hoverText:
        "Need to add computing power in the middle of nowhere? Want to expand your data center but only have a parking lot to do so?",
      icon: "/tech/ai.webp",
      alt: "ICEtank®",
      link: "#",
    },
    {
      id: 8,
      title: "HashRaQ® MAX",
      hoverText:
        "The increase in hashrates, compute densities, and heat loads continue to climb.",
      icon: "/tech/ai.webp",
      alt: "HashRaQ® MAX",
      link: "#",
    },
  ];

  return (
    <div className="py-10 max-w-7xl lg:w-full h-auto mx-5 justify-start lg:mx-auto flex flex-col">
      <div className="h-auto w-full justify-center py-2 flex flex-col">
        <div className="flex flex-col lg:w-1/2 justify-start">
          <h1 className="text-4xl text-blue-900 font-bold py-4">
            GRC Solutions
          </h1>
          {/* <p className="text-black text-sm py-4">
            From next-generation AI to cutting edge hybrid cloud solutions to
            the deep expertise of IBM Consulting, IBM has what it takes to help
            you reinvent how your business works in the age of AI.
          </p> */}
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 w-full">
          {cards.map((card) => (
            <Link key={card.id} href={card.link} legacyBehavior>
              <a className="relative bg-white border border-gray-200 shadow-sm p-6 flex flex-col gap-20  justify-between transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 group">
                <div className="relative h-10 flex  ">
                  <h3 className="absolute text-lg text-gray-700 group-hover:text-white  text-start transition-all duration-300 group-hover:-translate-y-6 group-hover:opacity-0">
                    {card.title}
                  </h3>
                  <p className="absolute text-sm text-gray-700 group-hover:text-white font-medium  opacity-0 transition-all duration-300 translate-y-6 group-hover:translate-y-0 group-hover:opacity-100">
                    {card.hoverText}
                  </p>
                </div>

                <img
                  src={card.icon}
                  alt={card.alt}
                  className="w-10 h-10  rounded-full mt-4"
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
