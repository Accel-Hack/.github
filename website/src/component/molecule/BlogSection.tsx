import React from 'react';
import styles from './BlogSection.module.css';
import Image from 'next/image';

type Props = {
  imageSide: 'left' | 'right';
  content: string;
  imgSrc: string;
  title?: string;
  date?: string;
};

const BlogSection: React.FC<Props> = ({
  imageSide,
  content,
  imgSrc,
  title,
  date,
}: Props) => {
  function getContent() {
    switch (imageSide) {
      case 'left':
        return (
          <>
            <Image
              src={imgSrc}
              alt={'img'}
              width={500}
              height={0}
              style={{
                width: '50%',
                height: 'auto',
              }}
            />
            <div style={{ width: '50%' }}>
              <div className={styles.title_wrapper}>
                {title && <div className={styles.title}>{title}</div>}
                {date && <div className={styles.date}>{date}</div>}
              </div>
              <div>{content}</div>
            </div>
          </>
        );
      case 'right':
        return (
          <>
            <div style={{ width: '50%' }}>
              <div>{content}</div>
            </div>
            <Image
              src={imgSrc}
              alt={'img'}
              width={500}
              height={0}
              style={{
                width: '50%',
                height: 'auto',
              }}
            />
          </>
        );
    }
  }

  return <div className={styles.container}>{getContent()}</div>;
};

export default BlogSection;
