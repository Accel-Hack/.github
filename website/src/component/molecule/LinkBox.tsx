import React from 'react';
import Link from 'next/link';
import styles from './LinkBox.module.css';
import Cursor from '@/asset/img/common/cursor.svg';
import Logo from '@/asset/img/about/logo.svg';

export type LinkBoxSize = 'lg' | 'md' | 'sm';
export type LinkBoxVariant =
  'default' | 'recruit' | 'blog' | 'contact' | 'privacy';
export type CursorVariant = 'default' | 'mint';

type Props = {
  href: string;
  text: string;
  subtext: string;
  size: LinkBoxSize;
  variant?: LinkBoxVariant;
  showCursor?: boolean;
  cursorVariant?: CursorVariant;
  className?: string;
  hoverIcon?: boolean;
};

const LinkBox: React.FC<Props> = ({
  href,
  text,
  subtext,
  size,
  variant = 'default',
  cursorVariant,
  className = '',
  hoverIcon = false,
}) => {
  const sizeClass = styles[`link_box_${size}`];
  const variantClass =
    variant !== 'default' ? styles[`link_box_${variant}`] : '';
  const cursorClass = cursorVariant
    ? styles[`${cursorVariant}_cursor`]
    : styles[`cursor`];
  const textContainer = styles[`link_box_${size}_textContainer`];
  const textClass = styles[`link_box_${size}_text`];
  const subtextClass = styles[`link_box_${size}_subtext`];

  return (
    <Link
      href={href}
      className={`${styles.link_box} ${sizeClass} ${variantClass} ${className}`}
    >
      <div className={textContainer}>
        <span className={textClass}>{text}</span>
        <span className={subtextClass}>{subtext}</span>
      </div>

      <Cursor className={cursorClass} />
      {hoverIcon && <Logo className={styles.logo} />}
    </Link>
  );
};

export default LinkBox;
