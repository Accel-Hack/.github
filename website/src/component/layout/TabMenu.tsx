import React from 'react';
import { Page } from '@/enum/Page';
import styles from './TabMenu.module.css';
import TabItem from '@/component/molecule/TabItem';
import { usePathname } from 'next/navigation';

const MainTabs = [Page.ABOUT, Page.SERVICE, Page.RECRUIT, Page.BLOG];

const SubTabs = [Page.CONTACT];

const TabMenu: React.FC = () => {
  const pathname = usePathname();
  const displayedTabs = MainTabs.filter((tab) => tab != pathname);

  return (
    <>
      <div className={styles.container}>
        <input type="checkbox" className={styles.menu_btn} id="menu-btn" />
        <label htmlFor="menu-btn" className={styles.menu_icon}>
          <span className={styles.navicon}></span>
        </label>
        <div className={styles.main_tabs}>
          {displayedTabs.map((page, i) => {
            return (
              <div key={i} className={styles.tab}>
                <TabItem type="primary" page={page} />
              </div>
            );
          })}
        </div>
        <div className={styles.sub_tabs}>
          {SubTabs.map((page, i) => {
            return (
              <div key={i} className={styles.tab}>
                <TabItem type="secondary" key={i} page={page} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TabMenu;
