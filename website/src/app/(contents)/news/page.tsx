import React from 'react';
import ContentHeader from '@/component/molecule/ContentHeader';
import NEWSES from '@/data/news.json';
import NewsListArticle from '@/component/article/NewsListArticle';
import styles from '@/app/(contents)/about/page.module.css';

const NewsPage: React.FC = () => {
  return (
    <div>
      <ContentHeader caption="News" />
      <div className={styles.articles}>
        <NewsListArticle newses={NEWSES} />
      </div>
    </div>
  );
};

export default NewsPage;
