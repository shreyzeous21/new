"use client";
import { Search, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const pathname = usePathname();
  const [dropdownIndex, setDropdownIndex] = useState<number | null>(null);

  const subNavLinks = {
    "/company": [
      {
        name: "About GRC",
        path: "/investors/reports",
        dropdownLinks: [
          { name: "Annual Report", path: "/investors/reports/annual" },
          { name: "Quarterly Report", path: "/investors/reports/quarterly" },
        ],
      },
      {
        name: "Our Expert Team",
        path: "/investors/financials",
        dropdownLinks: [
          {
            name: "Balance Sheet",
            path: "/investors/financials/balance-sheet",
          },
          {
            name: "Income Statement",
            path: "/investors/financials/income-statement",
          },
        ],
      },
      {
        name: "Our Promise of Quality",
        path: "/investors/financials",
        dropdownLinks: [
          {
            name: "Balance Sheet",
            path: "/investors/financials/balance-sheet",
          },
          {
            name: "Income Statement",
            path: "/investors/financials/income-statement",
          },
        ],
      },
      {
        name: "Our Patents",
        path: "/investors/financials",
        dropdownLinks: [
          {
            name: "Balance Sheet",
            path: "/investors/financials/balance-sheet",
          },
          {
            name: "Income Statement",
            path: "/investors/financials/income-statement",
          },
        ],
      },
      {
        name: "Our Customers",
        path: "/investors/financials",
        dropdownLinks: [
          {
            name: "Balance Sheet",
            path: "/investors/financials/balance-sheet",
          },
          {
            name: "Income Statement",
            path: "/investors/financials/income-statement",
          },
        ],
      },
      {
        name: "Careers at GRC",
        path: "/investors/financials",
        dropdownLinks: [
          {
            name: "Balance Sheet",
            path: "/investors/financials/balance-sheet",
          },
          {
            name: "Income Statement",
            path: "/investors/financials/income-statement",
          },
        ],
      },
    ],

    "/partners": [
      {
        name: "ITE and Solutions Providers",
        path: "/investors/reports",
        dropdownLinks: [
          { name: "Annual Report", path: "/investors/reports/annual" },
          { name: "Quarterly Report", path: "/investors/reports/quarterly" },
        ],
      },
      {
        name: "GRC ElectroSafe® Fluid Partners",
        path: "/investors/financials",
        dropdownLinks: [
          {
            name: "Balance Sheet",
            path: "/investors/financials/balance-sheet",
          },
          {
            name: "Income Statement",
            path: "/investors/financials/income-statement",
          },
        ],
      },
    ],
    "/investors": [
      {
        name: "Reports",
        path: "/investors/reports",
        dropdownLinks: [
          { name: "Annual Report", path: "/investors/reports/annual" },
          { name: "Quarterly Report", path: "/investors/reports/quarterly" },
        ],
      },
      {
        name: "Financials",
        path: "/investors/financials",
        dropdownLinks: [
          {
            name: "Balance Sheet",
            path: "/investors/financials/balance-sheet",
          },
          {
            name: "Income Statement",
            path: "/investors/financials/income-statement",
          },
        ],
      },
    ],
    "/impressionIt": [
      // {
      //   name: "Our Network",
      //   path: "/partners/network",
      //   dropdownLinks: [
      //     { name: "Global Partners", path: "/partners/network/global" },
      //     { name: "Local Partners", path: "/partners/network/local" },
      //   ],
      // },
      // {
      //   name: "Opportunities",
      //   path: "/partners/opportunities",
      //   dropdownLinks: [
      //     { name: "Franchising", path: "/partners/opportunities/franchising" },
      //     {
      //       name: "Collaborations",
      //       path: "/partners/opportunities/collaborations",
      //     },
      //   ],
      // },
    ],
    "/products": [
      {
        name: "ICEraQ®",
        path: "/careers/jobs",
        dropdownLinks: [
          { name: "Engineering", path: "/careers/jobs/engineering" },
          { name: "Marketing", path: "/careers/jobs/marketing" },
        ],
      },
      {
        name: "ICEtank®",
        path: "/careers/internships",
        dropdownLinks: [
          { name: "Summer Internship", path: "/careers/internships/summer" },
          { name: "Winter Internship", path: "/careers/internships/winter" },
        ],
      },
      {
        name: "HashRaQ MAX®",
        path: "/careers/internships",
        dropdownLinks: [
          { name: "Summer Internship", path: "/careers/internships/summer" },
          { name: "Winter Internship", path: "/careers/internships/winter" },
        ],
      },
      {
        name: "HashTank®",
        path: "/careers/internships",
        dropdownLinks: [
          { name: "Summer Internship", path: "/careers/internships/summer" },
          { name: "Winter Internship", path: "/careers/internships/winter" },
        ],
      },
      {
        name: "ElectroSafe® Fluids",
        path: "/careers/internships",
        dropdownLinks: [
          { name: "Summer Internship", path: "/careers/internships/summer" },
          { name: "Winter Internship", path: "/careers/internships/winter" },
        ],
      },
      {
        name: "Systems Manager",
        path: "/careers/internships",
        dropdownLinks: [
          { name: "Summer Internship", path: "/careers/internships/summer" },
          { name: "Winter Internship", path: "/careers/internships/winter" },
        ],
      },
    ],
    "/solutions": [
      {
        name: "AI and Machine Learning",
        path: "/careers/jobs",
        dropdownLinks: [
          { name: "Engineering", path: "/careers/jobs/engineering" },
          { name: "Marketing", path: "/careers/jobs/marketing" },
        ],
      },
      {
        name: "Blockchain Computing",
        path: "/careers/internships",
        dropdownLinks: [
          { name: "Summer Internship", path: "/careers/internships/summer" },
          { name: "Winter Internship", path: "/careers/internships/winter" },
        ],
      },
      {
        name: "Enterprise / Cloud / Hyperscale",
        path: "/careers/internships",
        dropdownLinks: [
          { name: "Summer Internship", path: "/careers/internships/summer" },
          { name: "Winter Internship", path: "/careers/internships/winter" },
        ],
      },
      {
        name: "Edge",
        path: "/careers/internships",
        dropdownLinks: [
          { name: "Summer Internship", path: "/careers/internships/summer" },
          { name: "Winter Internship", path: "/careers/internships/winter" },
        ],
      },
      {
        name: "High-Performance Computing",
        path: "/careers/internships",
        dropdownLinks: [
          { name: "Summer Internship", path: "/careers/internships/summer" },
          { name: "Winter Internship", path: "/careers/internships/winter" },
        ],
      },
    ],
    "/": [
      {
        name: "Driving",
        path: "/driving/jobs",
        dropdownLinks: [
          {
            name: "Driving Energy Innovation",
            text: "We have a bold vision for what energy can be–and with our technology and expertise, we can deliver on it.",
            path: "/careers/jobs/engineering",
          },
          { name: "Marketing", path: "/careers/jobs/marketing" },
          { name: "dw", path: "/careers/jobs/marketing" },
          { name: "Markewdding", path: "/careers/jobs/marketing" },
        ],
      },
      {
        name: "Sbl",
        path: "/driving/jobs",
        dropdownLinks: [
          {
            name: "Driving Energy Innovation",
            text: "We have a bold vision for what energy can be–and with our technology and expertise, we can deliver on it.",
            path: "/careers/jobs/engineering",
          },
          { name: "Marketing", path: "/careers/jobs/marketing" },
          { name: "dw", path: "/careers/jobs/marketing" },
          { name: "Markewdding", path: "/careers/jobs/marketing" },
        ],
      },
      { name: "Products", path: "/products" },
    ],
  };

  const activeSubNavKey = Object.keys(subNavLinks).find((key) =>
    pathname.startsWith(key)
  );
  const activeSubNav =
    subNavLinks[(activeSubNavKey as keyof typeof subNavLinks) || "/"];

  const isActive = (linkPath: string) => pathname === linkPath;

  // const handleMenuClick = (index: number) => {
  //   // Toggle the dropdown menu when a menu item is clicked
  //   if (dropdownIndex === index) {
  //     setDropdownIndex(null); // Close the dropdown if the same item is clicked again
  //   } else {
  //     setDropdownIndex(index); // Open the clicked dropdown
  //   }
  // };

  return (
    <div className="lg:w-full h-auto flex mx-5 lg:mx-auto justify-center w-full z-50 ">
      <div className="flex flex-row justify-start w-full">
        {/* Logo Section */}
        <Link
          href={"/"}
          className="py-4 h-full bg-white flex items-center border-r-2"
        >
          <Image
            src={
              "https://www.grcooling.com/wp-content/uploads/grc-full-color-15-years.png"
            }
            width={1000}
            height={1000}
            className="h-auto w-[20vw] px-2"
            alt="logo"
          />
        </Link>

        <div className="flex flex-col w-full bg-[#243865] text-white">
          {/* Main Navigation */}
          <div className="h-full hidden lg:flex flex-row justify-between w-full items-center">
            <div className="flex justify-center space-x-1 w-auto">
              <Link
                href="/"
                className={`p-4 ${isActive("/") ? "bg-white text-black" : ""}`}
              >
                Home
              </Link>
              <Link
                href="/solutions"
                className={`p-4 ${
                  pathname.startsWith("/solutions") ? "bg-white text-black" : ""
                }`}
              >
                Solutions
              </Link>
              <Link
                href="/products"
                className={`p-4 ${
                  pathname.startsWith("/products") ? "bg-white text-black" : ""
                }`}
              >
                Products
              </Link>
              <Link
                href="/impressionIt"
                className={`p-4 ${
                  pathname.startsWith("/impressionIt")
                    ? "bg-white text-black"
                    : ""
                }`}
              >
                Immersion-Ready IT
              </Link>
              <Link
                href="/partners"
                className={`p-4 ${
                  pathname.startsWith("/partners") ? "bg-white text-black" : ""
                }`}
              >
                Partners
              </Link>
              <Link
                href="/company"
                className={`p-4 ${
                  pathname.startsWith("/company") ? "bg-white text-black" : ""
                }`}
              >
                Company
              </Link>
            </div>

            <div className="flex justify-center space-x-3 w-auto">
              {/* <Link
                href="/contact"
                className={`p-4 ${
                  isActive("/contact") ? "bg-white text-black" : ""
                }`}
              >
                Contact
              </Link> */}
              <Link href={"/contact"} className="p-4">
                Contact
              </Link>
              <Link
                href="/user"
                className={`p-4 ${
                  isActive("/user") ? "bg-white text-black" : ""
                }`}
              >
                <User />
              </Link>
              <span className="p-4">
                <Search />
              </span>
            </div>
          </div>

          {/* Sub-navigation with Dropdowns */}
          {/* Render the full dropdown mega menu only on the home page */}
          {pathname === "/" ? (
            <div className="h-full lg:flex hidden flex-row justify-between bg-white text-black w-auto items-center">
              <div className="flex justify-center space-x-3 w-auto">
                {activeSubNav.map(
                  (
                    link: {
                      name: string;
                      path: string;
                      dropdownLinks?: { name: string; path: string }[];
                    },
                    index: number
                  ) => (
                    <div
                      key={index}
                      className="relative"
                      // onClick={() => handleMenuClick(index)}
                    >
                      <button
                        className={`p-4  text-sm  ${
                          isActive(link.path)
                            ? "bg-gray-100 text-blue-500 no-underline"
                            : "hover:no-underline"
                        }`}
                      >
                        {link.name}
                      </button>
                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {dropdownIndex === index && link.dropdownLinks && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute top-full flex mx-auto items-center left-0 w-[70vw] bg-white text-black shadow-lg p-6 z-50"
                          >
                            <div className="flex flex-row justify-start relative overflow-x-hidden  z-10 left-0 w-[80vw] h-[70vh] ">
                              {link.dropdownLinks.map((dropdown, i) => (
                                <div
                                  key={i}
                                  className="flex flex-col text-center"
                                >
                                  <Link
                                    href={dropdown.path}
                                    className="block  px-4 py-2 w-auto hover:bg-gray-100 whitespace-nowrap"
                                  >
                                    {dropdown.name}
                                  </Link>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                )}
              </div>
            </div>
          ) : (
            <div className="h-full lg:flex hidden flex-row justify-between bg-white text-black w-full items-center">
              <div className="flex justify-center space-x-3 w-auto">
                {activeSubNav.map(
                  (
                    link: {
                      name: string;
                      path: string;
                      dropdownLinks?: { name: string; path: string }[];
                    },
                    index: number
                  ) => (
                    <div
                      key={index}
                      className="relative"
                      // onMouseEnter={() => handleMenuClick(index)} // For non-home pages, keep mouseEnter logic
                    >
                      <button
                        className={`p-4 text-sm ${
                          isActive(link.path)
                            ? "bg-gray-200 text-black"
                            : "hover:underline"
                        }`}
                      >
                        {link.name}
                      </button>
                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {dropdownIndex === index && link.dropdownLinks && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute top-full flex mx-auto items-center left-0 w-auto bg-white text-black shadow-lg p-6 z-50"
                          >
                            <div className="grid grid-cols-1 gap-4 w-[12vw] items-center">
                              {link.dropdownLinks.map((dropdown, i) => (
                                <Link
                                  key={i}
                                  href={dropdown.path}
                                  className="block px-4 py-2 hover:bg-gray-100 whitespace-nowrap"
                                >
                                  {dropdown.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
