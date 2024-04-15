import { LinkedInIcon } from "./assets/svg";
import styles from "./index.module.css";


export const Team = () => {
  return <div className={styles.Wrapper}>Team</div>;
};


export const TeamCard = () => {
  return <div className={styles.Wrapper}>
    <img src="" alt="" />
    <div>
      <div>
        <h2>Name Surname</h2>
        <p>Designation</p>
      </div>
      <a href=""><LinkedInIcon /></a>
    </div>
  </div>;
};
