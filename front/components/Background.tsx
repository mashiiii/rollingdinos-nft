import React from "react";
import RellaxWrapper from "react-rellax-wrapper";

export default function Background() {
  return (
    <>
      <div className="w-screen h-screen fixed top-0 left-0 background" />
      <div
        className="absolute top-0 left-0 w-screen h-auto"
        style={{ zIndex: -5 }}
      >
        <RellaxWrapper xs={2} tablet={4} zIndex={-10} desktop={4}>
          <div className="relative h-screen w-screen">
            <img
              src="bg-hero.svg"
              alt="They are rolling your way"
              className="opacity-80 px-5 absolute bottom-28 right-1/2 translate-x-1/2 lg:max-w-3xl lg:opacity-50"
            />
            <img
              src="planets/planet2.svg"
              alt="Planet"
              className="absolute w-20 -bottom-10 right-1/4 md:right-20"
            />
            <img
              src="planets/planet6.svg"
              alt="Planet"
              className="absolute w-14 top-20 right-4 md:right-20"
            />
            <img
              src="planets/planet8.svg"
              alt="Planet"
              className="hidden absolute w-24 top-1/4 left-1/2 opacity-50 md:block -rotate-90"
            />
          </div>
        </RellaxWrapper>
        <RellaxWrapper xs={-1} tablet={-3} zIndex={-10} desktop={-3}>
          <div className="relative w-screen h-screen">
            <img
              src="bg-roadmap.svg"
              alt="Roadmap"
              className="absolute top-96 right-1/2 translate-x-1/2 px-5 opacity-70 md:top-1/3 md:opacity-50 lg:max-w-3xl"
            />
            <img
              src="planets/planet5.svg"
              alt="Planet"
              className="hidden absolute top-full left-1/4 w-32 md:block"
            />
            <img
              src="planets/planet3.svg"
              alt="Planet"
              className="absolute -bottom-1/2 right-5 w-32 h-32 md:right-10 md:-bottom-2/3"
            />
            <img
              src="planets/planet8.svg"
              alt="Planet"
              style={{ bottom: "-160%" }}
              className="absolute right-14 w-24 h-24 md:right-20"
            />
            <img
              src="planets/planet4.svg"
              alt="Planet"
              className="absolute -bottom-full left-3 w-14 h-14 md:left-20"
            />
            <img
              src="bg-about.svg"
              alt="About"
              className="absolute right-1/2 translate-x-1/2 px-4 about opacity-70 md:opacity-50 lg:max-w-3xl"
            />

            <img
              src="planets/planet3.svg"
              alt="Planet"
              style={{ bottom: "-300%" }}
              className="hidden absolute right-1/2 w-32 h-32 md:block opacity-30"
            />

            <img
              src="planets/planet5.svg"
              alt="Planet"
              className="absolute left-10 w-16 opacity-70 md:left-48 last-planet"
            />
          </div>
        </RellaxWrapper>
      </div>
    </>
  );
}
