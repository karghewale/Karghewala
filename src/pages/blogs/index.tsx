import { deleteBlogs, getBlogs } from "./Api";
import styles from "./index.module.css";
import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

type Props = {};

export const Blogs = (_props: Props) => {
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

  // const navigate = useNavigate();

  const detailBlogs = (_id: any) => {
    // navigate(`/detailedblog/${id}`);
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
      <div className={styles.HeaderWrapper}>
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
                    onClick={() => detailBlogs(id)}
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
                    <div onClick={() => detailBlogs(id)}>
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
              ({
                id,
                image,
                author,
                dateofblog,
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
                    editable={false}
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

interface IndividualBlogContainerProps {
  id: string;
  image: string;
  title: string;
  author: string;
  description: string;
  dateofblog: string;
  category: string;
  editable: boolean;
}

export const IndividualBlogContainer = ({
  id,
  title,
  image,
  category,
  dateofblog,
  author,
  description,
  editable,
}: IndividualBlogContainerProps) => {
  // const navigate = useNavigate();
  const detailBlogs = (id: any) => {
    console.log(id);
    // navigate(`/detailedblog/${id}`);
    window.location.reload();
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
  const formattedDate = formatDate(dateofblog);

  const handleFetchDetails = async () => {
    try {
      const response = await deleteBlogs(id);
      if (response) {
        console.log(response);
      }
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.outerIndividualBlog}>
      {editable ? (
        <div className={styles.editable}>
          <button>
            <FaEdit />
          </button>
          <button onClick={handleFetchDetails}>
            <MdDelete />
          </button>
        </div>
      ) : (
        ""
      )}
      <div className={styles.individualBlogDiv} onClick={() => detailBlogs(id)}>
        <img src={image} alt="" />
        <p className={styles.author}>
          {author} • {formattedDate}
        </p>
        <h3>{title}</h3>
        <p>
          {description.length > 200
            ? `${description.slice(0, 200)}...`
            : description}
        </p>
        <CategoryDivContainer category={category} />
      </div>
    </div>
  );
};

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
