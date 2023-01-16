import { useState } from "react";
import TreePlot from "./TreePlot";
import Weekly from "./Weekly";
import Wordcloud from "./Wordcloud";

import styles from "./Graphs.module.css";

function GraphsLayout() {
  const [showGraphs, setShowGraphs] = useState(false);
  return (
    <>
      <div className={styles.btnWrap}>
        <svg
          width="22"
          height="24"
          viewBox="0 0 22 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="5.78947" height="24" rx="1" fill={showGraphs ? '#787878' : '#3F4871'} />
          <rect
            x="8.10529"
            y="8.40002"
            width="5.78947"
            height="15.6"
            rx="1"
            fill={showGraphs ? '#787878' : '#3F4871'}
          />
          <rect
            x="16.2105"
            y="4.80002"
            width="5.78947"
            height="19.2"
            rx="1"
            fill={showGraphs ? '#787878' : '#3F4871'}
          />
        </svg>

        <button
          className={showGraphs ? styles.btnVisual + ' ' + styles.btnVisualOpen : styles.btnVisual}
          onClick={() => setShowGraphs(!showGraphs)}
        >
          Інтерактивні
          <br />
          візуалізації
        </button>
      </div>
      {showGraphs ? (
        <div className={styles.graphLayout}>
          <Weekly />
          <TreePlot />
          <Wordcloud />
        </div>
      ) : null}
    </>
  );
}

export default GraphsLayout;
