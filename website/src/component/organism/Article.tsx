import React from 'react';
import ArticleHeader from '@/component/molecule/ArticleHeader';

type Props = {
  caption: string;
  children: React.ReactNode;
};

const Article: React.FC<Props> = ({ caption, children }: Props) => {
  return (
    <div>
      <ArticleHeader caption={caption} />
      <div>{children}</div>
    </div>
  );
};

export default Article;
