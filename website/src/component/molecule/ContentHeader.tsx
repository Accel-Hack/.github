import React from 'react';
import styles from './ContentHeader.module.css';
import ArticleHeader from '@/component/molecule/ArticleHeader';

type Props = {
  caption: string;
};

const ContentHeader: React.FC<Props> = ({ caption }: Props) => {
  return (
    <>
      <div className={styles.content_header}>{caption}</div>
      <div>
        <ArticleHeader caption={caption} />
      </div>
    </>
  );
};

export default ContentHeader;
