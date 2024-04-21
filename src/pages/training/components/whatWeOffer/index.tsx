import { CardComponent } from "../../../../components/contentCard";
import {
  Empowerment,
  Ethical,
  Market,
  SixMonth,
  TandM,
  ThreeYr,
} from "./assets/svg";
import styles from "./index.module.css";
import graph from "./assets/graph.png";

type Props = {};

export const WhatWeOffer = (_props: Props) => {
  const data = [
    {
      icon: <SixMonth />,
      title: "Six-Month Free Training Program",
      para: "Our immersive training program spans six months & focuses on honing your skills as a creative entrepreneur. Led by industry experts, you will receive personalized guidance and hands-on experience to elevate your craft to new heights.",
    },
    {
      icon: <TandM />,
      title: "Tailored Design & Management Courses",
      para: "Choose from a range of design and management courses tailored to your specific needs and interests. Our flexible curriculum allows you to customize your learning experience & focus on areas that will benefit your creative journey the most.",
    },
    {
      icon: <ThreeYr />,
      title: "Three-Year Incubation Period",
      para: "Following the training program, artisans have the opportunity to participate in our three-year incubation period. During this time, we provide ongoing mentorship, networking opportunities, and access to resources to help you launch & grow your business successfully.",
    },
  ];
  const dataset = [
    {
      icon: <Market />,
      title: "Market Connections",
      para: "We understand the importance of establishing market connections in the creative industry. Through our extensive network of partners and collaborators, we help artisans showcase their work to a global audience and connect with potential buyers and retailers.",
    },
    {
      icon: <Empowerment />,
      title: "Empowerment and Recognition",
      para: "We believe in giving artisans the recognition they deserve for their unique designs and cultural heritage. Our program is designed to empower artisans to take ownership of their creativity and establish their own distinct design and brand identity.",
    },
    {
      icon: <Ethical />,
      title: "Ethical and Sustainable Practices",
      para: "At Karghewale Karuka Foundation, we are committed to promoting ethical & sustainable practices in the creative industry. We prioritize fair trade principles, environmental stewardship, & social responsibility, ensuring that artisans  & their communities thrive in a responsible manner.",
    },
  ];
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
      <div className={styles.Content}>
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
      </div>
      <div className={styles.bottomset}>
        <p>
          Have an Queries?&nbsp;<a href="">Contact Us</a>
        </p>
      </div>
    </div>
  );
};
