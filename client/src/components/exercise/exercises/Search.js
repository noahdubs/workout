import React from 'react'

const Search = props => {
    return (
        <div className="form-group new-wo-search-div search-ex">
            <h1>All exercises</h1>
            <input type="text" name="search" placeholder="search" value={props.search} onChange={props.handleChange} className="new-wo-searchBar ex-search" />
            <button onClick={props.handleSearch} className="btn ex-search-btn">Search</button>
        </div>
    )
}

export default Search 