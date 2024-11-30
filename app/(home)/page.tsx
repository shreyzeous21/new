import React from "react";
import Hero from "./_components/Hero";
import DigitalPartner from "./_components/DigitalPartner";
import HoverImg from "./_components/HoverImg";
import Tech from "./_components/Tech";
import AboutHome from "./_components/AboutHome";
import CareersHome from "./_components/CareersHome";
import BlogHome from "./_components/BlogHome";
import Overview from "./_components/Overview";
import Testimonial from "./_components/Testimonial";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <div className="">
        <Overview />
      </div>
      <div className="bg-[#243765]">
        <DigitalPartner />
      </div>
      <Tech />
      <HoverImg />
      <AboutHome />
      <CareersHome />
      <div className="bg-gray-100">
        <Testimonial />
      </div>
      <BlogHome />
    </div>
  );
};

export default Home;
