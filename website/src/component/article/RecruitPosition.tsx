import React from 'react';
import styles from './RecruitPosition.module.css';
import ENGINEER from '@/asset/img/recruit/ENGINEER.svg';
import PM from '@/asset/img/recruit/PROJECTMANAGER.svg';
import INTERN from '@/asset/img/recruit/INTERN.svg';

type Props = {
  label: string;
  imgSrc: string;
};

const RecruitPosition: React.FC<Props> = ({ label, imgSrc }) => {
  function icon(src: string) {
    switch (src) {
      case 'engineer':
        return (
          <ENGINEER
            style={{ width: '50%', position: 'absolute', bottom: '0' }}
          />
        );
      case 'pm':
        return (
          <PM style={{ width: '50%', position: 'absolute', bottom: '0' }} />
        );
      case 'intern':
        return (
          <INTERN style={{ width: '50%', position: 'absolute', bottom: '0' }} />
        );
      default:
        return '';
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.label}>{label}</div>
      <div className={styles.icon_container}>{icon(imgSrc)}</div>
    </div>
  );
};

export default RecruitPosition;
