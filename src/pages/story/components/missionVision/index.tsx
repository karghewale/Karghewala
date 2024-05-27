import { Impact } from "../../../home/components/impact";
import styles from "./index.module.css";
import graph from "./graph.png";
import data from "../../../../data/story.json";

export const MissionVission = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.ToperSection}>
        <div className={styles.Mission}>
          <h2>{data.missionVision.mission.title}</h2>
          <p>
            {data.missionVision.mission.description[1]}{" "}
            <span className="colorText">
              {data.missionVision.mission.description[2]}
            </span>
            {data.missionVision.mission.description[3]}{" "}
            <span className="colorText">
              {data.missionVision.mission.description[4]}
            </span>
            {data.missionVision.mission.description[5]}
          </p>
        </div>
        <Impact />
      </div>

      <div className={styles.Vission}>
        <h2>{data.missionVision.vision.title}</h2>
        <p>
          {data.missionVision.vision.description}
        </p>
      </div>
      <img src={graph} alt="" />
    </div>
  );
};
