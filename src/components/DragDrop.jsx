import React from 'react';
import { useDropzone } from 'react-dropzone';
import "../styles/DragDrop.css"

export default function DragDrop(){
    const { getRootProps, getInputProps } = useDropzone();
    return(
        <div {...getRootProps} className = "file-upload">
            <input {...getInputProps()} />
        </div>
    )
}