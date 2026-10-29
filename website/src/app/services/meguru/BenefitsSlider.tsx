'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import styles from './BenefitsSlider.module.css';

const slides = [
  {
    tab: 'スタッフへの還元',
    title: 'がんばりに、\n感謝が返ってくる。',
    description:
      'お客様から届く心付けを、スタッフへ還元する原資に。感謝のメッセージとともに、日々の仕事の励みにつながります。',
    detail: '心付けというかたちで、おもてなしへの感謝を受け取れます。',
  },
  {
    tab: 'ゲストの満足を知る',
    title: '喜ばれたおもてなしを、\n見えるかたちに。',
    description:
      'どの宛先に、どのQRコードから、どれだけ届いたか。受取状況やメッセージが、ゲストの満足を知る手がかりになります。',
    detail: '管理画面で、期間別の受取額・件数・宛先別・QR別の集計を確認。',
  },
  {
    tab: 'Google口コミへの誘導',
    title: '「ありがとう」の先に、\n口コミのきっかけを。',
    description:
      '心付けのお支払い後に、Googleの口コミ投稿ページをご案内。感謝を届けたその流れで、滞在の感想を投稿できます。',
    detail: '決済後の画面に「Googleにクチコミを書く」ボタンを表示します。',
  },
];

export default function BenefitsSlider() {
  const [active, setActive] = useState(0);
  const startX = useRef<number | null>(null);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const select = (index: number) =>
    setActive((index + slides.length) % slides.length);
  return (
    <div
      className={styles.slider}
      role="region"
      aria-roledescription="カルーセル"
      aria-label="めぐるの導入メリット"
    >
      <div
        className={styles.tabs}
        role="tablist"
        aria-label="導入メリットを選択"
      >
        {slides.map((slide, index) => (
          <button
            key={slide.tab}
            ref={(el) => {
              tabs.current[index] = el;
            }}
            type="button"
            role="tab"
            id={`benefit-tab-${index}`}
            aria-controls={`benefit-panel-${index}`}
            aria-selected={active === index}
            tabIndex={active === index ? 0 : -1}
            onClick={() => select(index)}
            onKeyDown={(event) => {
              let next = index;
              if (event.key === 'ArrowRight') next = (index + 1) % 3;
              else if (event.key === 'ArrowLeft') next = (index + 2) % 3;
              else if (event.key === 'Home') next = 0;
              else if (event.key === 'End') next = 2;
              else return;
              event.preventDefault();
              select(next);
              tabs.current[next]?.focus();
            }}
          >
            <span>0{index + 1}</span>
            {slide.tab}
          </button>
        ))}
      </div>
      {slides.map((slide, index) => (
        <div
          key={slide.tab}
          role="tabpanel"
          id={`benefit-panel-${index}`}
          aria-labelledby={`benefit-tab-${index}`}
          hidden={active !== index}
          tabIndex={0}
        >
          <div
            className={styles.panel}
            onTouchStart={(event) => {
              startX.current = event.touches[0].clientX;
            }}
            onTouchEnd={(event) => {
              if (startX.current !== null) {
                const delta = event.changedTouches[0].clientX - startX.current;
                if (Math.abs(delta) > 60) select(active + (delta < 0 ? 1 : -1));
              }
              startX.current = null;
            }}
          >
            <div className={styles.copy}>
              <span className={styles.number}>0{index + 1}</span>
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
              <p className={styles.detail}>{slide.detail}</p>
            </div>
            <div className={styles.visual}>
              {index === 0 && (
                <figure className={styles.staffIllustration}>
                  <Image
                    src="/images/meguru/staff-gratitude.png"
                    alt="お客様がスマートフォンから送った感謝と心付けが、笑顔のスタッフへ届くイラスト"
                    width={1619}
                    height={971}
                  />
                  <figcaption>
                    お客様の気持ちが、日々のおもてなしの励みに。
                  </figcaption>
                </figure>
              )}
              {index === 1 && (
                <figure>
                  <Image
                    src="/images/meguru/dashboard.webp"
                    alt="受取額・件数と宛先別・QR別の内訳を確認できる管理画面"
                    width={1600}
                    height={854}
                  />
                  <figcaption>管理画面の表示例（テストデータ）</figcaption>
                </figure>
              )}
              {index === 2 && (
                <figure className={styles.review}>
                  <span>お支払いのあとに</span>
                  <Image
                    src="/images/meguru/review.png"
                    alt="決済後の画面。Googleにクチコミを書くボタンから投稿ページへ進めます。"
                    width={281}
                    height={134}
                  />
                  <figcaption>
                    感謝を届けたあと、そのまま投稿ページへ。
                  </figcaption>
                </figure>
              )}
            </div>
          </div>
        </div>
      ))}
      <div className={styles.controls}>
        <p aria-live="polite" aria-atomic="true">
          0{active + 1}
          <span> / 03</span>
        </p>
        <button
          type="button"
          aria-label="前のメリット"
          onClick={() => select(active - 1)}
        >
          ←
        </button>
        <button
          type="button"
          aria-label="次のメリット"
          onClick={() => select(active + 1)}
        >
          →
        </button>
      </div>
    </div>
  );
}
