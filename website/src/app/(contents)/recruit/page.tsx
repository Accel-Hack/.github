import React from 'react';
import WhatIsArticle from '@/component/article/WhatIsArticle';
import ContentHeader from '@/component/molecule/ContentHeader';
import PositionArticle from '@/component/article/PositionArticle';
import EnvironmentArticle from '@/component/article/EnvironmentArticle';
import SelectionFlowArticle from '@/component/article/SelectionFlowArticle';
import RecruitQAArticle from '@/component/article/RecruitQAArticle';
import POSITIONS from '../../../data/positions.json';
import QAS from '../../../data/qas.json';
import styles from '@/app/(contents)/about/page.module.css';

const RecruitPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <ContentHeader caption="Recruit" />
      <div className={styles.articles}>
        <WhatIsArticle />
        <PositionArticle positions={POSITIONS} />
        <EnvironmentArticle />
        <SelectionFlowArticle />
        <RecruitQAArticle qas={QAS} />
      </div>
    </div>
  );
};

export default RecruitPage;
