import React from "react";
import { FaDiscord, FaTwitter } from "react-icons/fa";

export default function SocialPill() {
  return (
    <aside className="fixed z-50 bottom-2 left-2 bg-red-300 rounded-full">
      <ul className="text-white text-3xl flex flex-col">
        <li className="p-3">
          <a href="#">
            <FaDiscord />
          </a>
        </li>
        <li className="p-3">
          <a href="#">
            <FaTwitter />
          </a>
        </li>
      </ul>
    </aside>
  );
}
