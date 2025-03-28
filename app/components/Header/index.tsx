import React from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';
import navs from '../../Constants/nav';
import scrollToElement from '@/app/utils/scroll';
interface IheaderProp {
  openMenu: () => void,
  closeMenu: () => void,
  isOpen: boolean
};


const Header: React.FC<IheaderProp> = ({ openMenu, closeMenu, isOpen }) => {

  const handleOpenCloseModal = () => {
    isOpen ? closeMenu() : openMenu()
  };


  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>logo</h1>
      </div>
      <nav className={styles.nav}>
        <nav className={styles.navList}>
          {navs.map((val) => {
            return (
              <div onClick={() => scrollToElement(`#${val.scrollName}`)} key={val.id} className={styles.navLink}>{val.name}</div>
            )
          })}
        </nav>
      </nav>
      <div className={styles.menuButton}>
        <button
          onClick={handleOpenCloseModal}
          className={`${styles.menuToggle} ${isOpen ? styles.open : ''}`}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
};

export default Header;
