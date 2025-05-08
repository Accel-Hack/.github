'use server';
import React from 'react';
import Image from 'next/legacy/image';
import { Page } from '@/enum/Page';
import HeaderLogo from '@/asset/img/layout/header_logo.png';
import styles from './Header.module.css';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <Link className={styles.logo_container} href={Page.TOP}>
        <div className={styles.logo}>
          <Image
            src={HeaderLogo.src}
            alt="ACCELHACK.inc"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </Link>
    </div>
  );
};

export default Header;
