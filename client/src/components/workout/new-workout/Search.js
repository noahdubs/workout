import React from 'react'

const Search = props => {
    return (
        <div className="all-wo-h">
            <input id="new-wo-search-bar" 
                type="text" 
                placeholder="Search exercises"
                onChange={props.handleChange} 
                value={props.value}
                name="search"   
                onKeyDown={props.handleEnter}
            />
            <button className="btn-search-icon" onClick={props.handleSearch} id="new-wo-btn">
                <i class="fas fa-search"></i>
            </button>
        </div>
    )
}

export default Search 