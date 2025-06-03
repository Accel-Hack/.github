import React from 'react';
import styles from './ContentHeader.module.css';

type Props = {
  caption: string;
};

const ContentHeader: React.FC<Props> = ({ caption }: Props) => {
  return <div className={styles.content_header}>{caption}</div>;
};

export default ContentHeader;
