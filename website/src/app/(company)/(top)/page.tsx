import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import NewsSummary from '@/component/organism/NewsSummary';
import { Page } from '@/enum/Page';
import NEWSES from '@/data/news.json';
import AccelHackLogo from '@/asset/img/top/logo.svg';
import TopDiagonalLine from '@/asset/img/layout/top_diagonal_line.svg';
import LinkBox from '@/component/molecule/LinkBox';
import LinkBoxContainer from '@/component/molecule/LinkBoxContainer';
import BackgroundLeftTopLine from '@/asset/img/layout/backgound_left_top_line.svg';
import TopIntro from '@/component/organism/TopIntro';
import ContentFooter from '@/component/layout/ContentFooter';
import Footer from '@/component/layout/Footer';
import SmallMediaFooter from '@/component/layout/SmallMediaFooter';

export default function Home() {
  return (
    <div className={`${styles.page}`}>
      <TopIntro />
      <div className={styles.container}>
        <div className={styles.left_container}>
          <div className={styles.image_container}>
            <AccelHackLogo className={styles.logo_img} />
          </div>
          <p className={styles.catch_copy}>
            テクノロジーの恩恵を、
            <br />
            すべての企業に届ける
          </p>
          <div className={styles.news_summary_container_pc}>
            <NewsSummary newses={NEWSES} />
          </div>
          <Link
            href="/services/meguru"
            className={styles.meguru_link}
            aria-label="心付けサービス「めぐる」の紹介を見る"
          >
            <Image
              src="/images/meguru/logo.webp"
              alt="めぐる"
              width={90}
              height={49}
              className={styles.meguru_logo}
            />
            <span className={styles.meguru_label}>
              『めぐる』についてはこちら
            </span>
            <span className={styles.meguru_arrow} aria-hidden="true">
              →
            </span>
          </Link>
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
              subtext="私たちについて"
              size="lg"
              hoverIcon={true}
            />
            <LinkBox
              href={Page.WORKS}
              text="Works"
              subtext="実績一覧"
              size="lg"
            />
          </LinkBoxContainer>

          <LinkBoxContainer size="md">
            <LinkBox
              href={Page.RECRUIT}
              text="Recruit"
              subtext="採用情報"
              size="md"
              variant="recruit"
            />
            <LinkBox
              href={Page.BLOG}
              text="Blog"
              subtext="技術ブログ"
              size="md"
              variant="blog"
            />
          </LinkBoxContainer>

          <LinkBoxContainer size="sm">
            <LinkBox
              href={Page.CONTACT}
              text="Contact"
              subtext="お問い合わせ"
              size="sm"
              variant="contact"
              cursorVariant="mint"
            />
            {/*<LinkBox*/}
            {/*  href={Page.PRIVACY_POLICY}*/}
            {/*  text="Privacy Policy"*/}
            {/*  size="sm"*/}
            {/*  variant="privacy"*/}
            {/*  showCursor={false}*/}
            {/*/>*/}
          </LinkBoxContainer>
        </div>

        <div className={styles.news_summary_container_sp}>
          <NewsSummary newses={NEWSES} />
        </div>
      </div>

      <div className={styles.decorations}>
        <span className={styles.background_text} aria-hidden="true">
          踏み込め
        </span>
        <TopDiagonalLine className={styles.top_diagonal_line} />
        <BackgroundLeftTopLine className={styles.background_left_top_line} />
      </div>
      <div className="small_media_hidden">
        <footer className={styles.footer}>
          <ContentFooter />
          <Footer />
        </footer>
      </div>
      <div className="small_media_visible">
        <footer className={styles.small_media_footer}>
          <SmallMediaFooter />
        </footer>
      </div>
    </div>
  );
}
