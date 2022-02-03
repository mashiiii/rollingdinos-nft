import React from "react";

const Header = () => {
  return (
    <header className="text-white fixed top-0 right-0 w-full p-4 z-10 bg-indigo-700 bg-opacity-80 flex justify-between font-bangers lg:py-6 lg:px-10">
      <h1 className="text-3xl">
        <a href="#">
          CRYPTO <span className="text-yellow-400">PUGS</span>
        </a>
      </h1>
      <ul className="flex gap-8 text-xl">
        <li className="nav-list-item">
          <a href="#roadmap">ROADMAP</a>
        </li>
        <li className="nav-list-item">
          <a href="#team">TEAM</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
