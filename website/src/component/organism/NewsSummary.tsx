import React from 'react';
import Cursor from '@/asset/img/common/cursor.svg';
import styles from './NewsSummary.module.css';
import Link from 'next/link';
import { Page } from '@/enum/Page';
type Props = {
  newses: {
    date: string;
    title: string;
  }[];
};

const NewsSummary: React.FC<Props> = ({ newses }: Props) => {
  return (
    <div className={styles.news_summary_container}>
      <div className={styles.news_summary_header}>
        <span className={styles.news_summary_title}>News</span>
        <Link href={Page.NEWS} className={styles.news_view_all_container}>
          <span className={styles.news_view_all_text}>一覧を見る</span>
          <Cursor className={styles.cursor} />
        </Link>
      </div>
      {newses.slice(0, 4).map((news, i) => {
        return (
          <div key={i} className={styles.news_one_line}>
            <span className={styles.news_one_line_date}>{news.date}</span>
            <span className={styles.news_one_line_title}>{news.title}</span>
          </div>
        );
      })}
    </div>
  );
};

export default NewsSummary;
