import { useState, useEffect } from "react";
import styles from "./index.module.css";
import { Fabric, Revanue, Sales, Supplied } from "./svg";
import component from "/assets/sidePlacedComponent.png";
import mapdesk from './mapdesk.png'
import mapmob from "./mapmob.png";

type Props = {
  limit: number;
  text1: string;
  symbol: string;
  speed: number;
  start?: number;
  svg: JSX.Element; 
  symbol1?: string;
};

export const Impact = (_props: Props) => {
  const data = [
    {
      svg: <Fabric />,
      speed: 10,
      limit: 20000,
      symbol: "",
      start: 19000,
      text1: "Units of fabric sold",
    },
    {
      svg: <Sales />,
      speed: 10,
      limit: 1425,
      symbol: "",
      start: 300,
      text1: "Units of fabric sales/month",
    },
    {
      svg: <Supplied />,
      speed: 20,
      limit: 7,
      symbol: "+",
      start: 0,
      text1: "Countries fabric supplied to",
    },
    {
      svg: <Revanue />,
      speed: 20,
      limit: 7.5,
      symbol1: "₹",
      symbol: "L",
      start: 0,
      text1: "Monthly Revenue Run Rate",
    },
  ];
  return (
    <div className={styles.Wrapper}>
      <h2>Impact</h2>
      <div className={styles.Content}>
        {data.map((data, index) => (
          <CounterComponent
            key={index}
            svg={data.svg}
            limit={data.limit}
            text1={data.text1}
            symbol1={data.symbol1}
            symbol={data.symbol}
            speed={data.speed}
            start={data.start}
          />
        ))}
      </div>
      <img className={styles.component} src={component} alt="" />
      <img className={styles.mapdesk} src={mapdesk} alt="" />
      <img className={styles.mapmob} src={mapmob} alt="" />
    </div>
  );
};

const CounterComponent = ({
  limit,
  text1,
  speed,
  symbol,
  symbol1 = "", 
  start = 0,
  svg,
}: Props) => {
  const [count, setCount] = useState(start);

 useEffect(() => {
   const increment = limit % 1 === 0 ? 1 : 0.1;

   const interval = setInterval(() => {
     setCount((currentCount) => {
       const newCount = currentCount + increment;
       if (newCount < limit) {
         return parseFloat(newCount.toFixed(1)); 
       } else {
         clearInterval(interval);
         return limit; 
       }
     });
   }, speed);

   return () => clearInterval(interval);
 }, [limit, speed, start]);

const formatCount = (count: number) => {
  if (Number.isInteger(count) && count < 10) {
    return `0${count}`;
  }
  return count.toString();
};

  return (
    <div className={styles.CounterComponent}>
      {svg}
      <h1>
        {symbol1}
        {formatCount(count)}
        {symbol}
      </h1>
      <p>{text1}</p>
    </div>
  );
};
