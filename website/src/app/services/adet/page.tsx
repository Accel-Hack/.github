'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import styles from './page.module.css';

const LOGO_B64 = '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';

const GAS_URL = 'https://script.google.com/macros/s/AKfycbwiOBKtWYW0vBbsbbjpskKQ_u6Q7NPsfmfgX6bNL_SmGnu9gF-j30BjbtUndlUDgjPv/exec';

export default function ADetPage() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorBig, setCursorBig] = useState(false);
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

  /* ─── カスタムカーソル ─── */
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  /* ─── スクロールフェードイン ─── */
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target as HTMLElement;
        const siblings = el.parentElement
          ? [...el.parentElement.querySelectorAll(`.${styles.reveal}`)]
          : [];
        const idx = siblings.indexOf(el);
        const delay = idx >= 0 ? idx * 90 : 0;
        setTimeout(() => {
          el.classList.add(styles.on);
        }, delay);
        obs.unobserve(el);
      });
    }, { threshold: 0.06, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll(`.${styles.reveal}`).forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  /* ─── モーダル ─── */
  const openModal = useCallback(() => {
    setModalOpen(true);
    setShowThanks(false);
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      nameRef.current?.focus();
    }, 400);
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
    document.body.style.overflow = '';
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && modalOpen) closeModal();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [modalOpen, closeModal]);

  /* ─── フォーム送信 ─── */
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
    };

    try {
      await fetch(GAS_URL, { method: 'POST', body: JSON.stringify(payload) });
    } catch {
      // GAS CORS issue — treat as success
    } finally {
      setSubmitting(false);
      setShowThanks(true);
    }
  };

  const hoverHandlers = {
    onMouseEnter: () => setCursorBig(true),
    onMouseLeave: () => setCursorBig(false),
  };

  return (
    <div className={styles.pageWrapper}>
      {/* Google Fonts */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&family=Inter:wght@300;400;500;600;700&display=swap');`}</style>

      {/* カスタムカーソル */}
      <div
        className={`${styles.cursor}${cursorBig ? ` ${styles.cursorBig}` : ''}`}
        style={{ left: cursorPos.x, top: cursorPos.y }}
      />

      {/* ═══ FORM MODAL ═══ */}
      <div
        className={`${styles['form-overlay']}${modalOpen ? ` ${styles.open}` : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="form-title"
      >
        <div className={styles['form-backdrop']} onClick={closeModal} />
        <div className={styles['form-modal']}>
          {!showThanks ? (
            <div id="form-content">
              <div className={styles['form-modal-head']}>
                <div className={styles['form-modal-label']}>資料請求・問い合わせ</div>
                <div className={styles['form-modal-title']} id="form-title">資料を受け取る / 問い合わせする</div>
                <div className={styles['form-modal-sub']}>資料請求・デモのご依頼・ご質問など、お気軽にどうぞ。<br />担当者より1〜2営業日以内にご連絡いたします。</div>
                <button className={styles['form-close']} onClick={closeModal} aria-label="閉じる">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
              <div className={styles['form-body']}>
                <div className={styles['form-row']}>
                  <div className={styles['form-field']}>
                    <label className={styles['form-label']} htmlFor="f-name">氏名<span className={styles.req}>*</span></label>
                    <input
                      ref={nameRef}
                      className={styles['form-input']}
                      type="text"
                      id="f-name"
                      name="name"
                      placeholder="山田 太郎"
                      autoComplete="name"
                      required
                      style={formErrors.name ? { borderColor: 'var(--red)', boxShadow: '0 0 0 3px rgba(208,64,64,0.12)' } : undefined}
                    />
                  </div>
                  <div className={styles['form-field']}>
                    <label className={styles['form-label']} htmlFor="f-kana">フリガナ<span className={styles.req}>*</span></label>
                    <input
                      ref={kanaRef}
                      className={styles['form-input']}
                      type="text"
                      id="f-kana"
                      name="kana"
                      placeholder="ヤマダ タロウ"
                      required
                      style={formErrors.kana ? { borderColor: 'var(--red)', boxShadow: '0 0 0 3px rgba(208,64,64,0.12)' } : undefined}
                    />
                  </div>
                </div>
                <div className={styles['form-field']}>
                  <label className={styles['form-label']} htmlFor="f-email">メールアドレス<span className={styles.req}>*</span></label>
                  <input
                    ref={emailRef}
                    className={styles['form-input']}
                    type="email"
                    id="f-email"
                    name="email"
                    placeholder="example@company.co.jp"
                    autoComplete="email"
                    required
                    style={formErrors.email ? { borderColor: 'var(--red)', boxShadow: '0 0 0 3px rgba(208,64,64,0.12)' } : undefined}
                  />
                </div>
                <div className={styles['form-row']}>
                  <div className={styles['form-field']}>
                    <label className={styles['form-label']} htmlFor="f-company">会社名<span className={styles.req}>*</span></label>
                    <input
                      ref={companyRef}
                      className={styles['form-input']}
                      type="text"
                      id="f-company"
                      name="company"
                      placeholder="株式会社○○"
                      autoComplete="organization"
                      required
                      style={formErrors.company ? { borderColor: 'var(--red)', boxShadow: '0 0 0 3px rgba(208,64,64,0.12)' } : undefined}
                    />
                  </div>
                  <div className={styles['form-field']}>
                    <label className={styles['form-label']} htmlFor="f-tel">電話番号<span className={styles.opt}>任意</span></label>
                    <input ref={telRef} className={styles['form-input']} type="tel" id="f-tel" name="tel" placeholder="03-0000-0000" autoComplete="tel" />
                  </div>
                </div>
                <div className={styles['form-field']}>
                  <label className={styles['form-label']} htmlFor="f-message">お問い合わせ・ご要望<span className={styles.opt}>任意</span></label>
                  <textarea ref={messageRef} className={styles['form-textarea']} id="f-message" name="message" placeholder="ご興味のある機能、現在の課題、ご質問など、お気軽にご記入ください。" />
                </div>
                <button className={styles['form-submit']} type="button" onClick={handleSubmit} disabled={submitting}>
                  {submitting ? (
                    <>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16" style={{ animation: 'spin 0.8s linear infinite' }}>
                        <polyline points="23 4 23 10 17 10" /><path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
                      </svg>{' '}送信中…
                    </>
                  ) : (
                    <>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                        <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                      送信する
                    </>
                  )}
                </button>
                <div className={styles['form-note']}>送信内容は SSL で暗号化されています。個人情報は適切に管理し、第三者への提供は行いません。</div>
              </div>
            </div>
          ) : (
            <div className={`${styles['form-thanks']} ${styles.show}`}>
              <div className={styles['thanks-icon']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <div className={styles['thanks-title']}>送信が完了しました</div>
              <div className={styles['thanks-sub']}>お問い合わせいただきありがとうございます。<br />1〜2営業日以内に、ご登録のメールアドレスへご連絡いたします。</div>
              <button className={styles['thanks-close-btn']} onClick={closeModal}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
                閉じる
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ═══ HEADER ═══ */}
      <header className={styles.header} id="hdr">
        <a href="#" className={styles.logo}>
          <img src={`data:image/png;base64,${LOGO_B64}`} alt="ADeT" className={styles['logo-img']} />
        </a>
        <nav className={styles.nav}>
          <a href="#what" {...hoverHandlers}>ADeTとは</a>
          <a href="#solution" {...hoverHandlers}>機能</a>
          <a href="#flow" {...hoverHandlers}>ご利用の流れ</a>
          <a href="#pricing" {...hoverHandlers}>料金</a>
          <button className={styles['btn-nav']} onClick={openModal} {...hoverHandlers}>無料で始める</button>
        </nav>
      </header>

      {/* ═══ HERO ═══ */}
      <section className={styles.hero}>
        <div className={styles['hero-grid']} />
        <div className={styles['hero-glow1']} />
        <div className={styles['hero-glow2']} />
        <div className={styles['hero-inner']}>
          <div className={styles['hero-badge']}><span className={styles.pulse} />β版 ・ 無料ユーザー募集中</div>
          <h1 className={styles['hero-h1']}>
            その仕様書、<br />
            <span className={styles['blue-grad']}>「いま」も信用できる？</span>
          </h1>
          <p className={styles['hero-product-def']}>
            <span className={styles['def-label']}>ADeT とは</span>
            <span>GitHubと連携して仕様書を自動生成・管理するAIツールです。<br />書く・更新する・共有する——<br />仕様書にまつわるすべての手間を、ADeTが引き受けます。</span>
          </p>
          <p className={styles['hero-sub']}>
            仕様書を書いた。でもコードはもう変わっている。<br />
            そんな状況、あなたのチームにもありませんか。
          </p>
          <div className={styles['hero-actions']}>
            <button className={styles['btn-primary']} onClick={openModal} {...hoverHandlers}><span>まずは無料で試す</span> <span>→</span></button>
          </div>
        </div>
      </section>

      {/* ═══ PAIN ═══ */}
      <section className={styles['pain-sec']} id="pain">
        <div className={styles['pain-glow']} />
        <div className={`${styles['pain-head']} ${styles.reveal}`}>
          <div className={styles['label-sm']}>この状況、心当たりありますか</div>
          <h2 className={styles['pain-h2']}>毎日どこかのチームで、起きていること。</h2>
        </div>
        <div className={`${styles['pain-cards']} ${styles.w} ${styles.reveal}`}>
          <div className={`${styles['pain-card']}`} {...hoverHandlers}>
            <span className={styles['pain-icon']}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
                <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
              </svg>
            </span>
            <div className={styles['pain-role']}>Engineer</div>
            <blockquote>コードを直したいだけなのに、仕様書の確認と更新で半日つぶれた</blockquote>
            <p>実装よりも仕様管理に時間がかかり、本来やるべき開発が後回しになっている。</p>
          </div>
          <div className={`${styles['pain-card']}`} {...hoverHandlers}>
            <span className={styles['pain-icon']}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="9" y1="13" x2="15" y2="13" /><line x1="9" y1="17" x2="13" y2="17" />
              </svg>
            </span>
            <div className={styles['pain-role']}>Project Manager</div>
            <blockquote>保守の見積もりを出したら大外れ。<br />仕様書が古すぎて当てにならなかった</blockquote>
            <p>仕様書と実態が乖離していて、影響範囲の把握に時間がかかり見積もりが不正確になる。</p>
          </div>
          <div className={`${styles['pain-card']}`} {...hoverHandlers}>
            <span className={styles['pain-icon']}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
                <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 3v18" /><path d="M3 9h6" /><path d="M3 15h6" /><path d="M15 9h3" /><path d="M15 15h3" />
              </svg>
            </span>
            <div className={styles['pain-role']}>Tech Lead / CTO</div>
            <blockquote>メンバーが抜けるたびに仕様が消える。誰も引き継げるドキュメントがない</blockquote>
            <p>属人化が慢性化し、特定の人しか知らない仕様が蓄積。<br />技術的負債が膨らみ続けている。</p>
          </div>
        </div>
      </section>

      {/* ═══ PROBLEM ═══ */}
      <section className={styles['problem-sec']} id="problem">
        <div className={styles['prob-glow']} />
        <div className={`${styles['problem-inner']} ${styles.w}`}>
          <div className={`${styles['prob-left']} ${styles.reveal}`}>
            <div className={styles['label-sm']}>放置するとどうなるか</div>
            <h2 className={styles['prob-h2']}>「何となく不便」<br />では済まない。</h2>
            <p className={styles['prob-desc']}>仕様書の問題は、放置するたびに確実に悪化します。<br />最終的にはチームが新機能を出せなくなる段階に到達します。</p>
            <div className={styles['prob-alert']}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16" style={{ flexShrink: 0, marginTop: 1 }}>
                <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
              仕様書とコードの乖離は、発見が遅れるほど修正コストが指数関数的に増大します。
            </div>
          </div>
          <div className={`${styles['stage-list']} ${styles.reveal}`}>
            {[
              { num: 'STAGE 01', title: '仕様書の更新が後回しになる', desc: 'コードを修正しても仕様書の更新は「あとで」になる。\n開発が進むほどギャップが広がっていく。' },
              { num: 'STAGE 02', title: '「仕様書を信頼しない」文化が生まれる', desc: '古い仕様書を信じて実装したら手戻りが発生。\n繰り返されると誰も仕様書を読まなくなる。' },
              { num: 'STAGE 03', title: '属人化が加速し、引き継ぎができなくなる', desc: '「あの人しかわからない」仕様が積み重なる。\nメンバーが抜けるたびに知識が失われていく。' },
              { num: 'STAGE 04', title: '技術的負債が積み上がり、新機能が出せなくなる', desc: '修正するたびに別のバグが生まれ開発速度が低下。\n競合に置いていかれる。', danger: true },
            ].map((s) => (
              <div className={styles['stage-item']} key={s.num} {...hoverHandlers}>
                <div className={styles['stage-line']}>
                  <div className={styles['stage-dot']} />
                  <div className={styles['stage-conn']} />
                </div>
                <div className={`${styles['stage-body']}${s.danger ? ` ${styles.danger}` : ''}`}>
                  <div className={styles['stage-num']}>{s.num}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc.replace(/\n/g, '\n')}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SOLUTION ═══ */}
      <section className={styles['solution-sec']} id="solution">
        <div className={styles['sol-glow']} />
        <div className={`${styles['sol-head']} ${styles.w} ${styles.reveal}`}>
          <div className={styles['label-sm']}>解決策</div>
          <h2 className={styles['sol-h2']}>3つの課題に、<br />ADeTで3つの答えを出す。</h2>
          <p className={styles['sol-desc']}>人の判断・人の手・人のスタイルに依存していた仕様書管理を、ADeTは仕組みから変えます。</p>
        </div>

        {/* 解決策カード 1 */}
        <div className={`${styles['sol-row']} ${styles.w} ${styles.reveal}`}>
          <div className={styles['sol-row-left']}>
            <div className={styles['sol-problem-tag']}>課題 01</div>
            <div className={styles['sol-problem-text']}>API・画面などの仕様項目が<br />バラバラに管理されている</div>
            <div className={styles['sol-arrow']}>↓</div>
            <div className={styles['sol-feature-badge']}>Relation Map</div>
            <h3 className={styles['sol-row-h']}>機能・画面・API・DBを<br />ひとつの構造で管理する</h3>
            <p className={styles['sol-row-p']}>仕様項目の関係性を自動で紐付け、一ヶ所を変えると影響範囲が即座にわかります。<br />修正の手間と漏れをゼロに近づけます。</p>
            <ul className={styles['sol-row-list']}>
              <li>「この画面はどのAPIを呼ぶか」が常に明確</li>
              <li>変更時の影響範囲を即座に把握、手動洗い出し不要</li>
              <li>仕様の抜け漏れ・矛盾をリレーションから自動検出</li>
            </ul>
          </div>
          <div className={styles['sol-row-right']}>
            <svg viewBox="0 0 420 320" xmlns="http://www.w3.org/2000/svg" width="100%">
              <rect width="420" height="320" fill="#F4F7FC" rx="12" />
              <line x1="100" y1="100" x2="170" y2="148" stroke="#2F60CC" strokeWidth="1.5" strokeDasharray="5 3" opacity="0.5" />
              <line x1="100" y1="220" x2="170" y2="172" stroke="#2F60CC" strokeWidth="1.5" strokeDasharray="5 3" opacity="0.5" />
              <line x1="250" y1="148" x2="320" y2="100" stroke="#2F60CC" strokeWidth="1.5" strokeDasharray="5 3" opacity="0.5" />
              <line x1="250" y1="172" x2="320" y2="220" stroke="#2F60CC" strokeWidth="1.5" strokeDasharray="5 3" opacity="0.5" />
              <line x1="100" y1="100" x2="170" y2="148" stroke="#2F60CC" strokeWidth="2.5" opacity="0.9" />
              <rect x="170" y="128" width="80" height="64" rx="8" fill="#2F60CC" />
              <text x="210" y="153" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="11" fontWeight="700" fill="white">ADeT</text>
              <text x="210" y="171" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="8" fill="rgba(255,255,255,0.85)" letterSpacing="1">RELATION MAP</text>
              <rect x="36" y="78" width="64" height="30" rx="6" fill="white" stroke="#2F60CC" strokeWidth="1.5" />
              <text x="68" y="97" textAnchor="middle" fontFamily="Noto Sans JP,sans-serif" fontSize="11" fill="#2F60CC" fontWeight="700">機能</text>
              <rect x="36" y="206" width="64" height="30" rx="6" fill="white" stroke="#DCE3F0" strokeWidth="1.5" />
              <text x="68" y="225" textAnchor="middle" fontFamily="Noto Sans JP,sans-serif" fontSize="11" fill="#48566A">API</text>
              <rect x="320" y="78" width="64" height="30" rx="6" fill="white" stroke="#DCE3F0" strokeWidth="1.5" />
              <text x="352" y="97" textAnchor="middle" fontFamily="Noto Sans JP,sans-serif" fontSize="11" fill="#48566A">画面</text>
              <rect x="320" y="206" width="64" height="30" rx="6" fill="white" stroke="#DCE3F0" strokeWidth="1.5" />
              <text x="352" y="225" textAnchor="middle" fontFamily="Noto Sans JP,sans-serif" fontSize="11" fill="#48566A">DB</text>
              <rect x="138" y="46" width="144" height="22" rx="4" fill="rgba(47,96,204,0.1)" stroke="rgba(47,96,204,0.3)" strokeWidth="1" />
              <circle cx="152" cy="57" r="4" fill="#2F60CC" />
              <text x="224" y="61" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="9" fill="#2F60CC" fontWeight="600">影響範囲を検出 — 3件</text>
              <text x="36" y="276" fontFamily="Inter,sans-serif" fontSize="9" fill="#8896A8">導入前</text>
              <rect x="70" y="266" width="180" height="10" rx="3" fill="#EEF3FD" />
              <rect x="70" y="266" width="180" height="10" rx="3" fill="rgba(47,96,204,0.3)" />
              <text x="36" y="297" fontFamily="Inter,sans-serif" fontSize="9" fill="#2F60CC" fontWeight="600">導入後</text>
              <rect x="70" y="287" width="180" height="10" rx="3" fill="#EEF3FD" />
              <rect x="70" y="287" width="68" height="10" rx="3" fill="#2F60CC" />
              <text x="256" y="296" fontFamily="Inter,sans-serif" fontSize="9" fill="#2F60CC" fontWeight="700">-62%</text>
              <text x="36" y="310" fontFamily="Inter,sans-serif" fontSize="8" fill="#8896A8">仕様管理工数</text>
            </svg>
          </div>
        </div>

        {/* 解決策カード 2 */}
        <div className={`${styles['sol-row']} ${styles['sol-row-rev']} ${styles.w} ${styles.reveal}`}>
          <div className={styles['sol-row-left']}>
            <div className={styles['sol-problem-tag']}>課題 02</div>
            <div className={styles['sol-problem-text']}>更新しなくても<br />開発が進んでしまう</div>
            <div className={styles['sol-arrow']}>↓</div>
            <div className={styles['sol-feature-badge']}>Code to Spec / Spec to Code</div>
            <h3 className={styles['sol-row-h']}>既存のコードから<br />仕様書を生成する</h3>
            <p className={styles['sol-row-p']}>GitHubリポジトリを読み込み、コードの内容をもとに仕様書を自動生成。<br />「仕様書がない」状態を今日から解消できます。</p>
            <ul className={styles['sol-row-list']}>
              <li>既存リポジトリを繋ぐだけで仕様書の初稿を即生成</li>
              <li>仕様書からコードの雛形＋PRを自動生成</li>
              <li>コードと仕様書が常に同期した状態を維持</li>
            </ul>
          </div>
          <div className={styles['sol-row-right']}>
            <svg viewBox="0 0 420 320" xmlns="http://www.w3.org/2000/svg" width="100%">
              <rect width="420" height="320" fill="#F4F7FC" rx="12" />
              <rect x="24" y="40" width="148" height="220" rx="8" fill="white" stroke="#DCE3F0" strokeWidth="1.5" />
              <rect x="24" y="40" width="148" height="36" rx="8" fill="#F4F7FC" />
              <rect x="24" y="64" width="148" height="12" fill="#F4F7FC" />
              <text x="98" y="62" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="10" fontWeight="600" fill="#48566A">GitHub</text>
              <rect x="36" y="90" width="124" height="16" rx="3" fill="#EEF3FD" stroke="#C0D0F4" strokeWidth="1" />
              <text x="44" y="102" fontFamily="Inter,sans-serif" fontSize="8" fill="#2F60CC">📄 auth.service.ts</text>
              <rect x="36" y="112" width="124" height="16" rx="3" fill="#F5F7FA" />
              <text x="44" y="124" fontFamily="Inter,sans-serif" fontSize="8" fill="#8896A8">📄 user.controller.ts</text>
              <rect x="36" y="134" width="124" height="16" rx="3" fill="#F5F7FA" />
              <text x="44" y="146" fontFamily="Inter,sans-serif" fontSize="8" fill="#8896A8">📄 payment.model.ts</text>
              <rect x="36" y="156" width="124" height="16" rx="3" fill="#F5F7FA" />
              <text x="44" y="168" fontFamily="Inter,sans-serif" fontSize="8" fill="#8896A8">📄 order.service.ts</text>
              <rect x="36" y="218" width="124" height="20" rx="3" fill="rgba(47,96,204,0.08)" stroke="rgba(47,96,204,0.25)" strokeWidth="1" />
              <text x="98" y="232" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="8" fill="#2F60CC" fontWeight="600">⬆ PR #42 Created</text>
              <line x1="172" y1="150" x2="190" y2="150" stroke="#2F60CC" strokeWidth="2.5" />
              <polygon points="186,146 196,150 186,154" fill="#2F60CC" />
              <line x1="228" y1="150" x2="248" y2="150" stroke="#2F60CC" strokeWidth="2.5" />
              <polygon points="244,146 252,150 244,154" fill="#2F60CC" />
              <rect x="190" y="130" width="38" height="42" rx="6" fill="#2F60CC" />
              <text x="209" y="148" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="9" fontWeight="700" fill="white">ADeT</text>
              <text x="209" y="163" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="6" fill="rgba(255,255,255,0.8)" letterSpacing="0.5">AUTO SYNC</text>
              <rect x="248" y="40" width="148" height="220" rx="8" fill="white" stroke="rgba(47,96,204,0.35)" strokeWidth="1.5" />
              <rect x="248" y="40" width="148" height="36" rx="8" fill="rgba(47,96,204,0.08)" />
              <rect x="248" y="64" width="148" height="12" fill="rgba(47,96,204,0.08)" />
              <text x="322" y="62" textAnchor="middle" fontFamily="Noto Sans JP,sans-serif" fontSize="10" fill="#2F60CC" fontWeight="600">仕様書</text>
              <text x="260" y="92" fontFamily="Noto Sans JP,sans-serif" fontSize="9" fill="#0D1525" fontWeight="700">認証サービス</text>
              <text x="260" y="106" fontFamily="Inter,sans-serif" fontSize="8" fill="#8896A8">POST /auth/login</text>
              <text x="260" y="122" fontFamily="Noto Sans JP,sans-serif" fontSize="9" fill="#0D1525" fontWeight="700">ユーザー管理</text>
              <text x="260" y="136" fontFamily="Inter,sans-serif" fontSize="8" fill="#8896A8">GET /users/:id</text>
              <text x="260" y="152" fontFamily="Noto Sans JP,sans-serif" fontSize="9" fill="#0D1525" fontWeight="700">決済モデル</text>
              <text x="260" y="166" fontFamily="Inter,sans-serif" fontSize="8" fill="#8896A8">amount: number</text>
              <rect x="260" y="216" width="124" height="20" rx="3" fill="rgba(47,96,204,0.08)" stroke="rgba(47,96,204,0.2)" strokeWidth="1" />
              <circle cx="272" cy="226" r="4" fill="#2F60CC" />
              <text x="322" y="230" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="8" fill="#2F60CC" fontWeight="600">同期完了 — 最新の状態</text>
              <text x="210" y="286" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="9" fill="#2F60CC" fontWeight="700">STEP 1</text>
              <text x="210" y="298" textAnchor="middle" fontFamily="Noto Sans JP,sans-serif" fontSize="8" fill="#48566A">GitHub連携</text>
              <text x="98" y="286" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="9" fill="#8896A8" fontWeight="700">STEP 2</text>
              <text x="98" y="298" textAnchor="middle" fontFamily="Noto Sans JP,sans-serif" fontSize="8" fill="#8896A8">自動解析</text>
              <text x="322" y="286" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="9" fill="#8896A8" fontWeight="700">STEP 3</text>
              <text x="322" y="298" textAnchor="middle" fontFamily="Noto Sans JP,sans-serif" fontSize="8" fill="#8896A8">仕様書生成</text>
            </svg>
          </div>
        </div>

        {/* 解決策カード 3 */}
        <div className={`${styles['sol-row']} ${styles.w} ${styles.reveal}`}>
          <div className={styles['sol-row-left']}>
            <div className={styles['sol-problem-tag']}>課題 03</div>
            <div className={styles['sol-problem-text']}>書き方を統一する<br />仕組みがない</div>
            <div className={styles['sol-arrow']}>↓</div>
            <div className={styles['sol-feature-badge']}>AI Chat</div>
            <h3 className={styles['sol-row-h']}>AIが、誰が書いても<br />同じ構造に整える</h3>
            <p className={styles['sol-row-p']}>自然言語で話しかけるだけで、AIが仕様を構造化・整形します。<br />個人のスタイルに依存しない、均質な仕様書がチームに根付きます。</p>
            <ul className={styles['sol-row-list']}>
              <li>AIが質問を重ねて要件を引き出し、仕様書の形に整理</li>
              <li>誰が入力しても同じ構造に整形され、品質が均質に</li>
              <li>「〇〇の仕様を変更して」と話すだけで編集が完了</li>
            </ul>
          </div>
          <div className={styles['sol-row-right']}>
            <svg viewBox="0 0 420 320" xmlns="http://www.w3.org/2000/svg" width="100%">
              <rect width="420" height="320" fill="#F4F7FC" rx="12" />
              <rect x="24" y="24" width="372" height="220" rx="10" fill="white" stroke="#DCE3F0" strokeWidth="1.5" />
              <rect x="24" y="24" width="372" height="36" rx="10" fill="rgba(47,96,204,0.08)" />
              <rect x="24" y="48" width="372" height="12" fill="rgba(47,96,204,0.08)" />
              <text x="64" y="47" fontFamily="Inter,sans-serif" fontSize="11" fontWeight="700" fill="#2F60CC">ADeT AI Chat</text>
              <circle cx="376" cy="42" r="5" fill="#14A060" />
              <rect x="196" y="68" width="184" height="30" rx="6" fill="#EEF3FD" stroke="#C0D0F4" strokeWidth="1" />
              <text x="288" y="82" textAnchor="middle" fontFamily="Noto Sans JP,sans-serif" fontSize="9" fill="#0D1525">通知機能を追加したい。</text>
              <text x="288" y="94" textAnchor="middle" fontFamily="Noto Sans JP,sans-serif" fontSize="9" fill="#0D1525">何から決めればいい？</text>
              <rect x="40" y="112" width="220" height="64" rx="6" fill="#F4F7FC" stroke="#DCE3F0" strokeWidth="1" />
              <circle cx="28" cy="144" r="10" fill="#2F60CC" />
              <text x="28" y="148" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="8" fill="white" fontWeight="700">AI</text>
              <text x="150" y="130" textAnchor="middle" fontFamily="Noto Sans JP,sans-serif" fontSize="9" fill="#0D1525">① 通知のトリガーは何ですか？</text>
              <text x="150" y="147" textAnchor="middle" fontFamily="Noto Sans JP,sans-serif" fontSize="9" fill="#48566A">② 送信先はメール・Push？</text>
              <text x="150" y="164" textAnchor="middle" fontFamily="Noto Sans JP,sans-serif" fontSize="9" fill="#8896A8">③ ユーザーがオフにできる必要は？</text>
              <rect x="196" y="190" width="184" height="20" rx="6" fill="#EEF3FD" stroke="#C0D0F4" strokeWidth="1" />
              <text x="288" y="204" textAnchor="middle" fontFamily="Noto Sans JP,sans-serif" fontSize="9" fill="#0D1525">注文完了時にメールで。オフ不要。</text>
              <text x="24" y="266" fontFamily="Inter,sans-serif" fontSize="9" fill="#8896A8">導入前 — メンバーごとの品質ばらつき</text>
              <rect x="24" y="272" width="50" height="8" rx="2" fill="rgba(47,96,204,0.6)" />
              <rect x="82" y="276" width="50" height="4" rx="2" fill="rgba(47,96,204,0.3)" />
              <rect x="140" y="270" width="50" height="10" rx="2" fill="rgba(47,96,204,0.5)" />
              <rect x="198" y="274" width="50" height="6" rx="2" fill="rgba(47,96,204,0.25)" />
              <text x="24" y="298" fontFamily="Inter,sans-serif" fontSize="9" fill="#2F60CC" fontWeight="600">導入後 — 均質な品質</text>
              <rect x="24" y="302" width="50" height="8" rx="2" fill="#2F60CC" />
              <rect x="82" y="302" width="50" height="8" rx="2" fill="#2F60CC" />
              <rect x="140" y="302" width="50" height="8" rx="2" fill="#2F60CC" />
              <rect x="198" y="302" width="50" height="8" rx="2" fill="#2F60CC" />
              <text x="310" y="298" fontFamily="Inter,sans-serif" fontSize="10" fill="#2F60CC" fontWeight="700">品質均質化</text>
            </svg>
          </div>
        </div>
      </section>

      {/* ═══ BEFORE / AFTER ═══ */}
      <section className={styles['bfa-sec']}>
        <div className={styles.w}>
          <div className={`${styles['bfa-head']} ${styles.reveal}`}>
            <div className={styles['label-sm']}>導入前後の変化</div>
            <h2 className={styles['bfa-h2']}>ADeTを入れると、チームはこう変わる。</h2>
            <p className={styles['bfa-sub']}>仕様書管理が「仕組み」になることで、役割ごとに具体的な変化が生まれます。</p>
          </div>
          <div className={`${styles['bfa-table']} ${styles.reveal}`}>
            <div className={styles['bfa-thead']}>
              <div className={styles['bfa-col-role']}>役割</div>
              <div className={`${styles['bfa-col']} ${styles['bfa-before-head']}`}>導入前</div>
              <div className={`${styles['bfa-col']} ${styles['bfa-after-head']}`}>導入後</div>
            </div>
            {[
              {
                tag: 'Engineer', name: 'エンジニア',
                before: '仕様書の調整・更新・確認対応で時間が取られ、本来の開発に集中できない',
                after: '仕様管理の手間がゼロになり、開発だけに集中できる時間が増える',
              },
              {
                tag: 'PM / PDM', name: 'PM',
                before: '保守案件の見積もりが外れやすく、要件定義を任せられるメンバーが限られている',
                after: '仕様書が地図になり見積もり精度が上がる。AIが要件定義をリードするので担当者が増える',
              },
              {
                tag: 'CTO / VP', name: '技術責任者',
                before: 'ドキュメント文化が根付かず、技術的負債と属人化が慢性化している',
                after: '仕様書管理が「仕組み」になり、属人化・技術的負債の蓄積を組織ごと止められる',
              },
            ].map((row) => (
              <div className={styles['bfa-row']} key={row.tag} {...hoverHandlers}>
                <div className={styles['bfa-col-role']}>
                  <span className={styles['bfa-role-tag']}>{row.tag}</span>
                  <span className={styles['bfa-role-name']}>{row.name}</span>
                </div>
                <div className={`${styles['bfa-col']} ${styles['bfa-before']}`} data-label="導入前">
                  <span className={styles['bfa-x']}>✕</span>{row.before}
                </div>
                <div className={`${styles['bfa-col']} ${styles['bfa-after']}`} data-label="導入後">
                  <span className={styles['bfa-o']}>✓</span>{row.after}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURES ═══ */}
      <section className={styles['feat-sec']}>
        <div className={`${styles['feat-head']} ${styles.w} ${styles.reveal}`}>
          <div className={styles['feat-head-inner']}>
            <div>
              <div className={styles['label-sm']}>実際の使い方</div>
              <h2 className={styles['feat-h2']}>GitHubと繋いで、<br />今日から始まる。</h2>
            </div>
            <p className={styles['feat-sub']}>セットアップから仕様書が生まれるまで、ADeTがどう動くかをご覧ください。</p>
          </div>
        </div>

        {/* F1 */}
        <div className={`${styles['feat-block']} ${styles.w} ${styles.reveal}`} {...hoverHandlers}>
          <div className={styles['feat-info']}>
            <div className={styles['feat-tag']}>Step 01 — GitHub連携</div>
            <h3>リポジトリを繋ぐだけで、<br />仕様書の初稿が生まれる。</h3>
            <p className={styles.desc}>GitHubアカウントを接続し、対象リポジトリを選ぶだけ。<br />ADeTがコードを解析し、機能・API・DBの仕様書を自動で生成します。<br />ゼロから書く手間はありません。</p>
            <ul className={styles['feat-checks']}>
              <li>既存コードをADeTが自動解析し、仕様書の初稿を即生成</li>
              <li>機能・画面・API・DBの構造をコードから自動抽出して仕様化</li>
              <li>「仕様書を書いたことがないプロジェクト」でも今日から使い始められる</li>
            </ul>
          </div>
          <div className={styles['feat-vis']}>
            <svg viewBox="-40 -30 600 420" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
              <rect x="-40" y="-30" width="600" height="420" fill="#F4F7FC" />
              <rect x="0" y="0" width="158" height="360" fill="white" stroke="#DCE3F0" strokeWidth="1" />
              <text x="16" y="24" fontFamily="Inter,sans-serif" fontSize="8" fill="#8896A8" letterSpacing="2" fontWeight="700">SPEC TREE</text>
              <line x1="8" y1="32" x2="150" y2="32" stroke="#DCE3F0" strokeWidth="1" />
              <rect x="8" y="40" width="142" height="24" rx="4" fill="#EEF3FD" stroke="#C0D0F4" strokeWidth="1" />
              <text x="20" y="56" fontFamily="Noto Sans JP,sans-serif" fontSize="10" fill="#2F60CC" fontWeight="700">📋 認証機能</text>
              <line x1="20" y1="76" x2="20" y2="168" stroke="#DCE3F0" strokeWidth="1" />
              <line x1="20" y1="88" x2="30" y2="88" stroke="#DCE3F0" strokeWidth="1" />
              <text x="34" y="93" fontFamily="Noto Sans JP,sans-serif" fontSize="9" fill="#8896A8">ログイン</text>
              <line x1="20" y1="112" x2="30" y2="112" stroke="#DCE3F0" strokeWidth="1" />
              <rect x="28" y="102" width="122" height="22" rx="3" fill="#EEF3FD" stroke="#C0D0F4" strokeWidth="1" />
              <text x="34" y="117" fontFamily="Noto Sans JP,sans-serif" fontSize="9" fill="#2F60CC" fontWeight="700">ログアウト ✦</text>
              <line x1="20" y1="138" x2="30" y2="138" stroke="#DCE3F0" strokeWidth="1" />
              <text x="34" y="142" fontFamily="Noto Sans JP,sans-serif" fontSize="9" fill="#8896A8">セッション管理</text>
              <line x1="20" y1="162" x2="30" y2="162" stroke="#DCE3F0" strokeWidth="1" />
              <text x="34" y="166" fontFamily="Noto Sans JP,sans-serif" fontSize="9" fill="#8896A8">2段階認証</text>
              <text x="16" y="194" fontFamily="Noto Sans JP,sans-serif" fontSize="10" fill="#8896A8">📋 通知機能</text>
              <text x="16" y="218" fontFamily="Noto Sans JP,sans-serif" fontSize="10" fill="#8896A8">📋 決済機能</text>
              <text x="16" y="242" fontFamily="Noto Sans JP,sans-serif" fontSize="10" fill="#8896A8">📋 ユーザー管理</text>
              <rect x="158" y="0" width="362" height="36" fill="white" stroke="#DCE3F0" strokeWidth="1" />
              <text x="174" y="22" fontFamily="Inter,sans-serif" fontSize="10" fontWeight="700" fill="#0D1525">ログアウト仕様</text>
              <rect x="166" y="46" width="346" height="26" rx="4" fill="#EEF3FD" stroke="#C0D0F4" strokeWidth="1" />
              <circle cx="180" cy="59" r="4" fill="#2F60CC" />
              <text x="192" y="63" fontFamily="Inter,sans-serif" fontSize="9" fill="#2F60CC" fontWeight="600">Relation Map — 影響を受ける仕様が 3件 あります</text>
              <rect x="166" y="82" width="346" height="44" rx="4" fill="white" stroke="#DCE3F0" strokeWidth="1" />
              <text x="178" y="98" fontFamily="Inter,sans-serif" fontSize="8" fill="#8896A8" letterSpacing="1.5" fontWeight="600">TRIGGER</text>
              <text x="178" y="116" fontFamily="Noto Sans JP,sans-serif" fontSize="10" fill="#0D1525">ユーザーが明示的にログアウト操作を行ったとき</text>
              <rect x="166" y="134" width="346" height="44" rx="4" fill="white" stroke="#DCE3F0" strokeWidth="1" />
              <text x="178" y="150" fontFamily="Inter,sans-serif" fontSize="8" fill="#8896A8" letterSpacing="1.5" fontWeight="600">ACTION</text>
              <text x="178" y="168" fontFamily="Noto Sans JP,sans-serif" fontSize="10" fill="#0D1525">セッショントークンを無効化し、ログイン画面へ</text>
              <text x="178" y="202" fontFamily="Inter,sans-serif" fontSize="8" fill="#8896A8" letterSpacing="1.5" fontWeight="600">AFFECTED SPECS</text>
              <rect x="166" y="210" width="106" height="26" rx="4" fill="rgba(208,64,64,0.06)" stroke="rgba(208,64,64,0.25)" strokeWidth="1" />
              <text x="219" y="227" textAnchor="middle" fontFamily="Noto Sans JP,sans-serif" fontSize="9" fill="#C04040">セッション管理</text>
              <rect x="280" y="210" width="116" height="26" rx="4" fill="rgba(208,64,64,0.06)" stroke="rgba(208,64,64,0.25)" strokeWidth="1" />
              <text x="338" y="227" textAnchor="middle" fontFamily="Noto Sans JP,sans-serif" fontSize="9" fill="#C04040">認証API /logout</text>
              <rect x="404" y="210" width="100" height="26" rx="4" fill="rgba(208,64,64,0.06)" stroke="rgba(208,64,64,0.25)" strokeWidth="1" />
              <text x="454" y="227" textAnchor="middle" fontFamily="Noto Sans JP,sans-serif" fontSize="9" fill="#C04040">ヘッダーUI</text>
              <line x1="158" y1="254" x2="520" y2="254" stroke="#DCE3F0" strokeWidth="1" />
              <circle cx="174" cy="268" r="4" fill="#14A060" />
              <text x="184" y="272" fontFamily="Inter,sans-serif" fontSize="9" fill="#48566A">自動保存済み</text>
              <text x="390" y="272" fontFamily="Inter,sans-serif" fontSize="9" fill="#8896A8">最終更新: 2分前</text>
            </svg>
          </div>
        </div>

        {/* F2 */}
        <div className={`${styles['feat-block']} ${styles.w} ${styles.reveal}`} {...hoverHandlers}>
          <div className={styles['feat-info']}>
            <div className={styles['feat-tag']}>Step 02 — AI Chatで仕様を育てる</div>
            <h3>「話しかける」だけで、<br />仕様書が整っていく。</h3>
            <p className={styles.desc}>新機能を追加したいときも、仕様を変更したいときも、AIに話しかけるだけ。<br />AIがヒアリングして構造化し、既存の仕様書に反映してくれます。</p>
            <ul className={styles['feat-checks']}>
              <li>「通知機能を追加したい」→ AIが質問を重ねて仕様書を自動生成</li>
              <li>「〇〇の仕様を変更して」と話しかけるだけで編集が完了</li>
              <li>変更前後の差分をAIが提示してから反映。確認してから適用できる</li>
            </ul>
          </div>
          <div className={styles['feat-vis']}>
            <svg viewBox="-40 -30 600 420" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
              <rect x="-40" y="-30" width="600" height="420" fill="#F4F7FC" />
              <rect x="0" y="0" width="520" height="38" fill="white" stroke="#DCE3F0" strokeWidth="1" />
              <circle cx="18" cy="19" r="5" fill="#DCE3F0" /><circle cx="34" cy="19" r="5" fill="#DCE3F0" /><circle cx="50" cy="19" r="5" fill="#DCE3F0" />
              <text x="260" y="23" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="10" fill="#48566A">決済フロー仕様 — 変更プレビュー</text>
              <rect x="12" y="50" width="230" height="20" rx="3" fill="rgba(208,64,64,0.08)" />
              <text x="20" y="64" fontFamily="Inter,sans-serif" fontSize="9" fill="#C04040" fontWeight="700" letterSpacing="1">BEFORE</text>
              <rect x="12" y="76" width="230" height="22" rx="3" fill="rgba(208,64,64,0.06)" stroke="rgba(208,64,64,0.2)" strokeWidth="1" />
              <text x="20" y="91" fontFamily="Inter,sans-serif" fontSize="8" fill="#C04040" fontWeight="600">－</text>
              <text x="32" y="91" fontFamily="Noto Sans JP,sans-serif" fontSize="9" fill="#C04040">決済完了後、サンクスページに遷移する</text>
              <rect x="12" y="104" width="230" height="22" rx="3" fill="white" stroke="#DCE3F0" strokeWidth="1" />
              <text x="32" y="119" fontFamily="Noto Sans JP,sans-serif" fontSize="9" fill="#48566A">エラー時は決済画面に戻る</text>
              <rect x="12" y="132" width="230" height="22" rx="3" fill="white" stroke="#DCE3F0" strokeWidth="1" />
              <text x="32" y="147" fontFamily="Noto Sans JP,sans-serif" fontSize="9" fill="#48566A">ログ記録は非同期で実施</text>
              <line x1="32" y1="88" x2="230" y2="88" stroke="rgba(192,64,64,0.4)" strokeWidth="1" />
              <rect x="278" y="50" width="230" height="20" rx="3" fill="rgba(20,160,96,0.08)" />
              <text x="286" y="64" fontFamily="Inter,sans-serif" fontSize="9" fill="#14A060" fontWeight="700" letterSpacing="1">AFTER</text>
              <rect x="278" y="76" width="230" height="22" rx="3" fill="rgba(20,160,96,0.08)" stroke="rgba(20,160,96,0.25)" strokeWidth="1" />
              <text x="286" y="91" fontFamily="Inter,sans-serif" fontSize="8" fill="#14A060" fontWeight="600">＋</text>
              <text x="298" y="91" fontFamily="Noto Sans JP,sans-serif" fontSize="9" fill="#14A060">決済完了後、確認メールを送信する</text>
              <rect x="278" y="104" width="230" height="22" rx="3" fill="white" stroke="#DCE3F0" strokeWidth="1" />
              <text x="298" y="119" fontFamily="Noto Sans JP,sans-serif" fontSize="9" fill="#48566A">エラー時は決済画面に戻る</text>
              <rect x="278" y="132" width="230" height="22" rx="3" fill="white" stroke="#DCE3F0" strokeWidth="1" />
              <text x="298" y="147" fontFamily="Noto Sans JP,sans-serif" fontSize="9" fill="#48566A">ログ記録は非同期で実施</text>
              <line x1="255" y1="50" x2="255" y2="300" stroke="#DCE3F0" strokeWidth="1" />
              <rect x="12" y="168" width="496" height="52" rx="6" fill="#EEF3FD" stroke="#C0D0F4" strokeWidth="1" />
              <circle cx="26" cy="194" r="8" fill="#2F60CC" />
              <text x="26" y="198" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="7" fill="white" fontWeight="700">AI</text>
              <text x="42" y="186" fontFamily="Noto Sans JP,sans-serif" fontSize="9" fill="#0D1525" fontWeight="600">変更点の確認:</text>
              <text x="42" y="202" fontFamily="Noto Sans JP,sans-serif" fontSize="9" fill="#48566A">「サンクスページ遷移」→「確認メール送信」に変更します。</text>
              <text x="42" y="214" fontFamily="Noto Sans JP,sans-serif" fontSize="9" fill="#48566A">メール送信仕様・通知設定との関連が発生します。</text>
              <rect x="12" y="234" width="120" height="30" rx="6" fill="#2F60CC" />
              <text x="72" y="253" textAnchor="middle" fontFamily="Noto Sans JP,sans-serif" fontSize="10" fill="white" fontWeight="600">変更を適用する</text>
              <rect x="144" y="234" width="100" height="30" rx="6" fill="white" stroke="#DCE3F0" strokeWidth="1" />
              <text x="194" y="253" textAnchor="middle" fontFamily="Noto Sans JP,sans-serif" fontSize="10" fill="#8896A8">キャンセル</text>
              <text x="12" y="290" fontFamily="Inter,sans-serif" fontSize="8" fill="#8896A8" letterSpacing="1" fontWeight="600">RELATED SPECS:</text>
              <rect x="12" y="298" width="88" height="18" rx="3" fill="#EEF3FD" stroke="#C0D0F4" strokeWidth="1" />
              <text x="56" y="311" textAnchor="middle" fontFamily="Noto Sans JP,sans-serif" fontSize="8" fill="#2F60CC">通知機能</text>
              <rect x="108" y="298" width="88" height="18" rx="3" fill="#EEF3FD" stroke="#C0D0F4" strokeWidth="1" />
              <text x="152" y="311" textAnchor="middle" fontFamily="Noto Sans JP,sans-serif" fontSize="8" fill="#2F60CC">メール設定</text>
              <rect x="204" y="298" width="88" height="18" rx="3" fill="#EEF3FD" stroke="#C0D0F4" strokeWidth="1" />
              <text x="248" y="311" textAnchor="middle" fontFamily="Noto Sans JP,sans-serif" fontSize="8" fill="#2F60CC">決済API</text>
              <line x1="0" y1="328" x2="520" y2="328" stroke="#DCE3F0" strokeWidth="1" />
              <text x="16" y="348" fontFamily="Inter,sans-serif" fontSize="8" fill="#8896A8">変更は適用されるまで仕様書に反映されません</text>
            </svg>
          </div>
        </div>

        {/* F3 */}
        <div className={`${styles['feat-block']} ${styles.w} ${styles.reveal}`} style={{ marginBottom: '120px' }} {...hoverHandlers}>
          <div className={styles['feat-info']}>
            <div className={styles['feat-tag']}>Step 03 — コードと仕様書を同期させる</div>
            <h3>仕様書を書いたら、<br />コードとPRが自動で生まれる。</h3>
            <p className={styles.desc}>仕様書が更新されると、ADeTがコードの雛形を自動生成してGitHubにPull Requestを作成。<br />仕様とコードが常に一致した状態を維持します。</p>
            <ul className={styles['feat-checks']}>
              <li>仕様書の内容からコードの雛形を自動生成 → PRとして即連携</li>
              <li>PR説明文も仕様書から自動生成されるため、レビューコストが下がる</li>
              <li>仕様変更のたびに差分PRを再生成。「仕様書を更新したのにコードが古い」がなくなる</li>
            </ul>
          </div>
          <div className={styles['feat-vis']}>
            <svg viewBox="-40 -30 600 420" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
              <rect x="-40" y="-30" width="600" height="420" fill="#F4F7FC" />
              <rect x="0" y="0" width="520" height="36" fill="white" stroke="#DCE3F0" strokeWidth="1" />
              <text x="20" y="22" fontFamily="Inter,sans-serif" fontSize="10" fill="#2F60CC" fontWeight="700">ADeT</text>
              <text x="60" y="22" fontFamily="Inter,sans-serif" fontSize="10" fill="#8896A8">/ my-project / sync</text>
              <line x1="44" y1="56" x2="44" y2="330" stroke="#DCE3F0" strokeWidth="1.5" />
              <circle cx="44" cy="70" r="9" fill="#2F60CC" stroke="#C0D0F4" strokeWidth="2" />
              <text x="44" y="75" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="9" fill="white" fontWeight="700">1</text>
              <text x="62" y="66" fontFamily="Inter,sans-serif" fontSize="8" fill="#8896A8" letterSpacing="1.5" fontWeight="600">TRIGGER</text>
              <text x="62" y="80" fontFamily="Noto Sans JP,sans-serif" fontSize="11" fill="#0D1525" fontWeight="600">GitHubコミットを検知</text>
              <rect x="62" y="88" width="210" height="18" rx="3" fill="white" stroke="#DCE3F0" strokeWidth="1" />
              <text x="70" y="101" fontFamily="Inter,sans-serif" fontSize="9" fill="#48566A">feat: add payment confirmation</text>
              <circle cx="44" cy="138" r="9" fill="#2F60CC" stroke="#C0D0F4" strokeWidth="2" />
              <text x="44" y="143" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="9" fill="white" fontWeight="700">2</text>
              <text x="62" y="134" fontFamily="Inter,sans-serif" fontSize="8" fill="#8896A8" letterSpacing="1.5" fontWeight="600">ANALYZE</text>
              <text x="62" y="148" fontFamily="Noto Sans JP,sans-serif" fontSize="11" fill="#0D1525" fontWeight="600">差分コードを解析中</text>
              <rect x="62" y="156" width="390" height="24" rx="4" fill="#EEF3FD" stroke="#DCE3F0" strokeWidth="1" />
              <rect x="62" y="156" width="260" height="24" rx="4" fill="rgba(47,96,204,0.15)" />
              <text x="192" y="173" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="9" fill="#2F60CC" fontWeight="600">解析中... 変更箇所 4件を確認</text>
              <circle cx="44" cy="214" r="9" fill="#2F60CC" stroke="#C0D0F4" strokeWidth="2" />
              <text x="44" y="219" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="9" fill="white" fontWeight="700">3</text>
              <text x="62" y="210" fontFamily="Inter,sans-serif" fontSize="8" fill="#8896A8" letterSpacing="1.5" fontWeight="600">UPDATE</text>
              <text x="62" y="224" fontFamily="Noto Sans JP,sans-serif" fontSize="11" fill="#0D1525" fontWeight="600">仕様書を自動更新</text>
              <rect x="62" y="232" width="186" height="18" rx="3" fill="rgba(20,160,96,0.08)" stroke="rgba(20,160,96,0.25)" strokeWidth="1" />
              <text x="70" y="245" fontFamily="Noto Sans JP,sans-serif" fontSize="9" fill="#14A060">✓ 決済フロー仕様を更新</text>
              <rect x="256" y="232" width="186" height="18" rx="3" fill="rgba(20,160,96,0.08)" stroke="rgba(20,160,96,0.25)" strokeWidth="1" />
              <text x="264" y="245" fontFamily="Noto Sans JP,sans-serif" fontSize="9" fill="#14A060">✓ 通知仕様との関連を更新</text>
              <circle cx="44" cy="294" r="9" fill="#14A060" stroke="rgba(20,160,96,0.3)" strokeWidth="2" />
              <text x="44" y="299" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="10" fill="white" fontWeight="700">✓</text>
              <text x="62" y="290" fontFamily="Inter,sans-serif" fontSize="8" fill="#14A060" letterSpacing="1.5" fontWeight="600">COMPLETE</text>
              <text x="62" y="304" fontFamily="Noto Sans JP,sans-serif" fontSize="11" fill="#0D1525" fontWeight="600">Pull Request を自動作成</text>
              <rect x="62" y="312" width="420" height="34" rx="6" fill="rgba(20,160,96,0.06)" stroke="rgba(20,160,96,0.25)" strokeWidth="1" />
              <text x="78" y="327" fontFamily="Inter,sans-serif" fontSize="9" fill="#14A060" fontWeight="700">#47</text>
              <text x="98" y="327" fontFamily="Noto Sans JP,sans-serif" fontSize="9" fill="#48566A">docs: 決済フロー仕様を更新（ADeT自動生成）</text>
              <rect x="388" y="316" width="84" height="20" rx="10" fill="rgba(20,160,96,0.12)" stroke="rgba(20,160,96,0.35)" strokeWidth="1" />
              <text x="430" y="330" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="9" fill="#14A060" fontWeight="700">Open ↗</text>
            </svg>
          </div>
        </div>
      </section>

      {/* ═══ FLOW ═══ */}
      <section className={styles['flow-sec']} id="flow">
        <div className={`${styles['flow-head']} ${styles.w} ${styles.reveal}`}>
          <div className={styles['label-sm']}>ご利用の流れ</div>
          <h2 className={styles['flow-h2']}>最短即日で、始められます。</h2>
        </div>
        <div className={`${styles['flow-grid']} ${styles.w} ${styles.reveal}`}>
          {[
            {
              num: '01', title: 'お申し込み', desc: 'フォームよりお申し込みください。',
              icon: <svg viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" /><rect x="9" y="3" width="6" height="4" rx="1" /><line x1="9" y1="12" x2="15" y2="12" /><line x1="9" y1="16" x2="13" y2="16" /></svg>,
            },
            {
              num: '02', title: 'デモアカウントの発行', desc: '担当者よりデモ用アカウントをご案内します。',
              icon: <svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" /><circle cx="12" cy="16" r="1.5" fill="currentColor" stroke="none" /></svg>,
            },
            {
              num: '03', title: '本登録', desc: 'デモ環境確認後、本番アカウントへ移行します。',
              icon: <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /><line x1="19" y1="8" x2="19" y2="14" /><line x1="16" y1="11" x2="22" y2="11" /></svg>,
            },
            {
              num: '04', title: 'ご契約', desc: 'プランをお選びいただき、ご契約完了。即日開始。',
              icon: <svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>,
            },
          ].map((item) => (
            <div className={styles['flow-item']} key={item.num} {...hoverHandlers}>
              <span className={styles['fi-num']}>{item.num}</span>
              <div className={styles['fi-icon']}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ PRICING ═══ */}
      <section className={styles['pricing-sec']} id="pricing">
        <div className={`${styles['pricing-head']} ${styles.reveal}`}>
          <div className={styles['label-sm']} style={{ justifyContent: 'center' }}>料金について</div>
          <h2 className={styles['pricing-h2']}>お客様に最適な<br />プランをご提案します。</h2>
          <p className={styles['pricing-note-top']} style={{ fontSize: 16, color: 'var(--t2)', marginTop: 20, lineHeight: 2, maxWidth: 680, marginLeft: 'auto', marginRight: 'auto' }}>
            当サービスは、お客様の利用規模や必要なオプションに合わせて、<br />柔軟にカスタマイズ可能です。<br />
            無駄なコストを省き、お客様にとって最適なプランをご提案するため、<br />
            詳細な価格体系は資料にて公開しております。
          </p>
        </div>
        <div className={`${styles['pricing-dl-wrap']} ${styles.w} ${styles.reveal}`}>
          <div className={styles['pricing-dl-card']}>
            <div className={styles['pricing-dl-icon']}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="12" y1="12" x2="12" y2="18" />
                <polyline points="9 15 12 18 15 15" />
              </svg>
            </div>
            <div className={styles['pricing-dl-text']}>
              <div className={styles['pricing-dl-title']}>ADeT 料金表・機能一覧</div>
              <div className={styles['pricing-dl-desc']}>課金モデル・プラン別の詳細料金、機能比較表を掲載しています。<br />まずは資料をご覧ください。</div>
            </div>
            <button className={`${styles['btn-primary']} ${styles['pricing-dl-btn']}`} onClick={openModal} {...hoverHandlers}><span>資料をダウンロード</span> <span>↓</span></button>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className={styles['cta-sec']} id="cta">
        <div className={styles['cta-glow']} />
        <div className={styles['cta-grid']} />
        <div className={styles['cta-inner']}>
          <div className={styles['label-sm']} style={{ justifyContent: 'center', marginBottom: 16 }}>β版 無料ユーザー募集中</div>
          <h2 className={styles['cta-h2']}>無料で体験してみる</h2>
          <p className={styles['cta-sub']}>GitHubと繋ぐだけで仕様書が生まれます。<br />「仕様書がない」「古い」「属人化している」<br />——ADeTはその3つを、今日から変えます。</p>
          <div className={styles['cta-actions']}>
            <button className={styles['btn-primary']} onClick={openModal} {...hoverHandlers}><span>今すぐ無料で始める</span> <span>→</span></button>
            <a href="#flow" className={styles['btn-secondary']} {...hoverHandlers}>ご利用の流れを見る</a>
          </div>
          <div className={styles['cta-steps']}>
            {[
              {
                num: '01', title: 'お申し込み', desc: 'フォームよりお申し込みください',
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" /><rect x="9" y="3" width="6" height="4" rx="1" /><line x1="9" y1="12" x2="15" y2="12" /><line x1="9" y1="16" x2="13" y2="16" /></svg>,
              },
              {
                num: '02', title: 'デモアカウント発行', desc: '担当者よりご案内',
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" /><circle cx="12" cy="16" r="1.5" fill="currentColor" stroke="none" /></svg>,
              },
              {
                num: '03', title: '本登録', desc: '本番環境へ移行',
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /><line x1="19" y1="8" x2="19" y2="14" /><line x1="16" y1="11" x2="22" y2="11" /></svg>,
              },
              {
                num: '04', title: 'ご契約・開始', desc: '即日ご利用可能',
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>,
              },
            ].map((step) => (
              <div className={styles['cta-step']} key={step.num} {...hoverHandlers}>
                <span className={styles['cs-num']}>{step.num}</span>
                <div className={styles['cs-icon']}>{step.icon}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className={styles.footer}>
        <div className={styles['f-logo']}>
          <img src={`data:image/png;base64,${LOGO_B64}`} alt="ADeT" style={{ height: 24, width: 'auto', display: 'block' }} />
        </div>
        <p>© 2025 ADeT. 仕様書管理を、仕組みで変える。</p>
      </footer>
    </div>
  );
}
