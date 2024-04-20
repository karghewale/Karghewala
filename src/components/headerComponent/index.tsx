import styles from "./index.module.css";

type Props = {
  colors?: string;
};

export const HeaderComponent = (_props: Props) => {
  return <span className={styles.Wrapper}>KARGHEWALE</span>;
};
