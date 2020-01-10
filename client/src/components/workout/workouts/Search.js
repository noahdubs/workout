import React from 'react'

const Search = props => {
    return (
        <div className="all-wo-h">
            <h3 className="all-wo-h1">All Workouts</h3>
            <input className="wo-search-bar" 
                type="text" 
                placeholder="Search Workouts"
                onChange={props.onChange} 
                value={props.value}
                name="search"   
            />
            <button className="btn-search-icon" onClick={props.onClick}>
                <i class="fas fa-search"></i>
            </button>
        </div>
    )
}

export default Search 