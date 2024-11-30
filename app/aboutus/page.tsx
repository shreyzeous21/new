import React from "react";

import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About Us - My Website",
    description: "Discover more about us.",
  };
}

const AboutUS = () => {
  return <div>AboutUS-Ready IT</div>;
};

export default AboutUS;
