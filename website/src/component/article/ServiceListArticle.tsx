import React from 'react';
import Article from '@/component/organism/Article';

type Props = {
  services: {
    title: string;
    thumbnail: string;
    summary: string;
  }[];
};

const ServiceListArticle: React.FC<Props> = ({ services }: Props) => {
  return (
    <Article caption="Service">
      <ul>
        {services.map((s, i) => {
          return (
            <li key={i}>
              <div>{s.title}</div>
              <div>{s.summary}</div>
              <div>{s.thumbnail} Change to Image</div>
            </li>
          );
        })}
      </ul>
    </Article>
  );
};

export default ServiceListArticle;
