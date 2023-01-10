import styles from "./../../styles/Home.module.scss";

// @ts-ignore
import { fakesData } from "./../../data/fakes/fakesData";
import { medicalFake } from "./../../types/dataTypes";

import ThemeItem from "../../components/theme/ThemeItem";

const Theme = () => {
/* @ts-ignore */
  const themesUnique = [];
  fakesData.map((item: medicalFake) => {
    /* @ts-ignore */
    if (!themesUnique.includes(item.theme)) {
      themesUnique.push(item.theme);
    }
  });
/* @ts-ignore */
  const theme = themesUnique.map((theme) => <ThemeItem key={theme} theme={theme} />);
  return (
    <div className={styles.themePage}>
      {theme}
    </div>
  );
};

export default Theme;
