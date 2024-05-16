import { FaEdit } from "react-icons/fa";
import { useBlogStore } from "../../admin/services/stores/blogStore";
import { deleteBlogs } from "../Api";
import styles from "../index.module.css";
import { MdDelete } from "react-icons/md";
import { CategoryDivContainer } from "./categoryConatiner";

interface IndividualBlogContainerProps {
  item: BlogPost
  editable: boolean;
}

export const IndividualBlogContainer = ({
  item,
  editable,
}: IndividualBlogContainerProps) => {
  const setItem = useBlogStore((state) => state.setItem);
  const setIsModalOpen = useBlogStore((state) => state.setIsModalOpen);
  const setIsEdit = useBlogStore((state) => state.setIsEdit);

  const detailBlogs = (id: any) => {
    console.log(id);
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
  const formattedDate = formatDate(item.dateofblog);

  const handleFetchDetails = async () => {
    try {
      const response = await deleteBlogs(item.id);
      if (response) {
        console.log(response);
      }
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = () => {
    setItem(item);
    setIsEdit(true);
    setIsModalOpen(true);
  }

  return (
    <div className={styles.outerIndividualBlog}>
      {editable ? (
        <div className={styles.editable}>
          <button onClick={handleEdit}>
            <FaEdit />
          </button>
          <button onClick={handleFetchDetails}>
            <MdDelete />
          </button>
        </div>
      ) : (
        ""
      )}
      <div
        className={styles.individualBlogDiv}
        onClick={() => detailBlogs(item.id)}
      >
        <img src={item.image} alt="" />
        <p className={styles.author}>
          {item.author} • {formattedDate}
        </p>
        <h3>{item.title}</h3>
        <p>
          {item.description.length > 200
            ? `${item.description.slice(0, 200)}...`
            : item.description}
        </p>
        <CategoryDivContainer category={item.category} />
      </div>
    </div>
  );
};
