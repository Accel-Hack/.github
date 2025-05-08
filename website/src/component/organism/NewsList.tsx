import React from 'react';
import NewsItem from '@/component/molecule/NewsItem';
import styles from './NewsList.module.css';

type Props = {
  newses: {
    date: string;
    title: string;
    thumbnail: string;
    description: string;
  }[];
};

const NewsList: React.FC<Props> = ({ newses }: Props) => {
  return (
    <div className={styles.container}>
      {newses.map((news, i) => {
        return <NewsItem key={i} news={news} />;
      })}
    </div>
  );
};

export default NewsList;
