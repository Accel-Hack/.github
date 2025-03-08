import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Geist } from 'next/font/google';
import Header from '@/component/layout/Header';
import Footer from '@/component/layout/Footer';
import './globals.css';
import styles from './layout.module.css';
import Border from '@/asset/img/layout/border.png';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'AccelHack',
  description: 'Website of AccelHack.'
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1
};

export default function RootLayout({
                                     children
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body
      className={`${styles.body} ${geistSans.variable}`}
    >
    {/*<main className={styles.main}>*/}
    {/*  <div className={styles.main_layout}>*/}
    {/*    <div*/}
    {/*      className={styles.border}*/}
    {/*      style={{ backgroundImage: `url(${Border.src})` }}*/}
    {/*    />*/}
    {/*    <div className={styles.content}>{children}</div>*/}
    {/*  </div>*/}
    {/*</main>*/}
    {/*<footer className={styles.footer}>*/}
    {/*  <Footer />*/}
    {/*</footer>*/}
    <>
      <header className={styles.header}>
        <Header />
      </header>
      <main className={styles.main}>

        メインコンテンツ
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </>
    {/*左右のAccelHackのレイヤー*/}
    <>
      <div className={styles.background}>
        <div
          className={styles.background_logo}
        >
          左背景<br />（幅固定）
        </div>
        <div
          className={styles.background_logo}
        >
          右背景<br />（幅固定）
        </div>
      </div>
    </>
    </body>
    </html>
  )
    ;
}
