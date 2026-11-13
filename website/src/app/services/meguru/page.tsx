import type { Metadata } from 'next';
import Image from 'next/image';
import styles from './page.module.css';
import Motion from './Motion';
import BenefitsSlider from './BenefitsSlider';
import { COMPANY_NAME, SITE_URL } from '@/config/site';

const PATH = '/services/meguru';
const PAGE_URL = `${SITE_URL}${PATH}`;
const TITLE = 'めぐる｜旅館・ホテルのキャッシュレス心付け・チップサービス';
const DESCRIPTION =
  '旅館・ホテル向けのキャッシュレス心付け（デジタルチップ）サービス「めぐる」。客室や食事会場のQRコードから、お客様の感謝をスタッフや施設へ届けます。英語表示で訪日外国人のお客様にも対応。初期費用・月額費用0円。';
const OG_IMAGE = {
  url: '/images/meguru/ogp.jpg',
  width: 1200,
  height: 630,
  alt: 'めぐる ─ 旅館・ホテル向けキャッシュレス心付け・チップサービス。初期費用0円・月額費用0円',
};

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: PATH,
    siteName: 'めぐる',
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE.url],
  },
};

const FAQS = [
  {
    q: '導入や利用に費用はかかりますか？',
    a: '初期費用・月額費用は0円です。手数料は、受け取った心付けの入金額に対して15％（システム・決済手数料込み）のみです。',
  },
  {
    q: '訪日外国人のお客様も使えますか？',
    a: '支払い画面は英語表示・通貨切替に対応しています。チップの習慣がある海外のお客様も、現金を両替せずにスマートフォンから心付けを届けられます。',
  },
  {
    q: '旅館・ホテルのどこに設置できますか？',
    a: '客室、食事会場、スタッフの名札や案内カードなど、おもてなしの場面に合わせて設置できます。設置時に、場所ごとの専用QRコードと担当者名を設定します。',
  },
  {
    q: 'スタッフ個人宛てにも心付けを送れますか？',
    a: 'はい。お客様は施設やスタッフなど、届けたい相手と金額を選び、メッセージを添えて心付けを送れます。',
  },
  {
    q: '受け取った心付けはどのように確認できますか？',
    a: '管理画面で、期間別の受取額・件数や、宛先別・QRコード別の集計を確認できます。',
  },
  {
    q: 'Googleの口コミを増やすことにも役立ちますか？',
    a: '心付けのお支払い後の画面に「Googleにクチコミを書く」ボタンを表示し、お客様を口コミ投稿ページへご案内します。',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: COMPANY_NAME,
      alternateName: 'AccelHack Inc.',
      url: SITE_URL,
    },
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      name: 'めぐる',
      alternateName: 'MEGURU',
      serviceType: 'キャッシュレス心付け・デジタルチップサービス',
      audience: {
        '@type': 'BusinessAudience',
        audienceType: '旅館・ホテルなどの宿泊施設',
      },
      description: DESCRIPTION,
      url: PAGE_URL,
      image: `${SITE_URL}${OG_IMAGE.url}`,
      areaServed: { '@type': 'Country', name: 'JP' },
      provider: { '@id': `${SITE_URL}/#organization` },
      offers: {
        '@type': 'Offer',
        price: 0,
        priceCurrency: 'JPY',
        description:
          '初期費用0円・月額費用0円。手数料は入金額の15％（システム・決済手数料込み）。',
      },
    },
    {
      '@type': 'WebPage',
      '@id': `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: 'ja',
      about: { '@id': `${PAGE_URL}#service` },
      publisher: { '@id': `${SITE_URL}/#organization` },
      breadcrumb: { '@id': `${PAGE_URL}#breadcrumb` },
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#faq`,
      mainEntity: FAQS.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'ホーム', item: SITE_URL },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'サービス',
          item: `${SITE_URL}/service`,
        },
        { '@type': 'ListItem', position: 3, name: 'めぐる', item: PAGE_URL },
      ],
    },
  ],
};

