import React from 'react';
import SERVICES from '../../../data/services.json';
import ServiceListArticle from '@/component/article/ServiceListArticle';
import ServiceArticle from '@/component/article/ServiceArticle';

const ServicePage: React.FC = () => {
  return (
    <>
      <ServiceListArticle services={SERVICES} />
      {SERVICES.map((service, i) => {
        return <ServiceArticle key={i} service={service} />;
      })}
    </>
  );
};

export default ServicePage;
