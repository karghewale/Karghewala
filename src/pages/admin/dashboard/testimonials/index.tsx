import { ChangeEvent, useEffect, useState } from "react";
import styles from "./index.module.css";
import fav from "/Fav.jpg";
import { deleteTestimnonial, getTestimonial, insertTestimonials } from "../../api";
import axios from "axios";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
type Props = {};

interface Testimonial {
  quote: string;
  name: string;
  age: string;
  month: string;
  avgsale: string;
  imageSrc: string;
}

export const Testimonialsdmin = (_props: Props) => {
  const [data, setData] = useState<any[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState<Testimonial>({
    quote: "",
    name: "",
    age: "",
    month: "",
    avgsale: "",
    imageSrc: "",
  });

  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [savedFiles, setSavedFiles] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFiles(Array.from(event.target.files)); // Convert FileList to File array
    }
  };
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await getTestimonial();
        setData(response || []);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDetails();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "imageSrc") {
      setFormData((prev) => ({
        ...prev,
        [name]: savedFiles,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await insertTestimonials(formData);
      if (response) {
        console.log(response);
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
    }
    setShowAddForm(false);
  };

  const handleUpload = async () => {
    setLoading(true); // Set loading to true when upload starts

    const formDatas = new FormData();

    // Append files to formData
    selectedFiles.forEach((file) => {
      formDatas.append("image_file", file, file.name);
    });

    const config = {
      method: "post",
      url: "https://imgtourl2.vercel.app/imagetourl/",
      headers: {
        Accept: "*/*",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      data: formDatas,
      maxBodyLength: Infinity,
    };

    try {
      const response = await axios(config);
      setSavedFiles(response.data.hosted_url);
      console.log(response.data.hosted_url);
      setFormData((prev) => ({
        ...prev,
        ["imageSrc"]: response.data.hosted_url,
      }));
    } catch (error) {
      console.error("Error uploading files:", error);
      alert("Error uploading files");
    } finally {
      setLoading(false);
    }
  };

    const handleDelete = async (value: any) => {
      try {
        await deleteTestimnonial(value);
        const updatedData = data.filter((item) => item.id !== value);
        setData(updatedData);
      } catch (error) {
        console.log(error);
      }
    };
  return (
    <div className={styles.Wrapper}>
      <button onClick={() => setShowAddForm(true)}>Add Testimonial</button>
      <h2>TESTIMONIALS</h2>
      <div className={styles.swiper}>
        {data.map((testimonial, index) => (
          <div key={index} className={styles.swiperSlider}>
            <div className={styles.actionbtn}>
              <button>
                <FaEdit />
              </button>
              <button onClick={() => handleDelete(testimonial.id)}>
                <MdDelete />
              </button>
            </div>
            <div className={styles.testimonial}>
              <h3>{testimonial.quote}</h3>
              <div>
                <p>
                  <h2>{testimonial.name}</h2>,{testimonial.age}
                </p>
                <p>₹ {testimonial.month}/month</p>
                <p>Avg. sale rate ₹ {testimonial.avgsale}/month</p>
              </div>
            </div>
            <div className={styles.ImageContainer}>
              <img className={styles.fav} src={fav} alt="" />
              <img className={styles.image} src={testimonial.imageSrc} alt="" />
            </div>
          </div>
        ))}
      </div>
      {showAddForm && (
        <div className={styles.popupmodal}>
          <div
            onClick={() => setShowAddForm(false)}
            className={styles.back}
          ></div>
          <div className={styles.content}>
            <button
              onClick={() => setShowAddForm(false)}
              className={styles.closebtn}
            >
              X
            </button>
            <form onSubmit={handleSubmit}>
              {Object.entries(formData).map(([key, value]) =>
                key === "imageSrc" ? (
                  <label key={key}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}:
                    <div className={styles.uploader}>
                      {loading ? (
                        <div>Loading...</div>
                      ) : (
                        <div>
                          <input
                            type="file"
                            multiple
                            onChange={handleFileChange}
                          />
                          <button onClick={handleUpload}>Upload</button>
                        </div>
                      )}
                      <img style={{ width: "100px" }} src={savedFiles} alt="" />
                    </div>
                  </label>
                ) : (
                  <label key={key}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}:
                    <input
                      type="text"
                      name={key}
                      value={value}
                      onChange={handleInputChange}
                    />
                  </label>
                )
              )}
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
