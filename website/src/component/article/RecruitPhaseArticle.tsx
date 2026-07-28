import React from 'react';
import Article from '@/component/organism/Article';
import RecruitPhaseCycle from '@/component/organism/RecruitPhaseCycle';
import styles from './RecruitPhaseArticle.module.css';

const RecruitPhaseArticle: React.FC = () => {
  return (
    <Article id="recruit-phase" caption="課題解決のプロセス">
      <div className={styles.content}>
        <RecruitPhaseCycle />
      </div>
    </Article>
  );
};

export default RecruitPhaseArticle;
