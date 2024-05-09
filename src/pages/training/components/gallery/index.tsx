import Marquee from "react-fast-marquee";
import styles from "./index.module.css";

type Props = {};

import { useEffect, useState } from "react";
import { getGallery } from "../../../admin/api";


export const Gallery = (_props: Props) => {
  const marqParams = {
    autoFill: true,
    pauseOnHover: true,
    gradient: false,
    speed: 30,
    drag: true,
  };
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    const handleFetchDetails = async () => {
      try {
        const response = await getGallery();
        if (response) {
          const newData = response.map((item) => item.image);
          const uniqueData = [...new Set([...data, ...newData])]; // Concatenate and remove duplicates
          setData(uniqueData);
        }
      } catch (error) {
        console.log(error);
      }
    };
    handleFetchDetails();
  }, []);

  return (
    <div className={styles.Wrapper}>
      <h2>Gallery</h2>
      <div className={styles.ImageWrapper}>
        <Marquee {...marqParams} style={{ width: "100vw" }}>
          {data.map((image, index) => (
            <div key={index} className={styles.individual}>
              <div className={styles.mask}></div>
              <img src={image} alt="company logo" loading="lazy" />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};
