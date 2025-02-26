'use client';
import { Page } from '@/enum/Page';
import styles from './TabItem.module.css';
import { redirect } from 'next/navigation';

type Props = {
  page: Page;
  type: 'primary' | 'secondary';
};

const TabItem: React.FC<Props> = ({ page, type = 'primary' }: Props) => {
  const caption = (page: Page) => {
    switch (page) {
      case Page.ABOUT:
        return 'About';
      case Page.SERVICE:
        return 'Service';
      case Page.RECRUIT:
        return 'Recruit';
      case Page.BLOG:
        return 'Blog';
      case Page.CONTACT:
        return 'Contact';
      case Page.PRIVACY_POLICY:
        return 'Privacy&Policy';
    }
  };

  const segue = () => {
    redirect(page);
  };

  return (
    <div className={styles.container} onClick={segue}>
      <div
        className={`${styles.content} ${type == 'primary' ? styles.primary : styles.secondary}`}
      >
        <div>{caption(page)}</div>
        <div className={styles.arrow}>→</div>
      </div>
    </div>
  );
};

export default TabItem;
