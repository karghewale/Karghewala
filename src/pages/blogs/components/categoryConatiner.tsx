import styles from '../index.module.css'

interface CategoryDivContainerProps {
  category: string;
}

export const CategoryDivContainer = ({
  category,
}: CategoryDivContainerProps) => {
  return (
    <div className={styles.categoryDiv}>
      {category.split(",").map((cat: string) => {
        const normalizedCat = cat.trim().replace(/\s+/g, "");

        const className =
          styles[normalizedCat.toLowerCase()] || styles.defaultCategory;

        return (
          <p className={`${styles.contentCategory} ${className}`}>
            {cat.trim()}
          </p>
        );
      })}
    </div>
  );
};
