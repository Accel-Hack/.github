'use client';

import { motion, useReducedMotion } from 'framer-motion';
import AccelHackLogo from '@/asset/img/top/logo.svg';
import styles from './TopIntro.module.css';

export default function TopIntro() {
  const reduceMotion = useReducedMotion();
  const duration = reduceMotion ? 0 : 0.9;
  const delay = reduceMotion ? 0 : 1.15;

  return (
    <motion.div
      aria-hidden="true"
      className={styles.intro}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        duration: reduceMotion ? 0.01 : 0.25,
        delay: delay + duration,
      }}
      style={{ pointerEvents: 'none' }}
    >
      <motion.div
        className={`${styles.panel} ${styles.panelLeft}`}
        initial={{ x: 0 }}
        animate={{ x: '-102%' }}
        transition={{ duration, delay, ease: [0.76, 0, 0.24, 1] }}
      />
      <motion.div
        className={`${styles.panel} ${styles.panelRight}`}
        initial={{ x: 0 }}
        animate={{ x: '102%' }}
        transition={{ duration, delay, ease: [0.76, 0, 0.24, 1] }}
      />

      <motion.div
        className={styles.brand}
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: [0, 1, 1, 0], scale: [0.92, 1, 1, 1.04] }}
        transition={{
          duration: reduceMotion ? 0.01 : 1.6,
          times: [0, 0.22, 0.7, 1],
          ease: 'easeOut',
        }}
      >
        <AccelHackLogo className={styles.logo} />
        <span className={styles.rule} />
        <span className={styles.copy}>ACCEL YOUR INNOVATION</span>
      </motion.div>
    </motion.div>
  );
}
