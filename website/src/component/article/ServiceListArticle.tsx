import React from 'react';
import Article from '@/component/organism/Article';
import styles from './ServiceListArticle.module.css';

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
      <div className={styles.service_list}>
        {services.map((s, i) => {
          return (
            <div key={i}>
              <img src={s.thumbnail} alt={s.title} />
              <div className={styles.title}>{s.title}</div>
              <div className={styles.summary}>{s.summary}</div>
            </div>
          );
        })}
      </div>
    </Article>
  );
};

export default ServiceListArticle;
