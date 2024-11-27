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
    <div className="py-4 lg:w-full h-auto flex flex-col max-w-7xl lg:mx-auto mx-4 justify-center">
      {/* Section Title */}
      <h2 className="text-4xl font-bold mb-6">About GRC</h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <a
            key={index}
            href={card.link}
            className="border border-gray-300 bg-white shadow-sm p-4 flex items-center justify-between hover:shadow-md transition-shadow duration-300"
          >
            {/* Card Title */}
            <h3 className="text-sm font-medium text-gray-900">{card.title}</h3>

            {/* Arrow Icon */}
            <span className="text-gray-500 text-xl font-bold">&rarr;</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default AboutHome;
