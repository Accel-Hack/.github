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
        <div style={{ width: 360 }}>
          <WhatIsArticle />
        </div>
        <div style={{ flexGrow: 1 }}>
          <PositionArticle positions={POSITIONS} conditions={CONDITIONS} />
        </div>
      </div>
      <EnvironmentArticle />
      <div className={styles.page}>
        <div style={{ width: 360 }}>
          <SelectionFlowArticle />
        </div>
        <div style={{ flexGrow: 1 }}>
          <RecruitQAArticle qas={QAS} />
        </div>
      </div>
    </>
  );
};

export default RecruitPage;
