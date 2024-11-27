import Image from "next/image";
import React from "react";
import { ArrowRight } from "lucide-react";

const HoverImg = () => {
  return (
    <div className="py-4 w-full h-auto flex mx-auto justify-center">
      <div className="w-full h-auto flex flex-col sm:flex-row mx-auto">
        {[
          {
            src: "/img1.png",
            alt: "img-1",
            head: "Increase Performance",
            text: "Immersion cooling eliminates conventional power-intensive air-cooling infrastructure, transforming your data center density by providing up to 368 kW of cooling per ICEraQ system (up to 2,200 W/sq.ft.!). Servers converted for immersion also consume an average of 11% less energy.",
            link: "#",
          },
          {
            src: "/img2.webp",
            alt: "img-2",
            head: "Enhance Sustainability",
            text: "At GRC sustainability has been a focus since day one, and our new Series 10 system is our `greenest` system yet. With a pPUE of <1.03 it can reduce data center power consumption dedicated to cooling by as much as 90%, dramatically reducing water use and carbon emissions associated with power consumption as well.",
            link: "#",
          },
          {
            src: "/img3.webp",
            alt: "img-3",
            head: "Optimize TCO",
            text: "Work the numbers and see how immersion cooling works harder for you. When compared with conventional air-cooled data centers, immersion cooling cuts power consumption for IT cooling by up to 90%, decreases CapEx by cutting back on costly air-cooling infrastructure, and drives significant OpEx savings directly to the bottom line.",
            link: "#",
          },
          {
            src: "/img4.webp",
            alt: "img-4",
            head: "Exceeding Expectations for Immersion Cooling Around the World.",
            text: "",
            link: "#",
          },
        ].map((image, index) => (
          <div
            key={index}
            className="relative w-full sm:w-1/4 h-[200px] sm:h-[300px] group overflow-hidden cursor-pointer"
          >
            {/* Image */}
            <Image
              src={image.src}
              layout="fill"
              objectFit="cover"
              alt={image.alt}
              className="transition-transform duration-300 group-hover:scale-110"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Default Title */}
            <div className="absolute inset-0 p-6 flex flex-col justify-start z-10">
              <h2 className="text-2xl font-semibold text-white">
                {image.head}
              </h2>
            </div>

            {/* Hover Content */}
            <div className="absolute inset-x-0 bottom-0 h-full bg-green-500/90 translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0 p-6 flex flex-col justify-end z-20">
              <div className="text-white space-y-2">
                <h3 className="text-2xl font-semibold">{image.head}</h3>
                <p className="text-sm opacity-90">{image.text}</p>
                <a
                  href={image.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white hover:underline"
                >
                  Explore
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HoverImg;
