import React from 'react';
import Cursor from '@/asset/img/common/cursor.svg';
import styles from './NewsSummary.module.css';
type Props = {
  newses: {
    date: string;
    title: string;
  }[];
};

const NewsSummary: React.FC<Props> = ({ newses }: Props) => {
  return (
    <div className={styles.news_summary_container}>
      <span className={styles.news_summary_title}>News</span>
      {newses.slice(0, 4).map((news, i) => {
        return (
          <div key={i} className={styles.news_one_line}>
            <span className={'mr-2'}>
              {news.date}　{news.title}
            </span>
          </div>
        );
      })}
      <Cursor className={styles.cursor} />
    </div>
  );
};

export default NewsSummary;
