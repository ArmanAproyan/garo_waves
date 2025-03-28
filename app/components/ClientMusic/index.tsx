'use client'; // Эта директива сообщает, что компонент должен рендериться только на клиенте

import dynamic from 'next/dynamic';

const Musics = dynamic(() => import('../Musics'), { ssr: false });

const ClientMusic = () => {
  return <Musics />;
};

export default ClientMusic;
