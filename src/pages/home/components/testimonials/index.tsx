import styles from "./index.module.css";
import { Swiper, SwiperSlide,SwiperRef } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import slash from "./assets/slash.png";
import fav from "/Fav.jpg";

type Props = {};
import deepusnath from "./assets/image.png";
import { useRef } from "react";

type Testimonial = {
  quote: string;
  name: string;
  age: string;
  month: string;
  avgsale: string;
  imageSrc: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "“Earlier we did not encourage people to work in this sector because the money was very less. But now due to training and support from Karghewale our earnings increased.”",
    name: "Shanawaj Khan",
    age: "26",
    month: " 26,000",
    avgsale: "70,000",
    imageSrc: deepusnath,
  },
  {
    quote:
      "“Earlier we did not encourage people to work in this sector because the money was very less. But now due to training and support from Karghewale our earnings increased.”",
    name: "Shanawaj Khan",
    age: "26",
    month: " 26,000",
    avgsale: "70,000",
    imageSrc: deepusnath,
  },
];

export const Testimonial = (_props: Props) => {
  const swiperRef = useRef<SwiperRef>(null);
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
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className={styles.swiperSlider}>
                <div>
                  <h3>{testimonial.quote}</h3>
                  <div>
                    <img src={slash} alt="" />
                    <p>
                      <h2>{testimonial.name}</h2>,{testimonial.age}
                    </p>
                    <p>₹ {testimonial.month}/month</p>
                    <p>Avg. sale rate ₹ {testimonial.avgsale}/month</p>
                  </div>
                </div>
                <div>
                  <img src={fav} alt="" />
                  <img src={testimonial.imageSrc} alt="" />
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
