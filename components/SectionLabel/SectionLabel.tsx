import { useRouter } from "next/router";
import styles from "./SectionLabel.module.scss";

import {
  BsFillCaretRightFill,
  BsStack,
  BsFillFileEarmarkMedicalFill,
  BsBarChartFill,
} from "react-icons/bs";

type labelType = { label: string };
//@ts-ignore
const SectionLabel: React.FC<labelType> = ({ label }: labelType) => {
  const router = useRouter();
  const { locale } = router;

  const videoLabel = locale == 'en' ? 'video' : locale == 'ru' ? 'видео' : 'відео'
  const fakesLabel = locale == 'en' ? 'All Fakes' : locale == 'ru' ? 'Все фейки' : 'Усі фейки'
  const articlesLabel = locale == 'en' ? 'Articles' : locale == 'ru' ? 'Статьи' : 'Статті'
  const infographicLabel = locale == 'en' ? 'Infographics' : locale == 'ru' ? 'Инфографика' : 'Інфографіка'

  if (label === "video") {
    return (
      <div className={styles.labelWrap}>
        <div className={styles.iconVideo}>
          <BsFillCaretRightFill style={{ fontSize: "1.2rem" }} />
        </div>
        <div className={styles.labelVideo}>{videoLabel}</div>
        <div className={styles.arrowVideo}></div>
      </div>
    );
  } else if (label === "fakes") {
    return (
      <div className={styles.labelWrap}>
        <div className={styles.iconFakes}>
          <BsStack style={{ fontSize: "1rem" }} />
        </div>
        <div className={styles.labelFakes}>{fakesLabel}</div>
        <div className={styles.arrowFakes}></div>
      </div>
    );
  } else if (label === "articles") {
    return (
      <div className={styles.labelWrap}>
        <div className={styles.iconArticles}>
          <BsFillFileEarmarkMedicalFill style={{ fontSize: "1.2rem" }} />
        </div>
        <div className={styles.labelArticles}>{articlesLabel}</div>
        <div className={styles.arrowArticles}></div>
      </div>
    );
  } else if (label === "infograf") {
    return (
      <div className={styles.labelWrap}>
        <div className={styles.iconInfograf}>
          <BsBarChartFill style={{ fontSize: "1.2rem" }} />
        </div>
        <div className={styles.labelInfograf}>{infographicLabel}</div>
        <div className={styles.arrowInfograf}></div>
      </div>
    );
  } else {
    null
  }
};

export default SectionLabel;
