'use client';

import React from 'react';
import TabMenu from '@/component/layout/TabMenu';
import styles from './layout.module.css';
import BackgroundLeftTopLine from '@/asset/img/layout/backgound_left_top_line.svg';
import Squares from '@/asset/img/layout/squares.svg';
import ContentHeader from '@/component/molecule/ContentHeader';
import { usePathname } from 'next/navigation';

const titleMap: { [key: string]: string } = {
  about: 'About',
  service: 'Works',
  recruit: 'Recruit',
  blog: 'Blog',
  news: 'News',
};

export default function ContentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(Boolean);
  const page = pathSegments[0] || '';
  const title = titleMap[page] || 'Accel Hack';

  const updateParallax = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'touch') return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;

    event.currentTarget.style.setProperty('--parallax-x', x.toFixed(3));
    event.currentTarget.style.setProperty('--parallax-y', y.toFixed(3));
  };

  const resetParallax = (event: React.PointerEvent<HTMLDivElement>) => {
    event.currentTarget.style.setProperty('--parallax-x', '0');
    event.currentTarget.style.setProperty('--parallax-y', '0');
  };

  return (
    <>
      <div
        className={styles.scene}
        onPointerMove={updateParallax}
        onPointerLeave={resetParallax}
      >
        <div className={styles.container}>
          <div className={styles.content}>
            <ContentHeader caption={title} />
            <div className={styles.article_container} data-article-container>
              <div className={styles.articles}>{children}</div>
            </div>
          </div>
        </div>
        <BackgroundLeftTopLine className={styles.background_left_top_line} />
        <Squares className={`${styles.squares} small_media_hidden`} />
      </div>
      <TabMenu />
    </>
  );
}
