import React from "react";

import { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

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
    <div className="h-screen w-full flex items-center justify-center bg-gray-100">
      <div className="container flex flex-col items-center justify-center">
        <h1 className="text-4xl text-blue-900 font-bold ">Connect with us</h1>
        <span className="text-lg mb-8">How can we help you?</span>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 justify-center">
          {cardData.map((card, idx) => (
            <div
              key={idx}
              className="bg-white max-w-sm group hover:bg-green-500 p-6 space-y-4 rounded-md shadow-md transition-all duration-300 flex flex-col justify-between items-center text-center"
              style={{ minHeight: "150px" }}
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
                  <button className="items-center flex ">
                    Learn more <ArrowUpRight />
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
