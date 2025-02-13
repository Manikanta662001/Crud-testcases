import React, { useState } from "react";
import axios from "axios";

function Apicall(props) {
  const [posts, setposts] = useState(null);
  const [error, seterror] = useState("");
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const handleApicall = async () => {
    let response;
    try {
      response = await axios.get(props.url);
      if (response.status === 400) {
        throw new Error(response.data.message);
      }
      setposts(response.data);
    } catch (err) {
      seterror(err.message);
    }
  };
  console.log(error, posts, file, uploadProgress, "1717");
  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };
  const handleUploadClick = async () => {
    const formData = new FormData();
    formData.append("file", file);
    const response = await axios.post(
      "http://localhost:5000/upload-file",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          // Calculate progress percentage
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / (progressEvent.total || 1)
          );
          setUploadProgress(percentCompleted);
        },
      }
    );
  };
  return (
    <div>
      <button onClick={handleApicall}>Api call</button>
      {error && (
        <span
          className="error"
          data-testId={"error-span"}
          style={{ color: "red" }}
        >
          {error}
        </span>
      )}
      <ul>
        {posts?.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
      <input type="file" onChange={handleFileUpload} />
      <button onClick={handleUploadClick}>Upload</button>
      <span>Uploading - {uploadProgress}</span>
      <progress value={uploadProgress} max="100">
        {uploadProgress}%
      </progress>
    </div>
  );
}

export default Apicall;
