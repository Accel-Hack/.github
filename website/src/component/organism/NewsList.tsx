import React from 'react';
import NewsItem from '@/component/molecule/NewsItem';

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
    <div>
      {newses.map((news, i) => {
        return <NewsItem key={i} news={news} />;
      })}
    </div>
  );
};

export default NewsList;
