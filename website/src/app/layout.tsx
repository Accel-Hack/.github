import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Geist } from 'next/font/google';
import Header from '@/component/layout/Header';
import Footer from '@/component/layout/Footer';
import './globals.css';
import styles from './layout.module.css';
import AccelHackLogo from '@/asset/img/layout/background_side_logo.svg';
import FrameSideEndLine from '@/asset/img/layout/frame_side_end_line.svg';
import FrameSideMiddleLine from '@/asset/img/layout/frame_side_middle_line.svg';
import FrameCornerTriangle from '@/asset/img/layout/frame_corner_triangle.svg';
import FrameTopLine from '@/asset/img/layout/frame_top_line.svg';

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
      <head>
        {/* Axiaフォントの読み込み */}
        <link rel="stylesheet" href="https://use.typekit.net/ulu1pwh.css" />
      </head>
      <body className={`${styles.body} ${geistSans.variable}`}>
        <>
          <header className={styles.header}>
            <Header />
          </header>
          <main className={styles.main}>
            <div className={styles.content}>{children}</div>
            {/* メインページの枠 */}
            <div className={styles.frame}>
              <FrameTopLine
                style={{
                  position: 'absolute',
                  top: '-62px',
                  left: '60px',
                }}
              />
              <FrameCornerTriangle
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                }}
                className={styles.triangle}
              />
              <FrameCornerTriangle
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                }}
                className={styles.triangle}
              />
              <FrameCornerTriangle
                style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                }}
                className={styles.triangle}
              />
              <FrameCornerTriangle
                style={{
                  position: 'absolute',
                  bottom: '0',
                  right: '0',
                }}
                className={styles.triangle}
              />
              <FrameSideEndLine
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                }}
                className={styles.side_end_line}
              />
              <FrameSideEndLine
                style={{
                  position: 'absolute',
                  top: '0',
                  right: '0',
                }}
                className={styles.side_end_line}
              />
              <FrameSideEndLine
                style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                }}
                className={styles.side_end_line}
              />
              <FrameSideEndLine
                style={{
                  position: 'absolute',
                  bottom: '0',
                  right: '0',
                }}
                className={styles.side_end_line}
              />
              <FrameSideMiddleLine
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '0',
                  transform: 'translateY(-50%)',
                }}
                className={styles.side_middle_line}
              />
              <FrameSideMiddleLine
                style={{
                  position: 'absolute',
                  top: '50%',
                  right: '0',
                  transform: 'translateY(-50%)',
                }}
                className={styles.side_middle_line}
              />
            </div>
          </main>
          <footer className={styles.footer}>
            <Footer />
          </footer>
        </>
        {/* 左右のAccelHackのレイヤー */}
        <>
          <div className={`${styles.background} ${styles.bg_responsive}`}>
            <div className={styles.background_logo}>
              <AccelHackLogo
                aria-label="AccelHack"
                className={styles.background_logo_img}
              />
            </div>
            <div className={styles.background_logo}>
              <AccelHackLogo
                aria-label="AccelHack"
                className={`${styles.background_logo_img} ${styles.background_logo_img_rotate}`}
              />
            </div>
          </div>
        </>
      </body>
    </html>
  );
}
