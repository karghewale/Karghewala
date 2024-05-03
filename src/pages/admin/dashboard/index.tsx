import axios from "axios";
// import { SetStateAction, useState } from "react";
import image from "../../gallery/assets/g10.png";

export const Dashboard = () => {
  // const [file, setFile] = useState(null);

  const handleUpload = async () => {
    const form = new FormData();
    form.append("key", "6d207e02198a847aa98d0a2a901485a5");
    form.append("source", image);
     form.append("format", "json");

    const options = {
      method: "POST",
      url: "https://freeimage.host/api/1/upload",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: form,
      mode: "no-cors", 
    };

    try {
      const response = await axios.request(options);
      console.log("Upload successful",response); // Response will be opaque
    } catch (error) {
      console.error("Upload failed", error);
    }
  };

  return (
    <div>
      {/* <input type="file" value={file} /> */}
      <button onClick={handleUpload}>Upload Image</button>
    </div>
  );
};
