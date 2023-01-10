import styles from "./YouTubeVideo.module.scss";
import SectionLabel from "../SectionLabel/SectionLabel";
import Link from "next/link";

import useLangSwitcher from "../../utils/langSwitcher";

const YouTubeVideo = ({ video_id }: { video_id: string }) => {
  const { video } = useLangSwitcher();
  const videoRendered = video.map((item, i) => {
    if (video_id == item.video_id) {
      return (
        <div key={item.video_id}>
          {item.video_id && (
            <Link href="/video">
              <a>
                <SectionLabel label="video" />
              </a>
            </Link>
          )}
          <iframe
            className={styles.frame}
            key={item.video_id}
            width="560"
            height="315"
            src={item.video_link}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      );
    }
  });
  return (
    <div className={styles.videoWrap}>
      <div className={styles.video}>{videoRendered}</div>
    </div>
  );
};

export default YouTubeVideo;
