import React from "react";

const AboutHome = () => {
  const cards = [
    {
      title: "Diversity, Equity and Inclusion",
      link: "/diversity-equity-inclusion",
    },
    { title: "Ethics and Compliance", link: "/ethics-compliance" },
    {
      title: "Schneider Electric History",
      link: "/schneider-electric-history",
    },
    { title: "Buildings of the Future", link: "/buildings-of-the-future" },
    { title: "Industries of the Future", link: "/industries-of-the-future" },
    { title: "Innovation at the Edge", link: "/innovation-at-the-edge" },
    { title: "Alliance Partner Program", link: "/alliance-partner-program" },
    {
      title: "Artificial Intelligence Hub",
      link: "/artificial-intelligence-hub",
    },
  ];

  return (
    <div className="py-4 lg:w-full h-auto flex flex-col max-w-7xl lg:mx-auto mx-4 justify-center">
      {/* Section Title */}
      <h2 className="text-4xl font-bold mb-6">About Schneider Electric</h2>

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
