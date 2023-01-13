import React from "react";

function Wordcloud() {
  return (
    <iframe
      src="https://voxukraine.org/graphs/medfakes/tree_plot.html"
      width="600"
      height="360"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      style={{border: 'none'}}
      allowFullScreen
    />
  );
}

export default Wordcloud;
