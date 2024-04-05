import { Outlet } from 'react-router-dom';
import { Footer } from '../../components/footer';
import { Navbar } from '../../components/navbar';
import styles from './index.module.css'
type Props = {}

export const Layout = (_props: Props) => {
  return (
    <div className={styles.Wrapper}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}