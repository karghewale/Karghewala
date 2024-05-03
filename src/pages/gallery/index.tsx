import { HeaderComponent } from "../../components/headerComponent";
import styles from "./index.module.css";
import g1 from "./assets/g1.png";
import g2 from "./assets/g2.png";
import g3 from "./assets/g3.png";
import g4 from "./assets/g4.png";
import g5 from "./assets/g5.png";
import g6 from "./assets/g6.png";
import g7 from "./assets/g7.png";
import g8 from "./assets/g8.png";
import g9 from "./assets/g9.png";
import g10 from "./assets/g10.png";
import g11 from "./assets/g11.png";
import g12 from "./assets/g12.png";
import { BsFilterRight } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

type Props = {};

export const Gallery = (_props: Props) => {
  const data = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12];
  const [showAll, setShowAll] = useState(0);
  const setsOfImages = chunkArray(data, 12);

  function chunkArray(array: string[], size: number) {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  }

  const handleViewMore = () => {
    setShowAll(showAll + 1);
  };

  const handleShowLess = () => {
    setShowAll(showAll - 1);
  };

  return (
    <div className={styles.Wrapper}>
      <HeaderComponent colors="#FEE6E9" />
      <div className={styles.Header}>
        <button>Filter</button>
        <h3>GALLERY</h3>
        <button>
          <BsFilterRight /> Filter <IoIosArrowDown />
        </button>
      </div>

      <ImageSetComponent imageSet={setsOfImages} />
      {setsOfImages.length > 1 && (
        <div>
          {showAll ? (
            <button className={styles.view} onClick={handleShowLess}>
              Show Less
            </button>
          ) : (
            <button className={styles.view} onClick={handleViewMore}>
              View More
            </button>
          )}
        </div>
      )}
    </div>
  );
};

type ImageSetProps = {
  imageSet: any[];
  value?: number;
};

const ImageSetComponent = ({ imageSet }: ImageSetProps) =>
  imageSet.map((image: string | undefined, index: any) => (
    <div className={styles.content} key={index}>
      <img src={image?.[0]} alt="" />
      <div className={styles.group_1}>
        <img src={image?.[1]} alt="" />
        <img src={image?.[2]} alt="" />
        <img src={image?.[3]} alt="" />
      </div>
      <div className={styles.group_2}>
        <div>
          <img src={image?.[4]} alt="" />
          <img src={image?.[5]} alt="" />
        </div>
        <img src={image?.[6]} alt="" />
      </div>
      <div className={styles.group_3}>
        <img src={image?.[7]} alt="" />
        <div>
          <img src={image?.[8]} alt="" />
          <img src={image?.[9]} alt="" />
          <img src={image?.[10]} alt="" />
          <img src={image?.[11]} alt="" />
        </div>
      </div>
    </div>
  ));

export default Gallery;
