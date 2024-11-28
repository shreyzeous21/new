import React from "react";

import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Investors - My Website",
    description: "Discover more about us.",
  };
}

const Investors = () => {
  return <div>Investors</div>;
};

export default Investors;
