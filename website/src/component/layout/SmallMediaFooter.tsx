import styles from '@/component/layout/SmallMediaFooter.module.css';
import Square from '@/asset/img/top/square.svg';
import FrameBottomLine from '@/asset/img/layout/frame_bottom_line.svg';
import FrameCornerTriangle from '@/asset/img/layout/frame_corner_triangle.svg';
import SideLineCover from '@/asset/img/layout/side_line_cover.svg';
import Footer from '@/component/layout/Footer';

const SmallMediaFooter: React.FC = () => {
  return (
    <div className={styles.footer_container}>
      <div className={styles.footer_above}>
        <FrameCornerTriangle
          style={{
            position: 'absolute',
            top: '0',
            left: '10px',
            transform: 'rotate(-90deg)',
          }}
          className={styles.triangle}
        />
        <FrameBottomLine className={styles.frame_bottom_line} />
        <FrameCornerTriangle
          style={{
            position: 'absolute',
            top: '0',
            right: '10px',
            transform: 'rotate(90deg) scaleX(-1)',
          }}
          className={styles.triangle}
        />
      </div>
      <div className={styles.footer_bottom}>
        <Square
          style={{
            width: '30px',
            height: '30px',
          }}
          className={styles.dot_left}
        />
        <Footer />
        <Square
          style={{
            width: '30px',
            height: '30px',
          }}
          className={styles.dot_right}
        />
      </div>
      <SideLineCover
        style={{
          position: 'absolute',
          bottom: '-10px',
          left: '10px',
        }}
        className={styles.cover_side_line_left}
      />
      <SideLineCover
        style={{
          position: 'absolute',
          bottom: '-10px',
          right: '10px',
        }}
        className={styles.cover_side_line_right}
      />
    </div>
  );
};

export default SmallMediaFooter;
