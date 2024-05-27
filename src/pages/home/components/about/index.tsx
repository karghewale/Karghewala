import styles from "./index.module.css";
import component from "/assets/sidePlacedComponent.png";
import gif from "./gifset.png";
import gif2 from "./gif2.png";
import data from "../../../../data/home.json";

export const About = () => {
  return (
    <div className={styles.Wrapper} id="about">
      <div>
        <h2>{data.about[0].title}</h2>
        <p>{data.about[0].description}</p>
      </div>
      <div>
        <h2>{data.about[1].title}</h2>
        <p>{data.about[1].description}</p>
      </div>{" "}
      <img className={styles.gif} src={gif} alt="" />
      <img className={styles.gif2} src={gif2} alt="" />
      <div>
        <h2>{data.about[2].title}</h2>
        <p>{data.about[2].description}</p>
      </div>
      <img className={styles.component} src={component} alt="" />
    </div>
  );
};
