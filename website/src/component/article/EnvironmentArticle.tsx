import React from 'react';
import Article from '@/component/organism/Article';
import styles from './EnvironmentArticle.module.css';

const EnvironmentArticle: React.FC = () => {
  return (
    <Article caption="働く環境">
      <div className={styles.contents}>
        <div className={styles.content}>
          <div className={styles.heading}>従業員数</div>
          <div className={styles.text}>22名（うちパート・アルバイト13名）</div>
        </div>
        <div className={styles.content}>
          <div className={styles.heading}>平均年齢</div>
          <div className={styles.text}>29.8歳（パート・アルバイト除く)</div>
        </div>
        <div className={styles.content}>
          <div className={styles.heading}>職種構成</div>
          <div className={styles.text}>Engineer 21名 / Back Office 1名</div>
        </div>
        <div className={styles.content}>
          <div className={styles.heading}>休日</div>
          <div className={styles.text}>
            完全週休2日制（土・日）/ 祝日・夏休み・年末年始
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.heading}>福利厚生</div>
          <div className={styles.text}>
            念10日の有給付与 / 看護休暇・育児休暇など
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.heading}>教育制度</div>
          <div className={styles.text}>
            <ul>
              <li>初心者向け研修講座（目安２ヶ月）</li>
              <li>スキルアップ手当</li>
              <li>月１回の役員によるFB面談</li>
              <li>その他、成長に繋がるものなら何でも相談可</li>
            </ul>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.heading}>その他</div>
          <div className={styles.text}>
            週１~２回テニスをするなど、運動好きのメンバー多数。
            新しいスポーツイベントを持ち込んでくれる人大歓迎
          </div>
        </div>
      </div>
    </Article>
  );
};

export default EnvironmentArticle;
