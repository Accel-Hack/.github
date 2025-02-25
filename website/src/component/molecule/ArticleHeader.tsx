import React from 'react';

type Props = {
  caption: string;
};

const ArticleHeader: React.FC<Props> = ({ caption }: Props) => {
  return <div>{caption}</div>;
};

export default ArticleHeader;
