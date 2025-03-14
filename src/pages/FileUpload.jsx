import "../styles/DragDrop.css" // CSS styling
import React from 'react';
import DragDrop from "../components/DragDrop"
import { useNavigate } from "react-router-dom";

export default function FileUpload() {

    const navigate = useNavigate();

    return (
      <div>
        <h1>License Plate Detector</h1>
        <p className = "p">
          Welcome to our license plate detector! Please drag or drop a
          picture/video to begin scanning license plates.
        </p>
        <DragDrop />

        {/* goes to the data entry page */}
        <button onClick={() => navigate("/data-entry")}>Enter Vehicle Information</button>
      </div>
    );
}