import Link from "next/link";
import styles from "./Tag.module.scss";

const Tag = ({ tag }: { tag: string }) => {
  return (
    <Link href={`/tag/${tag}`}>
      <a>
        {" "}
        <div className={styles.tagWrap}>
          <div className={styles.tag}>#</div>
          <div className={styles.tag}>{tag}</div>
        </div>{" "}
      </a>
    </Link>
  );
};

export default Tag;
