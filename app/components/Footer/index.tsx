import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';
import styles from './styles.module.scss';

const Footer = () => {
  return (
    <footer id='contact' className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>by XLab </div>
        <nav className={styles.nav}>
          <Link href="/">Главная</Link>
          <Link href="/about">О нас</Link>
          <Link href="/services">Услуги</Link>
          <Link href="/contact">Контакты</Link>
        </nav>
        <div className={styles.socials}>
          <a href="#" aria-label="Facebook"><FaFacebookF /></a>
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" aria-label="Twitter"><FaTwitter /></a>
          <a href="#" aria-label="GitHub"><FaGithub /></a>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} XLAB. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;
