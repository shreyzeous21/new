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
interface IndSection {
  title: string;
  links: { text: string; href: string }[];
}
interface AboutSection {
  title: string;
  links: { text: string; href: string }[];
}
interface ReSection {
  title: string;
  links: { text: string; href: string }[];
}
interface CareerSection {
  title: string;
  subTitle: string;
  href: string;
  links: { region: string; href: string }[];
}
interface GlobalSection {
  title: string;
  links: { region: string; href: string }[];
}

const Footer = () => {
  const [expend, setExpend] = useState(false);
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
      ],
    },
  ];

  const ind: IndSection[] = [
    {
      title: "Industries",
      links: [
        { text: "Aerospace and Defense", href: "/" },
        { text: "Automotive", href: "/" },
        { text: "Captive Business Services", href: "/" },
        { text: "Consumer Goods", href: "/" },
        { text: "Energy and Utilities", href: "/" },
        { text: "Life Sciences and Healthcare", href: "/" },
        { text: "Manufacturing", href: "/" },
        { text: "Mining and Natural Resources", href: "/" },
        { text: "Oil and Gas", href: "/" },
        { text: "Public Sector", href: "/" },
        { text: "Retail", href: "/" },
        { text: "Technology", href: "/" },
        { text: "Telecom Media and Entertainment Services", href: "/" },
        { text: "Travel, Transport, Logistics & Hospitality", href: "/" },
        { text: "Financial Services", href: "/" },
        { text: "Banking", href: "/" },
        { text: "Capital Markets", href: "/" },
        { text: "Financial Crime Compliance and Risk", href: "/" },
        { text: "Fintech", href: "/" },
        { text: "Insurance", href: "/" },
      ],
    },
  ];
  const about: AboutSection[] = [
    {
      title: "About Us",
      links: [
        { text: "About Us Overview", href: "/" },
        { text: "Analyst Recognitions", href: "/" },
        { text: "Annual Report 2024", href: "/" },
        { text: "Awards and Recognition", href: "/" },
        { text: "Code of Business Ethics and Conduct", href: "/" },
        { text: "Corporate Social Responsibility", href: "/" },
        { text: "Diversity, Equity and Inclusion", href: "/" },
        { text: "Global Presence", href: "/" },
        { text: "Investor Relations", href: "/" },
        { text: "Leadership", href: "/" },
        { text: "Newsroom", href: "/" },
        { text: "Privacy Trust Center", href: "/" },
        { text: "Strategic Alliances", href: "/" },
        { text: "Supercharging Progress", href: "/" },
        { text: "Sustainability", href: "/" },
        { text: "Sustainability Report 2024", href: "/" },
      ],
    },
  ];
  const res: ReSection[] = [
    {
      title: "Resources",
      links: [
        { text: "Thread and insights", href: "/" },
        { text: "Case Studies", href: "/" },
        { text: "Event adn webinars", href: "/" },
      ],
    },
  ];

  const careers: CareerSection[] = [
    {
      title: "Careers",
      href: "/",
      subTitle: "Careers Overview",
      links: [
        {
          region: "Americas",
          href: "/americas",
        },
        {
          region: "Asia Pacific",
          href: "/asia-pacific",
        },
        {
          region: "Europe",
          href: "/europe",
        },
        {
          region: "India",
          href: "/india",
        },
      ],
    },
  ];

  const globalPresence: GlobalSection[] = [
    {
      title: "Global",
      links: [
        {
          region: "Americas",
          href: "/global-presence/americas",
        },
        {
          region: "EMEA",
          href: "/global-presence/emea",
        },
        {
          region: "APAC",
          href: "/global-presence/apac",
        },
      ],
    },
  ];

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
                <h1 className="mb-2">{cap.title}</h1>
                <ul>
                  {cap.links.map((link, linkIndex) => (
                    <Link key={linkIndex} href={link.href}>
                      <li className="py-1">{link.text}</li>
                    </Link>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* col 2 */}
          <div className="text-sm ">
            {emp.map((emp, index) => (
              <div key={index} className="mb-4 ">
                <h1 className="mb-2 text-xl text-[#0b0a23]">{emp.title}</h1>
                <ul>
                  {emp.links.map((link, linkIndex) => (
                    <Link key={linkIndex} href={link.href}>
                      <li className="">{link.text}</li>
                    </Link>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* col 3 */}
          <div className="text-sm ">
            {ind.map((ind, index) => (
              <div key={index} className="mb-4 ">
                <h1 className="mb-2 text-xl font-bold">{ind.title}</h1>
                <ul>
                  {ind.links.map((link, linkIndex) => (
                    <Link key={linkIndex} href={link.href}>
                      <li className="">{link.text}</li>
                    </Link>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* col 4 */}
          <div className="text-sm ">
            <Link href={"/eco"} className="font-bold text-xl">
              Ecosystem
            </Link>
            {about.map((about, index) => (
              <div key={index} className="mb-4 ">
                <h1 className="mb-2 text-xl font-bold">{about.title}</h1>
                <ul>
                  {about.links.map((link, linkIndex) => (
                    <Link key={linkIndex} href={link.href}>
                      <li className="">{link.text}</li>
                    </Link>
                  ))}
                </ul>
              </div>
            ))}
            {res.map((res, index) => (
              <div key={index} className="mb-4 ">
                <h1 className="mb-2 text-xl font-bold">{res.title}</h1>
                <ul>
                  {res.links.map((link, linkIndex) => (
                    <Link key={linkIndex} href={link.href}>
                      <li className="">{link.text}</li>
                    </Link>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* col 5 */}
          <div className="text-sm ">
            <div className="flex flex-col gap-10">
              <div>
                {careers.map((careers, index) => (
                  <div key={index} className="mb-4 ">
                    <h1 className="mb-2 text-xl font-bold">{careers.title}</h1>
                    <h2 className="font-semibold mb-2">{careers.subTitle}</h2>
                    <ul>
                      {careers.links.map((link, linkIndex) => (
                        <Link key={linkIndex} href={link.href}>
                          <li className="">{link.region}</li>
                        </Link>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="">
                {globalPresence.map((globalPresence, index) => (
                  <div key={index} className="mb-4">
                    <h1 className="mb-2 font-bold text-xl">
                      {globalPresence.title}
                    </h1>
                    <ul>
                      {globalPresence.links.map((link, linkIndex) => (
                        <Link key={linkIndex} href={link.href}>
                          <li className="py-1">{link.region}</li>
                        </Link>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
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

        {/* 4 - Footer Links */}
        <div className="flex flex-col text-gray-400 text-sm py-4 justify-center max-w-5xl mx-auto w-full">
          <div className="flex lg:flex-row flex-col items-center justify-center lg:gap-10 gap-4">
            <span>Copyright © 2024 CXP Technologies</span>

            <div className="flex flex-wrap justify-center gap-2">
              {footerLinks.map((link, index) => (
                <span key={index}>
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
      </div>
    </footer>
  );
};

export default Footer;
