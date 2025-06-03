import React from 'react';
import styles from './ArticleHeader.module.css';

type Props = {
  caption: string;
};

const ArticleHeader: React.FC<Props> = ({ caption }: Props) => {
  return (
    <div className={styles.article_header_container}>
      <span className={styles.article_header_caption}>{caption}</span>
    </div>
  );
};

export default ArticleHeader;
