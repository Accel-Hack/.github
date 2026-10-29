import FractalDiamond from '../molecule/FractalDiamond';
import styles from './WhyAccelHackArticle.module.css';
import { PlusIcon } from '@heroicons/react/24/outline';
// import Image from 'next/image';

const items = [
  {
    title: 'AIを仕事の力にする',
    discription: 'AIを活用しながら、設計や判断に向き合う。',
    example_text: '実装の下書きをAIで作り、人が品質を確かめる。',
    // image: ,
  },
  {
    title: '何をつくるかから関わる',
    discription: '顧客の課題を理解し、解決策を考える。',
    example_text: '依頼された機能だけでなく、業務全体から提案する。',
    // image: ,
  },
];

const WhyAccelHackArticle: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.section_head}>
        <div className={styles.section_head_index}>04 / Why AccelHack</div>
        <div className={styles.section_head_title}>働く魅力</div>
        <div className={styles.section_head_intro}>
          AccelHackで働く魅力は、大きく２つあります。
        </div>
      </div>

      <div className={styles.section_main}>
        <div className={styles.cards_container}>
          {items.map((item, i) => (
            <div className={styles.card} key={i}>
              <div className={styles.card_image}>
                {/* <Image
                  src={item.image}
                  alt={item.category}
                  fill
                  className={styles.image}
                /> */}
                {i === 1 && <FractalDiamond />}
              </div>
              <div className={styles.card_body}>
                <div className={styles.card_header}>
                  <div className={styles.title}>{item.title}</div>
                  <div className={styles.discription}>{item.discription}</div>
                </div>

                <div className={styles.card_example}>
                  <div className={styles.example_label}>例えば</div>
                  <div className={styles.example_text}>{item.example_text}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <PlusIcon className={styles.plus} />
      </div>
    </div>
  );
};

export default WhyAccelHackArticle;
