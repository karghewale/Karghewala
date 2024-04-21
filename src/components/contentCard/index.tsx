import React from "react";
import styles from "./index.module.css";

type Props = {
  icon: JSX.Element; // Since icon is a JSX element
  title: string;
  description: string;
};

// Update CardComponent to accept and display the new props
export const CardComponent: React.FC<Props> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        {icon}
        <div className={styles.bg}></div>
      </div>
      <div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};
