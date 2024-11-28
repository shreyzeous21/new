import React from "react";

import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Contact Us",
    description: "Discover more about us.",
  };
}

const Contact = () => {
  const cardData = [
    {
      title: "Speak With Sales",
      description: " Discuss your sales needs with our expert team.",
      link: "/sales",
    },
    {
      title: "Customer Support",
      description:
        "Need assistance? Our team is here to help you with any inquiries or issues.",
      link: "/support",
    },
    {
      title: "Product Feedback",
      description:
        "We value your feedback! Share your thoughts to help us improve.",
      link: "/feedback",
    },
    {
      title: "Speak With Sales",
      description: " Discuss your sales needs with our expert team.",
      link: "/sales",
    },
    {
      title: "Customer Support",
      description:
        "Need assistance? Our team is here to help you with any inquiries or issues.",
      link: "/support",
    },
    {
      title: "Product Feedback",
      description:
        "We value your feedback! Share your thoughts to help us improve.",
      link: "/feedback",
    },
  ];

  return (
    <div className="h-auto w-full mx-auto justify-center bg-gray-100 flex">
      <div className="container mx-auto flex flex-col justify-center w-full py-10">
        <h1 className="text-4xl text-blue-900 font-bold mb-6">
          Connect with us
        </h1>

        <div className="flex flex-col w-full py-10">
          <span className="text-lg mb-4">How can we help you?</span>
          <div className="container p-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 justify-around">
            {cardData.map((card, idx) => (
              <div
                key={idx}
                className="bg-white h-auto max-w-sm mx-auto group hover:bg-green-500 p-6 space-y-4 rounded-md shadow-md transition-all duration-300 flex flex-col justify-between"
                style={{ minHeight: "200px" }}
              >
                <div>
                  <h1 className="text-xl font-bold group-hover:text-white">
                    {card.title}
                  </h1>
                  <p className="text-sm text-gray-700 group-hover:text-white mt-2">
                    {card.description}
                  </p>
                </div>
                <div>
                  <a
                    href={card.link}
                    className="inline-block mt-4 text-sm font-semibold text-blue-600 group-hover:text-white"
                  >
                    Click here
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
