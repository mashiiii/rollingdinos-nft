import React from "react";
import Image from "next/image";
import dino1 from "../public/sections/dino1.png";

export default function Team() {
  const team = [
    { nick: "Naqet", image: dino1, role: "Developer" },
    { nick: "Naqet", image: dino1, role: "Developer" },
    { nick: "Naqet", image: dino1, role: "Developer" },
  ];
  return (
    <>
      <img className="w-full" src="/sections/mission-bg.svg" alt="Planet" />
      <h2 id="team">Rolling Team</h2>
      <section className="team-body flex flex-col md:flex-row justify-center gap-4 pt-10 flex-wrap xl:gap-10">
        {team.map((member) => (
          <div
            key={member.nick}
            className="text-white grid place-items-center text-indigo-700"
          >
            <p className="font-bangers text-4xl my-2">{member.nick}</p>
            <Image
              alt="Dino team member"
              width={300}
              height={300}
              src={member.image}
              className="rounded-3xl"
              placeholder="blur"
            />
            <p className="team-role my-2 ml-4">{member.role}</p>
          </div>
        ))}
      </section>
      <img className="w-full" src="/sections/team-bottom.svg" alt="Planet" />
    </>
  );
}
