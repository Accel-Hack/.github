import React from 'react';
import Article from '@/component/organism/Article';

type Props = {
  qas: {
    question: string;
    answer: string;
  }[];
};

const RecruitQAArticle: React.FC<Props> = ({ qas }: Props) => {
  return (
    <Article caption="採用に関するよくある質問">
      {qas.map((qa, i) => {
        return (
          <div key={i}>
            <div>{qa.question}</div>
            <div>{qa.answer}</div>
          </div>
        );
      })}
    </Article>
  );
};

export default RecruitQAArticle;
