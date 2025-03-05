import "./SearchBar.css";
import { useState } from 'react'; // built in React hook
import SearchBarChild from "./SearchBarChild";
<SearchBarChild className="jsx"></SearchBarChild>

export default function SearchBar(){
    return ( 
        <div className="SearchBar">
            <div className="search-bar-container">
                <SearchBarChild />
            </div>
        </div> 
    );  
}
