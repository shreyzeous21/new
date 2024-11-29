import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

const Testimonial = () => {
  return (
    <div className="bg-gradient-to-r from-green-500 to-blue-900 py-12 mx-auto h-auto items-center gap-4 justify-center w-full flex flex-col">
      <h2 className="text-4xl font-bold text-white ">Testimonials</h2>
      <div className="bg-white w-1/2 rounded-md shadow-md flex flex-col gap-8 p-10 justify-center h-[60vh]">
        <Quote className="h-12 w-12" />
        <p className="text-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est et
          fugiat, laborum veniam tempora quaerat ullam enim eos temporibus
          commodi odit id. Veritatis, provident dolores? Quis voluptatum
          voluptatem earum rerum.
        </p>
        <div className="items-center flex gap-5 flex-row">
          <img
            src="/logo.png"
            alt=""
            className="h-[12vh] w-[5vw] object-contain rounded-md"
          />
          <span className="flex flex-col">
            <h1 className="text-xl font-semibold">Dr Shrey</h1>
            <p className="text-sm">designation</p>
          </span>
        </div>
      </div>
      {/* Navigation Buttons */}
      <div className="flex items-center gap-4">
        {/* Left Button */}
        <button className="bg-white border border-gray-300 rounded-md p-3 shadow hover:shadow-lg flex items-center justify-center">
          <ChevronLeft className="h-6 w-6 text-gray-600" />
        </button>

        {/* Right Button */}
        <button className="bg-white border border-gray-300 rounded-md p-3 shadow hover:shadow-lg flex items-center justify-center">
          <ChevronRight className="h-6 w-6 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
