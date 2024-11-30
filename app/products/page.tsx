import React from "react";

import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Products - My Website",
    description: "Discover more about us.",
  };
}

const Products = () => {
  return <div>Products-Ready IT</div>;
};

export default Products;
