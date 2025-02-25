import React from 'react';
import WhatIsArticle from '@/component/article/WhatIsArticle';
import ContentHeader from '@/component/molecule/ContentHeader';
import PositionArticle from '@/component/article/PositionArticle';
import EnvironmentArticle from '@/component/article/EnvironmentArticle';
import SelectionFlowArticle from '@/component/article/SelectionFlowArticle';
import RecruitQAArticle from '@/component/article/RecruitQAArticle';
import POSITIONS from '../../../data/positions.json';
import QAS from '../../../data/qas.json';

const RecruitPage: React.FC = () => {
  return (
    <div>
      <ContentHeader caption="Recruit" />
      <WhatIsArticle />
      <PositionArticle positions={POSITIONS} />
      <EnvironmentArticle />
      <SelectionFlowArticle />
      <RecruitQAArticle qas={QAS} />
    </div>
  );
};

export default RecruitPage;
