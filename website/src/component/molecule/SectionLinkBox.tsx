import React from 'react';
import Link from 'next/link';
import styles from './SectionLinkBox.module.css';
import Cursor from '@/asset/img/common/cursor.svg';

type Props = {
  href: string;
  text: string;
};

const SectionLinkBox: React.FC<Props> = ({ href, text }) => {
  return (
    <Link href={href} className={styles.link_box}>
      <span className={styles.text}>{text}</span>
      <Cursor className={styles.cursor} />
    </Link>
  );
};

export default SectionLinkBox;
