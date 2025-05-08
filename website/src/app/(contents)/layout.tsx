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
  service: 'Service',
  recruit: 'Recruit',
  blog: 'Blog',
  news: 'News',
};

export default function ContentLayout({
  children,
}: Readonly<{
  title: string;
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const title = titleMap[pathname.split('/')[1]] || 'Accel Hack';

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <ContentHeader caption={title} />
          <div className={styles.article_container}>
            <div className={styles.articles}>{children}</div>
          </div>
        </div>
      </div>
      <TabMenu />
      <BackgroundLeftTopLine className={styles.background_left_top_line} />
      <Squares className={`${styles.squares} small_media_hidden`} />
    </>
  );
}
