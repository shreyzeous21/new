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
    "/partners": [
      {
        name: "Our Network",
        path: "/partners/network",
        dropdownLinks: [
          { name: "Global Partners", path: "/partners/network/global" },
          { name: "Local Partners", path: "/partners/network/local" },
        ],
      },
      {
        name: "Opportunities",
        path: "/partners/opportunities",
        dropdownLinks: [
          { name: "Franchising", path: "/partners/opportunities/franchising" },
          {
            name: "Collaborations",
            path: "/partners/opportunities/collaborations",
          },
        ],
      },
    ],
    "/careers": [
      {
        name: "Jobs",
        path: "/careers/jobs",
        dropdownLinks: [
          { name: "Engineering", path: "/careers/jobs/engineering" },
          { name: "Marketing", path: "/careers/jobs/marketing" },
        ],
      },
      {
        name: "Internships",
        path: "/careers/internships",
        dropdownLinks: [
          { name: "Summer Internship", path: "/careers/internships/summer" },
          { name: "Winter Internship", path: "/careers/internships/winter" },
        ],
      },
    ],
    "/": [
      { name: "Driving", path: "/driving" },
      { name: "SBL", path: "/sbl" },
      { name: "Products", path: "/products" },
    ],
  };

  const activeSubNavKey = Object.keys(subNavLinks).find((key) =>
    pathname.startsWith(key)
  );
  const activeSubNav =
    subNavLinks[(activeSubNavKey as keyof typeof subNavLinks) || "/"];

  const isActive = (linkPath: string) => pathname === linkPath;

  const toggleDropdown = (index: number) => {
    setDropdownIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="lg:w-full h-auto flex lg:mx-auto  justify-center  w-full z-50">
      <div className="flex flex-row justify-start w-full ">
        {/* Logo Section */}
        <Link
          href={"/"}
          className="py-4 h-full bg-white flex items-center border-r-2"
        >
          <Image
            src={"/logo.png"}
            width={1000}
            height={1000}
            className="h-10 w-auto px-2"
            alt="logo"
          />
        </Link>

        <div className="flex flex-col w-full bg-[#6224ea] text-white">
          {/* Main Navigation */}
          <div className="h-full hidden lg:flex flex-row justify-between w-full items-center">
            <div className="flex justify-center space-x-3 w-auto">
              <Link
                href="/"
                className={`p-4 ${
                  isActive("/") ? "bg-white text-black" : "hover:underline"
                }`}
              >
                Home
              </Link>
              <Link
                href="/careers"
                className={`p-4 ${
                  pathname.startsWith("/careers")
                    ? "bg-white text-black"
                    : "hover:underline"
                }`}
              >
                Careers
              </Link>
              <Link
                href="/investors"
                className={`p-4 ${
                  pathname.startsWith("/investors")
                    ? "bg-white text-black"
                    : "hover:underline"
                }`}
              >
                Investors
              </Link>
              <Link
                href="/partners"
                className={`p-4 ${
                  pathname.startsWith("/partners")
                    ? "bg-white text-black"
                    : "hover:underline"
                }`}
              >
                Partners
              </Link>
            </div>

            <div className="flex justify-center space-x-3 w-auto">
              <Link
                href="/contact"
                className={`p-4 ${
                  isActive("/contact")
                    ? "bg-white text-black"
                    : "hover:underline"
                }`}
              >
                Contact
              </Link>
              <Link
                href="/user"
                className={`p-4 ${
                  isActive("/user") ? "bg-white text-black" : "hover:underline"
                }`}
              >
                <User />
              </Link>
              <Link
                href="/search"
                className={`p-4 ${
                  isActive("/search")
                    ? "bg-white text-black"
                    : "hover:underline"
                }`}
              >
                <Search />
              </Link>
            </div>
          </div>

          {/* Sub-navigation with Dropdowns */}
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
                  <div key={index} className="relative">
                    <button
                      onClick={() => toggleDropdown(index)}
                      className={`p-4 ${
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
                          className="absolute top-full left-0 w-64 bg-white text-black shadow-lg p-4 z-50"
                        >
                          <ul>
                            {link.dropdownLinks.map((dropdown, i) => (
                              <li key={i}>
                                <Link
                                  href={dropdown.path}
                                  className="block px-4 py-2 hover:bg-gray-100"
                                >
                                  {dropdown.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
