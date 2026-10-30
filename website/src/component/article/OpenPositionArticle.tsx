import styles from './OpenPositionArticle.module.css';
import ApplyFormLink from '@/component/molecule/ApplyFormLink';
import { Page } from '@/enum/Page';

const positionItems = [
  {
    name: 'Engineer',
    jname: 'エンジニア',
    target: '開発経験を活かしたい方',
    description:
      '受託開発と自社サービス「ADeT」の設計・実装を担当します。要件の整理からリリース・運用まで、生成AIを活用した開発に携わります。',
    conditions: [
      { label: '雇用形態', value: '正社員・契約社員' },
      { label: '給与', value: '月給〇〇万円〜〇〇万円' },
    ],
  },
  {
    name: 'Project Manager',
    jname: 'プロジェクトマネージャー',
    target: '案件推進の経験をお持ちの方',
    description:
      'クライアントの課題整理から、開発チームの進行・品質・納期の管理までを担当します。DXコンサルティングにも関わります。',
    conditions: [
      { label: '雇用形態', value: '正社員・契約社員' },
      { label: '給与', value: '月給〇〇万円〜〇〇万円' },
    ],
  },
  {
    name: 'Intern',
    jname: 'インターン',
    target: '開発を仕事として経験したい学生の方',
    description:
      '現役エンジニアのサポートのもと、実際の開発案件に参加します。入社後は初心者向けの研修（目安2ヶ月）があります。',
    conditions: [
      { label: '雇用形態', value: 'パートタイム' },
      { label: '給与', value: '時給〇〇〇〇円〜' },
    ],
  },
];

const OpenPositionArticle: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.section_head}>
        <div className={styles.section_head_index}>06 / Open Positions</div>
        <div className={styles.section_head_title}>募集ポジション</div>
        <div className={styles.section_head_note}>
          役割と条件から、自分に合うポジションを探してください。未経験からのポテンシャル採用も行っています。
        </div>
      </div>

      <div className={styles.section_card}>
        {positionItems.map((item, i) => (
          <div className={styles.card} key={i}>
            <div className={styles.card_text}>
              <div className={styles.text_header}>
                <div className={styles.name}>{item.name}</div>
                <div className={styles.name_ja}>{item.jname}</div>
              </div>
              <div className={styles.text_target}>{item.target}</div>
              <div className={styles.text_description}>{item.description}</div>
            </div>

            <div className={styles.card_bottom}>
              <div className={styles.bottom_condition}>
                {item.conditions.map((item, i) => (
                  <div className={styles.row} key={i}>
                    <div className={styles.row_label}>{item.label}</div>
                    <div className={styles.row_value}>{item.value}</div>
                  </div>
                ))}
              </div>

              <ApplyFormLink
                href={Page.CONTACT}
                text="このポジションに応募する"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OpenPositionArticle;
