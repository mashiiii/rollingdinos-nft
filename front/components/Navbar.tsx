import React, { useState } from "react";

type NavBarProps = {
  isNavOpen: boolean;
  setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Navbar({ isNavOpen, setIsNavOpen }: NavBarProps) {
  return (
    <nav
      className={`transition-transform ease-in-out duration-500 font-hand text-yellow-400 fixed top-0 right-0 p-4 h-full w-full bg-gray-800 bg-opacity-90 md:bg-transparent md:translate-x-0 md:relative md:p-0 md:my-auto md:w-auto ${
        isNavOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <ul className="flex flex-col justify-center text-center gap-10 h-full p-4 md:flex-row md:ml-auto">
        <li className="text-2xl">
          <a href="#roadmap" onClick={() => setIsNavOpen(false)}>
            Roadmap
          </a>
        </li>
        <li className="text-2xl">
          <a href="#rarity" onClick={() => setIsNavOpen(false)}>
            Rarity
          </a>
        </li>
        <li className="text-2xl">
          <a href="#faq" onClick={() => setIsNavOpen(false)}>
            FAQ
          </a>
        </li>
      </ul>
    </nav>
  );
}
