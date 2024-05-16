import { getBlogs } from "./Api";
import styles from "./index.module.css";
import { useState, useEffect } from "react";
import { HeaderComponent } from "../../components/headerComponent";
import { IndividualBlogContainer } from "./components/blogCards";
import { CategoryDivContainer } from "./components/categoryConatiner";


export const Blogs = () => {
  const [data, setData] = useState<any[]>([]);
  const [count, setCount] = useState(6);

  const handleFetchDetails = async () => {
    try {
      const response = await getBlogs();
      if (response) {
        setData(response);
        console.log(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleFetchDetails();
  }, []);


  const handleCount = () => {
    setCount(count + 3);
  };
  const handleCountBack = () => {
    setCount(6);
  };

  const formatDate = (inputDate: string | number | Date) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "2-digit",
    };
    const formattedDate = new Date(inputDate).toLocaleDateString(
      "en-US",
      options
    );
    return formattedDate;
  };
  return (
    <div className={styles.Wrapper}>
      <HeaderComponent colors="#FEE6E9" />
      <div className={styles.HeaderWrapper}>
        <div className={styles.blogpageheading}>
          <h3>BLOGS</h3>
          <p>
            A <span className="colorText">“</span>
            <span style={{ color: "#790416" }}>coming-of-age</span>
            <span className="colorText">”</span> story, where our weaver
            artisans dream of overcoming neatly stacked odds to realize their
            potential as
            <span style={{ color: "#790416" }}>&nbsp;proud ambassadors</span> of
            the Indian handloom weaving tradition :)
          </p>
        </div>
        <div className={styles.topBlogs}>
          {[...data]
            .slice(0, 1)
            .map(
              ({
                id,
                image,
                author,
                dateofblog,
                title,
                description,
                category,
              }) => {
                const formattedDate = formatDate(dateofblog);
                return (
                  <div
                    className={styles.mainblog}
                    onClick={() => console.log(id)}
                  >
                    <img src={image} alt="" />
                    <p className={styles.author}>
                      {author} • {formattedDate}
                    </p>
                    <h3>{title}</h3>
                    <p>
                      {description.length > 150
                        ? `${description.slice(0, 150)}...`
                        : description}
                    </p>
                    <CategoryDivContainer category={category} />
                  </div>
                );
              }
            )}
          <div className={styles.rightDiv}>
            {[...data]
              .slice(1, 3)
              .map(
                ({
                  id,
                  image,
                  author,
                  dateofblog,
                  title,
                  description,
                  category,
                }) => {
                  const formattedDate = formatDate(dateofblog);
                  return (
                    <div onClick={() => console.log(id)}>
                      <img src={image} alt="" />
                      <div>
                        <p className={styles.author}>
                          {author} • {formattedDate}
                        </p>
                        <h3>{title}</h3>
                        <p>
                          {description.length > 100
                            ? `${description.slice(0, 100)}...`
                            : description}
                        </p>
                        <CategoryDivContainer category={category} />
                      </div>
                    </div>
                  );
                }
              )}
          </div>
        </div>
      </div>
      <div className={styles.allBlogs}>
        <h1>All Blogs</h1>
        <div className={styles.blogWrapper}>
          {[...data]
            .reverse()
            .slice(0, count)
            .map(
              (item, index) => {
                return (
                  <IndividualBlogContainer
                    item={item}
                    editable={false}
                    key={index}
                  />
                );
              }
            )}
        </div>
        {count >= data.length ? (
          <button onClick={handleCountBack}>Show Less</button>
        ) : (
          <button onClick={handleCount}>View More</button>
        )}
      </div>
    </div>
  );
};