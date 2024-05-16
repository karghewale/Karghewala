import { useState, useEffect } from "react";
import styles from "../Dashboard.module.css";
import { Form } from "./form";
import { supabase } from "../../../../utils/supabase";
import toast from "react-hot-toast";
import { IndividualBlogContainer } from "../../../blogs/components/blogCards";
import { useBlogStore } from "../../services/stores/blogStore";

export const Blogs = () => {
  const [data, setData] = useState<BlogPost[]>([]);
  const [count, setCount] = useState(6);
  const isModalOpen = useBlogStore((state) => state.isModalOpen);
  const setIsModalOpen = useBlogStore((state) => state.setIsModalOpen);
  const setItem = useBlogStore((state) => state.setItem);
  const setIsEdit = useBlogStore((state) => state.setIsEdit);

  const handleFetchDetails = async () => {
    let { data: blogs, error } = await supabase.from("blogs").select("*");
    if (error) {
      toast.error(error.message);
      throw error;
    } else {
      setData(blogs as BlogPost[]);
      return blogs;
    }
  };

  useEffect(() => {
    handleFetchDetails();
  }, []);

  return (
    <div className={styles.allBlogs}>
      <div className={styles.header}>
        <h1>All Blogs</h1>
        <button
          onClick={() => {
            setIsModalOpen(!isModalOpen);
            setItem({
              id: "",
              title: "",
              description: "",
              category: "",
              dateofblog: "",
              image: "",
              author: "",
              extra_images: "",
            });
            setIsEdit(false);
          }}
        >
          Add
        </button>
      </div>

      <div className={styles.blogWrapper}>
        {[...data]
          .reverse()
          .slice(0, count)
          .map((item, index) => {
            return (
              <IndividualBlogContainer
                item={item}
                editable={true}
                key={index}
              />
            );
          })}
      </div>

      {count >= data.length ? (
        <button onClick={() => setCount(6)}>Show Less</button>
      ) : (
        <button onClick={() => setCount(count + 3)}>View More</button>
      )}

      {isModalOpen && <Form />}
    </div>
  );
};
