import React from 'react';
import styles from './page.module.css';
import JoinUsArticle from '@/component/article/JoinUsArticle';
import OurMessageArticle from '@/component/article/OurMessageArticle';
import OurWorkArticle from '@/component/article/OurWorkArticle';
import WhyAccelHackArticle from '@/component/article/WhyAccelHackArticle';
import WorkStyleArticle from '@/component/article/WorkStyleArticle';
import OpenPositionArticle from '@/component/article/OpenPositionArticle';
import SelectionFAQArticle from '@/component/article/SelectionFAQArticle';
import EntryTalkArticle from '@/component/article/EntryTalkArticle';

const RecruitPage: React.FC = () => {
  return (
    <>
      <span className={styles.pageAnchor} id="recruit-overview" />
      <JoinUsArticle />
      <OurMessageArticle />
      <OurWorkArticle />
      <WhyAccelHackArticle />
      <WorkStyleArticle />
      <OpenPositionArticle />
      <SelectionFAQArticle />
      <EntryTalkArticle />
    </>
  );
};

export default RecruitPage;
