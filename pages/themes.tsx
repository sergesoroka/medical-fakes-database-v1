import styles from "./../styles/Home.module.scss";

import { medicalFake } from "./../types/dataTypes";

import ThemeItem from "../components/theme/ThemeItem";
import useLangSwitcher from "../utils/langSwitcher";
import Head from "next/head";

const Theme = () => {
  const { fakes } = useLangSwitcher();
  /* @ts-ignore */
  const themesUnique = [];
  fakes.map((item: medicalFake) => {
    /* @ts-ignore */
    if (!themesUnique.includes(item.theme)) {
      themesUnique.push(item.theme);
    }
  });
  /* @ts-ignore */
  const theme = themesUnique.map((theme) => (
    <ThemeItem key={theme} theme={theme} />
  ));
  return (
    <div>
    <Head>
        <title>Усі теми | Detox від пропаганди</title>
      </Head>
      <div className={styles.themePage}>{theme}</div>
    </div>
  );
};

export default Theme;
