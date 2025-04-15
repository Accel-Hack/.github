import React from 'react';
import ArticleHeader from '@/component/molecule/ArticleHeader';
import styles from './Article.module.css'

type Props = {
  caption: string;
  children: React.ReactNode;
};

const Article: React.FC<Props> = ({ caption, children }: Props) => {
  return (
    <div className={styles.container}>
      <ArticleHeader caption={caption} />
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Article;
