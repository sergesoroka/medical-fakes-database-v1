import { useState } from "react";
import styles from './ThemeItem.module.scss'
import CardsLayout from "../Card/CardsLayout";

const ThemeItem = ({ theme }) => {
  
  const [showSubthemes, setShowSubthemes] = useState(false);
  return (
    <div>
      <h2 className={styles.theme} onClick={() => setShowSubthemes( !showSubthemes)}>{theme}</h2>
      {showSubthemes && <CardsLayout page='themePage' theme={theme}/>}
    </div>
  );
};

export default ThemeItem;
