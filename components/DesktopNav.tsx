/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavItem } from "@/types/nav";

interface DesktopNavProps {
  navItems: NavItem[];
  navItemsSec: NavItem[];
}

export function DesktopNav({ navItems, navItemsSec }: DesktopNavProps) {
  const pathname = usePathname();

  return (
    <div className="hidden lg:flex h-auto w-full  justify-center">
      <div className="w-full h-auto  items-center flex flex-row justify-between">
        <div className="border-r h-full">
          <img
            src="https://www.grcooling.com/wp-content/uploads/grc-full-color-15-years.png"
            className="h-auto w-[20vw] py-3 px-2"
            alt="logo"
          />
        </div>

        <div className="justify-center w-full  flex h-auto flex-col">
          <div className="flex flex-row justify-between items-center bg-[#243865]">
            <ul className="flex flex-row items-center w-full text-white">
              {navItems.map((item) => (
                <li
                  key={item.name}
                  className={`p-4 border-r border-[#3f5280] items-center ${
                    pathname === item.path ? "bg-white text-green-500" : ""
                  }`}
                >
                  <Link href={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>

            <ul className="flex flex-row items-center text-white">
              {navItemsSec.map((item) => (
                <li
                  key={item.name}
                  className={`p-4 border-r border-[#3f5280] ${
                    pathname === item.path ? "bg-white text-[#243865]" : ""
                  }`}
                >
                  <Link href={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white py-4">
            {[...navItems, ...navItemsSec].map(
              (item) =>
                pathname === item.path &&
                item.subLinks.length > 0 && (
                  <ul
                    key={item.name}
                    className="flex flex-row flex-wrap gap-5 mx-2 transition-all duration-200"
                  >
                    {item.subLinks.map((subLink) => (
                      <li
                        key={subLink.name}
                        className="text-sm hover:text-green-500"
                      >
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
}
