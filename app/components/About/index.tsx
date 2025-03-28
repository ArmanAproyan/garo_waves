import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import about_image from '../../../public/garo_image.jpg';

const About = () => {
  return (
    <section id='about' className={styles.aboutSection}>
      <div className={styles.textContent}>
        <h2 className={styles.title}>О Певца</h2>
        <p className={styles.description}>
          Garo Waves — это музыкальный проект, создающий уникальные звуковые полотна, которые погружают в атмосферу эмоций и вдохновения. 
          Мы создаем музыку, которая затрагивает сердца и заставляет по-новому взглянуть на мир вокруг.
        </p>
        <p className={styles.description}>
          Наши композиции полны динамики, гармонии и глубины, что делает их идеальными для тех, кто ищет вдохновение в каждом аккорде.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <Image src={about_image} alt="Garo Waves" className={styles.image} priority />
      </div>
    </section>
  );
};

export default About;
