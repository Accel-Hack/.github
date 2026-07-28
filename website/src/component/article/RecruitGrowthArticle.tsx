'use client';

import React, { useState } from 'react';
import Article from '@/component/organism/Article';
import styles from './RecruitGrowthArticle.module.css';

const phases = ['見つける', '深ぼる', '解を出す', '実装する'];

type StoryKey = 'implementation' | 'project';

const stories: Record<
  StoryKey,
  {
    label: string;
    title: string;
    description: string;
    steps: { phase: string; text: string }[];
  }
> = {
  implementation: {
    label: '実装の中を広げる',
    title: '作る人から、実装を設計する人へ。',
    description:
      '手を動かすだけでなく、実装の進め方そのものを判断できる領域へ広がります。',
    steps: [
      {
        phase: '解を出す',
        text: '複数の技術や設計を比較し、実装方針を選ぶ。',
      },
      {
        phase: '深ぼる',
        text: '仕様やデータ、運用条件から問題の原因を突き止める。',
      },
      {
        phase: '見つける',
        text: '品質や運用を妨げる課題を、実装前に発見する。',
      },
    ],
  },
  project: {
    label: '案件全体へ広げる',
    title: '実装する人から、課題を解く人へ。',
    description:
      '技術の外側にある業務や事業まで理解し、解くべき課題の発見へ広がります。',
    steps: [
      {
        phase: '実装する',
        text: '作ることを目的にせず、現場で使われる成果まで届ける。',
      },
      {
        phase: '解を出す',
        text: '技術以外も含め、課題を解消する最適な方法を選ぶ。',
      },
      {
        phase: '深ぼる',
        text: '顧客の事業と現場に入り込み、要望の背景を理解する。',
      },
      {
        phase: '見つける',
        text: '発見から実装までを見渡し、解くべき課題を見つける。',
      },
    ],
  },
};

const RecruitGrowthArticle: React.FC = () => {
  const [activeStory, setActiveStory] = useState<StoryKey | null>(null);
  const story = activeStory ? stories[activeStory] : null;

  const routeStyle = (index: number) =>
    ({
      '--reveal-delay': `${(phases.length - 1 - index) * 130}ms`,
    }) as React.CSSProperties;

  return (
    <Article id="recruit-growth" caption="課題解決人材への成長">
      <section className={styles.container}>
        <div className={styles.message}>
          <p className={styles.kicker}>EXPAND YOUR FIELD</p>
          <h3>
            今あなたはどこにいますか？ <br />
            そして、どこに行きたいですか？
          </h3>

          <div
            className={`${styles.storyPanel} ${story ? styles.hasStory : ''}`}
            key={activeStory ?? 'waiting'}
          >
            {story ? (
              <>
                <p>{story.label}</p>
                <h3>{story.title}</h3>
                <span>{story.description}</span>
                <ol>
                  {story.steps.map((step) => (
                    <li key={step.phase}>
                      <strong>{step.phase}</strong>
                      {step.text}
                    </li>
                  ))}
                </ol>
              </>
            ) : (
              <>
                <p>SELECT A DIRECTION</p>
                <h3>成長ストーリーを選択</h3>
                <span>
                  図の矢印をクリックすると、その方向へ担当領域が広がります。
                </span>
              </>
            )}
          </div>
        </div>

        <div
          className={styles.visual}
          aria-label="実装から2つの方向へ担当領域が広がる成長図"
        >
          <span className={styles.ghostType} aria-hidden="true">
            02
          </span>

          <ol className={styles.outerTrack}>
            {phases.map((phase, index) => (
              <li
                key={`outer-${phase}`}
                className={activeStory === 'project' ? styles.isRoute : ''}
                style={routeStyle(index)}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{phase}</strong>
              </li>
            ))}
          </ol>

          <div className={styles.directionHub}>
            <button
              className={`${styles.directionButton} ${styles.projectArrow}`}
              type="button"
              aria-pressed={activeStory === 'project'}
              onClick={() => setActiveStory('project')}
            >
              <span className={styles.arrowGlyph} aria-hidden="true">
                ↑
              </span>
              案件全体へ広げる
            </button>
            <button
              className={`${styles.directionButton} ${
                styles.implementationArrow
              }`}
              type="button"
              aria-pressed={activeStory === 'implementation'}
              onClick={() => setActiveStory('implementation')}
            >
              <span className={styles.arrowGlyph} aria-hidden="true">
                ↙
              </span>
              実装の中を広げる
            </button>
          </div>

          <ol className={styles.innerTrack}>
            {phases.map((phase, index) => {
              const isOrigin = index === phases.length - 1;
              const isRoute = activeStory === 'implementation' && !isOrigin;

              return (
                <li
                  key={`inner-${phase}`}
                  className={`${isOrigin ? styles.origin : ''} ${
                    isRoute ? styles.isRoute : ''
                  }`}
                  style={routeStyle(index)}
                >
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{phase}</strong>
                  {isOrigin && (
                    <small>
                      <i aria-hidden="true" />
                      START
                    </small>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </section>
    </Article>
  );
};

export default RecruitGrowthArticle;
