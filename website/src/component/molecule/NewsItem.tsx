import React from 'react';
import Image from 'next/image';
import AccelHack1 from '@/asset/img/common/accelhack1.png';
import styles from './NewsItem.module.css';

type Props = {
  news: {
    date: string;
    title: string;
    thumbnail: string;
    description: string;
  };
};

const NewsItem: React.FC<Props> = ({ news }: Props) => {
  return (
    <div className={styles.container}>
      <Image
        src={news.thumbnail != '' ? news.thumbnail : AccelHack1.src}
        width={180}
        height={0}
        style={{
          width: 'auto',
          height: '10rem',
        }}
        alt={''}
      />
      <div>
        <div className={styles.date}>{news.date}</div>
        <div className={styles.title}>{news.title}</div>
        <div className={styles.description}>{news.description}</div>
      </div>
    </div>
  );
};

export default NewsItem;
