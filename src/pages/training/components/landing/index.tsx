import styles from './index.module.css'
import image from './image.png'
type Props = {}

export const Landing = (_props: Props) => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Content}>
        <div>
          <h3>Welcome to</h3>
          <h2>Karghewale Karuka Foundation's Artisan Training Program</h2>
        </div>
        <p>
          At Karghewale Karuka Foundation, we are committed to empowering
          artisans to thrive in today's competitive market by providing
          comprehensive training and support. Our training program is designed
          to nurture the creative talents of artisans and equip them with the
          necessary skills to succeed as entrepreneurs.
        </p>
        <button>Apply For Program</button>
      </div>
      <div className={styles.imageWrap}>
        <div></div>
        <img src={image} alt="" />
      </div>
    </div>
  );
}