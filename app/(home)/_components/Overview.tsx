/* eslint-disable @next/next/no-img-element */
import { ArrowUpRight } from "lucide-react";
import React from "react";

const Overview = () => {
  return (
    <div className="bg-white h-full lg:mx-auto lg:w-full mx-4 max-w-6xl py-16 flex flex-col">
      <div className="flex lg:flex-row flex-col justify-center items-center w-full mx-auto  gap-4 ">
        <div
          className="lg:w-1/2 w-full text-left gap-3 mx-5 flex flex-col h-full
        "
        >
          <h2 className="text-4xl text-[#243765] font-semibold">
            No One Cools Data Centers Like GRC
          </h2>
          <p className=" text-black text-lg">
            That’s the cold truth. No other company has the history, global
            presence or expertise in liquid immersion cooling that we do. GRC
            has been breaking through limitations and setting new standards of
            data center cooling and efficiency for over a decade, providing
            patented technology that increases performance, enhances
            sustainability, and optimizes TCO.
          </p>
          <button className="flex hover:text-[#69bf3c] ">
            Learn more <ArrowUpRight className="inline" />
          </button>
        </div>
        <div className="lg:w-1/2  h-auto">
          <img src="/overview.jpg" alt="" className="rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Overview;
