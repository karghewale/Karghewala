import { LinkedInIcon } from "./assets/svg";
import { DataTeam } from "./data";
import styles from "./index.module.css";

export const Team = () => {
  return (
    <div className={styles.Wrapper}>
      <div>
        <h2>OUR TEAM</h2>
        <div className={styles.Grid}>
          {DataTeam.TEAM.map((member) => (
            <TeamCard
              key={member.id}
              name={member.name}
              designation={member.designation}
              linkedin={member.linkedin}
              image={member.image}
            />
          ))}
        </div>
      </div>
      <div>
        <h2>OUR ADVISORS</h2>
        <div className={styles.Grid}>
          {DataTeam.ADVISORS.map((advisor) => (
            <TeamCard
              key={advisor.id}
              name={advisor.name}
              designation={advisor.designation}
              linkedin={advisor.linkedin}
              image={advisor.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

interface TeamCardProps {
  name: string;
  designation: string;
  linkedin: string;
  image: string;
}
const TeamCard = ({ name, designation, linkedin, image }: TeamCardProps) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.image} />
      <div className={styles.details}>
        <div>
          {" "}
          <h3>{name}</h3>
          <p>{designation}</p>
        </div>
        <a
          href={`https://www.linkedin.com/in/${linkedin}`}
          className={styles.linkedinLink}
        >
          <LinkedInIcon />
        </a>
      </div>
    </div>
  );
};
