import styles from "./marquee.module.css";
import Marquee from "react-fast-marquee";
import m1 from "../assets/s1.png";
import m2 from "../assets/s2.png";
import m3 from "../assets/s3.png";
import m4 from "../assets/s4.png";
import m5 from "../assets/s5.png";
import m6 from "../assets/s6.png";

const images = [m1, m2, m3, m4, m5, m6];

export const Marquees = () => {
  const marqParams = {
    autoFill: true,
    pauseOnHover: true,
    gradient: false,
    speed: 30,
    drag: true,
  };

  return (
    <div className={styles.Wraapper}>
      <div className={styles.ImageWrapper}>
        <Marquee {...marqParams} style={{ width: "100vw" }}>
          {images.map((image, index) => (
            <div key={index} className={styles.individual}>
              <img src={image} alt="company logo" loading="lazy" />
            </div>
          ))}
        </Marquee>
      </div>
      <div className={styles.bgcolorrline}></div>
    </div>
  );
};
