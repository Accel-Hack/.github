import React from 'react';
import RecruitFrameworkArticle from '@/component/article/RecruitFrameworkArticle';
import RecruitGrowthArticle from '@/component/article/RecruitGrowthArticle';
import RecruitInformationArticle from '@/component/article/RecruitInformationArticle';
import RecruitGrowthCaseArticle from '@/component/article/RecruitGrowthCaseArticle';
import ContentSectionRail from '@/component/organism/ContentSectionRail';
import POSITIONS from '../../../../data/positions.json';
import CONDITIONS from '../../../../data/conditions.json';
import QAS from '../../../../data/qas.json';
import styles from './page.module.css';

const RecruitPage: React.FC = () => {
  return (
    <>
      <span className={styles.pageAnchor} id="recruit-overview" />
      <ContentSectionRail page="recruit" />
      <RecruitFrameworkArticle />
      <RecruitGrowthArticle />
      <RecruitInformationArticle
        positions={POSITIONS}
        conditions={CONDITIONS}
        qas={QAS}
      />
      <RecruitGrowthCaseArticle />
    </>
  );
};

export default RecruitPage;
