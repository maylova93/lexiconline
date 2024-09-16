import React from 'react';
import style from '../style/Footer.module.scss'; // Vi bruger en SCSS fil til styling
import bookIcon from '../assets/images/book.png'; // Billedikonet til højre i footeren

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerSection}>
        <p><strong>Address:</strong></p>
        <p>Somestreet 232</p>
        <p>Luxemborg</p>
      </div>
      <div className={style.footerSection}>
        <p><strong>Contact:</strong></p>
        <p>Email: someemail@mail.com</p>
        <p>Phone: 4433243</p>
      </div>
      <div className={style.footerSection}>
        <p><strong>With special thanks to</strong></p>
        <p><a href="https://dictionaryapi.dev/" target="_blank" rel="noopener noreferrer">https://dictionaryapi.dev/</a></p>
        <p>For the awesome API</p>
      </div>
      <div className={style.footerLogo}>
        <img src={bookIcon} alt="Book Icon" />
        <p className={style.logoText}>Lexiconline</p>
      </div>
    </footer>
  );
};

export default Footer;
