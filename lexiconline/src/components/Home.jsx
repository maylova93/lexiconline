import React, { useState } from "react";

const Home = () => {
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState(null);

  const fetchDefinition = async () => {
    if (word) {
      try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const data = await response.json();
        setDefinition(data[0].meanings[0].definitions[0].definition);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  return (
    <div>
      <h1>Search for a Word</h1>
      <input
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        placeholder="Enter a word"
      />
      <button onClick={fetchDefinition}>Search</button>
      {definition && <p>Definition: {definition}</p>}
    </div>
  );
};

export default Home;
