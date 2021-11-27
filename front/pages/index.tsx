import Head from "next/head";
import Hero from "../components/Hero";
import Mission from "../components/Mission";
import Nav from "../components/Nav";
import Roadmap from "../components/Roadmap";
import Team from "../components/Team";

const Home = () => {
  return (
    <>
      <Head>
        <title>Rolling Dinos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Nav />
      <Roadmap />
      <Mission />
      <Team />
    </>
  );
};

export default Home;
