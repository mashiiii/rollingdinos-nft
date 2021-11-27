import React from "react";
import { FaDiscord, FaTwitter } from "react-icons/fa";

export default function Social() {
  return (
    <aside className="fixed bottom-3 md:top-1/2 md:-translate-y-1/2 md:bottom-auto right-3 z-50 text-white">
      <ul className="flex flex-col gap-4">
        <li className="rounded-full p-3 grid place-items-center bg-green-500 bg-opacity-40 cursor-pointer hover:bg-opacity-40 focus-visible:bg-opacity-40 transition duration-150">
          <FaDiscord className="w-7 h-7" />
        </li>
        <li className="rounded-full p-3 grid place-items-center bg-green-500 bg-opacity-40 cursor-pointer hover:bg-opacity-40 focus-visible:bg-opacity-40 transition duration-150">
          <FaTwitter className="w-7 h-7" />
        </li>
        <li className="rounded-full p-3 grid place-items-center bg-green-500 bg-opacity-40 cursor-pointer hover:bg-opacity-40 focus-visible:bg-opacity-40 transition duration-150">
          <img src="opensea.svg" alt="Opensea" className="w-7 h-7" />
        </li>
      </ul>
    </aside>
  );
}
