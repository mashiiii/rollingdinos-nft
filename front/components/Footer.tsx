import React from "react";

export default function Footer() {
  return (
    <>
      <svg
        width="1900"
        height="110"
        viewBox="0 0 1900 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        <path
          d="M1900 110C1567.5 -39.01 322 -34.3046 0 110H1900Z"
          fill="#FFB77E"
        />
        <ellipse cx="600.5" cy="54.5" rx="86.5" ry="20.5" fill="#FDA878" />
      </svg>

      <footer id="footer" className="grid place-items-center md:bg-center">
        <a
          href="/"
          className="font-hand text-3xl text-purple-900 uppercase my-4"
        >
          Join now
        </a>
      </footer>
    </>
  );
}
