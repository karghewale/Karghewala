import styles from './index.module.css'
import image from './image.png'
import data from '../../../../data/training.json'

export const Landing = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Content}>
        <div>
          <h3>{data.landing.title["1"]}</h3>
          <h2>{data.landing.title["2"]}</h2>
        </div>
        <p>
          {data.landing.description}
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