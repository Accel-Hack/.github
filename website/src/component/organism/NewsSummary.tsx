import React from 'react';
import NewsOneLine from '@/component/molecule/NewsOneLine';
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
      {newses.map((news, i) => {
        return <NewsOneLine key={i} news={news} />;
      })}
      <Cursor className={styles.cursor} />
    </div>
  );
};

export default NewsSummary;
