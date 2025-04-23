import React from 'react';
import styles from './BlogSection.module.css';
import Image from 'next/image';

type Props = {
  imageSide: 'left' | 'right' | 'none' | 'center';
  content?: string;
  imgSrc?: string;
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
  return (
    <div className={`${styles.container} ${styles[`image_${imageSide}`]}`}>
      {imageSide != 'none' && imgSrc && (
        <div className={styles.section_size}>
          <Image
            src={imgSrc}
            alt={'img'}
            width={500}
            height={0}
            style={{
              width: '100%',
              height: 'auto',
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
