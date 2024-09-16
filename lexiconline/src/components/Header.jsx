import React from 'react';
import style from '../style/Header.module.scss'; 
import headerImage from '../assets/images/bib.jpg'; 

const Header = () => {
  return (
    <header className={style.header}>
      <img src={headerImage} alt="Header Background" className={style.headerImage} />
      <h1 className={style.headerTitle}>Lexiconline</h1>
    </header>
  );
};

export default Header;
