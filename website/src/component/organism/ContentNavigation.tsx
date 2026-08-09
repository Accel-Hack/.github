import React from 'react';
import { Page } from '@/enum/Page';
import styles from './ContentNavigation.module.css';

export type NavigationItem = {
  label: string;
  href: string;
};

export type NavigationContent = {
  eyebrow: string;
  message: [string, string];
  description: string;
  links: NavigationItem[];
  sectionLinks?: NavigationItem[];
};

export const navigationContents: Record<string, NavigationContent> = {
  about: {
    eyebrow: 'ACCELHACK / ABOUT',
    message: ['ただのSIerじゃ、', 'つまらない。'],
    description:
      '「実装する会社」に留まらず、見つけるところから維持するところまで、課題解決の全てに答えを出します。',
    links: [
      { label: '生成AI時代のシステム開発', href: '#ai-development' },
      { label: '私たちのできること', href: '#capabilities' },
      { label: 'メンバー', href: '#members' },
      { label: '沿革・主な取引先', href: '#history' },
    ],
    sectionLinks: [
      { label: '生成AI時代のシステム開発', href: '#ai-development' },
      { label: '私たちのできること', href: '#capabilities' },
      { label: 'メンバー', href: '#members' },
      { label: '沿革・主な取引先', href: '#history' },
    ],
  },
  service: {
    eyebrow: 'ACCELHACK / SERVICE',
    message: ['開発の複雑さを、', '前進する力へ。'],
    description:
      '要件整理から実装・運用まで、事業に必要な仕組みを一緒につくります。',
    links: [
      { label: 'ADeT', href: '#adet' },
      { label: 'TenPla', href: '#mockapp' },
      { label: '受託開発・業務委託', href: '#development' },
      { label: '私たちについて', href: Page.ABOUT },
      { label: '採用情報', href: Page.RECRUIT },
      { label: 'お問い合わせ', href: Page.CONTACT },
    ],
  },
  recruit: {
    eyebrow: 'ACCELHACK / RECRUIT',
    message: ['エンジニアの仕事を、', 'もっと面白く。'],
    description:
      'AIと共に、技術者にしか生み出せない価値を追求する仲間を探しています。',
    links: [
      { label: '課題解決フレームワーク', href: '#recruit-framework' },
      { label: '課題解決人材への成長', href: '#recruit-growth' },
      { label: 'AccelHackで働く', href: '#recruit-information' },
      { label: '成長実例', href: '#recruit-growth-case' },
      { label: '私たちについて', href: Page.ABOUT },
      { label: '事業内容', href: Page.SERVICE },
      { label: 'ブログ', href: Page.BLOG },
      { label: 'お問い合わせ', href: Page.CONTACT },
    ],
    sectionLinks: [
      { label: '課題解決フレームワーク', href: '#recruit-framework' },
      { label: '課題解決人材への成長', href: '#recruit-growth' },
      { label: 'AccelHackで働く', href: '#recruit-information' },
      { label: '成長実例', href: '#recruit-growth-case' },
    ],
  },
  blog: {
    eyebrow: 'ACCELHACK / BLOG',
    message: ['技術の現在地と、', 'その先の可能性。'],
    description:
      '開発の舞台裏、技術への考え、私たちが挑戦していることを発信します。',
    links: [
      { label: 'noteの記事一覧', href: '#note-articles' },
      { label: 'noteですべて見る', href: 'https://note.com/accelhack' },
      { label: '私たちについて', href: Page.ABOUT },
      { label: '事業内容', href: Page.SERVICE },
      { label: '採用情報', href: Page.RECRUIT },
      { label: 'お問い合わせ', href: Page.CONTACT },
    ],
  },
  news: {
    eyebrow: 'ACCELHACK / NEWS',
    message: ['私たちの変化を、', 'ここから届ける。'],
    description:
      'サービス、プロジェクト、組織に関する最新情報をお知らせします。',
    links: [
      { label: '最新のお知らせ', href: '#news-list' },
      { label: '私たちについて', href: Page.ABOUT },
      { label: '事業内容', href: Page.SERVICE },
      { label: '採用情報', href: Page.RECRUIT },
      { label: 'ブログ', href: Page.BLOG },
      { label: 'お問い合わせ', href: Page.CONTACT },
    ],
  },
};

type Props = {
  page: string;
};

const ContentNavigation: React.FC<Props> = ({ page }) => {
  const content = navigationContents[page];

  if (!content) return null;

  return (
    <section
      className={styles.container}
      id={`${page}-overview`}
      aria-labelledby={`${page}-navigation-title`}
      data-content-navigation
    >
      <div className={styles.message}>
        <p className={styles.eyebrow}>{content.eyebrow}</p>
        <h2 className={styles.title} id={`${page}-navigation-title`}>
          {content.message[0]}
          <br />
          {content.message[1]}
        </h2>
        <p className={styles.description}>{content.description}</p>
      </div>

      <nav
        className={styles.navigation}
        aria-label={`${page}ページ内ナビゲーション`}
      >
        <p className={styles.indexLabel}>
          INDEX / 01—{String(content.links.length).padStart(2, '0')}
        </p>
        <ol className={styles.linkList}>
          {content.links.map((item, index) => {
            const isExternal = item.href.startsWith('http');

            return (
              <li key={`${item.href}-${item.label}`}>
                <a
                  className={styles.link}
                  href={item.href}
                  {...(isExternal
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                >
                  <span className={styles.number}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className={styles.label}>{item.label}</span>
                  <span className={styles.arrow} aria-hidden="true">
                    →
                  </span>
                </a>
              </li>
            );
          })}
        </ol>
      </nav>
    </section>
  );
};

export default ContentNavigation;
