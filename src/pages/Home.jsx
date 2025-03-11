import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home(){
    const navigate = useNavigate();

    return (
        <div>
            <h1>Welcome to the License Plate Detector</h1>
            <p>Do you want to upload a file, or view the existing database?</p>

            <button onClick={() => navigate("/upload")}>Upload a File</button>
            <button onClick={() => navigate("/database")}>View Database</button>
        </div>
    )
}