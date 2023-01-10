import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.scss";
import { socialMediaLinks } from "./../../data/socialMediaLinks";
import telegram from "./../../public/icons/telegram.svg";
import instagram from "./../../public/icons/instagram.svg";
import facebook from "./../../public/icons/facebook.svg";
import youtube from "./../../public/icons/youtube.svg";
import usaid_logo from "./../../public/icons/usaid_logo.svg";
import voxCheckLogo from "./../../public/icons/voxchek-logo.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.disclaimWrap}>
        <p className={styles.disclaim}>
          <span className={styles.disclaimWord}>Дисклеймер:</span> Створення
          бази медичних фейків стало можливим за підтримки Агентства США з
          міжнародного розвитку (USAID), наданої від імені народу Сполучених
          Штатів Америки, за підтримки Програми Уряду Великої Британії «Good
          Governance Fund», наданої від імені народу Великої Британії.
          Відповідальність за зміст цієї бази, який необов&apos;язково
          відображає погляди USAID, Уряду Сполучених Штатів Америки, UK aid або
          Уряду Великої Британії, несе виключно компанія ТОВ «Делойт Консалтинг»
          в рамках контракту №72012118C00001.
        </p>
        <div className={styles.logosWrap}>
          <div style={{ height: "20px", width: "175px", marginTop: "20px" }}>
            <Image
              src={voxCheckLogo}
              height="20"
              width="175"
              alt="Logo VoxCheck"
            />
          </div>
          <div style={{ height: "87px", width: "151px" }}>
            <Image src={usaid_logo} height="87" width="151" alt="Logo USAID" />
          </div>
        </div>
      </div>
      <div className={styles.copyrightIconsWrap}>
        <div className={styles.copyright}>VoxUkraine © 2022</div>

        <div className={styles.icons}>
          <Link href={socialMediaLinks.Telegram}>
            <a target="_blank">
              <Image
                src={telegram}
                height="26"
                width="26"
                alt="Telegram icon"
              />
            </a>
          </Link>
          <Link href={socialMediaLinks.Instagram}>
            <a target="_blank">
              <Image
                src={instagram}
                height="26"
                width="26"
                alt="Instagram icon"
              />
            </a>
          </Link>
          <Link href={socialMediaLinks.Facebook}>
            <a target="_blank">
              <Image
                src={facebook}
                height="26"
                width="26"
                alt="Facebookm icon"
              />
            </a>
          </Link>
          <Link href={socialMediaLinks.YouTube}>
            <a target="_blank">
              <Image src={youtube} height="26" width="26" alt="Youtube icon" />
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
