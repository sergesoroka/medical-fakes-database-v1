import { useState } from "react";
import Link from "next/link";
// import { fakesData } from "../../data/fakes/fakesData";
import styles from "./Statistic.module.scss";
import useLangSwitcher from "../../utils/langSwitcher";
import { useRouter } from "next/router";

const Statistic = ({ subtheme }: { subtheme: string }) => {
  const router = useRouter();
  const { locale } = router;

  

  const allSources = locale == "en"
    ? "All sources"
    : locale == "ru"
    ? "Все источники"
    : "Всі джерела";

  const [showAllSourses, setShowAllSourses] = useState<boolean>(false);
  const { fakes } = useLangSwitcher();
  // @ts-ignore
  const sources = [];
  // @ts-ignore
  fakes.map((item) => {
    // @ts-ignore
    if (!sources.includes(item.source) && item.subtheme == subtheme) {
      sources.push(item);
    }

    return item;
  });
  // @ts-ignore
  const listOfSources = sources.slice(0, 3).map((item, i) => (
    <li key={i} className={styles.sourceItem}>
      <Link href={item.link}>
        <a>{item.source}</a>
      </Link>
    </li>
  ));
  // @ts-ignore
  const listOfAllSources = sources.map((item, i) => (
    <li key={i} className={styles.sourceItem}>
      <Link href={item.link}>
        <a>{item.source}</a>
      </Link>
    </li>
  ));

  const number = listOfAllSources.length.toString().split("");
  const lastDigit = number[number.length - 1];
  const wordSourses = () => {
    if (
      lastDigit === "1" &&
      listOfAllSources.length !== 11 &&
      listOfAllSources.length !== 13 &&
      listOfAllSources.length !== 14 &&
      listOfAllSources.length !== 15 &&
      listOfAllSources.length !== 16 &&
      listOfAllSources.length !== 17 &&
      listOfAllSources.length !== 18 &&
      listOfAllSources.length !== 19
    ) {
      return locale == "en" ? "sources" : locale == "ru" ? "источника" : "джерело";
    } else if (
      (lastDigit === "2" || lastDigit === "3" || lastDigit === "4") &&
      listOfAllSources.length !== 11 &&
      listOfAllSources.length !== 13 &&
      listOfAllSources.length !== 14 &&
      listOfAllSources.length !== 15 &&
      listOfAllSources.length !== 16 &&
      listOfAllSources.length !== 17 &&
      listOfAllSources.length !== 18 &&
      listOfAllSources.length !== 19
    ) {
      return locale == "en" ? "sources" : locale == "ru" ? "источника" : "джерело";
    } else {
      return locale == "en" ? "sources" : locale == "ru" ? "источников" : "джерел";
    }
  };


  return (
    <>
      <div>
        <span className={styles.numberSources}>{listOfAllSources.length}</span>
        <br />
        {wordSourses()}
      </div>
      <ul className={styles.listSources}>
        {showAllSourses ? listOfAllSources : listOfSources}
      </ul>
      <div
        className={styles.btnAllSources}
        onClick={() => setShowAllSourses(!showAllSourses)}
      >
        {allSources}
      </div>
    </>
  );
};

export default Statistic;
