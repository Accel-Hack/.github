import React from 'react';
import WhatIsArticle from '@/component/article/WhatIsArticle';
import PositionArticle from '@/component/article/PositionArticle';
import EnvironmentArticle from '@/component/article/EnvironmentArticle';
import SelectionFlowArticle from '@/component/article/SelectionFlowArticle';
import RecruitQAArticle from '@/component/article/RecruitQAArticle';
import POSITIONS from '../../../data/positions.json';
import CONDITIONS from '../../../data/conditions.json';
import QAS from '../../../data/qas.json';
import styles from './page.module.css';

const RecruitPage: React.FC = () => {
  return (
    <>
      <div className={styles.page}>
        <div className={styles.left_container}>
          <WhatIsArticle />
        </div>
        <div className={styles.right_container}>
          <PositionArticle positions={POSITIONS} conditions={CONDITIONS} />
        </div>
      </div>
      <div className={styles.page}>
        <div className={styles.left_container}>
          <EnvironmentArticle />
          <SelectionFlowArticle />
        </div>
        <div className={styles.right_container}>
          <RecruitQAArticle qas={QAS} />
        </div>
      </div>
    </>
  );
};

export default RecruitPage;
