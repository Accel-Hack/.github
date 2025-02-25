import React from 'react';
import Image from 'next/image';

type Props = {
  news: {
    date: string;
    title: string;
    thumbnail: string;
    description: string;
  };
};

const NewsItem: React.FC<Props> = ({ news }: Props) => {
  return (
    <div>
      <Image src={news.thumbnail} width={180} height={38} alt={''} />
      <div>{news.date}</div>
      <div>{news.title}</div>
      <div>{news.description}</div>
    </div>
  );
};

export default NewsItem;
