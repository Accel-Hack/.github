'use client';

import React from 'react';
import TabMenu from '@/component/layout/TabMenu';
import styles from './layout.module.css';

import Square from '@/asset/img/top/square.svg';
import ContentHeader from '@/component/molecule/ContentHeader';
import { usePathname } from 'next/navigation';
// import { NavItem } from '@/component/molecule/PullDown';
import FrameBottomLine from '@/asset/img/layout/frame_bottom_line.svg';
import FrameCornerTriangle from '@/asset/img/layout/frame_corner_triangle.svg';
import FrameSideEndLine from '@/asset/img/layout/frame_side_end_line.svg';

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

  return (
    <div className={styles.scene} id="content">
      <div className={styles.container}>
        <div className={styles.content}>
          {/* <ContentHeader caption={title} navItems={navItemMap[page]} /> */}
          <div className={styles.article_container} data-article-container>
            <div className={styles.articles}>{children}</div>
          </div>
        </div>
        <div className={styles.tabmenu_container}>
          <TabMenu />
        </div>

        <Square
          style={{
            position: 'absolute',
            bottom: '60px',
            left: '1302px',
            width: '30px',
            height: '30px',
          }}
        />
        <Square
          style={{
            position: 'absolute',
            bottom: '60px',
            left: '690px',
            width: '30px',
            height: '30px',
          }}
        />
        <FrameBottomLine
          style={{
            position: 'absolute',
            bottom: '20px',
            left: '650px',
            width: '702px',
            height: '18px',
          }}
        />

        <FrameCornerTriangle
          style={{
            position: 'absolute',
            bottom: '18px',
            left: '18px',
            transform: 'rotate(-180deg) scaleX(-1)',
            width: '14px',
            height: '14px',
          }}
        />
        <FrameCornerTriangle
          style={{
            position: 'absolute',
            bottom: '18px',
            right: '8px',
            transform: 'rotate(-180deg)',
            width: '14px',
            height: '14px',
          }}
        />
        <div className={styles.line_cover_right} />
        <div className={styles.line_cover_left} />
      </div>
      <div className={styles.sticky_decoration}>
        <FrameSideEndLine
          style={{
            position: 'sticky',
            bottom: '0',
            right: '18px',
            transform: 'rotate(-180deg) scaleX(-1)',
            width: '14px',
            height: '240px',
          }}
        />
        <FrameSideEndLine
          style={{
            position: 'sticky',
            bottom: '0',
            left: '18px',
            transform: 'rotate(-180deg)',
            width: '14px',
            height: '240px',
          }}
        />
      </div>
    </div>
  );
}
