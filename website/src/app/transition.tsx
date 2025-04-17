'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode } from 'react';
import styles from './transition.module.css';
import { usePathname } from 'next/navigation';

export default function Transition({ children }: { children: ReactNode }) {
  const path = usePathname() ?? '/';

  return (
    <>
      <AnimatePresence mode={'wait'}>
        <motion.div
          key={`top-left-${path}`}
          initial={{ transform: 'scale(1)' }}
          animate={{
            transform: 'scale(0)',
            transition: { duration: 0.5, ease: 'easeInOut' },
          }}
          exit={{
            transform: 'scale(1)',
            transition: { duration: 0.5, ease: 'easeInOut' },
          }}
          className={`${styles.overlay} ${styles.topRight}`}
        />
        <motion.div
          key={`bottom-right-${path}`}
          initial={{ transform: 'scale(1)' }}
          animate={{
            transform: 'scale(0)',
            transition: { duration: 0.5, ease: 'easeInOut' },
          }}
          exit={{
            transform: 'scale(1)',
            transition: { duration: 0.5, ease: 'easeInOut' },
          }}
          className={`${styles.overlay} ${styles.bottomLeft}`}
        />
        {children}
      </AnimatePresence>
    </>
  );
}
