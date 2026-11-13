import React from 'react';
import styles from './ArticleHeader.module.css';
import PullDown from './PullDown';
import { NavItem } from './PullDown';

type Props = {
  caption: string;
  navItems?: NavItem[];
};

const ArticleHeader: React.FC<Props> = ({ caption, navItems }: Props) => {
  return (
    <div className={styles.article_header_container}>
      <span className={styles.article_header_index} aria-hidden="true" />
      <span className={styles.article_header_caption}>{caption}</span>

      <span className={styles.article_header_pulldown}>
        {navItems && navItems.length > 0 && <PullDown navItems={navItems} />}
      </span>
    </div>
  );
};

export default ArticleHeader;
