import React from 'react';
import styles from '@/component/layout/Footer.module.css';
import { Page } from '@/enum/Page';

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_container}>
        <a href={Page.PRIVACY_POLICY} className={styles.pivacy_policy}>
          プライバシーポリシー
        </a>
        <div className={styles.copyright}>
          ©︎ 2025 ACCELHACK.inc ALL rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
