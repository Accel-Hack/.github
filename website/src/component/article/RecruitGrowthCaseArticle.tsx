import React from 'react';
import Article from '@/component/organism/Article';
import styles from './RecruitGrowthCaseArticle.module.css';

const RecruitGrowthCaseArticle: React.FC = () => {
  return (
    <Article id="recruit-growth-case" caption="成長実例">
      <section className={styles.container}>
        <header className={styles.meta}>
          <span>CASE 01 / ENGINEER</span>
          <span>DOUBLE DIAMOND GROWTH</span>
        </header>
        <div className={styles.layout}>
          <div className={styles.stage}>
            <small>BEFORE / MICRO</small>
            <h2>
              ただの「実装する」
              <br />
              Engineer
            </h2>
          </div>
          <div className={styles.path} aria-hidden="true">
            <div className={styles.diamonds}>
              <i />
              <i />
            </div>
            <b>FRAMEWORK</b>
            <span>→</span>
          </div>
          <div className={styles.stage}>
            <small>AFTER / MACRO</small>
            <h2>
              上流エンジニア
              <br />
              として成功
            </h2>
            <strong>
              +200<span>万円 / 年収</span>
            </strong>
          </div>
        </div>
      </section>
    </Article>
  );
};

export default RecruitGrowthCaseArticle;
