import React from "react";
import Hero from "./_components/Hero";
import DigitalPartner from "./_components/DigitalPartner";
import HoverImg from "./_components/HoverImg";
import Tech from "./_components/Tech";
import AboutHome from "./_components/AboutHome";
import CareersHome from "./_components/CareersHome";
import BlogHome from "./_components/BlogHome";
import Overview from "./_components/Overview";

const Home = () => {
  return (
    <div className=" flex flex-col h-auto w-full">
      <Hero />
      <div className="">
        <Overview />
      </div>
      <div className="bg-gray-200">
        <DigitalPartner />
      </div>
      <Tech />
      <HoverImg />
      <AboutHome />
      <CareersHome />
      <BlogHome />
    </div>
  );
};

export default Home;
