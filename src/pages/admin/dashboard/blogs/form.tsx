import { useState, ChangeEvent } from "react";
import styles from "../Form.module.css";
import { useBlogStore } from "../../services/stores/blogStore";
import { supabase } from "../../../../utils/supabase";
import toast from "react-hot-toast";

export const Form = () => {
  const datas = [
    {
      name: "News and Updates",
    },
    {
      name: "Events",
    },
    {
      name: "Campus Diaries",
    },
    {
      name: "Insights",
    },
  ];
  const setIsModalOpen = useBlogStore((state) => state.setIsModalOpen);
  const item = useBlogStore((state) => state.item);
  const [formData, setFormData] = useState(item);
  const isEdit = useBlogStore((state) => state.isEdit);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleInputDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Validate and format the date input
    if (name === "dateofblog") {
      const formattedDate = formatToYYYYMMDD(value);
      setFormData((prevData) => ({ ...prevData, [name]: formattedDate }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const formatToYYYYMMDD = (inputDate: string) => {
    const [year, month, day] = inputDate.split("-");
    const formattedDate = `${year}-${month.padStart(2, "0")}-${day.padStart(
      2,
      "0"
    )}`;
    return formattedDate;
  };

  const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCategoryCheckboxChange = (category: string) => {
    setFormData((prevData) => {
      const updatedCategories = prevData.category.includes(category)
        ? prevData.category
            .split(", ")
            .filter((c) => c !== category)
            .join(", ")
        : prevData.category
        ? `${prevData.category}, ${category}`
        : category;
      return {
        ...prevData,
        categories: updatedCategories,
      };
    });
  };

  const handleAddFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isEdit) {
      const newData = {
        title: formData.title,
        author: formData.author,
        dateofblog: formData.dateofblog,
        extra_images: formData.extra_images,
        image: formData.image,
        description: formData.description,
        category: formData.category,
      };
      const { data: blogs, error } = await supabase
        .from("blogs")
        .update(newData)
        .eq("id", formData.id)
        .select();

      if (error) {
        throw error;
      } else {
        toast.success("Blog updated successfully");
        setIsModalOpen(false);
        return blogs;
      }
    } else {
      const newData = {
        title: formData.title,
        author: formData.author,
        dateofblog: formData.dateofblog,
        extra_images: formData.extra_images,
        image: formData.image,
        description: formData.description,
        category: formData.category,
      };
      const { data: blog, error } = await supabase
        .from("blogs")
        .insert([newData])
        .select();
      if (error) {
        throw error;
      } else {
        toast.success("Blog added successfully");
        setIsModalOpen(false);
        return blog;
      }
    }
  };

  const handleAddButtonClick = () => {
    setIsModalOpen(false);
  };
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.addForm}>
        <h2>Add Blog</h2>
        <form onSubmit={handleAddFormSubmit}>
          <div>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Image Link :</label>
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              value={formData.image}
              onChange={handleInputChange}
              required
            />
          </div>{" "}
          <div>
            <label>Author :</label>
            <input
              type="text"
              name="author"
              placeholder="Author"
              value={formData.author}
              onChange={handleInputChange}
              required
            />
          </div>{" "}
          <div>
            <label>Date Of Blog :</label>
            <input
              type="date"
              name="dateofblog"
              placeholder="Date Of Blog"
              value={formData.dateofblog}
              onChange={handleInputDateChange}
              required
            />
          </div>
          <div>
            <label>Description :</label>
            <textarea
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleTextareaChange}
              required
            />
          </div>
          <div>
            <label>Extra Image :</label>
            <textarea
              className={styles.extraimage}
              name="extra_images"
              placeholder="eg:https://iili.io/J7adpyb.png, https://iili.io/J7YbteV.jpg"
              value={formData.extra_images}
              onChange={handleTextareaChange}
            />
          </div>
          <div className={styles.cateoriessection}>
            <label>Categories:</label>{" "}
            <div>
              {datas.map(({ name }) => {
                return (
                  <div className={styles.innercheckbox}>
                    <input
                      type="checkbox"
                      id={name}
                      value={name}
                      checked={formData.category.includes(name)}
                      onChange={() => handleCategoryCheckboxChange(name)}
                    />
                    <label htmlFor={name}>{name}</label>
                  </div>
                );
              })}
            </div>
          </div>
          <span className={styles.buttonWrappers}>
            <button style={{ backgroundColor: "green" }} type="submit">
              Submit
            </button>
            <button
              style={{ backgroundColor: "red" }}
              onClick={handleAddButtonClick}
            >
              Close
            </button>
          </span>
        </form>
      </div>
    </div>
  );
};
