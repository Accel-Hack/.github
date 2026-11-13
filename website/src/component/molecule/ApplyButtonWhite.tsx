import React from 'react';
import Link from 'next/link';
import styles from './ApplyButtonWhite.module.css';
import Cursor from '@/asset/img/common/cursor.svg';

type Props = {
  href: string;
  title: string;
  text: string;
};

const ApplyButtonWhite: React.FC<Props> = ({ href, title, text }) => {
  return (
    <Link href={href} className={styles.link_box}>
      <div className={styles.link_text}>
        <div className={styles.title}>{title}</div>
        <div className={styles.text}>{text}</div>
      </div>
      <Cursor className={styles.cursor} />
    </Link>
  );
};

export default ApplyButtonWhite;
