import React from 'react';
import Article from '@/component/organism/Article';

const AboutArticle: React.FC = () => {
  return (
    <Article caption="About">
      <div>株式会社AccelHack</div>
      <div>113-0033 東京都</div>
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
    </Article>
  );
};

export default AboutArticle;
