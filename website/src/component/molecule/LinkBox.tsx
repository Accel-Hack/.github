import React from 'react';
import Link from 'next/link';
import styles from './LinkBox.module.css';
import Cursor from '@/asset/img/common/cursor.svg';

export type LinkBoxSize = 'lg' | 'md' | 'sm';
export type LinkBoxVariant = 'default' | 'recruit' | 'blog' | 'contact' | 'privacy';

type Props = {
  href: string;
  text: string;
  size: LinkBoxSize;
  variant?: LinkBoxVariant;
  showCursor?: boolean;
  className?: string;
};

const LinkBox: React.FC<Props> = ({
  href,
  text,
  size,
  variant = 'default',
  showCursor = true,
  className = '',
}) => {
  const sizeClass = styles[`link_box_${size}`];
  const variantClass = variant !== 'default' ? styles[`link_box_${variant}`] : '';
  const textClass = styles[`link_box_${size}_text`];
  
  // sm サイズには基本的にカーソルアイコンを表示しない
  const displayCursor = showCursor && size !== 'sm';

  return (
    <Link
      href={href}
      className={`${styles.link_box} ${sizeClass} ${variantClass} ${className}`}
    >
      <span className={textClass}>{text}</span>
      {displayCursor && <Cursor className={styles.cursor} />}
    </Link>
  );
};

export default LinkBox; 