"use client";
import Link from "next/link";
import React from "react";
import { Facebook, Twitter, Linkedin } from "lucide-react";

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
  // const [expend, setExpend] = useState(false);
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
  ];

  // Footer links array
  const footerLinks: FooterLink[] = [
    { text: "Privacy Policy", href: "/" },
    { text: "Terms of Use", href: "/terms" },
    { text: "Legal", href: "/" },
  ];

  const cap: CapabilitiesSection[] = [
    {
      title: "Partners",
      links: [
        { text: "ITE & Solutions Provider Partners", href: "/" },
        { text: "ElectroSafe Fluid Partner Program", href: "/" },
      ],
    },
  ];

  const ind: IndSection[] = [
    {
      title: "Solutions",
      links: [
        { text: "AI and Machine Learning", href: "/" },
        { text: "Blockchain Computing", href: "/" },
        { text: "Enterprise / Cloud / Hyperscale", href: "/" },
        { text: "Edge", href: "/" },
        { text: "High-Performance Computing", href: "/" },
      ],
    },
  ];
  const about: AboutSection[] = [
    {
      title: "Products",
      links: [
        { text: "ICEraQ®", href: "/" },
        { text: "ICEtank®", href: "/" },
        { text: "HashRaQ® MAX", href: "/" },
        { text: "HashTank®", href: "/" },
        { text: "ElectroSafe® Fluids", href: "/" },
        { text: "Systems Manager", href: "/" },
        { text: "Server Compatibility", href: "/" },
      ],
    },
  ];
  const res: ReSection[] = [
    {
      title: "Resources",
      links: [
        { text: "Support", href: "/" },
        { text: "Blog Library", href: "/" },
        { text: "Learning Center", href: "/" },
        { text: "Contact", href: "/" },
        { text: "Customer Login", href: "/" },
      ],
    },
  ];

  const careers: CareerSection[] = [
    {
      title: "News",
      href: "/",
      subTitle: "News / Events",
      links: [
        {
          region: "Events",
          href: "/americas",
        },
        {
          region: "Press",
          href: "/asia-pacific",
        },
        {
          region: "newsletter",
          href: "/europe",
        },
      ],
    },
  ];

  const globalPresence: GlobalSection[] = [
    {
      title: "Company",
      links: [
        {
          region: "About GRC",
          href: "/",
        },
        {
          region: "Our Team",
          href: "/",
        },
        {
          region: "Our Promise of Quality",
          href: "/",
        },
      ],
    },
  ];

  return (
    <footer className="h-auto text-black justify-center lg:mx-auto flex flex-col bg-gray-100">
      <div className="flex flex-col lg:mx-auto max-w-7xl mx-4 lg:w-full">
        {/* 1 - Home Link */}
        <Link href={"/"} className="font-semibold text-sm py-5">
          Home
        </Link>

        {/* 2 - Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {/* col 1 */}
          <div className="">
            <div className="bg-black h-1/2"></div>
            {cap.map((cap, index) => (
              <div key={index} className="mb-4">
                <h1 className="mb-2 font-semibold text-xl">{cap.title}</h1>
                <ul>
                  {cap.links.map((link, linkIndex) => (
                    <Link key={linkIndex} href={link.href}>
                      <li className="py-1 hover:text-[#6cbd45]">{link.text}</li>
                    </Link>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* col 2 */}
          {/* <div className="text-sm ">
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
          </div> */}

          {/* col 3 */}
          <div className="text-sm ">
            {ind.map((ind, index) => (
              <div key={index} className="mb-4 ">
                <h1 className="mb-2 text-xl font-bold">{ind.title}</h1>
                <ul>
                  {ind.links.map((link, linkIndex) => (
                    <Link key={linkIndex} href={link.href}>
                      <li className="hover:text-[#6cbd45]">{link.text}</li>
                    </Link>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* col 4 */}
          <div className="text-sm ">
            <Link href={"/eco"} className="font-bold text-xl">
              Customers
            </Link>
            {about.map((about, index) => (
              <div key={index} className="mb-4 ">
                <h1 className="mb-2 text-xl font-bold">{about.title}</h1>
                <ul>
                  {about.links.map((link, linkIndex) => (
                    <Link key={linkIndex} href={link.href}>
                      <li className="hover:text-[#6cbd45]">{link.text}</li>
                    </Link>
                  ))}
                </ul>
              </div>
            ))}
            <hr className="border border-blue-900  " />
            {res.map((res, index) => (
              <div key={index} className="my-4 ">
                <h1 className="mb-2 text-xl font-bold">{res.title}</h1>
                <ul>
                  {res.links.map((link, linkIndex) => (
                    <Link key={linkIndex} href={link.href}>
                      <li className="hover:text-[#6cbd45]">{link.text}</li>
                    </Link>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* col 5 */}
          <div className="text-sm ">
            <div className="flex flex-col gap-2">
              <div>
                {careers.map((careers, index) => (
                  <div key={index} className="mb-4 ">
                    <h1 className="mb-2 text-xl font-bold">{careers.title}</h1>
                    <h2 className="font-semibold mb-2">{careers.subTitle}</h2>
                    <ul>
                      {careers.links.map((link, linkIndex) => (
                        <Link key={linkIndex} href={link.href}>
                          <li className="hover:text-[#6cbd45]">
                            {link.region}
                          </li>
                        </Link>
                      ))}
                    </ul>
                  </div>
                ))}
                <hr className="border border-blue-900" />
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
                          <li className="py-1 hover:text-[#6cbd45]">
                            {link.region}
                          </li>
                        </Link>
                      ))}
                    </ul>
                  </div>
                ))}
                <hr className="border border-blue-900 " />
              </div>
            </div>
          </div>
        </div>
        {/* 2 - Capabilities Grid */}
        <div className="py-5 text-sm gap-4 flex justify-center flex-col">
          <p className="">
            Green Revolution Cooling, Inc. (“GRC”) believes this information to
            be accurate; however, GRC does not make any representation or
            warranty, express or implied, as to the accuracy or completeness of
            any such information and shall have no liability for the
            consequences of the use of such information.
          </p>
        </div>

        <hr className="border-t border-blue-900 my-4" />

        {/* 3 - Social Links */}
        <div className="flex flex-row justify-center py-3 gap-4 flex-wrap">
          {socialLinks.map((link) => (
            <span
              key={link.name}
              className={`text-xl rounded-full border-2 p-2 hover:bg-blue-900 cursor-pointer hover:text-white`}
            >
              {link.icon}
            </span>
          ))}
        </div>

        {/* 4 - Footer Links */}
        <div className="flex flex-col  text-sm py-4 justify-center max-w-5xl mx-auto w-full">
          <div className="flex lg:flex-row flex-col items-center justify-center lg:gap-10 gap-4">
            <div className="flex flex-wrap justify-center gap-2">
              {footerLinks.map((link, index) => (
                <span key={index}>
                  <a href={link.href} className="hover:text-[#6cbd45]">
                    {link.text}
                  </a>
                  {index < footerLinks.length - 1 && (
                    <span className="ml-2 lg:inline">/</span>
                  )}
                </span>
              ))}
            </div>
          </div>
          <div className="flex justify-center flex-col gap-2 text-center py-4">
            <p>
              We use cookies on our site. Please read more about cookies policy
              here.
            </p>
            <p>
              ©2024 GRC, Green Revolution Cooling, and The Immersion Cooling
              Authority are each registered trademarks of Green Revolution
              Cooling, Inc.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
