import React from 'react';
import Article from '@/component/organism/Article';
import styles from './WorkArticle.module.css';
import WorksCompany from '@/component/molecule/WorksCompany';
import LogoEucalia from '@/asset/img/about/logo_eucalia.png'
import LogoRealight from '@/asset/img/about/logo_realight.png'
import LogoRelate from '@/asset/img/about/logo_relate.png'
import LogoWkogyo from '@/asset/img/about/logo_wkogyo.png'

const WorkArticle: React.FC = () => {
  const companies = [
    {
      src: LogoEucalia.src,
      label: "病院経営支援/医療周辺事業"
    },
    {
      src: LogoRelate.src,
      label: "FFS理論を用いた組織人事支援事業"
    },
    {
      src: LogoWkogyo.src,
      label: "鋼構造工事業/一級建築士事務所"
    },
    {
      src: LogoRealight.src,
      label: "経理DX支援事業"
    }
  ]

  return (
    <Article caption={"Work"}>
      <div className={styles.container}>
        <div className={styles.contents}>
          {companies.map((item, index) => (
            <WorksCompany key={index} src={item.src} label={item.label} />
          ))}
        </div>
      </div>
    </Article>
  )
}

export default WorkArticle;
