import React from 'react';
import Article from '@/component/organism/Article';

type Props = {
  blog: {
    category: string;
    title: string;
    thumbnail: string;
    description: string;
  };
};

const BlogArticle: React.FC<Props> = ({ blog }: Props) => {
  return (
    <Article caption={blog.category}>
      <div>{blog.thumbnail}</div>
      <div>{blog.title}</div>
      <div>{blog.description}</div>
    </Article>
  );
};

export default BlogArticle;
