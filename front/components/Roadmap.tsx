import React from "react";

export default function Roadmap() {
  const roadmap = [
    {
      title: "They see us rolling",
      points: ["1", "2", "3", "4", "5"],
      image: "dino1.png",
    },
    {
      title: "Keep rolling",
      points: ["1", "2", "3", "4", "5"],
      image: "logo.webp",
    },
    {
      title: "Roll another tree",
      points: ["1", "2", "3", "4", "5"],
      image: "logo.webp",
    },
    {
      title: "Come and roll together",
      points: ["1", "2", "3", "4", "5"],
      image: "logo.webp",
    },
    {
      title: "Revive Dinos",
      points: ["1", "2", "3", "4", "5"],
      image: "logo.webp",
    },
  ];
  return (
    <section className="relative min-h-screen grid gap-10">
      {roadmap.map((phase, index) => (
        <section
          key={phase.title}
          id={"P" + (index + 1).toString()}
          className="grid place-items-start font-spaceMono relative p-8 text-white md:place-items-center md:ml-64 md:pt-0 lg:ml-80"
        >
          <h3 className="ml-5 mb-2">{phase.title}</h3>
          <ul className="w-60 h-40 bg-green-500 bg-opacity-40 rounded-3xl p-2 grid place-items-center z-20">
            {phase.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          <img
            src={phase.image}
            alt="Sample dino"
            className="w-40 h-40 rounded-3xl -mt-10 ml-28 z-10"
          />
        </section>
      ))}
    </section>
  );
}
