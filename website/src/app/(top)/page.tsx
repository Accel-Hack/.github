import styles from './page.module.css';
import NewsSummary from '@/component/organism/NewsSummary';
import { Page } from '@/enum/Page';
import NEWSES from '@/data/news.json';
import AccelHackLogo from '@/asset/img/top/logo.svg';
import TopDiagonalLine from '@/asset/img/layout/top_diagonal_line.svg';
import Cursor from '@/asset/img/common/cursor.svg';


export default function Home() {
  return (
    <div className={`${styles.page}`}>
      <div className="flex">
        <div className={styles.left_container}>
          <AccelHackLogo className={styles.logo_img} />
          <p className={styles.catch_copy}>
            Accel Your Innovation. <br />
            Hack the Development.
          </p>
          <p className={styles.catch_copy_sub}>
            イノベーションを加速させ、開発をハックせよ。
          </p>
          <div className={styles.news_summary_container}>
            <NewsSummary newses={NEWSES} />
          </div>
        </div>
        <div className={styles.right_container}>
          <div className={`${styles.background_box} ${styles.background_box_1}`}></div>
          <div className={`${styles.background_box} ${styles.background_box_2}`}></div>
          <div className={`${styles.background_box} ${styles.background_box_3}`}></div>
          <div className={styles.link_box_container_lg}>
            <a
              href={Page.ABOUT}
              className={`${styles.link_box} ${styles.link_box_lg} `}
            >
              <span className={styles.link_box_lg_text}>About</span>
              <Cursor className={styles.cursor} />
              </a>
            <a
              href={Page.SERVICE}
              className={`${styles.link_box} ${styles.link_box_lg}`}
            >
              <span className={styles.link_box_lg_text}>Service</span>
              <Cursor className={styles.cursor} />
            </a>
          </div>
          <div className={styles.link_box_container_md}>
            <a
              href={Page.RECRUIT}
              className={`${styles.link_box} ${styles.link_box_recruit}`}
            >
              <span className={styles.link_box_md_text}>Recruit</span>
              <Cursor className={styles.cursor} />
            </a>
            <a
              href={Page.BLOG}
              className={`${styles.link_box} ${styles.link_box_blog}`}
            >
              <span className={styles.link_box_md_text}>Blog</span>
              <Cursor className={styles.cursor} />
            </a>
          </div>
          <div className={styles.link_box_container_sm}>
            <a
              href={Page.CONTACT}
              className={`${styles.link_box_sm} ${styles.link_box_contact}`}
            >
              <span className={styles.link_box_sm_text}>Contact</span>
            </a>
            <a
              href={Page.PRIVACY_POLICY}
              className={`${styles.link_box_sm} ${styles.link_box_privacy}`}
            >
              <span className={styles.link_box_sm_text}>Privacy Policy</span>
            </a>
          </div>
        </div>
      </div>

      <div>
        <TopDiagonalLine
          className={'absolute top-[20px] left-1/10 w-4/5 z-[-1]'}
        />
      </div>
    </div>
  );
}
