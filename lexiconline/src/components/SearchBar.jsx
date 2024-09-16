import React, { useState } from "react";
import style from '../style/SearchBar.module.scss'; 

const SearchBar = ({ onSearch }) => {
  const [word, setWord] = useState("");
  const [error, setError] = useState(null);

  // API kaldet, der henter ordets definition
  const fetchDefinition = async () => {
    if (word) {
      try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        if (!response.ok) {
          throw new Error("Word not found");
        }
        const data = await response.json();
        setError(null);
        onSearch(data[0]); 
      } catch (error) {
        setError(error.message); 
        onSearch(null); 
      }
    }
  };

  return (
    <div className={style.searchBar}>
      <input
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        placeholder="Enter a word"
        className={style.inputField}
      />
      <button onClick={fetchDefinition} className={style.searchButton}>Search</button>
      {error && <p className={style.errorMessage}>{error}</p>}
    </div>
  );
};

export default SearchBar;
