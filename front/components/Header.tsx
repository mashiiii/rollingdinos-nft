import React, { useState } from "react";
import Navbar from "./Navbar";
import { Squash as Hamburger } from "hamburger-react";
import { useRouter } from "next/dist/client/router";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const router = useRouter();
  return (
    <header className="fixed md:absolute top-0 w-full flex content-center justify-between p-4 bg-transparent z-10">
      <img
        src="logo.webp"
        alt="Rolling dinos logo"
        height="99"
        width="122"
        className="w-30 h-28"
        onClick={() => router.push("/")}
      />
      <button className="z-10 text-green-300 md:hidden">
        <Hamburger
          toggled={isNavOpen}
          toggle={setIsNavOpen}
          rounded
          label="Show menu"
        />
      </button>
      <Navbar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
    </header>
  );
}
