import React from 'react';
import TabMenu from '@/component/layout/TabMenu';
import styles from './layout.module.css';
import BackgroundLeftTopLine from '@/asset/img/layout/backgound_left_top_line.svg';
import Squares from '@/asset/img/layout/squares.svg';


export default function ContentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>{children}</div>
      </div>
      <TabMenu />
      <BackgroundLeftTopLine className={styles.background_left_top_line} />
      <Squares className={styles.squares} />
    </>
  );
}
