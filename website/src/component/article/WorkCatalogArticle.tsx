'use client';

import Image from 'next/image';
import React, { useMemo, useRef, useState } from 'react';
import {
  WORK_CASES,
  WORK_CATEGORIES,
  WORK_SUPPORTS,
  type WorkCase,
  type WorkCategory,
  type WorkSupport,
} from '@/data/workCases';
import styles from './WorkCatalogArticle.module.css';

type CategoryFilter = 'すべて' | WorkCategory;

const WorkImage: React.FC<{
  work: WorkCase;
  size: 'card' | 'detail' | 'modal';
}> = ({ work, size }) => {
  const sizeClass =
    size === 'card'
      ? styles.cardVisual
      : size === 'detail'
        ? styles.detail
        : styles.modalVisual;

  return (
    <figure className={`${styles.visual} ${sizeClass}`}>
      {work.image ? (
        <Image
          fill
          className={styles.projectPhoto}
          src={work.image.src}
          alt={work.image.alt}
          sizes={
            size === 'card'
              ? '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
              : '(max-width: 1024px) 100vw, 57vw'
          }
          style={{ objectPosition: work.image.objectPosition ?? 'center' }}
        />
      ) : (
        <div
          className={styles.photoPlaceholder}
          role="img"
          aria-label={`${work.headline}の実績写真は準備中です`}
        >
          <span className={styles.placeholderNumber}>{work.number}</span>
          <span className={styles.placeholderText}>IMAGE PENDING</span>
        </div>
      )}
      <figcaption className={styles.visualCaption}>
        PROJECT IMAGE / {work.number}
      </figcaption>
    </figure>
  );
};

