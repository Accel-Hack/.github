import React from 'react';
import { Page } from '@/enum/Page';
import styles from './TabMenu.module.css';
import TabItem from '@/component/molecule/TabItem';

const MainTabs = [Page.ABOUT, Page.SERVICE, Page.RECRUIT, Page.BLOG];

const SubTabs = [Page.CONTACT, Page.PRIVACY_POLICY];

const TabMenu: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main_tabs}>
        {MainTabs.map((page, i) => {
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
  );
};

export default TabMenu;
