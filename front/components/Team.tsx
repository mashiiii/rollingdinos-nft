import React from "react";

export default function Team() {
  const team = [
    { nick: "Naqet", image: "/sections/dino1.png", role: "Developer" },
    { nick: "Naqet", image: "/sections/dino1.png", role: "Developer" },
    { nick: "Naqet", image: "/sections/dino1.png", role: "Developer" },
  ];
  return (
    <>
      <img className="w-full" src="/sections/mission-bg.svg" alt="Planet" />
      <h2 id="team">Rolling Team</h2>
      <section className="team-body flex flex-col md:flex-row justify-center gap-4 pt-10 flex-wrap xl:gap-10">
        {team.map((member) => (
          <div
            key={member.nick}
            className="grid place-items-center text-indigo-700"
          >
            <p className="font-bangers text-4xl my-2">{member.nick}</p>
            {/*<div className="w-72 h-72">
              <Image
                alt="Dino team member"
                width={288}
                height={288}
                src={member.image}
                className="rounded-3xl"
                placeholder="blur"
		/> 
            </div>*/}
            <img
              src={member.image}
              alt="Dino team member"
              className="w-72 h-72 rounded-3xl"
            />
            <p className="team-role my-2 ml-4">{member.role}</p>
          </div>
        ))}
      </section>
      <img className="w-full" src="/sections/team-bottom.svg" alt="Planet" />
    </>
  );
}
