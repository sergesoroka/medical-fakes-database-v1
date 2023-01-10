import Head from "next/head";
import { Provider } from "react-redux";
import { store } from "./../store/store";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import GoogleAnalitics from "../utils/GoogleAnalitics";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styles from "../styles/Home.module.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    
    <Provider store={store}>
      <Head>
        <title>Detox від пропаганди</title>
        <meta name="next-head-count" content="3" />
        <meta name="description" content="База медичних фейків" />
        <meta
          property="og:image"
          content="https://inthepocket.tech/api/og-image?name=Next.js&stage=adopt"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-PLRFVB5"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </>
      <div className={styles.container}>
        <Header />
        <GoogleAnalitics />
        <Component {...pageProps} />
        <Footer />
      </div>
    </Provider>
  );
}

export default MyApp;
