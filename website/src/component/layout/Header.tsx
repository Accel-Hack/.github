'use client';
import React from 'react';
import { redirect } from 'next/navigation';
import Image from 'next/legacy/image';
import { Page } from '@/enum/Page';
import HeaderLogo from '@/asset/img/layout/header_logo.png';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const toTop = () => {
    redirect(Page.TOP);
  };
  return (
    <div className={styles.header}>
      <div className={styles.logo_container} onClick={toTop}>
        <div className={styles.logo}>
          <Image
            src={HeaderLogo.src}
            alt="ACCELHACK.inc"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
