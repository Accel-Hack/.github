import React from 'react';
import Image from 'next/legacy/image';
import styles from '@/component/layout/Footer.module.css';
import Copyright from '@/asset/img/layout/copyright.png';

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.logo_container}>
        <div className={styles.copyright}>
          <Image
            src={Copyright.src}
            alt="ACCELHACK.inc"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
