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

  const blog = BLOGS.find((blog) => blog.id === id);

  return (
    <>
      {blog ? (
        <Article caption={blog.category}>
          <div className={styles.container}>
            <div className={styles.content}>
              {blog.section.map((content, index) => (
                <BlogSection
                  key={index}
                  imageSide={index % 2 == 0 ? 'left' : 'right'}
                  content={content}
                  imgSrc={Acelhack1.src}
                  title={index == 0 ? blog.title : undefined}
                  date={index == 0 ? blog.date : undefined}
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
