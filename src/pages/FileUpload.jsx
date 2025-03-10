import "../styles/DragDrop.css" // CSS styling
import React from 'react';
import DragDrop from "../components/DragDrop"
import { useDropzone } from 'react-dropzone';

export default function FileUpload() {

    return (
      <div>
        <h1>License Plate Detector</h1>
        <p>
          Welcome to our license plate detector! Please drag or drop a
          picture/video to begin.
        </p>
        <DragDrop />
      </div>
    );
}