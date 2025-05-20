import styles from './page.module.css';
import NewsSummary from '@/component/organism/NewsSummary';
import { Page } from '@/enum/Page';
import NEWSES from '@/data/news.json';
import AccelHackLogo from '@/asset/img/top/logo.svg';
import TopDiagonalLine from '@/asset/img/layout/top_diagonal_line.svg';
import Square from '@/asset/img/top/square.svg';
import COLOR_SQUARES from '@/asset/img/layout/color_squares.svg';
import LinkBox from '@/component/molecule/LinkBox';
import LinkBoxContainer from '@/component/molecule/LinkBoxContainer';
import BackgroundLeftTopLine from '@/asset/img/layout/backgound_left_top_line.svg';

export default function Home() {
  return (
    <div className={`${styles.page}`}>
      <div className={styles.container}>
        <div className={styles.left_container}>
          <div className={styles.image_container}>
            <AccelHackLogo className={styles.logo_img} />
          </div>
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
        <TopDiagonalLine className={styles.top_diagonal_line} />
        <COLOR_SQUARES style={{
          position: 'absolute',
          left: '69px',
          top: '22px'
        }} />
        <Square
          style={{
            position: 'absolute',
            bottom: '50px',
            right: '90px',
            width: '29.75px',
            height: 'auto',
          }}
          class={'small_media_hidden'}
        />
        <Square
          style={{
            position: 'absolute',
            bottom: '50px',
            right: '50%',
            width: '29.75px',
            height: 'auto',
          }}
          class={'small_media_hidden'}
        />
        <BackgroundLeftTopLine className={styles.background_left_top_line} />
      </div>
    </div>
  );
}
