import React from 'react';
import AboutSections from '@/component/article/AboutSections';
import ContentNavigation from '@/component/organism/ContentNavigation';

const AboutPage: React.FC = () => {
  return (
    <>
      <ContentNavigation page="about" />
      <AboutSections />
    </>
  );
};

export default AboutPage;
