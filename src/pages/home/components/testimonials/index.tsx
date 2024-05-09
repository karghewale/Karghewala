import styles from "./index.module.css";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import slash from "./assets/slash.png";
import fav from "/Fav.jpg";

type Props = {};
import { useEffect, useRef, useState } from "react";
import { getTestimonial } from "../../../admin/api";



export const Testimonial = (_props: Props) => {
  const swiperRef = useRef<SwiperRef>(null);
    const [data, setData] = useState<any[]>([]);
  const slideLeft = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const slideRight = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };
    useEffect(() => {
      const fetchDetails = async () => {
        try {
          const response = await getTestimonial();
          setData(response || []);
        } catch (error) {
          console.error(error);
        }
      };
      fetchDetails();
    }, []);

  return (
    <div className={styles.Wrapper}>
      <h2>TESTIMONIALS</h2>
      <div>
        <div className={styles.basebg}></div>
        <div className={styles.SwiperWrapper}>
          <Swiper
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[Navigation]}
            loop={true}
            className={styles.swiper}
            ref={swiperRef}
          >
            {data.map((testimonial, index) => (
              <SwiperSlide key={index} className={styles.swiperSlider}>
                <div className={styles.testimonial}>
                
                  <img className={styles.slash} src={slash} alt="" />
                  <h3>{testimonial.quote}</h3>
                  <div>
                    <p>
                      <h2>{testimonial.name}</h2>,{testimonial.age}
                    </p>
                    <p>₹ {testimonial.month}/month</p>
                    <p>Avg. sale rate ₹ {testimonial.avgsale}/month</p>
                  </div>
                </div>
                <div className={styles.ImageContainer}>
                  <img className={styles.fav} src={fav} alt="" />
                  <img
                    className={styles.image}
                    src={testimonial.imageSrc}
                    alt=""
                  />
                </div>
              </SwiperSlide>
            ))}{" "}
          </Swiper>{" "}
          <div className="swiper-button-prev" onClick={slideLeft}></div>
          <div className="swiper-button-next" onClick={slideRight}></div>
        </div>
      </div>
    </div>
  );
};
