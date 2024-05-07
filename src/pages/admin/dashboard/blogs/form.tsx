import { useState, ChangeEvent } from "react";
import styles from "../Form.module.css";
import { insertBlogs } from "../Apis";
type Props = {
  showAddForm: boolean;
};

export const Form = ({ showAddForm }: Props) => {
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
  const [insertdata, setInsertData] = useState<any[]>([]);

  const [formData, setFormData] = useState({
    title: "",
    image: "",
    author: "",
    dateofblog: "",
    extra_images: "",
    description: "",
    categories: "",
  });
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
      const updatedCategories = prevData.categories.includes(category)
        ? prevData.categories
            .split(", ")
            .filter((c) => c !== category)
            .join(", ")
        : prevData.categories
        ? `${prevData.categories}, ${category}`
        : category;
      return {
        ...prevData,
        categories: updatedCategories,
      };
    });
  };

  const handleAddFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log(formData);
    setFormData({
      title: "",
      image: "",
      author: "",
      extra_images: "",
      dateofblog: "",
      description: "",
      categories: "",
    });
    try {
      const response = await insertBlogs(formData);
      if (response) {
        setInsertData(response);
        console.log(insertdata);
      }
    } catch (error) {
      console.log(error);
    }
    showAddForm = false;
    window.location.reload();
  };

  const handleAddButtonClick = () => {
    showAddForm = false;
    console.log(showAddForm);
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
                      checked={formData.categories.includes(name)}
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
