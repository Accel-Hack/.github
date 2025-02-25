import React from 'react';
import NewsOneLine from '@/component/molecule/NewsOneLine';

type Props = {
  newses: {
    date: string;
    title: string;
  }[];
};

const NewsSummary: React.FC<Props> = ({ newses }: Props) => {
  return (
    <div>
      {newses.map((news, i) => {
        return <NewsOneLine key={i} news={news} />;
      })}
    </div>
  );
};

export default NewsSummary;
