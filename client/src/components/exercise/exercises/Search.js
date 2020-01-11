import React from 'react'

const Search = props => {
    return (
        <div className="all-wo-h">
            <h3 className="all-wo-h1">All exercises</h3>
            <input id="wo-search-bar"
                type="text" 
                name="search" 
                placeholder="Search Exercises" 
                value={props.search} 
                onChange={props.handleChange} 
            />
            <button onClick={props.handleSearch} className="btn-search-icon">
                <i class="fas fa-search"></i>
            </button>
        </div>
    )
}

export default Search 