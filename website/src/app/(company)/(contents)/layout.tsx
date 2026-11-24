'use client';

import React from 'react';
import TabMenu from '@/component/layout/TabMenu';
import styles from './layout.module.css';

import ContentHeader from '@/component/molecule/ContentHeader';
import { usePathname } from 'next/navigation';
import { NavItem } from '@/component/molecule/PullDown';

import ContentFooter from '@/component/layout/ContentFooter';
import Footer from '@/component/layout/Footer';

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

  return (
    <div className={styles.scene}>
      <div className={styles.container} id="content">
        <div className={styles.content_wrapper}>
          <div className={styles.content}>
            <ContentHeader caption={title} navItems={navItemMap[page]} />
            <div className={styles.article_container} data-article-container>
              <div className={styles.articles}>{children}</div>
            </div>
          </div>
          <div className={styles.tabmenu_container}>
            <TabMenu />
          </div>
        </div>
        <footer className={styles.footer}>
          <ContentFooter />
          <Footer />
        </footer>
        {/* <div className={styles.line_cover_right} />
        <div className={styles.line_cover_left} /> */}
      </div>
    </div>
  );
}
