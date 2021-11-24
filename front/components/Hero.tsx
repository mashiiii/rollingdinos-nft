import React from "react";

export default function Hero() {
  return (
    <section className="flex flex-col w-full mt-32 text-white min-h-screen items-center justify-center gap-5 bg-transparent md:flex-row md:mt-0">
      <div className="flex flex-col max-w-sm justify-center p-4 text-center">
        <h2 className="text-5xl font-extrabold font-hand">Rolling Dinos</h2>
        <h3 className="mt-2 mb-4 font-roboto font-extrabold text-xl">
          Keep an eye open - they're rolling your way
        </h3>
        <p className="font-roboto text-lg">
          Welcome to a collection of 10,000 Rolling Dinos NFTs - unique
          non-fungible tokens living on the Etherium blockchain. Dinosaurs are
          extinct, but they keep on rolling.
        </p>
      </div>
      <img src="hero-dino.webp" alt="Rolling dino" className=" md:max-w-md" />
    </section>
  );
}
