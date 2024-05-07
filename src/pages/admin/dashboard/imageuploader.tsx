import { ChangeEvent, useState } from "react";
import axios from "axios";

export const Imageuploader = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [savedFiles, setSavedFiles] = useState("");

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFiles(Array.from(event.target.files)); // Convert FileList to File array
    }
  };

  const handleUpload = async () => {
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
      console.log(response.data.hosted_url);
      setSavedFiles(response.data.hosted_url);
      alert("Upload successful!");
    } catch (error) {
      console.error("Error uploading files:", error);
      alert("Error uploading files");
    }
  };

  return (
    <div>
      <input type="file" multiple onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      <img src={savedFiles} alt="" />
    </div>
  );
};
