import React from 'react';
import Article from '@/component/organism/Article';
import styles from './RecruitQAArticle.module.css';

type Props = {
  qas: {
    question: string;
    answer: string;
  }[];
};

const RecruitQAArticle: React.FC<Props> = ({ qas }: Props) => {
  return (
    <Article caption="採用に関するよくある質問">
      <div className={styles.container}>
        {qas.map((qa, i) => {
          return (
            <details key={i} className={styles.accordion}>
              <summary>{qa.question}</summary>
              <p>
                {qa.answer.split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </details>
          );
        })}
      </div>
    </Article>
  );
};

export default RecruitQAArticle;
