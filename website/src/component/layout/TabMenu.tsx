import React from 'react';
import { Page } from '@/enum/Page';
import styles from './TabMenu.module.css';
import TabItem from '@/component/molecule/TabItem';
import { usePathname } from 'next/navigation';

const MainTabs = [Page.ABOUT, Page.SERVICE, Page.RECRUIT, Page.BLOG];

const SubTabs = [Page.CONTACT];

const TabMenu: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.container} aria-label="ページナビゲーション">
      <input type="checkbox" className={styles.menu_btn} id="menu-btn" />
      <label
        htmlFor="menu-btn"
        className={styles.menu_icon}
        aria-label="ページメニューを開閉"
      >
        <span className={styles.navicon}></span>
      </label>
      <div className={styles.main_tabs}>
        {MainTabs.map((page) => {
          return (
            <div key={page} className={styles.tab}>
              <TabItem
                type="primary"
                page={page}
                isCurrent={pathname === page}
              />
            </div>
          );
        })}
      </div>
      <div className={styles.sub_tabs}>
        {SubTabs.map((page) => {
          return (
            <div key={page} className={styles.tab}>
              <TabItem type="secondary" page={page} />
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default TabMenu;
