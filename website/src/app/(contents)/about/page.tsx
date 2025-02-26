import React from 'react';
import MVVArticle from '@/component/article/MVVArticle';
import AboutArticle from '@/component/article/AboutArticle';
import ContentHeader from '@/component/molecule/ContentHeader';
import AccessMap from '@/component/organism/AccessMap';
import styles from './page.module.css';

const AboutPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.articles}>
        <ContentHeader caption="About" />
        <MVVArticle />
        <AboutArticle />
        <AccessMap />
      </div>
    </div>
  );
};

export default AboutPage;
