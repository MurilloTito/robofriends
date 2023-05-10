import React from "react";

const SearchBox = ({ searchChange }) => {
    return (
        <div className="pa2 tc mb3">
            <input className="pa3 ba b--green bg-lightest-blue" type="search" placeholder="search robots..." id="searchBox" onChange={searchChange}></input>
        </div>
    );
}

export default SearchBox;