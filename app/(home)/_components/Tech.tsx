/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const Tech = () => {
  const cards = [
    {
      id: 1,
      title: "AI and Machine Learning",
      hoverText:
        "Advanced technologies, such as artificial intelligence and machine learning have explosive potential, however they also introduce unprecedented obstacles for data centers.",
      icon: "https://www.grcooling.com/wp-content/uploads/grc-ai-hero-image-desktop-1920x610.png",
      alt: "AI and Machine Learning",
      link: "#",
    },
    {
      id: 2,
      title: "Blockchain Computing",
      hoverText:
        "GRC’s data center liquid immersion cooling solutions designed for digital asset mining are innovative yet amazingly simple. ",
      icon: "https://www.grcooling.com/wp-content/uploads/hashraq-max-beauty-shot-1920x1080.png",
      alt: "Blockchain Computing",
      link: "#",
    },
    {
      id: 3,
      title: "Enterprise / Cloud / Hyperscale",
      hoverText:
        "Green Revolution Cooling’s (GRC) modular, pre-engineered immersion cooling systems enable you to build and expand data center capacity within weeks, reducing forecasting challenges.",
      icon: "https://www.grcooling.com/wp-content/uploads/2022/12/101-iceraq-product.png",
      alt: "Enterprise / Cloud / Hyperscale",
      link: "#",
    },
    {
      id: 4,
      title: "Edge",
      hoverText:
        "Cloud and IOT applications have opened exciting new frontiers. But inherent latencies often demand that companies put localized compute closer to where the data is needed.",
      icon: "https://www.grcooling.com/wp-content/uploads/edge-header-image-1920x611.png",
      alt: "Edge",
      link: "#",
    },
    {
      id: 5,
      title: "High-Performance Computing",
      hoverText:
        "High-performance computing (HPC) drives transformational discoveries and crushes previously insurmountable challenges. ",
      icon: "https://www.grcooling.com/wp-content/uploads/grc-desktop-header-image-1920x611.png",
      alt: "High-Performance Computing",
      link: "#",
    },
    {
      id: 6,
      title: "ICEraQ®",
      hoverText:
        "Whether you’re running AI, public cloud computing, private cloud storage, a high frequency trading operation, or an on-premises data center, ",
      icon: "https://www.grcooling.com/wp-content/uploads/grc-iceraq-model-images.png",
      alt: "ICEraQ®",
      link: "#",
    },
    {
      id: 7,
      title: "ICEtank®",
      hoverText:
        "Need to add computing power in the middle of nowhere? Want to expand your data center but only have a parking lot to do so?",
      icon: "https://www.grcooling.com/wp-content/uploads/2019/06/photos-under-icetank-video-artwork.png",
      alt: "ICEtank®",
      link: "#",
    },
    {
      id: 8,
      title: "HashRaQ® MAX",
      hoverText:
        "The increase in hashrates, compute densities, and heat loads continue to climb.",
      icon: "https://www.grcooling.com/wp-content/uploads/grc-hashraq-max.png",
      alt: "HashRaQ® MAX",
      link: "#",
    },
  ];

  return (
    <div className="py-14 max-w-7xl lg:w-full h-auto mx-5 justify-start lg:mx-auto flex flex-col">
      <div className="h-auto w-full justify-center  flex flex-col">
        <div className="flex flex-col lg:w-1/2 justify-start">
          <h1 className="text-4xl text-[#243765] font-bold mb-3 ">
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
              <a className="relative bg-white border border-gray-200 shadow-sm p-6 flex flex-col gap-20  justify-between transition-all duration-300 hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-900 group">
                <div className="relative h-10 flex  ">
                  <h3 className="absolute text-lg text-black group-hover:text-white  text-start transition-all duration-300 group-hover:-translate-y-6 group-hover:opacity-0">
                    {card.title}
                  </h3>
                  <p className="absolute text-sm text-black group-hover:text-white  opacity-0 transition-all duration-300 translate-y-6 group-hover:translate-y-0 group-hover:opacity-100">
                    {card.hoverText}
                  </p>
                </div>

                <img
                  src={card.icon}
                  alt={card.alt}
                  className="w-10 h-10  rounded-full mt-4"
                />

                <span className="absolute bottom-6 right-4 text-2xl font-semibold text-gray-700 group-hover:text-white">
                  <ArrowUpRight />
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
