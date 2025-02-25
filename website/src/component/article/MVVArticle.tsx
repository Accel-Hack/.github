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
                width={200}
                height={200}
              />
            </div>
          </div>
          <div className={styles.content}>
            <p>
              Accel Your Innovation. <br />
              Hack the Development.
            </p>
            <p>イノベーションを加速させ、開発をハックせよ。</p>
            <p>開発のあらゆる無駄がなくなり....</p>
          </div>
        </div>
      </Article>
    </div>
  );
};

export default MVVArticle;
