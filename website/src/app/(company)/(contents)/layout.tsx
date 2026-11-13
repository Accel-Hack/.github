'use client';

import React from 'react';
import TabMenu from '@/component/layout/TabMenu';
import styles from './layout.module.css';
import BackgroundLeftTopLine from '@/asset/img/layout/backgound_left_top_line.svg';
import Squares from '@/asset/img/layout/squares.svg';
import ContentHeader from '@/component/molecule/ContentHeader';
import { usePathname } from 'next/navigation';
import { NavItem } from '@/component/molecule/PullDown';

const titleMap: { [key: string]: string } = {
  about: 'About',
  service: 'Works',
  recruit: 'Recruit',
  blog: 'Blog',
  news: 'News',
};

const navItemMap: { [key: string]: NavItem[] } = {
  recruit: [
    {
      id: 'section1',
      num: '01',
      title: '採用メッセージ',
    },
    {
      id: 'section2',
      num: '02',
      title: '代表の挨拶',
    },
    {
      id: 'section3',
      num: '03',
      title: 'AccelHackでできる仕事',
    },
    {
      id: 'section4',
      num: '04',
      title: '働く魅力',
    },
    {
      id: 'section5',
      num: '05',
      title: '働き方・制度',
    },
    {
      id: 'section6',
      num: '06',
      title: '募集ポジション',
    },
    {
      id: 'section7',
      num: '07',
      title: '選考の流れ・FAQ',
    },
    {
      id: 'section8',
      num: '08',
      title: '応募・カジュアル面談',
    },
  ],
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
            <ContentHeader caption={title} navItems={navItemMap[page]} />
            <div
              id="content"
              className={styles.article_container}
              data-article-container
            >
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
