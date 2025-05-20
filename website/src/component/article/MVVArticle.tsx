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
            <div className={styles.catch_copies}>
              <p className={styles.catch_copy_en}>
                Accel Your Innovation. <br />
                Hack the Development.
              </p>
              <p className={styles.catch_copy_jp}>
                イノベーションを加速させ、開発をハックせよ。
              </p>
              <p className={styles.catch_copy_description}>
                開発現場のあらゆる無駄がなくなり、
                <br />
                最短・最速・最適な開発が当たり前である社会
              </p>
              <p className={styles.catch_copy_description}>
                最大効率の開発は何たるかを常に追い求め続ける集団
              </p>
              <p className={styles.catch_copy_description}>
                最新技術に常に関心を持ち新しいもの好きであり続けることのできる開発環境
              </p>
              <p className={styles.catch_copy_description}>
                煩雑な作業から解放されエンジニアがエンジニアらしくスキルを伸ばせる場所
              </p>
            </div>
          </div>
        </div>
      </Article>
    </div>
  );
};

export default MVVArticle;
