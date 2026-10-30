import styles from './OurMessageArticle.module.css';
import MemberIshikawa from '@/asset/img/about/member_ishikawa.jpg';
import MemberKawamura from '@/asset/img/about/member_kawamura.jpg';
import Image from 'next/image';

const portraitItems = [
  {
    role: '代表取締役',
    name: '石川 貴大',
    photo: MemberIshikawa,
  },
  {
    role: '代表取締役',
    name: '河村 京介',
    photo: MemberKawamura,
  },
];

const OurMessageArticle: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.section_head}>
        <div className={styles.section_head_index}>02 / Our Message</div>
        <div className={styles.section_head_title}>代表の挨拶</div>
      </div>
      <div className={styles.contents}>
        <div className={styles.left}>
          <div className={styles.contents_title}>
            問いを持ち、
            <br />
            ともにつくる仲間へ。
          </div>
          <div className={styles.contents_message}>
            <div className={styles.message_paragraph}>
              私たちが大切にしているのは、技術を使って誰かの困りごとを解決すること
              です。何をつくるべきかを考え、相手の声に耳を傾け、よりよい答えを探し
              ていきたいと考えています。
            </div>
            <>
              自分の考えを持ちながら、違う意見にも向き合える。そんな方と一緒に働き
              たいと思っています。まずは、これまでの経験やこれから挑戦したいことを
              聞かせてください。
            </>
          </div>
        </div>
        <div className={styles.right}>
          {portraitItems.map((item, i) => (
            <div className={`${styles[`container_${i}`]}`} key={i}>
              <div className={styles.imageWrapper}>
                <Image
                  src={item.photo}
                  alt={item.name}
                  fill
                  className={styles.image}
                />
              </div>
              <div className={styles.title}>
                <div className={styles.role}>{item.role}</div>
                <div className={styles.name}>{item.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurMessageArticle;
