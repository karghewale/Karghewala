import axios from "axios";
import { useState } from "react";

export const Dashboard = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event : any) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedImage) {
      console.log("Please select an image.");
      return;
    }

    let formData = new FormData();
    formData.append("image_file", selectedImage);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://image-hosting-oxpx.onrender.com/img/imagetourl/",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};
