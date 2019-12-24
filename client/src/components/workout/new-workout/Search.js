import React from 'react'

const Search = props => {
    return (
        <div className="form-group">
            <label for="search">
                <input type="text" name="search" placeholder="search" value={props.value} onChange={props.handleChange} />
            </label>
            <button onClick={props.handleSearch}>Search</button>
        </div>
    )
}

export default Search 