import styles from "./index.module.css";
import q1 from "./assets/q1.png";
import q2 from "./assets/q2.png";
import q3 from "./assets/q3.png";
import q4 from "./assets/q4.png";

export const QuickLinks = () => {
  const links = [
    { src: q1, label: "Apply" },
    { src: q2, label: "DONATE" },
    { src: q3, label: "COLLABORATE" },
    { src: q4, label: "BUY" },
  ];

  return (
    <div className={styles.Wrapper}>
      <h2>Quick Links</h2>
      <div>
        {links.map(({ src, label }, index) => (
          <a key={index} href="">
            <img src={src} alt={label} />
            <h3>{label}</h3>
          </a>
        ))}
      </div>
    </div>
  );
};
