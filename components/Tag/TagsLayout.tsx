import Tag from "./Tag";
import styles from "./Tag.module.scss";

//@ts-ignore
const TagsLayout = ({ tags }: { tags?: string }) => {
  //@ts-ignore
  const tagsArr = tags.split(", ");
  //@ts-ignore
  const tagsList = tagsArr.map((tag, i) => {
    return <Tag key={i} tag={tag} />;
  });

  return <div className={styles.tagsLayout}>{tagsList}</div>;
};

export default TagsLayout;
