import styles from '@/component/layout/ContentFooter.module.css';
import Square from '@/asset/img/top/square.svg';
import FrameBottomLine from '@/asset/img/layout/frame_bottom_line.svg';

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
    </div>
  );
};

export default ContentFooter;
