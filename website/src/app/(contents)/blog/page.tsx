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
            <BlogArticle
              category_code={blog.category_code}
              category={blog.category}
              blog={blog.articles[0]}
            />
          </div>
        );
      })}
    </div>
  );
};

export default BlogPage;
