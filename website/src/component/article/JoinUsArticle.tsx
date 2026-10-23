import styles from './JoinUsArticle.module.css';
import SectionLinkBox from '@/component/molecule/SectionLinkBox';

const buttonItems = [
  { title: '募集一覧を見る', link: '#position' },
  { title: 'まずは話を聞く', link: '#entry' },
];

const JoinUsArticle: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <div className={styles.text_container}>
          <div className={styles.section_head}>
            <div className={styles.section_head_index}>01 / Join Us</div>
            <div className={styles.section_head_title}>採用メッセージ</div>
          </div>
          <div className={styles.contents_title}>
            <p>
              技術を使って、
              <br />
              課題のその先へ。
            </p>
          </div>
          <div className={styles.contents_message}>
            <p>
              つくることが好き。相手の課題に向き合いたい。
              <br />
              そんな仲間と、仕事の可能性を広げたい。
              <br />
              AIとソフトウェアで価値を届ける仕事です。
            </p>
          </div>
        </div>

        <div className={styles.link_box_container}>
          {buttonItems.map((item, i) => (
            <SectionLinkBox href={item.link} text={item.title} key={i} />
          ))}
        </div>
      </div>
      <div className={styles.image_container}>
        {/* <Image src={} alt={} width={640} height={420} /> */}
      </div>
    </div>
  );
};

export default JoinUsArticle;