const asset = (name: string) => `/images/meguru/${name}.webp`;
function Consult({ label = '無料で導入相談' }: { label?: string }) {
  return (
    <a
      className={styles.button}
      href="https://forms.gle/ySprJKUnx5aPvGi16"
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
      <span aria-hidden="true">↗</span>
    </a>
  );
}
function Icon({ kind }: { kind: 'scan' | 'heart' | 'pay' }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {kind === 'scan' ? (
        <>
          <path d="M15 6H6v9m27-9h9v9M6 33v9h9m27-9v9h-9M4 24h40" />
          <path d="M15 15h5v5h-5zm13 0h5v5h-5zM15 28h5v5h-5zm13 0h5v5h-5z" />
        </>
      ) : kind === 'heart' ? (
        <>
          <path d="M24 36S7 26 7 16a9 9 0 0 1 17-4 9 9 0 0 1 17 4c0 10-17 20-17 20Z" />
          <path d="M18 23h12m-6-6v12" />
        </>
      ) : (
        <>
          <rect x="5" y="10" width="38" height="28" rx="5" />
          <path d="M5 19h38M12 29h8m10 0 3 3 5-6" />
        </>
      )}
    </svg>
  );
}

export default function MeguruPage() {
  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <Motion />
      <a className={styles.skip} href="#main">
        本文へスキップ
      </a>
      <header className={styles.header}>
        <a href="#main" aria-label="めぐる トップ">
          <Image
            src={asset('logo')}
            alt="めぐる MEGURU"
            width={138}
            height={75}
            priority
            className={styles.logo}
          />
        </a>
        <span className={styles.logoAccent}>感謝が、めぐる。</span>
        <nav aria-label="メインナビゲーション">
          <a href="#how">使い方</a>
          <a href="#places">設置例</a>
          <a href="#benefits">導入メリット</a>
          <a href="#pricing">料金</a>
          <a href="#faq">よくある質問</a>
        </nav>
        <Consult />
      </header>
      <main id="main">
        <section
          className={`${styles.hero} ${styles.wrap}`}
          aria-labelledby="hero-title"
        >
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>
              旅館・ホテル向け キャッシュレス心付け・チップサービス
            </p>
            <h1 id="hero-title">
              「ありがとう」を、
              <br />
              <span>キャッシュレスの</span>
              <br />
              心付けに。
            </h1>
            <p className={styles.lead}>
              QRコードを読み取るだけ。
              <br />
              お客様の感謝を、心付け（チップ）としてスタッフや施設へ届けるサービスです。
            </p>
            <div className={styles.heroPrice}>
              <p>
                初期費用{' '}
                <strong>
                  0<span>円</span>
                </strong>
                <i />
                月額費用{' '}
                <strong>
                  0<span>円</span>
                </strong>
              </p>
              <small>手数料は入金額の15％（システム・決済手数料込み）</small>
            </div>
            <Consult />
            <a className={styles.textLink} href="#how">
              使い方を見る <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className={styles.heroVisual}>
            <Image
              src="/images/meguru/hospitality.webp"
              alt="お客様を笑顔でお迎えするスタッフ"
              width={893}
              height={631}
              priority
              className={styles.hospitality}
            />
            <Image
              src={asset('payment')}
              alt="めぐるの支払い画面。宛先・金額を選び、メッセージを添えてお支払いへ進めます。"
              width={313}
              height={615}
              priority
              className={styles.phone}
            />
          </div>
        </section>
        <section id="how" className={styles.flowSection}>
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <h2>
                感謝を届ける、
                <br className={styles.mobileBreak} />
                かんたん3ステップ。
              </h2>
              <p>現金を用意せず、その場で気持ちを届けられます。</p>
            </div>
            <ol className={styles.steps}>
              {[
                {
                  title: 'QRコードを読み取る',
                  text: 'スマートフォンでQRコードを読み取り、支払い画面へ。',
                  kind: 'scan' as const,
                },
                {
                  title: '宛先と金額を選ぶ',
                  text: '施設やスタッフなど、届けたい相手と金額を選択。メッセージも添えられます。',
                  kind: 'heart' as const,
                },
                {
                  title: 'キャッシュレスで支払う',
                  text: '画面に沿ってお支払い。現金を用意せず、感謝を届けられます。',
                  kind: 'pay' as const,
                },
              ].map((step, i) => (
                <li key={step.kind}>
                  <div className={styles.stepTop}>
                    <span>0{i + 1}</span>
                    <Icon kind={step.kind} />
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
            <p className={styles.language}>
              英語表示・通貨切替に対応。
              <br className={styles.mobileBreak} />
              訪日外国人のお客様も、迷わずチップを届けられます。
            </p>
          </div>
        </section>
        <section id="places" className={`${styles.section} ${styles.wrap}`}>
          <div className={styles.sectionHead}>
            <h2>
              いつもの場所に、
              <br className={styles.mobileBreak} />
              感謝の入口を。
            </h2>
            <p>
              旅館・ホテルの客室や食事会場、スタッフの名札など。
              <br />
              おもてなしの場面に合わせて設置できます。
            </p>
          </div>
          <div className={styles.places}>
            {[
              {
                image: 'room-card',
                title: '客室に',
                text: 'お部屋の清掃や、心地よい滞在への「ありがとう」に。',
                label: 'ROOM',
              },
              {
                image: 'dining-card',
                title: '食事会場に',
                text: '食事のひとときや、心配りへの「ありがとう」に。',
                label: 'DINING',
              },
              {
                image: 'service-card',
                title: '接客の場面に',
                text: '案内カードや名札から、心に残った接客への「ありがとう」に。',
                label: 'SERVICE',
              },
            ].map((place) => (
              <article key={place.image}>
                <div className={styles.cardVisual}>
                  <div
                    className={`${styles.cardArtwork} ${place.image === 'dining-card' ? styles.portraitCard : ''}`}
                  >
                    <Image
                      src={asset(place.image)}
                      alt={`${place.title}設置する心付け案内カードのサンプル`}
                      width={place.image === 'dining-card' ? 1024 : 1536}
                      height={place.image === 'dining-card' ? 1536 : 1024}
                    />
                    <Image
                      src="/images/meguru/sample-qr.svg"
                      alt="見本のQRコード（決済には利用できません）"
                      width={200}
                      height={200}
                      className={`${styles.sampleQr} ${place.image === 'room-card' ? styles.roomQr : place.image === 'dining-card' ? styles.diningQr : styles.serviceQr}`}
                    />
                  </div>
                </div>
                <h3>{place.title}</h3>
                <p>{place.text}</p>
              </article>
            ))}
          </div>
          <p className={styles.caption}>
            案内カードのデザイン例です。QRコードは見本のため、決済には利用できません。設置時に専用のQRコード・担当者名を設定します。
          </p>
        </section>
        <section id="benefits" className={styles.benefitsSection}>
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <h2>
                届いた感謝が、
                <br className={styles.mobileBreak} />
                次のおもてなしにつながる。
              </h2>
            </div>
            <BenefitsSlider />
          </div>
        </section>
        <section id="pricing" className={`${styles.section} ${styles.wrap}`}>
          <div className={styles.sectionHead}>
            <h2>
              初期費用も、月額費用も、
              <span style={{ whiteSpace: 'nowrap' }}>0円。</span>
            </h2>
            <p>はじめやすく、続けやすい料金体系。</p>
          </div>
          <div className={styles.pricing}>
            <div>
              <h3>初期費用</h3>
              <p>
                <strong>0</strong>円
              </p>
            </div>
            <div>
              <h3>月額費用</h3>
              <p>
                <strong>0</strong>円
              </p>
            </div>
            <div>
              <h3>入金額に対して</h3>
              <p>
                <strong>15</strong>％
              </p>
              <small>システム・決済手数料込み</small>
            </div>
          </div>
        </section>
        <section
          id="faq"
          className={`${styles.section} ${styles.faqSection} ${styles.wrap}`}
          aria-labelledby="faq-title"
        >
          <div className={styles.sectionHead}>
            <h2 id="faq-title">よくある質問</h2>
            <p>旅館・ホテルでの心付け・チップ導入について。</p>
          </div>
          <div className={styles.faq}>
            {FAQS.map(({ q, a }) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>
        <section className={styles.contact}>
          <h2>
            あなたの旅館・ホテルにも、
            <br />
            感謝がめぐる仕組みを。
          </h2>
          <p>
            設置場所や運用方法など、
            <br className={styles.mobileBreak} />
            まずはお気軽にご相談ください。
          </p>
          <Consult />
          <small>導入相談フォームへ移動します。</small>
        </section>
      </main>
      <footer className={`${styles.footer} ${styles.wrap}`}>
        <a href="#main" aria-label="めぐる トップへ">
          <Image
            src={asset('logo')}
            alt="めぐる MEGURU"
            width={110}
            height={60}
          />
        </a>
        <a href="/about">運営会社 AccelHack</a>
        <small>© {new Date().getFullYear()} AccelHack Inc.</small>
      </footer>
    </div>
  );
}
