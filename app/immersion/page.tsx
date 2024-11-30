import React from "react";

import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Immersion-Ready IT - My Website",
    description: "Discover more about us.",
  };
}

const Immersion = () => {
  return <div>Immersion-Ready IT</div>;
};

export default Immersion;
