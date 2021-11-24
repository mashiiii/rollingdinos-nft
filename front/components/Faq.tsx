import React from "react";
import { FaSearch } from "react-icons/fa";
import FaqBlock from "./minor/FaqBlock";

export default function Faq() {
  const faqData = [
    {
      q: "How do I mind a Rolling Dino?",
      a: "You will need a personal eligible wallet and enough funds (mint price + gas fee). Before mint day, we'll provide you with a detailed guide on how to mint. There is the possibility of being eligible for a limited presale. To gather more information, check out the presale channel in our Discord server.",
    },
    {
      q: "How much is a Dino?",
      a: "Every Rolling Dino will cost 0.07 ETH. There are no price tiers and will cost the same for everybody.",
    },
    {
      q: "Will there be a presale?",
      a: "Yes, we want our early supporters to benefit! To be eligible for the presale, you need to be an active member of our Discord and meet all requirements. Join now and see all how to be eligible for presale.",
    },
    {
      q: "What's the max mint per transaction?",
      a: "We set the limit to 3 tokens per transaction. Our goal is to maximize the number of unique holders to build a diverse and strong community.",
    },
    {
      q: "What distinguishes Rolling Dinos from other NFT Projects?",
      a: "EVERY rolling object comes with a unique utility. Rolling traits will decide for which exclusive benefit you'll qualify. Our benefits are connecting the NFT world with the real world – and getting the best of both worlds. Among holders, benefits like flight vouchers, customed skate deck, a quad, a jet ski, and a Cabrio leasing. There will also 6 completely unique 1:1 Rolling Dinos NFT's. Those will have even crazier benefits – we will keep it a surprise but expect something huge.",
    },
  ];
  return (
    <section
      className="grid place-items-center h-screen text-white px-4"
      id="faq"
    >
      <div className="flex flex-col w-full rounded-xl bg-gray-800 bg-opacity-60 p-4 max-w-prose">
        <div className="flex justify-between items-center text-3xl mb-4">
          <h1 className="font-hand">Frequently asked questions</h1> <FaSearch />
        </div>
        {faqData && faqData.length > 0
          ? faqData.map((singleData, index) => (
              <FaqBlock
                key={index}
                question={singleData.q}
                answer={singleData.a}
              />
            ))
          : null}
      </div>
    </section>
  );
}
