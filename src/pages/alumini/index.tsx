import { HeaderComponent } from "../../components/headerComponent";
import styles from "./index.module.css";
import a1 from "./assets/a1.png";
import a2 from "./assets/a2.png";
import a3 from "./assets/a3.png";
import a4 from "./assets/a4.png";
import a5 from "./assets/a5.png";

export const Alumini = () => {
  const data = [
    {
      id: 1,
      name: "Kiran",
      salary: "26,000",
      image: a1,
    },
    {
      id: 2,
      name: "Kiran",
      salary: "26,000",
      image: a2,
    },
    {
      id: 3,
      name: "Kiran",
      salary: "26,000",
      image: a3,
    },
    {
      id: 4,
      name: "Kiran",
      salary: "26,000",
      image: a4,
    },
    {
      id: 4,
      name: "Kiran",
      salary: "26,000",
      image: a5,
    },
    {
      id: 1,
      name: "Kiran",
      salary: "26,000",
      image: a1,
    },
    {
      id: 2,
      name: "Kiran",
      salary: "26,000",
      image: a2,
    },
    {
      id: 3,
      name: "Kiran",
      salary: "26,000",
      image: a3,
    },
    {
      id: 4,
      name: "Kiran",
      salary: "26,000",
      image: a4,
    },
    {
      id: 4,
      name: "Kiran",
      salary: "26,000",
      image: a5,
    },
  ];
  return (
    <div className={styles.Wrapper}>
      <HeaderComponent colors="#FEE6E9" />
      <div className={styles.blogpageheading}>
        <h3>ALUMNI</h3>
        <p>
          A <span className="colorText">“</span>
          <span style={{ color: "#790416" }}>coming-of-age</span>
          <span className="colorText">”</span> story, where our weaver artisans
          dream of overcoming neatly stacked odds to realize their potential as
          <span style={{ color: "#790416" }}>&nbsp;proud ambassadors</span> of
          the Indian handloom weaving tradition :)
        </p>
      </div>
      <div className={styles.content}>
        {data.map((item, index) => {
          return (
            <div className={styles.alumini} key={index}>
              <img src={item.image} alt={item.name} />
              <div className={styles.text}>
                <h2>{item.name}</h2>
                <p>₹{item.salary}/month</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
