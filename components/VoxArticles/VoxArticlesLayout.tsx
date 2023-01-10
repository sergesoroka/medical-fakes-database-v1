import React from "react";
import Article from "./Article";
import { articlesData } from "../../data/fakes/articlesData";
import styles from "./VoxArticles.module.css";
import useLangSwitcher from "../../utils/langSwitcher";

const VoxArticlesLayout = ({ vox_article_id }: { vox_article_id: string }) => {
const {articles} = useLangSwitcher()
  const DataVoxRendered = articles.map((article) => {
    if(vox_article_id == article.vox_article_id) {
    return (
      <Article
        key={article.vox_article_id}
        link={article.vox_article_link}
        imagelink={article.vox_article_image_link}
        title={article.vox_article_title}
        // tags={article.tags}
        // authors={article.authors}
        articleId={article.vox_article_id}
      />
    );
    }
  });
  return (
    <div className={styles.articlesWrap}>
      {/* <Link href="/articles">
        <a>
          <SectionLabel label="articles" />
        </a>
      </Link> */}

      {DataVoxRendered}
    </div>
  );
};

export default VoxArticlesLayout;
