import React from "react";
import Hero from "./_components/Hero";
import DigitalPartner from "./_components/DigitalPartner";
import HoverImg from "./_components/HoverImg";

const Home = () => {
  return (
    <div className=" flex flex-col h-auto w-full">
      <Hero />
      <DigitalPartner />
      <HoverImg />
    </div>
  );
};

export default Home;
