import React from "react";
import Hero from "./_components/Hero";
import DigitalPartner from "./_components/DigitalPartner";
import HoverImg from "./_components/HoverImg";
import Tech from "./_components/Tech";
import AboutHome from "./_components/AboutHome";
import CareersHome from "./_components/CareersHome";
import BlogHome from "./_components/BlogHome";

const Home = () => {
  return (
    <div className=" flex flex-col h-auto w-full">
      <Hero />
      <DigitalPartner />
      <HoverImg />
      <Tech />
      <AboutHome />
      <CareersHome />
      <BlogHome />
    </div>
  );
};

export default Home;
