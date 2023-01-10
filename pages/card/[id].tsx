import { useRouter } from "next/router";
import Head from "next/head";
import styles from "./../../styles/Home.module.scss";
import TagsLayout from "../../components/Tag/TagsLayout";
import Infografica from "../../components/Infografica/Infografica";
import YouTubeVideo from "../../components/YouTubeVideo/YouTubeVideo";
import Statistic from "../../components/Statistic/Statistic";
import VoxArticlesLayout from "../../components/VoxArticles/VoxArticlesLayout";
import { FaHandPointUp, FaThumbsUp } from "react-icons/fa";

import useLangSwitcher from "../../utils/langSwitcher";

import SectionLabel from "../../components/SectionLabel/SectionLabel";
import Link from "next/link";

function CartPage() {
  const { fakes } = useLangSwitcher();
  const router = useRouter();
  const { id } = router.query;
  const { locale } = router;

 

  const pravda =
    locale == "en"
      ? "How's the reality?"
      : locale == "ru"
      ? "Как на самом деле?"
      : "Як наспраді?";
       // @ts-ignore
  const renderedPage = fakes.map((item) => {
    if (item.id === id) {
      return (
        // @ts-ignore
        <div key={item.id} className={styles.singlePageMainContent}>
          <Head>
            <title>{item.subtheme} | Detox від пропаганди</title>
          </Head>
          <div>
            <div className={styles.themeSection}>
              <div className={styles.wordTheme}>
                <Link href="/themes">
                  <a>ТЕМА</a>
                </Link>
              </div>
              <div className={styles.arrowTheme}></div>
              <Link href={`/theme/${id}`}>
                <a>
                  <h2 className={styles.theme}>{item.theme}</h2>
                </a>
              </Link>
            </div>
            <h1 className={styles.subtheme}>{item.subtheme}</h1>
            <div style={{ marginLeft: "4rem" }}>
              {/* @ts-ignore */}
              {item.tags && <TagsLayout tags={item.tags} />}
            </div>
            <div className={styles.verdictWrap}>
              <FaHandPointUp style={{ color: "#D12020", fontSize: "1.4rem" }} />
              <h4 className={styles.verdict}>{item.verdict}</h4>
            </div>
            <p
              className={styles.textDiscript}
              dangerouslySetInnerHTML={{ __html: item.discription }}
            />
            <div className={styles.verdictWrap}>
              <FaThumbsUp style={{ color: "#008A40", fontSize: "1.2rem" }} />
              <h4 className={styles.proof}>{pravda}</h4>
            </div>
            <p
              className={styles.textDiscript}
              // @ts-ignore 
              dangerouslySetInnerHTML={{ __html: item.disproof }}
            />

            <div className={styles.singlePageArticlesWrap}>
              {item.video_id && <YouTubeVideo video_id={item.video_id} />}
              <div>
                {item.vox_article_id && <SectionLabel label="articles" />}
                {/* @ts-ignore  */}
                <VoxArticlesLayout vox_article_id={item.vox_article_id} />
              </div>
            </div>
            {item.infographic_id && (
              <>
                <SectionLabel label="infograf" />
                <Infografica infographic_id={item.infographic_id} />
              </>
            )}
          </div>
          <div>
            {/* @ts-ignore */}
            <Statistic subtheme={item.subtheme} />
          </div>
        </div>
      );
    }
  });

  return <div className={styles.singlePageWrap}>{renderedPage}</div>;
}

export default CartPage;
