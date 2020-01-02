import React from 'react'

const Search = props => {
    return (
        <div className="form-group new-wo-search-div">
            <input type="text" name="search" placeholder="search" value={props.value} onChange={props.handleChange} className="new-wo-searchBar" />
            <button onClick={props.handleSearch} className="btn new-wo-search-btn workout-btn-inverse">Search</button>
        </div>
    )
}

export default Search 