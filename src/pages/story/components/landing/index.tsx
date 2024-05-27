import styles from "./index.module.css";
import contextimg from "./assets/contextimg.png";
import { HeaderComponent } from "../../../../components/headerComponent";
import { Marquees } from "./marquee/marquee";
import data from "../../../../data/story.json";

export const Landing = () => {
  return (
    <div className={styles.Wrapper}>
      <HeaderComponent colors="#FEE6E9" />
      <div className={styles.story}>
        <h3>{data.landing.title}</h3>
        <p>
          {data.landing.description["1"]}
          <span className="colorText">“</span>
          <span style={{ color: "#790416" }}>
            {data.landing.description["2"]}
          </span>
          <span className="colorText">”</span>
          {data.landing.description["3"]}
          <span style={{ color: "#790416" }}>
            {data.landing.description["4"]}
          </span>
          {data.landing.description["5"]}
        </p>
      </div>
      <Marquees />
      <div className={styles.story}>
        <h2>{data.landing.context.title}</h2>
        <p className={styles.paragraph}>
          {data.landing.context.description["1"]}
        </p>
      </div>
      <img src={contextimg} alt="" />
      <p className={styles.paragraph}>
        {data.landing.context.description[2]}
      </p>
    </div>
  );
};
