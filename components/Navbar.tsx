"use client";
import { Globe, Search, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

const megaMenuData = {
  home: {
    imageSrc: "/logo.png",
    links: [
      { href: "/home/link1", text: "Home Link 1" },
      { href: "/home/link2", text: "Home Link 2" },
    ],
    links1: [
      { href: "/home/link1", text: "Home L1" },
      { href: "/home/link2", text: "Home k 2" },
    ],
  },
  careers: {
    imageSrc: "", // No image for careers
    links: [
      { href: "/careers/link1", text: "Careers Link 1" },
      { href: "/careers/link2", text: "Careers Link 2" },
    ],
    links1: [
      { href: "/home/link1", text: "Home L1" },
      { href: "/home/link2", text: "Home k 2" },
    ],
  },
  investors: {
    imageSrc: "/investors-image.png",
    links: [
      { href: "/investors/link1", text: "Investors Link 1" },
      { href: "/investors/link2", text: "Investors Link 2" },
    ],
  },
  partners: {
    imageSrc: "", // No image for partners
    links: [
      { href: "/partners/link1", text: "Partners Link 1" },
      { href: "/partners/link2", text: "Partners Link 2" },
    ],
  },
};

const Navbar = () => {
  const pathname = usePathname(); // Get the current route
  const [activeSubLink, setActiveSubLink] = useState<string | null>(null); // State to track active sub-link

  // Function to determine active state and styles
  const isActive = (path: string) => pathname === path;

  // Toggle the mega menu for a given sub-link
  const handleSubLinkClick = (link: string) => {
    if (activeSubLink === link) {
      setActiveSubLink(null); // Close mega menu if already active
    } else {
      setActiveSubLink(link); // Open mega menu for the selected sub-link
    }
  };

  return (
    <div className="lg:w-full hidden lg:flex lg:mx-auto mx-5 justify-between items-center h-full">
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

      {/* Navbar Section */}
      <div className="h-auto mx-auto w-full flex justify-center flex-col">
        {/* Top Navbar */}
        <div className="flex bg-[#6224ea] text-white text-lg flex-row justify-between items-center">
          {/* Left Section */}
          <ul className="flex flex-row gap-4">
            <li
              className={`${
                isActive("/")
                  ? "bg-white text-black py-3 px-4"
                  : "text-white py-2 px-4"
              }`}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className={`${
                isActive("/careers")
                  ? "bg-white text-black py-3 px-4"
                  : "text-white py-3 px-4"
              }`}
            >
              <Link href="/careers">Careers</Link>
            </li>
            <li
              className={`${
                isActive("/investors")
                  ? "bg-white text-black py-3 px-4"
                  : "text-white py-3 px-4"
              }`}
            >
              <Link href="/investors">Investors</Link>
            </li>
            <li
              className={`${
                isActive("/partners")
                  ? "bg-white text-black py-3 px-4"
                  : "text-white py-3 px-4"
              }`}
            >
              <Link href="/partners">Partners</Link>
            </li>
          </ul>

          {/* Right Section */}
          <ul className="flex flex-row gap-4 items-center">
            <li
              className={`${
                isActive("/contact")
                  ? "bg-white text-black py-3 px-4"
                  : "text-white py-3 px-4"
              }`}
            >
              <Link href="/contact">Contact</Link>
            </li>
            <li
              className={`${
                isActive("/user")
                  ? "bg-white text-black py-3 px-4"
                  : "text-white py-3 px-4"
              }`}
            >
              <Link href="/user">
                <User />
              </Link>
            </li>
            <li
              className={`${
                isActive("/language")
                  ? "bg-white text-black py-3 px-4"
                  : "text-white py-3 px-4"
              }`}
            >
              <Link href="/language">
                <Globe />
              </Link>
            </li>
            <li
              className={`${
                isActive("/search")
                  ? "bg-white text-black py-3 px-4"
                  : "text-white py-3 px-4"
              }`}
            >
              <Link href="/search">
                <Search />
              </Link>
            </li>
          </ul>
        </div>

        {/* Bottom Navbar with Sub-navigation */}
        <div className="flex text-lg flex-row justify-between items-center">
          <ul className="flex flex-row gap-4">
            {/* Sub-navigation for Home */}
            {isActive("/") && (
              <div className="flex flex-row gap-2">
                <span
                  className="py-2 px-4 text-gray-600 hover:text-black"
                  onClick={() => handleSubLinkClick("home")}
                >
                  Sub Link Home
                </span>
                <span
                  className="py-2 px-4 text-gray-600 hover:text-black"
                  onClick={() => handleSubLinkClick("home")}
                >
                  Sub Link Some 2
                </span>
              </div>
            )}

            {/* Sub-navigation for Careers */}
            {isActive("/careers") && (
              <div className="flex flex-row gap-2">
                <span
                  className="py-2 px-4 text-gray-600 hover:text-black"
                  onClick={() => handleSubLinkClick("careers")}
                >
                  Sub Link 1
                </span>
                <Link
                  href="/careers/sub2"
                  className="py-2 px-4 text-gray-600 hover:text-black"
                  onClick={() => handleSubLinkClick("careers")}
                >
                  Sub Link 2
                </Link>
              </div>
            )}

            {/* Sub-navigation for Investors */}
            {isActive("/investors") && (
              <div className="flex flex-row gap-2">
                <Link
                  href="/investors/sub1"
                  className="py-2 px-4 text-gray-600 hover:text-black"
                  onClick={() => handleSubLinkClick("investors")}
                >
                  Sub Link 1
                </Link>
                <Link
                  href="/investors/sub2"
                  className="py-2 px-4 text-gray-600 hover:text-black"
                  onClick={() => handleSubLinkClick("investors")}
                >
                  Sub Link 2
                </Link>
              </div>
            )}

            {/* Sub-navigation for Partners */}
            {isActive("/partners") && (
              <div className="flex flex-col gap-2">
                <Link
                  href="/partners/sub1"
                  className="py-2 px-4 text-gray-600 hover:text-black"
                  onClick={() => handleSubLinkClick("partners")}
                >
                  Sub Link 1
                </Link>
                <Link
                  href="/partners/sub2"
                  className="py-2 px-4 text-gray-600 hover:text-black"
                  onClick={() => handleSubLinkClick("partners")}
                >
                  Sub Link 2
                </Link>
              </div>
            )}
          </ul>
        </div>

        {/* Mega Menu - Only for Home */}
        {activeSubLink === "home" && megaMenuData[activeSubLink] && (
          <div className="grid w-auto  h-auto grid-cols-4 gap-4 mt-4 p-6">
            {/* Image Section 1 */}
            {megaMenuData[activeSubLink].imageSrc && (
              <div className="flex  justify-center items-center">
                <Image
                  src={megaMenuData[activeSubLink].imageSrc}
                  alt={`${activeSubLink} Image`}
                  width={500}
                  height={500}
                  className="w-full object-cover"
                />
              </div>
            )}
            {/* Links Section 1 */}
            <div className="flex flex-col gap-4">
              {megaMenuData[activeSubLink].links.map((link, index) => (
                <Link key={index} href={link.href} className="text-blue-700">
                  {link.text}
                </Link>
              ))}
            </div>
            {/* Image Section 2
            {megaMenuData[activeSubLink].imageSrc && (
              <div className="flex justify-center items-center">
                <Image
                  src={megaMenuData[activeSubLink].imageSrc}
                  alt={`${activeSubLink} Image`}
                  width={500}
                  height={500}
                  className="w-full object-contain"
                />
              </div>
            )} */}
            {/* Links Section 2 */}
            <div className="flex flex-col gap-4">
              {megaMenuData[activeSubLink].links1.map((link, index) => (
                <Link key={index} href={link.href} className="text-blue-700">
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
