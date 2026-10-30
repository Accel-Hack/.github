import styles from './EntryTalkArticle.module.css';
import ApplyButtonWhite from '@/component/molecule/ApplyButtonWhite';
import { Page } from '@/enum/Page';

const EntryTalkArticle: React.FC = () => {
  return (
    <div className={styles.wrapper} data-content-section-rail>
      <div className={styles.section_head}>
        <div className={styles.section_head_index}>08 / Entry & Talk</div>
        <div className={styles.section_head_title}>応募・カジュアル面談</div>
        <div className={styles.section_head_note}>
          応募したい方も、まずは話を聞いてみたい方も。こちらからお申し込みください。
        </div>
      </div>

      <div className={styles.section_action}>
        <div className={styles.buttons}>
          <ApplyButtonWhite
            href={Page.CONTACT}
            title="Entry"
            text="選考に応募する"
          />
          <ApplyButtonWhite
            href={Page.CONTACT}
            title="Casual Talk"
            text="カジュアル面談を申し込む"
          />
        </div>
        <div className={styles.note}>
          お申し込みの後の流れ：お申し込み→受付のご連絡→日程の調整（◯営業日以内にご連絡します）
        </div>
      </div>
    </div>
  );
};

export default EntryTalkArticle;
