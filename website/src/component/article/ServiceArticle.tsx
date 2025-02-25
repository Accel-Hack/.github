import React from 'react';
import Article from '@/component/organism/Article';

type Props = {
  service: {
    title: string;
    thumbnail: string;
    summary: string;
    images: string[];
    description: string;
  };
};

const ServiceArticle: React.FC<Props> = ({ service }: Props) => {
  return (
    <Article caption={service.title}>
      <div>{service.thumbnail}</div>
      <div>{service.summary}</div>
      {service.images.map((image, i) => {
        return <div key={i}>image</div>;
      })}
      <div>{service.description}</div>
    </Article>
  );
};

export default ServiceArticle;
