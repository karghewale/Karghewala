import { useEffect, useState } from 'react';
import styles from './index.module.css'
import fav from "/Fav.jpg";
import { getTestimonial } from '../../api';
type Props = {}

export const Testimonialsdmin = (_props: Props) => {
    const [data, setData] = useState<any[]>([]);
    const handleFetchDetails = async () => {
      try {
        const response = await getTestimonial();
        if (response) {
          setData(response);
        }
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      handleFetchDetails();
    }, []);


  return (
    <div className={styles.Wrapper}>
      <button>Add Testimonial</button>
      <h2>TESTIMONIALS</h2>
      <div className={styles.swiper}>
        {data.map((testimonial, index) => (
          <div key={index} className={styles.swiperSlider}>
            <div className={styles.testimonial}>
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
              <img className={styles.image} src={testimonial.imageSrc} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}