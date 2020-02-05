import React from 'react'

const Search = props => {
    return (
        <div className="all-wo-h">
            <h3 className="all-wo-h1">All Workouts</h3>
            <input id="wo-search-bar" 
                type="text" 
                placeholder="Search Workouts"
                onChange={props.onChange} 
                value={props.value}
                name="search" 
                onKeyDown={props.handleEnter}  
            />
            <button className="btn-search-icon" onClick={props.onClick} id="myBTN">
                <i class="fas fa-search"></i>
            </button>
        </div>
    )
}

export default Search 