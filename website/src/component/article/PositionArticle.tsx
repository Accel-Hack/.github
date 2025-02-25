import React from 'react';
import Article from '@/component/organism/Article';

type Props = {
  positions: {
    title: string;
    thumbnail: string;
  }[];
};

const PositionArticle: React.FC<Props> = ({ positions }: Props) => {
  return (
    <Article caption="What's AccelHack">
      {positions.map((p, i) => {
        return (
          <div key={i}>
            <div>{p.thumbnail}</div>
            <div>{p.title}</div>
          </div>
        );
      })}
      <table>
        <tbody>
          <tr>
            <td>仕事内容</td>
            <td>勤務所在地</td>
          </tr>
          <tr>
            <td>雇用形態</td>
            <td>試用期間</td>
          </tr>
          <tr>
            <td>給与</td>
            <td>待遇・福利厚生</td>
          </tr>
          <tr>
            <td>勤務時間</td>
          </tr>
          <tr>
            <td>休業・休日</td>
          </tr>
        </tbody>
      </table>
    </Article>
  );
};

export default PositionArticle;
