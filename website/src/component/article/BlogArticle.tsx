import React from 'react';
import Article from '@/component/organism/Article';
import Accelhack1 from '@/asset/img/common/accelhack1.png';
import Image from 'next/image';
import styles from './BlogArticle.module.css';
import Link from 'next/link';
import PublicDirPathUtil from '@/utils/PublicDirPathUtil';

type Props = {
  category_code: string;
  category: string;
  blog: {
    id: string;
    title: string;
    thumbnail: string;
    description: string;
    blocks: {
      type: string;
      imgSrc: string;
      text: string;
    }[];
  };
};

const BlogArticle: React.FC<Props> = ({
  category_code,
  category,
  blog,
}: Props) => {
  return (
    <Article caption={category}>
      <div className={styles.container}>
        <Image
          src={PublicDirPathUtil.getBlogImage(
            category_code,
            blog.id,
            blog.thumbnail,
          )}
          alt={Accelhack1.src}
          width={500}
          height={0}
          style={{
            width: '100%',
            height: 'auto',
            minHeight: '24rem',
            maxHeight: '24rem',
            objectFit: 'cover',
          }}
        />
        <div className={styles.blog_title}>{blog.title}</div>
        <div className={styles.blog_description}>{blog.description}</div>
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
