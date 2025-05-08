import React from 'react';
import Article from '@/component/organism/Article';
import styles from './AboutArticle.module.css';
import AccessMap from '@/component/organism/AccessMap';

const AboutArticle: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contents}>
        <Article caption="About">
          <div className={styles.content}>
            <div>
              <div>株式会社AccelHack</div>
              <div>〒102-0072 東京都千代田飯田橋1-5-6 協和ビル 6A室</div>
              <div>2022年11月 設立</div>
            </div>
            <table>
              <tbody>
                <tr>
                  <td>代表取締役</td>
                  <td>石川貴大</td>
                </tr>
                <tr>
                  <td>代表取締役</td>
                  <td>河村京介</td>
                </tr>
                <tr>
                  <td>取締役</td>
                  <td>渡辺健悟</td>
                </tr>
              </tbody>
            </table>
            <div>
              <div className={styles.service_title}>
                <p>Service</p>
                <p className={styles.service_border}></p>
              </div>
              <div className={styles.service_contents}>
                <p>DX/システム導入コンサル</p>
                <p>要件定義・基本設計支援</p>
                <p>開発・保守業務</p>
              </div>
            </div>
          </div>
        </Article>
      </div>
      <div className={styles.contents}>
        <AccessMap />
      </div>
    </div>
  );
};

export default AboutArticle;
