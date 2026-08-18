import React from 'react';
import Article from '@/component/organism/Article';
import styles from './RecruitInformationArticle.module.css';

type Props = {
  positions: { title: string; thumbnail: string }[];
  conditions: { title: string; description: string }[];
  qas: { question: string; answer: string }[];
};

const environment = [
  ['従業員数', '22名（うちパート・アルバイト13名）'],
  ['平均年齢', '29.8歳（パート・アルバイト除く）'],
  ['職種構成', 'Engineer 21名 / Back Office 1名'],
  ['休日', '完全週休2日制（土・日）/ 祝日・夏休み・年末年始'],
  ['福利厚生', '年10日の有給付与 / 看護休暇・育児休暇など'],
  [
    '教育制度',
    '初心者向け研修講座（目安2ヶ月）/ スキルアップ手当 / 月1回の役員によるFB面談 / その他、成長につながるものなら何でも相談可',
  ],
];

const RecruitInformationArticle: React.FC<Props> = ({
  positions,
  conditions,
  qas,
}) => {
  return (
    <Article id="recruit-information" caption="AccelHackで働く">
      <section className={styles.container}>
        <article className={`${styles.card} ${styles.about}`}>
          <p className={styles.label}>WHAT&apos;S ACCELHACK</p>
          <h2>
            エンジニアを煩雑な作業から解放し
            <br />
            『エンジニア』を再評価する
          </h2>
          <p>
            AccelHackは、最新のAIエージェントをフル活用するための独自ツールを開発し、AIにできることはAIに任せ、人にしかできないことを最大化する取り組みを常に続けていくことを約束します。
          </p>
        </article>

        <article className={styles.card}>
          <p className={styles.label}>OPEN POSITIONS</p>
          <h2>募集中のポジション</h2>
          <div className={styles.positions}>
            {positions.map((position) => (
              <span key={position.title}>{position.title}</span>
            ))}
          </div>
          <dl className={styles.conditions}>
            {conditions.map((condition) => (
              <div key={condition.title}>
                <dt>{condition.title}</dt>
                <dd>{condition.description}</dd>
              </div>
            ))}
          </dl>
        </article>

        <article className={styles.card}>
          <p className={styles.label}>WORKING ENVIRONMENT</p>
          <h2>働く環境</h2>
          <dl className={styles.environment}>
            {environment.map(([title, description]) => (
              <div key={title}>
                <dt>{title}</dt>
                <dd>{description}</dd>
              </div>
            ))}
          </dl>
        </article>

        <article className={`${styles.card} ${styles.faq}`}>
          <p className={styles.label}>FAQ</p>
          <h2>採用に関するよくある質問</h2>
          <div className={styles.questions}>
            {qas.map((qa) => (
              <details key={qa.question}>
                <summary>{qa.question}</summary>
                <p>{qa.answer}</p>
              </details>
            ))}
          </div>
        </article>
      </section>
    </Article>
  );
};

export default RecruitInformationArticle;
