import React from 'react';
import MVVArticle from '@/component/article/MVVArticle';
import AboutArticle from '@/component/article/AboutArticle';
import ContentHeader from '@/component/molecule/ContentHeader';

const AboutPage: React.FC = () => {
  return (
    <div>
      <div>
        <ContentHeader caption="About" />
        <MVVArticle />
        <AboutArticle />
      </div>
    </div>
  );
};

export default AboutPage;
