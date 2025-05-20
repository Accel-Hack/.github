import React from 'react';
import Article from '@/component/organism/Article';
import styles from './ServiceArticle.module.css';
import ServiceImgSrcUtil from '@/utils/ServiceImgSrcUtil';

type Props = {
  service: {
    title: string;
    thumbnail: string;
    summary: string;
    images: string[];
    description: string[];
    id: string
  };
};

const ServiceArticle: React.FC<Props> = ({ service }: Props) => {
  return (
    <Article caption={service.title}>
      <div className={styles.container} id={service.id}>
        <div className={styles.main_container}>
          <div className={styles.main_image_container}>
            <img
              src={ServiceImgSrcUtil.convertServiceImageSrc(service.thumbnail)}
              alt={service.title}
            />
          </div>
          <div className={styles.summary}>{service.summary}</div>
        </div>
        <div className={styles.sub_container}>
          <div className={styles.sub_image_container}>
            {service.images.map((image, i) => {
              return (
                <img
                  key={i}
                  className={styles.sub_image}
                  src={ServiceImgSrcUtil.convertServiceImageSrc(image)}
                  alt={service.title}
                />
              );
            })}
          </div>
          <div className={styles.description}>
            {service.description.map((description, i) => {
              return (
                <span key={i}>
                  {description}
                  <br />
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </Article>
  );
};

export default ServiceArticle;
