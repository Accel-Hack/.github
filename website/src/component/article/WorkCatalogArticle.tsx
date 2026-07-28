'use client';

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

const WorkVisual: React.FC<{
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
    <div
      className={`${styles.visual} ${sizeClass}`}
      data-visual={work.visualVariant}
      aria-hidden="true"
    >
      <span className={styles.visualNumber}>{work.number}</span>
      <span className={styles.visualShape} />
      <span className={styles.visualCaption}>
        PROJECT IMAGE / {work.number}
      </span>
    </div>
  );
};

const WorkCatalogArticle: React.FC = () => {
  const [category, setCategory] = useState<CategoryFilter>('すべて');
  const [support, setSupport] = useState<WorkSupport | null>(null);
  const [selectedWork, setSelectedWork] = useState<WorkCase>(WORK_CASES[0]);
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

  const selectWork = (work: WorkCase) => {
    setSelectedWork(work);
    window.requestAnimationFrame(() => {
      document
        .getElementById('selected-work')
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  const openModal = (trigger: HTMLElement) => {
    modalTriggerRef.current = trigger;
    dialogRef.current?.showModal();
  };

  const closeModal = () => {
    dialogRef.current?.close();
  };

  const handleDetailKeyDown = (
    event: React.KeyboardEvent<HTMLElement>,
  ) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    openModal(event.currentTarget);
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
                      setSupport((current) =>
                        current === item ? null : item,
                      )
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
                onClick={() => selectWork(work)}
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
              <article
                key={work.id}
                className={`${styles.card} ${
                  selectedWork.id === work.id ? styles.selectedCard : ''
                }`}
              >
                <span className={styles.cardNumber}>{work.number}</span>
                <WorkVisual work={work} size="card" />
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
                  onClick={() => selectWork(work)}
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

      <section
        className={styles.selectedWork}
        id="selected-work"
        role="button"
        tabIndex={0}
        aria-haspopup="dialog"
        aria-controls="work-case-modal"
        aria-label={`${selectedWork.headline}を詳しく見る`}
        onClick={(event) => openModal(event.currentTarget)}
        onKeyDown={handleDetailKeyDown}
      >
        <div className={styles.sectionBar}>
          SELECTED WORK / {selectedWork.number}
        </div>
        <div className={styles.selectedLayout}>
          <div className={styles.selectedCopy}>
            <p className={styles.caseNumber}>
              CASE {selectedWork.number} / {selectedWork.category}
            </p>
            {selectedWork.client && (
              <div className={styles.clientRow}>
                <span>CLIENT</span>
                <strong>{selectedWork.client}</strong>
              </div>
            )}
            <h2>{selectedWork.headline}</h2>
            <p className={styles.summary}>{selectedWork.summary}</p>
            <span className={styles.readMore}>
              INSIDE THE PROJECT
              <b aria-hidden="true">↗</b>
            </span>
          </div>
          <WorkVisual work={selectedWork} size="detail" />
        </div>
      </section>

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
          <span>
            INSIDE THE PROJECT / {selectedWork.number}
          </span>
          <button
            type="button"
            aria-label="モーダルを閉じる"
            onClick={closeModal}
          >
            ×
          </button>
        </div>
        <div className={styles.modalScroll}>
          <div className={styles.modalIntroduction}>
            {selectedWork.client && (
              <div className={styles.modalClient}>
                <span>CLIENT</span>
                <strong>{selectedWork.client}</strong>
              </div>
            )}
            <h2 id="work-modal-title">{selectedWork.headline}</h2>
            <p>{selectedWork.summary}</p>
          </div>
          <WorkVisual work={selectedWork} size="modal" />
          <div className={styles.modalStory}>
            {selectedWork.story.map((paragraph, index) => (
              <p key={`${selectedWork.id}-${index}`}>{paragraph}</p>
            ))}
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default WorkCatalogArticle;
