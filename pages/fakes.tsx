import styles from "./../styles/Home.module.scss";
import CardsLayout from "../components/Card/CardsLayout";
import Head from "next/head";

const Fakes = () => {
  return (
    <div>
      <Head>
        <title>Усі фейки | Detox від пропаганди</title>
      </Head>
      <div className={styles.singlePageMainContent}>
        <CardsLayout />
      </div>
    </div>
  );
};

export default Fakes;
