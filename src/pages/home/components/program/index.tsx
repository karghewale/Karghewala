import styles from './index.module.css'
import image from './image.png'
import component from "/assets/sidePlacedComponent.png";

type Props = {}

export const Program = (_props: Props) => {
  return (
    <div className={styles.Wrapper}>
      <h2>PROGRAM INTRO</h2>
      <img className={styles.inhouse} src={image} alt="" />
      <p>
        A six-month free training program focusing on developing their skills as
        creative entrepreneurs followed by a 3-year incubation period. Our goal
        is to assist artisans by establishing market connections and giving them
        rightful credit for their unique designs, helping them establish their
        own distinct design and brand identity. Design and Management programs
        can be chosen ndependently based on the requirements of the artisan
        trainees.
      </p>
      <img className={styles.component} src={component} alt="" />
      <img className={styles.component2} src={component} alt="" />
    </div>
  );
}