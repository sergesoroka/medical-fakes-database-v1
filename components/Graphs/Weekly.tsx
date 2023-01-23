import { useRouter } from 'next/router';
import React from 'react'

function Weekly() {
  const router = useRouter();
  const { locale } = router;

  const src =
  locale == "en"
    ? "https://voxukraine.org/graphs/medfakes/weekly_en.html"
    : locale == "ru"
    ? "https://voxukraine.org/graphs/medfakes/weekly_ru.html"
    : "https://voxukraine.org/graphs/medfakes/weekly_ua.html";

  return (
    <iframe
      src={src}
      width="600"
      height="360"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      style={{border: 'none'}}
      allowFullScreen
    />
  )
}

export default Weekly