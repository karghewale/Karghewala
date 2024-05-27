import { CardComponent } from "../../../../components/contentCard";
import {
  // Empowerment,
  // Ethical,
  // Market,
  SixMonth,
  TandM,
  ThreeYr,
} from "./assets/svg";
import styles from "./index.module.css";
import graph from "./assets/graph.png";
import data1 from "../../../../data/training.json";

export const WhatWeOffer = () => {
  const data = [
    {
      icon: <SixMonth />,
      title: data1.whatweoffer.programs[0].title,
      para: data1.whatweoffer.programs[0].description,
    },
    {
      icon: <TandM />,
      title: data1.whatweoffer.programs[1].title,
      para: data1.whatweoffer.programs[1].description,
    },
    {
      icon: <ThreeYr />,
      title: data1.whatweoffer.programs[2].title,
      para: data1.whatweoffer.programs[2].description,
    },
  ];
  // const dataset = [
  //   {
  //     icon: <Market />,
  //     title: "Market Connections",
  //     para: "We understand the importance of establishing market connections in the creative industry. Through our extensive network of partners and collaborators, we help artisans showcase their work to a global audience and connect with potential buyers and retailers.",
  //   },
  //   {
  //     icon: <Empowerment />,
  //     title: "Empowerment and Recognition",
  //     para: "We believe in giving artisans the recognition they deserve for their unique designs and cultural heritage. Our program is designed to empower artisans to take ownership of their creativity and establish their own distinct design and brand identity.",
  //   },
  //   {
  //     icon: <Ethical />,
  //     title: "Ethical and Sustainable Practices",
  //     para: "At Karghewale Karuka Foundation, we are committed to promoting ethical & sustainable practices in the creative industry. We prioritize fair trade principles, environmental stewardship, & social responsibility, ensuring that artisans  & their communities thrive in a responsible manner.",
  //   },
  // ];
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Content}>
        <h2>ABOUT PROGRAMS</h2>
        <div className={styles.cards}>
          {data.map((item, index) => (
            <CardComponent
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.para}
            />
          ))}
        </div>
      </div>
      <button className={styles.btncariculam}>VIEW CURRICULUM</button>
      <div className={styles.bar}>
        <div>
          <h3>Karuka Foundation</h3>
          <p>(Non-Profit Entity)</p>
        </div>
        <div>
          <h3>Loomers India Private Limited</h3>
          <p>(Tax Paying Entity)</p>
        </div>
      </div>
      <img src={graph} alt="" />
      {/* <div className={styles.Content}>
        <div className={styles.cards}>
          {dataset.map((item, index) => (
            <CardComponent
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.para}
            />
          ))}
        </div>
      </div> */}
      <div className={styles.bottomset}>
        <p>
          Have an Queries?&nbsp;<a href="">Contact Us</a>
        </p>
      </div>
    </div>
  );
};
