import Head from "next/head";
import Faq from "../components/Faq";
import Hero from "../components/Hero";
import Rarity from "../components/Rarity";
import Roadmap from "../components/Roadmap";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Head>
        <title>Rolling Dinos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Roadmap />
      <Rarity />
      <Faq />
      <Footer />
    </>
  );
};

export default Home;
