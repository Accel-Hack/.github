import { Page } from '@/enum/Page';
import styles from './TabMenu.module.css';

const TabMenu: React.FC = () => {
  return (
    <div className={styles.container}>
      <a href={Page.ABOUT}>ABOUT</a> <br />
      <a href={Page.SERVICE}>SERVICE</a> <br />
      <a href={Page.RECRUIT}>RECRUIT</a> <br />
      <a href={Page.BLOG}>BLOG</a> <br />
      <a href={Page.CONTACT}>CONTACT</a> <br />
      <a href={Page.PRIVACY_POLICY}>PRIVACY_POLICY</a>
    </div>
  );
};

export default TabMenu;
