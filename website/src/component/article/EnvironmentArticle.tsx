import React from 'react';
import Article from '@/component/organism/Article';

const EnvironmentArticle: React.FC = () => {
  return (
    <Article caption="働く環境">
      <div>従業員数、平均年齢、職種構成、会社の雰囲気、育休取得率など</div>
      <div>福利厚生</div>
      <div>教育制度</div>
    </Article>
  );
};

export default EnvironmentArticle;
