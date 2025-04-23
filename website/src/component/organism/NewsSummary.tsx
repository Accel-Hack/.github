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
      <div style={{ display: 'flex', justifyContent: 'end' }}>
        <Link href={Page.NEWS}>
          <Cursor className={styles.cursor} />
        </Link>
      </div>
    </div>
  );
};

export default NewsSummary;
