import React from 'react';
import styles from './BlogSection.module.css';
import Image from 'next/image';

export type BlogSectionType =
  | 'text'
  | 'image_center'
  | 'image_left'
  | 'image_right';

type Props = {
  blockType: BlogSectionType;
  content?: string;
  imgSrc?: string;
  title?: string;
  date?: string;
};

const BlogSection: React.FC<Props> = ({
  blockType,
  content,
  imgSrc,
  title,
  date,
}: Props) => {
  return (
    <div className={`${styles.container} ${styles[`${blockType}`]}`}>
      {blockType != 'text' && imgSrc && (
        <div className={styles.section_size}>
          <Image
            src={imgSrc}
            alt={'img'}
            width={500}
            height={0}
            style={{
              width: '100%',
              height: 'auto',
              minHeight: '23rem',
              maxHeight: '23rem',
              objectFit: 'cover',
            }}
          />
        </div>
      )}
      {content && (
        <div className={styles.section_size}>
          <div className={styles.title_wrapper}>
            {title && <div className={styles.title}>{title}</div>}
            {date && <div className={styles.date}>{date}</div>}
          </div>
          <div>
            {content.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogSection;
