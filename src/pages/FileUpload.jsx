import "../styles/DragDrop.css" // CSS styling
import React from 'react';
import { useDropzone } from 'react-dropzone';

export default function FileUpload() {

    return (
      <div>
        <h1>License Plate Detector</h1>
        <p>Welcome to our license plate detector! Please drag or drop a
          picture/video to begin.
        </p>
        {/*Let's the user choose one or more files from their device storage*/}
      </div>
    );
}