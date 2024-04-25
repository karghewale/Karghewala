import { HeaderComponent } from '../../components/headerComponent'
import styles from './index.module.css'

type Props = {}

export const Alumini = (_props: Props) => {
  return (
    <div className={styles.Wrapper}>
      <HeaderComponent colors='#FEE6E9' />
      <div className={styles.blogpageheading}>
        <h3>ALUMNI</h3>
        <p>
          A <span className="colorText">“</span>
          <span style={{ color: "#790416" }}>coming-of-age</span>
          <span className="colorText">”</span> story, where our weaver artisans
          dream of overcoming neatly stacked odds to realize their potential as
          <span style={{ color: "#790416" }}>&nbsp;proud ambassadors</span> of
          the Indian handloom weaving tradition :)
        </p>
      </div>
      
    </div>
  );
}