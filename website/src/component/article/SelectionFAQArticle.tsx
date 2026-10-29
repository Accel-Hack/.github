import styles from './SelectionFAQArticle.module.css';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { ChevronDownIcon } from '@heroicons/react/16/solid';

const flowItems = [
  {
    label: 'Step 01',
    title: 'エントリー',
    description: '希望職種と経験を送信',
  },
  {
    label: 'Step 02',
    title: '書類確認',
    description: '提出内容を確認',
  },
  {
    label: 'Step 03',
    title: '面接',
    description: '仕事内容と希望を確認',
  },
  {
    label: 'Step 04',
    title: '内定',
    description: '条件と入社時期を確認',
  },
];

const faqItems = [
  {
    q: '応募には何が必要ですか？',
    a: '履歴書・職務経歴書をご提出ください。制作物があれば、URLを添えてください。',
  },
  {
    q: '面接や課題は何回ありますか？',
    a: '',
  },
  {
    q: '選考にはどのくらいかかりますか？',
    a: '',
  },
  {
    q: '応募の前に話を聞くことはできますか？',
    a: '',
  },
];
const SelectionFAQArticle: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.section_head}>
        <div className={styles.section_head_index}>07 / Selection & FAQ</div>
        <div className={styles.section_head_title}>選考の流れ・FAQ</div>
        <div className={styles.section_head_note}>
          エントリーから内定までの流れと、よくいただくご質問をまとめました。
        </div>
      </div>

      <div className={styles.section_flow}>
        <div className={styles.sub_heading}>選考の流れ</div>
        <div className={styles.flow_steps}>
          {flowItems.map((item, i) => (
            <>
              <div className={styles.card} key={i}>
                <div className={styles.label}>{item.label}</div>
                <div className={styles.title}>{item.title}</div>
                <div className={styles.text_description}>
                  {item.description}
                </div>
              </div>
              {i !== 3 && <ChevronRightIcon className={styles.toggle_flow} />}
            </>
          ))}
        </div>
      </div>

      <div className={styles.section_faq}>
        <div className={styles.sub_heading}>よくある質問</div>
        <div className={styles.faq_panel}>
          {faqItems.map((item, i) => (
            <details className={styles.faq} key={i}>
              <summary className={styles.question}>
                <div className={styles.q_mark}>Q</div>
                <div className={styles.q_text}>{item.q}</div>
                <ChevronDownIcon className={styles.toggle_faq} />
              </summary>
              <div className={styles.answer}>
                <div className={styles.a_mark}>A</div>
                <div className={styles.a_text}>{item.a}</div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectionFAQArticle;
