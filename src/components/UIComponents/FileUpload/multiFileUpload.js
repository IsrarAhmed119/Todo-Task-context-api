import React, { useState, useEffect } from "react";
const MultiFileUpload = () => {
  const [selectedFiles, setselectedFiles] = useState();

  const onFileChange = (event) => {
    console.log("onFileChange---->>");

    setselectedFiles(event.target.files);
  };

  // On file upload (click the upload button)
  const onFileUpload = () => {
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append(`myFile[${i}]`, selectedFiles[i]);
      //   console.log("selectedFiles[i]---->>", selectedFiles[i]);
    }

    // Details of the uploaded file
    // console.log("onFileUpload---->>", selectedFiles);

    for (let i = 0; i < selectedFiles.length; i++) {
      //  formData.append(`myFile[${i}]`, selectedFiles[i]);
      console.log("File" + i, formData.get(`myFile[${i}]`));
    }
  };
  return (
    <>
      <h3>MultiFileUpload--------Compo--</h3>
      <div className="mainDiv">
        <h3>Multi File Upload using React!</h3>
        <div>
          <input type="file" multiple onChange={onFileChange} />
          <button disabled={!selectedFiles} onClick={onFileUpload}>
            Upload!
          </button>
        </div>
      </div>
    </>
  );
};

export default MultiFileUpload;
