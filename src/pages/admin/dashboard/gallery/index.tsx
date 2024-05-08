import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import { deleteGallery, getGallery, insertGallery } from "../../api";
import styles from "./index.module.css";
import { MdDelete } from "react-icons/md";

type Props = {};

export const GalleryAdmin = (_props: Props) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [savedFiles, setSavedFiles] = useState("");
  const [loading, setLoading] = useState(false); // State to track loading status
  const [data, setData] = useState<any[]>([]);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFiles(Array.from(event.target.files)); // Convert FileList to File array
    }
  };

  const handleUpload = async () => {
    setLoading(true); // Set loading to true when upload starts

    const formData = new FormData();

    // Append files to formData
    selectedFiles.forEach((file) => {
      formData.append("image_file", file, file.name);
    });

    const config = {
      method: "post",
      url: "https://imgtourl2.vercel.app/imagetourl/",
      headers: {
        // Removed Content-Type to let the browser set it with the correct boundary
        Accept: "*/*",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      data: formData,
      maxBodyLength: Infinity,
    };

    try {
      const response = await axios(config);
      //   console.log(response.data.hosted_url);
      setSavedFiles(response.data.hosted_url);
      await insertGallery(response.data.hosted_url);
      await handleFetchDetails();
    } catch (error) {
      console.error("Error uploading files:", error);
      alert("Error uploading files");
    } finally {
      setLoading(false); // Set loading to false when upload completes
    }
  };

  const handleFetchDetails = async () => {
    try {
      const response = await getGallery();
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

  const handleDelete = async (value: any) => {
    try {
      await deleteGallery(value);
      const updatedData = data.filter((item) => item.id !== value);
      setData(updatedData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.uploader}>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            <input type="file" multiple onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
          </>
        )}
        <img src={savedFiles} alt="" />
      </div>

      <div className={styles.gallery}>
        <h1>Gallery</h1>
        <div className={styles.galleryWrapper}>
          {data?.reverse().map((item, index) => (
            <div key={index} className={styles.galleryItem}>
              <button onClick={() => handleDelete(item.id)}>
                <MdDelete />
              </button>
              <img key={index} src={item.image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
