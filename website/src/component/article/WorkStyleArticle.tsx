import styles from './WorkStyleArticle.module.css';

const items = [
  [
    {
      label: '勤務時間',
      value: 'フレックスタイム制',
      text1: 'コアタイム ◯:◯◯〜◯:◯◯',
      text2: '標準労働時間 1日◯時間',
    },
    {
      label: '出社・リモート',
      value: '出社とリモートの併用',
      text1: '出社は週◯日程度',
      text2: '（職種・案件により異なります）',
    },
    {
      label: '客先勤務',
      value: '案件により相談',
      text1: '有無・場所は、案件ごとに',
      text2: '事前にご相談の上決めます',
    },
  ],
  [
    {
      label: '休日・休暇',
      value: '完全週休２日制（土・日）',
      text1: '祝日・夏休み・年末年始',
      text2: '年10日の有給休暇、看護休暇・育児休暇 など',
    },
    {
      label: '福利厚生',
      value: 'スキルアップ支援',
      text1: 'スキルアップ手当、研修講座（目安2ヶ月）',
      text2: '月1回の役員とのフィードバック面談 など',
    },
    {
      label: '雇用条件',
      value: '職種ごとに異なります',
      text1: '雇用形態・使用期間は',
      text2: (
        <>
          「<span className={styles.underline_text}>06 募集ポジション</span>
          」でご確認ください
        </>
      ),
    },
  ],
];

const WorkStyleArticle: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.section_head}>
        <div className={styles.section_head_index}>05 / Workstyle</div>
        <div className={styles.section_head_title}>働き方・制度</div>
      </div>
      <div className={styles.section_main}>
        {items.map((rowItems, rowIndex) => (
          <div className={styles.row} key={rowIndex}>
            {rowItems.map((item, index) => (
              <div
                className={`${styles.row_item} ${styles[`row_item_${index}`]}`}
                key={index}
              >
                <div className={styles.item_label}>{item.label}</div>
                <div className={styles.item_value}>{item.value}</div>
                <div className={styles.item_note}>
                  {item.text1}
                  <br />
                  {item.text2}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkStyleArticle;
