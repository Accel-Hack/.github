'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

const GAS_URL =
  'https://script.google.com/macros/s/AKfycbwiOBKtWYW0vBbsbbjpskKQ_u6Q7NPsfmfgX6bNL_SmGnu9gF-j30BjbtUndlUDgjPv/exec';

const ASSET_BASE = '/image/services/adet-lp';
const LOGO_SRC = `${ASSET_BASE}/adet-logo-transparent.png`;

const concernItems = [
  [
    { text: '仕様書作成で', breakAfter: true },
    { text: '開発工数が2倍', accent: true },
    { text: 'に膨らんでいる' },
  ],
  [
    { text: '仕様書とコードが乖離して', breakAfter: true },
    { text: 'ドキュメントが負債化', accent: true },
    { text: 'している' },
  ],
  [
    { text: '属人化', accent: true },
    { text: 'していて仕様書が', breakAfter: true },
    { text: 'スピーディーに更新できていない' },
  ],
  [{ text: '仕様書変更', accent: true }, { text: 'の影響範囲が追えない' }],
  [
    { text: 'いまだに' },
    { text: '紙の業務', accent: true },
    { text: 'を', breakAfter: true },
    { text: 'システム化できていない' },
  ],
  [
    { text: 'システム変更の度に', breakAfter: true },
    { text: '要件整理や見積もり', accent: true },
    { text: 'に時間がかかる' },
  ],
];

const changeCards = [
  {
    type: 'before',
    image: 'BeforeAfter_img_illust02.jpg',
    text: '仕様書がExcelやWordに散在していて、どれが最新かわからない',
  },
  {
    type: 'before',
    image: 'BeforeAfter_img_illust03.jpg',
    text: '仕様書がないまま開発が進んでいて、今さら書き起こす時間もない',
  },
  {
    type: 'after',
    image: 'BeforeAfter_img_illust02-1.jpg',
    title:
      '機能・画面・API・DBをひとつの構造で一元管理！修正漏れも二重管理もゼロに。',
  },
  {
    type: 'after',
    image: 'BeforeAfter_img_illust04.jpg',
    title:
      '既存コードをADeTに連携し仕様書を自動作成！今日から仕様書のある状態へ。',
  },
];

const flows = [
  {
    before: '仕様書が古く、実態とズレている',
    after: '既存コードを解析し、仕様書を自動生成・更新！',
  },
  {
    before: '変更時の影響範囲がわからない',
    after: '画面・API・DB・機能のつながりを可視化！',
  },
  {
    before: '仕様が属人化し、引き継げない',
    after: 'AIが仕様を構造化し、誰でも読める形に整理！',
  },
  {
    before: '要件整理や見積もりに時間がかかる',
    after: '影響範囲と現状仕様を把握し、判断材料を明確に！',
  },
];

const steps = [
  {
    step: 'STEP1',
    title: 'デモアカウントの発行',
    text: '資料請求をしていただいた方に、デモアカウントを発行いたします。',
  },
  {
    step: 'STEP2',
    title: '本登録',
    text: 'デモ環境確認後、本番アカウントへ移行します。',
  },
  {
    step: 'STEP3',
    title: 'ご契約',
    text: 'プランをお選びいただき、ご契約完了。その日からご利用ができます。',
  },
];

function Logo() {
  return (
    <a className={styles.logo} href="#">
      <Image
        className={styles.logoImage}
        src={LOGO_SRC}
        alt="ADeT"
        width={690}
        height={240}
      />
    </a>
  );
}

function ProductLogo() {
  return (
    <div className={styles.productLogo} aria-label="ADeT アデット">
      <Image
        className={styles.productLogoImage}
        src={LOGO_SRC}
        alt="ADeT"
        width={690}
        height={240}
      />
      <span className={styles.productLogoKana}>
        <span>ア</span>デット
      </span>
    </div>
  );
}

