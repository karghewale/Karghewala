import styles from "./index.module.css";
import image from "./image.png";
import component from "/assets/sidePlacedComponent.png";
import data from "../../../../data/home.json";

export const Program = () => {
  return (
    <div className={styles.Wrapper}>
      <h2>{data.program.title}</h2>
      <img className={styles.inhouse} src={image} alt="" />
      <p>{data.program.description}</p>
      <img className={styles.component} src={component} alt="" />
      <img className={styles.component2} src={component} alt="" />
    </div>
  );
};
