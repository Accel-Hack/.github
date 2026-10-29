import React from 'react';
import Link from 'next/link';
import styles from './ApplyFormLink.module.css';
import Cursor from '@/asset/img/common/cursor.svg';

type Props = {
  href: string;
  text: string;
};

const ApplyFormLink: React.FC<Props> = ({ href, text }) => {
  return (
    <Link href={href} className={styles.link_box}>
      <span className={styles.link_text}>{text}</span>
      <Cursor className={styles.cursor} />
    </Link>
  );
};

export default ApplyFormLink;
