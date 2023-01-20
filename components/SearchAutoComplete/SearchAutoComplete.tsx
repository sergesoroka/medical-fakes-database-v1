import useSearchAutoComplete from "./hooks/useSearchAutoComplete";
import styles from "./SearchAutoComplete.module.scss";
import useLangSwitcher from "../../utils/langSwitcher";
import CardsLayout from "../Card/CardsLayout";
import { FiSearch } from "react-icons/fi";
import { useRouter } from "next/router";

const SearchAutoComplete = () => {
  const { fakes } = useLangSwitcher();
  const {
    handleChange,
    handleClick,
    handleClear,
    value,
    suggestionsActive,
    suggestionIndex,
    suggestions,
  } = useSearchAutoComplete({ data: fakes });

  const router = useRouter();
  const { locale } = router;

  const placeholdrer = locale == "en"
    ? "Search for fakes"
    : locale == "ru"
    ? "Поиск фейков"
    : "Пошук фейків";

  return (
    <div className={styles.searchWrap}>
      <div className={styles.searchIcon}>
        <FiSearch />
      </div>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholdrer}
      />
      {/* <button className={styles.clearBtn} onClick={handleClear}>
        <FiX />
      </button> */}
      {value && (
        <>
          <CardsLayout
            handleClick={handleClick}
            suggestionIndex={suggestionIndex}
            suggestions={suggestions}
          />
        </>
      )}
    </div>
  );
};

export default SearchAutoComplete;
