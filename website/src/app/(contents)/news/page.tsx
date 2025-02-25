import React from 'react';
import ContentHeader from '@/component/molecule/ContentHeader';
import NEWSES from '@/data/news.json';
import NewsListArticle from '@/component/article/NewsListArticle';

const NewsPage: React.FC = () => {
  return (
    <div>
      <ContentHeader caption="News" />
      <NewsListArticle newses={NEWSES} />
    </div>
  );
};

export default NewsPage;
