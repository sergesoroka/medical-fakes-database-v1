import { useRouter } from "next/router";

import { fakesData } from "../data/fakes/fakesData";
import { fakesDataEn } from "../data/fakes-En/fakesDataEn";
import { fakesDataRu } from "../data/fakes-Ru/fakesDataRu";

import { articlesData } from "../data/fakes/articlesData";
import { articlesDataEn } from "../data/fakes-En/articlesDataEn";
import { articlesDataRu } from "../data/fakes-Ru/articlesDataRu";

import { infograficsData } from "../data/fakes/infograficsData";
import { infograficsDataEn } from "../data/fakes-En/infograficsDataEn";
import { infograficsDataRu } from "../data/fakes-Ru/infograficsDataRu";

import { videoData } from "../data/fakes/videoData";
import { videoDataEn } from "../data/fakes-En/videoDataEn";
import { videoDataRu } from "../data/fakes-Ru/videoDataRu";

function useLangSwitcher() {
  const router = useRouter();
  const { locale } = router;

  const fakes =
    locale == "en" ? fakesDataEn : locale == "ru" ? fakesDataRu : fakesData;

  const articles =
    locale == "en"
      ? articlesDataEn
      : locale == "ru"
      ? articlesDataRu
      : articlesData;

  const infografics =
    locale == "en"
      ? infograficsDataEn
      : locale == "ru"
      ? infograficsDataRu
      : infograficsData;

  const video =
    locale == "en" ? videoDataEn : locale == "ru" ? videoDataRu : videoData;
  return { fakes, articles, infografics, video };
}

export default useLangSwitcher;
