import styles from './page.module.css';
import NewsSummary from '@/component/organism/NewsSummary';
import { Page } from '@/enum/Page';
import NEWSES from '@/data/news.json';

export default function Home() {
  return (
    <div className={styles.page}>
      <div>AccelHack Logo</div>
      <div>
        <p>
          Accel Your Innovation. <br />
          Hack the Development.
        </p>
        <p>イノベーションを加速させ、開発をハックせよ。</p>
      </div>
      <div>
        <NewsSummary newses={NEWSES} />
      </div>
      <div>
        <a href={Page.ABOUT}>ABOUT</a> <br />
        <a href={Page.SERVICE}>SERVICE</a> <br />
        <a href={Page.RECRUIT}>RECRUIT</a> <br />
        <a href={Page.BLOG}>BLOG</a> <br />
        <a href={Page.CONTACT}>CONTACT</a> <br />
        <a href={Page.PRIVACY_POLICY}>PRIVACY_POLICY</a>
      </div>
    </div>
  );
}
