import React from 'react';
import Image from 'next/image';
import styles from './WorksCompany.module.css';

type WorksCompanyProps = {
  src: string;
  label: string;
};

const WorksCompany: React.FC<WorksCompanyProps> = ({
  src,
  label,
}: WorksCompanyProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.image_wrapper}>
        <Image
          src={src}
          alt={label}
          width={500}
          height={0}
          style={{ height: 'auto', width: '100%' }}
        />
      </div>
      <p>{label}</p>
    </div>
  );
};

export default WorksCompany;
