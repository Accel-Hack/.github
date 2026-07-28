'use client';

import React, { useState } from 'react';
import styles from './RecruitPhaseCycle.module.css';

type Phase = {
  number: string;
  title: string;
  hint: string;
  detail: string;
};

const projectPhases: Phase[] = [
  {
    number: '01',
    title: '見つける',
    hint: '課題を発見する',
    detail: '現場と経営、双方の声を集め、いま本当に解くべき課題を見つけます。',
  },
  {
    number: '02',
    title: '深ぼる',
    hint: '原因を突き止める',
    detail:
      '業務や事業への理解を深め、表面的な要望の奥にある原因を突き止めます。',
  },
  {
    number: '03',
    title: '解を出す',
    hint: '解決方法を選ぶ',
    detail:
      '技術と生成AIを掛け合わせ、課題に対して最も効果的な解決方法を導きます。',
  },
  {
    number: '04',
    title: '実装する',
    hint: '使える形にする',
    detail: '選んだ解決方法を、現場で使い続けられるシステムとして形にします。',
  },
];

const implementationPhases: Phase[] = [
  {
    number: '01',
    title: '見つける',
    hint: '実装上の課題を発見する',
    detail:
      '仕様の曖昧さ、技術的な制約、運用上のリスクなど、実装を妨げる課題を見つけます。',
  },
  {
    number: '02',
    title: '深ぼる',
    hint: '前提を整理する',
    detail:
      'データや既存環境、利用者の動きを確認し、問題が起きる条件と原因を整理します。',
  },
  {
    number: '03',
    title: '解を出す',
    hint: '実装方針を決める',
    detail:
      '複数の設計や技術を比較し、品質・速度・運用を両立できる実装方針を選びます。',
  },
  {
    number: '04',
    title: '実装する',
    hint: '検証しながら届ける',
    detail:
      '設計、開発、テスト、改善を繰り返し、利用者に価値が届く状態まで仕上げます。',
  },
];

type PhaseRowProps = {
  phases: Phase[];
  variant: 'project' | 'implementation';
  flippedCards: Set<string>;
  onToggle: (cardId: string) => void;
};

const PhaseRow: React.FC<PhaseRowProps> = ({
  phases,
  variant,
  flippedCards,
  onToggle,
}) => (
  <ol
    className={`${styles.phaseRow} ${
      variant === 'implementation' ? styles.implementationRow : ''
    }`}
  >
    {phases.map((phase) => {
      const cardId = `${variant}-${phase.number}`;
      const isFlipped = flippedCards.has(cardId);

      return (
        <li className={styles.phaseItem} key={cardId}>
          <button
            className={`${styles.phaseCard} ${
              isFlipped ? styles.isFlipped : ''
            }`}
            type="button"
            aria-pressed={isFlipped}
            aria-label={`${phase.title}。${
              isFlipped ? phase.detail : 'クリックして具体的な内容を表示'
            }`}
            onClick={() => onToggle(cardId)}
          >
            <span className={styles.cardInner}>
              <span className={styles.cardFront} aria-hidden={isFlipped}>
                <span className={styles.phaseNumber}>{phase.number}</span>
                <strong>{phase.title}</strong>
                <small>{phase.hint}</small>
                <span className={styles.flipHint}>CLICK / FLIP</span>
              </span>
              <span className={styles.cardBack} aria-hidden={!isFlipped}>
                <span className={styles.phaseNumber}>{phase.number}</span>
                <strong>{phase.title}とは</strong>
                <span className={styles.detail}>{phase.detail}</span>
                <span className={styles.flipHint}>CLICK / BACK</span>
              </span>
            </span>
          </button>
        </li>
      );
    })}
  </ol>
);

const RecruitPhaseCycle: React.FC = () => {
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());

  const toggleCard = (cardId: string) => {
    setFlippedCards((current) => {
      const next = new Set(current);

      if (next.has(cardId)) {
        next.delete(cardId);
      } else {
        next.add(cardId);
      }

      return next;
    });
  };

  return (
    <figure
      className={styles.container}
      aria-label="課題解決と実装で繰り返す4つのプロセス"
    >
      <p className={styles.instruction}>
        パネルをクリックすると、具体的な行動を確認できます
      </p>
      <div className={styles.cycleFrame}>
        <PhaseRow
          phases={projectPhases}
          variant="project"
          flippedCards={flippedCards}
          onToggle={toggleCard}
        />
        <span className={styles.nestConnector} aria-hidden="true" />
        <PhaseRow
          phases={implementationPhases}
          variant="implementation"
          flippedCards={flippedCards}
          onToggle={toggleCard}
        />
      </div>
    </figure>
  );
};

export default RecruitPhaseCycle;
