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
import FrameBottomLine from '@/asset/img/layout/frame_bottom_line.svg';
import Square from '@/asset/img/top/square.svg';
import Transition from '@/app/transition';

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
    <html lang="ja">
      <head>
        {/* Axiaフォントの読み込み */}
        <link rel="stylesheet" href="https://use.typekit.net/ulu1pwh.css" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
        </head>
      <body className={`${styles.body} ${geistSans.variable}`}>
        <>
          <Transition>
            <header className={styles.header}>
              <Header />
            </header>
            <main className={styles.main}>
              <div className={styles.content}>{children}</div>
              {/* メインページの枠 */}
              <div className={styles.frame}>
                <FrameTopLine
                  className={`${styles.frame_top_line} small_media_hidden`}
                />
                <FrameBottomLine
                  className={`${styles.frame_top_line} small_media_visible`}
                />
                <FrameBottomLine className={styles.frame_bottom_line} />
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
                    right: '0',
                    transform: 'scaleX(-1)',
                  }}
                  className={styles.triangle}
                />
                <FrameCornerTriangle
                  style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    transform: 'rotate(-180deg) scaleX(-1)',
                  }}
                  className={styles.triangle}
                />
                <FrameCornerTriangle
                  style={{
                    position: 'absolute',
                    bottom: '0',
                    right: '0',
                    transform: 'rotate(-180deg)',
                  }}
                  className={styles.triangle}
                />
                <FrameSideEndLine
                  style={{
                    position: 'absolute',
                    top: '7px',
                    left: '0',
                  }}
                  className={styles.side_end_line}
                />
                <FrameSideEndLine
                  style={{
                    position: 'absolute',
                    top: '7px',
                    right: '0',
                    transform: 'scaleX(-1)',
                  }}
                  className={styles.side_end_line}
                />
                <FrameSideEndLine
                  style={{
                    position: 'absolute',
                    bottom: '7px',
                    left: '0',
                    transform: 'rotate(-180deg) scaleX(-1)',
                  }}
                  className={styles.side_end_line}
                />
                <FrameSideEndLine
                  style={{
                    position: 'absolute',
                    bottom: '7px',
                    right: '0',
                    transform: 'rotate(-180deg)',
                  }}
                  className={styles.side_end_line}
                />
                <FrameSideMiddleLine
                  style={{
                    position: 'absolute',
                    top: '50%',
                    height: '80%',
                    transform: 'translateY(-50%)',
                  }}
                  className={styles.side_middle_line}
                />
                <FrameSideMiddleLine
                  style={{
                    position: 'absolute',
                    top: '50%',
                    right: '0',
                    height: '80%',
                    transform: 'translateY(-50%)',
                  }}
                  className={styles.side_middle_line}
                />
              </div>
            </main>
            <div className={styles.small_media_footer}>
              <Square
                style={{
                  width: '29.75px',
                  height: 'auto',
                }}
                class={'small_media_visible'}
              />
              <Square
                style={{
                  width: '29.75px',
                  height: 'auto',
                }}
                class={'small_media_visible'}
              />
            </div>
            <footer className={styles.footer}>
              <Footer />
            </footer>
          </Transition>
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
