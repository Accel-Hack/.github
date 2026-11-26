import React from 'react';
import Header from '@/component/layout/Header';

import styles from './layout.module.css';
import AccelHackLogo from '@/asset/img/layout/background_side_logo.svg';
import FrameSideEndLine from '@/asset/img/layout/frame_side_end_line.svg';
import FrameSideMiddleLine from '@/asset/img/layout/frame_side_middle_line.svg';
import FrameCornerTriangle from '@/asset/img/layout/frame_corner_triangle.svg';
import FrameTopLine from '@/asset/img/layout/frame_top_line.svg';
import FrameBottomLine from '@/asset/img/layout/frame_bottom_line.svg';

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
                }}
                className={styles.side_end_line_left}
              />
              <FrameSideEndLine
                style={{
                  position: 'absolute',
                  bottom: '0',
                }}
                className={styles.side_end_line_right}
              />
            </div>
          </div>
        </main>
        {/* メインページの枠 */}
        <div className={styles.top_frame}>
          <FrameTopLine
            className={`${styles.frame_top_line} small_media_hidden`}
          />

          <FrameBottomLine
            className={`${styles.small_media_frame_top_line} small_media_vissible`}
          />
          <ColorSquares
            style={{
              position: 'absolute',
              width: '45px',
              height: '10px',
            }}
            className={styles.color_square}
          />
        </div>
        <div className={styles.frame}>
          <FrameCornerTriangle
            style={{
              position: 'absolute',
            }}
            className={styles.triangle_left}
          />
          <FrameCornerTriangle
            style={{
              position: 'absolute',
              transform: 'scaleX(-1)',
            }}
            className={styles.triangle_right}
          />

          <FrameSideEndLine
            style={{
              position: 'absolute',
            }}
            className={styles.side_top_line_left}
          />
          <FrameSideEndLine
            style={{
              position: 'absolute',
            }}
            className={styles.side_top_line_right}
          />

          <FrameSideMiddleLine
            style={{
              position: 'absolute',
              zIndex: -2,
            }}
            className={styles.middle_line_left}
          />
          <FrameSideMiddleLine
            style={{
              position: 'absolute',
              zIndex: -2,
            }}
            className={styles.middle_line_right}
          />
        </div>
      </Transition>

      {/* 左右のAccelHackのレイヤー */}
      <div className="small_media_hidden">
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
    </div>
  );
}
