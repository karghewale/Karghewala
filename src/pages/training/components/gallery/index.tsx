import Marquee from 'react-fast-marquee';
import styles from './index.module.css'

type Props = {}
import m1 from "./assets/g1.png";
import m2 from "./assets/g2.png";
import m3 from "./assets/g3.png";
import m4 from "./assets/g4.png";
import m5 from "./assets/g5.png";
import m6 from "./assets/g6.png";

const images = [m1, m2, m3, m4, m5, m6];

export const Gallery = (_props: Props) => {
      const marqParams = {
        autoFill: true,
        pauseOnHover: true,
        gradient: false,
        speed: 30,
        drag: true,
      };
  return (
    <div className={styles.Wrapper}>
      <h2>Gallery</h2>
      <div className={styles.ImageWrapper}>
        <Marquee {...marqParams} style={{ width: "100vw" }}>
          {images.map((image, index) => (
            <div key={index} className={styles.individual}>
              <img src={image} alt="company logo" loading="lazy" />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}