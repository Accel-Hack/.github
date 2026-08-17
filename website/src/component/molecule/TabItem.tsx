'use client';
import { Page } from '@/enum/Page';
import styles from './TabItem.module.css';
import Link from 'next/link';

type Props = {
  page: Page;
  type: 'primary' | 'secondary';
  isCurrent?: boolean;
};

const TabItem: React.FC<Props> = ({
  page,
  type = 'primary',
  isCurrent = false,
}: Props) => {
  const item = (page: Page) => {
    switch (page) {
      case Page.ABOUT:
        return { caption: 'About', detail: '01 / COMPANY' };
      case Page.SERVICE:
        return { caption: 'Works', detail: '02 / PROJECTS' };
      case Page.RECRUIT:
        return { caption: 'Recruit', detail: '03 / PEOPLE' };
      case Page.BLOG:
        return { caption: 'Blog', detail: '04 / JOURNAL' };
      case Page.CONTACT:
        return { caption: 'Contact', detail: '05 / CONNECT' };
      default:
        return { caption: '', detail: '' };
    }
  };

  const { caption, detail } = item(page);

  return (
    <Link
      href={page}
      className={`${styles.container} ${isCurrent ? styles.current : ''}`}
      aria-current={isCurrent ? 'page' : undefined}
    >
      <div
        className={`${styles.content} ${type == 'primary' ? styles.primary : styles.secondary}`}
      >
        <span className={styles.label}>
          <strong>{caption}</strong>
          <small>{detail}</small>
        </span>
        <div className={styles.arrow}>→</div>
      </div>
    </Link>
  );
};

export default TabItem;
