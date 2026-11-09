import type { Metadata, Viewport } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import { SITE_URL } from '@/config/site';
import GoogleAnalytics from '@/component/analytics/GoogleAnalytics';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
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
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={geistSans.variable}>
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
