import { useRouter } from "next/router";
import useLangSwitcher from "./langSwitcher";

import { fakesData } from "../data/fakes/fakesData";
import { fakesDataEn } from "../data/fakes-En/fakesDataEn";
import { fakesDataRu } from "../data/fakes-Ru/fakesDataRu";

function useUniqueTags() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const { locale } = router;

  const { fakes } = useLangSwitcher()

  // const fakes =
  //   locale == "en" ? fakesDataEn : locale == "ru" ? fakesDataRu : fakesData;
  const uniqueTags = [];

  fakes.map((fake) => {
    if (fake.tags) {
      const tags = fake.tags.split(", ");

      tags.map((tag) => {
        if (!uniqueTags.includes(tag)) {
          uniqueTags.push(tag);
        }
      });
    }
  });
  return { uniqueTags };
}

export default useUniqueTags;
