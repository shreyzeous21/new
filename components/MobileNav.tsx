"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NavItem } from "@/types/nav";

interface MobileNavProps {
  navItems: NavItem[];
  navItemsSec: NavItem[];
}

export function MobileNav({ navItems, navItemsSec }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  const toggleSubMenu = (name: string) => {
    setActiveItem(activeItem === name ? null : name);
  };

  return (
    <div className="lg:hidden w-full">
      {/* Mobile header with logo and menu button */}
      <div className="flex justify-between items-center px-4 py-2 border-b w-full">
        <Link href="/" className="flex-shrink-0">
          <img
            src="https://www.grcooling.com/wp-content/uploads/grc-full-color-15-years.png"
            className="h-8 w-auto"
            alt="logo"
          />
        </Link>
        <button
          onClick={toggleMenu}
          className="p-2 text-gray-600 hover:text-gray-900"
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white w-screen">
          <div className="flex flex-col h-full overflow-y-auto">
            <div className="flex justify-between items-center p-4 border-b">
              <Link href="/" className="flex-shrink-0">
                <img
                  src="https://www.grcooling.com/wp-content/uploads/grc-full-color-15-years.png"
                  className="h-8 w-auto"
                  alt="logo"
                />
              </Link>
              <button
                onClick={toggleMenu}
                className="p-2 text-gray-600 hover:text-gray-900"
              >
                ✕
              </button>
            </div>

            <nav className="flex-1 p-4 overflow-y-auto">
              <div className="max-w-md mx-auto">
                {[...navItems, ...navItemsSec].map((item) => (
                  <div key={item.name} className="mb-2">
                    <div
                      className={`text-left p-3 flex justify-between items-center rounded-md ${
                        pathname === item.path
                          ? "bg-[#243865] text-white"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      <Link
                        href={item.path}
                        className="flex-1"
                        onClick={() => {
                          if (item.subLinks.length === 0) {
                            toggleMenu();
                          }
                        }}
                      >
                        {item.name}
                      </Link>
                      {item.subLinks.length > 0 && (
                        <button
                          onClick={() => toggleSubMenu(item.name)}
                          className="ml-2 p-1"
                        >
                          {activeItem === item.name ? "−" : "+"}
                        </button>
                      )}
                    </div>

                    {activeItem === item.name && item.subLinks.length > 0 && (
                      <div className="ml-4 mt-1 space-y-1 bg-gray-50 rounded-md">
                        {item.subLinks.map((subLink) => (
                          <Link
                            key={subLink.name}
                            href={subLink.path}
                            className="block p-3 text-sm hover:text-green-500"
                            onClick={toggleMenu}
                          >
                            {subLink.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
