import React from "react";

import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Company - My Website",
    description: "Discover more about us.",
  };
}

const Company = () => {
  return <div>Company</div>;
};

export default Company;
