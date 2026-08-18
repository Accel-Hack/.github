import React from 'react';
import Article from '@/component/organism/Article';
import styles from './RecruitFrameworkArticle.module.css';

const phases = [
  { title: '見つける', label: 'DISCOVER' },
  { title: '深ぼる', label: 'DEFINE' },
  { title: '解を出す', label: 'DEVELOP' },
  { title: '実装する', label: 'DELIVER' },
] as const;

const scales = [
  {
    label: 'MACRO / 01',
    type: 'PROJECT',
    title: 'プロジェクト全体',
    description: '課題の発見から、解決策を届けるまで。',
  },
  {
    label: 'MESO / 02',
    type: 'PHASE',
    title: '一つの工程',
    description: '「見つける」「実装する」それぞれの中にも。',
  },
  {
    label: 'MICRO / 03',
    type: 'TASK',
    title: '一つの判断',
    description: '小さな技術選定や改善の中にも。',
  },
];

const RecruitFrameworkArticle: React.FC = () => {
  return (
    <Article id="recruit-framework" caption="AccelHackの課題解決フレームワーク">
      <section className={styles.container}>
        <div className={styles.statement}>
          <p>フラクタルダイヤモンドフレームワーク</p>
          <p className={styles.annotation}>
            <strong>「ダブルダイヤモンド」とは</strong>
            課題の探索と解決策の検討において、発散と収束を二度繰り返す課題解決のフレームワークです。
          </p>
        </div>

        <div className={styles.framework}>
          <div className={styles.spaceLabels} aria-hidden="true">
            <span>PROBLEM SPACE</span>
            <span>SOLUTION SPACE</span>
          </div>
          <div
            className={styles.diamonds}
            aria-label="プロジェクト全体のダブルダイヤモンドと、各工程の中にあるダブルダイヤモンド"
          >
            {[phases.slice(0, 2), phases.slice(2, 4)].map(
              (diamondPhases, diamondIndex) => (
                <div className={styles.diamond} key={diamondIndex}>
                  {diamondPhases.map((phase) => (
                    <div className={styles.phaseCell} key={phase.title}>
                      <strong>{phase.title}</strong>
                      <small>{phase.label}</small>
                      <span className={styles.innerDiamonds} aria-hidden="true">
                        <i />
                        <i />
                      </span>
                    </div>
                  ))}
                </div>
              ),
            )}
          </div>
          <div className={styles.figureLegend} aria-hidden="true">
            <span>PROJECT / MACRO</span>
            <span>PHASE / FRACTAL DIAMOND</span>
          </div>
        </div>

        <div className={styles.scaleBlock}>
          <p className={styles.scaleMessage}>
            何かを「見つけ」ようと思えば、さらにこのダイヤモンドが現れ、「実装する」にもこのダイヤモンドが現れます。
          </p>
          <div className={styles.scaleGrid}>
            {scales.map((scale, index) => (
              <article key={scale.type} className={styles.scaleCard}>
                <header>
                  <span>{scale.label}</span>
                  <small>{scale.type}</small>
                </header>
                <h2>{scale.title}</h2>
                <p>{scale.description}</p>
                <div
                  className={styles.scaleDiamonds}
                  data-scale={index + 1}
                  aria-hidden="true"
                >
                  <i />
                  <i />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Article>
  );
};

export default RecruitFrameworkArticle;
