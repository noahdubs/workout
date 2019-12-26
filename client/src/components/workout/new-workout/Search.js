import React from 'react'

const Search = props => {
    return (
        <div className="form-group new-wo-search-div">
            <label for="search">
                <input type="text" name="search" placeholder="search" value={props.value} onChange={props.handleChange} className="new-wo-searchBar" />
            </label>
            <button onClick={props.handleSearch} className="btn new-wo-search-btn workout-btn-inverse">Search</button>
            <a href="/exercise/new" className="btn new-wo-ex-btn workout-btn">Create a new exercise</a>
        </div>
    )
}

export default Search 