import React from 'react';
import BLOGS from '@/data/blogs.json';
import BlogArticle from '@/component/article/BlogArticle';
import styles from './page.module.css';

const BlogPage: React.FC = () => {
  return (
    <div className={styles.container}>
      {BLOGS.map((blog, i) => {
        return (
          <div key={i} className={styles.content}>
            <BlogArticle blog={blog} />
          </div>
        );
      })}
    </div>
  );
};

export default BlogPage;
