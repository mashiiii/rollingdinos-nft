import React from "react";
import toast from "react-hot-toast";

export default function Hero() {
  const handleMint = () => {
    toast.error("Minting is not available yet.", {
      style: {
        backgroundColor: "#FBBF24",
        borderRadius: "25px",
        color: "#8B5CF6",
      },
      iconTheme: {
        secondary: "#FBBF24",
        primary: "#8B5CF6",
      },
    });
  };
  return (
    <>
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
