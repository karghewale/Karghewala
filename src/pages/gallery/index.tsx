import { HeaderComponent } from "../../components/headerComponent";
import styles from "./index.module.css";

import { BsFilterRight } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useState } from "react";
import { getGallery } from "../admin/api";

type Props = {};

export const Gallery = (_props: Props) => {
  const [data, setData] = useState<any[]>([]);

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

  useEffect(() => {
    handleFetchDetails();
  }, []);
  const [showAll, setShowAll] = useState(0);
  const setsOfImages = chunkArray(data, 12);

  function chunkArray(array: any, size: number) {
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
      {image?.[0] && <img src={image[0]} alt="" />}
      <div className={styles.group_1}>
        {image?.[1] && <img src={image[1]} alt="" />}
        {image?.[2] && <img src={image[2]} alt="" />}
        {image?.[3] && <img src={image[3]} alt="" />}
      </div>
      <div className={styles.group_2}>
        <div>
          {image?.[4] && <img src={image[4]} alt="" />}
          {image?.[5] && <img src={image[5]} alt="" />}
        </div>
        {image?.[6] && <img src={image[6]} alt="" />}
      </div>
      <div className={styles.group_3}>
        {image?.[7] && <img src={image[7]} alt="" />}

        <div>
          {image?.[8] && <img src={image[8]} alt="" />}
          {image?.[9] && <img src={image[9]} alt="" />}
          {image?.[10] && <img src={image[10]} alt="" />}
          {image?.[11] && <img src={image[11]} alt="" />}
        </div>
      </div>
    </div>
  ));

export default Gallery;
