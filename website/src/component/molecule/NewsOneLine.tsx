import React from 'react';

type Props = {
  news: {
    date: string;
    title: string;
  };
};

const NewsOneLine: React.FC<Props> = ({ news }: Props) => {
  return (
    <div>
      <div>{news.date}</div>
      <div>{news.title}</div>
    </div>
  );
};

export default NewsOneLine;
