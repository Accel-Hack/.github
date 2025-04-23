import React from 'react';
import Article from '@/component/organism/Article';
import AccelHack1 from '@/asset/img/common/accelhack1.png'
import Image from 'next/image';
import styles from './WhatIsArticle.module.css'

const WhatIsArticle: React.FC = () => {
  return (
    <Article caption="What's AccelHack">
      <div className={styles.image_wrapper}>
        <Image src={AccelHack1.src} alt={'image'} width={500} height={0} style={{width: '90%', height: 'auto'}} />
      </div>
      <div className={styles.text_wrapper}>
        <span
          style={{ fontWeight: 800 }}>エンジニアを煩雑な作業から解放し<br />『エンジニア』を再評価する</span><br /><br />
        AccelHackは、そんなエンジニア自身の思いから生まれた会社です。<br /><br />
        AccelHackは、最新のAIエージェントをフル活用するための独自ツールを開発し、AIにできることはAIに任せ、人にしかできないことを最大化する取り組みを常に続けていくことを約束します。
      </div>
    </Article>
  );
};

export default WhatIsArticle;
