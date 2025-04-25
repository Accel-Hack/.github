import React from 'react';
import Article from '@/component/organism/Article';
import styles from './PositionArticle.module.css';
import Image from 'next/image';
import ENGINEER from '@/asset/img/recruit/engineer.png';
import PM from '@/asset/img/recruit/pm.png';
import INTERN from '@/asset/img/recruit/intern.png';

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
  function getThumbnailUrl(thumbnail: string) {
    switch (thumbnail) {
      case 'engineer':
        return ENGINEER.src;
      case 'pm':
        return PM.src;
      case 'intern':
        return INTERN.src;
      default:
        return thumbnail;
    }
  }

  return (
    <Article caption="募集中のポジション">
      <div className={styles.container}>
        <div className={styles.position_list}>
          {positions.map((p, i) => {
            return (
              <div key={i} className={styles.position_list_item}>
                <Image
                  src={getThumbnailUrl(p.thumbnail)}
                  alt={p.thumbnail}
                  width={100}
                  height={0}
                  style={{
                    width: '100%',
                    height: 'auto',
                    aspectRatio: 1,
                    objectFit: 'cover',
                  }}
                />
                <div className={styles.image_label}>{p.title}</div>
              </div>
            );
          })}
        </div>
        <div className={styles.position_list_table} style={{ marginTop: 26 }}>
          <div className={styles.position_list_item}>
            <table>
              <tbody>
                {conditions.map((item, i) => {
                  return (
                    <tr key={i}>
                      <th className={styles.conditions_title}>{item.title}</th>
                      <td className={styles.conditions_description}>
                        {item.description}
                      </td>
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
