import React from 'react';
import Article from '@/component/organism/Article';
import styles from './ServiceListArticle.module.css';
import ServiceImgSrcUtil from '@/utils/ServiceImgSrcUtil';

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
            <div key={i} className={styles.service_list_item}>
              <div className={styles.thumbnail_wrapper} key={i}>
                <div className={styles.image_wrapper}>
                  <img
                    className={styles.image}
                    src={ServiceImgSrcUtil.convertServiceImageSrc(s.thumbnail)}
                    alt={s.title}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Article>
  );
};

export default ServiceListArticle;
