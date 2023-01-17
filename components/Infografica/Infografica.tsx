import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./Infografica.module.css";

import { infograficsData } from "./../../data/fakes/infograficsData";
import { infograficsDataRu } from "./../../data/fakes-Ru/infograficsDataRu";
import { infograficsDataEn } from "./../../data/fakes-En/infograficsDataEn";

const Infografica = ({ infographic_id }: { infographic_id: string }) => {
  const router = useRouter();
  const { locale } = router;

  const data =
    locale == "en"
      ? infograficsDataEn
      : locale == "ru"
      ? infograficsDataRu
      : infograficsData;

  const infoRender = data.map((item) => {
    // @ts-ignore
    if (infographic_id == item.infographic_id) {
      return (
        // @ts-ignore
        <div className={styles.imageWrap} key={item.infographic_id}>
          <Image
            key={infographic_id}
            src={item.infographic_link}
            width="540"
            height="250"
            layout='fixed'
            objectFit='contain'
            alt="Infografic"
          />
        </div>
      );
    }
  });

  return <div className={styles.infoWrap}>{infoRender}</div>;
};

export default Infografica;
