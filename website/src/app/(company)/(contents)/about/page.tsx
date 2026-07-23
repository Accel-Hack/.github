import React from 'react';
import MVVArticle from '@/component/article/MVVArticle';
import AboutArticle from '@/component/article/AboutArticle';
import WorkArticle from '@/component/article/WorkArticle';

const AboutPage: React.FC = () => {
  return (
    <>
      <MVVArticle />
      <AboutArticle />
      <WorkArticle />
    </>
  );
};

export default AboutPage;
