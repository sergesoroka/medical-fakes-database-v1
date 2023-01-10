import YouTubeVideo from "../components/YouTubeVideo/YouTubeVideo";
import styles from "./../styles/Home.module.scss";
import { videoData } from "../data/fakes/videoData";
import SectionLabel from "../components/SectionLabel/SectionLabel";

import useLangSwitcher from "../utils/langSwitcher";
import Head from "next/head";

const Video = () => {
  const { video } = useLangSwitcher()
  const videoRendered = video.map((item, i) => {
    return (
      <iframe
        key={item.video_id}
        width="560"
        height="315"
        src={item.video_link}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    );
  });
  return (
    <>
     <Head>
        <title>Відео | Detox від пропаганди</title>
      </Head>
    <div className={styles.videoPageWrap}>
      <SectionLabel label="video" />
      <div className={styles.videoPage}>{videoRendered}</div>
    </div>
    </>
  );
};

export default Video;
