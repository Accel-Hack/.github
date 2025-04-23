import React from 'react';
import Article from '@/component/organism/Article';
import Accelhack1 from '@/asset/img/common/accelhack1.png';
import Image from 'next/image';
import styles from './BlogArticle.module.css';
import Link from 'next/link';

type Props = {
  category: string,
  blog: {
    id: string;
    title: string;
    thumbnail: string;
    description: string;
    section: string[]
  };
};

const BlogArticle: React.FC<Props> = ({category, blog }: Props) => {
  return (
    <Article caption={category}>
      <div className={styles.container}>
        <Image
          src={Accelhack1.src}
          alt={'dummmy'}
          width={500}
          height={0}
          style={{ width: '100%', height: 'auto' }}
        />
        <div className={styles.blog_title}>{blog.title}</div>
        <div className={styles.blog_description}>{blog.section[0]}</div>
        <div className={styles.button_container}>
          <Link href={`/blog/${blog.id}`} className={styles.button}>
            詳細
          </Link>
        </div>
      </div>
    </Article>
  );
};

export default BlogArticle;
