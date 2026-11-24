import React from 'react';
import Header from '@/component/layout/Header';

import styles from './layout.module.css';
import AccelHackLogo from '@/asset/img/layout/background_side_logo.svg';
import FrameSideEndLine from '@/asset/img/layout/frame_side_end_line.svg';
import FrameSideMiddleLine from '@/asset/img/layout/frame_side_middle_line.svg';
import FrameCornerTriangle from '@/asset/img/layout/frame_corner_triangle.svg';
import FrameTopLine from '@/asset/img/layout/frame_top_line.svg';
// import FrameBottomLine from '@/asset/img/layout/frame_bottom_line.svg';
import ColorSquares from '@/asset/img/layout/color_squares.svg';

import Transition from '@/app/(company)/transition';

export default function CompanyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.body}>
      <Transition>
        <header className={styles.header}>
          <Header />
        </header>
        <main className={styles.main}>
          <div className={styles.main_content}>
            {children}
            <div className={styles.sticky_decoration}>
              <FrameSideEndLine
                style={{
                  position: 'absolute',
                  bottom: '0',
                  height: '240px',
                  left: '18px',
                }}
                className={styles.side_end_line}
              />
              <FrameSideEndLine
                style={{
                  position: 'absolute',
                  bottom: '0',
                  right: '18px',
                  height: '240px',
                }}
                className={styles.side_end_line}
              />
            </div>
          </div>
        </main>
        {/* メインページの枠 */}
        <div className={styles.top_frame}>
          <FrameTopLine
            className={`${styles.frame_top_line} small_media_hidden`}
          />
          <ColorSquares
            style={{
              position: 'absolute',
              top: '86px',
              left: '87px',
              width: '45px',
              height: '10px',
            }}
          />
        </div>
        <div className={styles.frame}>
          {/*
            <FrameBottomLine
              className={`${styles.frame_top_line} small_media_visible`}
            /> */}

          <FrameCornerTriangle
            style={{
              position: 'absolute',
              top: '64px',
              left: '18px',
            }}
            className={styles.triangle}
          />
          <FrameCornerTriangle
            style={{
              position: 'absolute',
              top: '64px',
              right: '18px',
              transform: 'scaleX(-1)',
            }}
            className={styles.triangle}
          />

          <FrameSideEndLine
            style={{
              position: 'absolute',
              top: '71px',
              left: '18px',
            }}
            className={styles.side_end_line}
          />
          <FrameSideEndLine
            style={{
              position: 'absolute',
              top: '71px',
              right: '18px',
            }}
            className={styles.side_end_line}
          />

          <FrameSideMiddleLine
            style={{
              position: 'absolute',
              top: '143px',
              left: '18px',
              width: '5px',
              height: '870px',
              zIndex: -2,
            }}
          />
          <FrameSideMiddleLine
            style={{
              position: 'absolute',
              top: '143px',
              right: '18px',
              width: '5px',
              height: '870px',
              zIndex: -2,
            }}
          />
        </div>
      </Transition>

      {/* 左右のAccelHackのレイヤー */}

      <div className={`${styles.background} ${styles.bg_responsive}`}>
        <div className={styles.background_logo}>
          <AccelHackLogo
            aria-label="AccelHack"
            className={styles.background_logo_img}
          />
        </div>
        <div className={styles.background_logo}>
          <AccelHackLogo
            aria-label="AccelHack"
            className={styles.background_logo_img}
          />
        </div>
      </div>
    </div>
  );
}
