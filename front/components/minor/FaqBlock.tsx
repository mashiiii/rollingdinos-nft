import React, { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";

type FaqBlockProps = {
  question: string;
  answer: string;
};

export default function FaqBlock({ question, answer }: FaqBlockProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="border-b-2 border-gray-400 my-1 cursor-pointer overflow-hidden font-roboto"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="my-3 flex marker-hide">
        <h2 className="font-bold text-xl">{question}</h2>
        <AiOutlineRight
          className={`transition-transform duration-500 text-xl w-10 ml-auto ${
            isOpen ? "rotate-90" : ""
          }`}
        />
      </div>
      <p className={`transition-all ${isOpen ? "max-h-80" : "max-h-0"}`}>
        {answer}
      </p>
    </div>
  );
}
