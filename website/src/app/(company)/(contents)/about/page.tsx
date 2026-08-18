import React from 'react';
import AboutSections from '@/component/article/AboutSections';
import ContentNavigation from '@/component/organism/ContentNavigation';
import ContentSectionRail from '@/component/organism/ContentSectionRail';

const AboutPage: React.FC = () => {
  return (
    <>
      <ContentSectionRail page="about" />
      <ContentNavigation page="about" />
      <AboutSections />
    </>
  );
};

export default AboutPage;
