import React from 'react';
import styles from '@/component/layout/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.logo_container}>
        <div className={styles.copyright}>
          ©︎ 2025 ACCELHACK.inc ALL rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
