import React from 'react'
import { useState } from 'react'; // built in React hook
import "../styles/SearchBar.css";
import { FaSearch } from "react-icons/fa"; // import to get search icon

// handling user input
export default function SearchBarChild ({onSearch}) {
    const [input, setInput] = useState("");

    // stores what user is currently typing inside the input field
    const handleChange = (value) => {
        setInput(value); // updates input field value instantly
        onSearch(value); // sends value to - parent Results.jsx
    }

    return (
        <div className="input-wrapper">
            <FaSearch id="search-icon"/>
            <input 
                type="text" 
                className="input" 
                placeholder="Type to search.." 
                value={input} // binds input field to react state
                // {/*updates input state with latest value typed by user */}
                onChange={(e) => handleChange(e.target.value)}/>
        </div>
    )
}