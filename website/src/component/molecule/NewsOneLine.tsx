import React from 'react';

type Props = {
  news: {
    date: string;
    title: string;
  };
};

const NewsOneLine: React.FC<Props> = ({ news }: Props) => {
  return (
    <div className={'flex flex-row text-xs'}>
      <span className={'mr-2'}>{news.date}</span>
      <span className={''}>{news.title}</span>
    </div>
  );
};

export default NewsOneLine;
