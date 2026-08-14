import React from 'react';
import Image from 'next/image';
import Article from '@/component/organism/Article';
import { Page } from '@/enum/Page';
import LogoEucalia from '@/asset/img/about/logo_eucalia.png';
import LogoRealight from '@/asset/img/about/logo_realight.png';
import LogoRelate from '@/asset/img/about/logo_relate.png';
import LogoWkogyo from '@/asset/img/about/logo_wkogyo.png';
import MemberIshikawa from '@/asset/img/about/member_ishikawa.jpg';
import MemberKawamura from '@/asset/img/about/member_kawamura.jpg';
import styles from './AboutSections.module.css';

const capabilityGroups = [
  {
    number: '01',
    title: 'システム開発',
    label: 'DEVELOPMENT',
    requests: [
      '生成AIを組み込んだシステムを一から開発したい',
      'ベンダーロックされてしまったシステムの新しい保守先を探したい',
      'システム開発の見積もりが高すぎる。もっと安く効率的に作れるベンダーに頼みたい',
    ],
  },
  {
    number: '02',
    title: 'AI導入支援',
    label: 'AI ENABLEMENT',
    requests: [
      '今契約しているMicrosoftだけでAI効率化を図りたい',
      'CLaude / ClaudeCodeを安全に会社に導入したい',
    ],
  },
];

const members = [
  {
    role: '代表取締役',
    name: '石川 貴大',
    photo: MemberIshikawa,
    career:
      '東京大学大学院を卒業後、ダイキン工業株式会社に入社。学生時代よりAIに関わる研究をする傍ら、個人事業主としてシステム開発やサイト開発を手がける。東大アメフト部WARRIORSではSE（システムエンジニア）パートのコーチを務める。',
    specialty: 'メーカーDX',
  },
  {
    role: '代表取締役',
    name: '河村 京介',
    photo: MemberKawamura,
    career:
      '東京大学大学院を卒業後、ヤフー株式会社（現LINEヤフー株式会社）に入社。学生時代から、複雑なアプリケーションやネットワークの実装に長け、その後、金融システムなど大規模かつ要求値の高いシステムにもユニットマネージャーとして従事',
    specialty: 'WEB/iOS/Androidアプリケーション、セキュリティ、クラウドエンジニアリング',
  },
];

const history = [
  { year: '2022', note: '創業', clients: 7, sales: 47000, width: '52%' },
  { year: '2023', note: '', clients: 11, sales: 85000, width: '94%' },
  { year: '2024', note: '', clients: 17, sales: 88000, width: '98%' },
  { year: '2025', note: '', clients: 23, sales: 90000, width: '100%' },
];

const clients = [
  { name: 'ユカリア', src: LogoEucalia },
  { name: 'Relate', src: LogoRelate },
  { name: '渡辺工業', src: LogoWkogyo },
  { name: 'Realight', src: LogoRealight },
];

const AboutSections: React.FC = () => {
  return (
    <>
      <Article id="ai-development" caption="生成AI時代のシステム開発">
        <section className={styles.aiSection}>
          <span className={styles.ghostType} aria-hidden="true">
            AI
          </span>
          <span className={styles.greenPlane} aria-hidden="true" />
          <span className={styles.slideIndex}>01 / 04</span>
          <div className={styles.sectionMessage}>
            <p className={styles.kicker}>SYSTEM DEVELOPMENT WITH AI</p>
            <h2 className={styles.headline}>
              <span className={styles.highlight}>「実装」</span>だけは
              <br />
              もう価値にはならない
            </h2>
          </div>
          <div className={styles.aiContent}>
            <p className={styles.lead}>
              AIのある生活が当たり前になっている現在、
              <br />
              ただ「あったらいいな」を形にすることの価値は薄れつつあります。
            </p>
            <p className={styles.brandStatement}>AccelHackは、</p>
            <ol className={styles.answerList}>
              <li>
                <span>01</span>
                何を解決したらいいのか
              </li>
              <li>
                <span>02</span>
                何を作ればいいのか
              </li>
              <li>
                <span>03</span>
                作ったものをどう維持するのか
              </li>
            </ol>
            <p className={styles.conclusion}>
              この全てのプロセスに、答えを出します。
            </p>
          </div>
        </section>
      </Article>

      <Article id="capabilities" caption="私たちのできること">
        <section className={styles.capabilitiesSection}>
          <span className={styles.ghostType} aria-hidden="true">
            05
          </span>
          <span className={styles.greenPlane} aria-hidden="true" />
          <span className={styles.slideIndex}>02 / 04</span>
          <div className={styles.capabilityRoute}>
            {capabilityGroups.map((group) => (
              <section key={group.number} className={styles.capabilityGroup}>
                <header className={styles.capabilityHeading}>
                  <span className={styles.capabilityNumber}>
                    {group.number}
                  </span>
                  <h2>{group.title}</h2>
                  <small>{group.label}</small>
                </header>
                <ul className={styles.requestList}>
                  {group.requests.map((request) => (
                    <li key={request} className={styles.requestItem}>
                      {request}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
          <a className={styles.worksLink} href={Page.SERVICE}>
            実績を確認
            <span aria-hidden="true">→</span>
          </a>
        </section>
      </Article>

      <Article id="members" caption="Members">
        <section className={styles.membersSection}>
          <span className={styles.ghostType} aria-hidden="true">
            02
          </span>
          <span className={styles.greenPlane} aria-hidden="true" />
          <span className={styles.slideIndex}>03 / 04</span>
          {members.map((member) => (
            <article key={member.name} className={styles.member}>
              <div className={styles.memberPhoto}>
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.memberProfile}>
                <p className={styles.memberRole}>{member.role}</p>
                <h2>{member.name}</h2>
                <dl>
                  <div>
                    <dt>経歴</dt>
                    <dd>{member.career}</dd>
                  </div>
                  <div>
                    <dt>得意領域</dt>
                    <dd>{member.specialty}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </section>
      </Article>

      <Article id="history" caption="History & Clients">
        <section className={styles.historySection}>
          <span className={styles.ghostType} aria-hidden="true">
            25
          </span>
          <span className={styles.greenPlane} aria-hidden="true" />
          <span className={styles.slideIndex}>04 / 04</span>
          <div className={styles.historyChart}>
            <div className={styles.historyHeading}>
              <p className={styles.kicker}>GROWTH</p>
              <h2>取引社数／売上推移</h2>
              <p>売上単位：千円</p>
            </div>
            <ol className={styles.historyList}>
              {history.map((item) => (
                <li key={item.year} className={styles.historyItem}>
                  <div className={styles.year}>
                    <strong>{item.year}</strong>
                    <span>{item.note}</span>
                  </div>
                  <div className={styles.barArea}>
                    <div className={styles.bar} style={{ width: item.width }} />
                    <div className={styles.historyValues}>
                      <span>{item.clients}社</span>
                      <span>¥{item.sales.toLocaleString()}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className={styles.clients}>
            <p className={styles.kicker}>SELECTED CLIENTS</p>
            <h2>主な取引先</h2>
            <div className={styles.clientGrid}>
              {clients.map((client) => (
                <div key={client.name} className={styles.clientLogo}>
                  <Image
                    src={client.src}
                    alt={client.name}
                    width={200}
                    height={70}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                    }}
                  />
                </div>
              ))}
              {/*<div className={styles.clientName}>東京テアトル</div>*/}
              {/*<div className={styles.clientName}>BALMUDA</div>*/}
            </div>
          </div>
        </section>
      </Article>
    </>
  );
};

export default AboutSections;
