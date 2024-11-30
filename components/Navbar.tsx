"use client";
import { Search } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link"; // Import Link from Next.js
import { usePathname } from "next/navigation"; // Use for detecting current path
import { motion } from "framer-motion";

// Type definitions for nav item and sub-link
interface SubLink {
  name: string;
  path: string;
}

interface NavItem {
  name: string;
  path: string;
  subLinks: SubLink[];
}

const Navbar: React.FC = () => {
  // Data structure for main navigation and sub-links with paths
  const navItems: NavItem[] = [
    {
      name: "Home",
      path: "/", // Path for this item
      subLinks: [
        { name: "Compute Cooler. Run Smarter. Grow Faster", path: "/aboutus" },
      ],
    },
    {
      name: "Solutions",
      path: "/solutions", // Path for this item
      subLinks: [
        { name: "AI and Machine Learning", path: "/solutions/consulting" },
        { name: "Blockchain Computing", path: "/solutions/custom-software" },
        {
          name: "Enterprise / Cloud / Hyperscale",
          path: "/",
        },
        {
          name: "Edge",
          path: "/",
        },
        {
          name: "High-Performance Computing",
          path: "/",
        },
      ],
    },
    {
      name: "Products",
      path: "/products", // Path for this item
      subLinks: [
        { name: "ICEraQ®", path: "/" },
        { name: "ICEtank®", path: "/" },
        { name: "HashRaQ MAX®", path: "/" },
        { name: "HashTank®", path: "/" },
        { name: "ElectroSafe® Fluids", path: "/" },
        { name: "Systems Manager", path: "/" },
      ],
    },
    {
      name: "Immersion-Ready IT",
      path: "/immersion", // Path for this item
      subLinks: [
        { name: "Compute Cooler. Run Smarter. Grow Faster", path: "/aboutus" },
      ],
    },
    {
      name: "Partners",
      path: "/partners", // Path for this item
      subLinks: [
        {
          name: "ITE and Solutions Providers",
          path: "/",
        },
        {
          name: "GRC ElectroSafe® Fluid Partners",
          path: "/",
        },
      ],
    },
    {
      name: "Company",
      path: "/company", // Path for this item
      subLinks: [
        { name: "About GRC", path: "/" },
        { name: "Our Team", path: "/company/our-team" },
        { name: "Our Promise of Quality", path: "/company/quality-promise" },
        { name: "Careers", path: "/company/careers" },
      ],
    },
  ];

  const navItemsSec: NavItem[] = [
    {
      name: "Blog",
      path: "/contact", // Path for this item
      subLinks: [
        { name: "Compute Cooler. Run Smarter. Grow Faster", path: "/aboutus" },
      ],
    },
    {
      name: "Learning",
      path: "/contact", // Path for this item
      subLinks: [
        { name: "Compute Cooler. Run Smarter. Grow Faster", path: "/aboutus" },
      ],
    },
    {
      name: "Contact",
      path: "/contact", // Path for this item
      subLinks: [
        { name: "Compute Cooler. Run Smarter. Grow Faster", path: "/aboutus" },
      ],
    },
  ];

  // Using usePathname to track the current path
  const pathname = usePathname();

  return (
    <div className="h-auto lg:w-full lg:mx-auto mx-4 flex justify-center">
      <div className="w-full h-auto items-center flex flex-row justify-between">
        {/* Logo Section */}
        <div className="border-r h-full">
          <img
            src="https://www.grcooling.com/wp-content/uploads/grc-full-color-15-years.png"
            className="h-auto w-[20vw] py-3 px-2"
            alt="logo"
          />
        </div>

        {/* Main Navbar */}
        <div className="justify-center w-full flex h-auto flex-col">
          <div className="flex flex-row justify-between items-center bg-[#243865]">
            {/* Main Navigation */}
            <ul className="flex flex-row item-center w-full text-white">
              {navItems.map((item) => (
                <li
                  key={item.name}
                  className={`p-4 border-r border-[#3f5280] items-center ${
                    pathname === item.path ? "bg-white text-green-500" : ""
                  } cursor-pointer`}
                >
                  <Link href={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>

            {/* Utility Icons */}
            <ul className="flex flex-row  cursor-pointer items-center text-white">
              {navItemsSec.map((item) => (
                <li
                  key={item.name}
                  className={`p-4 border-r border-[#3f5280] ${
                    pathname === item.path ? "bg-white text-[#243865]" : ""
                  } cursor-pointer`}
                >
                  <Link href={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Submenu Section */}
          <div className="bg-white py-4">
            {navItems.map(
              (item) =>
                pathname === item.path &&
                item.subLinks.length > 0 && (
                  <ul
                    key={item.name}
                    className="flex flex-row gap-5 mx-2 transition-all duration-200"
                  >
                    {item.subLinks.map((subLink) => (
                      <li
                        key={subLink.name}
                        className="cursor-pointer text-sm hover:text-green-500 "
                      >
                        <Link href={subLink.path}>{subLink.name}</Link>
                      </li>
                    ))}
                  </ul>
                )
            )}
            {navItemsSec.map(
              (item) =>
                pathname === item.path &&
                item.subLinks.length > 0 && (
                  <ul
                    key={item.name}
                    className="flex flex-row gap-2 mx-2 transition-all duration-200"
                  >
                    {item.subLinks.map((subLink) => (
                      <li key={subLink.name} className="cursor-pointer ">
                        <Link href={subLink.path}>{subLink.name}</Link>
                      </li>
                    ))}
                  </ul>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
