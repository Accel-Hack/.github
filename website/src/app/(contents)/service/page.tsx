import React from 'react';
import SERVICES from '../../../data/services.json';
import ServiceListArticle from '@/component/article/ServiceListArticle';
import ServiceArticle from '@/component/article/ServiceArticle';
import ContentHeader from '@/component/molecule/ContentHeader';
import styles from './page.module.css';

const ServicePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <ContentHeader caption="Service" />
      <div className={styles.articles}>
        <ServiceListArticle services={SERVICES} />
        {SERVICES.map((service, i) => {
          return <ServiceArticle key={i} service={service} />;
        })}
      </div>
    </div>
  );
};

export default ServicePage;
