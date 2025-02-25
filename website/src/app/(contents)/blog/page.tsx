import React from 'react';
import ContentHeader from '@/component/molecule/ContentHeader';
import BLOGS from '@/data/blogs.json';
import BlogArticle from '@/component/article/BlogArticle';

const BlogPage: React.FC = () => {
  return (
    <div>
      <ContentHeader caption="Blog" />
      {BLOGS.map((blog, i) => {
        return <BlogArticle key={i} blog={blog} />;
      })}
    </div>
  );
};

export default BlogPage;
