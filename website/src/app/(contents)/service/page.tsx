import React from 'react';
import SERVICES from '../../../data/services.json';
import ServiceListArticle from '@/component/article/ServiceListArticle';
import ServiceArticle from '@/component/article/ServiceArticle';
import ContentHeader from '@/component/molecule/ContentHeader';

const ServicePage: React.FC = () => {
  return (
    <div>
      <ContentHeader caption="Service" />
      <ServiceListArticle services={SERVICES} />
      {SERVICES.map((service, i) => {
        return <ServiceArticle key={i} service={service} />;
      })}
    </div>
  );
};

export default ServicePage;
