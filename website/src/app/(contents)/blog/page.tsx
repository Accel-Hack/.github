import React from 'react';
import ContentHeader from '@/component/molecule/ContentHeader';
import BLOGS from '@/data/blogs.json';
import BlogArticle from '@/component/article/BlogArticle';
import styles from '@/app/(contents)/about/page.module.css';

const BlogPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <ContentHeader caption="Blog" />
      <div className={styles.articles}>
        {BLOGS.map((blog, i) => {
          return <BlogArticle key={i} blog={blog} />;
        })}
      </div>
    </div>
  );
};

export default BlogPage;
