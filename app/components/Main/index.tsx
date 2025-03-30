import React from 'react';
import styles from './style.module.scss';
import scrollToElement from '@/app/utils/scroll';

const Main = () => {
  return (
    <section id='home' className={styles.mainSection}>
      <div className={styles.videoContainer}>
        <video autoPlay loop muted playsInline preload="auto" className={styles.backgroundVideo}>
          <source src="/garo_video.mp4" type="video/mp4" />
          <source src="/garo_video.webm" type="video/webm" />
          <source src="/garo_video.ogv" type="video/ogv" />
          Ваш браузер не поддерживает видео.
        </video>

      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Garo Waves</h1>
        <p className={styles.subtitle}>Погрузитесь в гармонию звуков и эмоций</p>

        <button
          onClick={() => scrollToElement('#music')}
          className={styles.listenButton}><span>Слушайте</span></button>
      </div>
    </section>
  );
};

export default Main;
