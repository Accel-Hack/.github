import React from 'react';
import styles from './LinkBoxContainer.module.css';
import { LinkBoxSize } from './LinkBox';

type Props = {
  size: LinkBoxSize;
  children: React.ReactNode;
  className?: string;
};

const LinkBoxContainer: React.FC<Props> = ({
  size,
  children,
  className = '',
}) => {
  return (
    <div
      className={`${styles.container} ${styles[`container_${size}`]} ${className}`}
    >
      {children}
    </div>
  );
};

export default LinkBoxContainer;
