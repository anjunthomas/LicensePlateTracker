import "../styles/DragDrop.css"

export default function FileUpload() {
    return (
      <div>
        <h1>License Plate Detector</h1>
        <p>Welcome to our license plate detector! Please drag or drop a
          picture/video to begin.
        </p>
        <input type="file" /> {/*Let's the user choose one or more files from their device storage*/}
      </div>
    );
}