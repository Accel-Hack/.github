import React from 'react';
import Article from '@/component/organism/Article';
import NewsList from '@/component/organism/NewsList';

type Props = {
  newses: {
    date: string;
    title: string;
    thumbnail: string;
    description: string;
  }[];
};

const NewsListArticle: React.FC<Props> = ({ newses }: Props) => {
  return (
    <Article caption="ニュースリリース">
      <NewsList newses={newses} />
    </Article>
  );
};

export default NewsListArticle;
