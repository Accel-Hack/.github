import React from 'react';
import TabMenu from '@/component/layout/TabMenu';
import styles from './layout.module.css';

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
    </>
  );
}
