import SearchAutoComplete from "../components/SearchAutoComplete/SearchAutoComplete";
import styles from "./../styles/Search.module.scss";
import useUniqueTags from './../utils/uniqueTags'
import Tag from './../components/Tag/Tag'

const search = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {uniqueTags} = useUniqueTags()
  const tagsList = uniqueTags.map((tag, i) => {
    //@ts-ignore
    return <Tag key={i} tag={tag} />;
  });
  return (
    <div className={styles.searchWrap}>
      <SearchAutoComplete />
      <div className={styles.tagsWrap}>{tagsList}</div>
     
    </div>
  );
};

export default search;
