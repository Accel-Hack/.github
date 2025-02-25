import React from 'react';

type Props = {
  caption: string;
};

const ContentHeader: React.FC<Props> = ({ caption }: Props) => {
  return <div>{caption}</div>;
};

export default ContentHeader;
