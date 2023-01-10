import { useRouter } from "next/router";
import CardsLayout from "../../components/Card/CardsLayout";
import styles from './../../styles/TagPage.module.scss'

const TagPage = () => {
  const router = useRouter();
  const { tag } = router.query;
  return (
    <div className={styles.tagPageWrap}>
      <h2 className={styles.tagHeading}># {tag}</h2>
      {/* @ts-ignore */}
      <CardsLayout tag={tag} page='tag'/>
    </div>
  )
}

export default TagPage