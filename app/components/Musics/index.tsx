'use client';
import React from 'react';
import styles from './styles.module.scss';

const Musics = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Слушайте любимые песни на Яндекс Музыке</h2>
      <iframe
        frameBorder="0"
        allow="clipboard-write"
        className={styles.container_music}
        width="614"
        height="244"
        src="https://music.yandex.ru/iframe/album/35183908/track/135624248"
      >
        Слушайте <a href="https://music.yandex.ru/album/35183908/track/135624248">Про нее</a> — <a href="https://music.yandex.ru/artist/21964393">Garo Waves</a> на Яндекс Музыке
      </iframe>
      <iframe
        frameBorder="0"
        allow="clipboard-write"
        className={styles.container_music}
        width="614"
        height="556"
        src="https://music.yandex.ru/iframe/album/30553676"
      >
        Слушайте <a href="https://music.yandex.ru/album/30553676">Грустные истории</a> — <a href="https://music.yandex.ru/artist/4236793">TENCA</a> на Яндекс Музыке
      </iframe>
      <iframe
        frameBorder="0"
        allow="clipboard-write"
        className={styles.container_music}
        width="614"
        height="244"
        src="https://music.yandex.ru/iframe/album/33014522/track/130455775"
      >
        Слушайте <a href="https://music.yandex.ru/album/33014522/track/130455775">Ищу тебя</a> — <a href="https://music.yandex.ru/artist/8377409">JANAGA</a> на Яндекс Музыке
      </iframe>
    </div>
  );
};

export default Musics;
