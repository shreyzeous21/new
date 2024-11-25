import Image from "next/image";
import React from "react";

const HoverImg = () => {
  return (
    <div className="py-4 w-full h-auto flex mx-auto justify-center">
      <div className="w-full h-auto flex flex-col sm:flex-row  mx-auto">
        {[
          {
            src: "/img1.png",
            alt: "img-1",
            head: "Ranked #1",
            text: "shrey sadhukhan is a good boy",
            link: "https://example1.com",
          },
          {
            src: "/img2.png",
            alt: "img-2",
            head: "2024 Q3 Results",
            text: "sadhukhaehheheehheheheheh",
            link: "https://example2.com",
          },
          {
            src: "/img3.png",
            alt: "img-3",
            head: "Explore More",
            text: "ebdcj",
            link: "https://example3.com",
          },
          {
            src: "/img3.png",
            alt: "img-3",
            head: "Explore More",
            text: "random",
            link: "https://example4.com",
          },
        ].map((image, index) => (
          <div
            key={index}
            className="relative w-full sm:w-1/3 h-[200px] sm:h-[300px] group  overflow-hidden"
          >
            {/* Image */}
            <Image
              src={image.src}
              layout="fill"
              objectFit="cover"
              alt={image.alt}
              className="transition-transform duration-300 group-hover:scale-110"
            />

            {/* Text and Link Container */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-4">
              <h2 className="text-white text-lg font-semibold">{image.head}</h2>

              {/* Text that slides up from bottom */}
              <p className="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                {image.text}
              </p>

              {/* Learn More Link */}
              <a
                href={image.link} // Use dynamic link here
                target="_blank" // Optional: open in new tab
                className="text-blue-400 hover:text-blue-300 text-sm underline mt-2"
              >
                Learn more →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HoverImg;
