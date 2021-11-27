import React from "react";
import Image from "next/image";

export default function Team() {
  const team = [
    { nick: "Naqet", image: "/dino1.png", role: "Developer" },
    { nick: "Naqet", image: "/dino1.png", role: "Developer" },
    { nick: "Naqet", image: "/dino1.png", role: "Developer" },
  ];
  return (
    <section className="flex flex-col gap-4 mb-60" id="team">
      {team.map((member) => (
        <div
          key={member.nick}
          className="text-white grid place-items-center z-20 md:ml-80"
        >
          <p className="font-bangers text-4xl my-2 text-green-500 opacity-90">
            {member.nick}
          </p>
          <Image
            width={300}
            height={300}
            src={member.image}
            className="rounded-3xl"
          />
          <p className="team-role my-2 ml-4">{member.role}</p>
        </div>
      ))}
    </section>
  );
}
