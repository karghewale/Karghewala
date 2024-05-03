import { HeaderComponent } from "../../components/headerComponent";
import styles from "./index.module.css";
import g1 from "./assets/g1.png";
import g2 from "./assets/g2.png";
import g3 from "./assets/g3.png";
import g4 from "./assets/g4.png";
import g5 from "./assets/g5.png";
import g6 from "./assets/g6.png";
import g7 from "./assets/g7.png";
import g8 from "./assets/g8.png";
import g9 from "./assets/g9.png";
import g10 from "./assets/g10.png";
import g11 from "./assets/g11.png";
import g12 from "./assets/g12.png";
type Props = {};

export const Gallery = (_props: Props) => {
  const data = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12];
  return (
    <div className={styles.Wrapper}>
      <HeaderComponent colors="#FEE6E9" />
      <div className={styles.Header}>
        <button>Filter</button>

        <h3>GALLERY</h3>
        <button>Filter</button>
      </div>
      <div className={styles.content}>
        <img src={g1} alt="" />
        <div className={styles.group_1}>
          <img src={g2} alt="" />
          <img src={g3} alt="" />
          <img src={g4} alt="" />
        </div>
        <div className={styles.group_2}>
          <div >
            <img src={g5} alt="" />
            <img src={g6} alt="" />
          </div>
          <img src={g7} alt="" />
        </div>
        <div className={styles.group_3}>
          <img src={g8} alt="" />
          <div >
            <img src={g9} alt="" />
            <img src={g10} alt="" />
            <img src={g11} alt="" />
            <img src={g12} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
