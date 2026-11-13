import React from 'react';
import styles from './ContentHeader.module.css';
import PullDown, { NavItem } from './PullDown';

type Props = {
  caption: string;
  navItems?: NavItem[];
};

const ContentHeader: React.FC<Props> = ({ caption, navItems }: Props) => {
  return (
    <div className={styles.content_header}>
      <span className={styles.caption}>{caption}</span>

      {navItems && navItems.length > 0 && (
        <span className={styles.pulldown}>
          <PullDown navItems={navItems} />
        </span>
      )}
    </div>
  );
};

export default ContentHeader;
