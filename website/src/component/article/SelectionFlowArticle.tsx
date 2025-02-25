import React from 'react';
import Article from '@/component/organism/Article';

const SelectionFlowArticle: React.FC = () => {
  return (
    <Article caption="働く環境">
      <div>１次面接</div>
      <div>書類テスト</div>
      <div>２次面接</div>
      <div>最終面接</div>
    </Article>
  );
};

export default SelectionFlowArticle;
