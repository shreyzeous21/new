import React from "react";

import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Products - My Website",
    description: "Discover more about us.",
  };
}

const Partners = () => {
  return <div>partners</div>;
};

export default Partners;
