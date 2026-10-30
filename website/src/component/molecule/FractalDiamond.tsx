import styles from './FractalDiamond.module.css';

const phases = [
  { title: '見つける', label: 'DISCOVER' },
  { title: '深ぼる', label: 'DEFINE' },
  { title: '解を出す', label: 'DEVELOP' },
  { title: '実装する', label: 'DELIVER' },
] as const;

const FractalDiamond: React.FC = () => {
  return (
    <div className={styles.framework}>
      <div className={styles.spaceLabels_up} aria-hidden="true">
        <span>PROBLEM SPACE</span>
        <span>SOLUTION SPACE</span>
      </div>

      <svg
        viewBox="0 0 468 150"
        role="img"
        className={styles.diamonds}
        aria-label="プロジェクト全体のダブルダイヤモンドと、各工程の中にあるダブルダイヤモンド"
      >
        <defs>
          <linearGradient id="small" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-neutral-0)" />
            <stop offset="49.6%" stopColor="var(--color-neutral-0)" />
            <stop offset="50%" stopColor="var(--color-mint-50)" />
            <stop offset="50.5%" stopColor="var(--color-mint-50)" />
            <stop offset="50.9%" stopColor="var(--color-neutral-80)" />
            <stop offset="100%" stopColor="var(--color-neutral-80)" />
          </linearGradient>

          <linearGradient id="big" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-neutral-90)" />
            <stop offset="50%" stopColor="var(--color-neutral-90)" />
            <stop offset="50.1%" stopColor="var(--color-neutral-95)" />
            <stop offset="100%" stopColor="var(--color-neutral-95)" />
          </linearGradient>
        </defs>

        {[phases.slice(0, 2), phases.slice(2, 4)].map(
          (diamondPhases, diamondIndex) => (
            <g
              className={styles.big_diamond}
              transform={`translate(${diamondIndex * 210}, 0)`}
              key={diamondIndex}
            >
              <polygon
                points="130,0 235,75 130,150 25,75"
                className={styles.background_diamond}
              />

              <polyline
                points="130,0 235,75 130,150 25,75 130,0"
                className={styles.background_diamond_line}
              />

              {diamondPhases.map((phase, Index) => (
                <g
                  key={Index}
                  transform={`translate(${Index * 56}, ${Index * 35 + diamondIndex * 3})`}
                >
                  <polygon
                    points="97.5,65 105.5,73 97.5,81 89.5,73"
                    className={styles.inner_diamond}
                  />
                  <polygon
                    points="113.5,65 121.5,73 113.5,81 105.5,73"
                    className={styles.inner_diamond}
                  />
                </g>
              ))}
            </g>
          ),
        )}
      </svg>

      <div className={styles.diamond_contents}>
        {[phases.slice(0, 2), phases.slice(2, 4)].map(
          (diamondPhases, diamondIndex) => (
            <div className={styles.big_diamond_contents} key={diamondIndex}>
              {diamondPhases.map((phase, Index) => (
                <div
                  className={`${styles.diamond_contents} ${styles[`diamond_contents_${phase.label}`]}`}
                  key={Index}
                >
                  <div className={styles.contents_title}>{phase.title}</div>
                  <div className={styles.contents_label}>{phase.label}</div>
                </div>
              ))}
            </div>
          ),
        )}
      </div>

      <div className={styles.spaceLabels_bottom} aria-hidden="true">
        <span>PROJECT / MACRO</span>
        <span>PHASE / FRACTAL DIAMOND</span>
      </div>

      <div className={styles.caption}>
        AccelHackの課題解決フレームワーク「フラクタルダイヤモンド」。
        <br />
        「見つける・深ぼる」で課題を定め、「解を出す・実装する」で形にします。
      </div>
    </div>
  );
};

export default FractalDiamond;
