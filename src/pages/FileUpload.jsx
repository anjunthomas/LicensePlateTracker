import "../styles/DragDrop.css" // CSS styling
import React from 'react';
import DragDrop from "../components/DragDrop"

export default function FileUpload() {

    return (
      <div>
        <h1>License Plate Detector</h1>
        <p className = "p">
          Welcome to our license plate detector! Please drag or drop a
          picture/video to begin scanning license plates.
        </p>
        <DragDrop />
      </div>
    );
}