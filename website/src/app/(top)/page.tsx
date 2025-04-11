import styles from './page.module.css';
import NewsSummary from '@/component/organism/NewsSummary';
import { Page } from '@/enum/Page';
import NEWSES from '@/data/news.json';
import AccelHackLogo from '@/asset/img/top/logo.svg';
import TopDiagonalLine from '@/asset/img/layout/top_diagonal_line.svg';
import LinkBox from '@/component/molecule/LinkBox';
import LinkBoxContainer from '@/component/molecule/LinkBoxContainer';
import BackgroundLeftTopLine from '@/asset/img/layout/backgound_left_top_line.svg';

export default function Home() {
  return (
    <div className={`${styles.page}`}>
      <div style={{ display: 'flex' }}>
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
          <div
            className={`${styles.background_box} ${styles.background_box_1}`}
          ></div>
          <div
            className={`${styles.background_box} ${styles.background_box_2}`}
          ></div>
          <div
            className={`${styles.background_box} ${styles.background_box_3}`}
          ></div>

          <LinkBoxContainer size="lg">
            <LinkBox
              href={Page.ABOUT}
              text="About"
              size="lg"
              hoverIcon={true}
            />
            <LinkBox href={Page.SERVICE} text="Service" size="lg" />
          </LinkBoxContainer>

          <LinkBoxContainer size="md">
            <LinkBox
              href={Page.RECRUIT}
              text="Recruit"
              size="md"
              variant="recruit"
            />
            <LinkBox href={Page.BLOG} text="Blog" size="md" variant="blog" />
          </LinkBoxContainer>

          <LinkBoxContainer size="sm">
            <LinkBox
              href={Page.CONTACT}
              text="Contact"
              size="sm"
              variant="contact"
              showCursor={false}
            />
            <LinkBox
              href={Page.PRIVACY_POLICY}
              text="Privacy Policy"
              size="sm"
              variant="privacy"
              showCursor={false}
            />
          </LinkBoxContainer>
        </div>
      </div>

      <div>
        <TopDiagonalLine
          style={{
            position: 'absolute',
            top: '20px',
            left: '10%',
            width: '4/5',
            zIndex: -1,
          }}
        />
        <BackgroundLeftTopLine className={styles.background_left_top_line} />
      </div>
    </div>
  );
}
