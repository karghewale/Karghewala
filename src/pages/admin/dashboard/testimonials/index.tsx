import styles from './index.module.css'
import fav from "/Fav.jpg";
type Props = {}

type Testimonial = {
  quote: string;
  name: string;
  age: string;
  month: string;
  avgsale: string;
  imageSrc: string;
};

export const Testimonialsdmin = (_props: Props) => {
    const testimonials: Testimonial[] = [
      {
        quote:
          "“Earlier we did not encourage people to work in this sector because the money was very less. But now due to training and support from Karghewale our earnings increased.”",
        name: "Shanawaj Khan",
        age: "26",
        month: " 26,000",
        avgsale: "70,000",
        imageSrc:
          "https://burst.shopifycdn.com/photos/two-tone-ink-cloud.jpg?width=1000&format=pjpg&exif=0&iptc=0",
      },
      {
        quote:
          "“Earlier we did not encourage people to work in this sector because the money was very less. But now due to training and support from Karghewale our earnings increased.”",
        name: "Shanawaj Khan",
        age: "26",
        month: " 26,000",
        avgsale: "70,000",
        imageSrc:
          "https://burst.shopifycdn.com/photos/two-tone-ink-cloud.jpg?width=1000&format=pjpg&exif=0&iptc=0",
      },
      {
        quote:
          "“Earlier we did not encourage people to work in this sector because the money was very less. But now due to training and support from Karghewale our earnings increased.”",
        name: "Shanawaj Khan",
        age: "26",
        month: " 26,000",
        avgsale: "70,000",
        imageSrc:
          "https://burst.shopifycdn.com/photos/two-tone-ink-cloud.jpg?width=1000&format=pjpg&exif=0&iptc=0",
      },
    ];
  return (
    <div className={styles.Wrapper}>
      <h2>TESTIMONIALS</h2>
      <div className={styles.swiper}>
        {testimonials.map((testimonial, index) => (
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