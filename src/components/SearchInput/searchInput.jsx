import { useEffect, useState } from "react";

const SearchInput = ({ onSearch , placeHolder}) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    onSearch(inputValue);
  }, [inputValue, onSearch]);

  return (
    <input
      type="text"
      placeholder={placeHolder}
      className="w-1/2 rounded-3xl min-w-80 p-4 mb-4 text-center bg-bg-main dark:bg-bg-main-dark border-2 border-accent"
      value={inputValue}
      onChange={handleInputChange}
    />
  );
};

export default SearchInput;