const WorkCatalogArticle: React.FC = () => {
  const [category, setCategory] = useState<CategoryFilter>('すべて');
  const [support, setSupport] = useState<WorkSupport | null>(null);
  const [modalWork, setModalWork] = useState<WorkCase>(WORK_CASES[0]);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const modalTriggerRef = useRef<HTMLElement | null>(null);

  const filteredWorks = useMemo(() => {
    return WORK_CASES.filter((work) => {
      const matchesCategory =
        category === 'すべて' || work.category === category;
      const matchesSupport = !support || work.supports.includes(support);
      return matchesCategory && matchesSupport;
    });
  }, [category, support]);

  const scrollToWork = (work: WorkCase) => {
    document
      .getElementById(`work-${work.id}`)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const openModal = (work: WorkCase, trigger: HTMLElement) => {
    setModalWork(work);
    modalTriggerRef.current = trigger;
    window.requestAnimationFrame(() => dialogRef.current?.showModal());
  };

  const closeModal = () => {
    dialogRef.current?.close();
  };

  const handleDetailKeyDown = (
    event: React.KeyboardEvent<HTMLElement>,
    work: WorkCase,
  ) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    openModal(work, event.currentTarget);
  };

  return (
    <div className={styles.page}>
      <section className={styles.catalog} aria-labelledby="works-title">
        <div className={styles.sectionBar}>PROJECT CATALOG / 05</div>

        <div className={styles.catalogHeader}>
          <div className={styles.introduction}>
            <p className={styles.eyebrow}>ACCELHACK / WORKS</p>
            <h2 id="works-title">
              領域を横断して、
              <br />
              実績を見つける。
            </h2>
            <p>
              業界や支援範囲から、AccelHackが向き合ってきたプロジェクトを探せます。
            </p>
          </div>

          <div className={styles.filters} aria-label="実績の絞り込み">
            <div className={styles.filterRow}>
              <span className={styles.filterLabel}>CATEGORY</span>
              <div className={styles.filterOptions}>
                {WORK_CATEGORIES.map((item) => (
                  <button
                    key={item}
                    type="button"
                    className={`${styles.filterButton} ${
                      category === item ? styles.activeFilter : ''
                    }`}
                    aria-pressed={category === item}
                    onClick={() => setCategory(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.filterRow}>
              <span className={styles.filterLabel}>SUPPORT</span>
              <div className={styles.filterOptions}>
                {WORK_SUPPORTS.map((item) => (
                  <button
                    key={item}
                    type="button"
                    className={`${styles.filterButton} ${
                      support === item ? styles.activeFilter : ''
                    }`}
                    aria-pressed={support === item}
                    onClick={() =>
                      setSupport((current) => (current === item ? null : item))
                    }
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.projectIndex}>
          <div className={styles.indexCount}>
            INDEX / {String(filteredWorks.length).padStart(2, '0')}
          </div>
          <div className={styles.indexItems}>
            {filteredWorks.map((work) => (
              <button
                key={work.id}
                type="button"
                onClick={() => scrollToWork(work)}
              >
                <span>{work.headline}</span>
                <b aria-hidden="true">↗</b>
              </button>
            ))}
          </div>
        </div>

        {filteredWorks.length > 0 ? (
          <div className={styles.cardGrid} aria-live="polite">
            {filteredWorks.map((work) => (
              <article key={work.id} className={styles.card}>
                <span className={styles.cardNumber}>{work.number}</span>
                <WorkImage work={work} size="card" />
                {work.client && (
                  <p className={styles.clientName}>{work.client}</p>
                )}
                <h2>{work.headline}</h2>
                <p className={styles.cardMeta}>
                  {work.category} / {work.supports.join(' / ')}
                </p>
                <button
                  type="button"
                  className={styles.cardAction}
                  aria-label={`${work.headline}の概要を見る`}
                  onClick={() => scrollToWork(work)}
                >
                  ↗
                </button>
              </article>
            ))}
          </div>
        ) : (
          <p className={styles.emptyState}>
            条件に合う実績がありません。絞り込み条件を変更してください。
          </p>
        )}
      </section>

      <div className={styles.workDetails} aria-label="実績詳細一覧">
        {WORK_CASES.map((work) => (
          <section
            key={work.id}
            className={styles.workDetail}
            id={`work-${work.id}`}
            role="button"
            tabIndex={0}
            aria-haspopup="dialog"
            aria-controls="work-case-modal"
            aria-label={`${work.headline}を詳しく見る`}
            onClick={(event) => openModal(work, event.currentTarget)}
            onKeyDown={(event) => handleDetailKeyDown(event, work)}
          >
            <div className={styles.sectionBar}>PROJECT / {work.number}</div>
            <div className={styles.detailLayout}>
              <div className={styles.detailCopy}>
                <p className={styles.caseNumber}>
                  CASE {work.number} / {work.category}
                </p>
                {work.client && (
                  <div className={styles.clientRow}>
                    <span>CLIENT</span>
                    <strong>{work.client}</strong>
                  </div>
                )}
                <h2 id={`work-${work.id}-title`}>{work.headline}</h2>
                <p className={styles.summary}>{work.summary}</p>
                <span className={styles.readMore}>
                  INSIDE THE PROJECT
                  <b aria-hidden="true">↗</b>
                </span>
              </div>
              <WorkImage work={work} size="detail" />
            </div>
          </section>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        id="work-case-modal"
        className={styles.modal}
        aria-labelledby="work-modal-title"
        onClose={() => modalTriggerRef.current?.focus()}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeModal();
        }}
      >
        <div className={styles.modalHeader}>
          <span>INSIDE THE PROJECT / {modalWork.number}</span>
          <button
            type="button"
            aria-label="モーダルを閉じる"
            onClick={closeModal}
          >
            ×
          </button>
        </div>
        <div className={styles.modalScroll}>
          {modalWork.interview && (
            <blockquote className={styles.modalVoice}>
              <span className={styles.voiceLabel}>
                CUSTOMER VOICE / INTERVIEW
              </span>
              <p>{modalWork.interview.quote}</p>
              <footer>{modalWork.interview.attribution}</footer>
            </blockquote>
          )}
          <div className={styles.modalIntroduction}>
            {modalWork.client && (
              <div className={styles.modalClient}>
                <span>CLIENT</span>
                <strong>{modalWork.client}</strong>
              </div>
            )}
            <h2 id="work-modal-title">{modalWork.headline}</h2>
            <p>{modalWork.summary}</p>
          </div>
          <WorkImage work={modalWork} size="modal" />
          <div className={styles.modalStory}>
            {modalWork.story.map((paragraph, index) => (
              <p key={`${modalWork.id}-${index}`}>{paragraph}</p>
            ))}
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default WorkCatalogArticle;
