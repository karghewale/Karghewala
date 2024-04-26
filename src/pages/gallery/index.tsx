import { HeaderComponent } from '../../components/headerComponent';
import styles  from './index.module.css'

type Props = {}

export const Gallery = (_props: Props) => {
  return (
    <div className={styles.Wrapper}>
      <HeaderComponent colors="#FEE6E9" />
      <div className={styles.Header}>
        <button>Filter</button>

        <h3>GALLERY</h3>
        <button>Filter</button>
      </div>
    </div>
  );
}