import React from 'react';
import Article from '@/component/organism/Article';
import styles from './RecruitGrowthArticle.module.css';

const growthSteps = [
  { number: '01 / MICRO', title: '個別の実装・判断', type: 'TASK' },
  { number: '02 / PHASE', title: '一つの工程を設計する', type: 'PHASE' },
  {
    number: '03 / MACRO',
    title: '課題解決全体を動かす',
    type: 'PROJECT',
  },
];

const RecruitGrowthArticle: React.FC = () => {
  return (
    <Article id="recruit-growth" caption="課題解決人材への成長">
      <section className={styles.container}>
        <div className={styles.message}>
          <h2>
            今あなたはどこにいますか？
            <br />
            そして、どこに行きたいですか？
          </h2>
          <p>
            個別の実装から工程全体へ、工程全体からプロジェクト全体へ。扱うダイヤモンドの範囲を広げます。
          </p>
        </div>
        <ol className={styles.track}>
          {growthSteps.map((step) => (
            <li key={step.number}>
              <span>{step.number}</span>
              <strong>{step.title}</strong>
              <small>{step.type}</small>
            </li>
          ))}
        </ol>
      </section>
    </Article>
  );
};

export default RecruitGrowthArticle;
