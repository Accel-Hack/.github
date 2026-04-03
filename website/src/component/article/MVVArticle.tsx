import React from 'react';
import Article from '@/component/organism/Article';
import styles from './MVVArticle.module.css';
import LOGO3D from '@/asset/img/about/logo_3d.png';
import Image from 'next/image';

const MVVArticle: React.FC = () => {
  return (
    <div className={styles.container}>
      <Article caption="MVV">
        <div className={styles.contents}>
          <div className={styles.content}>
            <div className={styles.logo_container}>
              <Image
                src={LOGO3D.src}
                alt={'AccelHack'}
                width={297}
                height={353}
                style={{ width: '60%', height: 'auto' }}
              />
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.mvv_sections}>
              <div className={styles.mvv_section}>
                <span className={styles.mvv_label}>Mission</span>
                <p className={styles.catch_copy_en}>
                  テクノロジーの恩恵を、
                  <br />
                  すべての企業に届ける
                </p>
              </div>
              <div className={styles.mvv_section}>
                <span className={styles.mvv_label}>Vision</span>
                <p className={styles.catch_copy_description}>
                  最良のタイミング・最高の品質・最適な価格を、
                  <br />
                  テクノロジーに関わる全ての人が享受できる社会
                </p>
              </div>
              <div className={styles.mvv_section}>
                <span className={styles.mvv_label}>Values</span>
                <ul className={styles.values_list}>
                  <li>システム開発の既存コストの壁を壊す自社プロダクト</li>
                  <li>
                    「AIに使われる」のではなく「AIを使いこなす」AIネイティブ人材
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Article>
    </div>
  );
};

export default MVVArticle;
