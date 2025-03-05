import React from 'react'
import "./SearchBar.css";

import { FaSearch } from "react-icons/fa";

export default function SearchBarChild () {
    return (
        <div className="input-wrapper">
        <FaSearch id="search-icon"/>
        <input 
            type="text" 
            className="input" 
            placeholder="Type to search.."/>
        </div>
    )
}