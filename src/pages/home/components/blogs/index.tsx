import { BlogData } from "./data";
import styles from "./index.module.css";

export const Blogs = (_props: any) => {
  if (!BlogData || !BlogData.length) {
    return <div>No blog data available.</div>;
  }

  return (
    <div className={styles.Wrapper}>
      {BlogData.slice(0, 2).map((item: any) => (
        <div className={styles.blog} key={item.id}>
          <img src={item.image} alt={item.title || "Blog image"} />

          <div className={styles.content}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
