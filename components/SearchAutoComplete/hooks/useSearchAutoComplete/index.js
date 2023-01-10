import React, { useState } from "react";

const useSearchAutoComplete = ({ data }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [suggestionIndex, setSuggestionIndex] = useState(0);
  const [suggestionsActive, setSuggestionsActive] = useState(false);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const query = e.target.value.toLowerCase();
    setValue(query);
    if (query.length > 1) {
      const filterSuggestionsTheme = data
        .map((item) => item.theme)
        .filter((suggestion) => suggestion.toLowerCase().indexOf(query) > -1);
      const filterSuggestionsSubTheme = data
        .map((item) => item.subtheme)
        .filter((suggestion) => suggestion.toLowerCase().indexOf(query) > -1);

      setSuggestions([...filterSuggestionsTheme, ...filterSuggestionsSubTheme]);
      setSuggestionsActive(true);
    } else {
      setSuggestionsActive(false);
    }
  };

  const handleClick = (e) => {
    setSuggestions([]);
    setValue(e.target.innerText);
    setSuggestionsActive(false);
  };

  const handleClear = () => {
    setValue("")
    setSuggestions([])
  };

  return {
    suggestionsActive,
    suggestionIndex,
    value,
    handleChange,
    handleClick,
    handleClear,
    suggestions,
  };
};

export default useSearchAutoComplete;
