import { motion } from "framer-motion";
import Head from "next/head";
import Hero from "../components/Hero";
import Mission from "../components/Mission";
import Nav from "../components/Nav";
import Roadmap from "../components/Roadmap";
import Social from "../components/Social";
import Team from "../components/Team";

const Home = () => {
  return (
    <>
      <Head>
        <title>Rolling Dinos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <Hero />
        <Social />
        <Nav />
        <Roadmap />
        <Mission />
        <Team />
      </motion.div>
    </>
  );
};

export default Home;
