import React from 'react'

const Search = props => {
    return (
        <div className="form-group wo-search">
            <h1 className="all-wo-h">All Workouts</h1>
            <div>
                <input type="text" name="search" value={props.value} onChange={props.onChange} className="wo-search-bar" />
                <button className="btn wo-search-btn" onClick={props.onClick}>Search</button>
            </div>
        </div>
    )
}

export default Search 