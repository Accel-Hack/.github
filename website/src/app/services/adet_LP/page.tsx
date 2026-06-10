'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

const GAS_URL =
  'https://script.google.com/macros/s/AKfycbwiOBKtWYW0vBbsbbjpskKQ_u6Q7NPsfmfgX6bNL_SmGnu9gF-j30BjbtUndlUDgjPv/exec';

const ASSET_BASE = '/image/services/adet-lp';

const concernItems = [
  '仕様書が古く、実装とずれている',
  '仕様書コードやAPIを探すのに時間がかかる',
  '影響範囲の確認が属人化している',
  '口頭確認が増え、レビューが止まりやすい',
  'どの仕様が正しいのか判断できない',
  'ナレッジが散らばり引き継ぎに時間がかかる',
];

const changeCards = [
  {
    type: 'before',
    image: 'BeforeAfter_img_illust02.jpg',
    text: '仕様書が Excel や Word に散らばっていて、どれが最新かわからない。',
  },
  {
    type: 'before',
    image: 'BeforeAfter_img_illust03.jpg',
    text: '仕様変更やレビュー内容が残りづらく、今ある仕様までたどれない。',
  },
  {
    type: 'after',
    image: 'BeforeAfter_img_illust02-1.jpg',
    title: '検索・画面・API・DBをひとつの領域で一元管理',
    text: '仕様と関連情報をまとめて確認できる。',
  },
  {
    type: 'after',
    image: 'BeforeAfter_img_illust04.jpg',
    title: '既存コードをADeTに連携し仕様書を自動作成',
    text: '今日から仕様書のある状態へ。',
  },
];

const flows = [
  {
    label: '現状',
    before: '仕様書が古く、探すだけで終わっている',
    after: '既存コードを解析し、仕様書を自動生成・更新',
  },
  {
    label: '検索',
    before: '必要な仕様がどこにあるかわからない',
    after: '画面・API・DB・業務単位でまとめて検索',
  },
  {
    label: '変更',
    before: '変更の影響範囲を、人手で洗い出している',
    after: 'AIが仕様を横断し、気づきにくい影響を整理',
  },
  {
    label: '共有',
    before: '担当者に何度も確認しながら進めている',
    after: '仕様情報をチームで共有し、確認待ちを削減',
  },
];

const steps = [
  {
    step: 'STEP1',
    title: 'デモアカウントの発行',
    text: '資料請求後、担当者より利用方法をご案内します。',
  },
  {
    step: 'STEP2',
    title: '本登録',
    text: 'チーム情報を設定し、プロジェクトを登録します。',
  },
  {
    step: 'STEP3',
    title: 'ご契約',
    text: 'プランを選択いただき、継続利用を開始できます。',
  },
];

function Logo() {
  return (
    <a className={styles.logo} href="#">
      <Image
        className={styles.logoImage}
        src={`${ASSET_BASE}/adet-logo.jpg`}
        alt="ADeT"
        width={690}
        height={240}
      />
    </a>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
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
                    />
                  </label>
                </div>
                <label className={styles.formField}>
                  <span>お問い合わせ・ご要望</span>
                  <textarea
                    ref={messageRef}
                    className={styles.formTextarea}
                    placeholder="現在の課題や、確認したい内容をご記入ください。"
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
          <a href="#flow">ご利用の流れ</a>
          <button onClick={openModal} type="button">
            <span>資料請求</span>
            <ArrowIcon />
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
                  {concernItems.map((item) => (
                    <div key={item}>
                      <Image
                        src={`${ASSET_BASE}/Solution_merit_icon.png`}
                        alt=""
                        width={40}
                        height={40}
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className={styles.blueLead}>
                毎日どこかのチームで、起きている
                <br />
                仕様書の問題を一気に解決します!
              </p>
            </div>
          </div>
        </section>

        <section className={styles.autoSection} id="what">
          <div className={styles.wrap}>
            <div className={`${styles.productLine} ${styles.reveal}`}>
              <Logo />
              <p>
                仕様書の作成からメンテナンス、
                <br />
                それを元にした開発とテスト設計までをAIがトータルサポート
              </p>
            </div>
            <div className={`${styles.demoCard} ${styles.reveal}`}>
              <p className={styles.ribbon}>
                既存ソースコードと連携して仕様書のないプロジェクトに仕様書を導入できます
              </p>
              <h2>ADeTならGitHubと連携</h2>
              <p>いまあるコードをもとに、仕様書づくりをすぐ始められます。</p>
              <Image
                className={styles.solutionPc}
                src={`${ASSET_BASE}/Solution_img_PC.jpg`}
                alt="ADeTの仕様書管理画面イメージ"
                width={430}
                height={340}
              />
              <div className={styles.memo}>
                <Image
                  src={`${ASSET_BASE}/Detail_img_illust.jpg`}
                  alt=""
                  width={194}
                  height={200}
                  aria-hidden="true"
                />
                <p>
                  これまでドキュメント化しづらかった変更点も、コードと仕様をつなげて整理できます。
                </p>
              </div>
            </div>
          </div>
        </section>

        <CtaBand onClick={openModal} />

        <section className={styles.changeSection}>
          <div className={styles.wrap}>
            <div className={`${styles.sectionTitle} ${styles.reveal}`}>
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
                  {card.title && <h3>{card.title}</h3>}
                  <p>{card.text}</p>
                  <div className={styles.cardVisual}>
                    <Image
                      src={`${ASSET_BASE}/${card.image}`}
                      alt=""
                      width={card.type === 'before' ? 480 : 660}
                      height={card.type === 'before' ? 285 : 340}
                      aria-hidden="true"
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.flowImprove}>
          <div className={styles.wrap}>
            <div className={`${styles.sectionTitle} ${styles.reveal}`}>
              <p>ADeTでここは変わる</p>
              <h2>仕様書業務改善フロー</h2>
            </div>
            <div className={styles.flowList}>
              {flows.map((flow) => (
                <article
                  className={`${styles.flowRow} ${styles.reveal}`}
                  key={flow.label}
                >
                  <div className={styles.flowBefore}>
                    <span>{flow.label}</span>
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
      <p>詳しい導入方法・事例を資料はこちら</p>
      <button onClick={onClick} type="button">
        資料を受け取る
        <ArrowIcon />
      </button>
      <span>しつこい営業はありません。ご相談はお気軽に</span>
    </section>
  );
}
