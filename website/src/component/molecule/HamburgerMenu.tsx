import React from 'react';
import styles from './HamburgerMenu.module.css';

const HamburgerMenu: React.FC = () => {
  return (
    <div className={'small_media_visible'}>
      <div className={styles.menu}>
        <input type="checkbox" className={styles.menu_btn} id="menu-btn" />
        <label htmlFor="menu-btn" className={styles.menu_icon}>
          <span className={styles.navicon}></span>
        </label>
      </div>
    </div>
  );
};

export default HamburgerMenu;
