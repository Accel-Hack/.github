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
    <div className={'px-4 py-2 bg-white border-t-[0.5px] border-b-[0.5px] border-solid border-border'}>
      <span className={'text-xl block mb-2'}>News</span>
      {newses.map((news, i) => {
        return <NewsOneLine key={i} news={news} />;
      })}
    </div>
  );
};

export default NewsSummary;
