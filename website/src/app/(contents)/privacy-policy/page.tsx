import React from 'react';
import ContentHeader from '@/component/molecule/ContentHeader';
import styles from '@/app/(contents)/about/page.module.css';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <ContentHeader caption="PrivacyPolicy" />
    </div>
  );
};

export default PrivacyPolicyPage;
