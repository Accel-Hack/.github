import React from 'react';
import Article from '@/component/organism/Article';
import styles from './SelectionFlowArticle.module.css'

const SelectionFlowArticle: React.FC = () => {
  return (
    <Article caption="選考フロー">
      <div className={styles.flow}>
        <div>１次面接</div>
        <div>書類テスト</div>
        <div>２次面接</div>
        <div>最終面接</div>
      </div>
    </Article>
  );
};

export default SelectionFlowArticle;
