'use client';

import React from 'react';
import BLOGS from '@/data/blogs.json';
import { usePathname } from 'next/navigation';
import Article from '@/component/organism/Article';
import styles from './page.module.css';
import Acelhack1 from '@/asset/img/common/accelhack1.png';
import BlogSection from '@/component/molecule/BlogSection';

const BlogIdPage: React.FC = () => {
  const pathname = usePathname();
  const id = pathname.split('/').pop();

  const article = BLOGS.flatMap((blog) => blog.articles).find(
    (b) => b.id === id,
  );

  return (
    <>
      {article ? (
        <Article caption={article?.category ?? ''}>
          <div className={styles.container}>
            <div className={styles.content}>
              <BlogSection
                imageSide={'center'}
                content={''}
                imgSrc={Acelhack1.src}
              />
              {article.section.map((content, index) => (
                <BlogSection
                  key={index}
                  imageSide={'none'}
                  content={content}
                  imgSrc={Acelhack1.src}
                  title={index == 0 ? article.title : undefined}
                  date={index == 0 ? article.date : undefined}
                />
              ))}
            </div>
          </div>
        </Article>
      ) : (
        <div>お探しのページは存在しません</div>
      )}
    </>
  );
};

export default BlogIdPage;
