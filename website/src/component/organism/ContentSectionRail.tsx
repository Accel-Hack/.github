'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { navigationContents } from './ContentNavigation';
import styles from './ContentSectionRail.module.css';

type Props = {
  page: string;
};

type RailItem = {
  label: string;
  href: string;
};

const ContentSectionRail: React.FC<Props> = ({ page }) => {
  const items = useMemo<RailItem[]>(() => {
    const content = navigationContents[page];

    if (!content) return [];

    return [
      { label: 'ページトップ', href: `#${page}-overview` },
      ...(content.sectionLinks ??
        content.links.filter((item) => item.href.startsWith('#'))),
    ];
  }, [page]);

  const [activeHref, setActiveHref] = useState(items[0]?.href ?? '');

  useEffect(() => {
    setActiveHref(items[0]?.href ?? '');

    const scrollRoot = document.querySelector('[data-article-container]');
    const targets = items
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((target): target is HTMLElement => target !== null);

    if (!scrollRoot || targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveHref(`#${visibleEntry.target.id}`);
        }
      },
      {
        root: scrollRoot,
        rootMargin: '-28% 0px -48% 0px',
        threshold: [0, 0.15, 0.4],
      },
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, [items]);

  if (items.length < 2) return null;

  return (
    <nav
      className={styles.rail}
      aria-label="セクション移動"
      data-content-section-rail
    >
      {items.map((item, index) => {
        const isActive = activeHref === item.href;

        return (
          <a
            key={item.href}
            className={`${styles.link} ${isActive ? styles.active : ''}`}
            href={item.href}
            aria-label={item.label}
            aria-current={isActive ? 'location' : undefined}
          >
            <span className={styles.number}>
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className={styles.label}>{item.label}</span>
          </a>
        );
      })}
    </nav>
  );
};

export default ContentSectionRail;
