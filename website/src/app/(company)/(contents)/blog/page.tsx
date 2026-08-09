import React from 'react';
import Script from 'next/script';
import Article from '@/component/organism/Article';
import NOTE_ARTICLES from '@/data/noteArticles.json';
import styles from './page.module.css';

const BlogPage: React.FC = () => {
  return (
    <Article id="note-articles" caption="AccelHackの記事一覧">
      <section className={styles.container}>
        <header className={styles.intro}>
          <p>ARTICLES ON NOTE</p>
        </header>

        <div className={styles.embedList}>
          {NOTE_ARTICLES.map((article) => (
            <div className={styles.embedItem} key={article.url}>
              <iframe
                className={`note-embed ${styles.embed}`}
                src={article.embedUrl}
                title={`${article.title}｜note`}
                height="400"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <a
          className={styles.noteProfile}
          href="https://note.com/accelhack"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>ACCELHACK ON NOTE</span>
          <strong>すべての記事を見る</strong>
          <span aria-hidden="true">↗</span>
        </a>
        <Script
          src="https://note.com/scripts/embed.js"
          strategy="afterInteractive"
        />
      </section>
    </Article>
  );
};

export default BlogPage;
