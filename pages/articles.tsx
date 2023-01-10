import VoxArticlesLayout from "../components/VoxArticles/VoxArticlesLayout";
import styles from "./../styles/Home.module.scss";

import SectionLabel from "../components/SectionLabel/SectionLabel";

import useLangSwitcher from "../utils/langSwitcher";
import Head from "next/head";

const Articles = () => {
  const { articles } = useLangSwitcher()
  const renderedArticles = articles.map((item, id) => {
    return (
      <VoxArticlesLayout
        key={item.vox_article_id}
        vox_article_id={item.vox_article_id}
      />
    );
  });
  return (
    <>
     <Head>
        <title>Статті | Detox від пропаганди</title>
      </Head>
    <div  className={styles.articlesPage}>
      <SectionLabel label="articles" />
      <div className={styles.articlesWrap}>{renderedArticles}</div>
    </div></>
  );
};

export default Articles;
