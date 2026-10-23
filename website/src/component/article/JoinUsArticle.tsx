import styles from './RecruitGrowthArticle.module.css';

const buttonItems = [
  { title: '募集一覧を見る', link: '#position' },
  { title: 'まずは話を聞く', link: '#entry' },
];

const JoinUsArticle: React.FC = () => {
  return (
    <>
      <div className={styles.left}>
        <div className={styles.sectionHead}>
          <div className={styles.sectionHeadIndex}>01 / Join Us</div>
          <div className={styles.sectionHeadTitle}>採用メッセージ</div>
        </div>
        <div className={styles.contentsTitle}>
          <h2>
            技術を使って、
            <br />
            課題のその先へ。
          </h2>
        </div>
        <div className={styles.contentsMessage}>
          <p>つくることが好き。相手の課題に向き合いたい。</p>
          <p>そんな仲間と、仕事の可能性を広げたい。</p>
          <p>AIとソフトウェアで価値を届ける仕事です。</p>
        </div>

        <div className={styles.buttonContainer}>
          {buttonItems.map((item, i) => (
            <a className={styles.button} href={item.link} key={i}>
              {item.title}
            </a>
          ))}
        </div>
      </div>
      <div className={styles.right}>
        {/* <Image src={} alt={} width={640} height={420} /> */}
      </div>
    </>
  );
};

export default JoinUsArticle;
