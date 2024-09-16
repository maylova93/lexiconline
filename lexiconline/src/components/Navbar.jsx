import { NavLink } from "react-router-dom";
import style from '../style/Navbar.module.scss';
import bookIcon from '../assets/images/book.png'; 

export function Navbar() {
  return (
    <>
    <nav className={style.navbar}>
      <ul className={style.navLinks}>
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? style.activeLink : '')}
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            className={({ isActive }) => (isActive ? style.activeLink : '')}
          >
            ABOUT
          </NavLink>
        </li>
        <li>
          <a href="https://dictionaryapi.dev/" target="_blank" rel="noopener noreferrer">
            API
          </a>
        </li>
      </ul>
    </nav>
      <div className={style.iconWrapper}>
        <img src={bookIcon} alt="Book Icon" />
      </div>
    </>
  );
}