function DownloadCircleIcon() {
  return (
    <svg className={styles.downloadIcon} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 6v8" />
      <path d="m8.5 10.8 3.5 3.5 3.5-3.5" />
      <path d="M8 17h8" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function FileIcon() {
  return (
    <svg className={styles.fileIcon} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6" />
      <path d="M9 17h4" />
    </svg>
  );
}

export default function ADetLpPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [showThanks, setShowThanks] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, boolean>>({});

  const nameRef = useRef<HTMLInputElement>(null);
  const kanaRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const companyRef = useRef<HTMLInputElement>(null);
  const telRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add(styles.on);
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
    );

    document
      .querySelectorAll(`.${styles.reveal}`)
      .forEach((el) => obs.observe(el));

    return () => obs.disconnect();
  }, []);

  const openModal = useCallback(() => {
    setModalOpen(true);
    setShowThanks(false);
    document.body.style.overflow = 'hidden';
    setTimeout(() => nameRef.current?.focus(), 250);
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
    document.body.style.overflow = '';
  }, []);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && modalOpen) closeModal();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [closeModal, modalOpen]);

  const handleSubmit = async () => {
    const name = nameRef.current?.value.trim() || '';
    const kana = kanaRef.current?.value.trim() || '';
    const email = emailRef.current?.value.trim() || '';
    const company = companyRef.current?.value.trim() || '';

    const errors: Record<string, boolean> = {};
    if (!name) errors.name = true;
    if (!kana) errors.kana = true;
    if (!email) errors.email = true;
    if (!company) errors.company = true;

    setFormErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setSubmitting(true);
    const payload = {
      name,
      kana,
      email,
      company,
      tel: telRef.current?.value.trim() || '',
      message: messageRef.current?.value.trim() || '',
      source: 'adet_LP',
    };

    try {
      await fetch(GAS_URL, { method: 'POST', body: JSON.stringify(payload) });
    } catch {
      // GAS may reject CORS preflight in local previews; keep the LP flow complete.
    } finally {
      setSubmitting(false);
      setShowThanks(true);
    }
  };

  const inputStyle = (key: string) =>
    formErrors[key]
      ? {
          borderColor: 'var(--red)',
          boxShadow: '0 0 0 3px rgba(208,64,64,0.12)',
        }
      : undefined;

  return (
    <div className={styles.pageWrapper}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;800&family=Inter:wght@500;600;700;800&display=swap');`}</style>

      <div
        className={`${styles.formOverlay}${modalOpen ? ` ${styles.open}` : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="form-title"
      >
        <button
          className={styles.formBackdrop}
          onClick={closeModal}
          aria-label="閉じる"
          type="button"
        />
        <div className={styles.formModal}>
          {!showThanks ? (
            <>
              <div className={styles.formModalHead}>
                <p className={styles.formModalLabel}>資料請求・問い合わせ</p>
                <h2 className={styles.formModalTitle} id="form-title">
                  資料を受け取る
                </h2>
                <p className={styles.formModalSub}>
                  資料請求・デモのご依頼・ご質問など、お気軽にどうぞ。
                </p>
                <button
                  className={styles.formClose}
                  onClick={closeModal}
                  aria-label="閉じる"
                  type="button"
                >
                  x
                </button>
              </div>
              <div className={styles.formBody}>
                <div className={styles.formRow}>
                  <label className={styles.formField}>
                    <span>
                      氏名 <em>*</em>
                    </span>
                    <input
                      ref={nameRef}
                      className={styles.formInput}
                      style={inputStyle('name')}
                      autoComplete="name"
                      placeholder="山田 太郎"
                      data-clarity-mask="true"
                    />
                  </label>
                  <label className={styles.formField}>
                    <span>
                      フリガナ <em>*</em>
                    </span>
                    <input
                      ref={kanaRef}
                      className={styles.formInput}
                      style={inputStyle('kana')}
                      placeholder="ヤマダ タロウ"
                      data-clarity-mask="true"
                    />
                  </label>
                </div>
                <label className={styles.formField}>
                  <span>
                    メールアドレス <em>*</em>
                  </span>
                  <input
                    ref={emailRef}
                    className={styles.formInput}
                    style={inputStyle('email')}
                    type="email"
                    autoComplete="email"
                    placeholder="example@company.co.jp"
                    data-clarity-mask="true"
                  />
                </label>
                <div className={styles.formRow}>
                  <label className={styles.formField}>
                    <span>
                      会社名 <em>*</em>
                    </span>
                    <input
                      ref={companyRef}
                      className={styles.formInput}
                      style={inputStyle('company')}
                      autoComplete="organization"
                      placeholder="株式会社サンプル"
                      data-clarity-mask="true"
                    />
                  </label>
                  <label className={styles.formField}>
                    <span>電話番号</span>
                    <input
                      ref={telRef}
                      className={styles.formInput}
                      type="tel"
                      autoComplete="tel"
                      placeholder="03-1234-5678"
                      data-clarity-mask="true"
                    />
                  </label>
                </div>
                <label className={styles.formField}>
                  <span>お問い合わせ・ご要望</span>
                  <textarea
                    ref={messageRef}
                    className={styles.formTextarea}
                    placeholder="現在の課題や、確認したい内容をご記入ください。"
                    data-clarity-mask="true"
                  />
                </label>
                <button
                  className={styles.formSubmit}
                  onClick={handleSubmit}
                  disabled={submitting}
                  type="button"
                >
                  {submitting ? '送信中...' : '送信する'}
                </button>
                <p className={styles.formNote}>
                  送信内容は適切に管理し、資料送付とご連絡の目的で利用します。
                </p>
              </div>
            </>
          ) : (
            <div className={styles.thanks}>
              <div className={styles.thanksIcon}>✓</div>
              <h2>送信が完了しました</h2>
              <p>
                お問い合わせいただきありがとうございます。
                <br />
                担当者よりご連絡いたします。
              </p>
              <button onClick={closeModal} type="button">
                閉じる
              </button>
            </div>
          )}
        </div>
      </div>

      <header className={styles.header}>
        <Logo />
        <div className={styles.headerActions}>
          <a href="#contact" onClick={openModal}>
            <MailIcon />
            <span>お問い合わせ</span>
          </a>
          <button onClick={openModal} type="button">
            <FileIcon />
            <span className={styles.headerButtonText}>
              <h2>資料請求</h2>
              <h3>してみる</h3>
            </span>
          </button>
        </div>
      </header>

      <main>
        <section className={styles.hero}>
          <Image
            className={styles.heroImage}
            src={`${ASSET_BASE}/Mainvisual.jpg`}
            alt="その仕様書、「いま」も信用できる？仕様書にまつわるすべての手間はADeTが解決！"
            width={1440}
            height={900}
            priority
          />
        </section>

        <section className={styles.intro}>
          <div className={styles.wrap}>
            <p className={`${styles.introLead} ${styles.reveal}`}>
              「あの人に聞かなきゃわからない」仕様書をいますぐ一元管理！
            </p>
            <div className={`${styles.concernBlock} ${styles.reveal}`}>
              <h2>あなたのチームにも、こんな現象はありませんか?</h2>
              <div className={styles.concernPanel}>
                <div className={styles.concernImage}>
                  <Image
                    src={`${ASSET_BASE}/Problem_Img_Illust.jpg`}
                    alt=""
                    width={530}
                    height={346}
                    aria-hidden="true"
                  />
                </div>
                <div className={styles.concernGrid}>
                  {concernItems.map((item, index) => (
                    <div key={index}>
                      <span className={styles.concernText}>
                        {item.map((part, partIndex) => (
                          <React.Fragment key={`${part.text}-${partIndex}`}>
                            <span
                              className={
                                part.accent ? styles.accentText : undefined
                              }
                            >
                              {part.text}
                            </span>
                            {part.breakAfter && <br />}
                          </React.Fragment>
                        ))}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <p className={styles.blueLead}>
                <span>毎日どこかのチームで、起きている</span>
                <br />
                <strong>仕様書の問題を一気に解決します!</strong>
              </p>
            </div>
          </div>
        </section>

        <section className={styles.autoSection} id="what">
          <div className={styles.wrap}>
            <div className={`${styles.productLine} ${styles.reveal}`}>
              <ProductLogo />
              <p>
                仕様書の作成からメンテナンス、
                <br />
                それを元にした開発とテスト設計までをAIがトータルサポート
              </p>
            </div>
            <div className={`${styles.demoCard} ${styles.reveal}`}>
              <p className={styles.ribbon}>
                既存ソースコードと連携して仕様書のないプロジェクトに仕様書を導入することも可能！
              </p>
              <h2>ADeTをGitHubと連携</h2>
              <p>リポジトリをつなぐだけで、仕様書の初稿を作成</p>
              <h2 className={styles.pcCaption}>
                <span aria-hidden="true" />
                既存コードをADeTが自動解析。仕様の初稿を即生成
              </h2>
              <Image
                className={styles.solutionPc}
                src={`${ASSET_BASE}/Solution_img_PC.jpg`}
                alt="ADeTの仕様書管理画面イメージ"
                width={430}
                height={340}
              />
            </div>
            <div className={styles.memo}>
              <Image
                src={`${ASSET_BASE}/Detail_img_illust.jpg`}
                alt=""
                width={194}
                height={200}
                aria-hidden="true"
              />
              <p>
                GitHubアカウントを接続し、対象リポジトリを選ぶだけ。
                <br />
                <span>
                  ADeTがコードを解析し、機能・API・DBの仕様書を自動で生成します。
                </span>
                <br />
                ゼロから書く手間はありません。
              </p>
            </div>
            <p className={styles.engineerSupport}>
              また、ご不明な点があっても
              <strong>弊社エンジニアが伴走し、しっかりサポート</strong>
              いたします！
            </p>
          </div>
        </section>

        <CtaBand onClick={openModal} />

        <section className={styles.changeSection}>
          <div className={styles.wrap}>
            <div
              className={`${styles.sectionTitle} ${styles.changeTitle} ${styles.reveal}`}
            >
              <h2>ADeTを入れると、チームはこう変わる。</h2>
              <div className={styles.miniVisual}>
                <Image
                  src={`${ASSET_BASE}/Problem_Img_Illust.jpg`}
                  alt=""
                  width={530}
                  height={346}
                  aria-hidden="true"
                />
              </div>
            </div>

            <div className={styles.changeGrid}>
              {changeCards.map((card, index) => (
                <article
                  className={`${styles.changeCard} ${styles[card.type]} ${styles.reveal}`}
                  key={`${card.type}-${index}`}
                >
                  {card.type === 'after' && card.title && <h3>{card.title}</h3>}
                  <div className={styles.cardVisual}>
                    <Image
                      src={`${ASSET_BASE}/${card.image}`}
                      alt=""
                      width={card.type === 'before' ? 480 : 660}
                      height={card.type === 'before' ? 285 : 340}
                      aria-hidden="true"
                    />
                  </div>
                  {card.type === 'before' && <p>{card.text}</p>}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.flowImprove}>
          <div className={styles.wrap}>
            <div className={`${styles.sectionTitle} ${styles.reveal}`}>
              <p>
                ＼ <span className={styles.blueInitial}>A</span>
                DeTですぐに変わる ／
              </p>
              <h2>仕様書業務改善フロー</h2>
            </div>
            <div className={styles.flowList}>
              {flows.map((flow, index) => (
                <article
                  className={`${styles.flowRow} ${styles.reveal}`}
                  key={`${flow.before}-${index}`}
                >
                  <div className={styles.flowBefore}>
                    <span>改善前</span>
                    <p>{flow.before}</p>
                  </div>
                  <div className={styles.flowAfter}>
                    <span>改善後</span>
                    <p>{flow.after}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CtaBand onClick={openModal} />

        <section className={styles.usageSection} id="flow">
          <div className={styles.wrap}>
            <div className={`${styles.sectionTitle} ${styles.reveal}`}>
              <h2>ご利用の流れ</h2>
            </div>
            <div className={styles.stepGrid}>
              {steps.map((item) => (
                <article
                  className={`${styles.stepCard} ${styles.reveal}`}
                  key={item.step}
                >
                  <span>{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CtaBand onClick={openModal} />
      </main>

      <footer className={styles.footer}>
        <p>© 2025 ADeT. 仕様書管理を、仕組みで変える。</p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          type="button"
        >
          ↑
        </button>
      </footer>
    </div>
  );
}

function CtaBand({ onClick }: { onClick: () => void }) {
  return (
    <section className={styles.ctaBand}>
      <p>
        詳しい導入方法・<span>無料デモ</span>体験はこちら
      </p>
      <button onClick={onClick} type="button">
        資料を受け取る
        <DownloadCircleIcon />
      </button>
      <span>しつこい営業はありません。ご相談はお気軽に</span>
    </section>
  );
}
