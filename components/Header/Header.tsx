/* eslint-disable react/display-name */
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import LangSwitcher from "./LangSwitcher";
import styles from "./Header.module.scss";
import search from "./../../public/icons/search.svg";
import close from "./../../public/icons/close.svg";

const Header = () => {
  const router = useRouter();
  const { locale } = router;

  const downloadLabel =
    locale == "en"
      ? "Download Data"
      : locale == "ru"
      ? "Загрузить данные"
      : "Завантажити дані";
  const downloadLink =
    locale == "en"
      ? "https://docs.google.com/spreadsheets/d/1ghu-eJVyTTi3XCNgUB1Tb5dmAxdmt2CGzf5TwxNbiJ4/edit#gid=0"
      : locale == "ru"
      ? "https://docs.google.com/spreadsheets/d/1IrmaQYRnfNSKQ2D_xug_YGc19aXPYhmxXS4YLM9zfpk/edit#gid=0"
      : "https://docs.google.com/spreadsheets/d/1rMCP_E1FVbKn4kKvN8l7Bg-ZKv4qgYBledBKZUUP0hg/edit#gid=0";

  const aboutLabel =
    locale == "en" ? "About" : locale == "ru" ? "О проекте" : "Про Проект";
  const methodLabel =
    locale == "en"
      ? "Metodology"
      : locale == "ru"
      ? "Методология"
      : "Методологія";
  return (
    <div>
      <LangSwitcher />
      <header className={styles.header}>
        <Link href="/" passHref>
          <div className={styles.logo}>
            <p className={styles.voxLogo}>
              Детокс
              <br />
              від пропаганди
            </p>
            <p className={styles.projectLogo}>
              База даних <br />
              медичних фейків
            </p>
          </div>
        </Link>
        <div className={styles.rightWrap}>
          <div className={styles.linksWrap}>
            <Link href="/about" passHref>
              <a>{aboutLabel}</a>
            </Link>
            <Link href="/method" passHref>
              <a>{methodLabel}</a>
            </Link>
            <Link href={downloadLink} passHref>
              <a target="_blank">{downloadLabel}</a>
            </Link>
          </div>
          <div className={styles.searchWrap}>
            {router.pathname !== "/search" ? (
              <Link href="/search" passHref>
                <a>
                  <Image
                    src={search}
                    height="48"
                    width="48"
                    alt="Search icon"
                    style={{ cursor: "pointer" }}
                  />
                </a>
              </Link>
            ) : (
              <Link href="/" passHref>
                <a>
                  <Image
                    src={close}
                    height="48"
                    width="48"
                    alt="Close icon"
                    style={{ cursor: "pointer" }}
                  />
                </a>
              </Link>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
