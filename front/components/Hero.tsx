import React from "react";
import toast from "react-hot-toast";
import Social from "./Social";

export default function Hero() {
  const handleMint = () => {
    toast.error("Minting is not available yet.", {
      style: {
        backgroundColor: "#367C78",
        borderRadius: "25px",
        color: "white",
      },
      iconTheme: {
        secondary: "#367C78",
        primary: "white",
      },
    });
  };
  return (
    <>
      {/* <img
        src="planets/planet1.svg"
        alt="Planet"
        className="absolute top-0 left-0 w-48 z-0 lg:w-64"
      /> */}
      <p className="font-spaceMono text-xl font-bold absolute top-5 left-1/3 text-white md:left-20 md:top-1/3 lg:left-24">
        HURRY UP
      </p>
      <section className="text-white relative z-10 w-screen h-screen flex flex-col justify-center">
        <h1 className="font-bangers text-7xl text-center md:text-left md:ml-20 lg:text-9xl">
          ROLLING <span className="text-yellow-400">DINOS</span>
        </h1>
        <button className="mint-button" onClick={handleMint}>
          MINT SOON
        </button>
      </section>
    </>
  );
}
