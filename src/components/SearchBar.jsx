import "./SearchBar.css";
import SearchBarChild from "./SearchBarChild";

// handles the layout of the searchbar
export default function SearchBar({onSearch}){  // received onSearch as a prop
    return ( 
        <div className="SearchBar">
            <div className="search-bar-container">
                <SearchBarChild onSearch={onSearch}/> {/*Passing search to search bar child */}
            </div>
        </div> 
    );  
}