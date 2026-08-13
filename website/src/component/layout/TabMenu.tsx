'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import TabItem from '@/component/molecule/TabItem';
import { Page } from '@/enum/Page';
import styles from './TabMenu.module.css';

const MainTabs = [Page.ABOUT, Page.SERVICE, Page.RECRUIT, Page.BLOG];
const SubTabs = [Page.CONTACT];

const MobileTabs = [
  { page: Page.TOP, number: '00', caption: 'Top', detail: 'HOME' },
  { page: Page.ABOUT, number: '01', caption: 'About', detail: 'COMPANY' },
  { page: Page.SERVICE, number: '02', caption: 'Works', detail: 'PROJECTS' },
  { page: Page.RECRUIT, number: '03', caption: 'Recruit', detail: 'PEOPLE' },
  { page: Page.BLOG, number: '04', caption: 'Blog', detail: 'JOURNAL' },
];

const TabMenu: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const isCurrent = (page: Page) => {
    if (page === Page.TOP) return pathname === Page.TOP;
    return pathname === page || pathname.startsWith(`${page}/`);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    toggleRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        return;
      }

      if (event.key !== 'Tab') return;

      const focusable = [
        toggleRef.current,
        ...(Array.from(
          menuRef.current?.querySelectorAll<HTMLElement>('a[href]') ?? [],
        ) as HTMLElement[]),
      ].filter((element): element is HTMLElement => Boolean(element));

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <nav className={styles.container} aria-label="ページナビゲーション">
      <button
        ref={toggleRef}
        type="button"
        className={`${styles.menuButton} ${isOpen ? styles.menuButtonOpen : ''}`}
        aria-label={isOpen ? 'ページメニューを閉じる' : 'ページメニューを開く'}
        aria-expanded={isOpen}
        aria-controls="mobile-page-menu"
        onClick={() => setIsOpen((current) => !current)}
      >
        <span className={styles.menuButtonLabel} aria-hidden="true">
          {isOpen ? 'CLOSE' : 'MENU'}
        </span>
        <span className={styles.navicon} aria-hidden="true" />
      </button>

      <div className={styles.desktopMenu}>
        <div className={styles.mainTabs}>
          {MainTabs.map((page) => (
            <div key={page} className={styles.tab}>
              <TabItem type="primary" page={page} isCurrent={isCurrent(page)} />
            </div>
          ))}
        </div>
        <div className={styles.subTabs}>
          {SubTabs.map((page) => (
            <div key={page} className={styles.tab}>
              <TabItem type="secondary" page={page} />
            </div>
          ))}
        </div>
      </div>

      {isOpen && (
        <div
          ref={menuRef}
          id="mobile-page-menu"
          className={styles.mobileMenu}
          aria-modal="true"
          role="dialog"
          aria-label="ページメニュー"
        >
          <div className={styles.mobileHeader}>
            <span className={styles.mobileBrand}>ACCELHACK.inc</span>
            <span className={styles.mobileIndex}>PAGE INDEX / 05</span>
          </div>

          <div className={styles.mobileLinks}>
            {MobileTabs.map((item, index) => {
              const current = isCurrent(item.page);

              return (
                <Link
                  key={item.page}
                  href={item.page}
                  className={`${styles.mobileLink} ${current ? styles.mobileLinkCurrent : ''}`}
                  aria-current={current ? 'page' : undefined}
                  onClick={() => setIsOpen(false)}
                  style={{ '--menu-order': index } as React.CSSProperties}
                >
                  <span className={styles.mobileNumber}>{item.number}</span>
                  <span className={styles.mobileLabel}>
                    <strong>{item.caption}</strong>
                    <small>{item.detail}</small>
                  </span>
                  <span className={styles.mobileStatus}>
                    {current ? 'CURRENT' : '→'}
                  </span>
                </Link>
              );
            })}
          </div>

          <div className={styles.mobileFooter}>
            <Link
              href={Page.CONTACT}
              className={styles.contactLink}
              onClick={() => setIsOpen(false)}
            >
              <span>
                <small>05 / CONNECT</small>
                Contact
              </span>
              <b aria-hidden="true">↗</b>
            </Link>
            <p>ACCEL YOUR INNOVATION</p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default TabMenu;
