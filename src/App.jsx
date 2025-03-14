import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FileUpload from "./pages/FileUpload";
import Results from "./pages/Results";
import UserDataEntry from "./pages/UserDataEntry";

export default function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} /> {/*Path to home */}
            <Route path="/upload" element={<FileUpload />} /> {/*Path to FileUpload Page */}
            <Route path="/database" element={<Results />} /> {/*Path to Results Page */}
            <Route path="/data-entry" element={<UserDataEntry />} /> 
        </Routes>
    </Router>
  );
}