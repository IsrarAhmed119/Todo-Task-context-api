import React, { useState, useEffect } from "react";
const SingleFileUpload = () => {
  const [selectedFile, setselectedFile] = useState();

  const onFileChange = (event) => {
    console.log("onFileChange---->>");

    setselectedFile(event.target.files[0]);
  };

  // On file upload (click the upload button)
  const onFileUpload = () => {
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append("myFile", selectedFile, selectedFile.name);

    // Details of the uploaded file
    console.log("onFileUpload---->>", selectedFile);
    console.log(formData.get("myFile")); // reference by form input's `name` tag

    // Request made to the backend api
    // Send formData object
    // axios.post("api/uploadfile", formData);
  };

  // File content to be displayed after
  // file upload is complete
  const fileData = () => {
    if (selectedFile) {
      return (
        <div>
          <h2>File Details:</h2>
          <p>File Name: {selectedFile.name}</p>
          <p>File Type: {selectedFile.type}</p>
          <p>
            Last Modified:
            {selectedFile.lastModifiedDate.toDateString()}
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  };

  return (
    <>
      <h3>SingleFileUpload--------Compo--</h3>

      <div className="mainDiv">
        <h3>Single File Upload using React!</h3>
        <div>
          <input type="file" onChange={onFileChange} />
          <button disabled={!selectedFile} onClick={onFileUpload}>
            Upload!
          </button>
        </div>
        {fileData()}
      </div>
    </>
  );
};

export default SingleFileUpload;
