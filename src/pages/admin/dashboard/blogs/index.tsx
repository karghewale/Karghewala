import { useState, useEffect } from "react";
import styles from "../Dashboard.module.css";
import { IndividualBlogContainer } from "../../../blogs";
import { getBlogs } from "../../api";
import { Form } from "./form";

type Props = {};

export const Blogs = (_props: Props) => {
  const [data, setData] = useState<any[]>([]);

  const [showAddForm, setShowAddForm] = useState(false);

  const [count, setCount] = useState(6);

  const handleFetchDetails = async () => {
    try {
      const response = await getBlogs();
      if (response) {
        setData(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleFetchDetails();
  }, []);

  const handleAddButtonClick = () => {
    setShowAddForm(!showAddForm);
  };

  const handleViewMoreClick = () => {
    setCount(count + 3);
  };
  const handleCountBack = () => {
    setCount(6);
  };

  return (
    <div className={styles.allBlogs}>
      <div className={styles.header}>
        <h1>All Blogs</h1>
        <button onClick={handleAddButtonClick}>Add</button>
      </div>

      <div className={styles.blogWrapper}>
        {[...data]
          .reverse()
          .slice(0, count)
          .map(
            ({
              id,
              author,
              dateofblog,
              image,
              title,
              description,
              category,
            }) => {
              return (
                <IndividualBlogContainer
                  id={id}
                  image={image}
                  title={title}
                  author={author}
                  description={description}
                  dateofblog={dateofblog}
                  category={category}
                  editable={true}
                />
              );
            }
          )}
      </div>

      {count >= data.length ? (
        <button onClick={handleCountBack}>Show Less</button>
      ) : (
        <button onClick={handleViewMoreClick}>View More</button>
      )}

      {showAddForm && <Form showAddForm={showAddForm} />}
    </div>
  );
};