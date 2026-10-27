import styles from './OurWorkArticle.module.css';
// import Image from 'next/image';
import { Page } from '@/enum/Page';
import WorksLinkBox from '@/component/molecule/WorksLinkBox';

const portraitItems = [
  {
    category: 'システム開発',
    title1: '業務を支える',
    title2: '仕組みをつくる',
    discription:
      '例：案件管理や業務アプリの開発。設計・実装から導入までを担います。',
    position: 'エンジニア・PM',
    // photo: ,
  },
  {
    category: 'AI・業務改善',
    title1: '日々の仕事を、',
    title2: 'もっとよくする',
    discription:
      '例：書類の読み取りや照合作業の自動化。課題整理から仕組み化に関わります。',
    position: 'エンジニア・PM',
    // photo: ,
  },
  {
    category: 'サービスづくり',
    title1: 'アイデアを、',
    title2: '使われる形にする',
    discription:
      '例：新しい昨日の試作・改善。検証と実装を重ねて価値を届けます。',
    position: 'エンジニア・インターン',
    // photo: ,
  },
];

const OurWorkArticle: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.section_head}>
        <div className={styles.section_head_index}>03 / Our Work</div>
        <div className={styles.section_head_title}>AccelHackでできる仕事</div>
      </div>
      <div className={styles.statement}>
        <div className={styles.statement_title}>
          企業の課題に、ソフトウェアで応える。
        </div>
        <div className={styles.statement_message}>
          案件の種類と、関われる職種を紹介します。
        </div>
      </div>
      <div className={styles.section_card}>
        {/* <div className={styles.cards_container}> */}
        {portraitItems.map((item, i) => (
          <div className={styles.card} key={i}>
            <div className={styles.card_image}>
              {/* <Image
                  src={item.photo}
                  alt={item.category}
                  fill
                  className={styles.image}
                /> */}
            </div>
            <div className={styles.card_text}>
              <div className={styles.card_header}>
                <div className={styles.category}>{item.category}</div>
                <div className={styles.title}>
                  {item.title1}
                  <br />
                  {item.title2}
                </div>
              </div>
              <div className={styles.card_discription}>{item.discription}</div>
              <div className={styles.card_position}>
                <div className={styles.card_position_textbox}>
                  <div className={styles.position_title}>関われる職種</div>
                  <div className={styles.position_name}>{item.position}</div>
                </div>
              </div>
            </div>
            <div className={styles.card_footer}>
              <WorksLinkBox href={Page.WORKS} text="関連する実績を見る" />
            </div>
          </div>
        ))}
        {/* </div> */}
      </div>
      <div className={styles.section_note}>
        ※担当範囲は経験・希望・案件によって異なります。職種ごとの詳細は「
        <span className={styles.note_highlight_text}>06 募集ポジション</span>
        」でご確認ください。
      </div>
    </div>
  );
};

export default OurWorkArticle;
