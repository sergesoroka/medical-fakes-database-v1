import { useRouter } from "next/router";
import Infografica from "../components/Infografica/Infografica";
import SectionLabel from "../components/SectionLabel/SectionLabel";
import styles from "./../styles/Home.module.scss";

import useLangSwitcher from '../utils/langSwitcher'

import { infograficsData } from "../data/fakes/infograficsData";
import { infograficsDataRu } from "../data/fakes-Ru/infograficsDataRu";
import { infograficsDataEn } from "../data/fakes-En/infograficsDataEn";
import Head from "next/head";


const InfograficaPage = () => {
  const { infografics } = useLangSwitcher();
  const router = useRouter();
  const { locale } = router;

  const data =
  locale == "en"
    ? infograficsDataEn
    : locale == "ru"
    ? infograficsDataRu
    : infograficsData;

  const renderedInfo = infografics.map((item) => {
    return (
      <div className={styles.infoWrap} key={item.infographic_id}>
        <h2 className={styles.infoTitle}>{item.infographic_title}</h2>
        <Infografica infographic_id={item.infographic_id} />
      </div>
    );
  });
  return (
    <>
     <Head>
        <title>Інфографіка | Detox від пропаганди</title>
      </Head>
    <div className={styles.infoPage}>
      <SectionLabel label="infograf" />
      <br />
      {renderedInfo}
    </div></>
  );
};

export default InfograficaPage;
