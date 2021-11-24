import React from "react";

export default function Rarity() {
  return (
    <>
      <svg
        width="1920"
        height="236"
        viewBox="0 0 1920 236"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        <g clip-path="url(#clip0_24_2)">
          <path d="M1920 134.5L0 119V0H1920V134.5Z" fill="#FFB77E" />
          <path
            d="M1920 128.057V233.615H617.5C994 74.0575 1599 45.5576 1920 128.057Z"
            fill="#F5A274"
          />
          <path
            d="M1920 157.599C1602.4 114.399 1293.67 192.599 1179 237.099H1920V157.599Z"
            fill="#FDA878"
          />
          <path
            d="M0 33.09V236H1304C992.041 -4.486 304.684 0.524126 0 33.09Z"
            fill="#FDA878"
          />
        </g>
        <defs>
          <clipPath id="clip0_24_2">
            <rect width="1920" height="236" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <section className="flex flex-col w-full min-h-screen" id="rarity">
        <h2 className="font-hand text-purple-900 text-3xl text-center">
          Rarity
        </h2>
      </section>
    </>
  );
}
