"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { LanguagesIcon } from "lucide-react";

const LanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "en", label: "English" },
    { code: "es", label: "Spanish" },
    { code: "fr", label: "French" },
    { code: "de", label: "German" },
    { code: "zh", label: "Chinese" },
  ];

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <div className="relative inline-block text-left">
      {/* Trigger Button */}
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 px-4 py-2 text-white "
      >
        <LanguagesIcon className="text-white" />
        <ChevronDown className="text-white" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
          <ul className="py-2">
            {languages.map((language) => (
              <li key={language.code}>
                <button
                  onClick={() =>
                    console.log(`Language selected: ${language.label}`)
                  }
                  className="block w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-100 focus:outline-none"
                >
                  {language.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
