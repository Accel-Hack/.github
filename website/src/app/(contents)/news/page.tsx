import React from 'react';
import NEWSES from '@/data/news.json';
import NewsListArticle from '@/component/article/NewsListArticle';
import styles from '@/app/(contents)/about/page.module.css';

const NewsPage: React.FC = () => {
  return (
      <div className={styles.articles}>
        <NewsListArticle newses={NEWSES} />
      </div>
  );
};

export default NewsPage;
