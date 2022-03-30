import React, {useState} from "react";
import {GoSearch} from 'react-icons/go';
import "./Search.css";
function SearchButton({handleKeyPress}) {
    const [form, setForm] = useState("");

    return (
        <div className="search-container">
            <form>
                <input
                    className="search"
                    id="searchleft"
                    name="search"
                    placeholder="Search"
                    value={form}
                    onChange={(e) => {setForm(e.target.value)}}
                    onKeyDown={handleKeyPress}
                />
                <label className="search-btn" htmlFor="searchleft">
                    <span className="mglass"><GoSearch color="white" size={22}/></span>
                </label>
            </form>
        </div>
    );
}

export default SearchButton;
