import styles from "./index.module.css";

type Props = {
  colors?: string;
};

export const HeaderComponent = (_props: Props) => {
  return (
    <span className={styles.Wrapper} style={{ color: _props.colors }}>
      KARGHEWALE</span>
  );
};
