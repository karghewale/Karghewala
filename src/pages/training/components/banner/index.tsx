import styles from './index.module.css'

type Props = {}

export const Banner = (_props: Props) => {
  return (
    <div className={styles.Wrapper}>
      <h3>Join Us Today and Unlock Your Creative Potential!</h3>
      <p>
        Ready to embark on your journey as a creative entrepreneur? Apply now to
        join our artisan training program and take the first step towards
        realizing your dreams.
      </p>
      <button>Apply For Program</button>
    </div>
  );
}