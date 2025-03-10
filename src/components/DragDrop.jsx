import React from 'react';
import { useState } from 'react'
import { useDropzone } from 'react-dropzone';
import "../styles/DragDrop.css"

// getRootProps
    // Provides props that should be spread on the container element 
    // (div) that acts as the drop zone.
    // Handles drag and drop functionality
    // Attaches drag-and-drop event listeners (onDragEnter, onDragLeave, onDrop)

// getInputProps
    // Provides props for the hidden <input> element that 
    // allows users to select files by clicking.

export default function DragDrop(){
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const { getRootProps, getInputProps } = useDropzone({
        onDrop: (acceptedFiles) => {
            setUploadedFiles(acceptedFiles);
        }
    });
    return(
        <div {...getRootProps()} className = "file-upload">
            <input {...getInputProps()} />
            <p>Drag and drop files here or click to browse.</p>
            <ul>
                {uploadedFiles.map((file) => (
                    <li key={file.name}>{file.name}</li>
                ))}
            </ul>
        </div>
    )
}