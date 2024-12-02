import { ArrowUpRight } from "lucide-react";
import React from "react";

const AboutHome = () => {
  const cards = [
    { title: "About GRC", link: "/about-grc" },
    { title: "Our Expert Team", link: "/our-expert-team" },
    { title: "Our Promise of Quality", link: "/our-promise-of-quality" },
    { title: "Our Patents", link: "/our-patents" },
    { title: "Our Customers", link: "/our-customers" },
    { title: "Careers at GRC", link: "/careers-at-grc" },
    {
      title: "Sustainability Initiatives",
      link: "/sustainability-initiatives",
    },
    { title: "Leadership and Governance", link: "/leadership-governance" },
  ];

  return (
    <div className="py-10 lg:w-full h-auto flex flex-col max-w-6xl lg:mx-auto mx-4 justify-center">
      {/* Section Title */}
      <div className="mb-6 gap-5">
        <h2 className="text-4xl font-bold text-[#243765] ">About GRC</h2>
        <p className="text-lg mt-2 text-[#243765]">
          GRC (Green Revolution Cooling) was founded with a vision to change the
          way data centers are designed, built and operated.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {cards.map((card, index) => (
          <a
            key={index}
            href={card.link}
            className="border hover:text-[#69bf3c] border-gray-300 bg-white shadow-sm p-4 flex items-center justify-between hover:shadow-md transition-shadow duration-300"
          >
            {/* Card Title */}
            <h3 className="text-sm font-medium ">{card.title}</h3>

            {/* Arrow Icon */}
            <ArrowUpRight className="inline" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default AboutHome;
