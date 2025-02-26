import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Header from '@/component/layout/Header';
import Footer from '@/component/layout/Footer';
import './globals.css';
import styles from './layout.module.css';
import Background from '@/asset/img/layout/background.png';
import Border from '@/asset/img/layout/border.png';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
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
      <body
        className={`${styles.body} ${geistSans.variable} ${geistMono.variable}`}
        style={{ backgroundImage: `url(${Background.src})` }}
      >
        <header className={styles.header}>
          <Header />
        </header>
        <main className={styles.main}>
          <div className={styles.main_layout}>
            <div
              className={styles.border}
              style={{ backgroundImage: `url(${Border.src})` }}
            />
            <div className={styles.content}>{children}</div>
          </div>
        </main>
        <footer className={styles.footer}>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
