import { useEffect, useState } from "react";
import styles from "./index.module.css";
import fav from "/Fav.jpg";
import { getTestimonial, insertTestimonials } from "../../api";
type Props = {};

interface Testimonial {
  quote: string;
  name: string;
  age: string;
  month: string;
  avgsale: string;
  imageSrc: string;
}

export const Testimonialsdmin = (_props: Props) => {
  const [data, setData] = useState<any[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState<Testimonial>({
    quote: "",
    name: "",
    age: "",
    month: "",
    avgsale: "",
    imageSrc: "",
  });
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
    console.log(showAddForm);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await insertTestimonials(formData);
      if (response) {
        console.log(response);
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
    }
    setShowAddForm(false);
  };

  return (
    <div className={styles.Wrapper}>
      <button onClick={() => setShowAddForm(true)}>Add Testimonial</button>
      <h2>TESTIMONIALS</h2>
      <div className={styles.swiper}>
        {data.map((testimonial, index) => (
          <div key={index} className={styles.swiperSlider}>
            <div>
              <button>Edit</button>
              <button>Delete</button>
            </div>
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
      {showAddForm && (
        <div className={styles.popupmodal}>
          <div
            onClick={() => setShowAddForm(false)}
            className={styles.back}
          ></div>
          <div className={styles.content}>
            <button
              onClick={() => setShowAddForm(false)}
              className={styles.closebtn}
            >
              X
            </button>
            <form onSubmit={handleSubmit}>
              {Object.entries(formData).map(([key, value]) => (
                <label key={key}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}:
                  <input
                    type="text"
                    name={key}
                    value={value}
                    onChange={handleInputChange}
                  />
                </label>
              ))}
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
