import Head from "next/head";
import Background from "../components/Background";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SocialPill from "../components/minor/SocialPill";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com/"
          crossOrigin=""
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <SocialPill />
      <Background />
    </>
  );
};

export default MyApp;
