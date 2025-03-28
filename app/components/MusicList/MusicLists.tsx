'use client';

import styles from './styles.module.scss';
import { FaYoutube, FaYandex, FaApple } from 'react-icons/fa';
import Link from 'next/link';

const MusicLinks = () => {
  const platforms = [
    { name: 'YouTube', url: 'https://www.youtube.com/', icon: <FaYoutube />, className: styles.youtube },
    { name: 'Yandex Music', url: 'https://music.yandex.ru/', icon: <FaYandex />, className: styles.yandex },
    { name: 'Apple Music', url: 'https://music.apple.com/', icon: <FaApple />, className: styles.apple },
  ];

  return (
    <div id='music' className={styles.container}>
      <div className={styles.container_background}></div>
      <h2 className={styles.title}>Слушайте новые песни</h2>
      <div className={styles.links}>
        {platforms.map((platform) => (
          <Link
            key={platform.name}
            href={platform.url}
            passHref
            className={`${styles.link} ${platform.className}`} 
          >
            {platform.icon} {platform.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MusicLinks;
