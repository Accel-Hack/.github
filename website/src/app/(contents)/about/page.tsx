import React from 'react';
import MVVArticle from '@/component/article/MVVArticle';
import AboutArticle from '@/component/article/AboutArticle';
import ContentHeader from '@/component/molecule/ContentHeader';
import styles from './page.module.css';
import WorkArticle from '@/component/article/WorkArticle';

const AboutPage: React.FC = () => {
  return (
    <>
    <ContentHeader caption="About" />
    <div className={styles.container}>
      <div className={styles.articles}>
        <MVVArticle />
        <AboutArticle />
        <WorkArticle />
      </div>
    </div>
    </>
  );
};

export default AboutPage;
