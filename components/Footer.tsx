"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Share2,
} from "lucide-react";

// Define interfaces for the links and sections
interface SocialLink {
  name: string;
  icon: JSX.Element;
  color: string;
  hoverColor: string;
}

interface FooterLink {
  text: string;
  href: string;
}

interface CapabilitiesSection {
  title: string;
  links: { text: string; href: string }[];
}
interface EmpSection {
  title: string;
  links: { text: string; href: string }[];
}

const Footer = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  // Social links array
  const socialLinks: SocialLink[] = [
    {
      name: "Facebook",
      icon: <Facebook />,
      color: "text-blue-600",
      hoverColor: "hover:text-blue-600",
    },
    {
      name: "Twitter",
      icon: <Twitter />,
      color: "text-blue-500",
      hoverColor: "hover:text-blue-500",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin />,
      color: "text-blue-700",
      hoverColor: "hover:text-blue-700",
    },
    {
      name: "Instagram",
      icon: <Instagram />,
      color: "text-pink-500",
      hoverColor: "hover:text-pink-500",
    },
    {
      name: "Youtube",
      icon: <Youtube />,
      color: "text-red-600",
      hoverColor: "hover:text-red-600",
    },
    {
      name: "Threads",
      icon: <Share2 />,
      color: "text-[#2A65C1]",
      hoverColor: "hover:text-[#2A65C1]",
    },
  ];

  // Footer links array
  const footerLinks: FooterLink[] = [
    { text: "Contact Us", href: "/contact" },
    { text: "Disclaimer", href: "/disclaimer" },
    { text: "Privacy Statement", href: "/privacy" },
    { text: "Terms of Use", href: "/terms" },
    { text: "Sitemap", href: "/sitemap" },
    { text: "Raise a Grievance", href: "/grievance" },
  ];

  // Capabilities sections array
  const cap: CapabilitiesSection[] = [
    {
      title: "Capabilities",
      links: [
        { text: "AI", href: "/ai" },
        { text: "AI & Generative AI", href: "/ai-gi" },
        { text: "Cloud", href: "/" },
        { text: "Software", href: "/" },
      ],
    },
  ];
  const emp: EmpSection[] = [
    {
      title: "emp",
      links: [
        { text: "AI", href: "/ai" },
        { text: "AI & Generative AI", href: "/ai-gi" },
        { text: "Cloud", href: "/" },
        { text: "Software", href: "/" },
        { text: "AI", href: "/ai" },
        { text: "AI & Generative AI", href: "/ai-gi" },
        { text: "Cloud", href: "/" },
        { text: "Software", href: "/" },
        { text: "AI", href: "/ai" },
        { text: "AI & Generative AI", href: "/ai-gi" },
        { text: "Cloud", href: "/" },
        { text: "Software", href: "/" },
      ],
    },
  ];

  // Function to toggle the expanded section

  const handleToggle = (index: number) => {
    setExpandedSection((prevState) =>
      prevState === index.toString() ? null : index.toString()
    );
  };

  const handleToggle1 = (index: number) => {
    setExpandedSection((prevState) =>
      prevState === index.toString() ? null : index.toString()
    );
  };
  return (
    <footer className="h-auto text-white justify-center lg:mx-auto flex flex-col bg-[#0b0a23]">
      <div className="flex flex-col lg:mx-auto max-w-7xl mx-4 lg:w-full">
        {/* 1 - Home Link */}
        <Link href={"/"} className="font-semibold text-sm py-5">
          Home
        </Link>

        {/* 2 - Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
          {/* col 1 */}
          <div className="font-semibold text-xl">
            {cap.map((cap, index) => (
              <div key={index} className="mb-4">
                <h1
                  className="mb-2 cursor-pointer"
                  onClick={() => handleToggle(index)}
                >
                  {cap.title}
                </h1>
                <div
                  className={`flex flex-col ${
                    expandedSection === index.toString() ? "block" : "hidden"
                  } sm:block`}
                >
                  <ul>
                    {cap.links.map((link, linkIndex) => (
                      <Link key={linkIndex} href={link.href}>
                        <li className="py-1">{link.text}</li>
                      </Link>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          {/* col 1 */}

          {/* col 2 */}
          <div className="text-sm ">
            {emp.map((emp, index) => (
              <div key={index} className="mb-4 ">
                <h1
                  className="mb-2 text-xl"
                  onClick={() => handleToggle1(index)}
                >
                  {emp.title}
                </h1>
                <div
                  className={`flex flex-col ${
                    expandedSection === index.toString() ? "block" : "hidden"
                  } sm:block`}
                >
                  <ul>
                    {emp.links.map((link, linkIndex) => (
                      <Link key={linkIndex} href={link.href}>
                        <li className="py-1">{link.text}</li>
                      </Link>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          {/* col 2 */}

          {/* col 3 */}
          <div className="">
            <h1 className="mb-2 text-xl">Industries</h1>
            <div className="flex flex-col">
              <ul>
                <Link href={"/"}>
                  <li>AI</li>
                </Link>
                <Link href={"/"}>
                  <li>AI</li>
                </Link>
                <Link href={"/"}>
                  <li>AI</li>
                </Link>
              </ul>
            </div>
          </div>
          {/* col 3 */}

          {/* col 4 */}
          <div className="text-sm">
            <h1 className="mb-4  text-xl ">Ecosystem</h1>
            <h1 className="mb-2  text-xl">About</h1>
            <div className="flex flex-col">
              <ul>
                <Link href={"/"}>
                  <li>AI</li>
                </Link>
                <Link href={"/"}>
                  <li>AI</li>
                </Link>
                <Link href={"/"}>
                  <li>AI</li>
                </Link>
              </ul>
            </div>
          </div>
          {/* col 4 */}

          {/* col 5 */}
          <div className="text-sm">
            <h1 className="mb-2 text-[#0b0a23] text-xl">Capabilities</h1>
            <div className="flex flex-col">
              <ul>
                <Link href={"/"}>
                  <li>AI</li>
                </Link>
                <Link href={"/"}>
                  <li>AI</li>
                </Link>
                <Link href={"/"}>
                  <li>AI</li>
                </Link>
              </ul>
            </div>
          </div>
          {/* col 5 */}
        </div>
        {/* 2 - Capabilities Grid */}

        <hr className="border-t border-gray-300 my-4" />

        {/* 3 - Social Links */}
        <div className="flex flex-row justify-center py-3 gap-4 flex-wrap">
          {socialLinks.map((link) => (
            <span
              key={link.name}
              className={`text-xl rounded-full border-2 p-2 cursor-pointer ${link.hoverColor}`}
            >
              {link.icon}
            </span>
          ))}
        </div>
        {/* 3 */}

        {/* 4 - Footer Links */}
        <div className="flex flex-col text-gray-400 text-sm py-4 justify-center max-w-5xl mx-auto w-full">
          <div className="flex lg:flex-row flex-col justify-center items-center lg:justify-between gap-4">
            <span>Copyright © 2024 CXP Technologies</span>

            <div className="flex flex-wrap justify-center gap-2">
              {footerLinks.map((link, index) => (
                <span key={index} className="">
                  <a href={link.href} className="hover:text-blue-300">
                    {link.text}
                  </a>
                  {index < footerLinks.length - 1 && (
                    <span className="ml-2 lg:inline">/</span>
                  )}
                </span>
              ))}
            </div>
          </div>
          <div className="flex justify-center text-center py-4">
            <p>
              We use cookies on our site. Please read more about cookies policy
              here.
            </p>
          </div>
        </div>
        {/* 4 */}
      </div>
    </footer>
  );
};

export default Footer;
