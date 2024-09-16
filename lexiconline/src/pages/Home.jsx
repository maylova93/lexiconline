import React, { useState } from "react";
import style from '../style/Home.module.scss';
import headerImage from '../assets/images/bib.jpg';
import audioIcon from '../assets/images/audio.png';
import SearchBar from '../components/SearchBar'; 

const Home = () => {
  const [definition, setDefinition] = useState(null);

  return (
    <div className={style.homeContainer}>
      {/* Header med billede */}
      <header className={style.header}>
        <img src={headerImage} alt="Header Background" className={style.headerImage} />
        <h1 className={style.headerTitle}>Lexiconline</h1>
      </header>

      {/* Søgefelt */}
      <SearchBar onSearch={setDefinition} /> 

      {/* Visning af definition */}
      {definition && (
        <div className={style.resultContainer}>
          <div className={style.wordHeader}>
            <img src={audioIcon} alt="Audio Icon" className={style.audioIcon} />
            <h2 className={style.wordTitle}>{definition.word}</h2>
          </div>

          {/* Visning af definitioner */}
          {definition.meanings.map((meaning, index) => (
            <div key={index} className={style.meaningSection}>
              <h3>{meaning.partOfSpeech}</h3>
              <ul>
                {meaning.definitions.map((def, i) => (
                  <li key={i}>{def.definition}</li>
                ))}
              </ul>
            </div>
          ))}  
        </div>
      )}
    </div>
  );
};

export default Home;
