import Image from "next/image";
import React from "react";
import toast from "react-hot-toast";
import Angel from "../public/dinos/Angel.png";

export default function Roadmap() {
  const roadmap = [
    {
      title: "",
      percent: "",
      description: [
        "Phase 1: CryptoPug World &amp; La Puerca&quot; is the first phase of Harmony Ark Metaverse.",
      ],
    },
    {
      title: "",
      percent: "10%",
      description: [
        "Launch of official holder exclusive Rolling Crypto Pug merch shop.",
        "3 Rolling Crypto Pug NFTs giveaway for all Discord members.",
      ],
    },
    {
      title: "",
      percent: "25%",
      description: [
        "50% of all secondary royalty fees will be contributed to a community fund.",
        "3 Rolling Dino NFTs giveaway for all Discord members.",
      ],
    },
    {
      title: "",
      percent: "50%",
      description: [
        "Exclusive Rolling Dinos NFT holder meetup. Starting to plan in-person events in different places around the globe.",
      ],
    },
    {
      title: "",
      percent: "75%",
      description: [
        "5 ETH Giveaway - 1 ETH for 5 Rolling Dino holders each.",
        "Introducing the $ROLL token which can be obtained by staking a Rolling Dino NFT Holders will be able to mint 3d VX versions of their own Rolling Object along with a new VX Dino version using the $ROLL token!",
        "They will be playable in the metaverse giving lots of new possibilities such as special community events along with PvP which enables a play-to-earn mechanism and much more!",
      ],
    },
    {
      title: "",
      percent: "100%",
      description: [
        "$ 10.000 donation to endangered animals & protecting rainforests. Per minted Dino; we will plant 1 tree.",
        "Activation of unique irl utilities depending on your rolling object.",
        "A wild afterparty: For 7-days straight we are hosting huge giveaways for Dino holders.",
      ],
    },
  ];

  const handlePhaseTwo = () => {
    toast.error("Phase 2 comming soon.", {
      style: {
        backgroundColor: "#4338CA",
        borderRadius: "25px",
        color: "#FBBF24",
      },
      iconTheme: {
        secondary: "#4338CA",
        primary: "#FBBF24",
      },
    });
  };
  return (
    <>
      {/*<img
        className="w-full -mb-px"
        src="/sections/roadmap-top.svg"
        alt="Planet"
      />*/}
      <section className="min-h-screen min-w-full grid place-items-center roadmap font-bangers pb-10 md:pb-12 lg:pb-20 xl:pb-0">
        <h2 className="text-blue-600/100 text-4xl grid place-items-center mb-10 xl:text-6xl">
          <p>KEEP AN EYE OPEN -</p>
          <p>THEY ARE ROLLING YOUR WAY</p>
        </h2>
        <div className="md:flex relative">
          <div className="hidden xl:block absolute translate-y-10 -translate-x-32 z-1">
            <Image
              src={Angel}
              width={300}
              height={300}
              placeholder="blur"
              className="rounded-3xl"
            />
          </div>
          <p className="bg-indigo-700 rounded-3xl bg-opacity-70 max-w-lg p-4 text-white mx-2 text-center lg:m-auto xl:text-2xl xl:max-w-xl xl:translate-x-40">
            Welcome to a collection of 101 pieces for auction - unique
            non-fungible tokens living on the Etherium blockchain. Crypto Pugs are
            very nice, but they keep on rolling. Each rolling dino is
            programmatically generated from over 100 possible traits. Every
            rolling object comes with a unique utility from which every Crypto Pug
            holder can benefit - regardless of the rarity.
          </p>
        </div>
        <h2 id="roadmap" className="text-indigo-700 pt-20 text-6xl text-center">
          ROADMAP
        </h2>
        {roadmap.map((phase, index) => (
          <div
            key={phase.title}
            className="my-20 md:gap-10 flex flex-col md:flex-row md:odd:flex-row-reverse"
          >
            <div className="relative mb-7 md:my-auto">
              <h3 className="relative z-1 text-3xl pl-8 text-indigo-700">
                {phase.title}
              </h3>
              <p className="absolute text-8xl -translate-y-20 text-white opacity-70">
                {phase.percent}
              </p>
            </div>
            <p className="bg-indigo-700 rounded-3xl bg-opacity-70 p-4 text-white mx-2 text-center flex flex-col gap-2 max-w-lg text-lg md:text-2xl md:my-auto">
              {phase.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </p>
          </div>
        ))}
        <button className="purple-button" onClick={handlePhaseTwo}>
          <p>Activation of Crypto Pug Phase 2:</p>
          {/*<p>Long live the </p>*/}
        </button>
      </section>
    </>
  );
}
