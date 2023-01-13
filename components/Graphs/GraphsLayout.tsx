import React from 'react'
import TreePlot from './TreePlot'
import Weekly from './Weekly'
import Wordcloud from './Wordcloud'

import styles from './Graphs.module.css'

function GraphsLayout() {
  return (
    <div className={styles.graphLayout}>
        <Weekly />
        <TreePlot />
        <Wordcloud />
      </div>
  )
}

export default GraphsLayout