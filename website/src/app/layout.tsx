import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Geist } from 'next/font/google';
import Header from '@/component/layout/Header';
import Footer from '@/component/layout/Footer';
import './globals.css';
import styles from './layout.module.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'AccelHack',
  description: 'Website of AccelHack.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${styles.body} ${geistSans.variable}`}>
        <>
          <header className={styles.header}>
            <Header />
          </header>
          <main className={styles.main}>
            <div className={styles.content}>{children}</div>
            {/* メインページの枠 */}
            <>
              <div className={styles.frame}>
                <div
                  className={`${styles.frame_column} ${styles.frame_column_top}`}
                >
                  <div
                    className={`${styles.frame_row} ${styles.frame_row_left}`}
                  />
                  <div
                    className={`${styles.frame_row} ${styles.frame_row_middle}`}
                  />
                  <div
                    className={`${styles.frame_row} ${styles.frame_row_right}`}
                  />
                </div>
                <div
                  className={`${styles.frame_column} ${styles.frame_column_middle}`}
                >
                  <div
                    className={`${styles.frame_row} ${styles.frame_row_left}`}
                  />
                  <div
                    className={`${styles.frame_row} ${styles.frame_row_middle}`}
                  />
                  <div
                    className={`${styles.frame_row} ${styles.frame_row_right}`}
                  />
                </div>
                <div
                  className={`${styles.frame_column} ${styles.frame_column_bottom}`}
                >
                  <div
                    className={`${styles.frame_row} ${styles.frame_row_left}`}
                  />
                  <div
                    className={`${styles.frame_row} ${styles.frame_row_middle}`}
                  />
                  <div
                    className={`${styles.frame_row} ${styles.frame_row_right}`}
                  />
                </div>
              </div>
            </>
          </main>
          <footer className={styles.footer}>
            <Footer />
          </footer>
        </>
        {/* 左右のAccelHackのレイヤー */}
        <>
          <div className={`${styles.background} ${styles.bg_responsive}`}>
            <div className={styles.background_logo}>
              左背景
              <br />
              （幅固定）
            </div>
            <div className={styles.background_logo}>
              右背景
              <br />
              （幅固定）
            </div>
          </div>
        </>
      </body>
    </html>
  );
}
