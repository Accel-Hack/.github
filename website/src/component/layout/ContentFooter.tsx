import styles from '@/component/layout/ContentFooter.module.css';
import Square from '@/asset/img/top/square.svg';
import FrameBottomLine from '@/asset/img/layout/frame_bottom_line.svg';
import FrameCornerTriangle from '@/asset/img/layout/frame_corner_triangle.svg';
import SideLineCover from '@/asset/img/layout/side_line_cover.svg';

const ContentFooter: React.FC = () => {
  return (
    <div className={styles.content_footer}>
      <div className={styles.dot_container}>
        <Square
          style={{
            width: '29.75px',
            height: 'auto',
          }}
          className={styles.dot_middle}
        />
        <Square
          style={{
            width: '29.75px',
            height: 'auto',
          }}
          className={styles.dot_right}
        />
      </div>

      <FrameBottomLine className={styles.frame_bottom_line} />
      <SideLineCover
        style={{
          position: 'absolute',
          bottom: '0',
          left: '18px',
        }}
        className={styles.cover_side_line}
      />
      <SideLineCover
        style={{
          position: 'absolute',
          bottom: '0',
          right: '18px',
        }}
        className={styles.cover_side_line}
      />
      <div className={styles.triangle_container}>
        <FrameCornerTriangle
          style={{
            position: 'absolute',
            top: '7px',
            left: '18px',
            transform: 'rotate(-90deg)',
          }}
          className={styles.triangle}
        />
        <FrameCornerTriangle
          style={{
            position: 'absolute',
            top: '7px',
            right: '18px',
            transform: 'rotate(90deg) scaleX(-1)',
          }}
          className={styles.triangle}
        />
      </div>
    </div>
  );
};

export default ContentFooter;
