import React from 'react';
import Article from '@/component/organism/Article';
import styles from './PositionArticle.module.css';

type Props = {
  positions: {
    title: string;
    thumbnail: string;
  }[];
  conditions: {
    title: string;
    description: string;
  }[];
};

const PositionArticle: React.FC<Props> = ({ positions, conditions }: Props) => {
  return (
    <Article caption="募集中のポジション">
      <div className={styles.container}>
        <div className={styles.position_list}>
          {positions.map((p, i) => {
            return (
              <div key={i} className={styles.position_list_item}>
                <div className={styles.image_mock}>{p.thumbnail}</div>
                <div className={styles.image_label}>{p.title}</div>
              </div>
            );
          })}
        </div>
        <div className={styles.position_list} style={{ marginTop: 26 }}>
          <div className={styles.position_list_item}>
            <table>
              <tbody>
                {conditions.slice(0, 5).map((item, i) => {
                  return (
                    <tr key={i}>
                      <th className={styles.conditions_title}>{item.title}</th>
                      <td>{item.description}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className={styles.position_list_item}>
            <table>
              <tbody>
                {conditions.slice(5).map((item, i) => {
                  return (
                    <tr key={i}>
                      <th className={styles.conditions_title}>{item.title}</th>
                      <td>{item.description}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Article>
  );
};

export default PositionArticle;
