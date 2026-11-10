import React, { useEffect } from 'react';
import styles from './PullDown.module.css';
import { ChevronDownIcon } from '@heroicons/react/16/solid';

export interface NavItem {
  id: string;
  num: string;
  title: string;
}

type Props = {
  navItems: NavItem[];
};

const PullDown: React.FC<Props> = ({ navItems }: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeId, setActiveId] = React.useState(navItems[0].id);
  const selectedNum = navItems.find((item) => item.id === activeId)?.num || '';
  const selectedTitle =
    navItems.find((item) => item.id === activeId)?.title || '';
  const pullDownRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (!pullDownRef.current) return;
      const target = event.target as Node;
      if (!pullDownRef.current.contains(target)) setIsOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    const scrollContent = document.getElementById('content');

    if (!scrollContent) return;

    const checkIsAtBottom = () => {
      const scrollHeight = scrollContent.scrollHeight;
      const innerHeight = scrollContent.clientHeight;
      const scrollY = scrollContent.scrollTop;

      return innerHeight + scrollY >= scrollHeight - 20;
    };

    const option = {
      root: scrollContent,
      rootMargin: '-5px 0px -80% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver(changeSection, option);

    const targets = navItems.map((item) => document.getElementById(item.id));
    targets.forEach((target) => {
      if (target) {
        observer.observe(target);
      }
    });

    function changeSection(entries: IntersectionObserverEntry[]) {
      if (checkIsAtBottom()) return;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }

    const handleScroll = () => {
      if (checkIsAtBottom()) {
        const lastItem = navItems[navItems.length - 1];
        if (lastItem) {
          setActiveId(lastItem.id);
        }
      }
    };

    scrollContent.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      scrollContent.removeEventListener('scroll', handleScroll);
    };
  }, [navItems]);

  return (
    <div className={styles.pulldown} ref={pullDownRef}>
      <button
        className={styles.button}
        onClick={() => setIsOpen(isOpen ? false : true)}
      >
        <div className={styles.button_value}>
          <span className={styles.index}>Index</span>
          <span className={styles.num}>{selectedNum}</span>
          <span className={styles.button_title}>{selectedTitle}</span>
        </div>
        <span>
          <ChevronDownIcon
            className={isOpen ? styles.toggle_open : styles.toggle}
          />
        </span>
      </button>

      {isOpen && (
        <ul className={styles.section_menu}>
          {navItems.map((item, i) => (
            <li key={i}>
              <a
                className={styles.item}
                href={`#${item.id}`}
                onClick={() => setActiveId(item.id)}
              >
                <span className={styles.num}>{item.num}</span>
                <span className={styles.item_title}>{item.title}</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PullDown;
